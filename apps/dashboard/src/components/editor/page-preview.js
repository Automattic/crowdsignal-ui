/**
 * External dependencies
 */
import { BlockPreview } from '@wordpress/block-editor';
import { useDispatch } from '@wordpress/data';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { STORE_NAME } from '../../data';

/**
 * Style dependencies
 */
import {
	PagePreviewWrapper,
	PagePreviewFrame,
	PagePreviewPageNumber,
} from './styles/page-preview';

const PagePreview = ( { isActive, page, pageIndex } ) => {
	const { setEditorCurrentPage } = useDispatch( STORE_NAME );

	const handleSelect = () => setEditorCurrentPage( pageIndex );

	const classes = classnames( {
		'is-active': isActive,
	} );

	return (
		<PagePreviewWrapper onClick={ handleSelect } className={ classes }>
			<PagePreviewPageNumber>{ pageIndex + 1 }</PagePreviewPageNumber>

			<PagePreviewFrame>
				<BlockPreview blocks={ page } viewportWidth={ 800 } />
			</PagePreviewFrame>
		</PagePreviewWrapper>
	);
};

export default PagePreview;
