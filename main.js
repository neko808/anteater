// animacion del logo al hacer scroll
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").classList.add('minum');
    console.log('scroll')
  } else {
    document.getElementById("header").classList.remove('minum');
  }
}
// vista principal por defecto es website
let mainview = "website";

//funcion para cambiar la vista del demo y poner la clase active a las vistas correctas
function changeView(view, contador) {    
    let contenedor = document.getElementById('main');
    //limpiamos todas las clases 
    let clean = contenedor.classList.remove('website','ecommerce','document') 
                Array.from(document.getElementsByClassName('website')).forEach(function(elem) {
                    elem.classList.remove('active');
                });;
                Array.from(document.getElementsByClassName('ecommerce')).forEach(function(elem) {
                    elem.classList.remove('active');
                });;
                Array.from(document.getElementsByClassName('document')).forEach(function(elem) {
                    elem.classList.remove('active');
                });;
    //cambiamos vista
    mainview = view;
    //modificamos el contador dependiendo que vista se eliga y siga corriendo adecuadamente el slide
    counter = contador;
    //limpiamos todas las clases
    clean;
    //añadimos al contenedor general la clase de la vista actual
    contenedor.classList.add(view);
    //añadimos la clase active a los elementos de la vista actual 
    Array.from(document.getElementsByClassName(view)).forEach(function(elem) {
        elem.classList.add('active');
    });
}
 //contador del slide demo
let counter = 0;

//funcion para usar en el intervalo y que vaya cambiando los slides del demo
function add(){
    counter += 1;
    switch (counter) {
        case 1: 
            counter = 1
            changeView('website',1)
            break;
        case 4:
            counter = 4
            changeView('ecommerce',4)
            break;
        case 7:
            counter = 7
            changeView('document',7)
            break;
        case 10:
            console.log('reset')
            counter = 0
            break;
    
        default:
            break;
    }
}

//funcion del intervalo
setInterval(add, 3000)