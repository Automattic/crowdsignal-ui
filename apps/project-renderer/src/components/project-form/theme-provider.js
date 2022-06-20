/**
 * External dependencies
 */
import { Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { useStylesheet } from '@crowdsignal/hooks';

/*
 * Wrapper component responsible for loading themes in the development environment.
 * The reason this is a separate component instead of a HoC, hook
 * or using useStylesheet inside ./page.js directly is we want it's lifecycle
 * to be completely separate from the current form page component.
 * So for example if the page component gets reloaded or replaced,
 * or if we want to do animations, this wrapper always remains unaffected.
 *
 * In production, themes are loaded synchronously hence this becomes just a Fragment.
 */

const ProjectFormThemeProvider = ( { children, theme } ) => {
	useStylesheet( `/ui/stable/theme-compatibility/base.css` );
	useStylesheet( `https://app.crowdsignal.com/themes/${ theme }/style.css` );
	useStylesheet( `/ui/stable/theme-compatibility/${ theme }.css` );

	return <>{ children }</>;
};

export default process.env.NODE_ENV === 'production'
	? Fragment
	: ProjectFormThemeProvider;
