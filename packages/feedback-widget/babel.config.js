module.exports = {
	presets: [
		'@automattic/calypso-build/babel/wordpress-element',
		'@automattic/calypso-build/babel/default',
	],
	plugins: [
		'@babel/transform-runtime',
		'@wordpress/babel-plugin-import-jsx-pragma',
	],
};
