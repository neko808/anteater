//Vars
const elegir = document.getElementById('elegir');
const name = document.getElementById('name');
const email = document.getElementById('email');
const empresa = document.getElementById('empresa');
const message = document.getElementById('message');
const btnEnviar = document.getElementById('enviar');


//event listeners

eventListeners();

function eventListeners(){

    document.addEventListener('DomContentLoaded', inicioApp);


}






//functions

function inicioApp(){

	btnEnviar.disabled = true;


}








/*     Modal       */


$(".showy").on("click", function(){
  $(".mask").addClass("active");
});


function closeModal(){
  $(".mask").removeClass("active");
}

$(".close, .mask").on("click", function(){
  closeModal();
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    closeModal();
  }
});