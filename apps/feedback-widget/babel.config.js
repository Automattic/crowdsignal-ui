module.exports = {
	presets: [
		'@automattic/calypso-build/babel/wordpress-element',
		'@automattic/calypso-build/babel/default',
	],
	plugins: [
		'@babel/plugin-transform-runtime',
		'@babel/plugin-proposal-optional-chaining',
		'babel-plugin-emotion',
	],
};
