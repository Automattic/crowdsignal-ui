/**
 * External dependencies
 */
import { uniqueId } from 'lodash';

/**
 * Internal dependencies
 */
import { NOTICE_CREATE, NOTICE_REMOVE, ROUTE_UPDATE } from 'data/action-types';

export function removeNotice( noticeId ) {
	return {
		type: NOTICE_REMOVE,
		noticeId,
	};
}

export async function* createNotice(
	noticeId,
	status,
	message,
	{ duration = 900, ...options }
) {
	yield {
		type: NOTICE_CREATE,
		noticeId,
		message,
		status,
		options,
	};

	if ( ! options.duration ) {
		return;
	}

	await new Promise( ( resolve ) => setTimeout( resolve, duration * 1000 ) );

	return removeNotice( noticeId );
}

export const errorNotice = ( message, { id, ...options } ) =>
	createNotice( id || uniqueId(), 'error', message, options );

export const successNotice = ( message, { id, ...options } ) =>
	createNotice( id || uniqueId(), 'success', message, options );

export const infoNotice = ( message, { id, ...options } ) =>
	createNotice( id || uniqueId(), 'info', message, options );

export function redirect( path ) {
	return {
		type: ROUTE_UPDATE,
		path,
	};
}
