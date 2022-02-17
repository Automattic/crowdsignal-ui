/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import {
	camelCase,
	filter,
	flatten,
	includes,
	isEmpty,
	isString,
	keys,
	toLower,
	map,
	uniqueId,
	zipObject,
	find,
} from 'lodash';

const KEY_PREFIX = 'crowdsignal-block-';

const parser = new window.DOMParser();

/**
 * Parses a style string and converts it to a style object.
 *
 * @param  {string} styleString HTML style attribute
 * @return {Object}             Style object
 */
const parseStyles = ( styleString ) => {
	if ( ! styleString ) {
		return null;
	}

	return styleString
		.split( ';' )
		.map( ( rule ) => rule.split( ':' ) )
		.reduce( ( styles, [ property, value ] ) => {
			styles[ camelCase( property ) ] = value;
			return styles;
		}, {} );
};

/**
 * Parses DOM nodes into an array of objects to be used to create React elements.
 *
 * @param  {string}  tagName HTML tag
 * @param  {Object}  props object
 * @return {Object}  Props object
 */
const parseTagProps = ( tagName, props ) => {
	if ( tagName === 'AUDIO' ) {
		if (
			typeof props.controls !== 'undefined' &&
			props.controls !== false
		) {
			props.controls = 'controls';
		}
	}

	return props;
};

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

		const { class: className, style, ...attributes } = zipObject(
			map( node.attributes, 'nodeName' ),
			map( node.attributes, 'value' )
		);

		return {
			name: toLower( node.tagName ),
			children: parseNodes( node.childNodes ),
			props: {
				...parseTagProps( node.tagName, attributes ),
				className,
				style: parseStyles( style ),
				key: uniqueId( KEY_PREFIX ),
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
		case 'core/cover':
			const container = find(
				elements[ 0 ].children,
				( element ) =>
					element.props.className.indexOf(
						'wp-block-cover__inner-container'
					) >= 0
			);
			container.innerBlocks = innerBlocks;
			break;
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
const createElementsRecursive = ( elements ) => {
	if ( isEmpty( elements ) ) {
		return null;
	}

	return map( elements, ( element ) => {
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
};

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
						className: block.attributes.className,
						key: uniqueId( KEY_PREFIX ),
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
