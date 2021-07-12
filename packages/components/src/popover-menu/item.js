/**
 * External dependencies
 */
import classnames from 'classnames';

const PopoverMenuItem = ( { children, className, ...props } ) => {
	const Element = !! props.href ? 'a' : 'button';
	const classes = classnames( 'popover-menu__item', className );

	return (
		<Element className={ classes } { ...props }>
			{ children }
		</Element>
	);
};

export default PopoverMenuItem;
