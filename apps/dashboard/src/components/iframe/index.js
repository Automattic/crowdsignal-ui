/**
 * External dependencies
 */
import { useEffect, useRef, useState } from '@wordpress/element';
import { uniqueId } from 'lodash';

const IFrame = ( { title = uniqueId(), ...props } ) => {
	const [ frameHeight, setFrameHeight ] = useState( 0 );

	const frame = useRef();

	useEffect( () => {
		frame.current.addEventListener( 'load', () => {
			setFrameHeight( frame.current.contentDocument.body.scrollHeight );
		} );
	}, [] );

	return (
		<iframe
			ref={ frame }
			frameBorder="0"
			height={ `${ frameHeight }px` }
			scrolling="no"
			title={ title }
			{ ...props }
		/>
	);
};

export default IFrame;
