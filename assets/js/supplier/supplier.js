// Registrar un Proveedor Usando Ajax
function insertSupplierAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let nit       = $('#ins-sup-nit').val();
    let nombre    = $('#ins-sup-nom').val();
    let producto  = $('#ins-sup-pro-ser').val();
    let correo    = $('#ins-sup-cor').val();
    let ciudad    = $('#ins-sup-cit').val();
    let direccion = $('#ins-sup-dir').val();

    // Condicion para evitar campos vacios
    if (nit.length == 0 || nombre.length == 0 || producto.length == 0 || correo.length == 0 || ciudad.length == 0 || direccion.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        validationAlert("¡Algunos campos no pueden quedar vacíos!","#ffc107");
    }else{
        // Poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-insert-supplier').serialize();
        // Almacenamos dentro de una variable un parametro que pueda recibir el controlador para que ejecute la funcion
        let accion = "&insert_supplier=1";
        // Enviamos la informacion del formulario + la variable que recibirá el controlador
        dataString = dataString + accion;  
        $.ajax({
            // Realiza una petición POST a una URL provista.
            method:"POST",
            // Ruta en donde se enviará los datos, url en donde hacemos la peticion ajax
            url: 'index.php?ruta=proveedor',
            // Si todo sale bien en el success, el data es todo el contenido html que tiene el index
            data:dataString,
            // Establece una función a ejecutar si la petición a sido satisfactoria
            success: function(){
                // Load es cargar, toma el id de la tabla y vas a cargar nuevamente esta tabla, es un refrescar la tabla
                $('#load').load('index.php?ruta=proveedor #load',function(){
                // Aqui hacemos una funcion que lo que haces es llamarme nuevamente a la tabla cuando todo lo anterior se ejecute
                    genericTable();
                });
                // Alerta de sweetalert
                crudAlert("success","¡Proveedor registrado con éxito!","#28a745");
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

//Funcion para ver detalle del Proveedor
function detailSupplier(det_sup_id,det_sup_nit,det_sup_nom,det_sup_pro_ser,det_sup_cor,det_sup_tel,det_sup_cel,det_sup_cit,det_sup_dir,det_sup_enc,det_sup_enc_cor,det_sup_enc_tel,det_sup_enc_cel,det_sup_est,det_sup_fec_reg) {
    // .val() sirva para obtener el valor de un elemento
    $('#modal-detail-supplier .modal-body .det-sup-id').val(det_sup_id);
    $('#modal-detail-supplier .modal-body .det-sup-nit').val(det_sup_nit);
    $('#modal-detail-supplier .modal-body .det-sup-nom').val(det_sup_nom);
    $('#modal-detail-supplier .modal-body .det-sup-pro-ser').val(det_sup_pro_ser);
    $('#modal-detail-supplier .modal-body .det-sup-cor').val(det_sup_cor);
    $('#modal-detail-supplier .modal-body .det-sup-tel').val(det_sup_tel);
    $('#modal-detail-supplier .modal-body .det-sup-cel').val(det_sup_cel);
    $('#modal-detail-supplier .modal-body .det-sup-cit').val(det_sup_cit);
    $('#modal-detail-supplier .modal-body .det-sup-dir').val(det_sup_dir);
    $('#modal-detail-supplier .modal-body .det-sup-enc').val(det_sup_enc);
    $('#modal-detail-supplier .modal-body .det-sup-enc-cor').val(det_sup_enc_cor);
    $('#modal-detail-supplier .modal-body .det-sup-enc-tel').val(det_sup_enc_tel);
    $('#modal-detail-supplier .modal-body .det-sup-enc-cel').val(det_sup_enc_cel);
    $('#modal-detail-supplier .modal-body .det-sup-est').val(det_sup_est);
    $('#modal-detail-supplier .modal-body .det-sup-fec-reg').val(det_sup_fec_reg);
}

// Funcion para Pintar los Datos del Proveedor antes de Actualizar
function updateSupplier(upd_sup_id,upd_sup_nit,upd_sup_nom,upd_sup_pro_ser,upd_sup_cor,upd_sup_tel,upd_sup_cel,upd_sup_ciu,upd_sup_dir,upd_sup_enc,upd_sup_cor_enc,upd_sup_tel_enc,upd_sup_cel_enc){
    $('#modal-update-supplier .modal-body .upd-sup-id').val(upd_sup_id);
    $('#modal-update-supplier .modal-body .upd-sup-nit').val(upd_sup_nit);
    $('#modal-update-supplier .modal-body .upd-sup-nom').val(upd_sup_nom);
    $('#modal-update-supplier .modal-body .upd-sup-pro-ser').val(upd_sup_pro_ser);
    $('#modal-update-supplier .modal-body .upd-sup-cor').val(upd_sup_cor);
    $('#modal-update-supplier .modal-body .upd-sup-tel').val(upd_sup_tel);
    $('#modal-update-supplier .modal-body .upd-sup-cel').val(upd_sup_cel);
    $('#modal-update-supplier .modal-body .upd-sup-cit').val(upd_sup_ciu);
    $('#modal-update-supplier .modal-body .upd-sup-dir').val(upd_sup_dir);
    $('#modal-update-supplier .modal-body .upd-sup-nom-enc').val(upd_sup_enc);
    $('#modal-update-supplier .modal-body .upd-sup-cor-enc').val(upd_sup_cor_enc);
    $('#modal-update-supplier .modal-body .upd-sup-tel-enc').val(upd_sup_tel_enc);
    $('#modal-update-supplier .modal-body .upd-sup-cel-enc').val(upd_sup_cel_enc);
}

// Funcion para Actualizar los Datos del Proveedor usando Ajax
function updateSupplierAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let nit       = $('#upd-sup-nit').val();
    let nombre    = $('#upd-sup-nom').val();
    let producto  = $('#upd-sup-pro-ser').val();
    let correo    = $('#upd-sup-cor').val();
    let ciudad    = $('#upd-sup-cit').val();
    let direccion = $('#upd-sup-dir').val();

    // Condicion para evitar campos vacios
    if (nit.length == 0 || nombre.length == 0 || producto.length == 0 || correo.length == 0 || ciudad.length == 0 || direccion.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        validationAlert("¡Algunos campos no pueden quedar vacíos!","#ffc107");
    }else{
        // Poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-update-supplier').serialize();
        let accion = "&update_supplier=1";
        dataString = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=proveedor',
            data:dataString,
            success: function(){
                $('#load').load('index.php?ruta=proveedor #load',function(){
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

// Funcion para Pintar el ID del Proveedor antes de Eliminarla
function deleteSupplier(del_sup_id,del_sup_nom){
    $('#modal-delete-supplier .modal-body .del-sup-id').val(del_sup_id);
    $('#modal-delete-supplier .modal-body .del-sup-nom').text(del_sup_nom);
}

// Funcion para Eliminar del Proveedor usando Ajax
function deleteSupplierAjax(){
    let dataString = $('#form-delete-supplier').serialize();
    let accion = "&delete_supplier=1";
    dataString = dataString + accion;  
    $.ajax({
        method:"POST",
        url: 'index.php?ruta=proveedor',
        data:dataString,
            success: function(){
            $('#load').load('index.php?ruta=proveedor #load',function(){
                genericTable();
            });
            crudAlert("success","¡Proveedor eliminado con éxito!","#28a745");
        },
        error:function(){
            genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
        }
    });
}


// Validaciones de los Formularios


// Insertar NIT del Proveedor
// Insertar NIT - Validacion para evitar caracteres
$("#ins-sup-nit").keyup(function(){              
    var ta = $("#ins-sup-nit");
    letras = ta.val().replace(/[|!"#$%&/()=-¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Insertar NIT - Validacion para evitar numeros pequeños
$("#ins-sup-nit").keyup(function(){              
    var ta = $("#ins-sup-nit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Insertar NIT - Validacion para evitar letras
$("#ins-sup-nit").keyup(function(){              
    var ta = $("#ins-sup-nit");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Insertar NIT - Validacion para evitar caracteres acentuados
$("#ins-sup-nit").keyup(function(){              
    var ta = $("#ins-sup-nit");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar NIT - Validacion para evitar espacios en blanco
$("#ins-sup-nit").keyup(function(){              
    var ta = $("#ins-sup-nit");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Insertar NIT - Validacion para evitar comillas
$("#ins-sup-nit").keyup(function(){              
    var ta = $("#ins-sup-nit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Insertar Razon Social del Proveedor
// Insertar Razon Social - Validacion para evitar numeros pequeños
$("#ins-sup-nom").keyup(function(){              
    var ta = $("#ins-sup-nom");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Razon Social - Validacion para evitar caracteres acentuados
$("#ins-sup-nom").keyup(function(){              
    var ta = $("#ins-sup-nom");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Razon Social - Validacion para evitar caracteres
$("#ins-sup-nom").keyup(function(){              
    var ta = $("#ins-sup-nom");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Razon Social - Validacion para evitar las comillas
$("#ins-sup-nom").keyup(function(){              
    var ta = $("#ins-sup-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Insertar Producto / Servicio del Proveedor
// Insertar PD Proveedor - Funcion que solo permite Texto dentro del Input
$("#ins-sup-pro-ser").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Insertar PD Proveedor - Validacion para evitar numeros pequeños
$("#ins-sup-pro-ser").keyup(function(){              
    var ta = $("#ins-sup-pro-ser");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar PD Proveedor - Validacion para evitar numeros en los input de tipo texto
$("#ins-sup-pro-ser").keyup(function(){              
    var ta = $("#ins-sup-pro-ser");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar PD Proveedor - Validacion para evitar caracteres acentuados
$("#ins-sup-pro-ser").keyup(function(){              
    var ta = $("#ins-sup-pro-ser");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar PD Proveedor - Validacion para evitar caracteres
$("#ins-sup-pro-ser").keyup(function(){              
    var ta = $("#ins-sup-pro-ser");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar PD Proveedor - Validacion para evitar las comillas
$("#ins-sup-pro-ser").keyup(function(){              
    var ta = $("#ins-sup-pro-ser");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Insertar Correo del Proveedor
// Insertar Correo Proveedor - Validacion para evitar espacios en blanco
$("#ins-sup-cor").keyup(function(){              
    var ta = $("#ins-sup-cor");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
// Insertar Correo Proveedor - Validacion para evitar numeros pequeños
$("#ins-sup-cor").keyup(function(){              
    var ta = $("#ins-sup-cor");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Proveedor -Validacion para evitar caracteres acentuados
$("#ins-sup-cor").keyup(function(){              
    var ta = $("#ins-sup-cor");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Proveedor - Validacion para evitar caracteres
$("#ins-sup-cor").keyup(function(){              
    var ta = $("#ins-sup-cor");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Proveedor - Validacion para permitir caracteres de correo
$("#ins-sup-cor").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Insertar Telefono del Proveedor

// Insertar Telefono Proveedor - Validacion para evitar caracteres acentuados
$("#ins-sup-tel").keyup(function(){              
    var ta = $("#ins-sup-tel");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Proveedor - Validacion para evitar letras ñÑ
$("#ins-sup-tel").keyup(function(){              
    var ta = $("#ins-sup-tel");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Proveedor - Validacion para evitar caracteres acentuados
$("#ins-sup-tel").keyup(function(){              
    var ta = $("#ins-sup-tel");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Proveedor -  Validacion para evitar numeros pequeños
$("#ins-sup-tel").keyup(function(){              
    var ta = $("#ins-sup-tel");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Proveedor - Validacion para evitar las comillas
$("#ins-sup-tel").keyup(function(){              
    var ta = $("#ins-sup-tel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Celular del Proveedor
// Insertar Celular Proveedor - Validacion para evitar caracteres acentuados
$("#ins-sup-cel").keyup(function(){              
    var ta = $("#ins-sup-cel");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Proveedor - Validacion para evitar espacios en blanco
$("#ins-sup-cel").keyup(function(){              
    var ta = $("#ins-sup-cel");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Insertar Celular Proveedor - Validacion para evitar letras
$("#ins-sup-cel").keyup(function(){              
    var ta = $("#ins-sup-cel");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Proveedor - Validacion para evitar caracteres
$("#ins-sup-cel").keyup(function(){              
    var ta = $("#ins-sup-cel");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Proveedor - Validacion para evitar numeros en los input de tipo texto
$("#ins-sup-cel").keyup(function(){              
    var ta = $("#ins-sup-cel");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Proveedor - Validacion para evitar las comillas
$("#ins-sup-cel").keyup(function(){              
    var ta = $("#ins-sup-cel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Ciudad del Proveedor
// Insertar Ciudad Proveedor -  Funcion que solo permite Texto dentro del Input
$("#ins-sup-cit").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Insertar Ciudad Proveedor - Validacion para evitar numeros en los input de tipo texto
$("#ins-sup-cit").keyup(function(){              
    var ta = $("#ins-sup-cit");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Ciudad Proveedor - Validacion para evitar numeros pequeños
$("#ins-sup-cit").keyup(function(){              
    var ta = $("#ins-sup-cit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Ciudad Proveedor - Validacion para evitar caracteres acentuados
$("#ins-sup-cit").keyup(function(){              
    var ta = $("#ins-sup-cit");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Ciudad Proveedor - Validacion para evitar caracteres
$("#ins-sup-cit").keyup(function(){              
    var ta = $("#ins-sup-cit");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Ciudad Proveedor - Validacion para evitar las comillas
$("#ins-sup-cit").keyup(function(){              
    var ta = $("#ins-sup-cit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Insertar Direccion del Proveedor
// Insertar Direccion Proveedor - Validacion para permitir caracteres de direcciones
$("#ins-sup-dir").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Insertar Direccion Proveedor - Validacion para evitar numeros pequeños
$("#ins-sup-dir").keyup(function(){              
    var ta = $("#ins-sup-dir");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Direccion Proveedor - Validacion para evitar caracteres acentuados
$("#ins-sup-dir").keyup(function(){              
    var ta = $("#ins-sup-dir");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Direccion Proveedor - Validacion para evitar caracteres
$("#ins-sup-dir").keyup(function(){              
    var ta = $("#ins-sup-dir");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Direccion Proveedor - Validacion para evitar las comillas
$("#ins-sup-dir").keyup(function(){              
    var ta = $("#ins-sup-dir");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Nombre del Encargado del Proveedor
// Insertar Nombre Encargado - Funcion que solo permite Texto dentro del Input
$("#ins-sup-nom-enc").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Insertar Nombre Encargado - Validacion para evitar numeros en los input de tipo texto
$("#ins-sup-nom-enc").keyup(function(){              
    var ta = $("#ins-sup-nom-enc");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Nombre Encargado - Validacion para evitar numeros pequeños
$("#ins-sup-nom-enc").keyup(function(){              
    var ta = $("#ins-sup-nom-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Nombre Encargado - Validacion para evitar caracteres acentuados
$("#ins-sup-nom-enc").keyup(function(){              
    var ta = $("#ins-sup-nom-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Nombre Encargado - Validacion para evitar caracteres
$("#ins-sup-nom-enc").keyup(function(){              
    var ta = $("#ins-sup-nom-enc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Nombre Encargado - Validacion para evitar las comillas
$("#ins-sup-nom-enc").keyup(function(){              
    var ta = $("#ins-sup-nom-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Correo del Encargado
// Insertar Correo Encargado - Validacion para evitar espacios en blanco
$("#ins-sup-cor-enc").keyup(function(){              
    var ta = $("#ins-sup-cor-enc");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado - Validacion para evitar numeros pequeños
$("#ins-sup-cor-enc").keyup(function(){              
    var ta = $("#ins-sup-cor-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado -Validacion para evitar caracteres acentuados
$("#ins-sup-cor-enc").keyup(function(){              
    var ta = $("#ins-sup-cor-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado - Validacion para evitar caracteres
$("#ins-sup-cor-enc").keyup(function(){              
    var ta = $("#ins-sup-cor-enc");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado - Validacion para permitir caracteres de correo
$("#ins-sup-cor-enc").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Insertar Telefono del Encargado

// Insertar Telefono Encargado - Validacion para evitar caracteres acentuados
$("#ins-sup-tel-enc").keyup(function(){              
    var ta = $("#ins-sup-tel-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado - Validacion para evitar letras ñÑ
$("#ins-sup-tel-enc").keyup(function(){              
    var ta = $("#ins-sup-tel-enc");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado - Validacion para evitar caracteres acentuados
$("#ins-sup-tel-enc").keyup(function(){              
    var ta = $("#ins-sup-tel-enc");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado -  Validacion para evitar numeros pequeños
$("#ins-sup-tel-enc").keyup(function(){              
    var ta = $("#ins-sup-tel-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado - Validacion para evitar las comillas
$("#ins-sup-tel-enc").keyup(function(){              
    var ta = $("#ins-sup-tel-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Celular del Encargado
// Insertar Celular Encargado - Validacion para evitar caracteres acentuados
$("#ins-sup-cel-enc").keyup(function(){              
    var ta = $("#ins-sup-cel-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar espacios en blanco
$("#ins-sup-cel-enc").keyup(function(){              
    var ta = $("#ins-sup-cel-enc");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Insertar Celular Encargado - Validacion para evitar letras
$("#ins-sup-cel-enc").keyup(function(){              
    var ta = $("#ins-sup-cel-enc");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar caracteres
$("#ins-sup-cel-enc").keyup(function(){              
    var ta = $("#ins-sup-cel-enc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar numeros en los input de tipo texto
$("#ins-sup-cel-enc").keyup(function(){              
    var ta = $("#ins-sup-cel-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar las comillas
$("#ins-sup-cel-enc").keyup(function(){              
    var ta = $("#ins-sup-cel-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 

//------------------------------------------------------------------------



// Actualizar NIT del Proveedor
// Actualizar NIT - Validacion para evitar caracteres
$("#upd-sup-nit").keyup(function(){              
    var ta = $("#upd-sup-nit");
    letras = ta.val().replace(/[|!"#$%&/()=-¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Actualizar NIT - Validacion para evitar numeros pequeños
$("#upd-sup-nit").keyup(function(){              
    var ta = $("#upd-sup-nit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Actualizar NIT - Validacion para evitar letras
$("#upd-sup-nit").keyup(function(){              
    var ta = $("#upd-sup-nit");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Actualizar NIT - Validacion para evitar caracteres acentuados
$("#upd-sup-nit").keyup(function(){              
    var ta = $("#upd-sup-nit");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar NIT - Validacion para evitar espacios en blanco
$("#upd-sup-nit").keyup(function(){              
    var ta = $("#upd-sup-nit");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Actualizar NIT - Validacion para evitar comillas
$("#upd-sup-nit").keyup(function(){              
    var ta = $("#upd-sup-nit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar Razon Social del Proveedor
// Actualizar Razon Social - Validacion para evitar numeros pequeños
$("#upd-sup-nom").keyup(function(){              
    var ta = $("#upd-sup-nom");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Razon Social - Validacion para evitar caracteres acentuados
$("#upd-sup-nom").keyup(function(){              
    var ta = $("#upd-sup-nom");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Razon Social - Validacion para evitar caracteres
$("#upd-sup-nom").keyup(function(){              
    var ta = $("#upd-sup-nom");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Razon Social - Validacion para evitar las comillas
$("#upd-sup-nom").keyup(function(){              
    var ta = $("#upd-sup-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar Producto / Servicio del Proveedor
// Actualizar PD Proveedor - Funcion que solo permite Texto dentro del Input
$("#upd-sup-pro-ser").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Actualizar PD Proveedor - Validacion para evitar numeros pequeños
$("#upd-sup-pro-ser").keyup(function(){              
    var ta = $("#upd-sup-pro-ser");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar PD Proveedor - Validacion para evitar numeros en los input de tipo texto
$("#upd-sup-pro-ser").keyup(function(){              
    var ta = $("#upd-sup-pro-ser");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar PD Proveedor - Validacion para evitar caracteres acentuados
$("#upd-sup-pro-ser").keyup(function(){              
    var ta = $("#upd-sup-pro-ser");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar PD Proveedor - Validacion para evitar caracteres
$("#upd-sup-pro-ser").keyup(function(){              
    var ta = $("#upd-sup-pro-ser");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar PD Proveedor - Validacion para evitar las comillas
$("#upd-sup-pro-ser").keyup(function(){              
    var ta = $("#upd-sup-pro-ser");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar Correo del Proveedor
// Actualizar Correo Proveedor - Validacion para evitar espacios en blanco
$("#upd-sup-cor").keyup(function(){              
    var ta = $("#upd-sup-cor");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
// Actualizar Correo Proveedor - Validacion para evitar numeros pequeños
$("#upd-sup-cor").keyup(function(){              
    var ta = $("#upd-sup-cor");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo Proveedor -Validacion para evitar caracteres acentuados
$("#upd-sup-cor").keyup(function(){              
    var ta = $("#upd-sup-cor");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo Proveedor - Validacion para evitar caracteres
$("#upd-sup-cor").keyup(function(){              
    var ta = $("#upd-sup-cor");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo Proveedor - Validacion para permitir caracteres de correo
$("#upd-sup-cor").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Actualizar Telefono del Proveedor

// Actualizar Telefono Proveedor - Validacion para evitar caracteres acentuados
$("#upd-sup-tel").keyup(function(){              
    var ta = $("#upd-sup-tel");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Proveedor - Validacion para evitar letras ñÑ
$("#upd-sup-tel").keyup(function(){              
    var ta = $("#upd-sup-tel");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Proveedor - Validacion para evitar caracteres acentuados
$("#upd-sup-tel").keyup(function(){              
    var ta = $("#upd-sup-tel");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Proveedor -  Validacion para evitar numeros pequeños
$("#upd-sup-tel").keyup(function(){              
    var ta = $("#upd-sup-tel");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Proveedor - Validacion para evitar las comillas
$("#upd-sup-tel").keyup(function(){              
    var ta = $("#upd-sup-tel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Celular del Proveedor
// Actualizar Celular Proveedor - Validacion para evitar caracteres acentuados
$("#upd-sup-cel").keyup(function(){              
    var ta = $("#upd-sup-cel");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Proveedor - Validacion para evitar espacios en blanco
$("#upd-sup-cel").keyup(function(){              
    var ta = $("#upd-sup-cel");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Actualizar Celular Proveedor - Validacion para evitar letras
$("#upd-sup-cel").keyup(function(){              
    var ta = $("#upd-sup-cel");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Proveedor - Validacion para evitar caracteres
$("#upd-sup-cel").keyup(function(){              
    var ta = $("#upd-sup-cel");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Proveedor - Validacion para evitar numeros en los input de tipo texto
$("#upd-sup-cel").keyup(function(){              
    var ta = $("#upd-sup-cel");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Proveedor - Validacion para evitar las comillas
$("#upd-sup-cel").keyup(function(){              
    var ta = $("#upd-sup-cel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Ciudad del Proveedor
// Actualizar Ciudad Proveedor -  Funcion que solo permite Texto dentro del Input
$("#upd-sup-cit").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Actualizar Ciudad Proveedor - Validacion para evitar numeros en los input de tipo texto
$("#upd-sup-cit").keyup(function(){              
    var ta = $("#upd-sup-cit");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Ciudad Proveedor - Validacion para evitar numeros pequeños
$("#upd-sup-cit").keyup(function(){              
    var ta = $("#upd-sup-cit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Ciudad Proveedor - Validacion para evitar caracteres acentuados
$("#upd-sup-cit").keyup(function(){              
    var ta = $("#upd-sup-cit");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Ciudad Proveedor - Validacion para evitar caracteres
$("#upd-sup-cit").keyup(function(){              
    var ta = $("#upd-sup-cit");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Ciudad Proveedor - Validacion para evitar las comillas
$("#upd-sup-cit").keyup(function(){              
    var ta = $("#upd-sup-cit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar Direccion del Proveedor
// Actualizar Direccion Proveedor - Validacion para permitir caracteres de direcciones
$("#upd-sup-dir").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Actualizar Direccion Proveedor - Validacion para evitar numeros pequeños
$("#upd-sup-dir").keyup(function(){              
    var ta = $("#upd-sup-dir");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Direccion Proveedor - Validacion para evitar caracteres acentuados
$("#upd-sup-dir").keyup(function(){              
    var ta = $("#upd-sup-dir");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Direccion Proveedor - Validacion para evitar caracteres
$("#upd-sup-dir").keyup(function(){              
    var ta = $("#upd-sup-dir");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Direccion Proveedor - Validacion para evitar las comillas
$("#upd-sup-dir").keyup(function(){              
    var ta = $("#upd-sup-dir");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Nombre del Encargado del Proveedor
// Actualizar Nombre Encargado - Funcion que solo permite Texto dentro del Input
$("#upd-sup-nom-enc").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Actualizar Nombre Encargado - Validacion para evitar numeros en los input de tipo texto
$("#upd-sup-nom-enc").keyup(function(){              
    var ta = $("#upd-sup-nom-enc");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Nombre Encargado - Validacion para evitar numeros pequeños
$("#upd-sup-nom-enc").keyup(function(){              
    var ta = $("#upd-sup-nom-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Nombre Encargado - Validacion para evitar caracteres acentuados
$("#upd-sup-nom-enc").keyup(function(){              
    var ta = $("#upd-sup-nom-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Nombre Encargado - Validacion para evitar caracteres
$("#upd-sup-nom-enc").keyup(function(){              
    var ta = $("#upd-sup-nom-enc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Nombre Encargado - Validacion para evitar las comillas
$("#upd-sup-nom-enc").keyup(function(){              
    var ta = $("#upd-sup-nom-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 

// *************

// Insertar Correo del Encargado
// Insertar Correo Encargado - Validacion para evitar espacios en blanco
$("#upd-sup-cor-enc").keyup(function(){              
    var ta = $("#upd-sup-cor-enc");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado - Validacion para evitar numeros pequeños
$("#upd-sup-cor-enc").keyup(function(){              
    var ta = $("#upd-sup-cor-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado -Validacion para evitar caracteres acentuados
$("#upd-sup-cor-enc").keyup(function(){              
    var ta = $("#upd-sup-cor-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado - Validacion para evitar caracteres
$("#upd-sup-cor-enc").keyup(function(){              
    var ta = $("#upd-sup-cor-enc");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado - Validacion para permitir caracteres de correo
$("#upd-sup-cor-enc").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Insertar Telefono del Encargado

// Insertar Telefono Encargado - Validacion para evitar caracteres acentuados
$("#upd-sup-tel-enc").keyup(function(){              
    var ta = $("#upd-sup-tel-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado - Validacion para evitar letras ñÑ
$("#upd-sup-tel-enc").keyup(function(){              
    var ta = $("#upd-sup-tel-enc");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado - Validacion para evitar caracteres acentuados
$("#upd-sup-tel-enc").keyup(function(){              
    var ta = $("#upd-sup-tel-enc");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado -  Validacion para evitar numeros pequeños
$("#upd-sup-tel-enc").keyup(function(){              
    var ta = $("#upd-sup-tel-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado - Validacion para evitar las comillas
$("#upd-sup-tel-enc").keyup(function(){              
    var ta = $("#upd-sup-tel-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Celular del Encargado
// Insertar Celular Encargado - Validacion para evitar caracteres acentuados
$("#upd-sup-cel-enc").keyup(function(){              
    var ta = $("#upd-sup-cel-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar espacios en blanco
$("#upd-sup-cel-enc").keyup(function(){              
    var ta = $("#upd-sup-cel-enc");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Insertar Celular Encargado - Validacion para evitar letras
$("#upd-sup-cel-enc").keyup(function(){              
    var ta = $("#upd-sup-cel-enc");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar caracteres
$("#upd-sup-cel-enc").keyup(function(){              
    var ta = $("#upd-sup-cel-enc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar numeros en los input de tipo texto
$("#upd-sup-cel-enc").keyup(function(){              
    var ta = $("#upd-sup-cel-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar las comillas
$("#upd-sup-cel-enc").keyup(function(){              
    var ta = $("#upd-sup-cel-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 