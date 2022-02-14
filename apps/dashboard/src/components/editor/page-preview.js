/**
 * External dependencies
 */
import { BlockPreview } from '@wordpress/block-editor';
import { forwardRef } from '@wordpress/element';
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

const PagePreview = (
	{
		disablePageActions,
		draggableProps,
		dragHandleProps,
		isActive,
		isDragging,
		label,
		onDelete,
		onSelect,
		page,
		pageIndex,
	},
	ref
) => {
	const handleSelect = () => onSelect( pageIndex );

	const handleDelete = () => onDelete( pageIndex );

	const classes = classnames( {
		'is-active': isActive,
		'is-dragging': isDragging,
	} );

	return (
		<PagePreviewWrapper
			ref={ ref }
			className={ classes }
			{ ...draggableProps }
		>
			<PagePreviewButton onClick={ handleSelect } { ...dragHandleProps }>
				<PagePreviewPageNumber>
					{ label || pageIndex + 1 }
				</PagePreviewPageNumber>

				<PagePreviewFrame>
					<BlockPreview blocks={ page } viewportWidth={ 1200 } />
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

export default forwardRef( PagePreview );
