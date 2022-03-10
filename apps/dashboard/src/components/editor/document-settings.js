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

const DocumentSettings = ( { project } ) => {
	const { openGeneralSidebar } = useDispatch( 'isolated/editor' );
	const { saveAndUpdateProject, saveEditorChanges } = useDispatch(
		STORE_NAME
	);

	const [ canPublish, selectedBlockClientId ] = useSelect( ( select ) => [
		select( STORE_NAME ).isEditorContentPublishable(),
		select( 'core/block-editor' ).getSelectedBlockClientId(),
	] );

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
			) }
		</DocumentSection>
	);
};

export default DocumentSettings;
