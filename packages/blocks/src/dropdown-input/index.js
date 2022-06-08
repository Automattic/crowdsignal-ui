/**
 * External dependencies
 */
import { RawHTML, useState } from '@wordpress/element';
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
	const { error } = useField( {
		name: `q_${ attributes.clientId }[choice]`,
		validation: ( value ) => {
			if ( attributes.mandatory && isEmpty( value ) ) {
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

	const [ selectedOption, setSelectedOption ] = useState( null );

	const test = ( value ) => {
		setSelectedOption( value );
	};

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
				onChange={ test }
				value={ selectedOption }
			/>
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</FormInputWrapper>
	);
};

DropdownInput.blockName = 'crowdsignal-forms/dropdown-input';

export default DropdownInput;
