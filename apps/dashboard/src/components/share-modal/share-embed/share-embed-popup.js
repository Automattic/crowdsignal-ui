/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	__experimentalUnitControl as UnitControl, // eslint-disable-line @wordpress/no-unsafe-wp-apis
	Flex,
	FlexItem,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';
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
import { ShareEmbedPopupPreview } from './share-embed-popup-preview';
import { ModalCloseButton } from '../../modal';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../../../data';
import { embedPopupPositions } from '../../../util/share/embed-popup';

const getEmbedCodeSnippet = ( projectUrl ) =>
	'<script type="text/javascript" src="https://app.crowdsignal.com/embed.js" async></script>\n' +
	`<crowdsignal-popup src="${ projectUrl }"></crowdsignal-popup>`;

const docsURL =
	'https://crowdsignal.com/support/embed-your-survey-or-form-via-an-embed-iframe-or-an-embed-card/?embed-iframe#h2-embed-popup';

export const ShareEmbedPopup = ( { link, projectId } ) => {
	const [ showSettings, setShowSettings ] = useState( false );
	const { saveEmbedSettings, updateEditorEmbedPopupSettings } = useDispatch(
		STORE_NAME
	);

	const embedPopupSettings = useSelect( ( select ) =>
		select( STORE_NAME ).getEditorEmbedPopupSettings()
	);

	const debouncedSaveEmbedSettings = useCallback(
		debounce( saveEmbedSettings, 500 ),
		[]
	);

	const updateEmbedSettings = ( key ) => ( value ) => {
		const embedPopup = {
			...embedPopupSettings,
			[ key ]: value,
		};

		updateEditorEmbedPopupSettings( embedPopup );

		debouncedSaveEmbedSettings( projectId, {
			embedPopup,
		} );
	};

	const updateEmbedWidth = ( value ) =>
		updateEmbedSettings( 'width' )( parseInt( value, 10 ) );

	return (
		<ShareCard>
			<ShareCardHeader>
				<ShareCardHeaderTitle>
					{ __( 'Embed Popup', 'dashboard' ) }
				</ShareCardHeaderTitle>
				<ShareSettings>
					<button onClick={ () => setShowSettings( ! showSettings ) }>
						{ __( 'Edit appearance', 'dashboard' ) }
					</button>
					{ showSettings && (
						<ShareSettingsPopup>
							<ShareSettingsPopupHeader>
								<ShareSettingsPopupTitle>
									Embed Card
								</ShareSettingsPopupTitle>
								<ModalCloseButton
									onClick={ () => setShowSettings( false ) }
								/>
							</ShareSettingsPopupHeader>
							<ShareSettingsPopupContent>
								<Flex>
									<FlexItem isBlock>
										<UnitControl
											label={ __( 'Width', 'dashboard' ) }
											value={ embedPopupSettings.width }
											onChange={ updateEmbedWidth }
											units={ 'px' }
											__unstableInputWidth="50%"
										/>
									</FlexItem>
								</Flex>
								<ShareSettingsPopupHint className="with-margin-bottom">
									{ __(
										'Define the maximum width of the popup.',
										'dashboard'
									) }
								</ShareSettingsPopupHint>
								<SelectControl
									label={ __( 'Position of the popup' ) }
									value={ embedPopupSettings.position }
									options={ embedPopupPositions }
									onChange={ updateEmbedSettings(
										'position'
									) }
								/>
								<ShareSettingsPopupHint className="with-margin-bottom">
									{ __(
										'Choose where on the browser the popup should appear on page load.',
										'dashboard'
									) }
								</ShareSettingsPopupHint>
								<ToggleControl
									label={ __(
										'Show popup on mobile device',
										'dashboard'
									) }
									checked={ embedPopupSettings.showOnMobile }
									onChange={ updateEmbedSettings(
										'showOnMobile'
									) }
								/>
								<ShareSettingsPopupHint className="show-mobile-popup-hint">
									{ __(
										'Option to hide the popup on mobile devices.',
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
								'Embed your form or survey into your <a>WordPress site</a> or any <a>other website</a> <strong>via a popup window</strong> on page load.',
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
				<ShareEmbedPopupPreview />
			</ShareCardBody>
			<ShareCardFooter>
				<SharedCardLink />
				<ShareCardButton
					contentCopiedText={ __( 'Link copied!', 'dashboard' ) }
					defaultText={ __( 'Copy WordPress Link', 'dashboard' ) }
					shareContent={ `${ link }?type=popup` }
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
