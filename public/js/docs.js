var env, input, li, _i, _len, _ref;

env = 'dev';

_ref = $$('.acss-sidebar li');
for (_i = 0, _len = _ref.length; _i < _len; _i++) {
  li = _ref[_i];
  input = document.createElement('input');
  input.type = 'text';
  input.value = li.children[0].innerHTML;
  li.appendChild(input);
}

$('.example-debouncer input').addEventListener('keyup', function() {
  var save;
  save = function() {
    $('.example-debouncer .alert').innerHTML = "You saved! { name: '" + ($('.example-debouncer input').value) + "' }";
    return setTimeout(function() {
      return $('.alert').innerHTML = '';
    }, 1000);
  };
  return debounce(save, 'save');
});

$('#editSidebar').addEventListener('click', function() {
  var _j, _len1, _ref1;
  _ref1 = $$('.acss-sidebar li');
  for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
    li = _ref1[_j];
    li.className = 'edit';
  }
  return setTimeout(function() {
    var _k, _len2, _ref2, _results;
    _ref2 = $$('.acss-sidebar li');
    _results = [];
    for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
      li = _ref2[_k];
      _results.push(li.className = '');
    }
    return _results;
  }, 5000);
});
