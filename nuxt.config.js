export default {
  target: 'static',
  server: {
    port: 3000, // default
    host: '0.0.0.0', // default: localhost
  },
  head: {
    title: 'kubrick',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['assets/scss/_common.scss'],
  styleResources: {
    scss: ['assets/scss/_variables.scss'],
  },
  plugins: ['@plugins/global.js'],
  components: true,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/style-resources'],
  axios: {
    baseURL: '/',
  },
  pwa: {
    icon: false,
    manifest: {
      lang: 'en',
    },
  },
  build: {},
}
