/**
 * External dependencies
 */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Button from '../button';
import Dialog from '../dialog';
import PageNavigation from './page-navigation';

/**
 * Style dependencies
 */
import {
	GuidePage,
	GuideWrapper,
	PageHeader,
	PageContent,
	PageText,
	GuideFooter,
} from './styles';

const Guide = ( { className, onFinish, pages } ) => {
	const [ currentPage, setCurrentPage ] = useState( 0 );

	return (
		<GuideWrapper as={ Dialog } className={ className }>
			<GuidePage>
				{ pages[ currentPage ].image }

				{ pages[ currentPage ].header && (
					<PageHeader>pages[ currentPage ].header</PageHeader>
				) }

				<PageContent>{ pages[ currentPage ].content }</PageContent>
			</GuidePage>

			<GuideFooter>
				<PageNavigation
					currentPage={ currentPage }
					onSelect={ setCurrentPage }
					pageCount={ pages.length }
				/>

				{ currentPage > 0 && (
					<Button
						borderless
						onClick={ () => setCurrentPage( currentPage - 1 ) }
					>
						{ __( 'Previous', 'components' ) }
					</Button>
				) }

				{ currentPage < pages.length - 1 && (
					<Button
						primary
						onClick={ () => setCurrentPage( currentPage + 1 ) }
					>
						{ __( 'Next', 'components' ) }
					</Button>
				) }

				{ currentPage === pages.length - 1 && (
					<Button primary onClick={ onFinish }>
						{ __( 'Finish', 'components' ) }
					</Button>
				) }
			</GuideFooter>
		</GuideWrapper>
	);
};

Guide.Header = PageHeader;
Guide.Text = PageText;

export default Guide;
