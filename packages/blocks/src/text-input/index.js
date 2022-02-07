/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import classnames from 'classnames';
import { isEmpty } from 'lodash';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { useColorStyles } from '@crowdsignal/styles';
import { ErrorMessage, FormInputWrapper, FormTextInput } from '../components';
import { useField } from '@crowdsignal/form';

const TextInput = ( { attributes, className } ) => {
	const { inputProps, error } = useField( {
		name: `q_${ attributes.clientId }[text]`,
		fieldClientId: attributes.clientId,
		validation: ( value ) => {
			if ( attributes.mandatory && isEmpty( value ) ) {
				return __( 'This field is required', 'blocks' );
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
