/**
 * External dependencies
 */
import { times } from 'lodash';

/**
 * Style dependencies
 */
import { PageIndicatorButton, PageNavigationWrapper } from './styles';

const PageNavigation = ( { currentPage, onSelect, pageCount } ) => (
	<PageNavigationWrapper>
		{ times( pageCount, ( pageNumber ) => (
			<PageIndicatorButton
				className={ currentPage === pageNumber ? 'is-active' : '' }
				key={ pageNumber }
				onClick={ () => onSelect( pageNumber ) }
			>
				<svg
					width={ 8 }
					height={ 8 }
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx={ 4 } cy={ 4 } r={ 4 } />
				</svg>
			</PageIndicatorButton>
		) ) }
	</PageNavigationWrapper>
);

export default PageNavigation;
