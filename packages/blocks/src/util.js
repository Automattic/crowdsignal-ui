/**
 * External dependencies
 */
import { forwardRef } from '@wordpress/element';
import classnames from 'classnames';

/**
 * Returns the current block style based on its className
 *
 * @param  {string} className Block class name
 * @return {string}           Block style
 */
export const getBlockStyle = ( className ) => {
	const styleClass = className && className.match( /is-style-([^\s]+)/i );
	return styleClass ? styleClass[ 1 ] : '';
};

/**
 * HOC to inject CSS classes into components
 *
 * @param  {Object} Component    Base component
 * @param  {string} hocClassName Css class to inject
 * @return {Object}              Component with injected CSS class
 */
export const withClassName = ( Component, hocClassName ) =>
	forwardRef( ( { className, ...props }, ref ) => (
		<Component
			ref={ ref }
			className={ classnames( hocClassName, className ) }
			{ ...props }
		/>
	) );
