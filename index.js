document.addEventListener("DOMContentLoaded", () => {
    // This is some voodo shit
    const toggleBtns = document.querySelectorAll(".toggle-button");
    const contentDivs = document.querySelectorAll(".content");
    const toggleBtnsImgs = document.querySelectorAll(".toggle-button-image");

    toggleBtns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            const isOpen = contentDivs[i].classList.contains("active");
            isOpen
                ? (toggleBtnsImgs[i].src = "/assets/images/icon-plus.svg")
                : (toggleBtnsImgs[i].src = "/assets/images/icon-minus.svg");
            contentDivs[i].classList.toggle("active");
        });
    });
});
