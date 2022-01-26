/**
 * External dependencies
 */
import { useDispatch } from '@wordpress/data';
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

const PageNavigation = ( { currentPage, projectContent } ) => {
	const { setEditorCurrentPage, updateEditorPage } = useDispatch(
		STORE_NAME
	);

	const handleAddPage = () => {
		updateEditorPage( projectContent.length, [] );
		setEditorCurrentPage( projectContent.length );
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
				/>
			) ) }

			<PageNavigationAddButton onClick={ handleAddPage }>
				<Icon icon={ plus } />
			</PageNavigationAddButton>
		</PageNavigationWrapper>
	);
};

export default PageNavigation;
