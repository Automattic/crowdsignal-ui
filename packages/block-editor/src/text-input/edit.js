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
	FormTextarea,
	FormTextInput,
	TextInput,
} from '@crowdsignal/blocks';
import { useColorStyles } from '@crowdsignal/styles';
import Sidebar from './sidebar';
import { useClientId } from '@crowdsignal/hooks';

const EditTextInput = ( props ) => {
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
			inputHeight: element.offsetHeight,
			inputWidth: `${ element.offsetWidth }px`,
		} );
	};

	const classes = classnames(
		className,
		'crowdsignal-forms-text-input-block',
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
			<FormInputWrapper.Label className="crowdsignal-forms-text-input-block__label">
				<RichText
					placeholder={ __( 'Enter form label', 'block-editor' ) }
					onChange={ handleChangeLabel }
					value={ attributes.label }
				/>
			</FormInputWrapper.Label>
			<ResizableBox
				minHeight="40px"
				showHandle={ isSelected }
				enable={ { bottom: true, right: true } }
				onResizeStop={ handleResizeInput }
				size={ {
					width: attributes.inputWidth,
					height: `${ attributes.inputHeight }px`,
				} }
			>
				{ attributes.inputHeight < TextInput.MULTILINE_THRESHOLD ? (
					<FormTextInput
						placeholder={ __(
							'Enter placeholder',
							'block-editor'
						) }
						value={ attributes.placeholder }
						onChange={ handleChangePlaceholder }
						className="crowdsignal-forms-text-input-block__wrapper"
					/>
				) : (
					<FormTextarea
						placeholder={ __(
							'Enter placeholder',
							'block-editor'
						) }
						value={ attributes.placeholder }
						onChange={ handleChangePlaceholder }
						style={ {
							height: '100%',
						} }
						className="crowdsignal-forms-text-input-block__wrapper"
					/>
				) }
			</ResizableBox>
		</FormInputWrapper>
	);
};

export default EditTextInput;
