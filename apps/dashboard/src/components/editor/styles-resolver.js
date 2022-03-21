/**
 * External dependencies
 */
import { useCallback, useEffect } from '@wordpress/element';
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
		theme: `https://app.crowdsignal.com/themes/${ theme }/style-editor.css`,
		compatibility: `/ui/stable/theme-compatibility/${ theme }-editor.css`,
	};

	useStylesheet( stylesheets.base );
	useStylesheet( stylesheets.theme );
	useStylesheet( stylesheets.compatibility );

	const reloadEditorAssets = useCallback( () => {
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
	}, [ theme ] );

	useEffect( () => {
		const observer = new window.MutationObserver( reloadEditorAssets );
		observer.observe( document.head, { childList: true } );

		reloadEditorAssets();

		return () => observer.disconnect();
	}, [ reloadEditorAssets ] );

	return null;
};

export default PreviewStylesResolver;
