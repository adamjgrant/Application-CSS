for li in $('.acss-sidebar li')
  input = document.createElement 'input'
  input.type = 'text'
  input.value = li.children[0].innerHTML
  li.appendChild input

$('.example-debouncer input')[0].addEventListener 'keyup', ->
  save = ->
    $('.example-debouncer .alert')[0].innerHTML = "You saved! { name: '#{$('.example-debouncer input')[0].value}' }"
    setTimeout ->
      $('.alert')[0].innerHTML = ''
    , 1000

  A.debounce save, 'save'

$('#editSidebar').click ->
  for li in $('.acss-sidebar li')
    li.className = 'edit'
  $('.example-editable-sidebar #text')[0].innerHTML = 'Click on sidebar items to edit them.'
  setTimeout ->
    for li in $('.acss-sidebar li')
      li.className = ''
    $('.example-editable-sidebar #text')[0].innerHTML = ''
  , 5000
