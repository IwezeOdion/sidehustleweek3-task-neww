const menu = document.querySelector("#menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", function() {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("nav-toggle");
  console.log("clicked")
});
