module.exports = {
	mode: 'universal',

	/*
	 ** Headers of the page
	 */
	head: {
		title: 'Paul unr Morrison - toronto web developer',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content:
					'Just the small world of a developer trying to deploy nuxt on now.'
			}
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=Asap:400,400i,700'
			}
		]
	},

	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#000' },

	/*
	 ** Global CSS
	 */
	css: ['@assets/scss/global.scss'],

	/*
	 ** Nuxt.js modules
	 */
	modules: ['@nuxtjs/axios']
};
