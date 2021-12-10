/**
 * External dependencies
 */
// eslint-disable-next-line import/named
import { DocumentSection } from 'isolated-block-editor';
import { __ } from '@wordpress/i18n';
import { ExternalLink, PanelBody, PanelRow } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { isPublic, getLastUpdatedDate } from '../../util/project';
import { timestampToDate } from '../../util/date';

const DocumentSettings = ( { project } ) => {
	const visibiliy = isPublic( project )
		? __( 'Public', 'dashboard' )
		: __( 'Private', 'dashboard' );

	return (
		<DocumentSection>
			<PanelBody title={ __( 'Status & Visibility', 'dashboard' ) }>
				<PanelRow className="project-visibility">
					<span>{ __( 'Visibility', 'dashboard' ) }</span>
					<span>{ visibiliy }</span>
				</PanelRow>
				<PanelRow className="project-created-date">
					<span>{ __( 'Created', 'dashboard' ) }</span>
					<span>{ timestampToDate( project.created ) }</span>
				</PanelRow>
				<PanelRow className="project-updated-date">
					<span>{ __( 'Updated', 'dashboard' ) }</span>
					<span>
						{ timestampToDate( getLastUpdatedDate( project ) ) }
					</span>
				</PanelRow>
			</PanelBody>
			<PanelBody title={ __( 'Permalink', 'dashboard' ) }>
				<PanelRow>
					<span>{ __( 'View Project', 'dashboard' ) }</span>
				</PanelRow>
				<ExternalLink href={ project.permalink }>
					{ project.permalink }
				</ExternalLink>
			</PanelBody>
		</DocumentSection>
	);
};

export default DocumentSettings;
