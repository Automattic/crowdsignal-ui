/**
 * External dependencies
 */
import { BlockPreview } from '@wordpress/block-editor';
import { useDispatch } from '@wordpress/data';
import { Icon, trash } from '@wordpress/icons';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { STORE_NAME } from '../../data';

/**
 * Style dependencies
 */
import {
	DeleteButton,
	PagePreviewButton,
	PagePreviewFrame,
	PagePreviewPageNumber,
	PagePreviewWrapper,
} from './styles/page-preview';

const PagePreview = ( { isActive, onDelete, page, pageIndex } ) => {
	const { setEditorCurrentPage } = useDispatch( STORE_NAME );

	const handleSelect = () => setEditorCurrentPage( pageIndex );

	const handleDelete = () => onDelete( pageIndex );

	const classes = classnames( {
		'is-active': isActive,
	} );

	return (
		<PagePreviewWrapper className={ classes }>
			<PagePreviewButton onClick={ handleSelect }>
				<PagePreviewPageNumber>{ pageIndex + 1 }</PagePreviewPageNumber>

				<PagePreviewFrame>
					<BlockPreview blocks={ page } viewportWidth={ 800 } />
				</PagePreviewFrame>
			</PagePreviewButton>

			<DeleteButton onClick={ handleDelete }>
				<Icon icon={ trash } size={ 12 } />
			</DeleteButton>
		</PagePreviewWrapper>
	);
};

export default PagePreview;
