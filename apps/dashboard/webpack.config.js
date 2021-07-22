const path = require( 'path' );
const webpack = require( 'webpack' );
const package = require( './package.json' );
const getBaseConfig = require( '@automattic/calypso-build/webpack.config.js' );

function getWebpackConfig( env, { entry, ...argv } ) {
	const baseConfig = getBaseConfig( env, argv );

	return {
		...baseConfig,
		output: {
			...baseConfig.output,
		},
		externals: {
			react: 'React',
			'react-dom': 'ReactDOM',
		},
		plugins: [
			...baseConfig.plugins.map( ( plugin ) => {
				if ( plugin.constructor.name !== 'DefinePlugin' ) {
					return plugin;
				}

				return new webpack.DefinePlugin( {
					...plugin.definitions,
					'process.env.GUTENBERG_PHASE': JSON.stringify(
						parseInt(
							process.env.npm_package_config_GUTENBERG_PHASE,
							10
						) || 1
					),
					'process.env.COMPONENT_SYSTEM_PHASE': JSON.stringify( 1 ),
				} );
			} ),
		],
		resolve: {
			...baseConfig.resolve,
			modules: [
				...baseConfig.resolve.modules,
				path.resolve( __dirname, 'src/' ),
			],
		},
		devServer: {
			contentBase: [
				path.join(__dirname, 'dist'),
				path.join(__dirname, 'public'),
			],
			compress: true,
			host: 'crowdsignal.localhost',
			https: true,
			port: 9000,
			historyApiFallback: true,
		},
	};
}

module.exports = getWebpackConfig;
