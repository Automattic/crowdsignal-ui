/**
 * External dependencies
 */
import { BlockPreview } from '@wordpress/block-editor';
import { MenuItem } from '@wordpress/components';
import { forwardRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { MoreMenuDropdown } from '@wordpress/interface';
import classnames from 'classnames';
import { Transition } from 'react-transition-group';

/**
 * Style dependencies
 */
import {
	PagePreviewButton,
	PagePreviewFrame,
	PagePreviewMoreMenu,
	PagePreviewPageNumber,
	PagePreviewWrapper,
} from './styles/page-preview';

const PagePreview = (
	{
		disablePageActions,
		draggableProps,
		dragHandleProps,
		isActive,
		isExpanded,
		isDragging,
		label,
		onDelete,
		onDuplicate,
		onSelect,
		page,
		pageIndex,
	},
	ref
) => {
	const handleSelect = () => onSelect( pageIndex );

	const handleDelete = () => {
		// eslint-disable-next-line
		const confirmed = window.confirm(
			__(
				'Are you sure you want to delete this page? This action cannot be undone.',
				'dashboard'
			)
		);

		if ( ! confirmed ) {
			return;
		}

		onDelete( pageIndex );
	};

	const handleDuplicate = () => onDuplicate( pageIndex );

	const classes = classnames( {
		'is-active': isActive,
		'is-dragging': isDragging,
		'is-expanded': isExpanded,
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

				<Transition in={ isExpanded } timeout={ 300 }>
					{ ( state ) => (
						<PagePreviewFrame className={ state }>
							<BlockPreview
								blocks={ page }
								viewportWidth={ 1200 }
							/>
						</PagePreviewFrame>
					) }
				</Transition>
			</PagePreviewButton>

			{ ! disablePageActions && isExpanded && (
				<PagePreviewMoreMenu as={ MoreMenuDropdown }>
					{ () => (
						<>
							<MenuItem onClick={ handleDuplicate }>
								{ __( 'Duplicate', 'dashboard' ) }
							</MenuItem>
							<MenuItem onClick={ handleDelete }>
								{ __( 'Delete', 'dashboard' ) }
							</MenuItem>
						</>
					) }
				</PagePreviewMoreMenu>
			) }
		</PagePreviewWrapper>
	);
};

export default forwardRef( PagePreview );
