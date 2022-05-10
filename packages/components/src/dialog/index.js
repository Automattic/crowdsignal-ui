/**
 * External dependencies
 */
import { useRef } from '@wordpress/element';
import { noop } from 'lodash';

/**
 * Internal dependencies
 */
import { useBlur } from '@crowdsignal/hooks';
import RootChild from '../root-child';

/**
 * Style dependencies
 */
import { DialogWrapper, DialogOverlay } from './styles.js';

const Dialog = ( { className, children, onRequestClose } ) => {
	const dialog = useRef();

	useBlur( onRequestClose || noop, [ dialog ] );

	return (
		<RootChild>
			<DialogOverlay>
				<DialogWrapper ref={ dialog } className={ className }>
					{ children }
				</DialogWrapper>
			</DialogOverlay>
		</RootChild>
	);
};

export default Dialog;
