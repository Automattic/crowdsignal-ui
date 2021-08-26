const path = require( 'path' );
const webpack = require( 'webpack' );
const package = require( './package.json' );
const getBaseConfig = require( '@automattic/calypso-build/webpack.config.js' );

function getWebpackConfig( env, { entry, ...argv } ) {
	const baseConfig = getBaseConfig( env, argv );

	const buildSuffix = argv.env.WP === 'WP' ? '.wp' : '';

	return {
		...baseConfig,
		output: {
			...baseConfig.output,
			filename: `poll-${ package.version }${ buildSuffix }.js`,
			library: {
				name: [ 'crowdsignal', 'PollWidget' ],
				type: 'assign',
				export: 'default',
			},
		},
		plugins: [
			...baseConfig.plugins.map( ( plugin ) => {
				if ( plugin.constructor.name !== 'DefinePlugin' ) {
					return plugin;
				}

				return new webpack.DefinePlugin( {
					...plugin.definitions,
					'process.env.COMPONENT_SYSTEM_PHASE': JSON.stringify( 1 ),
				} );
			} ),
		],
	};
}

module.exports = getWebpackConfig;
