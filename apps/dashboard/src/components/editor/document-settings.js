/**
 * External dependencies
 */
import {
	Button,
	Dropdown,
	ExternalLink,
	PanelBody,
	TextControl,
	PanelRow,
	__experimentalUnitControl as UnitControl, // eslint-disable-line @wordpress/no-unsafe-wp-apis
	ToggleControl,
} from '@wordpress/components';
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalInspectorPopoverHeader as InspectorPopoverHeader } from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
import { format } from '@wordpress/date';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
// eslint-disable-next-line import/named
import { DocumentSection } from 'isolated-block-editor';

/**
 * Internal dependencies
 */

import { FormFieldset, FormRadio } from '@crowdsignal/components';
import { isPublic, getLastUpdatedDate } from '@crowdsignal/project';
import { STORE_NAME } from '../../data';
import { ToolbarButton } from './styles/button';
import { getTheme } from '../../util/theme/themes';

/**
 * Styles
 */
import { ToggleControlHint } from './styles/editor';

const DocumentSettings = ( { onChangeThemeClick, project } ) => {
	const { openGeneralSidebar } = useDispatch( 'isolated/editor' );
	const {
		saveAndUpdateProject,
		updateEditorEmbedCardViewport,
		updateEditorNavigationSettings,
		updateEditorSlug,
	} = useDispatch( STORE_NAME );

	const [
		canPublish,
		editorTheme,
		editorSlug,
		selectedBlockClientId,
		embedCardSettings,
		navigationSettings,
		currentPageIndex,
	] = useSelect( ( select ) => [
		select( STORE_NAME ).isEditorContentPublishable(),
		select( STORE_NAME ).getEditorTheme(),
		select( STORE_NAME ).getEditorSlug(),
		select( 'core/block-editor' ).getSelectedBlockClientId(),
		select( STORE_NAME ).getEditorEmbedCardSettings() || {},
		select( STORE_NAME ).getEditorNavigationSettings(),
		select( STORE_NAME ).getEditorCurrentPageIndex(),
	] );

	useEffect( () => {
		if ( ! selectedBlockClientId ) {
			return;
		}

		openGeneralSidebar( 'edit-post/block' );
	}, [ selectedBlockClientId ] );

	const updateProjectVisibility = ( event ) => {
		if ( event.target.value === 'private' ) {
			saveAndUpdateProject( project.id, { public: false } );
			return;
		}

		saveAndUpdateProject( project.id, { public: true } );
	};

	const updateEmbedViewport = ( key ) => ( value ) => {
		updateEditorEmbedCardViewport( {
			...( embedCardSettings.viewport || {} ),
			[ key ]: parseInt( value, 10 ),
		} );
	};

	const updateNavigationSettings = ( property ) => ( value ) => {
		updateEditorNavigationSettings( {
			...navigationSettings,
			[ property ]: value,
		} );
	};

	const visibility = isPublic( project )
		? __( 'Public', 'dashboard' )
		: __( 'Private', 'dashboard' );

	const activeTheme = getTheme( editorTheme );

	const [ slugExplain, setSlugExplain ] = useState(
		__( 'The last part of the URL', 'dashboard' )
	);
	const updateSlug = ( value ) => {
		updateEditorSlug( value );
		setSlugExplain(
			isPublic( project )
				? __( 'Click Update or Save to save permalink', 'dashboard' )
				: __( 'Click Save or Publish to save permalink', 'dashboard' )
		);
	};

	return (
		<DocumentSection>
			<PanelBody title={ __( 'Summary', 'dashboard' ) }>
				<PanelRow className="project-visibility">
					<span>{ __( 'Visibility', 'dashboard' ) }</span>
					<Dropdown
						popoverProps={ {
							className: 'editor__project-visibility-popover',
						} }
						renderToggle={ ( { isOpen, onToggle } ) => (
							<Button
								aria-expanded={ isOpen }
								onClick={ onToggle }
								variant="tertiary"
								disabled={
									! isPublic( project ) && ! canPublish
								}
							>
								{ visibility }
							</Button>
						) }
						renderContent={ ( e ) => (
							<>
								<InspectorPopoverHeader
									title={ __( 'Visibility', 'dashboard' ) }
									onClose={ e.onToggle }
								/>
								<FormFieldset
									name="project-visibility"
									inputComponent={ FormRadio }
									label={ __( 'Public', 'dashboard' ) }
									explanation={ __(
										'Visible to everyone',
										'dashboard'
									) }
									onChange={ updateProjectVisibility }
									value="public"
									defaultChecked={ isPublic( project ) }
									disabled={ ! canPublish }
								/>
								<FormFieldset
									name="project-visibility"
									inputComponent={ FormRadio }
									label={ __( 'Private', 'dashboard' ) }
									explanation={ __(
										'Visible only to you',
										'dashboard'
									) }
									onChange={ updateProjectVisibility }
									value="private"
									defaultChecked={ ! isPublic( project ) }
								/>
							</>
						) }
					/>
				</PanelRow>

				<PanelRow className="project-permalink">
					<span className="edit-project-slug">
						{ __( 'URL', 'dashboard' ) }
					</span>
					<Dropdown
						className="project-permalink-dropdown"
						popoverProps={ {
							className: 'editor__project-permalink-edit',
						} }
						renderToggle={ ( { isOpen, onToggle } ) => (
							<Button
								className="project-permalink-button"
								aria-expanded={ isOpen }
								onClick={ onToggle }
								variant="tertiary"
								disabled={
									! isPublic( project ) && ! canPublish
								}
							>
								{ ! canPublish ? 'Pending' : project.permalink }
							</Button>
						) }
						renderContent={ ( e ) => (
							<>
								<InspectorPopoverHeader
									title={ __( 'URL', 'dashboard' ) }
									onClose={ e.onToggle }
								/>
								<FormFieldset
									name="project-permalink-popover"
									inputComponent={ TextControl }
									label={ __( 'Permalink', 'dashboard' ) }
									explanation={ slugExplain }
									value={ editorSlug }
									onChange={ updateSlug }
									disabled={ ! canPublish }
								/>
								{ __( 'View Project', 'dashboard' ) }
								<ExternalLink
									className="project-permalink-current-url"
									href={ project.permalink }
								>
									{ project.permalink }
								</ExternalLink>
							</>
						) }
					/>
				</PanelRow>

				<PanelRow className="project-created-date">
					<span>{ __( 'Created', 'dashboard' ) }</span>
					<span>
						{ project
							? format( 'F j, Y H:i', project.created )
							: '-' }
					</span>
				</PanelRow>
				<PanelRow className="project-updated-date">
					<span>{ __( 'Updated', 'dashboard' ) }</span>
					<span>
						{ project
							? format(
									'F j, Y H:i',
									getLastUpdatedDate( project )
							  )
							: '-' }
					</span>
				</PanelRow>
			</PanelBody>
			{ project && (
				<>
					<PanelBody
						title={ __( 'Theme', 'dashboard' ) }
						className="theme-panel"
					>
						<PanelRow>
							<span>
								{ __( 'Your active theme:', 'dashboard' ) }
							</span>
						</PanelRow>
						<PanelRow>
							<img
								src={ activeTheme.image }
								alt={ activeTheme.name }
							/>
						</PanelRow>
						<PanelRow className="theme-panel__actions">
							<span>{ activeTheme.name }</span>
							<ToolbarButton
								as={ Button }
								variant="tertiary"
								onClick={ onChangeThemeClick }
							>
								{ __( 'Change Theme', 'dashboard' ) }
							</ToolbarButton>
						</PanelRow>
					</PanelBody>
					<PanelBody title={ __( 'Embed Card', 'dashboard' ) }>
						<PanelRow className="with-gap">
							<UnitControl
								label={ __( 'Width', 'dashboard' ) }
								value={
									embedCardSettings.viewport?.width || ''
								}
								onChange={ updateEmbedViewport( 'width' ) }
								units={ 'px' }
							/>
							<UnitControl
								label={ __( 'Height', 'dashboard' ) }
								value={
									embedCardSettings.viewport?.height || ''
								}
								onChange={ updateEmbedViewport( 'height' ) }
								units={ 'px' }
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title={ __( 'Navigation', 'dashboard' ) }>
						<ToggleControl
							label={ __( 'Show pagination', 'dashboard' ) }
							checked={ navigationSettings.showPagination }
							onChange={ updateNavigationSettings(
								'showPagination'
							) }
						/>
						<ToggleControl
							label={ __(
								'Show progress indicator',
								'dashboard'
							) }
							checked={ navigationSettings.showProgress }
							onChange={ updateNavigationSettings(
								'showProgress'
							) }
						/>
						<ToggleControl
							label={ __( 'Show back button', 'dashboard' ) }
							checked={ navigationSettings.showBackButton }
							onChange={ updateNavigationSettings(
								'showBackButton'
							) }
						/>
						{ currentPageIndex === 0 &&
							navigationSettings.showBackButton && (
								<ToggleControlHint>
									{ __(
										"Button doesn't show on page one.",
										'dashboard'
									) }
								</ToggleControlHint>
							) }
					</PanelBody>
				</>
			) }
		</DocumentSection>
	);
};

export default DocumentSettings;
