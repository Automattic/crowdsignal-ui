/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import ButtonAnswer from '../components/button-answer';
import { DragHandle } from '@crowdsignal/icons';

const RankingAnswer = ( { attributes, className, draggable } ) => {
	const classes = classnames(
		'crowdsignal-forms-ranking-answer-block',
		className
	);

	if ( ! attributes.label ) {
		return null;
	}

	return (
		<div
			className={ classes }
			ref={ draggable.innerRef }
			{ ...draggable.draggableProps }
			{ ...draggable.dragHandleProps }
		>
			<DragHandle />
			<ButtonAnswer
				attributes={ attributes }
				className={ { 'is-selected': draggable.isDragging } }
				isMultiSelect={ false }
			>
				{ attributes.label }
			</ButtonAnswer>
		</div>
	);
};

RankingAnswer.blockName = 'crowdsignal-forms/ranking-answer';

export default RankingAnswer;
