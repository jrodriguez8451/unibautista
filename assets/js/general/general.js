// Funcion para evitar que se guarden datos en la modal
function cleanModal() {
    $('.modal').on('hidden.bs.modal', function(){
        $(this).find('form')[0].reset();
    });
}


// Funcion para vaciar datos de un formulario
// Se debe poner dentro del boton el siguiente codigo: onclick="resetform()"
function resetform() {
    $("form select").each(function() { this.selectedIndex = 0 });
    $("form input[type=text] , form textarea").each(function() { this.value = '' });
}

/* SWEET ALERTS:*/

//Funcion Alerta Validación
function alertas(title,confirmButtonColor) {
    Swal.fire({
        icon: 'warning',
        title: title,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: confirmButtonColor
    })
}

//Funcion Alerta CRUD
function alertas_crud(icon,title,confirmButtonColor,iconColor) {
    Swal.fire({
        icon: icon,
        title: title,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: confirmButtonColor,
        iconColor: iconColor,
    })
}

//Funcion Alerta Generica
function alerta_generica(icon,title,text,confirmButtonColor,iconColor) {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: confirmButtonColor,
        iconColor: iconColor,
    })
}