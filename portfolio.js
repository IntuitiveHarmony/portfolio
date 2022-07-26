
//  Function to change class for Nav focus
//----------------------------------------
focusNav = () => {
  $(`#navBtn`).css(`color`, `magenta`)
}
blurNav = () => {
  $(`#navBtn`).css(`color`, `black`)
}

$(() => {

$(`#navBtn`).hover(focusNav, blurNav)//  Make nav items focus when hovered (change class)


})
