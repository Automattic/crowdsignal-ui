/**
 * External dependencies
 */
import {
	forwardRef,
	RawHTML,
	useCallback,
	useEffect,
	useLayoutEffect
} from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { ToggleMode } from './constants';

/**
 * Style dependencies
 */
import { ToggleWrapper, Toggle } from './styles/toggle-styles.js';

const FeedbackToggle = ( { isOpen, onClick, onToggle, settings }, ref ) => {
	const { position, style, text, toggleMode } = settings;
	const [ y, x ] = position.split( ' ' );

	useLayoutEffect( onToggle, [ isOpen ] );

	useEffect( () => {
		if ( isOpen || toggleMode !== ToggleMode.PAGE_LOAD ) {
			return;
		}

		onClick();
	}, [ toggleMode, isOpen ] );

	const handleHover = useCallback( () => {
		if ( isOpen || settings.toggleMode !== ToggleMode.HOVER ) {
			return;
		}

		onClick();
	}, [ settings.toggleMode, isOpen ] );

	return (
		<ToggleWrapper
			align={ x }
			isVertical={ y === 'center' }
		>
			<Toggle
				as="button"
				ref={ ref }
				vertical={ y === 'center' }
				onClick={ onClick }
				onMouseEnter={ handleHover }
			>
				{ ! isOpen && (
					<RawHTML>{ text.toggle }</RawHTML>
				) }

				{ isOpen && (
					<>
						{ __( 'Close', 'feedback-widget' ) }
					</>
				) }
			</Toggle>
		</ToggleWrapper>
	);
};

export default forwardRef( FeedbackToggle );
