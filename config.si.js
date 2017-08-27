/**
 * Created by skychen on 2017/8/27.
 */
module.exports ={
  /*
   ** Headers of the page
   */
  head:{
    title:'朴人博客',
    meta:[
      {charset:'utf-8'},
      {name:'viewport', content:'width=device-width, initial-scale=1'},
      {hid:'description', name:'description', content:'朴人博客'}
    ],
    link:[
      {rel:'icon', type:'image/x-icon', href:'/favicon.ico'}
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading:false,
  /*
   ** Build configuration
   */
  css:['element-ui/lib/theme-default/index.css','./layouts/base.css'],
  plugins:[{src:'~plugins/element-ui', ssr:true}],
  modules:[
// npm install @nuxtjs/proxy -D
    ['@nuxtjs/proxy']
  ],
  proxy:{
    '/api':{
      pathRewrite:{'^/api':'/api'},
      target:'http://10.5.21.10:8080'
    }
  },
  build:{
    publicPath:'/resources/',
    filenames:{
      vendor:'vendor.[hash].js',
      app:'static.[chunkhash].js'
    },
    vendor:['element-ui'],
    babel:{
      plugins:[['component',[
        {
          'libraryName':'element-ui',
          'styleLibraryName':'theme-default'
        },
        'transform-async-to-generator',
        'transform-runtime'
      ]]],
      comments:false
    },
    /*
     ** Run ESLINT on save
     */
    extend (config, ctx){
      if(ctx.isClient){
        config.module.rules.push({
          enforce:'pre',
          test:/\.(js|vue)$/,
          loader:'eslint-loader',
          exclude:/(node_modules)/
        })
      }
    }
  }
}
