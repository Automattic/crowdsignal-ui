/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { Button, FormCheckbox } from '@crowdsignal/blocks';

const ButtonContent = styled.div`
	align-items: center;
	cursor: text;
	display: flex;

	.rich-text {
		flex: 1;
		text-align: left;
	}

	${ Button.Wrapper }.text-align-center & .rich-text {
		text-align: center;
	}

	${ Button.Wrapper }.text-align-right & .rich-text {
		text-align: right;
	}
`;

const EditButtonAnswer = ( {
	value,
	attributes,
	className,
	multipleChoice,
	onChange,
	onReplace,
	onSplit,
	onDelete,
	allowedFormats = [
		'core/bold',
		'core/italic',
		'core/code',
		'core/strikethrough',
		'core/subscript',
		'core/superscript',
	],
} ) => {
	const width = attributes.width ? `${ attributes.width }%` : null;

	return (
		<Button
			attributes={ attributes }
			as={ 'div' }
			className={ className }
			style={ {
				width,
			} }
			outline
		>
			<ButtonContent>
				{ multipleChoice && <FormCheckbox type="checkbox" /> }

				<RichText
					placeholder={ __( 'Enter an answer', 'block-editor' ) }
					onChange={ onChange }
					onReplace={ onReplace }
					onSplit={ onSplit }
					onRemove={ onDelete }
					value={ value || attributes.label }
					multiline={ false }
					preserveWhiteSpace={ false }
					allowedFormats={ allowedFormats }
					withoutInteractiveFormatting
				/>
			</ButtonContent>
		</Button>
	);
};

export default EditButtonAnswer;
