/**
 * External dependencies
 */
// eslint-disable-next-line import/named
import { DocumentSection } from 'isolated-block-editor';
import { get } from 'lodash';
import { __ } from '@wordpress/i18n';
// eslint-disable-next-line
import { __experimentalGetSettings, format } from '@wordpress/date';
import { ExternalLink, PanelBody, PanelRow } from '@wordpress/components';

const DocumentSettings = ( { project } ) => {
	const DATETIME_FORMAT = 'F j, Y H:i';
	const formatDate = ( timestamp ) =>
		format( DATETIME_FORMAT, timestamp * 1000 );

	const isPublic = get( project, [ 'content', 'public' ], false );
	const visibiliy = isPublic
		? __( 'Public', 'dashboard' )
		: __( 'Private', 'dashboard' );

	const publicTimestamp = get(
		project,
		[ 'content', 'public', 'timestamp' ],
		0
	);
	const draftTimestamp = get(
		project,
		[ 'content', 'draft', 'timestamp' ],
		0
	);
	const lastUpdated = Math.max( publicTimestamp, draftTimestamp );

	return (
		<DocumentSection>
			<PanelBody title={ __( 'Status & Visibility', 'dashboard' ) }>
				<PanelRow className="project-visibility">
					<span>{ __( 'Visibility', 'dashboard' ) }</span>
					<span>{ visibiliy }</span>
				</PanelRow>
				<PanelRow className="project-created-date">
					<span>{ __( 'Created', 'dashboard' ) }</span>
					<span>{ formatDate( project.created ) }</span>
				</PanelRow>
				<PanelRow className="project-updated-date">
					<span>{ __( 'Updated', 'dashboard' ) }</span>
					<span>{ formatDate( lastUpdated ) }</span>
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
