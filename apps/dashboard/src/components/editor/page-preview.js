/**
 * External dependencies
 */
import { BlockPreview } from '@wordpress/block-editor';
import { Icon, trash } from '@wordpress/icons';
import classnames from 'classnames';

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

const PagePreview = ( {
	disablePageActions,
	isActive,
	onDelete,
	onSelect,
	page,
	pageIndex,
} ) => {
	const handleSelect = () => onSelect( pageIndex );

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

			{ ! disablePageActions && (
				<DeleteButton
					disabled={ disablePageActions }
					onClick={ handleDelete }
				>
					<Icon icon={ trash } size={ 12 } />
				</DeleteButton>
			) }
		</PagePreviewWrapper>
	);
};

export default PagePreview;
