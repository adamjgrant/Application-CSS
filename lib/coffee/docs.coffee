require('../../browserify.js')

$('.example-debouncer input')[0].addEventListener 'keyup', ->
  save = ->
    $('.example-debouncer .alert')[0].innerHTML = "You saved! { name: '#{$('.example-debouncer input').value}' }"
    setTimeout ->
      $('.alert')[0].innerHTML = ''
    , 1000

  A.debounce save, 'save'
