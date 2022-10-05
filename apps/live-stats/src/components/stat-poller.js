import { useEffect, useState } from 'react';

import { http } from '@crowdsignal/http';

export const fetchStat = ( name, value ) =>
	http( {
		host: 'https://api.crowdsignal.com',
		path: `/v4/admin/stats/${ name }/${ value }`,
		method: 'GET',
		mode: 'cors',
		credentials: 'include',
	} );

const SingleStatPoller = ( props ) => {
	// const [ initialized, setInitialized ] = useState( false );
	const [ stat, setStat ] = useState( {} );

	const pollStatDelta = () => {
		return fetchStat( props.statName, props.statValue ).then(
			( { data } ) => {
				setStat( {
					count: data[ 0 ].views,
					delta: stat.count ? data[ 0 ].views - stat.count : 0,
				} );
			}
		);
	};

	useEffect( () => {
		setTimeout( pollStatDelta, Math.random() * 1000 );
	}, [] );

	useEffect( () => {
		const ticker = setInterval( () => {
			pollStatDelta().catch( ( err ) => {
				// eslint-disable-next-line
				console.error( err );
			} );
		}, props.interval || 5000 );

		return () => ticker && clearInterval( ticker );
	} );

	if ( ! props.statName || ! props.statValue ) {
		return null;
	}

	const smallText = {
		fontSize: '10px',
	};
	const bigStat = {
		fontSize: '64px',
	};

	const topText =
		props.description || `${ props.statName } / ${ props.statValue }`;

	return (
		<div
			style={ {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				padding: '8px',
			} }
		>
			<div style={ smallText }>{ topText }</div>
			<div style={ bigStat }>{ stat.delta || 0 }</div>
			<div style={ smallText }>({ stat.count || 0 })</div>
		</div>
	);
};

export default SingleStatPoller;
