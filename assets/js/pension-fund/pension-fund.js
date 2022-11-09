// Registrar Fondo de Pensión Usando Ajax
function insertPensionFundAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let nit       = $('#ins-fon-pen-nit').val();
    let nombre    = $('#ins-fon-pen-nom').val();
    let correo    = $('#ins-fon-pen-cor').val();
    let ciudad    = $('#ins-fon-pen-cit').val();
    let direccion = $('#ins-fon-pen-dir').val();

    // Condicion para evitar campos vacios
    if (nit.length == 0 || nombre.length == 0 || correo.length == 0  || ciudad.length == 0 || direccion.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        validationAlert("¡Algunos campos no pueden quedar vacíos!","#ffc107");
    }else{
        // Poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-insert-pension-fund').serialize();
        // Almacenamos dentro de una variable un parametro que pueda recibir el controlador para que ejecute la funcion
        let accion = "&insert_pension_fund=1";
        // Enviamos la informacion del formulario + la variable que recibirá el controlador
        dataString = dataString + accion;  
        $.ajax({
            // Realiza una petición POST a una URL provista.
            method:"POST",
            // Ruta en donde se enviará los datos, url en donde hacemos la peticion ajax
            url: 'index.php?ruta=fondo-de-pension',
            // Si todo sale bien en el success, el data es todo el contenido html que tiene el index
            data:dataString,
            // Establece una función a ejecutar si la petición a sido satisfactoria
            success: function(){
                // Load es cargar, toma el id de la tabla y vas a cargar nuevamente esta tabla, es un refrescar la tabla
                $('#load').load('index.php?ruta=fondo-de-pension #load',function(){
                // Aqui hacemos una funcion que lo que haces es llamarme nuevamente a la tabla cuando todo lo anterior se ejecute
                    genericTable();
                });
                // Alerta de sweetalert
                crudAlert("success","¡Fondo de pensión registrado con éxito!","#28a745");
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

//Funcion para ver detalle del Fondo de Pensión
function detailPensionFund(det_fon_pen_id,det_fon_pen_nit,det_fon_pen_nom,det_fon_pen_cor,det_fon_pen_tel,det_fon_pen_cel,det_fon_pen_cit,det_fon_pen_dir,det_fon_pen_nom_enc,det_fon_pen_cor_enc,det_fon_pen_tel_enc,det_fon_pen_cel_enc,det_fon_pen_est,det_fon_pen_fec_reg) {
    // .val() sirve para obtener el valor de un elemento
    $('#modal-detail-pension-fund .modal-body .det-fon-pen-id').val(det_fon_pen_id);
    $('#modal-detail-pension-fund .modal-body .det-fon-pen-nit').val(det_fon_pen_nit);
    $('#modal-detail-pension-fund .modal-body .det-fon-pen-nom').val(det_fon_pen_nom);
    $('#modal-detail-pension-fund .modal-body .det-fon-pen-cor').val(det_fon_pen_cor);
    $('#modal-detail-pension-fund .modal-body .det-fon-pen-tel').val(det_fon_pen_tel);
    $('#modal-detail-pension-fund .modal-body .det-fon-pen-cel').val(det_fon_pen_cel);
    $('#modal-detail-pension-fund .modal-body .det-fon-pen-cit').val(det_fon_pen_cit);
    $('#modal-detail-pension-fund .modal-body .det-fon-pen-dir').val(det_fon_pen_dir);
    $('#modal-detail-pension-fund .modal-body .det-fon-pen-nom-enc').val(det_fon_pen_nom_enc);
    $('#modal-detail-pension-fund .modal-body .det-fon-pen-cor-enc').val(det_fon_pen_cor_enc);
    $('#modal-detail-pension-fund .modal-body .det-fon-pen-tel-enc').val(det_fon_pen_tel_enc);
    $('#modal-detail-pension-fund .modal-body .det-fon-pen-cel-enc').val(det_fon_pen_cel_enc);
    $('#modal-detail-pension-fund .modal-body .det-fon-pen-est').val(det_fon_pen_est);
    $('#modal-detail-pension-fund .modal-body .det-fon-pen-fec-reg').val(det_fon_pen_fec_reg);
}

// Funcion para Pintar los Datos del Fondo de Pensión antes de Actualizar
function updatePensionFund(upd_fon_pen_id,upd_fon_pen_nit,upd_fon_pen_nom,upd_fon_pen_cor,upd_fon_pen_tel,upd_fon_pen_cel,upd_fon_pen_cit,upd_fon_pen_dir,upd_fon_pen_nom_enc,upd_fon_pen_cor_enc,upd_fon_pen_tel_enc,upd_fon_pen_cel_enc){
    $('#modal-update-pension-fund .modal-body .upd-fon-pen-id').val(upd_fon_pen_id);
    $('#modal-update-pension-fund .modal-body .upd-fon-pen-nit').val(upd_fon_pen_nit);
    $('#modal-update-pension-fund .modal-body .upd-fon-pen-nom').val(upd_fon_pen_nom);
    $('#modal-update-pension-fund .modal-body .upd-fon-pen-cor').val(upd_fon_pen_cor);
    $('#modal-update-pension-fund .modal-body .upd-fon-pen-tel').val(upd_fon_pen_tel);
    $('#modal-update-pension-fund .modal-body .upd-fon-pen-cel').val(upd_fon_pen_cel);
    $('#modal-update-pension-fund .modal-body .upd-fon-pen-cit').val(upd_fon_pen_cit);
    $('#modal-update-pension-fund .modal-body .upd-fon-pen-dir').val(upd_fon_pen_dir);
    $('#modal-update-pension-fund .modal-body .upd-fon-pen-nom-enc').val(upd_fon_pen_nom_enc);
    $('#modal-update-pension-fund .modal-body .upd-fon-pen-cor-enc').val(upd_fon_pen_cor_enc);
    $('#modal-update-pension-fund .modal-body .upd-fon-pen-tel-enc').val(upd_fon_pen_tel_enc);
    $('#modal-update-pension-fund .modal-body .upd-fon-pen-cel-enc').val(upd_fon_pen_cel_enc);
}

// Funcion para Actualizar los Datos del Fondo de Pensión usando Ajax
function updatePensionFundAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let nit       = $('#upd-fon-pen-nit').val();
    let nombre    = $('#upd-fon-pen-nom').val();
    let correo    = $('#upd-fon-pen-cor').val();
    let ciudad    = $('#upd-fon-pen-cit').val();
    let direccion = $('#upd-fon-pen-dir').val();

    // Condicion para evitar campos vacios
    if (nit.length == 0 || nombre.length == 0 || correo.length == 0  || ciudad.length == 0 || direccion.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        validationAlert("¡Algunos campos no pueden quedar vacíos!","#ffc107");
    }else{
        // Poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-update-pension-fund').serialize();
        let accion = "&update_pension_fund=1";
        dataString = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=fondo-de-pension',
            data:dataString,
            success: function(){
                $('#load').load('index.php?ruta=fondo-de-pension #load',function(){
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

// Funcion para Pintar el ID del Fondo de Pensión antes de Eliminarla
function deletePensionFund(del_fon_pen_id,del_fon_pen_nom){
    $('#modal-delete-pension-fund .modal-body .del-fon-pen-id').val(del_fon_pen_id);
    $('#modal-delete-pension-fund .modal-body .del-fon-pen-nom').text(del_fon_pen_nom);
}

// Funcion para Eliminar un Fondo de Pensión usando Ajax
function deletePensionFundAjax(){
    let dataString = $('#form-delete-pension-fund').serialize();
    let accion = "&delete_pension_fund=1";
    dataString = dataString + accion;  
    $.ajax({
        method:"POST",
        url: 'index.php?ruta=fondo-de-pension',
        data:dataString,
            success: function(){
            $('#load').load('index.php?ruta=fondo-de-pension #load',function(){
                genericTable();
            });
            crudAlert("success","¡Fondo de pensión eliminado con éxito!","#28a745");
        },
        error:function(){
            genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
        }
    });
}


// Validaciones de los Formularios

// Insertar NIT Fondo de Pension
// Insertar NIT - Validacion para evitar caracteres
$("#ins-fon-pen-nit").keyup(function(){              
    var ta = $("#ins-fon-pen-nit");
    letras = ta.val().replace(/[|!"#$%&/()=-¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Insertar NIT - Validacion para evitar numeros pequeños
$("#ins-fon-pen-nit").keyup(function(){              
    var ta = $("#ins-fon-pen-nit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Insertar NIT - Validacion para evitar letras
$("#ins-fon-pen-nit").keyup(function(){              
    var ta = $("#ins-fon-pen-nit");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Insertar NIT - Validacion para evitar caracteres acentuados
$("#ins-fon-pen-nit").keyup(function(){              
    var ta = $("#ins-fon-pen-nit");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar NIT - Validacion para evitar espacios en blanco
$("#ins-fon-pen-nit").keyup(function(){              
    var ta = $("#ins-fon-pen-nit");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Insertar NIT - Validacion para evitar comillas
$("#ins-fon-pen-nit").keyup(function(){              
    var ta = $("#ins-fon-pen-nit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Insertar Razon Social Fondo de Pension
// Insertar Razon Social - Validacion para evitar numeros pequeños
$("#ins-fon-pen-nom").keyup(function(){              
    var ta = $("#ins-fon-pen-nom");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Razon Social - Validacion para evitar caracteres acentuados
$("#ins-fon-pen-nom").keyup(function(){              
    var ta = $("#ins-fon-pen-nom");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Razon Social - Validacion para evitar caracteres
$("#ins-fon-pen-nom").keyup(function(){              
    var ta = $("#ins-fon-pen-nom");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Razon Social - Validacion para evitar las comillas
$("#ins-fon-pen-nom").keyup(function(){              
    var ta = $("#ins-fon-pen-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Insertar Correo Fondo de Pension
// Insertar Correo Fondo de Pension - Validacion para evitar espacios en blanco
$("#ins-fon-pen-cor").keyup(function(){              
    var ta = $("#ins-fon-pen-cor");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
// Insertar Correo Fondo de Pension - Validacion para evitar numeros pequeños
$("#ins-fon-pen-cor").keyup(function(){              
    var ta = $("#ins-fon-pen-cor");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Fondo de Pension -Validacion para evitar caracteres acentuados
$("#ins-fon-pen-cor").keyup(function(){              
    var ta = $("#ins-fon-pen-cor");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Fondo de Pension - Validacion para evitar caracteres
$("#ins-fon-pen-cor").keyup(function(){              
    var ta = $("#ins-fon-pen-cor");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Fondo de Pension - Validacion para permitir caracteres de correo
$("#ins-fon-pen-cor").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Insertar Telefono Fondo de Pension
// Insertar Telefono Fondo de Pension - Validacion para evitar caracteres acentuados
$("#ins-fon-pen-tel").keyup(function(){              
    var ta = $("#ins-fon-pen-tel");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Fondo de Pension - Validacion para evitar letras ñÑ
$("#ins-fon-pen-tel").keyup(function(){              
    var ta = $("#ins-fon-pen-tel");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Fondo de Pension - Validacion para evitar caracteres acentuados
$("#ins-fon-pen-tel").keyup(function(){              
    var ta = $("#ins-fon-pen-tel");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Fondo de Pension -  Validacion para evitar numeros pequeños
$("#ins-fon-pen-tel").keyup(function(){              
    var ta = $("#ins-fon-pen-tel");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Fondo de Pension - Validacion para evitar las comillas
$("#ins-fon-pen-tel").keyup(function(){              
    var ta = $("#ins-fon-pen-tel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Celular del Fondo de Pension
// Insertar Celular Fondo de Pension - Validacion para evitar caracteres acentuados
$("#ins-fon-pen-cel").keyup(function(){              
    var ta = $("#ins-fon-pen-cel");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Fondo de Pension - Validacion para evitar espacios en blanco
$("#ins-fon-pen-cel").keyup(function(){              
    var ta = $("#ins-fon-pen-cel");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Insertar Celular Fondo de Pension - Validacion para evitar letras
$("#ins-fon-pen-cel").keyup(function(){              
    var ta = $("#ins-fon-pen-cel");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Fondo de Pension - Validacion para evitar caracteres
$("#ins-fon-pen-cel").keyup(function(){              
    var ta = $("#ins-fon-pen-cel");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Fondo de Pension - Validacion para evitar numeros en los input de tipo texto
$("#ins-fon-pen-cel").keyup(function(){              
    var ta = $("#ins-fon-pen-cel");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Fondo de Pension - Validacion para evitar las comillas
$("#ins-fon-pen-cel").keyup(function(){              
    var ta = $("#ins-fon-pen-cel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Ciudad del Fondo de Pension
// Insertar Ciudad Fondo de Pension -  Funcion que solo permite Texto dentro del Input
$("#ins-fon-pen-cit").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Insertar Ciudad Fondo de Pension - Validacion para evitar numeros en los input de tipo texto
$("#ins-fon-pen-cit").keyup(function(){              
    var ta = $("#ins-fon-pen-cit");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Ciudad Fondo de Pension - Validacion para evitar numeros pequeños
$("#ins-fon-pen-cit").keyup(function(){              
    var ta = $("#ins-fon-pen-cit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Ciudad Fondo de Pension - Validacion para evitar caracteres acentuados
$("#ins-fon-pen-cit").keyup(function(){              
    var ta = $("#ins-fon-pen-cit");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Ciudad Fondo de Pension - Validacion para evitar caracteres
$("#ins-fon-pen-cit").keyup(function(){              
    var ta = $("#ins-fon-pen-cit");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Ciudad Fondo de Pension - Validacion para evitar las comillas
$("#ins-fon-pen-cit").keyup(function(){              
    var ta = $("#ins-fon-pen-cit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Insertar Direccion del Fondo de Pension
// Insertar Direccion Fondo de Pension - Validacion para permitir caracteres de direcciones
$("#ins-fon-pen-dir").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Insertar Direccion Fondo de Pension - Validacion para evitar numeros pequeños
$("#ins-fon-pen-dir").keyup(function(){              
    var ta = $("#ins-fon-pen-dir");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Direccion Fondo de Pension - Validacion para evitar caracteres acentuados
$("#ins-fon-pen-dir").keyup(function(){              
    var ta = $("#ins-fon-pen-dir");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Direccion Fondo de Pension - Validacion para evitar caracteres
$("#ins-fon-pen-dir").keyup(function(){              
    var ta = $("#ins-fon-pen-dir");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Direccion Fondo de Pension - Validacion para evitar las comillas
$("#ins-fon-pen-dir").keyup(function(){              
    var ta = $("#ins-fon-pen-dir");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Nombre del Encargado del Fondo de Pension
// Insertar Nombre Encargado - Funcion que solo permite Texto dentro del Input
$("#ins-fon-pen-nom-enc").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Insertar Nombre Encargado - Validacion para evitar numeros en los input de tipo texto
$("#ins-fon-pen-nom-enc").keyup(function(){              
    var ta = $("#ins-fon-pen-nom-enc");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Nombre Encargado - Validacion para evitar numeros pequeños
$("#ins-fon-pen-nom-enc").keyup(function(){              
    var ta = $("#ins-fon-pen-nom-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Nombre Encargado - Validacion para evitar caracteres acentuados
$("#ins-fon-pen-nom-enc").keyup(function(){              
    var ta = $("#ins-fon-pen-nom-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Nombre Encargado - Validacion para evitar caracteres
$("#ins-fon-pen-nom-enc").keyup(function(){              
    var ta = $("#ins-fon-pen-nom-enc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Nombre Encargado - Validacion para evitar las comillas
$("#ins-fon-pen-nom-enc").keyup(function(){              
    var ta = $("#ins-fon-pen-nom-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Correo del Encargado
// Insertar Correo Encargado - Validacion para evitar espacios en blanco
$("#ins-fon-pen-cor-enc").keyup(function(){              
    var ta = $("#ins-fon-pen-cor-enc");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado - Validacion para evitar numeros pequeños
$("#ins-fon-pen-cor-enc").keyup(function(){              
    var ta = $("#ins-fon-pen-cor-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado -Validacion para evitar caracteres acentuados
$("#ins-fon-pen-cor-enc").keyup(function(){              
    var ta = $("#ins-fon-pen-cor-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado - Validacion para evitar caracteres
$("#ins-fon-pen-cor-enc").keyup(function(){              
    var ta = $("#ins-fon-pen-cor-enc");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Correo Encargado - Validacion para permitir caracteres de correo
$("#ins-fon-pen-cor-enc").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Insertar Telefono del Encargado
// Insertar Telefono Encargado - Validacion para evitar caracteres acentuados
$("#ins-fon-pen-tel-enc").keyup(function(){              
    var ta = $("#ins-fon-pen-tel-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado - Validacion para evitar letras ñÑ
$("#ins-fon-pen-tel-enc").keyup(function(){              
    var ta = $("#ins-fon-pen-tel-enc");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado - Validacion para evitar caracteres acentuados
$("#ins-fon-pen-tel-enc").keyup(function(){              
    var ta = $("#ins-fon-pen-tel-enc");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado -  Validacion para evitar numeros pequeños
$("#ins-fon-pen-tel-enc").keyup(function(){              
    var ta = $("#ins-fon-pen-tel-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono Encargado - Validacion para evitar las comillas
$("#ins-fon-pen-tel-enc").keyup(function(){              
    var ta = $("#ins-fon-pen-tel-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar Celular del Encargado
// Insertar Celular Encargado - Validacion para evitar caracteres acentuados
$("#ins-fon-pen-cel-enc").keyup(function(){              
    var ta = $("#ins-fon-pen-cel-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar espacios en blanco
$("#ins-fon-pen-cel-enc").keyup(function(){              
    var ta = $("#ins-fon-pen-cel-enc");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Insertar Celular Encargado - Validacion para evitar letras
$("#ins-fon-pen-cel-enc").keyup(function(){              
    var ta = $("#ins-fon-pen-cel-enc");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar caracteres
$("#ins-fon-pen-cel-enc").keyup(function(){              
    var ta = $("#ins-fon-pen-cel-enc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar numeros en los input de tipo texto
$("#ins-fon-pen-cel-enc").keyup(function(){              
    var ta = $("#ins-fon-pen-cel-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Celular Encargado - Validacion para evitar las comillas
$("#ins-fon-pen-cel-enc").keyup(function(){              
    var ta = $("#ins-fon-pen-cel-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 



// Actualizar NIT del Fondo de Pension
// Actualizar NIT - Validacion para evitar caracteres
$("#upd-fon-pen-nit").keyup(function(){              
    var ta = $("#upd-fon-pen-nit");
    letras = ta.val().replace(/[|!"#$%&/()=-¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Actualizar NIT - Validacion para evitar numeros pequeños
$("#upd-fon-pen-nit").keyup(function(){              
    var ta = $("#upd-fon-pen-nit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Actualizar NIT - Validacion para evitar letras
$("#upd-fon-pen-nit").keyup(function(){              
    var ta = $("#upd-fon-pen-nit");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Actualizar NIT - Validacion para evitar caracteres acentuados
$("#upd-fon-pen-nit").keyup(function(){              
    var ta = $("#upd-fon-pen-nit");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar NIT - Validacion para evitar espacios en blanco
$("#upd-fon-pen-nit").keyup(function(){              
    var ta = $("#upd-fon-pen-nit");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Actualizar NIT - Validacion para evitar comillas
$("#upd-fon-pen-nit").keyup(function(){              
    var ta = $("#upd-fon-pen-nit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar Razon Social del Fondo de Pension
// Actualizar Razon Social - Validacion para evitar numeros pequeños
$("#upd-fon-pen-nom").keyup(function(){              
    var ta = $("#upd-fon-pen-nom");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
});  
// Actualizar Razon Social - Validacion para evitar caracteres acentuados
$("#upd-fon-pen-nom").keyup(function(){              
    var ta = $("#upd-fon-pen-nom");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Razon Social - Validacion para evitar caracteres
$("#upd-fon-pen-nom").keyup(function(){              
    var ta = $("#upd-fon-pen-nom");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Razon Social - Validacion para evitar las comillas
$("#upd-fon-pen-nom").keyup(function(){              
    var ta = $("#upd-fon-pen-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar Correo del Fondo de Pension
// Actualizar Correo Fondo de Pension - Validacion para evitar espacios en blanco
$("#upd-fon-pen-cor").keyup(function(){              
    var ta = $("#upd-fon-pen-cor");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
// Actualizar Correo Fondo de Pension - Validacion para evitar numeros pequeños
$("#upd-fon-pen-cor").keyup(function(){              
    var ta = $("#upd-fon-pen-cor");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo Fondo de Pension -Validacion para evitar caracteres acentuados
$("#upd-fon-pen-cor").keyup(function(){              
    var ta = $("#upd-fon-pen-cor");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo Fondo de Pension - Validacion para evitar caracteres
$("#upd-fon-pen-cor").keyup(function(){              
    var ta = $("#upd-fon-pen-cor");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo Fondo de Pension - Validacion para permitir caracteres de correo
$("#upd-fon-pen-cor").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Actualizar Telefono del Fondo de Pension

// Actualizar Telefono Fondo de Pension - Validacion para evitar caracteres acentuados
$("#upd-fon-pen-tel").keyup(function(){              
    var ta = $("#upd-fon-pen-tel");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Fondo de Pension - Validacion para evitar letras ñÑ
$("#upd-fon-pen-tel").keyup(function(){              
    var ta = $("#upd-fon-pen-tel");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Fondo de Pension - Validacion para evitar caracteres acentuados
$("#upd-fon-pen-tel").keyup(function(){              
    var ta = $("#upd-fon-pen-tel");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Fondo de Pension -  Validacion para evitar numeros pequeños
$("#upd-fon-pen-tel").keyup(function(){              
    var ta = $("#upd-fon-pen-tel");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Fondo de Pension - Validacion para evitar las comillas
$("#upd-fon-pen-tel").keyup(function(){              
    var ta = $("#upd-fon-pen-tel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Celular del Fondo de Pension
// Actualizar Celular Fondo de Pension - Validacion para evitar caracteres acentuados
$("#upd-fon-pen-cel").keyup(function(){              
    var ta = $("#upd-fon-pen-cel");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Fondo de Pension - Validacion para evitar espacios en blanco
$("#upd-fon-pen-cel").keyup(function(){              
    var ta = $("#upd-fon-pen-cel");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Actualizar Celular Fondo de Pension - Validacion para evitar letras
$("#upd-fon-pen-cel").keyup(function(){              
    var ta = $("#upd-fon-pen-cel");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Fondo de Pension - Validacion para evitar caracteres
$("#upd-fon-pen-cel").keyup(function(){              
    var ta = $("#upd-fon-pen-cel");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Fondo de Pension - Validacion para evitar numeros en los input de tipo texto
$("#upd-fon-pen-cel").keyup(function(){              
    var ta = $("#upd-fon-pen-cel");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Fondo de Pension - Validacion para evitar las comillas
$("#upd-fon-pen-cel").keyup(function(){              
    var ta = $("#upd-fon-pen-cel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Ciudad del Fondo de Pension
// Actualizar Ciudad Fondo de Pension -  Funcion que solo permite Texto dentro del Input
$("#upd-fon-pen-cit").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Actualizar Ciudad Fondo de Pension - Validacion para evitar numeros en los input de tipo texto
$("#upd-fon-pen-cit").keyup(function(){              
    var ta = $("#upd-fon-pen-cit");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Ciudad Fondo de Pension - Validacion para evitar numeros pequeños
$("#upd-fon-pen-cit").keyup(function(){              
    var ta = $("#upd-fon-pen-cit");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Ciudad Fondo de Pension - Validacion para evitar caracteres acentuados
$("#upd-fon-pen-cit").keyup(function(){              
    var ta = $("#upd-fon-pen-cit");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Ciudad Fondo de Pension - Validacion para evitar caracteres
$("#upd-fon-pen-cit").keyup(function(){              
    var ta = $("#upd-fon-pen-cit");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Ciudad Fondo de Pension - Validacion para evitar las comillas
$("#upd-fon-pen-cit").keyup(function(){              
    var ta = $("#upd-fon-pen-cit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar Direccion del Fondo de Pension
// Actualizar Direccion Fondo de Pension - Validacion para permitir caracteres de direcciones
$("#upd-fon-pen-dir").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Actualizar Direccion Fondo de Pension - Validacion para evitar numeros pequeños
$("#upd-fon-pen-dir").keyup(function(){              
    var ta = $("#upd-fon-pen-dir");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Direccion Fondo de Pension - Validacion para evitar caracteres acentuados
$("#upd-fon-pen-dir").keyup(function(){              
    var ta = $("#upd-fon-pen-dir");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Direccion Fondo de Pension - Validacion para evitar caracteres
$("#upd-fon-pen-dir").keyup(function(){              
    var ta = $("#upd-fon-pen-dir");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Direccion Fondo de Pension - Validacion para evitar las comillas
$("#upd-fon-pen-dir").keyup(function(){              
    var ta = $("#upd-fon-pen-dir");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Nombre del Encargado del Fondo de Pension
// Actualizar Nombre Encargado - Funcion que solo permite Texto dentro del Input
$("#upd-fon-pen-nom-enc").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Actualizar Nombre Encargado - Validacion para evitar numeros en los input de tipo texto
$("#upd-fon-pen-nom-enc").keyup(function(){              
    var ta = $("#upd-fon-pen-nom-enc");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Nombre Encargado - Validacion para evitar numeros pequeños
$("#upd-fon-pen-nom-enc").keyup(function(){              
    var ta = $("#upd-fon-pen-nom-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Nombre Encargado - Validacion para evitar caracteres acentuados
$("#upd-fon-pen-nom-enc").keyup(function(){              
    var ta = $("#upd-fon-pen-nom-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Nombre Encargado - Validacion para evitar caracteres
$("#upd-fon-pen-nom-enc").keyup(function(){              
    var ta = $("#upd-fon-pen-nom-enc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Nombre Encargado - Validacion para evitar las comillas
$("#upd-fon-pen-nom-enc").keyup(function(){              
    var ta = $("#upd-fon-pen-nom-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Correo del Encargado
// Actualizar Correo Encargado - Validacion para evitar espacios en blanco
$("#upd-fon-pen-cor-enc").keyup(function(){              
    var ta = $("#upd-fon-pen-cor-enc");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
// Actualizar Correo Encargado - Validacion para evitar numeros pequeños
$("#upd-fon-pen-cor-enc").keyup(function(){              
    var ta = $("#upd-fon-pen-cor-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo Encargado -Validacion para evitar caracteres acentuados
$("#upd-fon-pen-cor-enc").keyup(function(){              
    var ta = $("#upd-fon-pen-cor-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo Encargado - Validacion para evitar caracteres
$("#upd-fon-pen-cor-enc").keyup(function(){              
    var ta = $("#upd-fon-pen-cor-enc");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Correo Encargado - Validacion para permitir caracteres de correo
$("#upd-fon-pen-cor-enc").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Actualizar Telefono del Encargado

// Actualizar Telefono Encargado - Validacion para evitar caracteres acentuados
$("#upd-fon-pen-tel-enc").keyup(function(){              
    var ta = $("#upd-fon-pen-tel-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Encargado - Validacion para evitar letras ñÑ
$("#upd-fon-pen-tel-enc").keyup(function(){              
    var ta = $("#upd-fon-pen-tel-enc");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Encargado - Validacion para evitar caracteres acentuados
$("#upd-fon-pen-tel-enc").keyup(function(){              
    var ta = $("#upd-fon-pen-tel-enc");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Encargado -  Validacion para evitar numeros pequeños
$("#upd-fon-pen-tel-enc").keyup(function(){              
    var ta = $("#upd-fon-pen-tel-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono Encargado - Validacion para evitar las comillas
$("#upd-fon-pen-tel-enc").keyup(function(){              
    var ta = $("#upd-fon-pen-tel-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar Celular del Encargado
// Actualizar Celular Encargado - Validacion para evitar caracteres acentuados
$("#upd-fon-pen-cel-enc").keyup(function(){              
    var ta = $("#upd-fon-pen-cel-enc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Encargado - Validacion para evitar espacios en blanco
$("#upd-fon-pen-cel-enc").keyup(function(){              
    var ta = $("#upd-fon-pen-cel-enc");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Actualizar Celular Encargado - Validacion para evitar letras
$("#upd-fon-pen-cel-enc").keyup(function(){              
    var ta = $("#upd-fon-pen-cel-enc");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Encargado - Validacion para evitar caracteres
$("#upd-fon-pen-cel-enc").keyup(function(){              
    var ta = $("#upd-fon-pen-cel-enc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Encargado - Validacion para evitar numeros en los input de tipo texto
$("#upd-fon-pen-cel-enc").keyup(function(){              
    var ta = $("#upd-fon-pen-cel-enc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Celular Encargado - Validacion para evitar las comillas
$("#upd-fon-pen-cel-enc").keyup(function(){              
    var ta = $("#upd-fon-pen-cel-enc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 