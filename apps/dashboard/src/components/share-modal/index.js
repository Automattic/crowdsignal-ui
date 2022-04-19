/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import {
	ModalDialog,
	ModalNavigation,
	ModalHeader,
	ModalHeaderNote,
	ModalWrapper,
	ModalTemplateGrid,
	ModalCloseButton,
} from '../modal';
import { ShareLink } from './share-link/share-link';

const ShareModalDialog = styled( ModalDialog )`
	max-width: 1350px;
`;

const SharedModalFooterNote = styled.div`
	color: var( --color-neutral-60 );
	font-size: 16px;
	line-height: 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 160px 0;
`;

const ShareModal = ( { project, onClose } ) => {
	const onWrapperClickHandler = ( event ) => {
		if ( event.target === event.currentTarget ) {
			onClose();
		}
	};
	return (
		<ModalWrapper onClick={ onWrapperClickHandler }>
			<ShareModalDialog id="crowdsignal-share-modal">
				<ModalNavigation>
					<ModalCloseButton onClick={ onClose } />
				</ModalNavigation>
				<ModalHeader>
					{ __( 'Share and collect responses', 'dashboard' ) }
				</ModalHeader>
				<ModalHeaderNote>
					{ __( "It's time to collect some signals.", 'dashboard' ) }
				</ModalHeaderNote>
				<ModalTemplateGrid>
					<ShareLink link={ project.permalink } />
				</ModalTemplateGrid>
				<SharedModalFooterNote>
					<span>
						{ __(
							'More channels for sharing and embedding your forms are coming soon.',
							'dashboard'
						) }
					</span>
					<span>
						{ __(
							'Thank you for using this beta version!',
							'dashboard'
						) }
					</span>
				</SharedModalFooterNote>
			</ShareModalDialog>
		</ModalWrapper>
	);
};

export default ShareModal;
