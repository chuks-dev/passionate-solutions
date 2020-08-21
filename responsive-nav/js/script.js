var hamburger = document.querySelector(".hamburger");
var mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", showMobileNav);

function showMobileNav() {
  mobileNav.classList.toggle("show-mobile-nav");
}
//click

// classlists methods
// 1. classList.add('')
// 2. classList.remove('')
// 3. classList.toggle('')
