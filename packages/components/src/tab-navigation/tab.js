/**
 * External dependencies
 */
import classnames from 'classnames';

const Tab = ( { children, href, isSelected, isDisabled, ...props } ) => {
	const ButtonComponent = href ? 'a' : 'button';

	const classes = classnames( 'tab-navigation__item', {
		'is-selected': isSelected,
		'is-disabled': isDisabled,
	} );

	return (
		<li className={ classes }>
			<ButtonComponent
				className="tab-navigation__button"
				href={ href }
				onMouseEnter
				onMouseLeave
				{ ...props }
			>
				{ children }
			</ButtonComponent>
		</li>
	);
};

export default Tab;
