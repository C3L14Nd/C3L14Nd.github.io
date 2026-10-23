const menuButton = document.getElementById("menuButton");
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav a");

if (menuButton) {
    menuButton.addEventListener("click", () => {
        header.classList.toggle("menu-open");
    });
}

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        header.classList.remove("menu-open");
    });
});
