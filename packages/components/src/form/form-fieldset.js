/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import FormRadio from '../form/form-radio';
import FormLabel from '../form/form-label';
import FormSettingExplanation from '../form/form-setting-explanation';

const StyledFormFieldset = styled.div`
	margin: 0 0 16px;
	padding: 0;

	&:last-child {
		margin-bottom: 0;
	}
`;

const appendLabel = ( component ) => component === FormRadio;

const FormFieldset = ( {
	error,
	explanation,
	inputComponent: InputComponent,
	label,
	name,
	required,
	...props
} ) => {
	const id =
		InputComponent === FormRadio ? `${ name }-${ props.value }` : name;

	return (
		<StyledFormFieldset>
			{ label && ! appendLabel( InputComponent ) && (
				<FormLabel htmlFor={ id } required={ required }>
					{ label }
				</FormLabel>
			) }

			<InputComponent
				id={ id }
				name={ name }
				error={ !! error }
				{ ...props }
			/>

			{ label && appendLabel( InputComponent ) && (
				<FormLabel htmlFor={ id } required={ required }>
					{ label }
				</FormLabel>
			) }

			{ explanation && (
				<FormSettingExplanation>{ explanation }</FormSettingExplanation>
			) }
		</StyledFormFieldset>
	);
};

export default FormFieldset;
