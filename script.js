/*
==========================================================
CELIANLAB — CONFIGURATION
==========================================================

IMPORTANT :

C'est principalement ICI que tu modifieras tes liens.

Tu n'as normalement pas besoin de chercher
les liens dans tout le site.
==========================================================
*/


const CELIANLAB = {

    twitch:
        "#",

    youtube:
        "#",

    tiktok:
        "#",

    instagram:
        "#",

    vinted:
        "#",

    cults3d:
        "#",

    contact:
        "mailto:contact@celianlab.fr"

};



/*
==========================================================
APPLICATION DES LIENS
==========================================================
*/

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const links = {

            twitch:
                document.querySelectorAll(".twitch"),

            youtube:
                document.querySelectorAll(".youtube"),

            tiktok:
                document.querySelectorAll(".tiktok"),

            instagram:
                document.querySelectorAll(".instagram"),

            vinted:
                document.querySelectorAll(".vinted"),

            cults3d:
                document.querySelectorAll(".cults"),

        };


        Object.keys(links).forEach(
            platform => {

                links[platform].forEach(
                    link => {

                        link.href =
                            CELIANLAB[platform];

                        if (
                            CELIANLAB[platform] !== "#"
                        ) {

                            link.target =
                                "_blank";

                            link.rel =
                                "noopener noreferrer";

                        }

                    }
                );

            }
        );


        /*
        ===============================
        BOUTON CONTACT
        ===============================
        */

        document
            .querySelectorAll(
                'a[href^="mailto:"]'
            )
            .forEach(
                link => {

                    link.href =
                        CELIANLAB.contact;

                }
            );


        /*
        ===============================
        APPARITION DES CARTES
        ===============================
        */

        const elements =
            document.querySelectorAll(
                ".universe-card, .project-small-grid article, .network-card"
            );


        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                            }

                        }
                    );

                },
                {
                    threshold: .15
                }
            );


        elements.forEach(
            element => {

                observer.observe(element);

            }
        );

    }
);
