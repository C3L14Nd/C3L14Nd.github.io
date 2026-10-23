```javascript
/*
    CELIANLAB
    =========
    Modifie uniquement les liens ci-dessous.
*/

const links = {
    twitch: "https://www.twitch.tv/CelianLab",
    youtube: "https://www.youtube.com/@CelianLab",
    tiktok: "https://www.tiktok.com/@CelianLab",
    instagram: "https://www.instagram.com/CelianLab"
};


/*
    Ne rien modifier sous cette ligne.
*/

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".twitch").forEach(function (link) {
        link.href = links.twitch;
    });

    document.querySelectorAll(".youtube").forEach(function (link) {
        link.href = links.youtube;
    });

    document.querySelectorAll(".tiktok").forEach(function (link) {
        link.href = links.tiktok;
    });

    document.querySelectorAll(".instagram").forEach(function (link) {
        link.href = links.instagram;
    });

});
```
