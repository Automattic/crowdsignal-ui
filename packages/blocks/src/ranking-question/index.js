/**
 * External dependencies
 */
import { createContext, RawHTML } from '@wordpress/element';
import classnames from 'classnames';
import { map } from 'lodash';
import { cloneElement } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

/**
 * Internal dependencies
 */
import { QuestionHeader, QuestionWrapper } from '../components';
import { useField } from '@crowdsignal/form';

const Context = createContext();

const RankingQuestion = ( { attributes, children, className } ) => {
	const { onSort } = useField( {
		name: `q_${ attributes.clientId }[ranking][]`,
		initialValue: map( children, 'props.attributes.clientId' ),
	} );

	const handleMoveAnswer = ( { source, destination } ) => {
		// dropped outside the list
		if ( ! destination ) {
			return;
		}

		const [ removed ] = children.splice( source.index, 1 );
		children.splice( destination.index, 0, removed );
		onSort( children );
	};

	const classes = classnames(
		'crowdsignal-forms-ranking-question-block',
		className
	);

	return (
		<QuestionWrapper attributes={ attributes } className={ classes }>
			<QuestionHeader>
				<RawHTML>{ attributes.question }</RawHTML>
			</QuestionHeader>
			<Context.Provider value={ attributes }>
				<QuestionWrapper.Content>
					<DragDropContext onDragEnd={ handleMoveAnswer }>
						<Droppable droppableId="crowdsignal/ranking-question">
							{ ( { droppableProps, innerRef, placeholder } ) => (
								<div ref={ innerRef } { ...droppableProps }>
									{ map( children, ( child, index ) => (
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
	);
};

RankingQuestion.Context = Context;
RankingQuestion.blockName = 'crowdsignal-forms/ranking-question';

export default RankingQuestion;
