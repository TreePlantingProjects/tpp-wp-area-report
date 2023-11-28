const path = require('path');
const { WordpressShortcodeWebpackPlugin } = require('wordpress-shortcode-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: "./public"
},
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: 'ttf-loader',
            options: {
              name: './font/[hash].[ext]',
            },
          },
        ]
    }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'ttf'],
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new WordpressShortcodeWebpackPlugin({
        wordpressPluginName: 'tpp-area-report',
        headerFields: {
            author: 'Kaspar Wetsch | TreePlantingProjects',
            description: 'TPP area report form',
            version: '1.0.0'
        }
    }),
],
};