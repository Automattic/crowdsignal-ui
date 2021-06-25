module.exports = ( { config } ) => {
	config.module.rules.push(
		{
			test: /\stories\/.+\.js$/,
			loader: require.resolve( '@storybook/source-loader' ),
			enforce: 'pre',
		}
	);

	return config;
};
