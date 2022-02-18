/**
 * External dependencies
 */
import { forEach, get } from 'lodash';
import { v4 as uuid } from 'uuid';

const getPublicTimestamp = ( project ) =>
	get( project, [ 'publicContent', 'timestamp' ], 0 );

const getDraftTimestamp = ( project ) =>
	get( project, [ 'draftContent', 'timestamp' ], 0 );

export const hasUnpublishedChanges = ( project ) =>
	getDraftTimestamp( project ) > getPublicTimestamp( project );

export const getLastUpdatedDate = ( project ) =>
	Math.max( getPublicTimestamp( project ), getDraftTimestamp( project ) );

export const isPublic = ( project ) => get( project, [ 'public' ], false );

export const generateClientIds = ( blocks ) =>
	forEach( blocks, ( block ) => {
		if ( block.attributes.clientId ) {
			block.attributes.clientId = uuid();
		}

		generateClientIds( block.innerBlocks );
	} );
