const path = require( 'path' );
const package = require( './package.json' );
const webpack = require( 'webpack' );
const getBaseConfig = require( '@automattic/calypso-build/webpack.config.js' );

function getWebpackConfig( env, { entry, ...argv } ) {
	const baseConfig = getBaseConfig(
		env,
		{
			...argv,
			entry: entry[0],
		}
	);

	const buildSuffix = argv.env.WP === 'WP' ? '.wp' : '';

	return {
		...baseConfig,
		output: {
			...baseConfig.output,
			filename: `feedback-${ package.version }${ buildSuffix }.js`,
			library: [ 'crowdsignal', 'feedbackWidget' ],
		},
		plugins: [
			...baseConfig.plugins.map(
				( plugin ) => {
					if ( plugin.constructor.name !== 'DefinePlugin' ) {
						return plugin;
					}

					return new webpack.DefinePlugin( {
						...plugin.definitions,
						'process.env.COMPONENT_SYSTEM_PHASE': JSON.stringify( 1 )
					} );
				}
			),
		]
	};
}

module.exports = getWebpackConfig;
