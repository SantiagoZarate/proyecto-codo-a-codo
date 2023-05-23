// VARIABLES
const headerElement = document.querySelector(".header");
const saboresElement = document.querySelectorAll("[sabores]");
const formularioElement = document.querySelector("#form");
const dominios = [
    "gmail",
    "hotmail",
    "skype",
    "log",
    "outlook"
]
// ADD EVENT LISTENERS

window.addEventListener("scroll", cambiarHeader);
formularioElement.addEventListener("submit", handleSumbit);

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

function handleSumbit(event){
    event.preventDefault();
    //  CAMPO DEL NOMBRE
    let FormName = formularioElement[0];

    // CAMPO DEL EMAIL
    let FormEmail = formularioElement[1];

    if (handleName(FormName) && handleMail(FormEmail)){
        agregarAnimacion(FormName, "form--aceptado");
        agregarAnimacion(FormEmail, "form--aceptado");

        // RESETEO DE TODOS LOS CAMPOS
        resetForm();
    }else{
        if (!handleMail(FormEmail)){
            agregarAnimacion(FormEmail, "form--error")
            // FormEmail.classList.toggle("form--error")
        }

        if(!handleName(FormName)){
            agregarAnimacion(FormName, "form--error")
        }
    }
}

function handleName(e){
    return e.value != "";
}

function handleMail(e){
    if(e.value != ""){
        const direccionValida = dominios.some(function(dominio){
        return e.value.includes(dominio + ".com")
        })

        return direccionValida;
    }
    return false
}

function resetForm(){
    formularioElement[0].value = ""
    formularioElement[1].value = ""
    formularioElement[2].value = ""
}

// AÑADE LA ANIMACION AL CAMPO Y LUEGO ELIMINA LA CLASE PARA QUE PUEDA REPETIRSE
function agregarAnimacion(e, clase){
    e.classList.add(clase);
    e.addEventListener("animationend", function(){
        e.classList.remove(clase);
    })
}