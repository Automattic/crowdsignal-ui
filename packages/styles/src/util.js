/**
 * Expands short hex values or returns color otherwise.
 * #ff0    -> #ffff00
 * #ff0000 -< #ff0000
 *
 * @param  {string} color Hex color representation
 * @return {string}       Expanded hex color value
 */
const maybePadColor = ( color ) => {
	const channels = /^#([a-f0-9])([a-f0-9])([a-f0-9])$/i.exec( color );

	if ( ! channels ) {
		return color;
	}

	channels.shift();

	return '#' + channels.map( ( value ) => value + value ).join( '' );
};

/**
 * Converts a hex color value to rgba()
 *
 * @param  {string} color Hex color representation
 * @param  {number} alpha Opacity
 * @return {string}       rgba() value
 */
export const hexToRGBA = ( color, alpha ) => {
	let channels = /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i.exec(
		maybePadColor( color )
	);

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
 * @param  {string} color Hex color representation
 * @return {string}       rgb() value
 */
export const hexToRGB = ( color ) => hexToRGBA( color, 1 );
