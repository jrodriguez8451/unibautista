// Registrar Dispositivo Usando Ajax
function insertDeviceAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let activo_fijo = $('#ins-dis-act-fij').val();
    let dispositivo = $('#ins-dis-nom').val();
    let marca       = $('#ins-dis-mar').val();
    let referencia  = $('#ins-dis-ref').val();
    let serial      = $('#ins-dis-ser').val();
    let modelo      = $('#ins-dis-mod').val();
    let capacidad   = $('#ins-dis-cap').val();
    let observacion = $('#ins-dis-obs').val();
    let estado      = $('#ins-dis-est').val();
    let oficina     = $('#ins-dis-ofi').val();

    $('#insert-device').click(function() {
        if ($('#ins-dis-mar').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-dis-est').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-dis-ofi').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        }
    });

    // Condicion para evitar campos vacios
    if (activo_fijo.length == 0 || dispositivo.length == 0 || marca.length == 0 || referencia.length == 0 || serial.length == 0 || modelo.length == 0 || capacidad.length == 0 || observacion.length == 0 || estado.length == 0 || oficina.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
    }else{
        // Poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-insert-device').serialize();
        // Almacenamos dentro de una variable un parametro que pueda recibir el controlador para que ejecute la funcion
        let accion = "&insert_device=1";
        // Enviamos la informacion del formulario + la variable que recibirá el controlador
        dataString = dataString + accion;  
        $.ajax({
            // Realiza una petición POST a una URL provista.
            method:"POST",
            // Ruta en donde se enviará los datos, url en donde hacemos la peticion ajax
            url: 'index.php?ruta=dispositivo',
            // Si todo sale bien en el success, el data es todo el contenido html que tiene el index
            data:dataString,
            // Establece una función a ejecutar si la petición a sido satisfactoria
            success: function(){
                // Load es cargar, toma el id de la tabla y vas a cargar nuevamente esta tabla, es un refrescar la tabla
                $('#load').load('index.php?ruta=dispositivo #load',function(){
                // Aqui hacemos una funcion que lo que haces es llamarme nuevamente a la tabla cuando todo lo anterior se ejecute
                    genericTable();
                });
                // Alerta de sweetalert
                crudAlert("success","¡Dispositivo registrado con éxito!","#28a745");
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

//Funcion para ver detalle del Dispositivo
function detailDevice(det_dis_id,det_dis_act_fij,det_nom_dis,det_dis_mar,det_dis_ref,det_dis_ser,det_dis_mod,det_dis_cap,det_dis_obs,det_dis_con,det_dis_ofi,det_dis_est,det_dis_fec_reg) {
    // .val() sirva para obtener el valor de un elemento
    $('#modal-detail-device .modal-body .det-dis-id').val(det_dis_id);
    $('#modal-detail-device .modal-body .det-dis-act-fij').val(det_dis_act_fij);
    $('#modal-detail-device .modal-body .det-nom-dis').val(det_nom_dis);
    $('#modal-detail-device .modal-body .det-dis-mar').val(det_dis_mar);
    $('#modal-detail-device .modal-body .det-dis-ref').val(det_dis_ref);
    $('#modal-detail-device .modal-body .det-dis-ser').val(det_dis_ser);
    $('#modal-detail-device .modal-body .det-dis-mod').val(det_dis_mod);
    $('#modal-detail-device .modal-body .det-dis-cap').val(det_dis_cap);
    $('#modal-detail-device .modal-body .det-dis-obs').val(det_dis_obs);
    $('#modal-detail-device .modal-body .det-dis-con').val(det_dis_con);
    $('#modal-detail-device .modal-body .det-dis-ofi').val(det_dis_ofi);
    $('#modal-detail-device .modal-body .det-dis-est').val(det_dis_est);
    $('#modal-detail-device .modal-body .det-dis-fec-reg').val(det_dis_fec_reg);
}

// Funcion para Pintar los Datos del Dispositivo antes de Actualizar
function updateDevice(upd_dis_id,upd_dis_act_fij,upd_dis_nom,upd_dis_mar,upd_dis_ref,upd_dis_ser,upd_dis_mod,upd_dis_cap,upd_dis_obs,upd_dis_est,upd_dis_ubi){
    $('#modal-update-device .modal-body .upd-dis-id').val(upd_dis_id);
    $('#modal-update-device .modal-body .upd-dis-act-fij').val(upd_dis_act_fij);
    $('#modal-update-device .modal-body .upd-dis-nom').val(upd_dis_nom);
    $("#upd-dis-mar option[value='"+upd_dis_mar+"']").attr("selected",true);
    $('#modal-update-device .modal-body .upd-dis-ref').val(upd_dis_ref);
    $('#modal-update-device .modal-body .upd-dis-ser').val(upd_dis_ser);
    $('#modal-update-device .modal-body .upd-dis-mod').val(upd_dis_mod);
    $('#modal-update-device .modal-body .upd-dis-cap').val(upd_dis_cap);
    $('#modal-update-device .modal-body .upd-dis-obs').val(upd_dis_obs);
    $("#upd-dis-est option[value='"+upd_dis_est+"']").attr("selected",true);
    $("#upd-dis-ofi option[value='"+upd_dis_ubi+"']").attr("selected",true);
}

// Funcion para Actualizar los Datos del Dispositivo usando Ajax
function updateDeviceAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let activo_fijo = $('#upd-dis-act-fij').val();
    let dispositivo = $('#upd-dis-nom').val();
    let marca       = $('#upd-dis-mar').val();
    let referencia  = $('#upd-dis-ref').val();
    let serial      = $('#upd-dis-ser').val();
    let modelo      = $('#upd-dis-mod').val();
    let capacidad   = $('#upd-dis-cap').val();
    let observacion = $('#upd-dis-obs').val();
    let estado      = $('#upd-dis-est').val();
    let oficina     = $('#upd-dis-ofi').val();

    $('#update-device').click(function() {
        if ($('#upd-dis-mar').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-dis-est').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-dis-ofi').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        }
    });
    
    // Condicion para evitar campos vacios
    if (activo_fijo.length == 0 || dispositivo.length == 0 || marca.length == 0 || referencia.length == 0 || serial.length == 0 || modelo.length == 0 || capacidad.length == 0 || observacion.length == 0 || estado.length == 0 || oficina.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
    }else{
        // Poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-update-device').serialize();
        let accion = "&update_device=1";
        dataString = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=dispositivo',
            data:dataString,
            success: function(){
                $('#load').load('index.php?ruta=dispositivo #load',function(){
                    genericTable();
                });
                crudAlert("success","¡Datos actualizados con éxito!","#28a745");
            },
            error:function(){
                genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
            }
        });
        cleanModal();
        restartSelect();
    }
}

