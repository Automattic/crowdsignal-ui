/**
 * External dependencies
 */
import { chevronLeft, Icon } from '@wordpress/icons';
import { __, sprintf } from '@wordpress/i18n';
import { every, times, values } from 'lodash';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import {
	BackButton,
	Dash,
	DashedProgressBar,
	Filler,
	LinearProgressBar,
	NavBar,
	NavContent,
	Pagination,
} from './styles';

export default ( {
	currentPageIndex,
	onBackButtonClick,
	settings,
	totalPages,
} ) => {
	const { showBackButton, showPagination, showProgress } = settings;
	const currentPage = currentPageIndex + 1;
	const pages = totalPages - 1; //Ignore confirmation page

	const handleBackButtonClick = () => {
		if ( currentPageIndex <= 0 ) {
			return;
		}

		onBackButtonClick( currentPageIndex - 1 );
	};

	if (
		every( values( settings ), ( value ) => ! value ) ||
		currentPage > pages
	) {
		return null;
	}

	return (
		<NavBar>
			<NavContent>
				<Filler>
					{ showBackButton && (
						<BackButton
							disabled={ currentPageIndex === 0 }
							onClick={ handleBackButtonClick }
						>
							<Icon icon={ chevronLeft } />
							{ __( 'Back', 'components' ) }
						</BackButton>
					) }
				</Filler>
				{ showProgress && pages <= 5 && (
					<DashedProgressBar>
						{ times( pages, ( i ) => (
							<Dash
								key={ i }
								className={ classnames( {
									active: currentPageIndex === i,
								} ) }
							/>
						) ) }
					</DashedProgressBar>
				) }
				<Filler>
					{ showPagination && (
						<Pagination>
							{ sprintf(
								// translators: %1$s: Current page number, %2$s: Total number of pages
								__( 'Page %1$s of %2$s', 'components' ),
								currentPage,
								pages
							) }
						</Pagination>
					) }
				</Filler>
			</NavContent>
			{ showProgress && pages > 5 && (
				<LinearProgressBar
					currentPage={ currentPage }
					totalPages={ pages }
				/>
			) }
		</NavBar>
	);
};
