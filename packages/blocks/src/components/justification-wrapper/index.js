/**
 * External dependencies
 */
import classnames from 'classnames';

export default ( { justification, children } ) => {
	const classes = classnames( {
		[ `justify` ]: justification,
		[ `justify-${ justification }` ]: justification,
	} );

	return justification ? (
		<div className={ classes }>{ children }</div>
	) : (
		<>{ children }</>
	);
};
