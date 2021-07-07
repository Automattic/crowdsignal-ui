/**
 * External dependencies
 */
import classnames from 'classnames';

const Tab = ( { children, href, isSelected, ...props } ) => {
	const ButtonComponent = href ? 'a' : 'button';

	const classes = classnames( 'tab-navigation__item', {
		'is-selected': isSelected,
	} );

	return (
		<li className={ classes }>
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

export default Tab;
