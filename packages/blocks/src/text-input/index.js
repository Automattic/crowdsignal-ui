/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { useColorStyles } from '@crowdsignal/styles';
import { FormInputWrapper, FormTextInput } from '../components';
import { useField } from '@crowdsignal/form';

const TextInput = ( { attributes, className } ) => {
	const { inputProps } = useField( {
		name: `q_${ attributes.clientId }[text]`,
	} );

	const classes = classnames(
		'crowdsignal-forms-text-input-block',
		className
	);

	return (
		<FormInputWrapper
			className={ classes }
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
