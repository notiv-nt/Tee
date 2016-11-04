
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const TransferWebpackPlugin = require('transfer-webpack-plugin');



module.exports = {
	context: path.resolve('source'),

	entry: {
		main: 'js/main.js'
	},

	watch: true,

	watchOptions: {
		poll: true
	},

	devtool: 'cheap-source-map',

	output: {
		path: path.resolve('public'),
		publicPath: '/',
		filename: 'assets/js/[name].js',
		chunkFilename: 'assets/js/[name].[id].js'
	},

	resolve: {
		root: path.resolve('source'),
		modulesDirectories: [
			'node_modules',
		],
		alias: {
			// _components: path.join(__dirname, 'source', 'components')
		}
	},

	postcss: function() {
		return [
			autoprefixer({ browsers: [ '> 1%', 'ie 10' ], cascade: true })
		];
	},

	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style!css!postcss'
			}, {
				test: /\.styl$/,
				loader: 'style!css?camelCase&localIdentName=[name]__[local]___[hash:base64:5]!postcss!stylus?resolve url'
			}, {
				test: /source.*\.js$/,
				loader: 'babel?presets[]=es2015&cacheDirectory'
			}, {
				test: /\.pug$/,
				loader: 'pug',
				query: {
					root: path.join(__dirname, 'source/view/'),
					pretty: true
				}
			},
		],
	},

	plugins: [
		new webpack.NoErrorsPlugin(),

		new HtmlWebpackPlugin({
			template: 'view/index.pug',
			filename: 'index.html',
			inject: false
		}),

		new TransferWebpackPlugin([
			{ from: 'static' }
		])
	]
};
