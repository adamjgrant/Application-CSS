window.A = new Object()

# The debouncer prevents a rapidly-called function from being called
# more than once per second.
A.debounceTimer = false
A.debounceQueue = null
A.debounce = (fn, id) ->
  A.debounceQueue = id if A.debounceQueue == null
  clearTimeout A.debounceTimer if id == A.debounceQueue
  A.debounceTimer = setTimeout ->
    fn()
    A.debounceQueue = null
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
modal =
  on: (el, event) ->
    oneEvent el, event, (e) ->
      $('.se-modal')[0].style.display = 'block'
      e.stopPropagation()

  close: () ->
    $('.se-modal')[0].style.display = 'none'

# Close the single element modal if clicked outside.
$('body').click ->
  $('.se-modal[style="display: block;"]').style.display = 'none' if $('.se-modal[style="display: block;"]').length

# Don't close the modal when clicking on it.
$('.se-modal').click (e) -> e.stopPropagation()

###
STATUSES
###

A.status = (status) ->
  # Create a unique id
  id = Math.round(Math.random() * 9999999)

  # Set the status container
  $statusContainer = if $('.acss-status').length then $('.acss-status') else $(status.selector)

  # Clear out and create a unique status inside the container
  $($statusContainer).html("<div id='status-#{id}' class='status'>#{status.title}</div>")

  # Hide after timeout.
  delay = status.delay || 2000
  setTimeout ->
    $("#status-#{id}").fadeOut('fast')
  , delay
