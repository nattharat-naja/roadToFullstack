const thumbImg = document.querySelectorAll(".thumbs-img");
const fullImgContainer = document.querySelector(".full-img-container");
const fullImg = document.querySelector(".full-img");
const closeBtn = document.querySelector(".close-icon");

thumbImg.forEach((img) => {
    img.addEventListener("click", () => {
        fullImg.src = `./images/gallery/fulls/${img.alt}`;
        fullImgContainer.classList.add("visible");
    });
});

closeBtn.addEventListener("click", () => {
    fullImgContainer.classList.remove("visible");
});

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
    window.scrollTo(0, 0);
});
