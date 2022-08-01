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
    .addClass(`bioContainer`)
    .addClass(`container`)
    .appendTo(`.main`)
  let $bioHeader = $(`<h3>`)
    .text(`Constant Exploration`)
    .appendTo($container)
// Buttons for the carousel
  let $leftBtnContainer = $(`<div>`)
    .addClass(`leftBtn`)
    .appendTo($container)
  let $leftBtn = $(`<span>`)  //  buttons came from https://linearicons.com/free
    .addClass(`lnr lnr-arrow-left-circle`)
    .appendTo($leftBtnContainer)
  let $rightBtnContainer = $(`<div>`)
    .addClass(`rightBtn`)
    .appendTo($container)
  let $rightBtn = $(`<span>`)  //  buttons came from https://linearicons.com/free
    .addClass(`lnr lnr-arrow-right-circle`)
    .appendTo($rightBtnContainer)
  //  Beginning of carousel
  let $carousel = $(`<div>`)
    .addClass(`carousel`)
    .appendTo($container)
  let $picContainer = $(`<div>`)
    .addClass(`bioPic`)
    .addClass(`picContainer`)
    .appendTo($carousel)
  //  Begin carousel content
  let $bio = $(`<p>`)
      .text(`Hello, my name is Jason.`)
      .appendTo($picContainer)
  let $bioPic = $(`<img>`)
    .attr(`id`, `hueFilter`)
    .attr(`alt`, `Jason with reflective tape obscuring his eyes`)
    .attr(`src`, `files/pictures/IMG_0779.jpeg`)
    .appendTo($bio)
  let $bio2 = $(`<p>`)
    .text(`I am from Colorado and I love nature`)
    .appendTo($picContainer)
  let $bioPic2 = $(`<img>`)
    .attr(`src`, `files/pictures/IMG_2161 2.jpeg`)
    .attr(`alt`, `Columbine Flower`)
    .appendTo($bio2)
  let $bio3 = $(`<p>`)
    .text(`I enjoy being by the rivers.  I like the way they sound`)
    .appendTo($picContainer)
  let $bioPic3 = $(`<img>`)
    .attr(`src`, `files/pictures/IMG_1981 2.jpeg`)
    .attr(`alt`, `River with hill`)
    .appendTo($bio3)
  let $bio4 = $(`<p>`)
    .text(`Forraging is fun! Here is a wild strawberry plant, no fruit yet`)
    .appendTo($picContainer)
  let $bioPic4 = $(`<img>`)
    .attr(`src`, `files/pictures/IMG_2174 2.jpeg`)
    .attr(`alt`, `Wild Strawberry Plant`)
    .appendTo($bio4)
  let $bio6 = $(`<p>`)
    .text(`Taking my dogs into the woods`)
    .appendTo($picContainer)
  let $bioPic6 = $(`<img>`)
    .attr(`src`, `files/pictures/IMG_0606.jpeg`)
    .attr(`alt`, `Jason's dog, Delta in the woods with columbine flowers`)
    .appendTo($bio6)
  let $bio7 = $(`<p>`)
    .text(`I enjoy nature so much, I started to record it`)
    .appendTo($picContainer)
  let $bioPic7 = $(`<img>`)
    .attr(`src`, `files/pictures/IMG_2076 2.jpeg`)
    .attr(`alt`, `Jason in the woods with a recorder`)
    .appendTo($bio7)
  let $bio8 = $(`<p>`)
    .text(`If I ever have time again I will share more of the recordings with you!`)
    .appendTo($picContainer)
  let $soundContainer = $(`<div>`)
    .addClass(`player`)
    .appendTo($bio8)
  // Embeded media from my SoundClound page
  let $bioSound = $(`<HTML>`)
    .html(`<iframe width="100%" class ="player" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1314750247&color=%23d03ce4&inverse=true&auto_play=false&show_user=true"></iframe><div class ="player" style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/invisiblebirds" title="Invisible Birds" target="_blank" style="color: #cccccc; text-decoration: none;">Invisible Birds</a> · <a href="https://soundcloud.com/invisiblebirds/colorado-stream" title="Colorado Stream" target="_blank" style="color: #cccccc; text-decoration: none;">Colorado Stream</a></div>`)
    .appendTo($soundContainer)
  let $bioPic8 = $(`<img>`)
    .attr(`src`, `files/pictures/river.gif`)
    .attr(`alt`, `Gif of portable recorder by a river`)
    .appendTo($bio8)
  //  Count steps in picture carousel
  let currentImgIndex = 0
  //  Length of carousel
  let numOfImages = $(`.bioPic`).children().length - 1
  //  Scroll right through pictures hiding current one and display next
  $('.rightBtn').on('click', () => {
    $(`.bioPic`).children()
      .eq(currentImgIndex)
      .css(`display`, `none`)
  //  Loop back through to first Picture at the end of list
  if(currentImgIndex < numOfImages) {
    currentImgIndex ++
    } else {
      currentImgIndex = 0
    }
  $(`.bioPic`).children()
    .eq(currentImgIndex)
    .css(`display`, `block`)
    })
  //  Scroll left through pictures hiding current one and display previous
  $('.leftBtn').on('click', () => {
    $('.bioPic').children()
      .eq(currentImgIndex)
      .css('display', 'none')
  //  Loop back through to first Picture at the end of list
  if(currentImgIndex > 0) {
    currentImgIndex --
    } else {
      currentImgIndex = numOfImages
    }
  $('.bioPic').children()
      .eq(currentImgIndex)
        .css('display', 'block')
  })
}


