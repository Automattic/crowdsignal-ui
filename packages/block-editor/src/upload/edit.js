/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { Button, FormInputWrapper } from '@crowdsignal/blocks';
import Sidebar from './sidebar';
import { useColorStyles } from '@crowdsignal/styles';
import { useClientId } from '@crowdsignal/hooks';

export default ( props ) => {
	const { attributes, className, onReplace, setAttributes } = props;

	useClientId( props );

	const handleChangeAttribute = ( key ) => ( value ) =>
		setAttributes( { [ key ]: value } );

	const classes = classnames( className, 'crowdsignal-forms-upload-block', {
		[ `justify-${ attributes.justification }` ]: attributes.justification,
	} );

	return (
		<FormInputWrapper
			className={ classes }
			style={ { ...useColorStyles( attributes ) } }
		>
			<Sidebar { ...props } />
			<FormInputWrapper.Label className="crowdsignal-forms-upload-block__label">
				<RichText
					placeholder={ __( 'Enter form label', 'block-editor' ) }
					onChange={ ( value ) =>
						handleChangeAttribute( 'label' )( value )
					}
					value={ attributes.label }
				/>
			</FormInputWrapper.Label>
			<Button
				attributes={ attributes }
				as={ RichText }
				className={ classes }
				placeholder={ __( 'Choose file', 'blocks' ) }
				multiline={ false }
				preserveWhiteSpace={ false }
				onChange={ handleChangeAttribute }
				onReplace={ onReplace }
				value={ attributes.buttonLabel }
				allowedFormats={ [] }
				withoutInteractiveFormatting
			/>
		</FormInputWrapper>
	);
};
