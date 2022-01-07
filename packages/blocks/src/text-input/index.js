/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import classnames from 'classnames';
import { isNil } from 'lodash';

/**
 * Internal dependencies
 */
import { useColorStyles } from '@crowdsignal/styles';
import { ErrorMessage, FormInputWrapper, FormTextInput } from '../components';
import { useField } from '@crowdsignal/form';

const TextInput = ( { attributes, className } ) => {
	const { inputProps, error } = useField( {
		name: `q_${ attributes.clientId }[text]`,
		validation: ( value ) => {
			if ( attributes.mandatory && ( value === '' || isNil( value ) ) ) {
				return 'This field is required';
			}
		},
	} );

	const classes = classnames(
		className,
		'crowdsignal-forms-text-input-block',
		{
			'is-required': attributes.mandatory,
			'is-error': error,
		}
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
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</FormInputWrapper>
	);
};

export default TextInput;
