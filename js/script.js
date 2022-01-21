/* Hamburger Menu */

function menuToggle() {
    var menu = document.getElementById("navLinks");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
}