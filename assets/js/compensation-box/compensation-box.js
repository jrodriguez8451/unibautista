// Registrar Caja de Compensación Usando Ajax
function insertCompensationBoxAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let nit       = $('#ins-caj-com-nit').val();
    let nombre    = $('#ins-caj-com-nom').val();
    let correo    = $('#ins-caj-com-cor').val();
    let direccion = $('#ins-caj-com-dir').val();
    let telefono  = $('#ins-caj-com-tel').val();

    // Condicion para evitar campos vacios
    if (nit.length == 0 || nombre.length == 0 || correo.length == 0 || direccion.length == 0 || telefono.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
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
function detailCompensationBox(det_caj_com_id,det_caj_com_nit,det_caj_com_nom,det_caj_com_cor,det_caj_com_dir,det_caj_com_tel,det_caj_com_est,det_caj_com_fec_reg) {
    // .val() sirva para obtener el valor de un elemento
    $('#modal-detail-compensation-box .modal-body .det-caj-com-id').val(det_caj_com_id);
    $('#modal-detail-compensation-box .modal-body .det-caj-com-nit').val(det_caj_com_nit);
    $('#modal-detail-compensation-box .modal-body .det-caj-com-nom').val(det_caj_com_nom);
    $('#modal-detail-compensation-box .modal-body .det-caj-com-cor').val(det_caj_com_cor);
    $('#modal-detail-compensation-box .modal-body .det-caj-com-dir').val(det_caj_com_dir);
    $('#modal-detail-compensation-box .modal-body .det-caj-com-tel').val(det_caj_com_tel);
    $('#modal-detail-compensation-box .modal-body .det-caj-com-est').val(det_caj_com_est);
    $('#modal-detail-compensation-box .modal-body .det-caj-com-fec-reg').val(det_caj_com_fec_reg);
}

// Funcion para Pintar los Datos de la Caja de Compensación antes de Actualizar
function updateCompensationBox(upd_caj_com_id,upd_caj_com_nit,upd_caj_com_nom,upd_caj_com_cor,upd_caj_com_dir,upd_caj_com_tel){
    $('#modal-update-compensation-box .modal-body .upd-caj-com-id').val(upd_caj_com_id);
    $('#modal-update-compensation-box .modal-body .upd-caj-com-nit').val(upd_caj_com_nit);
    $('#modal-update-compensation-box .modal-body .upd-caj-com-nom').val(upd_caj_com_nom);
    $('#modal-update-compensation-box .modal-body .upd-caj-com-cor').val(upd_caj_com_cor);
    $('#modal-update-compensation-box .modal-body .upd-caj-com-dir').val(upd_caj_com_dir);
    $('#modal-update-compensation-box .modal-body .upd-caj-com-tel').val(upd_caj_com_tel);
}

// Funcion para Actualizar los Datos de la Caja de Compensación usando Ajax
function updateCompensationBoxAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let nit       = $('#upd-caj-com-nit').val();
    let nombre    = $('#upd-caj-com-nom').val();
    let correo    = $('#upd-caj-com-cor').val();
    let direccion = $('#upd-caj-com-dir').val();
    let telefono  = $('#upd-caj-com-tel').val();

    // Condicion para evitar campos vacios
    if (nit.length == 0 || nombre.length == 0 || correo.length == 0 || direccion.length == 0 || telefono.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
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

// Validacion de los Formularios

// Funcion que solo permite Numeros dentro del Input

// Insertar NIT de la Caja de Compensación
$("#ins-caj-com-nit").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-caj-com-nit").keyup(function(){              
    var ta = $("#ins-caj-com-nit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar letras
$("#ins-caj-com-nit").keyup(function(){              
    var ta = $("#ins-caj-com-nit");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-caj-com-nit").keyup(function(){              
    var ta = $("#ins-caj-com-nit");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#ins-caj-com-nit").keyup(function(){              
    var ta = $("#ins-caj-com-nit");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-caj-com-nit").keyup(function(){              
    var ta = $("#ins-caj-com-nit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Funcion que solo permite Texto dentro del Input

// Insertar nombre de la Caja de Compensación
$("#ins-caj-com-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-caj-com-nom").keyup(function(){              
    var ta = $("#ins-caj-com-nom");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-caj-com-nom").keyup(function(){              
    var ta = $("#ins-caj-com-nom");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-caj-com-nom").keyup(function(){              
    var ta = $("#ins-caj-com-nom");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-caj-com-nom").keyup(function(){              
    var ta = $("#ins-caj-com-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar correo de la Caja de Compensación
$("#ins-caj-com-cor").keyup(function(){              
    var ta = $("#ins-caj-com-cor");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
$("#ins-caj-com-cor").keyup(function(){              
    var ta = $("#ins-caj-com-cor");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-caj-com-cor").keyup(function(){              
    var ta = $("#ins-caj-com-cor");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-caj-com-cor").keyup(function(){              
    var ta = $("#ins-caj-com-cor");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-caj-com-cor").keyup(function(){              
    var ta = $("#ins-caj-com-cor");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});
$("#ins-caj-com-cor").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Insertar direccion de la Caja de Compensación
$("#ins-caj-com-dir").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-caj-com-dir").keyup(function(){              
    var ta = $("#ins-caj-com-dir");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-caj-com-dir").keyup(function(){              
    var ta = $("#ins-caj-com-dir");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-caj-com-dir").keyup(function(){              
    var ta = $("#ins-caj-com-dir");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#ins-caj-com-dir").keyup(function(){              
    var ta = $("#ins-caj-com-dir");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-caj-com-dir").keyup(function(){              
    var ta = $("#ins-caj-com-dir");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar telefono de la Caja de Compensación
$("#ins-caj-com-tel").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-caj-com-tel").keyup(function(){              
    var ta = $("#ins-caj-com-tel");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar letras
$("#ins-caj-com-tel").keyup(function(){              
    var ta = $("#ins-caj-com-tel");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-caj-com-tel").keyup(function(){              
    var ta = $("#ins-caj-com-tel");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#ins-caj-com-tel").keyup(function(){              
    var ta = $("#ins-caj-com-tel");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-caj-com-tel").keyup(function(){              
    var ta = $("#ins-caj-com-tel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Funcion que solo permite Numeros dentro del Input

// Actualizar NIT de la Caja de Compensación
$("#upd-caj-com-nit").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-caj-com-nit").keyup(function(){              
    var ta = $("#upd-caj-com-nit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar letras
$("#upd-caj-com-nit").keyup(function(){              
    var ta = $("#upd-caj-com-nit");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
$("#upd-caj-com-nit").keyup(function(){              
    var ta = $("#upd-caj-com-nit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-caj-com-nit").keyup(function(){              
    var ta = $("#upd-caj-com-nit");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-caj-com-nit").keyup(function(){              
    var ta = $("#upd-caj-com-nit");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-caj-com-nit").keyup(function(){              
    var ta = $("#upd-caj-com-nit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Funcion que solo permite Texto dentro del Input

// Actualizar nombre de la Caja de Compensación
$("#upd-caj-com-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-caj-com-nom").keyup(function(){              
    var ta = $("#upd-caj-com-nom");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-caj-com-nom").keyup(function(){              
    var ta = $("#upd-caj-com-nom");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-caj-com-nom").keyup(function(){              
    var ta = $("#upd-caj-com-nom");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-caj-com-nom").keyup(function(){              
    var ta = $("#upd-caj-com-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar correo de la Caja de Compensación
$("#upd-caj-com-cor").keyup(function(){              
    var ta = $("#upd-caj-com-cor");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
$("#upd-caj-com-cor").keyup(function(){              
    var ta = $("#upd-caj-com-cor");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-caj-com-cor").keyup(function(){              
    var ta = $("#upd-caj-com-cor");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-caj-com-cor").keyup(function(){              
    var ta = $("#upd-caj-com-cor");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-caj-com-cor").keyup(function(){              
    var ta = $("#upd-caj-com-cor");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

$("#upd-caj-com-cor").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar las comillas
$("#upd-caj-com-cor").keyup(function(){              
    var ta = $("#upd-caj-com-cor");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar direccion de la Caja de Compensación
$("#upd-caj-com-dir").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#upd-caj-com-dir").keyup(function(){              
    var ta = $("#upd-caj-com-dir");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-caj-com-dir").keyup(function(){              
    var ta = $("#upd-caj-com-dir");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#upd-caj-com-dir").keyup(function(){              
    var ta = $("#upd-caj-com-dir");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
});
//Validacion para evitar las comillas
$("#upd-caj-com-dir").keyup(function(){              
    var ta = $("#upd-caj-com-dir");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar telefono de la Caja de Compensación
$("#upd-caj-com-tel").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-caj-com-tel").keyup(function(){              
    var ta = $("#upd-caj-com-tel");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-caj-com-tel").keyup(function(){              
    var ta = $("#upd-caj-com-tel");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar letras
$("#upd-caj-com-tel").keyup(function(){              
    var ta = $("#upd-caj-com-tel");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-caj-com-tel").keyup(function(){              
    var ta = $("#upd-caj-com-tel");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-caj-com-tel").keyup(function(){              
    var ta = $("#upd-caj-com-tel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});