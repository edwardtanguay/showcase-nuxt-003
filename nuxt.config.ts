// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },

	modules: ['@nuxtjs/tailwindcss'],
	devServer: {
		port: 3332
	},
	app: {
		head: {
			title: 'Professional Nuxt Site',
			meta: [
				{ name: 'description', content: 'A professional Nuxt 4 site with responsive navigation' }
			]
		}
	},
	css: ['~/assets/css/main.css']
})
