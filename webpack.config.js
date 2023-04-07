const path = require('path') // 处理绝对路径
const HtmlWebpackPlugin = require('html-webpack-plugin');//预定义模板插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//使输出的css文件以单独的文件存在
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/src/index.tsx'), // 入口文件
  output: {
    path: path.join(__dirname, '/dist'), //打包后的文件存放的地方
    filename: 'bundle.js' //打包后输出文件的文件名
  },
  resolve: {
    extensions: [".tsx",".ts",".js"], // 配置ts文件可以作为模块加载
  },
  // optimization: {
  //   minimizer: [
  //     new CssMinimizerPlugin(),
  //   ],
  // },//dist中的css是否被压缩
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'//以index.html为模板
    }),
    new MiniCssExtractPlugin()
  ],
  //本地服务器运行
  devServer: {
    hot:true,
    open:true,
    https: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, '/dist'), // 本地服务器所加载文件的目录
    port: '8088', // 设置端口号为8088
    inline: true, // 文件修改后实时刷新
    historyApiFallback: true //不跳转
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       imit: 3 * 1024
      //     }
      //   }
      // }//处理图片
    ]
  }
}