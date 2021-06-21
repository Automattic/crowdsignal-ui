/**
 * Expands short hex values or returns color otherwise.
 * #ff0    -> #ffff00
 * #ff0000 -< #ff0000
 *
 * @param  {String} color Hex color representation
 * @return {String}       Expanded hex color value
 */
const maybePadColor = ( color ) => {
	let channels = /^#([a-f0-9])([a-f0-9])([a-f0-9])$/i.exec( color );

	if ( ! channels ) {
		return color;
	}

	channels.shift();

	return '#' + channels
		.map( ( value ) => value + value )
		.join( '' );
};

/**
 * Converts a hex color value to rgba()
 *
 * @param  {String} color Hex color representation
 * @param  {Number} alpha Opacity
 * @return {String}       rgba() value
 */
export const hexToRGBA = ( color, alpha ) => {
	let channels = /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i.exec( maybePadColor( color ) );

	if ( ! channels ) {
		return '';
	}

	channels.shift();
	channels = channels.map( ( value ) => parseInt( value, 16 ) );

	return `rgba(${ channels.join( ',' ) },${ alpha })`;
};

/**
 * Converts a hex color value to rgb()
 *
 * @param  {String} color Hex color representation
 * @return {String}       rgb() value
 */
export const hexToRGB = ( color ) =>
	hexToRGBA( color, 1 );
