/**
 * External dependencies
 */
import { RawHTML } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { isEmpty } from 'lodash';

/**
 * Internal dependencies
 */
import {
	ErrorMessage,
	FormDropdownInput,
	FormInputWrapper,
} from '../components';
import { useField } from '@crowdsignal/form';

const DropdownInput = ( { attributes, className } ) => {
	const {
		error,
		inputProps: { onChange, value },
	} = useField( {
		name: `q_${ attributes.clientId }[choice]`,
		type: 'dropdown',
		defaultValue: attributes.multipleChoice ? [] : '',
		validation: ( val ) => {
			if ( attributes.mandatory && isEmpty( val ) ) {
				return __( 'This field is required', 'blocks' );
			}
		},
	} );

	const classes = classnames(
		className,
		'crowdsignal-forms-dropdown-input-block',
		{
			'is-required': attributes.mandatory,
			'is-error': error,
		}
	);

	const styles = {
		'--cs--style--button--foreground': attributes.textColor,
		'--cs--style--button--background':
			attributes.backgroundColor || attributes.gradient,
	};

	const defaultButtonLabel = attributes.multipleChoice
		? __( 'Choose the options', 'blocks' )
		: __( 'Choose an option', 'blocks' );

	return (
		<FormInputWrapper className={ classes } style={ { ...styles } }>
			<FormInputWrapper.Label className="crowdsignal-forms-dropdown-input-block__label">
				<RawHTML>{ attributes.label }</RawHTML>
			</FormInputWrapper.Label>
			<FormDropdownInput
				buttonLabel={ attributes.buttonLabel || defaultButtonLabel }
				options={ attributes.options }
				onChange={ onChange }
				value={ value }
				width={ attributes.inputWidth }
				multipleChoice={ attributes.multipleChoice }
			/>
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</FormInputWrapper>
	);
};

DropdownInput.blockName = 'crowdsignal-forms/dropdown-input';

export default DropdownInput;
