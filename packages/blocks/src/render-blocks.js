/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import {
	filter,
	flatten,
	includes,
	isEmpty,
	isString,
	keys,
	lowerCase,
	map,
} from 'lodash';

/**
 * Internal dependencies
 */

const parser = new window.DOMParser();

/**
 * Parses DOM nodes into an array of objects to be used to create React elements.
 *
 * @param  {HTMLCollection} nodes
 * @return {Array}                Array of objects describing the elements to be created.
 */
const parseNodes = ( nodes ) =>
	map( filter( Array.from( nodes ) ), ( node ) => {
		if ( node.nodeType === window.Node.TEXT_NODE ) {
			return node.textContent;
		}

		return {
			name: lowerCase( node.tagName ),
			children: parseNodes( node.childNodes ),
			props: {
				className: node.classList.value,
			},
		};
	} );

/**
 * Appends the innerBlocks value to the correct element based on the block.
 *
 * By default, innerBlocks go directly into the root element but as this
 * behavior might differ occasionally, this function allows to solve that
 * issue per block type.
 *
 * @param  {string} blockName
 * @param  {Object} elements
 * @param  {Array}  innerBlocks
 */
const appendInnerBlocks = ( blockName, elements, innerBlocks ) => {
	if ( isEmpty( innerBlocks ) ) {
		return;
	}

	switch ( blockName ) {
		// case 'core/media-text':
		// 	const container = find(
		// 		elements[0].children,
		// 		( element ) => element.props.className.indexOf( 'wp-block-media-text__content' ) >= 0
		// 	);

		// 	container.innerBlocks = innerBlocks;
		// 	return;

		default:
			elements[ 0 ].innerBlocks = innerBlocks;
	}
};

/**
 * Recursively creates an array of React elements using provided metadata.
 *
 * @param  {Object} elements
 * @return {Array}           Array of React elements.
 */
const createElementsRecursive = ( elements ) =>
	map( elements, ( element ) => {
		if ( isString( element ) ) {
			return element;
		}

		return createElement(
			element.name,
			element.props,

			// In practice, if an element is the host for inner blocks
			// it's children should alwyas be empty here.
			element.innerBlocks || createElementsRecursive( element.children )
		);
	} );

/**
 * Converts a HTML string into React elements
 * and allows for insertion of innerBlocks as child elements.
 *
 * @param  {string} blockName
 * @param  {string} html
 * @param  {Array}  innerBlocks
 * @return {Array}              Array of React elements.
 */
const stringToElement = ( blockName, html, innerBlocks ) => {
	const parsedHTML = parser.parseFromString( html, 'text/html' );
	const elements = parseNodes( parsedHTML.body.children );

	appendInnerBlocks( blockName, elements, innerBlocks );

	return createElementsRecursive( elements );
};

/**
 * Converts a Gutenberg blocks array into a React tree.
 * blockMap can be used to provide custom components which will
 * be used as substitutes for originalContent during the render.
 *
 * @param  {Array}  blocks
 * @param  {Object} blockMap
 * @return {Array}           Array of React elements.
 */
export const renderBlocks = ( blocks = [], blockMap = {} ) =>
	flatten(
		map( blocks, ( block ) => {
			if ( ! block.isValid ) {
				return null;
			}

			if ( includes( keys( blockMap ), block.name ) ) {
				const children = renderBlocks( block.innerBlocks, blockMap );

				return createElement(
					blockMap[ block.name ],
					{
						attributes: block.attributes,
					},
					children
				);
			}

			return stringToElement(
				block.name,
				block.originalContent,
				renderBlocks( block.innerBlocks, blockMap )
			);
		} )
	);
