for li in $$('.acss-sidebar li')
  input = document.createElement 'input'
  input.type = 'text'
  input.value = li.children[0].innerHTML
  li.appendChild input

$('.example-debouncer input').addEventListener 'keyup', ->
  save = ->
    $('.example-debouncer .alert').innerHTML = "You saved! { name: '#{$('.example-debouncer input').value}' }"
    setTimeout ->
      $('.alert').innerHTML = ''
    , 1000

  debounce save, 'save'

$('#editSidebar').addEventListener 'click', ->
  for li in $$('.acss-sidebar li')
    li.className = 'edit'
  setTimeout ->
    for li in $$('.acss-sidebar li')
      li.className = ''
  , 5000

