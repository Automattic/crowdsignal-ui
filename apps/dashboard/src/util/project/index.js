/**
 * External dependencies
 */
import { get } from 'lodash';

const getProjectTimestamp = ( project, contentType ) =>
	get( project, [ 'content', contentType, 'timestamp' ], 0 );

const getPublicTimestamp = ( project ) =>
	getProjectTimestamp( project, 'public' );

const getDraftTimestamp = ( project ) =>
	getProjectTimestamp( project, 'draft' );

export const hasUnpublishedChanges = ( project ) =>
	getDraftTimestamp( project ) > getPublicTimestamp( project );

export const getLastUpdatedDate = ( project ) =>
	Math.max( getPublicTimestamp( project ), getDraftTimestamp( project ) );

export const isPublic = ( project ) =>
	get( project, [ 'content', 'public' ], false );

export const projectHash = ( project ) => {
	if ( ! project ) {
		return '';
	}

	const url = new window.URL( project.permalink );
	const match = url.pathname.match( /^\/([0-9a-zA-Z-]+)\/?/ );

	return match ? match[ 1 ] : '';
};
