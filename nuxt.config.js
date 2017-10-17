module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Nightshell',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:description', content: 'Nightshell Blog' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon2.ico' }
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    'normalize.css',
    { src: '~assets/scss/main.scss', lang: 'scss' }
  ],
  /*
   ** Customize the progress bar color
   */
  loading: { color: 'pink' },
  /*
   ** Build configuration
   */
  plugins: [
    { src: '~/plugins/ga.js', ssr: false }
  ],
  build: {
    /*
     ** Run ESLint on save
     */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // enable webpack analyzer plugin
    analyze: true
  }
}
