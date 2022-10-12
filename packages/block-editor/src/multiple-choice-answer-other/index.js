/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { getBlockStyle, MultipleChoiceQuestion } from '@crowdsignal/blocks';
import EditButtonAnswer from '../components/edit-button';
import EditCheckboxAnswer from '../multiple-choice-answer/edit-checkbox';

const MultipleChoiceAnswerOther = ( { attributes, setAttributes } ) => {
	const blockStyle = getBlockStyle( attributes.className );

	const handleChangeOtherPlaceholder = ( otherPlaceholder ) =>
		setAttributes( { otherPlaceholder } );

	return (
		<>
			{ blockStyle === MultipleChoiceQuestion.Style.LIST && (
				<EditCheckboxAnswer
					className="multiple-choice-answer-other"
					onChange={ handleChangeOtherPlaceholder }
					placeholder={ __( 'Enter other', 'block-editor' ) }
					value={ attributes.otherPlaceholder }
					hideCheck
				/>
			) }

			{ blockStyle === MultipleChoiceQuestion.Style.BUTTON && (
				<EditButtonAnswer
					className="multiple-choice-answer-other"
					onChange={ handleChangeOtherPlaceholder }
					placeholder={ __( 'Enter other', 'block-editor' ) }
					value={ attributes.otherPlaceholder }
				/>
			) }
		</>
	);
};

export default MultipleChoiceAnswerOther;
