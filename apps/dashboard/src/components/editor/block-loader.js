/**
 * External dependencies
 */
import { useEffect, useRef } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';

const BlockLoader = ( { blocks } ) => {
	const { updateBlocksWithoutUndo } = useDispatch( 'isolated/editor' );

	// mark for do the update only the first time.
	const firstTime = useRef( true );

	useEffect( () => {
		if ( firstTime.current ) {
			firstTime.current = false;
			updateBlocksWithoutUndo( blocks );
		}
	}, [ blocks ] );
	return null;
};

export default BlockLoader;
