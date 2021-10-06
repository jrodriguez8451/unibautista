// Funcion para matar la sesion por inactividad
window.onload = function(){killerSession();}
function killerSession(){
    // setTimeout permite ejecutar una función una vez después del intervalo de tiempo.
    // el tiempo se maneja en milisegundos
    setTimeout("alert('Se ha cerrado la sesión por inactividad.');",1140000);
    setTimeout("window.open('logout','_top');",1140000);
} 

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

// FUNCION PARA DESHABILITAR EL CLICK DERECHO
// $(document).ready(function(){
//     $(document).bind("contextmenu",function(e){
//         alert("Acción no permitida.");
//         return false;
//     });
// });

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