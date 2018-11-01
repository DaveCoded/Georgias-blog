const navLabel = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".navigation");
const closeNav = document.querySelector(".close-nav");

navLabel.addEventListener("click", showNav);
closeNav.addEventListener("click", hideNav);

function showNav() {
  navigation.style.transform = "translateX(0)";
}

function hideNav() {
  navigation.style.transform = "translateX(-380px)";
}