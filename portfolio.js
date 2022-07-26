
//  Function to change class for Nav focus
//----------------------------------------
// focusNav = () => {
//   $(`#navBtn`).addClass(`focus`)
//   console.log(`sweet`)
// }
// blurNav = () => {
//   if ($(`#navBtn`) === `focus`) {
//
//   } else {
//   $(`#navBtn`).removeClass(`focus`)
//   }
// }


$(() => {

$(`li`).hover(function() {
  $(this).addClass(`focus`)
  // console.log(`yes`)
}, function() {
  $(this).removeClass(`focus`)
})//  Make nav items focus when hovered (change class)


})




























//
