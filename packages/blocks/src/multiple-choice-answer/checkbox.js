/**
 * Internal dependencies
 */
import { useColorStyles } from '@crowdsignal/styles';
import FormCheckbox from '../components/form-checkbox';

const Checkbox = ( { attributes, className, inputProps } ) => {
	return (
		<FormCheckbox.Label
			className={ className }
			style={ useColorStyles( attributes ) }
		>
			<FormCheckbox { ...inputProps } />

			{ attributes.label }
		</FormCheckbox.Label>
	);
};

export default Checkbox;
