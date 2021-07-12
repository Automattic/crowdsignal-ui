/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Style dependencies
 */
import './style.scss';

const PageHeader = ( { children, className, ...props } ) => {
	const classes = classnames( 'page-header', className );

	return (
		<h1 className={ classes } { ...props }>
			{ children }
		</h1>
	);
};

export default PageHeader;
