/**
 * Internal dependencies
 */
import { Button } from '../components';

const PollAnswer = ( { attributes, className } ) => {
	const width = attributes.width ? `${ attributes.width }%` : null;

	return (
		<Button
			attributes={ attributes }
			className={ className }
			style={ {
				width,
			} }
		>
			{ attributes.label }
		</Button>
	);
};

export default PollAnswer;
