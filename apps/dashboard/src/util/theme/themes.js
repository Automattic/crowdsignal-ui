/**
 * External dependencies
 */
import { find } from 'lodash';

export const themes = [
	{
		slug: 'leven',
		name: 'Leven',
		image:
			'https://i0.wp.com/s2.wp.com/wp-content/themes/pub/leven/screenshot.png',
	},
	{
		slug: 'twentynineteen',
		name: 'Twenty Nineteen',
		image:
			'https://i0.wp.com/s2.wp.com/wp-content/themes/pub/twentynineteen/screenshot.png',
	},
	{
		slug: 'twentytwentytwo',
		name: 'Twenty Twenty-Two',
		image:
			'https://app.crowdsignal.com/themes/twentytwentytwo/screenshot.png',
	},
	{
		slug: 'blockbase',
		name: 'Blockbase',
		image:
			'https://i0.wp.com/s2.wp.com/wp-content/themes/pub/blockbase/screenshot.png',
	},
	{
		slug: 'quadrat',
		name: 'Quadrat',
		image:
			'https://i0.wp.com/s2.wp.com/wp-content/themes/pub/quadrat/screenshot.png',
	},
	{
		slug: 'twentytwentytwo-dark',
		name: 'Twenty Twenty-Two Dark',
		image:
			'https://i0.wp.com/s2.wp.com/wp-content/themes/pub/twentytwentytwo/screenshot.png',
	},
	{
		slug: 'p2',
		name: 'P2',
		image: 'https://app.crowdsignal.com/themes/p2/screenshot.png',
	},
];

export const getTheme = ( theme ) => find( themes, [ 'slug', theme ] );
