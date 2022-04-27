/**
 * External dependencies
 */
import classnames from 'classnames';
import { forwardRef } from '@wordpress/element';

const Tab = ( { children, href, isSelected, isDisabled, ...props }, ref ) => {
	const ButtonComponent = href ? 'a' : 'button';

	const classes = classnames( 'tab-navigation__item', {
		'is-selected': isSelected,
		'is-disabled': isDisabled,
	} );

	return (
		<li
			ref={ ref }
			className={ classes }
			onMouseEnter={ () => {} }
			onMouseLeave={ () => {} }
		>
			<ButtonComponent
				className="tab-navigation__button"
				href={ href }
				{ ...props }
			>
				{ children }
			</ButtonComponent>
		</li>
	);
};

export default forwardRef( Tab );
