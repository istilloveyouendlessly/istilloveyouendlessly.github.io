const header = document.querySelector("blur-header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 150);
});