/**
 * External dependencies
 */
import classnames from 'classnames';
import { useContext } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { useField } from '@crowdsignal/form';
import RatingScaleQuestion from '../rating-scale-question';
import ButtonAnswer from '../components/button-answer';
import { getBlockStyle } from '../util';

const RatingScaleAnswer = ( { attributes, className } ) => {
	const parentQuestion = useContext( RatingScaleQuestion.Context );

	// fixing the input array-ish as rating, solve the ID on backend
	const { fieldValue, onChange } = useField( {
		fieldName: `q_${ parentQuestion.clientId }[rating]`,
	} );

	const isSelected = fieldValue === attributes.clientId;
	const blockStyle = getBlockStyle( parentQuestion.className );

	const classes = classnames(
		'crowdsignal-forms-rating-scale-answer-block',
		className,
		{
			'is-selected': isSelected,
			'is-style-emoji': blockStyle === RatingScaleQuestion.Style.EMOJI,
			'is-style-text': blockStyle === RatingScaleQuestion.Style.TEXT,
		}
	);

	if ( ! attributes.label ) {
		return null;
	}

	return (
		<ButtonAnswer
			attributes={ attributes }
			className={ classes }
			isMultiSelect={ false }
			isSelected={ isSelected }
			onChange={ onChange }
			value={ attributes.clientId }
		>
			{ blockStyle === RatingScaleQuestion.Style.EMOJI
				? attributes.emoji
				: attributes.label }
		</ButtonAnswer>
	);
};

RatingScaleAnswer.blockName = 'crowdsignal-forms/rating-scale-answer';

export default RatingScaleAnswer;
