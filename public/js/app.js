(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var clickQuery = require('clickQuery');


},{"clickQuery":3}],2:[function(require,module,exports){
var debounce, debounceQueue, env, oneEvent, timer;

env = 'dev';

require('../../browserify.js');

timer = false;

debounceQueue = null;

debounce = function(fn, id) {
  if (debounceQueue === null) {
    debounceQueue = id;
  }
  if (id === debounceQueue) {
    clearTimeout(timer);
  }
  return timer = setTimeout(function() {
    fn();
    return debounceQueue = null;
  }, 1000);
};

oneEvent = function(selector, event, fn) {
  var selectorClone;
  if (selector) {
    selectorClone = selector.cloneNode(true);
    selector.parentNode.replaceChild(selectorClone, selector);
    return selectorClone.addEventListener(event, fn);
  }
};


/*
MODAL
 */

$.modal = {
  on: function(el, event) {
    return oneEvent(el, event, function(e) {
      $('.se-modal')[0].style.display = 'block';
      return e.stopPropagation();
    });
  },
  close: function() {
    return $('.se-modal')[0].style.display = 'none';
  }
};

$('body').addEventListener('click', function() {
  if ($$('.se-modal[style="display: block;"]').length) {
    return $('.se-modal[style="display: block;"]').style.display = 'none';
  }
});

oneEvent($('.se-modal'), 'click', function(e) {
  return e.stopPropagation();
});


/*
GROWLS
 */

},{"../../browserify.js":1}],3:[function(require,module,exports){
o=function(s){m=this;m.length=0;m.splice=Function;m.t=document.querySelectorAll(s);for(i=0;i<m.t.length;i++)m.push(m.t[i]);return m};r=o.prototype,p=Array.prototype,r.length=0,r.push=p.push,r.splice=p.splice;r.click=function(f){for(i=0,m=this;i<m.t.length;i++){z=m.t[i],z.addEventListener('click',f);}return m};$=function(s){return new o(s)}

},{}]},{},[2])