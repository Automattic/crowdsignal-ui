/**
 * Internal dependencies
 */
import { Button } from '../components';

const SubmitButton = ( { attributes, className } ) => {
	return (
		<Button attributes={ attributes } className={ className } type="submit">
			{ attributes.label }
		</Button>
	);
};

export default SubmitButton;
