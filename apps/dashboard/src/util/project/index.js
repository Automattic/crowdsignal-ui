/**
 * External dependencies
 */
import { get } from 'lodash';

export const hasUnpublishedChanges = ( project ) =>
	get( project, [ 'content', 'draft', 'timestamp' ], 0 ) >
	get( project, [ 'content', 'public', 'timestamp' ], 0 );
