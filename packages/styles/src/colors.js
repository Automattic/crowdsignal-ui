/**
 * External dependencies
 */
import Palette from '@automattic/color-studio';
import { includes, isObject, join, keys, map } from 'lodash';

/**
 * Internal dependencies
 */
import { hexToRGBA } from './util';

const defaultColorMap = {
	neutral: {
		0: Palette.colors[ 'Gray 0' ],
		10: Palette.colors[ 'Gray 10' ],
		20: Palette.colors[ 'Gray 20' ],
		30: Palette.colors[ 'Gray 30' ],
		40: Palette.colors[ 'Gray 40' ],
		50: Palette.colors[ 'Gray 50' ],
		60: Palette.colors[ 'Gray 60' ],
		70: Palette.colors[ 'Gray 70' ],
		80: Palette.colors[ 'Gray 80' ],
		90: Palette.colors[ 'Gray 90' ],
		100: Palette.colors[ 'Gray 100' ],
		default: Palette.colors[ 'Gray 50' ],
		light: Palette.colors[ 'Gray 30' ],
		dark: Palette.colors[ 'Gray 70' ],
	},
	success: {
		0: Palette.colors[ 'Green 0' ],
		10: Palette.colors[ 'Green 10' ],
		20: Palette.colors[ 'Green 20' ],
		30: Palette.colors[ 'Green 30' ],
		40: Palette.colors[ 'Green 40' ],
		50: Palette.colors[ 'Green 50' ],
		60: Palette.colors[ 'Green 60' ],
		70: Palette.colors[ 'Green 70' ],
		80: Palette.colors[ 'Green 80' ],
		90: Palette.colors[ 'Green 90' ],
		100: Palette.colors[ 'Green 100' ],
		default: Palette.colors[ 'Green 50' ],
		light: Palette.colors[ 'Green 30' ],
		dark: Palette.colors[ 'Green 70' ],
	},
	warning: {
		0: Palette.colors[ 'Yellow 0' ],
		10: Palette.colors[ 'Yellow 10' ],
		20: Palette.colors[ 'Yellow 20' ],
		30: Palette.colors[ 'Yellow 30' ],
		40: Palette.colors[ 'Yellow 40' ],
		50: Palette.colors[ 'Yellow 50' ],
		60: Palette.colors[ 'Yellow 60' ],
		70: Palette.colors[ 'Yellow 70' ],
		80: Palette.colors[ 'Yellow 80' ],
		90: Palette.colors[ 'Yellow 90' ],
		100: Palette.colors[ 'Yellow 100' ],
		default: Palette.colors[ 'Yellow 50' ],
		light: Palette.colors[ 'Yellow 30' ],
		dark: Palette.colors[ 'Yellow 70' ],
	},
	error: {
		0: Palette.colors[ 'Red 0' ],
		10: Palette.colors[ 'Red 10' ],
		20: Palette.colors[ 'Red 20' ],
		30: Palette.colors[ 'Red 30' ],
		40: Palette.colors[ 'Red 40' ],
		50: Palette.colors[ 'Red 50' ],
		60: Palette.colors[ 'Red 60' ],
		70: Palette.colors[ 'Red 70' ],
		80: Palette.colors[ 'Red 80' ],
		90: Palette.colors[ 'Red 90' ],
		100: Palette.colors[ 'Red 100' ],
		default: Palette.colors[ 'Red 50' ],
		light: Palette.colors[ 'Red 30' ],
		dark: Palette.colors[ 'Red 70' ],
	},
	primary: {
		0: Palette.colors[ 'Pink 0' ],
		10: Palette.colors[ 'Pink 10' ],
		20: Palette.colors[ 'Pink 20' ],
		30: Palette.colors[ 'Pink 30' ],
		40: Palette.colors[ 'Pink 40' ],
		50: Palette.colors[ 'Pink 50' ],
		60: Palette.colors[ 'Pink 60' ],
		70: Palette.colors[ 'Pink 70' ],
		80: Palette.colors[ 'Pink 80' ],
		90: Palette.colors[ 'Pink 90' ],
		100: Palette.colors[ 'Pink 100' ],
		default: Palette.colors[ 'Pink 50' ],
		light: Palette.colors[ 'Pink 30' ],
		dark: Palette.colors[ 'Pink 70' ],
	},
	secondary: {
		0: Palette.colors[ 'WordPress Blue 0' ],
		10: Palette.colors[ 'WordPress Blue 10' ],
		20: Palette.colors[ 'WordPress Blue 20' ],
		30: Palette.colors[ 'WordPress Blue 30' ],
		40: Palette.colors[ 'WordPress Blue 40' ],
		50: Palette.colors[ 'WordPress Blue 50' ],
		60: Palette.colors[ 'WordPress Blue 60' ],
		70: Palette.colors[ 'WordPress Blue 70' ],
		80: Palette.colors[ 'WordPress Blue 80' ],
		90: Palette.colors[ 'WordPress Blue 90' ],
		100: Palette.colors[ 'WordPress Blue 100' ],
		default: Palette.colors[ 'WordPress Blue 90' ],
		light: Palette.colors[ 'WordPress Blue 70' ],
		dark: Palette.colors[ 'WordPress Blue 100' ],
	},
	highlight: {
		0: '#f6fdff',
		5: '#d9f9ff',
		10: '#baf5ff',
		20: '#83e8ff',
		30: '#44cee6',
		40: '#23ccff',
		50: '#3cb5ca',
		60: '#00a8db',
		70: '#0092a1',
		80: '#007598',
		90: '#005670',
		100: '#003747',
		default: '#44cee6',
		light: '#44cee6',
		dark: '#0092a1',
	},
	text: Palette.colors[ 'Gray 80' ],
	'text-subtle': Palette.colors[ 'Gray 50' ],
	'text-inverted': Palette.colors.White,
	link: '#44cee6',
	border: Palette.colors[ 'Gray 5' ],
	surface: Palette.colors.White,
	shadow: hexToRGBA( Palette.colors.Black, 0.3 ),
	backdrop: hexToRGBA( Palette.colors[ 'Gray 90' ], 0.4 ),
	transparent: hexToRGBA( Palette.colors.White, 0 ),
	facebook: '#3b5998',
	twitter: '#1da1f2',
};

export const color = ( domain, value = 'default' ) => {
	if ( ! includes( keys( defaultColorMap ), domain ) ) {
		// eslint-disable-next-line no-console
		console.err( `Invalid color domain '${ domain }'.` );
	}

	if ( ! isObject( defaultColorMap[ domain ] ) ) {
		return defaultColorMap[ domain ];
	}

	return defaultColorMap[ domain ][ value ];
};

const toCSS = ( colors, prefix = '' ) => {
	if ( isObject( colors ) ) {
		return join(
			map( colors, ( value, key ) =>
				toCSS( value, `${ prefix }-${ key }` )
			),
			''
		);
	}

	const colorVarName = prefix.match( /^\-(.*?)(\-default)?$/i );

	return `--color-${ colorVarName[ 1 ] }: ${ colors };`;
};

export const colorVars = () => toCSS( defaultColorMap );
