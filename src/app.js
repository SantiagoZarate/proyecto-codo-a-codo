// VARIABLES
const headerElement = document.querySelector(".header");
const saboresElement = document.querySelectorAll("[sabores]");

// ADD EVENT LISTENERS

window.addEventListener("scroll", cambiarHeader);

saboresElement.forEach(element => {
    element.addEventListener("click", expandirInformacion(element));    
});

// FUNCIONES

function cambiarHeader(){
    headerElement.classList.toggle("header-scroll", window.scrollY > 0);
}

function expandirInformacion(e){
    const boxExpandibleElement = e.children[1];
    boxExpandibleElement.classList.toggle("open-box");
}