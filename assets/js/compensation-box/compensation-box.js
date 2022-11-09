// Registrar Caja de Compensación Usando Ajax
function insertCompensationBoxAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let nit       = $('#ins-caj-com-nit').val();
    let nombre    = $('#ins-caj-com-nom').val();
    let correo    = $('#ins-caj-com-cor').val();
    let ciudad    = $('#ins-caj-com-cit').val();
    let direccion = $('#ins-caj-com-dir').val();
    
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
        let dataString = $('#form-insert-compensation-box').serialize();
        // Almacenamos dentro de una variable un parametro que pueda recibir el controlador para que ejecute la funcion
        let accion = "&insert_compensation_box=1";
        // Enviamos la informacion del formulario + la variable que recibirá el controlador
        dataString = dataString + accion;  
        $.ajax({
            // Realiza una petición POST a una URL provista.
            method:"POST",
            // Ruta en donde se enviará los datos, url en donde hacemos la peticion ajax
            url: 'index.php?ruta=caja-de-compensacion',
            // Si todo sale bien en el success, el data es todo el contenido html que tiene el index
            data:dataString,
            // Establece una función a ejecutar si la petición a sido satisfactoria
            success: function(){
                // Load es cargar, toma el id de la tabla y vas a cargar nuevamente esta tabla, es un refrescar la tabla
                $('#load').load('index.php?ruta=caja-de-compensacion #load',function(){
                // Aqui hacemos una funcion que lo que haces es llamarme nuevamente a la tabla cuando todo lo anterior se ejecute
                    genericTable();
                });
                // Alerta de sweetalert
                crudAlert("success","¡Caja de compensación registrada con éxito!","#28a745");
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

//Funcion para ver detalle de la Caja de Compensación
function detailCompensationBox(det_caj_com_id,det_caj_com_nit,det_caj_com_nom,det_caj_com_cor,det_caj_com_tel,det_caj_com_cel,det_caj_com_cit,det_caj_com_dir,det_caj_com_enc,det_caj_com_cor_enc,det_caj_com_tel_enc,det_caj_com_cel_enc,det_caj_com_est,det_caj_com_fec_reg) {
    // .val() sirva para obtener el valor de un elemento
    $('#modal-detail-compensation-box .modal-body .det-caj-com-id').val(det_caj_com_id);
    $('#modal-detail-compensation-box .modal-body .det-caj-com-nit').val(det_caj_com_nit);
    $('#modal-detail-compensation-box .modal-body .det-caj-com-nom').val(det_caj_com_nom);
    $('#modal-detail-compensation-box .modal-body .det-caj-com-cor').val(det_caj_com_cor);
    $('#modal-detail-compensation-box .modal-body .det-caj-com-tel').val(det_caj_com_tel);
    $('#modal-detail-compensation-box .modal-body .det-caj-com-cel').val(det_caj_com_cel);
    $('#modal-detail-compensation-box .modal-body .det-caj-com-cit').val(det_caj_com_cit);
    $('#modal-detail-compensation-box .modal-body .det-caj-com-dir').val(det_caj_com_dir);
    $('#modal-detail-compensation-box .modal-body .det-caj-com-enc').val(det_caj_com_enc);
    $('#modal-detail-compensation-box .modal-body .det-caj-com-cor-enc').val(det_caj_com_cor_enc);
    $('#modal-detail-compensation-box .modal-body .det-caj-com-tel-enc').val(det_caj_com_tel_enc);
    $('#modal-detail-compensation-box .modal-body .det-caj-com-cel-enc').val(det_caj_com_cel_enc);
    $('#modal-detail-compensation-box .modal-body .det-caj-com-est').val(det_caj_com_est);
    $('#modal-detail-compensation-box .modal-body .det-caj-com-fec-reg').val(det_caj_com_fec_reg);
}

// Funcion para Pintar los Datos de la Caja de Compensación antes de Actualizar
function updateCompensationBox(upd_caj_com_id,upd_caj_com_nit,upd_caj_com_nom,upd_caj_com_cor,upd_caj_com_tel,upd_caj_com_cel,upd_caj_com_cit,upd_caj_com_dir,upd_caj_com_nom_enc,upd_caj_com_cor_enc,upd_caj_com_tel_enc,upd_caj_com_cel_enc){
    $('#modal-update-compensation-box .modal-body .upd-caj-com-id').val(upd_caj_com_id);
    $('#modal-update-compensation-box .modal-body .upd-caj-com-nit').val(upd_caj_com_nit);
    $('#modal-update-compensation-box .modal-body .upd-caj-com-nom').val(upd_caj_com_nom);
    $('#modal-update-compensation-box .modal-body .upd-caj-com-cor').val(upd_caj_com_cor);
    $('#modal-update-compensation-box .modal-body .upd-caj-com-tel').val(upd_caj_com_tel);
    $('#modal-update-compensation-box .modal-body .upd-caj-com-cel').val(upd_caj_com_cel);
    $('#modal-update-compensation-box .modal-body .upd-caj-com-cit').val(upd_caj_com_cit);
    $('#modal-update-compensation-box .modal-body .upd-caj-com-dir').val(upd_caj_com_dir);
    $('#modal-update-compensation-box .modal-body .upd-caj-com-nom-enc').val(upd_caj_com_nom_enc);
    $('#modal-update-compensation-box .modal-body .upd-caj-com-cor-enc').val(upd_caj_com_cor_enc);
    $('#modal-update-compensation-box .modal-body .upd-caj-com-tel-enc').val(upd_caj_com_tel_enc);
    $('#modal-update-compensation-box .modal-body .upd-caj-com-cel-enc').val(upd_caj_com_cel_enc);
}

// Funcion para Actualizar los Datos de la Caja de Compensación usando Ajax
function updateCompensationBoxAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let nit       = $('#upd-caj-com-nit').val();
    let nombre    = $('#upd-caj-com-nom').val();
    let correo    = $('#upd-caj-com-cor').val();
    let ciudad    = $('#upd-caj-com-cit').val();
    let direccion = $('#upd-caj-com-dir').val();

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
        let dataString = $('#form-update-compensation-box').serialize();
        let accion = "&update_compensation_box=1";
        dataString = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=caja-de-compensacion',
            data:dataString,
            success: function(){
                $('#load').load('index.php?ruta=caja-de-compensacion #load',function(){
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

// Funcion para Pintar el ID de la Caja de Compensación antes de Eliminarla
function deleteCompensationBox(del_caj_com_id,del_caj_com_nom){
    $('#modal-delete-compensation-box .modal-body .del-caj-com-id').val(del_caj_com_id);
    $('#modal-delete-compensation-box .modal-body .del-caj-com-nom').text(del_caj_com_nom);
}

// Funcion para Eliminar una Caja de Compensación usando Ajax
function deleteCompensationBoxAjax(){
    let dataString = $('#form-delete-compensation-box').serialize();
    let accion = "&delete_compensation_box=1";
    dataString = dataString + accion;  
    $.ajax({
        method:"POST",
        url: 'index.php?ruta=caja-de-compensacion',
        data:dataString,
            success: function(){
            $('#load').load('index.php?ruta=caja-de-compensacion #load',function(){
                genericTable();
            });
            crudAlert("success","¡Caja de compensación eliminada con éxito!","#28a745");
        },
        error:function(){
            genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
        }
    });
}

// Validaciones de los Formularios

// Insertar NIT de la Caja de Compensacion
// Insertar NIT - Validacion para evitar caracteres
$("#ins-caj-com-nit").keyup(function(){              
    var ta = $("#ins-caj-com-nit");
    letras = ta.val().replace(/[|!"#$%&/()=-¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Insertar NIT - Validacion para evitar numeros pequeños
$("#ins-caj-com-nit").keyup(function(){              
    var ta = $("#ins-caj-com-nit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Insertar NIT - Validacion para evitar letras
$("#ins-caj-com-nit").keyup(function(){              
    var ta = $("#ins-caj-com-nit");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Insertar NIT - Validacion para evitar caracteres acentuados
$("#ins-caj-com-nit").keyup(function(){              
    var ta = $("#ins-caj-com-nit");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar NIT - Validacion para evitar espacios en blanco
$("#ins-caj-com-nit").keyup(function(){              
    var ta = $("#ins-caj-com-nit");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Insertar NIT - Validacion para evitar comillas
$("#ins-caj-com-nit").keyup(function(){              
    var ta = $("#ins-caj-com-nit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Insertar Razon Social de la Caja de Compensacion
// Insertar Razon Social - Validacion para evitar numeros pequeños
$("#ins-caj-com-nom").keyup(function(){              
    var ta = $("#ins-caj-com-nom");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Razon Social - Validacion para evitar caracteres acentuados
$("#ins-caj-com-nom").keyup(function(){              
    var ta = $("#ins-caj-com-nom");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Razon Social - Validacion para evitar caracteres
$("#ins-caj-com-nom").keyup(function(){              
    var ta = $("#ins-caj-com-nom");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Razon Social - Validacion para evitar las comillas
$("#ins-caj-com-nom").keyup(function(){              
    var ta = $("#ins-caj-com-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Insertar Correo de la Caja de Compensacion
// Insertar Correo Caja de Compensacion - Validacion para evitar espacios en blanco
$("#ins-caj-com-cor").keyup(function(){              
    var ta = $("#ins-caj-com-cor");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
// Insertar Correo Caja de Compensacion - Validacion para evitar numeros pequeños
$("#ins-caj-com-cor").keyup(function(){              
    var ta = $("#ins-caj-com-cor");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Caja de Compensacion -Validacion para evitar caracteres acentuados
$("#ins-caj-com-cor").keyup(function(){              
    var ta = $("#ins-caj-com-cor");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Caja de Compensacion - Validacion para evitar caracteres
$("#ins-caj-com-cor").keyup(function(){              
    var ta = $("#ins-caj-com-cor");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Caja de Compensacion - Validacion para permitir caracteres de correo
$("#ins-caj-com-cor").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Insertar Telefono de la Caja de Compensacion
// Insertar Telefono Caja de Compensacion - Validacion para evitar caracteres acentuados
$("#ins-caj-com-tel").keyup(function(){              
    var ta = $("#ins-caj-com-tel");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Caja de Compensacion - Validacion para evitar letras ñÑ
$("#ins-caj-com-tel").keyup(function(){              
    var ta = $("#ins-caj-com-tel");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Caja de Compensacion - Validacion para evitar caracteres acentuados
$("#ins-caj-com-tel").keyup(function(){              
    var ta = $("#ins-caj-com-tel");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Caja de Compensacion -  Validacion para evitar numeros pequeños
$("#ins-caj-com-tel").keyup(function(){              
    var ta = $("#ins-caj-com-tel");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Caja de Compensacion - Validacion para evitar las comillas
$("#ins-caj-com-tel").keyup(function(){              
    var ta = $("#ins-caj-com-tel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Celular de la Caja de Compensacion
// Insertar Celular Caja de Compensacion - Validacion para evitar caracteres acentuados
$("#ins-caj-com-cel").keyup(function(){              
    var ta = $("#ins-caj-com-cel");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Caja de Compensacion - Validacion para evitar espacios en blanco
$("#ins-caj-com-cel").keyup(function(){              
    var ta = $("#ins-caj-com-cel");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Insertar Celular Caja de Compensacion - Validacion para evitar letras
$("#ins-caj-com-cel").keyup(function(){              
    var ta = $("#ins-caj-com-cel");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Caja de Compensacion - Validacion para evitar caracteres
$("#ins-caj-com-cel").keyup(function(){              
    var ta = $("#ins-caj-com-cel");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Caja de Compensacion - Validacion para evitar numeros en los input de tipo texto
$("#ins-caj-com-cel").keyup(function(){              
    var ta = $("#ins-caj-com-cel");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Caja de Compensacion - Validacion para evitar las comillas
$("#ins-caj-com-cel").keyup(function(){              
    var ta = $("#ins-caj-com-cel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Ciudad de la Caja de Compensacion
// Insertar Ciudad Caja de Compensacion -  Funcion que solo permite Texto dentro del Input
$("#ins-caj-com-cit").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Insertar Ciudad Caja de Compensacion - Validacion para evitar numeros en los input de tipo texto
$("#ins-caj-com-cit").keyup(function(){              
    var ta = $("#ins-caj-com-cit");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Ciudad Caja de Compensacion - Validacion para evitar numeros pequeños
$("#ins-caj-com-cit").keyup(function(){              
    var ta = $("#ins-caj-com-cit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Ciudad Caja de Compensacion - Validacion para evitar caracteres acentuados
$("#ins-caj-com-cit").keyup(function(){              
    var ta = $("#ins-caj-com-cit");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Ciudad Caja de Compensacion - Validacion para evitar caracteres
$("#ins-caj-com-cit").keyup(function(){              
    var ta = $("#ins-caj-com-cit");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Ciudad Caja de Compensacion - Validacion para evitar las comillas
$("#ins-caj-com-cit").keyup(function(){              
    var ta = $("#ins-caj-com-cit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Insertar Direccion de la Caja de Compensacion
// Insertar Direccion Caja de Compensacion - Validacion para permitir caracteres de direcciones
$("#ins-caj-com-dir").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Insertar Direccion Caja de Compensacion - Validacion para evitar numeros pequeños
$("#ins-caj-com-dir").keyup(function(){              
    var ta = $("#ins-caj-com-dir");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Direccion Caja de Compensacion - Validacion para evitar caracteres acentuados
$("#ins-caj-com-dir").keyup(function(){              
    var ta = $("#ins-caj-com-dir");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Direccion Caja de Compensacion - Validacion para evitar caracteres
$("#ins-caj-com-dir").keyup(function(){              
    var ta = $("#ins-caj-com-dir");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Direccion Caja de Compensacion - Validacion para evitar las comillas
$("#ins-caj-com-dir").keyup(function(){              
    var ta = $("#ins-caj-com-dir");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Nombre del Encargado de la Caja de Compensacion
// Insertar Nombre Encargado - Funcion que solo permite Texto dentro del Input
$("#ins-caj-com-nom-enc").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Insertar Nombre Encargado - Validacion para evitar numeros en los input de tipo texto
$("#ins-caj-com-nom-enc").keyup(function(){              
    var ta = $("#ins-caj-com-nom-enc");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Nombre Encargado - Validacion para evitar numeros pequeños
$("#ins-caj-com-nom-enc").keyup(function(){              
    var ta = $("#ins-caj-com-nom-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Nombre Encargado - Validacion para evitar caracteres acentuados
$("#ins-caj-com-nom-enc").keyup(function(){              
    var ta = $("#ins-caj-com-nom-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Nombre Encargado - Validacion para evitar caracteres
$("#ins-caj-com-nom-enc").keyup(function(){              
    var ta = $("#ins-caj-com-nom-enc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Nombre Encargado - Validacion para evitar las comillas
$("#ins-caj-com-nom-enc").keyup(function(){              
    var ta = $("#ins-caj-com-nom-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Correo del Encargado
// Insertar Correo Encargado - Validacion para evitar espacios en blanco
$("#ins-caj-com-cor-enc").keyup(function(){              
    var ta = $("#ins-caj-com-cor-enc");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado - Validacion para evitar numeros pequeños
$("#ins-caj-com-cor-enc").keyup(function(){              
    var ta = $("#ins-caj-com-cor-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado -Validacion para evitar caracteres acentuados
$("#ins-caj-com-cor-enc").keyup(function(){              
    var ta = $("#ins-caj-com-cor-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado - Validacion para evitar caracteres
$("#ins-caj-com-cor-enc").keyup(function(){              
    var ta = $("#ins-caj-com-cor-enc");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado - Validacion para permitir caracteres de correo
$("#ins-caj-com-cor-enc").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Insertar Telefono del Encargado
// Insertar Telefono Encargado - Validacion para evitar caracteres acentuados
$("#ins-caj-com-tel-enc").keyup(function(){              
    var ta = $("#ins-caj-com-tel-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado - Validacion para evitar letras ñÑ
$("#ins-caj-com-tel-enc").keyup(function(){              
    var ta = $("#ins-caj-com-tel-enc");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado - Validacion para evitar caracteres acentuados
$("#ins-caj-com-tel-enc").keyup(function(){              
    var ta = $("#ins-caj-com-tel-enc");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado -  Validacion para evitar numeros pequeños
$("#ins-caj-com-tel-enc").keyup(function(){              
    var ta = $("#ins-caj-com-tel-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado - Validacion para evitar las comillas
$("#ins-caj-com-tel-enc").keyup(function(){              
    var ta = $("#ins-caj-com-tel-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Celular del Encargado
// Insertar Celular Encargado - Validacion para evitar caracteres acentuados
$("#ins-caj-com-cel-enc").keyup(function(){              
    var ta = $("#ins-caj-com-cel-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar espacios en blanco
$("#ins-caj-com-cel-enc").keyup(function(){              
    var ta = $("#ins-caj-com-cel-enc");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Insertar Celular Encargado - Validacion para evitar letras
$("#ins-caj-com-cel-enc").keyup(function(){              
    var ta = $("#ins-caj-com-cel-enc");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar caracteres
$("#ins-caj-com-cel-enc").keyup(function(){              
    var ta = $("#ins-caj-com-cel-enc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar numeros en los input de tipo texto
$("#ins-caj-com-cel-enc").keyup(function(){              
    var ta = $("#ins-caj-com-cel-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar las comillas
$("#ins-caj-com-cel-enc").keyup(function(){              
    var ta = $("#ins-caj-com-cel-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 



//------------------------------------------------------------------------



// Actualizar NIT de la Caja de Compensacion
// Actualizar NIT - Validacion para evitar caracteres
$("#upd-caj-com-nit").keyup(function(){              
    var ta = $("#upd-caj-com-nit");
    letras = ta.val().replace(/[|!"#$%&/()=-¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Actualizar NIT - Validacion para evitar numeros pequeños
$("#upd-caj-com-nit").keyup(function(){              
    var ta = $("#upd-caj-com-nit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Actualizar NIT - Validacion para evitar letras
$("#upd-caj-com-nit").keyup(function(){              
    var ta = $("#upd-caj-com-nit");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Actualizar NIT - Validacion para evitar caracteres acentuados
$("#upd-caj-com-nit").keyup(function(){              
    var ta = $("#upd-caj-com-nit");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar NIT - Validacion para evitar espacios en blanco
$("#upd-caj-com-nit").keyup(function(){              
    var ta = $("#upd-caj-com-nit");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Actualizar NIT - Validacion para evitar comillas
$("#upd-caj-com-nit").keyup(function(){              
    var ta = $("#upd-caj-com-nit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar Razon Social de la Caja de Compensacion
// Actualizar Razon Social - Validacion para evitar numeros pequeños
$("#upd-caj-com-nom").keyup(function(){              
    var ta = $("#upd-caj-com-nom");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Razon Social - Validacion para evitar caracteres acentuados
$("#upd-caj-com-nom").keyup(function(){              
    var ta = $("#upd-caj-com-nom");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Razon Social - Validacion para evitar caracteres
$("#upd-caj-com-nom").keyup(function(){              
    var ta = $("#upd-caj-com-nom");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Razon Social - Validacion para evitar las comillas
$("#upd-caj-com-nom").keyup(function(){              
    var ta = $("#upd-caj-com-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar Correo de la Caja de Compensacion
// Actualizar Correo Caja de Compensacion - Validacion para evitar espacios en blanco
$("#upd-caj-com-cor").keyup(function(){              
    var ta = $("#upd-caj-com-cor");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
// Actualizar Correo Caja de Compensacion - Validacion para evitar numeros pequeños
$("#upd-caj-com-cor").keyup(function(){              
    var ta = $("#upd-caj-com-cor");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo Caja de Compensacion -Validacion para evitar caracteres acentuados
$("#upd-caj-com-cor").keyup(function(){              
    var ta = $("#upd-caj-com-cor");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo Caja de Compensacion - Validacion para evitar caracteres
$("#upd-caj-com-cor").keyup(function(){              
    var ta = $("#upd-caj-com-cor");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo Caja de Compensacion - Validacion para permitir caracteres de correo
$("#upd-caj-com-cor").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Actualizar Telefono de la Caja de Compensacion
// Actualizar Telefono Caja de Compensacion - Validacion para evitar caracteres acentuados
$("#upd-caj-com-tel").keyup(function(){              
    var ta = $("#upd-caj-com-tel");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Caja de Compensacion - Validacion para evitar letras ñÑ
$("#upd-caj-com-tel").keyup(function(){              
    var ta = $("#upd-caj-com-tel");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Caja de Compensacion - Validacion para evitar caracteres acentuados
$("#upd-caj-com-tel").keyup(function(){              
    var ta = $("#upd-caj-com-tel");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Caja de Compensacion -  Validacion para evitar numeros pequeños
$("#upd-caj-com-tel").keyup(function(){              
    var ta = $("#upd-caj-com-tel");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Caja de Compensacion - Validacion para evitar las comillas
$("#upd-caj-com-tel").keyup(function(){              
    var ta = $("#upd-caj-com-tel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Celular de la Caja de Compensacion
// Actualizar Celular Caja de Compensacion - Validacion para evitar caracteres acentuados
$("#upd-caj-com-cel").keyup(function(){              
    var ta = $("#upd-caj-com-cel");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Caja de Compensacion - Validacion para evitar espacios en blanco
$("#upd-caj-com-cel").keyup(function(){              
    var ta = $("#upd-caj-com-cel");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Actualizar Celular Caja de Compensacion - Validacion para evitar letras
$("#upd-caj-com-cel").keyup(function(){              
    var ta = $("#upd-caj-com-cel");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Caja de Compensacion - Validacion para evitar caracteres
$("#upd-caj-com-cel").keyup(function(){              
    var ta = $("#upd-caj-com-cel");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Caja de Compensacion - Validacion para evitar numeros en los input de tipo texto
$("#upd-caj-com-cel").keyup(function(){              
    var ta = $("#upd-caj-com-cel");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Caja de Compensacion - Validacion para evitar las comillas
$("#upd-arl-cel").keyup(function(){              
    var ta = $("#upd-arl-cel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Ciudad de la Caja de Compensacion
// Actualizar Ciudad Caja de Compensacion -  Funcion que solo permite Texto dentro del Input
$("#upd-caj-com-cit").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Actualizar Ciudad Caja de Compensacion - Validacion para evitar numeros en los input de tipo texto
$("#upd-caj-com-cit").keyup(function(){              
    var ta = $("#upd-caj-com-cit");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Ciudad Caja de Compensacion - Validacion para evitar numeros pequeños
$("#upd-caj-com-cit").keyup(function(){              
    var ta = $("#upd-caj-com-cit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Ciudad Caja de Compensacion - Validacion para evitar caracteres acentuados
$("#upd-caj-com-cit").keyup(function(){              
    var ta = $("#upd-caj-com-cit");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Ciudad Caja de Compensacion - Validacion para evitar caracteres
$("#upd-caj-com-cit").keyup(function(){              
    var ta = $("#upd-caj-com-cit");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Ciudad Caja de Compensacion - Validacion para evitar las comillas
$("#upd-caj-com-cit").keyup(function(){              
    var ta = $("#upd-caj-com-cit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar Direccion de la Caja de Compensacion
// Actualizar Direccion Caja de Compensacion - Validacion para permitir caracteres de direcciones
$("#upd-caj-com-dir").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Actualizar Direccion Caja de Compensacion - Validacion para evitar numeros pequeños
$("#upd-caj-com-dir").keyup(function(){              
    var ta = $("#upd-caj-com-dir");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Direccion Caja de Compensacion - Validacion para evitar caracteres acentuados
$("#upd-caj-com-dir").keyup(function(){              
    var ta = $("#upd-caj-com-dir");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Direccion Caja de Compensacion - Validacion para evitar caracteres
$("#upd-caj-com-dir").keyup(function(){              
    var ta = $("#upd-caj-com-dir");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Direccion Caja de Compensacion - Validacion para evitar las comillas
$("#upd-caj-com-dir").keyup(function(){              
    var ta = $("#upd-caj-com-dir");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Nombre del Encargado de la Caja de Compensacion
// Actualizar Nombre Encargado - Funcion que solo permite Texto dentro del Input
$("#upd-caj-com-nom-enc").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Actualizar Nombre Encargado - Validacion para evitar numeros en los input de tipo texto
$("#upd-caj-com-nom-enc").keyup(function(){              
    var ta = $("#upd-caj-com-nom-enc");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Nombre Encargado - Validacion para evitar numeros pequeños
$("#upd-caj-com-nom-enc").keyup(function(){              
    var ta = $("#upd-caj-com-nom-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Nombre Encargado - Validacion para evitar caracteres acentuados
$("#upd-caj-com-nom-enc").keyup(function(){              
    var ta = $("#upd-caj-com-nom-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Nombre Encargado - Validacion para evitar caracteres
$("#upd-caj-com-nom-enc").keyup(function(){              
    var ta = $("#upd-caj-com-nom-enc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Nombre Encargado - Validacion para evitar las comillas
$("#upd-caj-com-nom-enc").keyup(function(){              
    var ta = $("#upd-caj-com-nom-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Correo del Encargado
// Actualizar Correo Encargado - Validacion para evitar espacios en blanco
$("#upd-caj-com-cor-enc").keyup(function(){              
    var ta = $("#upd-caj-com-cor-enc");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
// Actualizar Correo Encargado - Validacion para evitar numeros pequeños
$("#upd-caj-com-cor-enc").keyup(function(){              
    var ta = $("#upd-caj-com-cor-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo Encargado -Validacion para evitar caracteres acentuados
$("#upd-caj-com-cor-enc").keyup(function(){              
    var ta = $("#upd-caj-com-cor-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo Encargado - Validacion para evitar caracteres
$("#upd-caj-com-cor-enc").keyup(function(){              
    var ta = $("#upd-caj-com-cor-enc");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo Encargado - Validacion para permitir caracteres de correo
$("#upd-caj-com-cor-enc").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Actualizar Telefono del Encargado
// Actualizar Telefono Encargado - Validacion para evitar caracteres acentuados
$("#upd-caj-com-tel-enc").keyup(function(){              
    var ta = $("#upd-caj-com-tel-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Encargado - Validacion para evitar letras ñÑ
$("#upd-caj-com-tel-enc").keyup(function(){              
    var ta = $("#upd-caj-com-tel-enc");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Encargado - Validacion para evitar caracteres acentuados
$("#upd-caj-com-tel-enc").keyup(function(){              
    var ta = $("#upd-caj-com-tel-enc");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Encargado -  Validacion para evitar numeros pequeños
$("#upd-caj-com-tel-enc").keyup(function(){              
    var ta = $("#upd-caj-com-tel-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Encargado - Validacion para evitar las comillas
$("#upd-caj-com-tel-enc").keyup(function(){              
    var ta = $("#upd-caj-com-tel-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Celular del Encargado
// Actualizar Celular Encargado - Validacion para evitar caracteres acentuados
$("#upd-caj-com-cel-enc").keyup(function(){              
    var ta = $("#upd-caj-com-cel-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Encargado - Validacion para evitar espacios en blanco
$("#upd-caj-com-cel-enc").keyup(function(){              
    var ta = $("#upd-caj-com-cel-enc");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Actualizar Celular Encargado - Validacion para evitar letras
$("#upd-caj-com-cel-enc").keyup(function(){              
    var ta = $("#upd-caj-com-cel-enc");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Encargado - Validacion para evitar caracteres
$("#upd-caj-com-cel-enc").keyup(function(){              
    var ta = $("#upd-caj-com-cel-enc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Encargado - Validacion para evitar numeros en los input de tipo texto
$("#upd-caj-com-cel-enc").keyup(function(){              
    var ta = $("#upd-caj-com-cel-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Encargado - Validacion para evitar las comillas
$("#upd-caj-com-cel-enc").keyup(function(){              
    var ta = $("#upd-caj-com-cel-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 