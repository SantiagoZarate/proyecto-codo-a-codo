// VARIABLES
const headerElement = document.querySelector(".header");
const saboresElement = document.querySelectorAll("[sabores]");

// ADD EVENT LISTENERS

window.addEventListener("scroll", cambiarHeader);

saboresElement.forEach(element => {
    element.addEventListener("click", function(){
        expandirInformacion(element);
        animarCruz(element);
    })
});

// FUNCIONES

function cambiarHeader(){
    headerElement.classList.toggle("header-scroll", window.scrollY > 0);
}

function expandirInformacion(e){
    const boxExpandibleElement = e.children[1];
    boxExpandibleElement.classList.toggle("open-box");
}

function animarCruz(e){
    const boxConLaCruz = e.children[0].children[1];
    boxConLaCruz.classList.toggle("girar-plus-abrir");
    boxConLaCruz.classList.toggle("girar-plus-cerrar");
}