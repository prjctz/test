module.exports = {
	apps: [
		{
			name: 'NuxtFlameApp',
			port: '3748',
			exec_mode: 'cluster',
			instances: 'max',
			script: './.output/server/index.mjs',
		},
	],
};
