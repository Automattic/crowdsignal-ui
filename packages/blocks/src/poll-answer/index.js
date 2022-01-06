/**
 * Internal dependencies
 */
import { Button } from '../components';
import classnames from 'classnames';

const PollAnswer = ( { attributes, className } ) => {
	const width = attributes.width ? `${ attributes.width }%` : null;

	const classes = classnames(
		'crowdsignal-forms-poll-answer-block',
		className
	);

	return (
		<Button
			attributes={ attributes }
			className={ classes }
			style={ {
				width,
			} }
		>
			{ attributes.label }
		</Button>
	);
};

export default PollAnswer;
