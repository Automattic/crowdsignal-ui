/**
 * External dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { Icon, pages as pagesIcon, plus } from '@wordpress/icons';
import { map } from 'lodash';

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

const PageNavigation = () => {
	const {
		deleteEditorPage,
		insertEditorPage,
		setEditorCurrentPage,
	} = useDispatch( STORE_NAME );

	const [ currentPage, pages ] = useSelect( ( select ) => [
		select( STORE_NAME ).getEditorCurrentPageIndex(),
		select( STORE_NAME ).getEditorPages(),
	] );

	const handleAddPage = () => {
		insertEditorPage( pages.length, [] );
		setEditorCurrentPage( pages.length );
	};

	const handleSelectPage = ( pageIndex ) => setEditorCurrentPage( pageIndex );

	return (
		<PageNavigationWrapper>
			<PageNavigationHeader>
				<Icon icon={ pagesIcon } />
				{ __( 'Pages', 'dashboard' ) }
			</PageNavigationHeader>

			{ map( pages, ( page, index ) => (
				<PagePreview
					key={ `page-${ index }` }
					disablePageActions={ pages.length === 1 }
					isActive={ index === currentPage }
					page={ page }
					pageIndex={ index }
					onSelect={ handleSelectPage }
					onDelete={ deleteEditorPage }
				/>
			) ) }

			<PageNavigationAddButton onClick={ handleAddPage }>
				<Icon icon={ plus } />
			</PageNavigationAddButton>
		</PageNavigationWrapper>
	);
};

export default PageNavigation;
