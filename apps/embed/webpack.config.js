const BundleAnalyzerPlugin = require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin;
const getBaseConfig = require( '@automattic/calypso-build/webpack.config.js' );

function getWebpackConfig( env, { entry, ...argv } ) {
	const baseConfig = getBaseConfig( env, argv );

	const config = {
		...baseConfig,
		devtool: baseConfig.mode === 'production' ? false : 'eval-cheap-module-source-map',
	};

	if ( process.env.BUNDLE_ANALYSIS ) {
		config.plugins.push( new BundleAnalyzerPlugin() );
	}

	return config;
}

module.exports = getWebpackConfig;
