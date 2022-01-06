/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { useColorStyles } from '@crowdsignal/styles';
import { FormInputWrapper, FormTextInput } from '../components';
import { useField } from '@crowdsignal/form';

const TextInput = ( { attributes } ) => {
	const { inputProps } = useField( {
		name: `q_${ attributes.clientId }[text]`,
	} );

	return (
		<FormInputWrapper
			className="crowdsignal-forms-text-input-block"
			style={ { ...useColorStyles( attributes ) } }
		>
			<FormInputWrapper.Label className="crowdsignal-forms-text-input-block__label">
				<RichText.Content value={ attributes.label } />
			</FormInputWrapper.Label>
			<FormTextInput
				style={ {
					width: attributes.inputWidth,
					height: `${ attributes.inputHeight }px`,
				} }
				{ ...inputProps }
			/>
		</FormInputWrapper>
	);
};

export default TextInput;
