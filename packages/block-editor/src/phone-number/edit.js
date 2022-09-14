/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { ResizableBox } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import {
	FormInputWrapper,
	FormTextInput,
	FormDropdownInput,
} from '@crowdsignal/blocks';
import { useColorStyles } from '@crowdsignal/styles';
import { ChevronDownIcon } from '@crowdsignal/icons';
import Sidebar from './sidebar';
import { useClientId } from '@crowdsignal/hooks';

const EditPhoneNumber = ( props ) => {
	const { attributes, setAttributes, className, isSelected } = props;

	useClientId( props );

	const handleChangeLabel = ( label ) => setAttributes( { label } );

	const handleChangePlaceholder = ( placeholder ) =>
		setAttributes( { placeholder } );

	const handleResizeInput = ( event, handle, element ) => {
		if ( handle !== 'bottom' && handle !== 'right' ) {
			return;
		}

		setAttributes( {
			inputWidth: `${ element.offsetWidth }px`,
		} );
	};

	const classes = classnames(
		className,
		'is-inline',
		'crowdsignal-forms-phone-number-block',
		{
			'is-required': attributes.mandatory,
		}
	);

	const handleChangeAttribute = ( key ) => ( value ) =>
		setAttributes( { [ key ]: value } );

	return (
		<FormInputWrapper
			className={ classes }
			style={ { ...useColorStyles( attributes ) } }
		>
			<Sidebar { ...props } />
			<FormInputWrapper.Label className="crowdsignal-forms-phone-number-block__label">
				<RichText
					placeholder={ __( 'Enter form label', 'block-editor' ) }
					onChange={ handleChangeLabel }
					value={ attributes.label }
				/>
			</FormInputWrapper.Label>
			<FormDropdownInput.Button outline>
				<RichText
					placeholder={ __( '+1', 'block-editor' ) }
					value={ attributes.buttonLabel }
					onChange={ handleChangeAttribute( 'buttonLabel' ) }
					allowedFormats={ [] }
					multiline={ false }
					disableLineBreaks={ true }
				/>
				<ChevronDownIcon />
			</FormDropdownInput.Button>
			<ResizableBox
				showHandle={ isSelected }
				enable={ { bottom: true, right: true } }
				onResizeStop={ handleResizeInput }
				size={ {
					width: attributes.inputWidth,
				} }
			>
				<FormTextInput
					placeholder={ __( 'Enter Phone Number', 'block-editor' ) }
					value={ attributes.placeholder }
					onChange={ handleChangePlaceholder }
					className="crowdsignal-forms-phone-number-block__wrapper"
				/>
			</ResizableBox>
		</FormInputWrapper>
	);
};

export default EditPhoneNumber;
