/**
 * External dependencies
 */
import { RawHTML } from '@wordpress/element';
import classnames from 'classnames';

import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { useField } from '@crowdsignal/form';
import { ErrorMessage, CheckboxAnswer, FormInputWrapper } from '../components';

const SingleCheckbox = ( { attributes, className } ) => {
	const { error, fieldValue, onChange } = useField( {
		fieldName: `q_${ attributes.clientId }[text]`,
		validation: ( value ) => {
			if ( attributes.mandatory && ! value ) {
				return __( 'This field is required', 'blocks' );
			}
		},
	} );

	const isSelected = fieldValue === attributes.clientId;
	const classes = classnames(
		className,
		'crowdsignal-forms-simple-checkbox',
		'is-inline',
		{
			'is-required': attributes.mandatory,
			'is-error': error,
			[ `align${ attributes.align }` ]: attributes.align,
		}
	);

	const onChangeHandler = ( value ) => {
		if ( isSelected ) {
			onChange( '' );
		} else {
			onChange( value );
		}
	};
	// const style = {
	// 	height: attributes.inputHeight,
	// };

	return (
		<FormInputWrapper className={ classes }>
			<CheckboxAnswer
				attributes={ attributes }
				isMultiSelect
				isSelected={ isSelected }
				onChange={ onChangeHandler }
				value={ attributes.clientId }
			/>
			<FormInputWrapper.Label className="crowdsignal-forms-text-input-block__label">
				<RawHTML>{ attributes.mandatory }</RawHTML>
			</FormInputWrapper.Label>
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</FormInputWrapper>
	);
};

SingleCheckbox.blockName = 'crowdsignal-forms/single-checkbox';

export default SingleCheckbox;
