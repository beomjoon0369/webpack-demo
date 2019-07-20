// CommonJS 스팩의 모듈 가져오기: require => import, 배포하기: export => export
// 컴파일 하기 : npx webpack
// 컴파일 하기2 : npx webpack --configure [js설정파일 경로]
/*
/// js설정파일 경로 내용
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
 */
var _ = require('lodash');
import './style.css';
import './hello.scss';
// es6 named import
// named import는 모듈(함수) 이름을 꼭 붙여서 import 한다.
import {area, line} from './js/circle';

// es6 default import : {}필요엾고 이름을 마음대로 정의 할수 있다.
import cubic from './js/cubic';


function component() {
	let element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack!!!', ], ' ');

	element.innerHTML += '<p> area=>' + area(5) ;
	element.innerHTML += '</p><p> line=>' + line(5) +'</p>' ;
	element.innerHTML += '</p><p> cubic=>' + cubic(5) +'</p>' ;

	return element;
}

document.body.appendChild(component());
