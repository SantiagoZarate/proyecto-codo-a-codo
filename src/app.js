// VARIABLES
const headerElement = document.querySelector(".header");

// ADD EVENT LISTENERS

window.addEventListener("scroll", cambiarHeader);

// FUNCIONES

function cambiarHeader(){
    headerElement.classList.toggle("header-scroll", window.scrollY > 0);
}