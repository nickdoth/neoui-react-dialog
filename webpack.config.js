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
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},

	plugins:[
		new webpack.HotModuleReplacementPlugin()
	]
}