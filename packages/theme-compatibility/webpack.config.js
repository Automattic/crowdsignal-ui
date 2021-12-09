const path = require( 'path' );
const FixStyleOnlyEntriesPlugin = require( 'webpack-fix-style-only-entries' );

module.exports = {
	mode: 'production',
	entry: {
		'leven': './stylesheets/leven.scss',
		'leven-editor': './stylesheets/leven-editor.scss',
	},
	output: {
		path: path.resolve( __dirname, 'dist' ),
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				type: 'asset/resource',
				generator: {
					filename: '[name].min.css',
				},
				use: [
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new FixStyleOnlyEntriesPlugin(),
	]
};
