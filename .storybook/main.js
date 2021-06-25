const stories = [ '../apps/**/stories/*.js', '../packages/**/stories/*.js' ];

module.exports = {
	stories,
	core: {
		builder: 'webpack5',
	},
};
