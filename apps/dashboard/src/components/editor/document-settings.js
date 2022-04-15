/**
 * External dependencies
 */
import {
	Button,
	Dropdown,
	ExternalLink,
	PanelBody,
	PanelRow,
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

const DocumentSettings = ( { project, onChangeThemeClick } ) => {
	const { openGeneralSidebar, setIsInserterOpened } = useDispatch(
		'isolated/editor'
	);
	const { saveAndUpdateProject, saveEditorChanges } = useDispatch(
		STORE_NAME
	);

	const [
		canPublish,
		editorTheme,
		selectedBlockClientId,
	] = useSelect( ( select ) => [
		select( STORE_NAME ).isEditorContentPublishable(),
		select( STORE_NAME ).getEditorTheme(),
		select( 'core/block-editor' ).getSelectedBlockClientId(),
	] );

	useEffect( () => {
		if ( project.id ) {
			return;
		}

		setIsInserterOpened( true );
	}, [] );

	useEffect( () => {
		openGeneralSidebar(
			!! selectedBlockClientId ? 'edit-post/block' : 'edit-post/document'
		);
	}, [ selectedBlockClientId ] );

	const updateProjectVisibility = ( event ) => {
		if ( event.target.value === 'private' ) {
			saveAndUpdateProject( project.id, { public: false } );
			return;
		}

		saveEditorChanges( { public: true } );
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
				</>
			) }
		</DocumentSection>
	);
};

export default DocumentSettings;
