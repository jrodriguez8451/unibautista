// Registrar EPS Usando Ajax
function insertEPSAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let nit       = $('#ins-eps-nit').val();
    let nombre    = $('#ins-eps-nom').val();
    let correo    = $('#ins-eps-cor').val();
    let ciudad    = $('#ins-eps-cit').val();
    let direccion = $('#ins-eps-dir').val();

    // Condicion para evitar campos vacios
    if (nit.length == 0 || nombre.length == 0 || correo.length == 0 || ciudad.length == 0 || direccion.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        validationAlert("¡Algunos campos no pueden quedar vacíos!","#ffc107");
    }else{
        // Poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-insert-eps').serialize();
        // Almacenamos dentro de una variable un parametro que pueda recibir el controlador para que ejecute la funcion
        let accion = "&insert_eps=1";
        // Enviamos la informacion del formulario + la variable que recibirá el controlador
        dataString = dataString + accion;  
        $.ajax({
            // Realiza una petición POST a una URL provista.
            method:"POST",
            // Ruta en donde se enviará los datos, url en donde hacemos la peticion ajax
            url: 'index.php?ruta=eps',
            // Si todo sale bien en el success, el data es todo el contenido html que tiene el index
            data:dataString,
            // Establece una función a ejecutar si la petición a sido satisfactoria
            success: function(){
                // Load es cargar, toma el id de la tabla y vas a cargar nuevamente esta tabla, es un refrescar la tabla
                $('#load').load('index.php?ruta=eps #load',function(){
                // Aqui hacemos una funcion que lo que haces es llamarme nuevamente a la tabla cuando todo lo anterior se ejecute
                    genericTable();
                });
                // Alerta de sweetalert
                crudAlert("success","¡EPS registrada con éxito!","#28a745");
            },
            error: function(){
                genericAlert("error","Error","¡El registro ya existe en la base de datos!","#dc3545");       
            },
            fail: function(){
                genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
            }
        });
        cleanModal();
    }
}

//Funcion para ver detalle de la EPS
function detailEPS(det_eps_id,det_eps_nit,det_eps_nom,det_eps_cor,det_eps_tel,det_eps_cel,det_eps_cit,det_eps_dir,det_eps_enc,det_eps_cor_enc,det_eps_tel_enc,det_eps_cel_enc,det_eps_est,det_eps_fec_reg) {
    // .val() sirva para obtener el valor de un elemento
    $('#modal-detail-eps .modal-body .det-eps-id').val(det_eps_id);
    $('#modal-detail-eps .modal-body .det-eps-nit').val(det_eps_nit);
    $('#modal-detail-eps .modal-body .det-eps-nom').val(det_eps_nom);
    $('#modal-detail-eps .modal-body .det-eps-cor').val(det_eps_cor);
    $('#modal-detail-eps .modal-body .det-eps-tel').val(det_eps_tel);
    $('#modal-detail-eps .modal-body .det-eps-cel').val(det_eps_cel);
    $('#modal-detail-eps .modal-body .det-eps-cit').val(det_eps_cit);
    $('#modal-detail-eps .modal-body .det-eps-dir').val(det_eps_dir);
    $('#modal-detail-eps .modal-body .det-eps-enc').val(det_eps_enc);
    $('#modal-detail-eps .modal-body .det-eps-cor-enc').val(det_eps_cor_enc);
    $('#modal-detail-eps .modal-body .det-eps-tel-enc').val(det_eps_tel_enc);
    $('#modal-detail-eps .modal-body .det-eps-cel-enc').val(det_eps_cel_enc);
    $('#modal-detail-eps .modal-body .det-eps-est').val(det_eps_est);
    $('#modal-detail-eps .modal-body .det-eps-fec-reg').val(det_eps_fec_reg);
}

