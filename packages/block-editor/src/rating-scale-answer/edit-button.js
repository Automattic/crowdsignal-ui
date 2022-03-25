/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import {
	Button,
	RatingScaleQuestion,
	getBlockStyle,
} from '@crowdsignal/blocks';

const ButtonContent = styled.div`
	align-items: center;
	cursor: text;
	display: flex;

	.rich-text {
		flex: 1;
		text-align: left;
	}
`;

const EditButtonAnswer = ( {
	attributes,
	className,
	onChange,
	onReplace,
	onSplit,
	onDelete,
} ) => {
	const blockStyle = getBlockStyle( className );

	return (
		<Button
			attributes={ attributes }
			as={ 'div' }
			className={ className }
			outline
		>
			<ButtonContent>
				<RichText
					placeholder={ __( 'Enter an answer', 'block-editor' ) }
					onChange={ onChange }
					onReplace={ onReplace }
					onSplit={ onSplit }
					onRemove={ onDelete }
					value={
						blockStyle === RatingScaleQuestion.Style.EMOJI
							? attributes.emoji
							: attributes.label
					}
					multiline={ false }
					preserveWhiteSpace={ false }
					allowedFormats={ [] }
					withoutInteractiveFormatting
				/>
			</ButtonContent>
		</Button>
	);
};

export default EditButtonAnswer;
