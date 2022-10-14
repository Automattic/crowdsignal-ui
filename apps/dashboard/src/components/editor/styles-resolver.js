/**
 * External dependencies
 */
import { useCallback, useEffect } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { debounce, map } from 'lodash';

/**
 * Internal dependencies
 */
import { useStylesheet } from '@crowdsignal/hooks';
import { STORE_NAME } from '../../data';

window.__editorAssets = window.__editorAssets || {
	styles: '',
	scripts: '',
};

const IFRAME_SELECTOR =
	'.block-editor-block-preview__container iframe, .edit-post-visual-editor__content-area iframe';
const WRAPPER_DIV_SELECTOR = 'body > div:first-child';

const PreviewStylesResolver = ( { theme } ) => {
	const { updateEditorSettings } = useDispatch( STORE_NAME );
	const currentPreviewType = useSelect( ( select ) =>
		select( STORE_NAME ).getEditorPreviewType()
	);

	const stylesheets = {
		base: '/ui/stable/theme-compatibility/base-editor.css',
		theme: `https://app.crowdsignal.com/themes/${ theme }/style-editor.css`,
		compatibility: `/ui/stable/theme-compatibility/${ theme }-editor.css`,
	};

	useStylesheet( stylesheets.base );
	useStylesheet( stylesheets.theme );
	useStylesheet( stylesheets.compatibility );

	const reloadEditorAssets = useCallback(
		debounce( () => {
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
			updateEditorSettings( {
				editor: {
					__unstableResolvedAssets: {
						styles: [
							`<style>${ inlineStyles }</style>${ externalStyles }`,
						],
					},
				},
			} );

			// Gutenberg tries to get styles from the current document and include in the previews
			// https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/iframe/index.js#L360-L363
			// This logic fails to get external stylesheets and since it resides inside the iframe body
			// it has higher precedence and it's messing with our previews styles
			// This logic will try to remove these <link> tags from the preview body
			Array.from( document.querySelectorAll( IFRAME_SELECTOR ) ).forEach(
				( iframe ) => {
					const wrapper = iframe.contentDocument.querySelector(
						WRAPPER_DIV_SELECTOR
					);

					// The div added to wrap the stylesheets doesn't have any better
					// attribute to target this condition ¯\_(ツ)_/¯
					if ( wrapper && wrapper.style.display === 'none' ) {
						wrapper
							.querySelectorAll( 'link' )
							.forEach( ( n ) => n.remove() );
					}
				}
			);
		}, 1000 ),
		[ theme, currentPreviewType ]
	);

	useEffect( () => {
		const observer = new window.MutationObserver( reloadEditorAssets );
		observer.observe( document.head, { childList: true } );

		reloadEditorAssets();

		return () => observer.disconnect();
	}, [ reloadEditorAssets ] );

	return null;
};

export default PreviewStylesResolver;