// Funcion para Pintar los Datos de la EPS antes de Actualizar
function updateEPS(upd_eps_id,upd_eps_nit,upd_eps_nom,upd_eps_cor,upd_eps_tel,upd_eps_cel,upd_eps_cit,upd_eps_dir,upd_eps_nom_enc,upd_eps_cor_enc,upd_eps_tel_enc,upd_eps_cel_enc){
    $('#modal-update-eps .modal-body .upd-eps-id').val(upd_eps_id);
    $('#modal-update-eps .modal-body .upd-eps-nit').val(upd_eps_nit);
    $('#modal-update-eps .modal-body .upd-eps-nom').val(upd_eps_nom);
    $('#modal-update-eps .modal-body .upd-eps-cor').val(upd_eps_cor);
    $('#modal-update-eps .modal-body .upd-eps-tel').val(upd_eps_tel);
    $('#modal-update-eps .modal-body .upd-eps-cel').val(upd_eps_cel);
    $('#modal-update-eps .modal-body .upd-eps-cit').val(upd_eps_cit);
    $('#modal-update-eps .modal-body .upd-eps-dir').val(upd_eps_dir);
    $('#modal-update-eps .modal-body .upd-eps-nom-enc').val(upd_eps_nom_enc);
    $('#modal-update-eps .modal-body .upd-eps-cor-enc').val(upd_eps_cor_enc);
    $('#modal-update-eps .modal-body .upd-eps-tel-enc').val(upd_eps_tel_enc);
    $('#modal-update-eps .modal-body .upd-eps-cel-enc').val(upd_eps_cel_enc);
}

// Funcion para Actualizar los Datos de la EPS usando Ajax
function updateEPSAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let nit       = $('#upd-eps-nit').val();
    let nombre    = $('#upd-eps-nom').val();
    let correo    = $('#upd-eps-cor').val();
    let ciudad    = $('#upd-eps-cit').val();
    let direccion = $('#upd-eps-dir').val();

    // Condicion para evitar campos vacios
    if (nit.length == 0 || nombre.length == 0 || correo.length == 0 || ciudad.length == 0 || direccion.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        validationAlert("¡Algunos campos no pueden quedar vacíos!","#ffc107");
    }else{
        // Poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-update-eps').serialize();
        let accion = "&update_eps=1";
        dataString = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=eps',
            data:dataString,
            success: function(){
                $('#load').load('index.php?ruta=eps #load',function(){
                    genericTable();
                });
                crudAlert("success","¡Datos actualizados con éxito!","#28a745");
            },
            error:function(){
                genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
            }
        });
    }
}

// Funcion para Pintar el ID de la EPS antes de Eliminarla
function deleteEPS(del_eps_id,del_eps_nom){
    $('#modal-delete-eps .modal-body .del-eps-id').val(del_eps_id);
    $('#modal-delete-eps .modal-body .del-eps-nom').text(del_eps_nom);
}

// Funcion para Eliminar una EPS usando Ajax
function deleteEPSAjax(){
    let dataString = $('#form-delete-eps').serialize();
    let accion = "&delete_eps=1";
    dataString = dataString + accion;  
    $.ajax({
        method:"POST",
        url: 'index.php?ruta=eps',
        data:dataString,
            success: function(){
            $('#load').load('index.php?ruta=eps #load',function(){
                genericTable();
            });
            crudAlert("success","¡EPS eliminada con éxito!","#28a745");
        },
        error:function(){
            genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
        }
    });
}


// Validaciones de los Formularios

