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
import { useColorStyles } from '@crowdsignal/styles';
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

	return (
		<FormInputWrapper
			className={ classes }
			style={ { ...useColorStyles( attributes ) } }
		>
			<FormInputWrapper.Label className="crowdsignal-forms-dropdown-input-block__label">
				<RawHTML>{ attributes.label }</RawHTML>
			</FormInputWrapper.Label>
			<FormDropdownInput
				buttonLabel={ attributes.buttonLabel }
				options={ attributes.options }
				onChange={ onChange }
				value={ value }
			/>
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</FormInputWrapper>
	);
};

DropdownInput.blockName = 'crowdsignal-forms/dropdown-input';

export default DropdownInput;
