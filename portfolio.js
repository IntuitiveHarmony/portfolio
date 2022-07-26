
//  Function to change class for Nav focus
//----------------------------------------
focusNav = () => {
  $(`#navBtn`).addClass(`focus`)
}
blurNav = () => {
  $(`#navBtn`).removeClass(`focus`)
}

$(() => {

$(`li`).hover(function() {
  $(this).addClass(`focus`)
}, function() {
  $(this).removeClass(`focus`)
})//  Make nav items focus when hovered (change class)


})
