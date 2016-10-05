var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: ['webpack/hot/dev-server',
		path.resolve(__dirname,'./index.js')
	],

	output: {
		path: path.resolve(__dirname,'./dist'),
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(bower_components)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	},

	plugins:[
		new webpack.HotModuleReplacementPlugin()
	]
}