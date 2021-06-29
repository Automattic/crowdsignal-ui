module.exports = ( { config } ) => ( {
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
} );
