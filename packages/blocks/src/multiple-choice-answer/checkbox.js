/**
 * Internal dependencies
 */
import FormCheckbox from '../components/form-checkbox';

const Checkbox = ( { attributes, className, inputProps } ) => {
	return (
		<FormCheckbox.Label className={ className }>
			<FormCheckbox { ...inputProps } />

			{ attributes.label }
		</FormCheckbox.Label>
	);
};

export default Checkbox;
