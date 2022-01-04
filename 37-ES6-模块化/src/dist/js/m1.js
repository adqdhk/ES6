'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sayHi = sayHi;
//分别暴露
var name = exports.name = '张三';

function sayHi() {
    console.log('hello');
}