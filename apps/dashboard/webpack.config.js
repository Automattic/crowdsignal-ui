const path = require( 'path' );
const express = require( 'express' );
const webpack = require( 'webpack' );
const BundleAnalyzerPlugin = require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin;
const package = require( './package.json' );
const getBaseConfig = require( '@automattic/calypso-build/webpack.config.js' );

function getWebpackConfig( env, { entry, ...argv } ) {
	const baseConfig = getBaseConfig( env, argv );

	const config = {
		...baseConfig,
		devtool: baseConfig.mode === 'production' ? false : 'eval-cheap-module-source-map',
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
					'process.env.IS_GUTENBERG_PLUGIN': true,
				} );
			} ),
		],
		resolve: {
			...baseConfig.resolve,
			alias: {
				...baseConfig.resolve.alias,
				'@emotion/core': path.resolve( __dirname, '../../node_modules/@emotion/react' ),
				'@emotion/memoize': path.resolve( __dirname, '../../node_modules/@emotion/memoize' ),
				'@emotion/serialize': path.resolve( __dirname, '../../node_modules/@emotion/serialize' ),
				'@wordpress/icons': path.resolve( __dirname, '../../node_modules/@wordpress/icons' ),
				'@wordpress/interface': path.resolve( __dirname, '../../node_modules/@wordpress/interface' ),
				'react-is': path.resolve( __dirname, '../../node_modules/react-is' ),
			},
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
			proxy: {
				'/surveys': {
					changeOrigin: true,
					secure: false,
					target: 'https://app.crowdsignal.com',
				},
				'/themes': {
					changeOrigin: true,
					secure: false,
					target: 'https://app.crowdsignal.com',
				},
			},
			before: ( app ) => {
				app.use(
					'/ui/stable/theme-compatibility',
					express.static(
						path.resolve( __dirname, '../../packages/theme-compatibility/dist' )
					)
				);

				app.use(
					'/gutenberg',
					express.static(
						path.resolve( __dirname, '../../lib/gutenberg/build' )
					)
				);
			},
			historyApiFallback: true,
		},
	};

	if ( process.env.BUNDLE_ANALYSIS ) {
		config.plugins.push( new BundleAnalyzerPlugin() );
	}

	return config;
}

module.exports = getWebpackConfig;