//--------------
//  Resume page
//--------------

const loadResume = () => {
  clearHome()
  let $container = $(`<div>`)
    .addClass(`container`)
    .appendTo(`.main`)
  let $resumeHeader = $(`<h3>`)
    .text(`Varied Work History`)
    .appendTo($container)
  let $resume = $(`<p>`)
    .text(`I have professional experience in HVAC and Plumbing service and repair, restaurant managment`)
    .appendTo($container)
}


//--------------
//  Projects page
//--------------

const loadProjects = () => {
  clearHome()
  let $container = $(`<div>`)
    .addClass(`container`)
    .appendTo(`.main`)
  let $projectHeader = $(`<h3>`)
    .text(`Projects`)
    .appendTo($container)
  let $project = $(`<h4>`)
    .text(`Rock, Paper, Scossors Game`)
    .appendTo($container)
  let $input2 = $(`<div>`)
    .text(`PLAY`)
    .addClass(`playButton`)
    // .attr(`type`, `submit`)
    // .attr(`id`, `userClick`)
    .attr(`onClick`, `rockGame()`)
    .appendTo($container)
}


//--------------------------
//  Rock Paper Scissor game
//--------------------------

const rockChoices = [`ROCK`, `PAPER`, `SCISSOR`]
const rockGame = () => {
  //for random rock paper or scissor
  const randomMove = () => {
    return (rockChoices[Math.floor(Math.random()*rockChoices.length)])
    }
    const clearHand = () => {
      $(`.hand`).empty()
    }
  clearHome()
  let $gameBoard = $(`<div>`)
    .addClass(`gameBoard`)
    .appendTo(`.main`)
  let $title = $(`<h3>`)
    .text(`Rock, Paper, Scissors`)
    .appendTo($gameBoard)
  let $intro = $(`<p>`)
    .text(`Type your response and press the button`)
    .appendTo($gameBoard)
  let $input = $(`<input>`)
    .addClass(`playText`)
    .attr(`type`, `text`)
    .attr(`id`, `userInput`)
    .attr(`placeholder`, `Rock, Paper or Scissor`)
    .appendTo($gameBoard)
  let $input3 = $(`<input>`)
    .addClass(`playButton`)
    .attr(`type`, `submit`)
    .attr(`id`, `gameClick`)
    .appendTo($gameBoard)
    $('#gameClick').on(`click`, () => {
      let $hand = $(`<div>`)
        .addClass(`hand`)
        .appendTo($gameBoard)
      const $choice = $(`#userInput`).val()
      randomMove()
      clearHand()
      $(`.gameBoard`).removeClass(`redGame`)   // Reset gameBoard back to original color
      $(`.gameBoard`).removeClass(`greenGame`)  // ..
      $(`.gameBoard`).removeClass(`yellowGame`)  // ..
      let computerMove = randomMove()
      if ($choice.toUpperCase() === computerMove) { //  Tie Game
        let $tie = $(`<p>`)
          .text(`Player chose: ${$choice}`)
          .appendTo($hand)
        let $tie2 = $(`<p>`)
          .text(`Computer chose: ${computerMove}`)
          .appendTo($hand)
        let $tie3 = $(`<p>`)
          .text(`Tie game`)
          .appendTo($hand)
        $(`.gameBoard`).addClass(`yellowGame`)
      } else if ($choice.toUpperCase() === `ROCK` && computerMove === `SCISSOR`) {
        let $op1 = $(`<p>`)
          .text(`Player chose: ${$choice}`)
          .appendTo($hand)
        let $op2 = $(`<p>`)
          .text(`Computer chose: ${computerMove}`)
          .appendTo($hand)
        let $op3 = $(`<p>`)
          .text(`You Must Have Training!`)
          .appendTo($hand)
        $(`.gameBoard`).addClass(`greenGame`)
      } else if ($choice.toUpperCase() === `ROCK` && computerMove === `PAPER`) {
        let $op1 = $(`<p>`)
          .text(`Player chose: ${$choice}`)
          .appendTo($hand)
        let $op2 = $(`<p>`)
          .text(`Computer chose: ${computerMove}`)
          .appendTo($hand)
        let $op3 = $(`<p>`)
          .text(`Oh No!`)
          .appendTo($hand)
        $(`.gameBoard`).addClass(`redGame`)
      } else if ($choice.toUpperCase() === `PAPER` && computerMove === `SCISSOR`) {
        let $op1 = $(`<p>`)
          .text(`Player chose: ${$choice}`)
          .appendTo($hand)
        let $op2 = $(`<p>`)
          .text(`Computer chose: ${computerMove}`)
          .appendTo($hand)
        let $op3 = $(`<p>`)
          .text(`Keep Practicing!`)
          .appendTo($hand)
        $(`.gameBoard`).addClass(`redGame`)
      } else if ($choice.toUpperCase() === `PAPER` && computerMove === `ROCK`) {
        let $op1 = $(`<p>`)
          .text(`Player chose: ${$choice}`)
          .appendTo($hand)
        let $op2 = $(`<p>`)
          .text(`Computer chose: ${computerMove}`)
          .appendTo($hand)
        let $op3 = $(`<p>`)
          .text(`Nicely Done!`)
          .appendTo($hand)
        $(`.gameBoard`).addClass(`greenGame`)
      } else if ($choice.toUpperCase() === `SCISSOR` && computerMove === `PAPER`) {
        let $op1 = $(`<p>`)
          .text(`Player chose: ${$choice}`)
          .appendTo($hand)
        let $op2 = $(`<p>`)
          .text(`Computer chose: ${computerMove}`)
          .appendTo($hand)
        let $op3 = $(`<p>`)
          .text(`Sweet!`)
          .appendTo($hand)
        $(`.gameBoard`).addClass(`greenGame`)
      } else if ($choice.toUpperCase() === `SCISSOR` && computerMove === `ROCK`) {
        let $op1 = $(`<p>`)
          .text(`Player chose: ${$choice}`)
          .appendTo($hand)
        let $op2 = $(`<p>`)
          .text(`Computer chose: ${computerMove}`)
          .appendTo($hand)
        let $op3 = $(`<p>`)
          .text(`Better Luck Next Time!`)
          .appendTo($hand)
        $(`.gameBoard`).addClass(`redGame`)
      } else {
        let op7 = $(`<p>`)
        .text(`You typed ${$choice}. Please type 'rock' 'paper' or 'scissor'`)
        .appendTo($hand)
        $(`.gameBoard`).addClass(`yellowGame`)
      } //  Mistype
    })
}


