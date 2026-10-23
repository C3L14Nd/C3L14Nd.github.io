const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");


// ============================
// MOBILE MENU
// ============================

if (menuButton) {

    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

}


// Ferme le menu après avoir cliqué sur un lien

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });

});


// ============================
// APPARITION DES ELEMENTS
// ============================

const revealElements = document.querySelectorAll(
    ".section, .universe-card, .process-card, .social-card, .review-empty"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.08
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// ============================
// ANNEE AUTOMATIQUE
// ============================

const yearElements = document.querySelectorAll("[data-year]");

yearElements.forEach(element => {
    element.textContent = new Date().getFullYear();
});
