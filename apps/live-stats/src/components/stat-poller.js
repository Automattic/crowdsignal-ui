import { useEffect, useState } from 'react';

const SingleStatPoller = ( props ) => {
	const [ count, setCount ] = useState( props.count || 0 );
	const [ diff, setDiff ] = useState( 0 );

	useEffect( () => {
		const ticker = setInterval( () => {
			window
				.fetch(
					`https://api.crowdsignal.com/v4/admin/stats/${ props.statName }/${ props.statValue }`,
					{
						credentials: 'include',
						mode: 'cors',
					}
				)
				.then( ( response ) => response.json() )
				.then( ( json ) => {
					if ( count ) {
						setDiff( json[ 0 ].views - count );
					}

					setCount( json[ 0 ].views );
				} )
				.catch( ( err ) => {
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
			<div style={ bigStat }>{ diff }</div>
			<div style={ smallText }>({ count })</div>
		</div>
	);
};

export default SingleStatPoller;
