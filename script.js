const navLinks = document.querySelector(".nav-links");
function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("top-[9%]");
}
document
    .getElementById("menu-toggle")
    .addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("hidden");
});
  AOS.init();