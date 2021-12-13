/**
 * Internal dependencies
 */
import { useColorStyles } from '@crowdsignal/styles';
import { FormTextInput } from '../components';
import { useField } from '@crowdsignal/form';

const TextInput = ( { attributes } ) => {
	const { inputProps } = useField( {
		name: `q_${ attributes.clientId }[text]`,
	} );

	return (
		<div
			className="crowdsignal-forms-text-input-block"
			style={ { ...useColorStyles( attributes ) } }
		>
			<label htmlFor={ attributes.clientId }>{ attributes.label }</label>
			<FormTextInput
				id={ attributes.clientId }
				style={ {
					width: attributes.inputWidth,
					height: `${ attributes.inputHeight }px`,
				} }
				{ ...inputProps }
			/>
		</div>
	);
};

export default TextInput;
