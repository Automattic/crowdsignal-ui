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

const ShareModalDialog = styled( ModalDialog )`
	width: 100%;
	max-width: 1350px;
	height: 95%;
	max-height: 800px;
	min-height: 550px;
	overflow: auto;
	padding: 40px;
`;

const ShareModalGrid = styled( ModalTemplateGrid )`
	overflow: unset;
	margin-bottom: 40px;
`;

const SharedModalFooterNote = styled.div`
	color: var( --color-neutral-60 );
	font-size: 16px;
	line-height: 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex-grow: 1;
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
					<ShareEmbedCard link={ project.permalink } />
					<ShareEmbed link={ project.permalink } />
				</ShareModalGrid>
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
