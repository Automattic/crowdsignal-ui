/**
 * External dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { filter, join, map } from 'lodash';

const PreviewStylesResolver = ( { theme } ) => {
	const [ inlineRules, setInlineRules ] = useState( '' );

	const { updateSettings } = useDispatch( 'core/block-editor' );

	const settings = useSelect( ( select ) =>
		select( 'core/block-editor' ).getSettings()
	);

	useEffect( () => {
		const observer = new window.MutationObserver( () => {
			setInlineRules(
				join(
					map(
						filter(
							document.head.children,
							( node ) =>
								node.dataset.emotion === 'css' ||
								node.dataset.emotion === 'css-global'
						),
						( node ) => node.textContent.replace( /\/\*.*\*\//, '' )
					),
					' '
				)
			);
		} );

		observer.observe( document.head, { childList: true } );

		return () => observer.disconnect();
	}, [] );

	useEffect( () => {
		updateSettings( {
			...settings,
			styles: [ { css: inlineRules } ],
		} );
	}, [ inlineRules, theme ] );

	return null;
};

export default PreviewStylesResolver;
