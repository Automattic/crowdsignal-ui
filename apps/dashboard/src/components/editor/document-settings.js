/**
 * External dependencies
 */
import {
	Button,
	Dropdown,
	ExternalLink,
	PanelBody,
	PanelRow,
	__experimentalUnitControl as UnitControl, // eslint-disable-line @wordpress/no-unsafe-wp-apis
} from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { format } from '@wordpress/date';
import { useEffect } from '@wordpress/element';
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

const DocumentSettings = ( { onChangeThemeClick, project } ) => {
	const { openGeneralSidebar } = useDispatch( 'isolated/editor' );
	const { saveAndUpdateProject, updateEditorEmbedCardViewport } = useDispatch(
		STORE_NAME
	);

	const [
		canPublish,
		editorTheme,
		selectedBlockClientId,
		embedCardSettings,
	] = useSelect( ( select ) => [
		select( STORE_NAME ).isEditorContentPublishable(),
		select( STORE_NAME ).getEditorTheme(),
		select( 'core/block-editor' ).getSelectedBlockClientId(),
		select( STORE_NAME ).getEditorEmbedCardSettings() || {},
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

	const visibility = isPublic( project )
		? __( 'Public', 'dashboard' )
		: __( 'Private', 'dashboard' );

	const activeTheme = getTheme( editorTheme );

	return (
		<DocumentSection>
			<PanelBody title={ __( 'Status & Visibility', 'dashboard' ) }>
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
						renderContent={ () => (
							<>
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
					<PanelBody title={ __( 'Permalink', 'dashboard' ) }>
						<PanelRow>
							<span>{ __( 'View Project', 'dashboard' ) }</span>
						</PanelRow>
						<ExternalLink
							href={ project.permalink }
							title={ project.permalink }
						>
							<span className="components-external-link__text">
								{ project.permalink }
							</span>
						</ExternalLink>
					</PanelBody>
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
				</>
			) }
		</DocumentSection>
	);
};

export default DocumentSettings;
