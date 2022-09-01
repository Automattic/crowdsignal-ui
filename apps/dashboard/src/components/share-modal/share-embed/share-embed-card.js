/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	__experimentalUnitControl as UnitControl, // eslint-disable-line @wordpress/no-unsafe-wp-apis
	Flex,
} from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import {
	createInterpolateElement,
	useCallback,
	useState,
} from '@wordpress/element';
import { debounce } from 'lodash';

/**
 * Internal dependencies
 */
import {
	ShareCard,
	ShareCardBody,
	ShareCardContentText,
	ShareCardFooter,
	ShareCardHeader,
	SharedCardLink,
	ShareCardContent,
	ShareCardHeaderTitle,
} from '../share-card/share-card';
import {
	ShareSettings,
	ShareSettingsPopup,
	ShareSettingsPopupHeader,
	ShareSettingsPopupTitle,
	ShareSettingsPopupContent,
	ShareSettingsPopupHint,
} from '../share-settings';
import { ShareCardButton } from '../share-card/share-card-button';
import { ShareEmbedCardPreview } from './share-embed-card-preview';
import { ModalCloseButton } from '../../modal';
import { STORE_NAME } from '../../../data';

const getEmbedCodeSnippet = ( projectUrl ) =>
	'<script type="text/javascript" src="https://app.crowdsignal.com/embed.js" async></script>\n' +
	`<crowdsignal-card src="${ projectUrl }"></crowdsignal-card>`;

const docsURL =
	'https://crowdsignal.com/support/embed-your-survey-or-form-via-an-embed-iframe-or-an-embed-card/?embed-iframe#h2-embed-card';

export const ShareEmbedCard = ( { link, projectId } ) => {
	const [ showSettings, setShowSettings ] = useState( false );
	const { saveEmbedSettings, updateEditorEmbedCardViewport } = useDispatch(
		STORE_NAME
	);

	const embedCardSettings = useSelect(
		( select ) => select( STORE_NAME ).getEditorEmbedCardSettings() || {}
	);

	const debouncedSaveEmbedSettings = useCallback(
		debounce( saveEmbedSettings, 500 ),
		[]
	);

	const updateEmbedViewport = ( key ) => ( value ) => {
		const embedCard = {
			...embedCardSettings,
			viewport: {
				...( embedCardSettings.viewport || {} ),
				[ key ]: parseInt( value, 10 ),
			},
		};

		updateEditorEmbedCardViewport( embedCard.viewport );

		debouncedSaveEmbedSettings( projectId, {
			embedCard,
		} );
	};

	return (
		<ShareCard>
			<ShareCardHeader>
				<ShareCardHeaderTitle>
					{ __( 'Embed Card', 'dashboard' ) }
				</ShareCardHeaderTitle>
				<ShareSettings>
					<button onClick={ () => setShowSettings( ! showSettings ) }>
						{ __( 'Edit card format', 'dashboard' ) }
					</button>
					{ showSettings && (
						<ShareSettingsPopup>
							<ShareSettingsPopupHeader>
								<ShareSettingsPopupTitle>
									{ __( 'Embed Card', 'dashboard' ) }
								</ShareSettingsPopupTitle>
								<ModalCloseButton
									onClick={ () => setShowSettings( false ) }
								/>
							</ShareSettingsPopupHeader>
							<ShareSettingsPopupContent>
								<Flex gap={ 4 }>
									<UnitControl
										label={ __( 'Width', 'dashboard' ) }
										value={
											embedCardSettings.viewport?.width ||
											''
										}
										onChange={ updateEmbedViewport(
											'width'
										) }
										units={ 'px' }
									/>
									<UnitControl
										label={ __( 'Height', 'dashboard' ) }
										value={
											embedCardSettings.viewport
												?.height || ''
										}
										onChange={ updateEmbedViewport(
											'height'
										) }
										units={ 'px' }
									/>
								</Flex>
								<ShareSettingsPopupHint>
									{ __(
										'Define the format and maximum size of your embed card.',
										'dashboard'
									) }
								</ShareSettingsPopupHint>
							</ShareSettingsPopupContent>
						</ShareSettingsPopup>
					) }
				</ShareSettings>
			</ShareCardHeader>
			<ShareCardBody>
				<ShareCardContent>
					<ShareCardContentText>
						{ createInterpolateElement(
							__(
								'Embed your form or survey into your <a>WordPress site</a> or any <a>other website</a> via a card <strong>with a fixed format.</strong>',
								'dashboard'
							),
							{
								a: (
									<a
										href={ docsURL }
										target="_blank"
										rel="noopener noreferrer"
									/>
								),
								strong: <strong />,
							}
						) }
					</ShareCardContentText>
				</ShareCardContent>
				<ShareEmbedCardPreview />
			</ShareCardBody>
			<ShareCardFooter>
				<SharedCardLink />
				<ShareCardButton
					contentCopiedText={ __( 'Link copied!', 'dashboard' ) }
					defaultText={ __( 'Copy WordPress Link', 'dashboard' ) }
					shareContent={ `${ link }?type=card` }
				/>
				<ShareCardButton
					contentCopiedText={ __(
						'Code snippet copied!',
						'dashboard'
					) }
					defaultText={ __( 'Copy JS Code Snippet', 'dashboard' ) }
					shareContent={ getEmbedCodeSnippet( link ) }
				/>
			</ShareCardFooter>
		</ShareCard>
	);
};
