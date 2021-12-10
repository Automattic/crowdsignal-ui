/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';

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
		<div style={ { ...useColorStyles( attributes ) } }>
			<RichText.Content value={ attributes.label } />
			<FormTextInput
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
