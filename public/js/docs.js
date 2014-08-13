(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var clickQuery = require('clickQuery');


},{"clickQuery":3}],2:[function(require,module,exports){
var env, input, li, _i, _len, _ref;

env = 'dev';

require('../../browserify.js');

_ref = $('.acss-sidebar li');
for (_i = 0, _len = _ref.length; _i < _len; _i++) {
  li = _ref[_i];
  input = document.createElement('input');
  input.type = 'text';
  input.value = li.children[0].innerHTML;
  li.appendChild(input);
}

$('.example-debouncer input')[0].addEventListener('keyup', function() {
  var save;
  save = function() {
    $('.example-debouncer .alert')[0].innerHTML = "You saved! { name: '" + ($('.example-debouncer input')[0].value) + "' }";
    return setTimeout(function() {
      return $('.alert')[0].innerHTML = '';
    }, 1000);
  };
  return A.debounce(save, 'save');
});

$('#editSidebar').click(function() {
  var _j, _len1, _ref1;
  _ref1 = $('.acss-sidebar li');
  for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
    li = _ref1[_j];
    li.className = 'edit';
  }
  $('.example-editable-sidebar #text')[0].innerHTML = 'Click on sidebar items to edit them.';
  return setTimeout(function() {
    var _k, _len2, _ref2;
    _ref2 = $('.acss-sidebar li');
    for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
      li = _ref2[_k];
      li.className = '';
    }
    return $('.example-editable-sidebar #text')[0].innerHTML = '';
  }, 5000);
});

},{"../../browserify.js":1}],3:[function(require,module,exports){
o=function(s){m=this;m.length=0;m.splice=Function;m.t=document.querySelectorAll(s);for(i=0;i<m.t.length;i++)m.push(m.t[i]);return m};r=o.prototype,p=Array.prototype,r.length=0,r.push=p.push,r.splice=p.splice;r.click=function(f){for(i=0,m=this;i<m.t.length;i++){z=m.t[i],z.addEventListener('click',f);}return m};$=function(s){return new o(s)}

},{}]},{},[2])