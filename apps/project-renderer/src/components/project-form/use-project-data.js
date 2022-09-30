/**
 * External dependencies
 */
import { useCallback, useEffect, useState } from '@wordpress/element';
import { isNil } from 'lodash';

/**
 * Internal dependencies
 */
import { setHostOption } from '@crowdsignal/http';
import { fetchProjectForm, submitProjectForm } from '@crowdsignal/rest-api';

export const useProjectData = ( { projectCode, preview = false } ) => {
	const [ theme, setTheme ] = useState();
	const [ startDate, setStartDate ] = useState();
	const [ responseHash, setResponseHash ] = useState();
	const [ currentPage, setCurrentPage ] = useState( 0 );
	const [ totalPages, setTotalPages ] = useState( 1 );
	const [ pageContent, setPageContent ] = useState();
	const [ navigationSettings, setNavigationSettings ] = useState( {} );
	const [ isCompleted, setIsCompleted ] = useState( false );
	const [ showBranding, setShowBranding ] = useState( false );

	useEffect( () => {
		if ( preview ) {
			setHostOption( 'https://api.crowdsignal.com', 'mode', 'cors' );
			setHostOption(
				'https://api.crowdsignal.com',
				'credentials',
				'include'
			);
		}

		const query = preview && { preview };
		fetchProject( projectCode, query );
	}, [ projectCode, preview ] );

	const fetchProject = ( code, query ) => {
		fetchProjectForm( code, query )
			.then( ( res ) => {
				if ( ! res.data || ! res.data.content ) {
					throw new Error( 'Empty response' );
				}

				setTheme( res.data.theme );
				setTotalPages( res.data.totalPages );
				setShowBranding( res.data.branding );
				setStartDate(
					res.data.startTime || Math.round( Date.now() / 1000 )
				);

				if ( res.data.navigation ) {
					setNavigationSettings( res.data.navigation );
				}

				if ( ! isNil( query.page ) ) {
					setCurrentPage( query.page );
				}

				return setPageContent( res.data.content );
			} )
			.catch( ( err ) => {
				// should get some block here to show the error
				setPageContent( [] );
				// eslint-disable-next-line
				console.log( err );
			} );
	};

	const handleSubmit = useCallback(
		( data ) => {
			if ( ! data ) {
				data = {};
			}

			const form = new window.FormData();
			form.append( 'p', currentPage );
			form.append( 'r', responseHash );
			form.append( 'startTime', startDate );
			Object.keys( data ).forEach( ( key ) => {
				if ( Array.isArray( data[ key ] ) ) {
					data[ key ].forEach( ( value ) =>
						form.append( key, value )
					);
				} else if ( data[ key ] instanceof window.FileList ) {
					// TODO: figure out how to work with multiple files
					form.append( key, data[ key ][ 0 ] );
				} else {
					form.append( key, data[ key ] );
				}
			} );

			const query = preview && { preview };

			return (
				submitProjectForm( projectCode, form, query )
					.then( ( { data: json } ) => {
						if ( ! json || ! json.content ) {
							throw new Error( 'Empty response' );
						}

						setPageContent( json.content );
						setIsCompleted( json.done );
						setResponseHash( json.r );
						setCurrentPage( parseInt( json.p, 10 ) );
						window.scrollTo( 0, 0 );
					} )
					// eslint-disable-next-line no-console
					.catch( ( err ) => console.error( err ) )
			);
		},
		[ currentPage, responseHash, startDate ]
	);

	return {
		pageContent,
		currentPage,
		totalPages,
		submitPage: ! isCompleted && handleSubmit,
		fetchProject,
		theme,
		navigationSettings,
		showBranding,
	};
};
