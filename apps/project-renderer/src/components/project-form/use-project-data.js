/**
 * External dependencies
 */
import { useCallback, useEffect, useState } from '@wordpress/element';

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
	const [ pageContent, setPageContent ] = useState();
	const [ isCompleted, setIsCompleted ] = useState( false );

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

		fetchProjectForm( projectCode, query )
			.then( ( res ) => {
				if ( ! res.data || ! res.data.content ) {
					throw new Error( 'Empty response' );
				}

				setTheme( res.data.theme );
				setStartDate(
					res.data.startTime || Math.round( Date.now() / 1000 )
				);
				return setPageContent( res.data.content );
			} )
			.catch( ( err ) => {
				// should get some block here to show the error
				setPageContent( [] );
				// eslint-disable-next-line
				console.log( err );
			} );
	}, [ projectCode, preview ] );

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
		submitPage: ! isCompleted && handleSubmit,
		theme,
	};
};
