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
					attributes={ attributes }
					className="multiple-choice-answer-other"
					multipleChoice={ attributes.maximumChoices !== 1 }
					onChange={ handleChangeOtherPlaceholder }
				/>
			) }

			{ blockStyle === MultipleChoiceQuestion.Style.BUTTON && (
				<EditButtonAnswer
					className="multiple-choice-answer-other"
					multipleChoice={ attributes.maximumChoices !== 1 }
					onChange={ handleChangeOtherPlaceholder }
					placeholder={ __( 'Enter other', 'block-editor' ) }
					value={ attributes.otherPlaceholder }
				/>
			) }
		</>
	);
};

export default MultipleChoiceAnswerOther;
