/**
 * External dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { Icon, pages as pagesIcon, plus } from '@wordpress/icons';
import { map, range } from 'lodash';

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
	PageNavigationWrapper,
} from './styles/page-navigation';

const PageNavigation = ( { currentPage, projectContent } ) => {
	const {
		insertEditorPage,
		setEditorCurrentPage,
		updateEditorPageOrder,
	} = useDispatch( STORE_NAME );

	const isSaving = useSelect( ( select ) =>
		select( STORE_NAME ).isEditorSaving()
	);

	const handleAddPage = () => {
		insertEditorPage( projectContent.length, [] );
	};

	const handleDeletePage = ( pageIndex ) => {
		updateEditorPageOrder( [
			...range( pageIndex ),
			...range( pageIndex + 1, projectContent.length ),
		] );
	};

	const handleSelectPage = ( pageIndex ) => setEditorCurrentPage( pageIndex );

	return (
		<PageNavigationWrapper>
			<PageNavigationHeader>
				<Icon icon={ pagesIcon } />
				{ __( 'Pages', 'dashboard' ) }
			</PageNavigationHeader>

			{ map( projectContent, ( page, index ) => (
				<PagePreview
					key={ `page-${ index }` }
					disablePageActions={ isSaving }
					isActive={ index === currentPage }
					page={ page }
					pageIndex={ index }
					onSelect={ handleSelectPage }
					onDelete={ handleDeletePage }
				/>
			) ) }

			<PageNavigationAddButton
				disabled={ isSaving }
				onClick={ handleAddPage }
			>
				<Icon icon={ plus } />
			</PageNavigationAddButton>
		</PageNavigationWrapper>
	);
};

export default PageNavigation;
