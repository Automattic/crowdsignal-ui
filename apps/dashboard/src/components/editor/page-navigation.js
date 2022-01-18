/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Icon, pages as pagesIcon, plus } from '@wordpress/icons';
import { map } from 'lodash';

/**
 * Internal dependencies
 */
import PagePreview from './page-preview';

/**
 * Style dependencies
 */
import {
	PageNavigationAddButton,
	PageNavigationHeader,
	PageNavigationWrapper,
} from './styles/page-navigation';

const PageNavigation = ( { projectContent } ) => {
	return (
		<PageNavigationWrapper>
			<PageNavigationHeader>
				<Icon icon={ pagesIcon } />
				{ __( 'Pages', 'dashboard' ) }
			</PageNavigationHeader>

			{ map( projectContent.pages, ( page, index ) => (
				<PagePreview
					key={ `page-${ index }` }
					page={ page }
					pageIndex={ index }
				/>
			) ) }

			<PageNavigationAddButton>
				<Icon icon={ plus } />
			</PageNavigationAddButton>
		</PageNavigationWrapper>
	);
};

export default PageNavigation;
