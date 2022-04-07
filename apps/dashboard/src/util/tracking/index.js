/* global localStorage */

export const trackEvent = ( user, event, properties ) => {
	if ( ! user ) {
		return;
	}

	window._tkq = window._tkq || [];
	window._tkq.push( [ 'identifyUser', user.userId, user.profile.username ] );
	window._tkq.push( [
		'recordEvent',
		event,
		{
			user_id: user.userId,
			...properties,
		},
	] );
};

export const trackEditorLoaded = ( user, projectId ) => {
	const EDITOR_LOADED_KEY = 'editor_last_loaded_date';
	const lastEditorLoad =
		Number( localStorage.getItem( EDITOR_LOADED_KEY ) ) || 0;
	const lastEditorLoadDate = new Date( lastEditorLoad );
	const currentDate = new Date().setHours( 0, 0, 0, 0 );

	if ( user && lastEditorLoadDate < currentDate ) {
		trackEvent( user, 'crowdsignal_nex_editor_loaded', {
			project_id: projectId,
		} );
		localStorage.setItem( EDITOR_LOADED_KEY, currentDate );
	}
};

export const trackThemeChanged = ( user, theme, projectId ) => {
	trackEvent( user, 'crowdsignal_nex_theme_changed', {
		theme,
		project_id: projectId,
	} );
};
