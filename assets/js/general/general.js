// Funcion para evitar que se guarden datos en la modal
function cleanModal() {
    $('.modal').on('hidden.bs.modal', function(){
        $(this).find('form')[0].reset();
    });
}

// FUNCION PARA BORRAR RESIDUOS DE DATOS DENTRO DE LAS MODALES
function restartSelect(){   
    $('select option').removeAttr('selected');
    $('.restart-select option:selected').removeAttr('selected');
    cleanModal();
}

// Funcion para vaciar datos de un formulario
// Se debe poner dentro del boton el siguiente codigo: onclick="resetform()"
function resetForm() {
    $('form select').each(function() { this.selectedIndex = 0 });
    $('form input[type=text] , form textarea').each(function() { this.value = '' });
}

// FUNCIONES PARA DESHABILITAR EL INSPECCIONAR ELEMENTO
$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        alert("Acción no permitida.");
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I   
        alert("Acción no permitida.");     
        return false;
    }
});
$(document).ready(function(){
    $(document).bind("contextmenu",function(e){
        alert("Acción no permitida.");
        return false;
    });
});
$(document).ready(function(){
    $(document).keydown(function(event) {
        var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
        if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
            alert("Acción no permitida.");
            //disable key press porcessing
            return false;
        }
    });
});

/* SWEET ALERTS:*/

//Funcion Alerta Validación
function validationAlert(title,confirmButtonColor) {
    Swal.fire({
        icon: 'warning',
        title: title,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: confirmButtonColor
    })
}

//Funcion Alerta CRUD
function crudAlert(icon,title,confirmButtonColor,iconColor) {
    Swal.fire({
        icon: icon,
        title: title,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: confirmButtonColor,
        iconColor: iconColor,
    })
}

//Funcion Alerta Generica
function genericAlert(icon,title,text,confirmButtonColor,iconColor) {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: confirmButtonColor,
        iconColor: iconColor,
    })
}