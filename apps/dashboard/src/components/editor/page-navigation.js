/**
 * External dependencies
 */
import { useDispatch } from '@wordpress/data';
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
	const { insertEditorPage, updateEditorPageOrder } = useDispatch(
		STORE_NAME
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

	return (
		<PageNavigationWrapper>
			<PageNavigationHeader>
				<Icon icon={ pagesIcon } />
				{ __( 'Pages', 'dashboard' ) }
			</PageNavigationHeader>

			{ map( projectContent, ( page, index ) => (
				<PagePreview
					key={ `page-${ index }` }
					isActive={ index === currentPage }
					page={ page }
					pageIndex={ index }
					onDelete={ handleDeletePage }
				/>
			) ) }

			<PageNavigationAddButton onClick={ handleAddPage }>
				<Icon icon={ plus } />
			</PageNavigationAddButton>
		</PageNavigationWrapper>
	);
};

export default PageNavigation;
