/**
 * External dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { Icon, pages as pagesIcon, plus } from '@wordpress/icons';
import { map, noop, range, slice } from 'lodash';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

/**
 * Internal dependencies
 */
import PagePreview from './page-preview';
import { STORE_NAME } from '../../data';

/**
 * Style dependencies
 */
import {
	PageNavigationAddButton,
	PageNavigationHeader,
	PageNavigationSectionHeader,
	PageNavigationWrapper,
} from './styles/page-navigation';

const PageNavigation = () => {
	const {
		deleteEditorPage,
		insertEditorPage,
		setEditorCurrentPage,
		updateEditorPageOrder,
	} = useDispatch( STORE_NAME );

	const [ currentPage, pages ] = useSelect( ( select ) => [
		select( STORE_NAME ).getEditorCurrentPageIndex(),
		select( STORE_NAME ).getEditorPages(),
	] );

	const handleAddPage = () => {
		insertEditorPage( pages.length - 1, [] );
		setEditorCurrentPage( pages.length - 1 );
	};

	const handleMovePage = ( {
		source: { index: from },
		destination: { index: to },
	} ) => {
		if ( from < to ) {
			updateEditorPageOrder( [
				...range( 0, from ),
				...range( from + 1, to + 1 ),
				from,
				...range( to + 1, pages.length ),
			] );
			return;
		}

		updateEditorPageOrder( [
			...range( 0, to ),
			from,
			...range( to, from ),
			...range( from + 1, pages.length ),
		] );
	};

	const handleSelectPage = ( pageIndex ) => setEditorCurrentPage( pageIndex );

	return (
		<PageNavigationWrapper>
			<PageNavigationHeader>
				<Icon icon={ pagesIcon } />
				{ __( 'Pages', 'dashboard' ) }
			</PageNavigationHeader>

			<DragDropContext onDragEnd={ handleMovePage }>
				<Droppable droppableId="crowdsignal/page-navigation">
					{ ( { droppableProps, innerRef, placeholder } ) => (
						<div ref={ innerRef } { ...droppableProps }>
							{ map( slice( pages, 0, -1 ), ( page, index ) => (
								<Draggable
									key={ `page-${ index }` }
									disableInteractiveElementBlocking={ true }
									draggableId={ `page-${ index }` }
									index={ index }
								>
									{ ( provided, snapshot ) => (
										<PagePreview
											ref={ provided.innerRef }
											draggableProps={
												provided.draggableProps
											}
											dragHandleProps={
												provided.dragHandleProps
											}
											disablePageActions={
												pages.length <= 2
											}
											isActive={ index === currentPage }
											isDragging={ snapshot.isDragging }
											page={ page }
											pageIndex={ index }
											onSelect={ handleSelectPage }
											onDelete={ deleteEditorPage }
										/>
									) }
								</Draggable>
							) ) }

							{ placeholder }
						</div>
					) }
				</Droppable>
			</DragDropContext>

			<PageNavigationAddButton onClick={ handleAddPage }>
				<Icon icon={ plus } />
			</PageNavigationAddButton>

			<PageNavigationSectionHeader>
				{ __( 'Confirmation', 'dashboard' ) }
			</PageNavigationSectionHeader>

			<PagePreview
				disablePageActions={ true }
				isActive={ currentPage === pages.length - 1 }
				label="-"
				page={ pages[ pages.length - 1 ] }
				pageIndex={ pages.length - 1 }
				onDelete={ noop }
				onSelect={ handleSelectPage }
			/>
		</PageNavigationWrapper>
	);
};

export default PageNavigation;
