/**
 * External dependencies
 */
import { select } from '@wordpress/data';
import { isEmpty, dropRight, every, keys } from 'lodash';

/**
 * Internal dependencies
 */
import { redirect } from '@crowdsignal/router';
import {
	EDITOR_AUTOSAVE_TIMER_CANCEL,
	EDITOR_AUTOSAVE_TIMER_RESET,
	EDITOR_CURRENT_PAGE_INDEX_SET,
	EDITOR_EMBED_CARD_VIEWPORT_UPDATE,
	EDITOR_EMBED_POPUP_SETTINGS_UPDATE,
	EDITOR_EMBED_SETTINGS_SAVE_SUCCESS,
	EDITOR_INIT,
	EDITOR_NAVIGATION_SETTINGS_UPDATE,
	EDITOR_PAGE_DELETE,
	EDITOR_PAGE_DUPLICATE,
	EDITOR_PAGE_INSERT,
	EDITOR_PAGE_ORDER_UPDATE,
	EDITOR_PAGE_UPDATE,
	EDITOR_SAVE,
	EDITOR_SAVE_ERROR,
	EDITOR_SAVE_SUCCESS,
	EDITOR_SLUG_UPDATE,
	EDITOR_TEMPLATE_UPDATE,
	EDITOR_THEME_UPDATE,
	EDITOR_TITLE_UPDATE,
} from '../action-types';
import { saveAndUpdateProject } from '../projects/actions';
import { STORE_NAME } from '../';
import { trackContentInsert } from '../../util/tracking';

const autosave = ( actionCreator ) => {
	return function* ( ...args ) {
		yield { type: EDITOR_AUTOSAVE_TIMER_RESET };
		return actionCreator( ...args );
	};
};

export const initializeEditor = (
	projectId,
	{ embedCard, embedPopup, navigation, pages, slug, theme, title }
) => ( {
	type: EDITOR_INIT,
	projectId,
	embedCard,
	embedPopup,
	navigation,
	pages,
	slug,
	theme,
	title,
} );

export const setEditorCurrentPage = ( pageIndex ) => ( {
	type: EDITOR_CURRENT_PAGE_INDEX_SET,
	pageIndex,
} );

export function* saveEditorChanges( options = {} ) {
	const projectId = select( STORE_NAME ).getEditorProjectId();
	const changes = select( STORE_NAME ).getEditorChanges();
	const data = select( STORE_NAME ).getEditorUpdatedProjectData( {
		public: options.public,
	} );

	if ( projectId === 0 ) {
		data.template = select( STORE_NAME ).getEditorTemplate();
	}

	yield { type: EDITOR_SAVE };
	yield { type: EDITOR_AUTOSAVE_TIMER_CANCEL };

	try {
		yield saveAndUpdateProject( projectId, data );

		// Update editor project ID and redirect to the correct URL
		// when creating a new project
		if ( projectId === 0 ) {
			const newProjectId = select( STORE_NAME ).getLastUpdatedProjectId();

			yield {
				type: EDITOR_SAVE_SUCCESS,
				projectId: newProjectId,
			};

			redirect( `/project/${ newProjectId }` );
			return;
		}

		return {
			type: EDITOR_SAVE_SUCCESS,
			projectId,
		};
	} catch ( error ) {
		return { type: EDITOR_SAVE_ERROR, changes };
	}
}

export function* saveEmbedSettings( projectId, embedSettings ) {
	const settings = {};

	if ( embedSettings.embedCard ) {
		settings.draftEmbedCard = embedSettings.embedCard;
		settings.publicEmbedCard = embedSettings.embedCard;
	}

	if ( embedSettings.embedPopup ) {
		settings.draftEmbedPopup = embedSettings.embedPopup;
		settings.publicEmbedPopup = embedSettings.embedPopup;
	}

	yield saveAndUpdateProject( projectId, settings );

	return {
		type: EDITOR_EMBED_SETTINGS_SAVE_SUCCESS,
		savedSettings: keys( embedSettings ),
	};
}

export const deleteEditorPage = autosave( ( pageIndex ) => ( {
	type: EDITOR_PAGE_DELETE,
	pageIndex,
} ) );

export const duplicateEditorPage = autosave( ( pageIndex ) => ( {
	type: EDITOR_PAGE_DUPLICATE,
	pageIndex,
} ) );

export const insertEditorPage = autosave( ( pageIndex, pageContent ) => ( {
	type: EDITOR_PAGE_INSERT,
	pageIndex,
	pageContent,
} ) );

export const updateEditorPage = autosave( ( pageIndex, pageContent ) => {
	const editorPages = select( STORE_NAME ).getEditorPages();
	const currentUser = select( STORE_NAME ).getCurrentUser();
	const allPagesEmpty = every( dropRight( editorPages ), ( page ) =>
		isEmpty( page )
	);

	if ( allPagesEmpty && ! isEmpty( pageContent ) ) {
		trackContentInsert( currentUser );
	}

	return {
		type: EDITOR_PAGE_UPDATE,
		pageIndex,
		pageContent,
	};
} );

export const updateEditorPageOrder = autosave( ( order ) => ( {
	type: EDITOR_PAGE_ORDER_UPDATE,
	order,
} ) );

export const updateEditorTitle = autosave( ( title ) => ( {
	type: EDITOR_TITLE_UPDATE,
	title,
} ) );

export const updateEditorTheme = ( theme ) => ( {
	type: EDITOR_THEME_UPDATE,
	theme,
} );

export const updateEditorTemplate = ( template ) => ( {
	type: EDITOR_TEMPLATE_UPDATE,
	template,
} );

export const updateEditorEmbedCardViewport = ( viewport ) => ( {
	type: EDITOR_EMBED_CARD_VIEWPORT_UPDATE,
	viewport,
} );

export const updateEditorEmbedPopupSettings = ( settings ) => ( {
	type: EDITOR_EMBED_POPUP_SETTINGS_UPDATE,
	settings,
} );

export const updateEditorNavigationSettings = ( navigation ) => ( {
	type: EDITOR_NAVIGATION_SETTINGS_UPDATE,
	navigation,
} );

export const updateEditorSlug = ( slug ) => ( {
	type: EDITOR_SLUG_UPDATE,
	slug,
} );
