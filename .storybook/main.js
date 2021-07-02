const stories = [
	'../apps/*/!(node_modules)/**/stories/*.js',
	'../packages/*/!(node_modules)/**/stories/*.js',
];

module.exports = {
	stories,
	core: {
		builder: 'webpack5',
	},
};