//--------------
//  Links page
//--------------

const loadLinks = () => {
  clearHome()
  let $container = $(`<div>`)
    .addClass(`container`)
    .appendTo(`.main`)
  let $linkHeader = $(`<h3>`)
    .text(`Here are some external links`)
    .appendTo($container)
  let $ltext = $(`<p>`)
    .text(`I release audio under the name Invisible Birds`)
    .appendTo($container)
  let $gitLink = $(`<a>`)
    .text(`Github - Intuitive Harmony`)
    .attr(`href`, `https://github.com/IntuitiveHarmony`)
    .attr(`target`, `blank`)
    .appendTo($container)
  let $soundLink = $(`<a>`)
    .text(`SoundClound - Invisible Birds`)
    .attr(`href`, `https://soundcloud.com/invisiblebirds`)
    .attr(`target`, `blank`)
    .appendTo($container)
  let $appleLink = $(`<a>`)
    .text(`iTunes - Invisible Birds`)
    .attr(`href`, `https://music.apple.com/us/album/1596716534`)
    .attr(`target`, `blank`)
    .appendTo($container)
  let $spotifyLink = $(`<a>`)
    .text(`Spotify - Invisible Birds`)
    .attr(`href`, `https://open.spotify.com/album/45QOA3KuhNgai3ixOwMKGh`)
    .attr(`target`, `blank`)
    .appendTo($container)
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


//---------------------
//  Clear main section
//---------------------

const clearHome = () => {
  $(`.main`).empty()
}


$(() => {

  //----------
  //  Buttons
  //----------
  loadHome() //Start with the welcome page
  $(`.homeLink`).on(`click`, loadHome)     //  Home Button
  $(`#nav1`).on(`click`, loadBio)          //  Bio Button
  $(`#nav2`).on(`click`, loadResume)       //  Resume Button
  $(`#nav3`).on(`click`, loadProjects)     //  Projects Button
  $(`#nav4`).on(`click`, loadLinks)        //  Bio Button
  $(`#userClick`).on(`click`, rockGame)




    //---------------------------------------------------
    //  nav items focus when hovered (change class)
    //---------------------------------------------------
  $(`.navPic`).hover(function() {
    $(this).addClass(`focus`)
    // hoverTextAdd()
      }, function() {
        $(this).removeClass(`focus`).removeAttr(`id`, `current`)
        // hoverTextRemove()
    })
})




























//
