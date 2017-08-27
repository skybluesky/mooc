module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'app' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    vendor:['mint-ui','axios'],
    babel:{
      plugins:[['component',[
        {
          "libraryName": "mint-ui", "style": true
        }
      ]]],
      comments:false
    },
    /*
    ** Run ESLINT on save
    */
    // extend (config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  css:['mint-ui/lib/style.min.css','./layouts/base.css'],
  plugins: [{src:'~plugins/mint-ui', ssr:true},
    {src:'~plugins/axios', ssr:true}
  ],
  render: {
    bundleRenderer: {
      cache: require('lru-cache')({
        max: 1000,
        maxAge: 1000 * 60 * 15
      })
    }
  }
}
