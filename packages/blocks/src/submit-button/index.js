/**
 * Internal dependencies
 */
import { Button, ButtonSpinner } from '../components';
import { useFormState } from '@crowdsignal/form';

const SubmitButton = ( { attributes, className } ) => {
	const { isSubmitting } = useFormState();

	const RenderedButton = isSubmitting ? ButtonSpinner : Button;

	return (
		<RenderedButton
			attributes={ attributes }
			className={ className }
			type="submit"
		>
			{ attributes.label }
		</RenderedButton>
	);
};

export default SubmitButton;
