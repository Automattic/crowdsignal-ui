/**
 * External dependencies
 */
import { useCallback, useEffect } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
import { map } from 'lodash';

/**
 * Internal dependencies
 */
import { useStylesheet } from '@crowdsignal/hooks';
import { STORE_NAME } from '../../data';

window.__editorAssets = window.__editorAssets || {
	styles: '',
	scripts: '',
};

const PreviewStylesResolver = ( { theme } ) => {
	const { updateEditorSettings } = useDispatch( STORE_NAME );

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
					node.dataset.emotion === 'crowdsignal' ||
					node.dataset.emotion === 'crowdsignal-global'
			)
			.map( ( node ) =>
				[ ...node.sheet.cssRules ]
					.map( ( rule ) => rule.cssText )
					.join( ' ' )
			)
			.join( '' );

		// This relies on __unstableResolvedAssets which unfortunately seems like
		// the only way to inject our styles into block preview components for the current
		// Gutenberg version. Leaving the link as a reference for when it does change:
		//
		// https://github.com/WordPress/gutenberg/blob/v12.9.0/packages/block-editor/src/components/block-preview/auto.js#L35
		const settings = {
			__unstableResolvedAssets: {
				styles: [
					`${ externalStyles }<style>${ inlineStyles }</style>`,
				],
			},
		};

		updateEditorSettings( { editor: { ...settings } } );
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
