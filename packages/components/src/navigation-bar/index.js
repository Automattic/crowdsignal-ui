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

export default ( { currentPage, settings, totalPages } ) => {
	if ( every( values( settings ), ( value ) => ! value ) ) {
		return null;
	}

	const { showBackButton, showPagination, showProgress } = settings;
	const navClasses = classnames( {
		'no-padding': ! showBackButton && ! showPagination && totalPages > 5,
	} );

	return (
		<NavBar className={ navClasses }>
			<NavContent>
				<Filler>
					{ showBackButton && (
						<BackButton>
							<Icon icon={ chevronLeft } />
							{ __( 'Back', 'components' ) }
						</BackButton>
					) }
				</Filler>
				{ showProgress && totalPages <= 5 && (
					<DashedProgressBar>
						{ times( totalPages, ( i ) => (
							<Dash
								key={ i }
								className={ classnames( {
									active: currentPage === i,
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
								currentPage + 1,
								totalPages
							) }
						</Pagination>
					) }
				</Filler>
			</NavContent>
			{ showProgress && totalPages > 5 && (
				<LinearProgressBar
					currentPage={ currentPage }
					totalPages={ totalPages }
				/>
			) }
		</NavBar>
	);
};
