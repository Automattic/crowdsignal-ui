/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { ResizableBox } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Input from 'react-phone-number-input/input';

/**
 * Internal dependencies
 */
import { FormInputWrapper } from '@crowdsignal/blocks';
import { useColorStyles } from '@crowdsignal/styles';
import Sidebar from './sidebar';
import { useClientId } from '@crowdsignal/hooks';

const EditPhoneNumber = ( props ) => {
	const { attributes, setAttributes, className, isSelected } = props;

	const flag = attributes.flag;

	useClientId( props );

	const handleChangeLabel = ( label ) => setAttributes( { label } );

	const handleChangeCountry = ( country ) => setAttributes( { country } );

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
		'crowdsignal-forms-phone-number-block',
		{
			'is-required': attributes.mandatory,
		}
	);

	return (
		<FormInputWrapper
			className={ classes }
			style={ { ...useColorStyles( attributes ) } }
		>
			<Sidebar { ...props } />
			<FormInputWrapper.Label className="crowdsignal-forms-phone-number-block__label">
				<RichText
					placeholder={ __( 'Phone Number', 'block-editor' ) }
					onChange={ handleChangeLabel }
					value={ attributes.label }
				/>
			</FormInputWrapper.Label>
			<ResizableBox
				showHandle={ isSelected }
				enable={ { bottom: true, right: true } }
				onResizeStop={ handleResizeInput }
				size={ {
					width: attributes.inputWidth,
				} }
			>
				{ flag && (
					<PhoneInput
						defaultCountry={ attributes.country.toUpperCase() }
						placeholder={ __(
							'Enter Phone Number',
							'block-editor'
						) }
						value={ attributes.placeholder }
						onChange={ handleChangeCountry }
						className="crowdsignal-forms-phone-number-block__wrapper"
					/>
				) }
				{ ! flag && (
					<Input
						defaultCountry={ attributes.country.toUpperCase() }
						placeholder={ __(
							'Enter Phone Number',
							'block-editor'
						) }
						value={ attributes.placeholder }
						onChange={ handleChangeCountry }
						className="crowdsignal-forms-phone-number-block__wrapper"
					/>
				) }
			</ResizableBox>
		</FormInputWrapper>
	);
};

export default EditPhoneNumber;
