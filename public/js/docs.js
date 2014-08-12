(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var clickQuery = require('clickQuery');


},{"clickQuery":3}],2:[function(require,module,exports){
var env;

env = 'dev';

require('../../browserify.js');

$('.example-debouncer input')[0].addEventListener('keyup', function() {
  var save;
  save = function() {
    $('.example-debouncer .alert')[0].innerHTML = "You saved! { name: '" + ($('.example-debouncer input').value) + "' }";
    return setTimeout(function() {
      return $('.alert')[0].innerHTML = '';
    }, 1000);
  };
  return A.debounce(save, 'save');
});

},{"../../browserify.js":1}],3:[function(require,module,exports){
o=function(s){m=this;m.length=0;m.splice=Function;m.t=document.querySelectorAll(s);for(i=0;i<m.t.length;i++)m.push(m.t[i]);return m};r=o.prototype,p=Array.prototype,r.length=0,r.push=p.push,r.splice=p.splice;r.click=function(f){for(i=0,m=this;i<m.t.length;i++){z=m.t[i],z.addEventListener('click',f);}return m};$=function(s){return new o(s)}

},{}]},{},[2])