// Funcion para Pintar el ID de un Dispositivo antes de Eliminar
function deleteDevice(del_dis_id,del_dis_des){
    $('#modal-delete-device .modal-body .del-dis-id').val(del_dis_id);
    $('#modal-delete-device .modal-body .del-dis-nom').text(del_dis_des);
}

// Funcion para Eliminar un Dispositivo usando Ajax
function deleteDeviceAjax(){
    let dataString = $('#form-delete-device').serialize();
    let accion = "&delete_device=1";
    dataString = dataString + accion;  
    $.ajax({
        method:"POST",
        url: 'index.php?ruta=dispositivo',
        data:dataString,
            success: function(){
            $('#load').load('index.php?ruta=dispositivo #load',function(){
                genericTable();
            });
            crudAlert("success","¡Dispositivo eliminado con éxito!","#28a745");
        },
        error:function(){
            genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
        }
    });
}

// Validacion de los Formularios

// Funcion que solo permite Numeros dentro del Input

// Insertar codigo activo fijo del dispositivo
$("#ins-dis-act-fij").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-dis-act-fij").keyup(function(){              
    var ta = $("#ins-dis-act-fij");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar letras
$("#ins-dis-act-fij").keyup(function(){              
    var ta = $("#ins-dis-act-fij");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-dis-act-fij").keyup(function(){              
    var ta = $("#ins-dis-act-fij");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#ins-dis-act-fij").keyup(function(){              
    var ta = $("#ins-dis-act-fij");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-dis-act-fij").keyup(function(){              
    var ta = $("#ins-dis-act-fij");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Funcion que solo permite Texto dentro del Input

// Insertar nombre del dispositivo
$("#ins-dis-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-dis-nom").keyup(function(){              
    var ta = $("#ins-dis-nom");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-dis-nom").keyup(function(){              
    var ta = $("#ins-dis-nom");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-dis-nom").keyup(function(){              
    var ta = $("#ins-dis-nom");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-dis-nom").keyup(function(){              
    var ta = $("#ins-dis-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar referencia del dipositivo
$("#ins-dis-ref").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-dis-ref").keyup(function(){              
    var ta = $("#ins-dis-ref");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-dis-ref").keyup(function(){              
    var ta = $("#ins-dis-ref");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#ins-dis-ref").keyup(function(){              
    var ta = $("#ins-dis-ref");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-dis-ref").keyup(function(){              
    var ta = $("#ins-dis-ref");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar serial del dipositivo
$("#ins-dis-ser").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-dis-ser").keyup(function(){              
    var ta = $("#ins-dis-ser");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-dis-ser").keyup(function(){              
    var ta = $("#ins-dis-ser");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#ins-dis-ser").keyup(function(){              
    var ta = $("#ins-dis-ser");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-dis-ser").keyup(function(){              
    var ta = $("#ins-dis-ser");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar modelo del dipositivo
$("#ins-dis-mod").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-dis-mod").keyup(function(){              
    var ta = $("#ins-dis-mod");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-dis-mod").keyup(function(){              
    var ta = $("#ins-dis-mod");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#ins-dis-mod").keyup(function(){              
    var ta = $("#ins-dis-mod");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-dis-mod").keyup(function(){              
    var ta = $("#ins-dis-mod");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar capacidad del dipositivo
$("#ins-dis-cap").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-dis-cap").keyup(function(){              
    var ta = $("#ins-dis-cap");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-dis-cap").keyup(function(){              
    var ta = $("#ins-dis-cap");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#ins-dis-cap").keyup(function(){              
    var ta = $("#ins-dis-cap");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.:{};/*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-dis-cap").keyup(function(){              
    var ta = $("#ins-dis-cap");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar observacion del dipositivo
$("#ins-dis-obs").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-dis-obs").keyup(function(){              
    var ta = $("#ins-dis-obs");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-dis-obs").keyup(function(){              
    var ta = $("#ins-dis-obs");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 

$("#ins-dis-obs").keyup(function(){              
    var ta = $("#ins-dis-obs");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
});
//Validacion para evitar las comillas
$("#ins-dis-obs").keyup(function(){              
    var ta = $("#ins-dis-obs");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Funcion que solo permite Numeros dentro del Input

// Actualizar codigo activo fijo del dispositivo
$("#upd-dis-act-fij").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-dis-act-fij").keyup(function(){              
    var ta = $("#upd-dis-act-fij");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar letras
$("#upd-dis-act-fij").keyup(function(){              
    var ta = $("#upd-dis-act-fij");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-dis-act-fij").keyup(function(){              
    var ta = $("#upd-dis-act-fij");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#upd-dis-act-fij").keyup(function(){              
    var ta = $("#upd-dis-act-fij");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-dis-act-fij").keyup(function(){              
    var ta = $("#upd-dis-act-fij");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Funcion que solo permite Texto dentro del Input

// Actualizar nombre del dispositivo
$("#upd-dis-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-dis-nom").keyup(function(){              
    var ta = $("#upd-dis-nom");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-dis-nom").keyup(function(){              
    var ta = $("#upd-dis-nom");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-dis-nom").keyup(function(){              
    var ta = $("#upd-dis-nom");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-dis-nom").keyup(function(){              
    var ta = $("#upd-dis-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar referencia del dipositivo
$("#upd-dis-ref").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-dis-ref").keyup(function(){              
    var ta = $("#upd-dis-ref");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-dis-ref").keyup(function(){              
    var ta = $("#upd-dis-ref");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#upd-dis-ref").keyup(function(){              
    var ta = $("#upd-dis-ref");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-dis-ref").keyup(function(){              
    var ta = $("#upd-dis-ref");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar serial del dipositivo
$("#upd-dis-ser").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-dis-ser").keyup(function(){              
    var ta = $("#upd-dis-ser");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-dis-ser").keyup(function(){              
    var ta = $("#upd-dis-ser");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#upd-dis-ser").keyup(function(){              
    var ta = $("#upd-dis-ser");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-dis-ser").keyup(function(){              
    var ta = $("#upd-dis-ser");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar modelo del dipositivo
$("#upd-dis-mod").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-dis-mod").keyup(function(){              
    var ta = $("#upd-dis-mod");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-dis-mod").keyup(function(){              
    var ta = $("#upd-dis-mod");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#upd-dis-mod").keyup(function(){              
    var ta = $("#upd-dis-mod");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-dis-mod").keyup(function(){              
    var ta = $("#upd-dis-mod");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar capacidad del dipositivo
$("#upd-dis-cap").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-dis-cap").keyup(function(){              
    var ta = $("#upd-dis-cap");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-dis-cap").keyup(function(){              
    var ta = $("#upd-dis-cap");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#upd-dis-cap").keyup(function(){              
    var ta = $("#upd-dis-cap");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.:{};/*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-dis-cap").keyup(function(){              
    var ta = $("#upd-dis-cap");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar observacion del dipositivo
$("#upd-dis-obs").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-dis-obs").keyup(function(){              
    var ta = $("#upd-dis-obs");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-dis-obs").keyup(function(){              
    var ta = $("#upd-dis-obs");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 

$("#upd-dis-obs").keyup(function(){              
    var ta = $("#upd-dis-obs");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»™┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
});
//Validacion para evitar las comillas
$("#upd-dis-obs").keyup(function(){              
    var ta = $("#upd-dis-obs");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});