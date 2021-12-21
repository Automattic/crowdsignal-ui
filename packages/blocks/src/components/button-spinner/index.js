/**
 * External dependencies
 */
import { Spinner } from '@wordpress/components';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import Button from '../button';

import './style.scss';

const ButtonSpinner = ( { children, className, ...props } ) => {
	return (
		<Button
			className={ classnames(
				'crowdsignal-forms-button-spinner',
				className
			) }
			{ ...props }
		>
			<span className="crowdsignal-forms-button-spinner__content">
				{ children }
			</span>
			<Spinner />
		</Button>
	);
};

export default ButtonSpinner;
