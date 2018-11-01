const navLabel = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".navigation");

navLabel.addEventListener("click", showNav);

function showNav() {
  navigation.style.transform = "translateX(0)";
}