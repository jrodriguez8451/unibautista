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