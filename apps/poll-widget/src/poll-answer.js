/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { useColorStyles } from '@crowdsignal/styles';

const PollAnswer = ( { attributes, className } ) => {
	const width = attributes.width ? `${ attributes.width }%` : null;

	return (
		<div className={ classnames( className, 'wp-block-button' ) }>
			<input
				type="button"
				className="wp-block-button__link"
				style={ {
					...useColorStyles( attributes ),
					width,
				} }
				value={ attributes.label }
			/>
		</div>
	);
};

export default PollAnswer;
