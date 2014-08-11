$('.example-debouncer input').addEventListener 'keyup', ->
  save = ->
    $('.example-debouncer .alert').innerHTML = "You saved! { name: '#{$('.example-debouncer input').value}' }"
    setTimeout ->
      $('.alert').innerHTML = ''
    , 1000

  debounce save, 'save'
