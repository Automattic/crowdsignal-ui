const path = require( 'path' );
const FixStyleOnlyEntriesPlugin = require( 'webpack-fix-style-only-entries' );
const SassConfig = require( '@automattic/calypso-build/webpack/sass' );
const process = require( 'process' );

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
	mode: 'production',
	entry: {
		'crowdsignal': './src/themes/crowdsignal/base.scss',
		'crowdsignal-editor': './src/themes/crowdsignal/editor.scss',
		'leven': './src/themes/leven/base.scss',
		'leven-editor': './src/themes/leven/editor.scss',
	},
	output: {
		path: path.resolve( __dirname, 'dist' ),
	},
	module: {
		rules: [
			SassConfig.loader({})
		],
	},
	plugins: [
		new FixStyleOnlyEntriesPlugin(),
		...SassConfig.plugins( {
			filename: '[name].css',
			minify: ! isDevelopment,
		} ),
	]
};
