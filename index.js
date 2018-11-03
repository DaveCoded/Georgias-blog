//================= SELECTORS ================

const navLabel = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".navigation");
const closeNav = document.querySelector(".close-nav");

const hamburgerDivs = document.querySelectorAll(".header__nav-icon--bar");
const siteTitle = document.querySelector(".header__title");
const currentSeason = document.querySelector(".season-display");

//================== COLOURS ==================

const orange = "#dd693f";
const pink = "#e54451";
const darkBlue = "#303744";
const yellow = "#d9e126";
const red = "#d9455c";
const purple = "#5041bc";
let colour = purple;

//=============== NAV FUNCTIONALITY ================

navLabel.addEventListener("click", showNav);
closeNav.addEventListener("click", hideNav);

function showNav() {
  navigation.style.transform = "translateX(0)";
}

function hideNav() {
  navigation.style.transform = "translateX(-450px)";
}

// ============ HEADER COLOUR CHANGES ==============  

// hamburgerDivs.forEach(function(div){
// 	div.style.backgroundColor = "red";
// });

function scrollCondition() {
  if(window.scrollY >= 300){
    colour = pink;
  }
  changeColour(colour);
}

function changeColour(colour) {
  changeHamburger(colour);
  changeTitle(colour);
  changeSeason(colour);
}

function changeHamburger(colour) {
  hamburgerDivs.forEach(function(div){
    div.style.backgroundColor = colour; // THIS WORKS ON SCROLL. HOW DO I PASS THE COLOUR VARIABLE TO THIS FUNCTION?!?!
  })
}

function changeTitle(colour) {
  siteTitle.style.color = colour;
}

function changeSeason(colour) {
  currentSeason.style.color = colour;
}

window.addEventListener("scroll", scrollCondition);