/**
 * External dependencies
 */
import { useEffect } from '@wordpress/element';
import { map } from 'lodash';

/**
 * Internal dependencies
 */
import { useStylesheet } from '@crowdsignal/hooks';

window.__editorAssets = window.__editorAssets || {
	styles: '',
	scripts: '',
};

const PreviewStylesResolver = ( { theme } ) => {
	const stylesheets = {
		base: '/ui/stable/theme-compatibility/base-editor.css',
		theme: `/themes/${ theme }/style-editor.css`,
		compatibility: `/ui/stable/theme-compatibility/${ theme }-editor.css`,
	};

	useStylesheet( stylesheets.base );
	useStylesheet( stylesheets.theme );
	useStylesheet( stylesheets.compatibility );

	useEffect( () => {
		const observer = new window.MutationObserver( () => {
			const externalStyles = map(
				stylesheets,
				( path, id ) =>
					`<link id="${ id }" href="${ path }" rel="stylesheet" type="text/css" />`
			).join( '' );

			const inlineStyles = Array.from( document.head.children )
				.filter(
					( node ) =>
						node.dataset.emotion === 'css' ||
						node.dataset.emotion === 'css-global'
				)
				.map( ( node ) => node.textContent.replace( /\/\*.*\*\//, '' ) )
				.join( '' );

			window.__editorAssets.styles = `${ externalStyles }<style>${ inlineStyles }</styles>`;
		} );

		observer.observe( document.head, { childList: true } );

		return () => observer.disconnect();
	}, [] );

	return null;
};

export default PreviewStylesResolver;
