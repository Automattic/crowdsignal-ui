/**
 * External dependencies
 */
import { map } from 'lodash';
import { v4 as uuid } from 'uuid';

const resetClientIds = ( collection ) => {
	return map( collection, ( block ) => {
		return {
			...block,
			clientId: uuid(),
			innerBlocks: resetClientIds( block.innerBlocks ),
		};
	} );
};

export const resetPagesClientIds = ( pages ) =>
	map( pages, ( page ) => resetClientIds( page ) );

export const resetDraftContentClientIds = ( project ) => {
	if ( project.publicContent && project.draftContent.pages ) {
		// eslint-disable-next-line
		console.log( 'resetting IDs' );
		project.draftContent.pages = resetPagesClientIds(
			project.draftContent.pages
		);
	}
	return project;
};
