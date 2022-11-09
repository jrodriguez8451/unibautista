// Registrar ARL Usando Ajax
function insertARLAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let nit       = $('#ins-arl-nit').val();
    let nombre    = $('#ins-arl-nom').val();
    let correo    = $('#ins-arl-cor').val();
    let ciudad    = $('#ins-arl-cit').val();
    let direccion = $('#ins-arl-dir').val();
    
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
        let dataString = $('#form-insert-arl').serialize();
        // Almacenamos dentro de una variable un parametro que pueda recibir el controlador para que ejecute la funcion
        let accion = "&insert_arl=1";
        // Enviamos la informacion del formulario + la variable que recibirá el controlador
        dataString = dataString + accion;  
        $.ajax({
            // Realiza una petición POST a una URL provista.
            method:"POST",
            // Ruta en donde se enviará los datos, url en donde hacemos la peticion ajax
            url: 'index.php?ruta=arl',
            // Si todo sale bien en el success, el data es todo el contenido html que tiene el index
            data:dataString,
            // Establece una función a ejecutar si la petición a sido satisfactoria
            success: function(){
                // Load es cargar, toma el id de la tabla y vas a cargar nuevamente esta tabla, es un refrescar la tabla
                $('#load').load('index.php?ruta=arl #load',function(){
                // Aqui hacemos una funcion que lo que haces es llamarme nuevamente a la tabla cuando todo lo anterior se ejecute
                    genericTable();
                });
                // Alerta de sweetalert
                crudAlert("success","¡ARL registrada con éxito!","#28a745");
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

//Funcion para ver detalle de la ARL
function detailARL(det_arl_id,det_arl_nit,det_arl_nom,det_arl_cor,det_arl_tel,det_arl_cel,det_arl_cit,det_arl_dir,det_arl_enc,det_arl_enc_cor,det_arl_enc_tel,det_arl_enc_cel,det_arl_est,det_arl_fec_reg) {
    // .val() sirva para obtener el valor de un elemento
    $('#modal-detail-arl .modal-body .det-arl-id').val(det_arl_id);
    $('#modal-detail-arl .modal-body .det-arl-nit').val(det_arl_nit);
    $('#modal-detail-arl .modal-body .det-arl-nom').val(det_arl_nom);
    $('#modal-detail-arl .modal-body .det-arl-cor').val(det_arl_cor);
    $('#modal-detail-arl .modal-body .det-arl-tel').val(det_arl_tel);
    $('#modal-detail-arl .modal-body .det-arl-cel').val(det_arl_cel);
    $('#modal-detail-arl .modal-body .det-arl-cit').val(det_arl_cit);
    $('#modal-detail-arl .modal-body .det-arl-dir').val(det_arl_dir);
    $('#modal-detail-arl .modal-body .det-arl-enc').val(det_arl_enc);
    $('#modal-detail-arl .modal-body .det-arl-enc-cor').val(det_arl_enc_cor);
    $('#modal-detail-arl .modal-body .det-arl-enc-tel').val(det_arl_enc_tel);
    $('#modal-detail-arl .modal-body .det-arl-enc-cel').val(det_arl_enc_cel);
    $('#modal-detail-arl .modal-body .det-arl-est').val(det_arl_est);
    $('#modal-detail-arl .modal-body .det-arl-fec-reg').val(det_arl_fec_reg);
}

// Funcion para Pintar los Datos de la ARL antes de Actualizar
function updateARL(upd_arl_id,upd_arl_nit,upd_arl_nom,upd_arl_cor,upd_arl_tel,upd_arl_cel,upd_arl_cit,upd_arl_dir,upd_arl_enc,upd_arl_cor_enc,upd_arl_tel_enc,upd_arl_cel_enc){
    $('#modal-update-arl .modal-body .upd-arl-id').val(upd_arl_id);
    $('#modal-update-arl .modal-body .upd-arl-nit').val(upd_arl_nit);
    $('#modal-update-arl .modal-body .upd-arl-nom').val(upd_arl_nom);
    $('#modal-update-arl .modal-body .upd-arl-cor').val(upd_arl_cor);
    $('#modal-update-arl .modal-body .upd-arl-tel').val(upd_arl_tel);
    $('#modal-update-arl .modal-body .upd-arl-cel').val(upd_arl_cel);
    $('#modal-update-arl .modal-body .upd-arl-cit').val(upd_arl_cit);
    $('#modal-update-arl .modal-body .upd-arl-dir').val(upd_arl_dir);
    $('#modal-update-arl .modal-body .upd-arl-enc').val(upd_arl_enc);
    $('#modal-update-arl .modal-body .upd-arl-cor-enc').val(upd_arl_cor_enc);
    $('#modal-update-arl .modal-body .upd-arl-tel-enc').val(upd_arl_tel_enc);
    $('#modal-update-arl .modal-body .upd-arl-cel-enc').val(upd_arl_cel_enc);
}

// Funcion para Actualizar los Datos de la ARL usando Ajax
function updateARLAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let nit       = $('#upd-arl-nit').val();
    let nombre    = $('#upd-arl-nom').val();
    let correo    = $('#upd-arl-cor').val();
    let ciudad    = $('#upd-arl-cit').val();
    let direccion = $('#upd-arl-dir').val();


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
        let dataString = $('#form-update-arl').serialize();
        let accion = "&update_arl=1";
        dataString = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=arl',
            data:dataString,
            success: function(){
                $('#load').load('index.php?ruta=arl #load',function(){
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

// Funcion para Pintar el ID de la ARL antes de Eliminarla
function deleteARL(del_arl_id,del_arl_nom){
    $('#modal-delete-arl .modal-body .del-arl-id').val(del_arl_id);
    $('#modal-delete-arl .modal-body .del-arl-nom').text(del_arl_nom);
}

// Funcion para Eliminar una ARL usando Ajax
function deleteARLAjax(){
    let dataString = $('#form-delete-arl').serialize();
    let accion = "&delete_arl=1";
    dataString = dataString + accion;  
    $.ajax({
        method:"POST",
        url: 'index.php?ruta=arl',
        data:dataString,
            success: function(){
            $('#load').load('index.php?ruta=arl #load',function(){
                genericTable();
            });
            crudAlert("success","¡ARL eliminada con éxito!","#28a745");
        },
        error:function(){
            genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
        }
    });
}

// Validaciones de los Formularios

// Insertar NIT de la ARL
// Insertar NIT - Validacion para evitar caracteres
$("#ins-arl-nit").keyup(function(){              
    var ta = $("#ins-arl-nit");
    letras = ta.val().replace(/[|!"#$%&/()=-¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Insertar NIT - Validacion para evitar numeros pequeños
$("#ins-arl-nit").keyup(function(){              
    var ta = $("#ins-arl-nit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Insertar NIT - Validacion para evitar letras
$("#ins-arl-nit").keyup(function(){              
    var ta = $("#ins-arl-nit");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Insertar NIT - Validacion para evitar caracteres acentuados
$("#ins-arl-nit").keyup(function(){              
    var ta = $("#ins-arl-nit");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar NIT - Validacion para evitar espacios en blanco
$("#ins-arl-nit").keyup(function(){              
    var ta = $("#ins-arl-nit");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Insertar NIT - Validacion para evitar comillas
$("#ins-arl-nit").keyup(function(){              
    var ta = $("#ins-arl-nit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Insertar Razon Social de la ARL
// Insertar Razon Social - Validacion para evitar numeros pequeños
$("#ins-arl-nom").keyup(function(){              
    var ta = $("#ins-arl-nom");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Razon Social - Validacion para evitar caracteres acentuados
$("#ins-arl-nom").keyup(function(){              
    var ta = $("#ins-arl-nom");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Razon Social - Validacion para evitar caracteres
$("#ins-arl-nom").keyup(function(){              
    var ta = $("#ins-arl-nom");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Razon Social - Validacion para evitar las comillas
$("#ins-arl-nom").keyup(function(){              
    var ta = $("#ins-arl-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Insertar Correo de la ARL
// Insertar Correo ARL - Validacion para evitar espacios en blanco
$("#ins-arl-cor").keyup(function(){              
    var ta = $("#ins-arl-cor");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
// Insertar Correo ARL - Validacion para evitar numeros pequeños
$("#ins-arl-cor").keyup(function(){              
    var ta = $("#ins-arl-cor");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Correo ARL -Validacion para evitar caracteres acentuados
$("#ins-arl-cor").keyup(function(){              
    var ta = $("#ins-arl-cor");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Correo ARL - Validacion para evitar caracteres
$("#ins-arl-cor").keyup(function(){              
    var ta = $("#ins-arl-cor");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Correo ARL - Validacion para permitir caracteres de correo
$("#ins-arl-cor").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Insertar Telefono de la ARL
// Insertar Telefono ARL - Validacion para evitar caracteres acentuados
$("#ins-arl-tel").keyup(function(){              
    var ta = $("#ins-arl-tel");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono ARL - Validacion para evitar letras ñÑ
$("#ins-arl-tel").keyup(function(){              
    var ta = $("#ins-arl-tel");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono ARL - Validacion para evitar caracteres acentuados
$("#ins-arl-tel").keyup(function(){              
    var ta = $("#ins-arl-tel");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono ARL -  Validacion para evitar numeros pequeños
$("#ins-arl-tel").keyup(function(){              
    var ta = $("#ins-arl-tel");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono ARL - Validacion para evitar las comillas
$("#ins-arl-tel").keyup(function(){              
    var ta = $("#ins-arl-tel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Celular de la ARL
// Insertar Celular ARL - Validacion para evitar caracteres acentuados
$("#ins-arl-cel").keyup(function(){              
    var ta = $("#ins-arl-cel");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Celular ARL - Validacion para evitar espacios en blanco
$("#ins-arl-cel").keyup(function(){              
    var ta = $("#ins-arl-cel");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Insertar Celular ARL - Validacion para evitar letras
$("#ins-arl-cel").keyup(function(){              
    var ta = $("#ins-arl-cel");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
// Insertar Celular ARL - Validacion para evitar caracteres
$("#ins-arl-cel").keyup(function(){              
    var ta = $("#ins-arl-cel");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Celular ARL - Validacion para evitar numeros en los input de tipo texto
$("#ins-arl-cel").keyup(function(){              
    var ta = $("#ins-arl-cel");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Celular ARL - Validacion para evitar las comillas
$("#ins-arl-cel").keyup(function(){              
    var ta = $("#ins-arl-cel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Ciudad de la ARL
// Insertar Ciudad ARL -  Funcion que solo permite Texto dentro del Input
$("#ins-arl-cit").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Insertar Ciudad ARL - Validacion para evitar numeros en los input de tipo texto
$("#ins-arl-cit").keyup(function(){              
    var ta = $("#ins-arl-cit");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Ciudad ARL - Validacion para evitar numeros pequeños
$("#ins-arl-cit").keyup(function(){              
    var ta = $("#ins-arl-cit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Ciudad ARL - Validacion para evitar caracteres acentuados
$("#ins-arl-cit").keyup(function(){              
    var ta = $("#ins-arl-cit");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Ciudad ARL - Validacion para evitar caracteres
$("#ins-arl-cit").keyup(function(){              
    var ta = $("#ins-arl-cit");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Ciudad ARL - Validacion para evitar las comillas
$("#ins-arl-cit").keyup(function(){              
    var ta = $("#ins-arl-cit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Insertar Direccion de la ARL
// Insertar Direccion ARL - Validacion para permitir caracteres de direcciones
$("#ins-arl-dir").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Insertar Direccion ARL - Validacion para evitar numeros pequeños
$("#ins-arl-dir").keyup(function(){              
    var ta = $("#ins-arl-dir");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Direccion ARL - Validacion para evitar caracteres acentuados
$("#ins-arl-dir").keyup(function(){              
    var ta = $("#ins-arl-dir");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Direccion ARL - Validacion para evitar caracteres
$("#ins-arl-dir").keyup(function(){              
    var ta = $("#ins-arl-dir");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Direccion ARL - Validacion para evitar las comillas
$("#ins-arl-dir").keyup(function(){              
    var ta = $("#ins-arl-dir");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Nombre del Encargado de la ARL
// Insertar Nombre Encargado - Funcion que solo permite Texto dentro del Input
$("#ins-arl-enc").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Insertar Nombre Encargado - Validacion para evitar numeros en los input de tipo texto
$("#ins-arl-enc").keyup(function(){              
    var ta = $("#ins-arl-enc");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Nombre Encargado - Validacion para evitar numeros pequeños
$("#ins-arl-enc").keyup(function(){              
    var ta = $("#ins-arl-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Nombre Encargado - Validacion para evitar caracteres acentuados
$("#ins-arl-enc").keyup(function(){              
    var ta = $("#ins-arl-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Nombre Encargado - Validacion para evitar caracteres
$("#ins-arl-enc").keyup(function(){              
    var ta = $("#ins-arl-enc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Nombre Encargado - Validacion para evitar las comillas
$("#ins-arl-enc").keyup(function(){              
    var ta = $("#ins-arl-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Correo del Encargado
// Insertar Correo Encargado - Validacion para evitar espacios en blanco
$("#ins-arl-cor-enc").keyup(function(){              
    var ta = $("#ins-arl-cor-enc");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado - Validacion para evitar numeros pequeños
$("#ins-arl-cor-enc").keyup(function(){              
    var ta = $("#ins-arl-cor-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado -Validacion para evitar caracteres acentuados
$("#ins-arl-cor-enc").keyup(function(){              
    var ta = $("#ins-arl-cor-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado - Validacion para evitar caracteres
$("#ins-arl-cor-enc").keyup(function(){              
    var ta = $("#ins-arl-cor-enc");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado - Validacion para permitir caracteres de correo
$("#ins-arl-cor-enc").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Insertar Telefono del Encargado
// Insertar Telefono Encargado - Validacion para evitar caracteres acentuados
$("#ins-arl-tel-enc").keyup(function(){              
    var ta = $("#ins-arl-tel-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado - Validacion para evitar letras ñÑ
$("#ins-arl-tel-enc").keyup(function(){              
    var ta = $("#ins-arl-tel-enc");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado - Validacion para evitar caracteres acentuados
$("#ins-arl-tel-enc").keyup(function(){              
    var ta = $("#ins-arl-tel-enc");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado -  Validacion para evitar numeros pequeños
$("#ins-arl-tel-enc").keyup(function(){              
    var ta = $("#ins-arl-tel-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado - Validacion para evitar las comillas
$("#ins-arl-tel-enc").keyup(function(){              
    var ta = $("#ins-arl-tel-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Celular del Encargado
// Insertar Celular Encargado - Validacion para evitar caracteres acentuados
$("#ins-arl-cel-enc").keyup(function(){              
    var ta = $("#ins-arl-cel-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar espacios en blanco
$("#ins-arl-cel-enc").keyup(function(){              
    var ta = $("#ins-arl-cel-enc");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Insertar Celular Encargado - Validacion para evitar letras
$("#ins-arl-cel-enc").keyup(function(){              
    var ta = $("#ins-arl-cel-enc");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar caracteres
$("#ins-arl-cel-enc").keyup(function(){              
    var ta = $("#ins-arl-cel-enc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar numeros en los input de tipo texto
$("#ins-arl-cel-enc").keyup(function(){              
    var ta = $("#ins-arl-cel-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar las comillas
$("#ins-arl-cel-enc").keyup(function(){              
    var ta = $("#ins-arl-cel-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 



// Actualizar NIT de la ARL
// Actualizar NIT - Validacion para evitar caracteres
$("#upd-arl-nit").keyup(function(){              
    var ta = $("#upd-arl-nit");
    letras = ta.val().replace(/[|!"#$%&/()=-¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Actualizar NIT - Validacion para evitar numeros pequeños
$("#upd-arl-nit").keyup(function(){              
    var ta = $("#upd-arl-nit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Actualizar NIT - Validacion para evitar letras
$("#upd-arl-nit").keyup(function(){              
    var ta = $("#upd-arl-nit");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Actualizar NIT - Validacion para evitar caracteres acentuados
$("#upd-arl-nit").keyup(function(){              
    var ta = $("#upd-arl-nit");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar NIT - Validacion para evitar espacios en blanco
$("#upd-arl-nit").keyup(function(){              
    var ta = $("#upd-arl-nit");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Actualizar NIT - Validacion para evitar comillas
$("#upd-arl-nit").keyup(function(){              
    var ta = $("#upd-arl-nit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar Razon Social de la ARL
// Actualizar Razon Social - Validacion para evitar numeros pequeños
$("#upd-arl-nom").keyup(function(){              
    var ta = $("#upd-arl-nom");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
});  
// Actualizar Razon Social - Validacion para evitar caracteres acentuados
$("#upd-arl-nom").keyup(function(){              
    var ta = $("#upd-arl-nom");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Razon Social - Validacion para evitar caracteres
$("#upd-arl-nom").keyup(function(){              
    var ta = $("#upd-arl-nom");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Razon Social - Validacion para evitar las comillas
$("#upd-arl-nom").keyup(function(){              
    var ta = $("#upd-arl-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar Correo de la ARL
// Actualizar Correo ARL - Validacion para evitar espacios en blanco
$("#upd-arl-cor").keyup(function(){              
    var ta = $("#upd-arl-cor");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
// Actualizar Correo ARL - Validacion para evitar numeros pequeños
$("#upd-arl-cor").keyup(function(){              
    var ta = $("#upd-arl-cor");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo ARL -Validacion para evitar caracteres acentuados
$("#upd-arl-cor").keyup(function(){              
    var ta = $("#upd-arl-cor");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo ARL - Validacion para evitar caracteres
$("#upd-arl-cor").keyup(function(){              
    var ta = $("#upd-arl-cor");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo ARL - Validacion para permitir caracteres de correo
$("#upd-arl-cor").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Actualizar Telefono de la ARL

// Actualizar Telefono ARL - Validacion para evitar caracteres acentuados
$("#upd-arl-tel").keyup(function(){              
    var ta = $("#upd-arl-tel");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono ARL - Validacion para evitar letras ñÑ
$("#upd-arl-tel").keyup(function(){              
    var ta = $("#upd-arl-tel");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono ARL - Validacion para evitar caracteres acentuados
$("#upd-arl-tel").keyup(function(){              
    var ta = $("#upd-arl-tel");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono ARL -  Validacion para evitar numeros pequeños
$("#upd-arl-tel").keyup(function(){              
    var ta = $("#upd-arl-tel");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono ARL - Validacion para evitar las comillas
$("#upd-arl-tel").keyup(function(){              
    var ta = $("#upd-arl-tel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Celular de la ARL
// Actualizar Celular ARL - Validacion para evitar caracteres acentuados
$("#upd-arl-cel").keyup(function(){              
    var ta = $("#upd-arl-cel");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular ARL - Validacion para evitar espacios en blanco
$("#upd-arl-cel").keyup(function(){              
    var ta = $("#upd-arl-cel");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Actualizar Celular ARL - Validacion para evitar letras
$("#upd-arl-cel").keyup(function(){              
    var ta = $("#upd-arl-cel");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular ARL - Validacion para evitar caracteres
$("#upd-arl-cel").keyup(function(){              
    var ta = $("#upd-arl-cel");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular ARL - Validacion para evitar numeros en los input de tipo texto
$("#upd-arl-cel").keyup(function(){              
    var ta = $("#upd-arl-cel");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular ARL - Validacion para evitar las comillas
$("#upd-arl-cel").keyup(function(){              
    var ta = $("#upd-arl-cel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Ciudad de la ARL
// Actualizar Ciudad ARL -  Funcion que solo permite Texto dentro del Input
$("#upd-arl-cit").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Actualizar Ciudad ARL - Validacion para evitar numeros en los input de tipo texto
$("#upd-arl-cit").keyup(function(){              
    var ta = $("#upd-arl-cit");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Ciudad ARL - Validacion para evitar numeros pequeños
$("#upd-arl-cit").keyup(function(){              
    var ta = $("#upd-arl-cit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Ciudad ARL - Validacion para evitar caracteres acentuados
$("#upd-arl-cit").keyup(function(){              
    var ta = $("#upd-arl-cit");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Ciudad ARL - Validacion para evitar caracteres
$("#upd-arl-cit").keyup(function(){              
    var ta = $("#upd-arl-cit");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Ciudad ARL - Validacion para evitar las comillas
$("#upd-arl-cit").keyup(function(){              
    var ta = $("#upd-arl-cit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar Direccion de la ARL
// Actualizar Direccion ARL - Validacion para permitir caracteres de direcciones
$("#upd-arl-dir").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Actualizar Direccion ARL - Validacion para evitar numeros pequeños
$("#upd-arl-dir").keyup(function(){              
    var ta = $("#upd-arl-dir");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Direccion ARL - Validacion para evitar caracteres acentuados
$("#upd-arl-dir").keyup(function(){              
    var ta = $("#upd-arl-dir");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Direccion ARL - Validacion para evitar caracteres
$("#upd-arl-dir").keyup(function(){              
    var ta = $("#upd-arl-dir");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Direccion ARL - Validacion para evitar las comillas
$("#upd-arl-dir").keyup(function(){              
    var ta = $("#upd-arl-dir");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Nombre del Encargado del ARL
// Actualizar Nombre Encargado - Funcion que solo permite Texto dentro del Input
$("#upd-arl-enc").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Actualizar Nombre Encargado - Validacion para evitar numeros en los input de tipo texto
$("#upd-arl-enc").keyup(function(){              
    var ta = $("#upd-arl-enc");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Nombre Encargado - Validacion para evitar numeros pequeños
$("#upd-arl-enc").keyup(function(){              
    var ta = $("#upd-arl-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Nombre Encargado - Validacion para evitar caracteres acentuados
$("#upd-arl-enc").keyup(function(){              
    var ta = $("#upd-arl-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Nombre Encargado - Validacion para evitar caracteres
$("#upd-arl-enc").keyup(function(){              
    var ta = $("#upd-arl-enc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Nombre Encargado - Validacion para evitar las comillas
$("#upd-arl-enc").keyup(function(){              
    var ta = $("#upd-arl-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Correo del Encargado
// Actualizar Correo Encargado - Validacion para evitar espacios en blanco
$("#upd-arl-cor-enc").keyup(function(){              
    var ta = $("#upd-arl-cor-enc");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
// Actualizar Correo Encargado - Validacion para evitar numeros pequeños
$("#upd-arl-cor-enc").keyup(function(){              
    var ta = $("#upd-arl-cor-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo Encargado -Validacion para evitar caracteres acentuados
$("#upd-arl-cor-enc").keyup(function(){              
    var ta = $("#upd-arl-cor-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo Encargado - Validacion para evitar caracteres
$("#upd-arl-cor-enc").keyup(function(){              
    var ta = $("#upd-arl-cor-enc");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo Encargado - Validacion para permitir caracteres de correo
$("#upd-arl-cor-enc").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Actualizar Telefono del Encargado

// Actualizar Telefono Encargado - Validacion para evitar caracteres acentuados
$("#upd-arl-tel-enc").keyup(function(){              
    var ta = $("#upd-arl-tel-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Encargado - Validacion para evitar letras ñÑ
$("#upd-arl-tel-enc").keyup(function(){              
    var ta = $("#upd-arl-tel-enc");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Encargado - Validacion para evitar caracteres acentuados
$("#upd-arl-tel-enc").keyup(function(){              
    var ta = $("#upd-arl-tel-enc");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Encargado -  Validacion para evitar numeros pequeños
$("#upd-arl-tel-enc").keyup(function(){              
    var ta = $("#upd-arl-tel-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Encargado - Validacion para evitar las comillas
$("#upd-arl-tel-enc").keyup(function(){              
    var ta = $("#upd-arl-tel-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Celular del Encargado
// Actualizar Celular Encargado - Validacion para evitar caracteres acentuados
$("#upd-arl-cel-enc").keyup(function(){              
    var ta = $("#upd-arl-cel-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Encargado - Validacion para evitar espacios en blanco
$("#upd-arl-cel-enc").keyup(function(){              
    var ta = $("#upd-arl-cel-enc");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Actualizar Celular Encargado - Validacion para evitar letras
$("#upd-arl-cel-enc").keyup(function(){              
    var ta = $("#upd-arl-cel-enc");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Encargado - Validacion para evitar caracteres
$("#upd-arl-cel-enc").keyup(function(){              
    var ta = $("#upd-arl-cel-enc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Encargado - Validacion para evitar numeros en los input de tipo texto
$("#upd-arl-cel-enc").keyup(function(){              
    var ta = $("#upd-arl-cel-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Encargado - Validacion para evitar las comillas
$("#upd-arl-cel-enc").keyup(function(){              
    var ta = $("#upd-arl-cel-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 