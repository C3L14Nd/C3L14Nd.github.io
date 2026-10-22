// ==========================================
// CELIANLAB
// Animations simples
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  const cards =
    document.querySelectorAll(
      ".universe-card, .project, .network"
    );

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform =
              "translateY(0)";

          }

        });

      },
      {
        threshold: 0.12
      }
    );


  cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
      "translateY(25px)";

    card.style.transition =
      "opacity .6s ease, transform .6s ease";

    observer.observe(card);

  });

});
