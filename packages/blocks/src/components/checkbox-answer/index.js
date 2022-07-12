/**
 * External dependencies
 */
import { RawHTML } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { useColorStyles } from '@crowdsignal/styles';
import FormCheckbox from '../form-checkbox';

const CheckboxAnswer = ( {
	attributes,
	className,
	isMultiSelect,
	isSelected,
	onChange,
	value,
} ) => {
	const type = isMultiSelect ? 'checkbox' : 'radio';

	return (
		<FormCheckbox.Label
			className={ className }
			style={ useColorStyles( attributes ) }
		>
			<FormCheckbox
				checked={ isSelected }
				isMultiSelect={ isMultiSelect }
				onChange={ onChange }
				type={ type }
				value={ value }
			/>

			<RawHTML>{ attributes.label }</RawHTML>
		</FormCheckbox.Label>
	);
};

export default CheckboxAnswer;
