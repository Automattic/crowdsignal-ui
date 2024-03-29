const path = require( 'path' );
const FixStyleOnlyEntriesPlugin = require( 'webpack-fix-style-only-entries' );
const SassConfig = require( '@automattic/calypso-build/webpack/sass' );
const process = require( 'process' );

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
	mode: 'production',
	entry: {
		'base': './src/base/base.scss',
		'base-editor': './src/base/editor.scss',
		'crowdsignal': './src/crowdsignal/base.scss',
		'crowdsignal-editor': './src/crowdsignal/editor.scss',
		'leven': './src/leven/base.scss',
		'leven-editor': './src/leven/editor.scss',
		'twentynineteen': './src/twentynineteen/base.scss',
		'twentynineteen-editor': './src/twentynineteen/editor.scss',
		'twentytwentytwo': './src/twentytwentytwo/base.scss',
		'twentytwentytwo-editor': './src/twentytwentytwo/editor.scss',
		'twentytwentytwo-dark': './src/twentytwentytwo-dark/base.scss',
		'twentytwentytwo-dark-editor': './src/twentytwentytwo-dark/editor.scss',
		'blockbase': './src/blockbase/base.scss',
		'blockbase-editor': './src/blockbase/editor.scss',
		'quadrat': './src/quadrat/base.scss',
		'quadrat-editor': './src/quadrat/editor.scss',
		'p2': './src/p2/base.scss',
		'p2-editor': './src/p2/editor.scss',
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
