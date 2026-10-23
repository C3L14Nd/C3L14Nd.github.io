```javascript
/*
==================================================
CELIANLAB — CONFIGURATION
Modifie uniquement les liens ci-dessous.
==================================================
*/

const CELIANLAB = {

    twitch: "https://www.twitch.tv/CelianLab",

    youtube: "https://www.youtube.com/@CelianLab",

    tiktok: "https://www.tiktok.com/@CelianLab",

    instagram: "https://www.instagram.com/CelianLab",

    contact: "mailto:contact@celianlab.fr"

};


/*
==================================================
NE PAS MODIFIER EN DESSOUS
==================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const platforms = [
        "twitch",
        "youtube",
        "tiktok",
        "instagram"
    ];

    platforms.forEach(platform => {

        const elements = document.querySelectorAll(
            "." + platform
        );

        elements.forEach(element => {

            element.href = CELIANLAB[platform];

            element.target = "_blank";

            element.rel = "noopener noreferrer";

        });

    });


    /*
    Contact
    */

    document.querySelectorAll(
        'a[href^="mailto:"]'
    ).forEach(element => {

        element.href = CELIANLAB.contact;

    });


    /*
    Apparition progressive des éléments
    */

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    document
        .querySelectorAll(
            ".portfolio-card, .process-card, .network, .testimonial-empty"
        )
        .forEach(element => {

            observer.observe(element);

        });

});
```
