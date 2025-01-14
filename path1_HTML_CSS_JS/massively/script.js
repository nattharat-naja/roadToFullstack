const navMenu = document.querySelector("#nav-menu");
const navContainer = document.querySelector("#nav-container");
const navIcon = document.querySelector("#nav-icon");
const closeIcon = document.querySelector(".close-icon");
const overlay = document.querySelector(".overlay");

const headDetail = document.querySelector(".head-detail");
const headStart = document.querySelector(".head-start");
const headButton = document.querySelector(".head-btn");

const links = document.querySelectorAll(".nav-link");
const iframe = document.querySelector("iframe");

const scrollHeaderY = 300;
const scrollNavY = 575;
const scrollStart = 450;

function adjustIframeHeight() {
    iframe.style.height =
        iframe.contentWindow.document.body.scrollHeight + "px";
}

function handleIcon() {
    const width = window.innerWidth;
    if (width > 768) {
        navIcon.classList.replace("icon-type-2", "icon-type-1");
    } else {
        navIcon.classList.replace("icon-type-1", "icon-type-2");
    }
}

window.addEventListener("resize", () => {
    adjustIframeHeight();
    handleIcon();
});

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
    adjustIframeHeight();
    handleIcon();
});

window.addEventListener("scroll", () => {
    if (window.scrollY >= scrollHeaderY) {
        headDetail.classList.replace(
            "head-detail-slide-up",
            "head-detail-slide-down"
        );
        headButton.classList.replace(
            "head-btn-slide-down",
            "head-btn-slide-up"
        );
    } else {
        headDetail.classList.replace(
            "head-detail-slide-down",
            "head-detail-slide-up"
        );
        headButton.classList.replace(
            "head-btn-slide-up",
            "head-btn-slide-down"
        );
    }

    if (window.scrollY >= scrollNavY) {
        navMenu.classList.replace("nav-menu-hide", "nav-menu-show");
    } else {
        navMenu.classList.replace("nav-menu-show", "nav-menu-hide");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    void headDetail.offsetWidth;
    headDetail.classList.replace(
        "head-detail-slide-down",
        "head-detail-slide-up"
    );
});

headStart.addEventListener("click", () => {
    window.scrollTo(0, scrollStart);
});

[navMenu, closeIcon].forEach((element) => {
    element.addEventListener("click", () => {
        overlay.classList.toggle("overlay-fade-in");
        overlay.classList.toggle("overlay-fade-out");
        navContainer.classList.toggle("nav-container-hide");
    });
});

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        const to = e.target.getAttribute("to");

        links.forEach((l) => {
            l.classList.remove("active");
        });
        link.classList.add("active");

        iframe.src = to;
        iframe.addEventListener("load", () => {
            adjustIframeHeight();
        });

        window.scrollTo(0, scrollStart);
        navContainer.classList = "nav-container-hide";
        overlay.classList = "overlay overlay-fade-out";
    });
});
