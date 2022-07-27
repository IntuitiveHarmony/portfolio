
const clearHome = () => {
  $(`.main`).empty()
}


//-------------
//  Welcome page
//-------------

const loadHome = () => {
  $(`.main`).empty()
  let $container = $(`<div>`)
    .addClass(`container`)
    .appendTo(`.main`)
  let $home = $(`<h3>`)
    .text(`Welcome`)
    .appendTo($container)
  let $message = $(`<p>`)
    .text(`You have stumbled upon my info page`)
    .appendTo($container)
}


//-----------
//  Bio Page
//-----------

const loadBio = () => {
  clearHome()
  let $container = $(`<div>`)
    .addClass(`container`)
    .appendTo(`.main`)
  let $bioHeader = $(`<h3>`)
    .text(`Constant Exploration`)
    .appendTo($container)
  let $bio = $(`<p>`)
    .text(`This is where My bio will go`)
    .appendTo($container)
}


//--------------
//  Resume page
//--------------

const loadResume = () => {

}


//--------------
//  Projects page
//--------------

const loadProjects = () => {

}


//--------------
//  Resume page
//--------------

const loadResume = () => {

}


//--------------------------------------------------
//  Add and remove the text of nav items with hover
//-------------------------------------------------
const hoverTextAdd = () => {
  $(`.focus`).siblings().show()
}
const hoverTextRemove = () => {
  $(`h2`).hide()
  console.log(`txtrm`)
}



$(() => {
  loadHome() //Start with the welcome page
  $(`.homeLink`).on(`click`, loadHome)  //  Home Button
  $(`#nav1`).on(`click`, loadBio)       //  Bio Button
  $(`#nav2`).on(`click`, loadResume)    //  Resume Button
  $(`#nav3`).on(`click`, loadProjects)  //  Projects Button
  $(`#nav4`).on(`click`, loadLinks)     //  Bio Button


    //---------------------------------------------------
    //  nav items focus when hovered (change class)
    //---------------------------------------------------
  $(`.navPic`).hover(function() {
    $(this).addClass(`focus`)
    hoverTextAdd()
      }, function() {
        $(this).removeClass(`focus`).removeAttr(`id`, `current`)
        hoverTextRemove()
    })

})




























//
