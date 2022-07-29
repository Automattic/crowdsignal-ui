/**
 * External dependencies
 */
import { createContext, RawHTML, useEffect, useMemo } from '@wordpress/element';
import classnames from 'classnames';
import { filter, get, isEmpty, isEqual, map } from 'lodash';
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
const CLIENT_ID_PATH = 'props.attributes.clientId';

const RankingQuestion = ( { attributes, children, className } ) => {
	const { fieldValue, onChange } = useField( {
		fieldName: `q_${ attributes.clientId }[ranking][]`,
	} );

	const answers = useMemo( () => {
		const newAnswers = filter(
			children,
			( { props } ) => !! props.attributes.label
		);
		const answersIds = map( answers, CLIENT_ID_PATH );

		// If we get the value from the store, we need to make sure the
		// answer options will be sorted accordingly
		if ( ! isEmpty( fieldValue ) && ! isEqual( fieldValue, answersIds ) ) {
			newAnswers.sort( ( a, b ) => {
				const aId = get( a, CLIENT_ID_PATH );
				const bId = get( b, CLIENT_ID_PATH );
				return fieldValue.indexOf( aId ) - fieldValue.indexOf( bId );
			} );
		}

		return newAnswers;
	}, [ children, fieldValue ] );

	// Sets the Ranking initial value
	useEffect( () => {
		onChange( map( answers, CLIENT_ID_PATH ) );
	}, [] );

	const handleMoveAnswer = ( { source, destination } ) => {
		// dropped outside the list
		if ( ! destination ) {
			return;
		}

		const [ removed ] = answers.splice( source.index, 1 );
		answers.splice( destination.index, 0, removed );
		onChange( map( answers, CLIENT_ID_PATH ) );
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
												key={ `answer-${ get(
													child,
													CLIENT_ID_PATH
												) }` }
												disableInteractiveElementBlocking={
													true
												}
												draggableId={ `answer-${ get(
													child,
													CLIENT_ID_PATH
												) }` }
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
