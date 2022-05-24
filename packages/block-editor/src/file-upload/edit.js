/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { FormInputWrapper, FileInput } from '@crowdsignal/blocks';
import Sidebar from './sidebar';
import { useColorStyles } from '@crowdsignal/styles';
import { useClientId } from '@crowdsignal/hooks';

export default ( props ) => {
	const { attributes, className, onReplace, setAttributes } = props;

	useClientId( props );

	const handleChangeAttribute = ( key ) => ( value ) =>
		setAttributes( { [ key ]: value } );

	const classes = classnames(
		className,
		'crowdsignal-forms-file-upload-block',
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
			<FormInputWrapper.Label className="crowdsignal-forms-upload-block__label">
				<RichText
					placeholder={ __( 'Enter form label', 'block-editor' ) }
					onChange={ handleChangeAttribute( 'label' ) }
					value={ attributes.label }
				/>
			</FormInputWrapper.Label>
			<FileInput.Button
				attributes={ attributes }
				as={ RichText }
				className={ classes }
				placeholder={ __( 'Choose file', 'blocks' ) }
				multiline={ false }
				preserveWhiteSpace={ false }
				onChange={ handleChangeAttribute( 'buttonLabel' ) }
				onReplace={ onReplace }
				value={ attributes.buttonLabel }
				allowedFormats={ [] }
				withoutInteractiveFormatting
				outline
			/>
			<FileInput.Message
				as={ RichText }
				value={ attributes.message }
				onChange={ handleChangeAttribute( 'message' ) }
				preserveWhiteSpace={ false }
			/>
		</FormInputWrapper>
	);
};
