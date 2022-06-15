const webpack = require( 'webpack' );
const getBaseConfig = require( '@automattic/calypso-build/webpack.config.js' );

module.exports = ( { config } ) => {
	const baseConfig = getBaseConfig( 'development' );

	return ( {
		...config,
		module: {
			...config.module,
			rules: [
				...config.module.rules,
				{
					test: /stories\/.+\.js$/,
					loader: require.resolve( '@storybook/source-loader' ),
					enforce: 'pre',
				},
				{
					test: /\.scss$/,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
			],
		},
		resolve: {
			...baseConfig.resolve,
			fallback: {
				...baseConfig.resolve.fallback,
				path: require.resolve( 'path-browserify' ),
			},
		},
	} );
}
