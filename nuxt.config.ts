// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
				compatibilityDate: '2024-04-03',
				devtools: { enabled: false },

				devServer: {
								port: 3748,
				},

				css: ['~/assets/css/main.css'],

				postcss: {
								plugins: {
												tailwindcss: {},
												autoprefixer: {},
								},
				},

				app: {
								head: {
												charset: 'utf-8',
												viewport: 'width=device-width, initial-scale=1',
								},
				},

				routeRules: {
								'/temp': { ssr: false },
								'/cookie-policy': { ssr: false },
								'/privacy-policy': { ssr: false },
								'/user-agreement': { ssr: false },
				},

				modules: ['@nuxt/content', '@nuxt/image'],

				content: {
								watch: {
												ws: false,
								},
				},
				pages: true,
});