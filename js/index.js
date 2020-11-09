// JavaScript source code
let smallBtn = document.getElementById("small");
let mediumBtn = document.getElementById("medium");
let largeBtn = document.getElementById("large");
let size = document.getElementById("size");

smallBtn.addEventListener("click", () => {
    sizeOverride("S");
});

mediumBtn.addEventListener("click", () => {
    sizeOverride("M");
});

largeBtn.addEventListener("click", () => {
    sizeOverride("L");
});

function sizeOverride(newSize) {
    size.textContent = newSize;
}