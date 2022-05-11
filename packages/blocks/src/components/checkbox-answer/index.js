/**
 * External dependencies
 */
import { RawHTML } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { useColorStyles } from '@crowdsignal/styles';
import FormCheckbox from '../form-checkbox';

const CheckboxAnswer = ( { attributes, className, inputProps } ) => {
	return (
		<FormCheckbox.Label
			className={ className }
			style={ useColorStyles( attributes ) }
		>
			<FormCheckbox { ...inputProps } />

			<RawHTML>{ attributes.label }</RawHTML>
		</FormCheckbox.Label>
	);
};

export default CheckboxAnswer;
