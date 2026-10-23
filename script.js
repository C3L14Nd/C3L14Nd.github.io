const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");


// =========================
// MENU MOBILE
// =========================

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("open");

    });

}


// Fermer le menu après avoir cliqué

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


// =========================
// ANIMATIONS
// =========================

const revealElements = document.querySelectorAll(
    ".section, .universe-card, .business-card, .business-note, .process-card, .social-card, .review-empty"
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


// =========================
// EMAIL
// =========================

const emailLinks = document.querySelectorAll(
    'a[href^="mailto:"]'
);


emailLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log(
            "Contact CelianLab via celiandbs.contact@gmail.com"
        );

    });

});
