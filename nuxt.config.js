const webpack=require('webpack');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'tietou',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'for tietou' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: 'components/common/loading.vue',
  /*
  ** Build configuration
  */
  build: {
    vendor: ['jquery'],
    plugins: [
      new webpack.ProvidePlugin(
        {
          $: 'jquery'
        }
      )
    ]
  },
  plugins: [
    '~/plugins/directives',
    '~/plugins/iview',
    '~/plugins/waiting',
    // { src: '~/plugins/at', ssr: false },
    { src: '~/plugins/touch-ripple', ssr: false },
  ],
  css: [
    'iview/dist/styles/iview.css',
    'nprogress/nprogress.css',
    'vue-touch-ripple/dist/vue-touch-ripple.css',
    'ionicons/dist/css/ionicons.min.css',
    '~assets/css/particle_font.css',
    { src: '~assets/stylus/index.styl', lang: 'stylus' },
  ]
}

