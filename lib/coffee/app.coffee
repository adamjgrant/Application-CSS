###
Utility functions
###

# A very rudimentary, lightweight alternative to jQuery
$$ = (el) -> document.querySelectorAll el
$ = (el) -> $$(el)[0]

# The debouncer prevents a rapidly-called function from being called 
# more than once per second.
timer = false
debounceQueue = null 
debounce = (fn, id) ->
  debounceQueue = id if debounceQueue == null
  clearTimeout timer if id == debounceQueue
  timer = setTimeout ->
    fn()
    debounceQueue = null
  , 1000

# The queued dispatcher is a conveyor belt for functions to allow the possibility of undoing.
# Functions move down the belt via a timer and are bumped ahead by other queued functions.
# Within the time on the belt, the user can choose to remove (undo) a queued function.  
# TODO

# Make sure only one event listener exists.
oneEvent = (selector, event, fn) ->
  if selector
    selectorClone = selector.cloneNode true
    selector.parentNode.replaceChild selectorClone, selector
    selectorClone.addEventListener event, fn

###
MODAL
###

# Set event listener to deploy modal
$.modal =
  on: (el, event) ->
    oneEvent el, event, (e) ->
      $('.se-modal')[0].style.display = 'block'
      e.stopPropagation()

  close: () ->
    $('.se-modal')[0].style.display = 'none'

# Close the single element modal if clicked outside.
$('body').addEventListener 'click', ->
  $('.se-modal[style="display: block;"]').style.display = 'none' if $$('.se-modal[style="display: block;"]').length

# Don't close the modal when clicking on it.  
oneEvent $('.se-modal'), 'click', (e) -> e.stopPropagation()

###
GROWLS
###
# TODO
