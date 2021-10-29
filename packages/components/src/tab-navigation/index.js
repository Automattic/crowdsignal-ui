/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import Tab from './tab';

/**
 * Style dependencies
 */
import './style.scss';

/**
 * @param  {Object}  props
 * @param  {any[]}   props.children
 * @param  {string=} props.className
 */
const TabNavigation = ( { children, className } ) => {
	const classes = classnames( 'tab-navigation', className );

	return <ul className={ classes }>{ children }</ul>;
};

TabNavigation.Tab = Tab;

export default TabNavigation;
