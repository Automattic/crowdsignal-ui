/**
 * External dependencies
 */
import { createContext, RawHTML } from '@wordpress/element';
import classnames from 'classnames';
import { isEmpty, map } from 'lodash';
import { __ } from '@wordpress/i18n';
import { cloneElement } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

/**
 * Internal dependencies
 */
import { ErrorMessage, QuestionHeader, QuestionWrapper } from '../components';
import { useValidation } from '@crowdsignal/form';

const Context = createContext();

const RankingQuestion = ( { attributes, children, className } ) => {
	const { error } = useValidation( {
		fieldName: `q_${ attributes.clientId }[ranking]`,
		validation: ( value ) => {
			if ( attributes.mandatory && isEmpty( value ) ) {
				return __( 'This question is required', 'blocks' );
			}
		},
	} );

	const handleMovePage = ( {
		source: { index: from },
		destination: { index: to },
	} ) => {
		const [ removed ] = children.splice( from, 1 );
		children.splice( to, 0, removed );
	};

	const classes = classnames(
		'crowdsignal-forms-ranking-question-block',
		className,
		{
			'is-required': attributes.mandatory,
			'is-error': error,
		}
	);

	return (
		<QuestionWrapper attributes={ attributes } className={ classes }>
			<QuestionHeader>
				<RawHTML>{ attributes.question }</RawHTML>
			</QuestionHeader>
			<Context.Provider value={ attributes }>
				<QuestionWrapper.Content>
					<DragDropContext onDragEnd={ handleMovePage }>
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
			{ error && <ErrorMessage>{ error }</ErrorMessage> }
		</QuestionWrapper>
	);
};

RankingQuestion.Context = Context;

export default RankingQuestion;
