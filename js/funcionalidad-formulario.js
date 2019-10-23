$(document).ready(function () {
    $("#submit-form-button").click(function (e) { 
        e.preventDefault();
        const data = $("#formulario-contacto").serialize();
        $.post('/contact', data, function (response) { 
            /* Funcionalidad modal*/
            console.log(response)
        })
    });
});