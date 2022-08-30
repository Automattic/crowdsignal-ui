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
import { ShareEmbed } from './share-embed/share-embed';
import { ShareEmbedCard } from './share-embed/share-embed-card';
import { ShareEmbedPopup } from './share-embed/share-embed-popup';

const ShareModalDialog = styled( ModalDialog )`
	width: 100%;
	max-width: 1350px;
	height: 95%;
	max-height: 910px;
	min-height: 550px;
	overflow: auto;
	padding: 40px;
`;

const ShareModalGrid = styled( ModalTemplateGrid )`
	overflow: unset;
`;

const ShareModal = ( { project, onClose } ) => {
	const onWrapperClickHandler = ( event ) => {
		if ( event.target === event.currentTarget ) {
			onClose();
		}
	};
	return (
		<ModalWrapper onClick={ onWrapperClickHandler }>
			<ShareModalDialog
				id="crowdsignal-share-modal"
				className="crowdsignal-share-modal"
			>
				<ModalNavigation>
					<ModalCloseButton onClick={ onClose } />
				</ModalNavigation>
				<ModalHeader>
					{ __( 'Share and collect responses', 'dashboard' ) }
				</ModalHeader>
				<ModalHeaderNote>
					{ __( "It's time to collect some signals.", 'dashboard' ) }
				</ModalHeaderNote>
				<ShareModalGrid className="crowdsignal-share-modal__grid">
					<ShareLink link={ project.permalink } />
					<ShareEmbedCard
						link={ project.permalink }
						projectId={ project.id }
					/>
					<ShareEmbed link={ project.permalink } />
					<ShareEmbedPopup
						link={ project.permalink }
						projectId={ project.id }
					/>
				</ShareModalGrid>
			</ShareModalDialog>
		</ModalWrapper>
	);
};

export default ShareModal;
