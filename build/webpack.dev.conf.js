'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const fs=require('fs')
const bodyParser=require('body-parser')
const resolve=(filename)=>path.join(__dirname,filename)
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    before(app){
      //获取数据
     app.get('/api/list',(req,res)=>{
       let data=JSON.parse(fs.readFileSync(resolve("../src/data/data.json"),'utf-8'))
       res.send(data)
     })
     //添加
     app.post("/api/add",
        bodyParser.urlencoded({extended:false}),
        bodyParser.json(),
     (req,res)=>{
       console.log(req.body)
       let data=JSON.parse(fs.readFileSync(resolve("../src/data/data.json"),'utf-8'))
        data.push(req.body)
        fs.writeFileSync(resolve("../src/data/data.json"),JSON.stringify(data))
        res.send({code:1,msg:"添加成功"})
     })
     //删除
     app.get('/api/del',(req,res)=>{
      let data=JSON.parse(fs.readFileSync(resolve("../src/data/data.json"),'utf-8'))
      let id = req.query.id
       let index = data.findIndex(item=>item.id===id*1) 
       data.splice(index,1)
       fs.writeFileSync(resolve("../src/data/data.json"),JSON.stringify(data))
       res.send({code:1,msg:"删除成功"})
     })
     //编辑
     app.post('/api/edit',
     bodyParser.urlencoded({extended:false}),
      bodyParser.json(),
     (req,res)=>{
      let data=JSON.parse(fs.readFileSync(resolve("../src/data/data.json"),'utf-8'))
      let obj=req.body
      let index = data.findIndex(item=>item.id===obj.id*1)
      data.splice(index,1,obj)
      fs.writeFileSync(resolve("../src/data/data.json"),JSON.stringify(data))
      res.send({code:1,msg:"编辑成功"})
     })
    }
   
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