// Insertar NIT de la EPS
// Insertar NIT - Validacion para evitar caracteres
$("#ins-eps-nit").keyup(function(){              
    var ta = $("#ins-eps-nit");
    letras = ta.val().replace(/[|!"#$%&/()=-¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Insertar NIT - Validacion para evitar numeros pequeños
$("#ins-eps-nit").keyup(function(){              
    var ta = $("#ins-eps-nit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Insertar NIT - Validacion para evitar letras
$("#ins-eps-nit").keyup(function(){              
    var ta = $("#ins-eps-nit");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Insertar NIT - Validacion para evitar caracteres acentuados
$("#ins-eps-nit").keyup(function(){              
    var ta = $("#ins-eps-nit");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar NIT - Validacion para evitar espacios en blanco
$("#ins-eps-nit").keyup(function(){              
    var ta = $("#ins-eps-nit");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Insertar NIT - Validacion para evitar comillas
$("#ins-eps-nit").keyup(function(){              
    var ta = $("#ins-eps-nit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Insertar Razon Social de la EPS
// Insertar Razon Social - Validacion para evitar numeros pequeños
$("#ins-eps-nom").keyup(function(){              
    var ta = $("#ins-eps-nom");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Razon Social - Validacion para evitar caracteres acentuados
$("#ins-eps-nom").keyup(function(){              
    var ta = $("#ins-eps-nom");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Razon Social - Validacion para evitar caracteres
$("#ins-eps-nom").keyup(function(){              
    var ta = $("#ins-eps-nom");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Razon Social - Validacion para evitar las comillas
$("#ins-eps-nom").keyup(function(){              
    var ta = $("#ins-eps-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Insertar Correo de la EPS
// Insertar Correo EPS - Validacion para evitar espacios en blanco
$("#ins-eps-cor").keyup(function(){              
    var ta = $("#ins-eps-cor");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
// Insertar Correo EPS - Validacion para evitar numeros pequeños
$("#ins-eps-cor").keyup(function(){              
    var ta = $("#ins-eps-cor");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Correo EPS -Validacion para evitar caracteres acentuados
$("#ins-eps-cor").keyup(function(){              
    var ta = $("#ins-eps-cor");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Correo EPS - Validacion para evitar caracteres
$("#ins-eps-cor").keyup(function(){              
    var ta = $("#ins-eps-cor");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Correo EPS - Validacion para permitir caracteres de correo
$("#ins-eps-cor").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Insertar Telefono de la EPS
// Insertar Telefono EPS - Validacion para evitar caracteres acentuados
$("#ins-eps-tel").keyup(function(){              
    var ta = $("#ins-eps-tel");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono EPS - Validacion para evitar letras ñÑ
$("#ins-eps-tel").keyup(function(){              
    var ta = $("#ins-eps-tel");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono EPS - Validacion para evitar caracteres acentuados
$("#ins-eps-tel").keyup(function(){              
    var ta = $("#ins-eps-tel");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono EPS -  Validacion para evitar numeros pequeños
$("#ins-eps-tel").keyup(function(){              
    var ta = $("#ins-eps-tel");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono EPS - Validacion para evitar las comillas
$("#ins-eps-tel").keyup(function(){              
    var ta = $("#ins-eps-tel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Celular de la EPS
// Insertar Celular EPS - Validacion para evitar caracteres acentuados
$("#ins-eps-cel").keyup(function(){              
    var ta = $("#ins-eps-cel");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Celular EPS - Validacion para evitar espacios en blanco
$("#ins-eps-cel").keyup(function(){              
    var ta = $("#ins-eps-cel");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Insertar Celular EPS - Validacion para evitar letras
$("#ins-eps-cel").keyup(function(){              
    var ta = $("#ins-eps-cel");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
// Insertar Celular EPS - Validacion para evitar caracteres
$("#ins-eps-cel").keyup(function(){              
    var ta = $("#ins-eps-cel");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Celular EPS - Validacion para evitar numeros en los input de tipo texto
$("#ins-eps-cel").keyup(function(){              
    var ta = $("#ins-eps-cel");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Celular EPS - Validacion para evitar las comillas
$("#ins-eps-cel").keyup(function(){              
    var ta = $("#ins-eps-cel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Ciudad de la EPS
// Insertar Ciudad EPS -  Funcion que solo permite Texto dentro del Input
$("#ins-eps-cit").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Insertar Ciudad EPS - Validacion para evitar numeros en los input de tipo texto
$("#ins-eps-cit").keyup(function(){              
    var ta = $("#ins-eps-cit");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Ciudad EPS - Validacion para evitar numeros pequeños
$("#ins-eps-cit").keyup(function(){              
    var ta = $("#ins-eps-cit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Ciudad EPS - Validacion para evitar caracteres acentuados
$("#ins-eps-cit").keyup(function(){              
    var ta = $("#ins-eps-cit");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Ciudad EPS - Validacion para evitar caracteres
$("#ins-eps-cit").keyup(function(){              
    var ta = $("#ins-eps-cit");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Ciudad EPS - Validacion para evitar las comillas
$("#ins-eps-cit").keyup(function(){              
    var ta = $("#ins-eps-cit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Insertar Direccion de la EPS
// Insertar Direccion EPS - Validacion para permitir caracteres de direcciones
$("#ins-eps-dir").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Insertar Direccion EPS - Validacion para evitar numeros pequeños
$("#ins-eps-dir").keyup(function(){              
    var ta = $("#ins-eps-dir");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Direccion EPS - Validacion para evitar caracteres acentuados
$("#ins-eps-dir").keyup(function(){              
    var ta = $("#ins-eps-dir");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Direccion EPS - Validacion para evitar caracteres
$("#ins-eps-dir").keyup(function(){              
    var ta = $("#ins-eps-dir");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Direccion EPS - Validacion para evitar las comillas
$("#ins-eps-dir").keyup(function(){              
    var ta = $("#ins-eps-dir");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Nombre del Encargado de la EPS
// Insertar Nombre Encargado - Funcion que solo permite Texto dentro del Input
$("#ins-eps-nom-enc").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Insertar Nombre Encargado - Validacion para evitar numeros en los input de tipo texto
$("#ins-eps-nom-enc").keyup(function(){              
    var ta = $("#ins-eps-nom-enc");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Nombre Encargado - Validacion para evitar numeros pequeños
$("#ins-eps-nom-enc").keyup(function(){              
    var ta = $("#ins-eps-nom-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Nombre Encargado - Validacion para evitar caracteres acentuados
$("#ins-eps-nom-enc").keyup(function(){              
    var ta = $("#ins-eps-nom-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Nombre Encargado - Validacion para evitar caracteres
$("#ins-eps-nom-enc").keyup(function(){              
    var ta = $("#ins-eps-nom-enc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Nombre Encargado - Validacion para evitar las comillas
$("#ins-eps-nom-enc").keyup(function(){              
    var ta = $("#ins-eps-nom-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Correo del Encargado
// Insertar Correo Encargado - Validacion para evitar espacios en blanco
$("#ins-eps-cor-enc").keyup(function(){              
    var ta = $("#ins-eps-cor-enc");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado - Validacion para evitar numeros pequeños
$("#ins-eps-cor-enc").keyup(function(){              
    var ta = $("#ins-eps-cor-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado -Validacion para evitar caracteres acentuados
$("#ins-eps-cor-enc").keyup(function(){              
    var ta = $("#ins-eps-cor-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado - Validacion para evitar caracteres
$("#ins-eps-cor-enc").keyup(function(){              
    var ta = $("#ins-eps-cor-enc");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado - Validacion para permitir caracteres de correo
$("#ins-eps-cor-enc").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Insertar Telefono del Encargado
// Insertar Telefono Encargado - Validacion para evitar caracteres acentuados
$("#ins-eps-tel-enc").keyup(function(){              
    var ta = $("#ins-eps-tel-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado - Validacion para evitar letras ñÑ
$("#ins-eps-tel-enc").keyup(function(){              
    var ta = $("#ins-eps-tel-enc");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado - Validacion para evitar caracteres acentuados
$("#ins-eps-tel-enc").keyup(function(){              
    var ta = $("#ins-eps-tel-enc");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado -  Validacion para evitar numeros pequeños
$("#ins-eps-tel-enc").keyup(function(){              
    var ta = $("#ins-eps-tel-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado - Validacion para evitar las comillas
$("#ins-eps-tel-enc").keyup(function(){              
    var ta = $("#ins-eps-tel-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Celular del Encargado
// Insertar Celular Encargado - Validacion para evitar caracteres acentuados
$("#ins-eps-cel-enc").keyup(function(){              
    var ta = $("#ins-eps-cel-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar espacios en blanco
$("#ins-eps-cel-enc").keyup(function(){              
    var ta = $("#ins-eps-cel-enc");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Insertar Celular Encargado - Validacion para evitar letras
$("#ins-eps-cel-enc").keyup(function(){              
    var ta = $("#ins-eps-cel-enc");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar caracteres
$("#ins-eps-cel-enc").keyup(function(){              
    var ta = $("#ins-eps-cel-enc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar numeros en los input de tipo texto
$("#ins-eps-cel-enc").keyup(function(){              
    var ta = $("#ins-eps-cel-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar las comillas
$("#ins-eps-cel-enc").keyup(function(){              
    var ta = $("#ins-eps-cel-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 



// Actualizar NIT de la EPS
// Actualizar NIT - Validacion para evitar caracteres
$("#upd-eps-nit").keyup(function(){              
    var ta = $("#upd-eps-nit");
    letras = ta.val().replace(/[|!"#$%&/()=-¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Actualizar NIT - Validacion para evitar numeros pequeños
$("#upd-eps-nit").keyup(function(){              
    var ta = $("#upd-eps-nit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Actualizar NIT - Validacion para evitar letras
$("#upd-eps-nit").keyup(function(){              
    var ta = $("#upd-eps-nit");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Actualizar NIT - Validacion para evitar caracteres acentuados
$("#upd-eps-nit").keyup(function(){              
    var ta = $("#upd-eps-nit");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar NIT - Validacion para evitar espacios en blanco
$("#upd-eps-nit").keyup(function(){              
    var ta = $("#upd-eps-nit");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Actualizar NIT - Validacion para evitar comillas
$("#upd-eps-nit").keyup(function(){              
    var ta = $("#upd-eps-nit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar Razon Social de la EPS
// Actualizar Razon Social - Validacion para evitar numeros pequeños
$("#upd-eps-nom").keyup(function(){              
    var ta = $("#upd-eps-nom");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
});  
// Actualizar Razon Social - Validacion para evitar caracteres acentuados
$("#upd-eps-nom").keyup(function(){              
    var ta = $("#upd-eps-nom");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Razon Social - Validacion para evitar caracteres
$("#upd-eps-nom").keyup(function(){              
    var ta = $("#upd-eps-nom");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Razon Social - Validacion para evitar las comillas
$("#upd-eps-nom").keyup(function(){              
    var ta = $("#upd-eps-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar Correo de la EPS
// Actualizar Correo EPS - Validacion para evitar espacios en blanco
$("#upd-eps-cor").keyup(function(){              
    var ta = $("#upd-eps-cor");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
// Actualizar Correo EPS - Validacion para evitar numeros pequeños
$("#upd-eps-cor").keyup(function(){              
    var ta = $("#upd-eps-cor");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo EPS -Validacion para evitar caracteres acentuados
$("#upd-eps-cor").keyup(function(){              
    var ta = $("#upd-eps-cor");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo EPS - Validacion para evitar caracteres
$("#upd-eps-cor").keyup(function(){              
    var ta = $("#upd-eps-cor");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo EPS - Validacion para permitir caracteres de correo
$("#upd-eps-cor").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Actualizar Telefono de la EPS

// Actualizar Telefono EPS - Validacion para evitar caracteres acentuados
$("#upd-eps-tel").keyup(function(){              
    var ta = $("#upd-eps-tel");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono EPS - Validacion para evitar letras ñÑ
$("#upd-eps-tel").keyup(function(){              
    var ta = $("#upd-eps-tel");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono EPS - Validacion para evitar caracteres acentuados
$("#upd-eps-tel").keyup(function(){              
    var ta = $("#upd-eps-tel");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono EPS -  Validacion para evitar numeros pequeños
$("#upd-eps-tel").keyup(function(){              
    var ta = $("#upd-eps-tel");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono EPS - Validacion para evitar las comillas
$("#upd-eps-tel").keyup(function(){              
    var ta = $("#upd-eps-tel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Celular de la EPS
// Actualizar Celular EPS - Validacion para evitar caracteres acentuados
$("#upd-eps-cel").keyup(function(){              
    var ta = $("#upd-eps-cel");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular EPS - Validacion para evitar espacios en blanco
$("#upd-eps-cel").keyup(function(){              
    var ta = $("#upd-eps-cel");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Actualizar Celular EPS - Validacion para evitar letras
$("#upd-eps-cel").keyup(function(){              
    var ta = $("#upd-eps-cel");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular EPS - Validacion para evitar caracteres
$("#upd-eps-cel").keyup(function(){              
    var ta = $("#upd-eps-cel");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular EPS - Validacion para evitar numeros en los input de tipo texto
$("#upd-eps-cel").keyup(function(){              
    var ta = $("#upd-eps-cel");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular EPS - Validacion para evitar las comillas
$("#upd-eps-cel").keyup(function(){              
    var ta = $("#upd-eps-cel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Ciudad de la EPS
// Actualizar Ciudad EPS -  Funcion que solo permite Texto dentro del Input
$("#upd-eps-cit").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Actualizar Ciudad EPS - Validacion para evitar numeros en los input de tipo texto
$("#upd-eps-cit").keyup(function(){              
    var ta = $("#upd-eps-cit");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Ciudad EPS - Validacion para evitar numeros pequeños
$("#upd-eps-cit").keyup(function(){              
    var ta = $("#upd-eps-cit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Ciudad EPS - Validacion para evitar caracteres acentuados
$("#upd-eps-cit").keyup(function(){              
    var ta = $("#upd-eps-cit");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Ciudad EPS - Validacion para evitar caracteres
$("#upd-eps-cit").keyup(function(){              
    var ta = $("#upd-eps-cit");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Ciudad EPS - Validacion para evitar las comillas
$("#upd-eps-cit").keyup(function(){              
    var ta = $("#upd-eps-cit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar Direccion de la EPS
// Actualizar Direccion EPS - Validacion para permitir caracteres de direcciones
$("#upd-eps-dir").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Actualizar Direccion EPS - Validacion para evitar numeros pequeños
$("#upd-eps-dir").keyup(function(){              
    var ta = $("#upd-eps-dir");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Direccion EPS - Validacion para evitar caracteres acentuados
$("#upd-eps-dir").keyup(function(){              
    var ta = $("#upd-eps-dir");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Direccion EPS - Validacion para evitar caracteres
$("#upd-eps-dir").keyup(function(){              
    var ta = $("#upd-eps-dir");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Direccion EPS - Validacion para evitar las comillas
$("#upd-eps-dir").keyup(function(){              
    var ta = $("#upd-eps-dir");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Nombre del Encargado de la EPS
// Actualizar Nombre Encargado - Funcion que solo permite Texto dentro del Input
$("#upd-eps-nom-enc").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Actualizar Nombre Encargado - Validacion para evitar numeros en los input de tipo texto
$("#upd-eps-nom-enc").keyup(function(){              
    var ta = $("#upd-eps-nom-enc");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Nombre Encargado - Validacion para evitar numeros pequeños
$("#upd-eps-nom-enc").keyup(function(){              
    var ta = $("#upd-eps-nom-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Nombre Encargado - Validacion para evitar caracteres acentuados
$("#upd-eps-nom-enc").keyup(function(){              
    var ta = $("#upd-eps-nom-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Nombre Encargado - Validacion para evitar caracteres
$("#upd-eps-nom-enc").keyup(function(){              
    var ta = $("#upd-eps-nom-enc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Nombre Encargado - Validacion para evitar las comillas
$("#upd-eps-nom-enc").keyup(function(){              
    var ta = $("#upd-eps-nom-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Correo del Encargado
// Actualizar Correo Encargado - Validacion para evitar espacios en blanco
$("#upd-eps-cor-enc").keyup(function(){              
    var ta = $("#upd-eps-cor-enc");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
// Actualizar Correo Encargado - Validacion para evitar numeros pequeños
$("#upd-eps-cor-enc").keyup(function(){              
    var ta = $("#upd-eps-cor-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo Encargado -Validacion para evitar caracteres acentuados
$("#upd-eps-cor-enc").keyup(function(){              
    var ta = $("#upd-eps-cor-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo Encargado - Validacion para evitar caracteres
$("#upd-eps-cor-enc").keyup(function(){              
    var ta = $("#upd-eps-cor-enc");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo Encargado - Validacion para permitir caracteres de correo
$("#upd-eps-cor-enc").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Actualizar Telefono del Encargado

// Actualizar Telefono Encargado - Validacion para evitar caracteres acentuados
$("#upd-eps-tel-enc").keyup(function(){              
    var ta = $("upd-eps-tel-encc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Encargado - Validacion para evitar letras ñÑ
$("#upd-eps-tel-enc").keyup(function(){              
    var ta = $("#upd-eps-tel-enc");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Encargado - Validacion para evitar caracteres acentuados
$("#upd-eps-tel-enc").keyup(function(){              
    var ta = $("#upd-eps-tel-enc");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Encargado -  Validacion para evitar numeros pequeños
$("#upd-eps-tel-enc").keyup(function(){              
    var ta = $("#upd-eps-tel-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Encargado - Validacion para evitar las comillas
$("#upd-eps-tel-enc").keyup(function(){              
    var ta = $("#upd-eps-tel-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Celular del Encargado
// Actualizar Celular Encargado - Validacion para evitar caracteres acentuados
$("#upd-eps-cel-enc").keyup(function(){              
    var ta = $("#upd-eps-cel-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Encargado - Validacion para evitar espacios en blanco
$("#upd-eps-cel-enc").keyup(function(){              
    var ta = $("#upd-eps-cel-enc");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Actualizar Celular Encargado - Validacion para evitar letras
$("#upd-eps-cel-enc").keyup(function(){              
    var ta = $("#upd-eps-cel-enc");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Encargado - Validacion para evitar caracteres
$("#upd-eps-cel-enc").keyup(function(){              
    var ta = $("#upd-eps-cel-enc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Encargado - Validacion para evitar numeros en los input de tipo texto
$("#upd-eps-cel-enc").keyup(function(){              
    var ta = $("#upd-eps-cel-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Encargado - Validacion para evitar las comillas
$("#upd-eps-cel-enc").keyup(function(){              
    var ta = $("#upd-eps-cel-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 