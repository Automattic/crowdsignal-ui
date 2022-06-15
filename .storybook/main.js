const stories = [
	'../apps/*/!(node_modules)/**/stories/!(example).js',
	'../packages/*/!(node_modules)/**/stories/!(example).js',
];

module.exports = {
	stories,
	core: {
		builder: 'webpack5',
	},
	features: {
		emotionAlias: true,
	},
};
