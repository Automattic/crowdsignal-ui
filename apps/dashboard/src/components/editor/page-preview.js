/**
 * External dependencies
 */
import { BlockPreview } from '@wordpress/block-editor';

/**
 * Style dependencies
 */
import {
	PagePreviewWrapper,
	PagePreviewFrame,
	PagePreviewPageNumber,
} from './styles/page-preview';

const PagePreview = ( { page, pageIndex } ) => {
	return (
		<PagePreviewWrapper className="is-active">
			<PagePreviewPageNumber>{ pageIndex + 1 }</PagePreviewPageNumber>

			<PagePreviewFrame>
				<BlockPreview blocks={ page } viewportWidth={ 800 } />
			</PagePreviewFrame>
		</PagePreviewWrapper>
	);
};

export default PagePreview;
