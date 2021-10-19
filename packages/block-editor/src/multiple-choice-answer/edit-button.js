/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Button } from '@crowdsignal/blocks';

const EditButtonAnswer = ( {
	attributes,
	className,
	onChange,
	onReplace,
	onSplit,
} ) => {
	const width = attributes.width ? `${ attributes.width }%` : null;

	return (
		<Button
			attributes={ attributes }
			as={ RichText }
			className={ className }
			style={ {
				width,
			} }
			placeholder={ __( 'Enter an answer', 'blocks' ) }
			multiline={ false }
			preserveWhiteSpace={ false }
			onChange={ onChange }
			onReplace={ onReplace }
			onSplit={ onSplit }
			value={ attributes.label }
			allowedFormats={ [] }
			withoutInteractiveFormatting
		/>
	);
};

export default EditButtonAnswer;
