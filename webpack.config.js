const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader","css-loader"] /*뒤에서 앞으로 적용됨*/
			},
			{
				test: /\.scss$/,
				use: [ "style-loader", "css-loader", "sass-loader" ]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin()
	]
};


// 개발의존성으로 html-webpack-plugin 라이브러리 깔기
// html 페이지에 링크까지 걸어주는 플러그인이다.
// > npm install --save-dev html-webpack-plugin