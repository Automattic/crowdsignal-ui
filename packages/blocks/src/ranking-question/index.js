/**
 * External dependencies
 */
import { createContext, RawHTML, useMemo } from '@wordpress/element';
import classnames from 'classnames';
import { filter, map } from 'lodash';
import { cloneElement } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

/**
 * Internal dependencies
 */
import {
	QuestionHeader,
	QuestionWrapper,
	JustificationWrapper,
} from '../components';
import { useField } from '@crowdsignal/form';

const Context = createContext();

const RankingQuestion = ( { attributes, children, className } ) => {
	const answers = useMemo(
		() => filter( children, ( { props } ) => !! props.attributes.label ),
		[ children ]
	);

	const { onUpdate } = useField( {
		fieldName: `q_${ attributes.clientId }[ranking][]`,
		initialValue: map( answers, 'props.attributes.clientId' ),
	} );

	const handleMoveAnswer = ( { source, destination } ) => {
		// dropped outside the list
		if ( ! destination ) {
			return;
		}

		const [ removed ] = answers.splice( source.index, 1 );
		answers.splice( destination.index, 0, removed );
		onUpdate( map( answers, 'props.attributes.clientId' ) );
	};

	const classes = classnames(
		'crowdsignal-forms-ranking-question-block',
		className,
		{
			[ `align${ attributes.align }` ]: attributes.align,
		}
	);

	return (
		<JustificationWrapper justification={ attributes.justification }>
			<QuestionWrapper attributes={ attributes } className={ classes }>
				<QuestionHeader>
					<RawHTML>{ attributes.question }</RawHTML>
				</QuestionHeader>
				<Context.Provider value={ attributes }>
					<QuestionWrapper.Content>
						<DragDropContext onDragEnd={ handleMoveAnswer }>
							<Droppable droppableId="crowdsignal/ranking-question">
								{ ( {
									droppableProps,
									innerRef,
									placeholder,
								} ) => (
									<div ref={ innerRef } { ...droppableProps }>
										{ map( answers, ( child, index ) => (
											<Draggable
												key={ `answer-${ index }` }
												disableInteractiveElementBlocking={
													true
												}
												draggableId={ `answer-${ index }` }
												index={ index }
											>
												{ ( provided, snapshot ) =>
													cloneElement( child, {
														draggable: {
															...provided,
															isDragging:
																snapshot.isDragging,
														},
													} )
												}
											</Draggable>
										) ) }
										{ placeholder }
									</div>
								) }
							</Droppable>
						</DragDropContext>
					</QuestionWrapper.Content>
				</Context.Provider>
			</QuestionWrapper>
		</JustificationWrapper>
	);
};

RankingQuestion.Context = Context;
RankingQuestion.blockName = 'crowdsignal-forms/ranking-question';

export default RankingQuestion;
