var env;

env = 'dev';

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
