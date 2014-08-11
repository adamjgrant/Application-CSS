var $, $$, debounce, debounceQueue, env, oneEvent, timer;

env = 'dev';


/*
Utility functions
 */

$$ = function(el) {
  return document.querySelectorAll(el);
};

$ = function(el) {
  return $$(el)[0];
};

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
