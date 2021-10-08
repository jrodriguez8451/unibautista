// Insertar Computador Usando Ajax
function insertComputerAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let activo_fijo                = $('#ins-com-cod-act-fij').val();
    let referencia                 = $('#ins-com-ref').val();
    let serial                     = $('#ins-com-ser').val();
    let modelo                     = $('#ins-com-mod').val();
    let marca                      = $('#ins-com-mar').val();
    let tipo_computador            = $('#ins-com-tip-com').val();
    let nombre_computador          = $('#ins-com-nom-com').val();
    let nombre_usuario             = $('#ins-com-nom-usu').val();
    let procesador                 = $('#ins-com-pro').val();   
    let memoria_ram                = $('#ins-com-mem-ram').val();
    let arquitectura               = $('#ins-com-arq').val();
    let sistema_operativo          = $('#ins-com-sis-ope').val();
    let edicion_sistema_operativo  = $('#ins-com-edi-sis-ope').val();
    let capacidad_disco_duro       = $('#ins-com-cap-dis-dur').val();
    let office_instalado           = $('#ins-com-off-ins').val();
    let office_activado            = $('#ins-com-off-act').val();
    let licencia_office            = $('#ins-com-lic-off').val();
    let sistema_operativo_activado = $('#ins-com-sis-act').val();
    let licencia_sistema_operativo = $('#ins-com-lin-act-sis-ope').val();
    let ubicacion                  = $('#ins-com-ubi').val();
    let observacion                = $('#ins-com-obs').val();
    let tpm_so                     = $('#ins-com-tpm-so').val();
    let tpm_bios                   = $('#ins-com-tpm-bio').val();
    let estado                     = $('#ins-com-est').val();

    $('#insert-computer').click(function() {
        if ($('#ins-com-mar').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-com-tip-com').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-com-arq').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-com-sis-ope').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-com-off-ins').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-com-off-act').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-com-sis-act').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-com-ubi').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-com-tpm-so').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-com-tpm-bio').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-com-est').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        }
    });

    // Condicion para evitar campos vacios
    if (activo_fijo.length == 0 || referencia.length == 0 || serial.length == 0 || modelo.length == 0 || marca.length == 0 ||  tipo_computador.length == 0 || nombre_computador.length == 0 ||  nombre_usuario.length == 0 ||  procesador.length == 0 ||  memoria_ram.length == 0 ||  arquitectura.length == 0 ||  sistema_operativo.length == 0 ||  edicion_sistema_operativo.length == 0 ||  capacidad_disco_duro.length == 0 ||  office_instalado.length == 0 ||  office_activado.length == 0 || licencia_office.length == 0 || sistema_operativo_activado.length == 0 || licencia_sistema_operativo.length == 0 || ubicacion.length == 0 || observacion.length == 0 || tpm_so.length == 0 || tpm_bios.length == 0 || estado.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
    }else{
        // Poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-insert-computer').serialize();
        // Almacenamos dentro de una variable un parametro que pueda recibir el controlador para que ejecute la funcion
        let accion = "&insert_computer=1";
        // Enviamos la informacion del formulario + la variable que recibirá el controlador
        dataString = dataString + accion;  
        $.ajax({
            // Realiza una petición POST a una URL provista.
            method:"POST",
            // Ruta en donde se enviará los datos, url en donde hacemos la peticion ajax
            url: 'index.php?ruta=computador',
            // Si todo sale bien en el success, el data es todo el contenido html que tiene el index
            data:dataString,
            // Establece una función a ejecutar si la petición a sido satisfactoria
            success: function(){
                // Load es cargar, toma el id de la tabla y vas a cargar nuevamente esta tabla, es un refrescar la tabla
                $('#load').load('index.php?ruta=computador #load',function(){
                // Aqui hacemos una funcion que lo que haces es llamarme nuevamente a la tabla cuando todo lo anterior se ejecute
                    genericTable();
                });
                // Alerta de sweetalert
                crudAlert("success","¡Computador registrado con éxito!","#28a745");
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

//FUNCION PARA VER DETALLE DEL COMPUTADOR
function detailComputer(det_com_id,det_com_act_fij,det_com_ref,det_com_ser,det_com_mod,det_com_mar,det_com_tip_com,det_com_nom_com,det_com_nom_usu,det_com_pro,det_com_ram,det_com_arq,det_com_sis_ope,det_com_edi_sis_ope,det_com_cap_dis_dur,det_com_off_ins,det_com_off_est_act,det_com_lic_off,det_com_sis_ope_act,det_com_lin_sis_ope,det_com_ubi_com,det_com_obs,det_com_tpm_so,det_com_tpm_bio,det_com_con,det_com_est,det_com_fec_reg) {
    // .val() sirva para obtener el valor de un elemento
    $('#modal-detail-computer .modal-body .det-com-id').val(det_com_id);
    $('#modal-detail-computer .modal-body .det-com-act-fij').val(det_com_act_fij);
    $('#modal-detail-computer .modal-body .det-com-ref').val(det_com_ref);
    $('#modal-detail-computer .modal-body .det-com-ser').val(det_com_ser);
    $('#modal-detail-computer .modal-body .det-com-mod').val(det_com_mod);
    $('#modal-detail-computer .modal-body .det-com-mar').val(det_com_mar);
    $('#modal-detail-computer .modal-body .det-com-tip-com').val(det_com_tip_com);
    $('#modal-detail-computer .modal-body .det-com-nom-com').val(det_com_nom_com);
    $('#modal-detail-computer .modal-body .det-com-nom-usu').val(det_com_nom_usu);
    $('#modal-detail-computer .modal-body .det-com-pro').val(det_com_pro);
    $('#modal-detail-computer .modal-body .det-com-ram').val(det_com_ram);
    $('#modal-detail-computer .modal-body .det-com-arq').val(det_com_arq);
    $('#modal-detail-computer .modal-body .det-com-sis-ope').val(det_com_sis_ope);
    $('#modal-detail-computer .modal-body .det-com-edi-sis-ope').val(det_com_edi_sis_ope);
    $('#modal-detail-computer .modal-body .det-com-cap-dis-dur').val(det_com_cap_dis_dur);
    $('#modal-detail-computer .modal-body .det-com-off-ins').val(det_com_off_ins);
    $('#modal-detail-computer .modal-body .det-com-off-est-act').val(det_com_off_est_act);
    $('#modal-detail-computer .modal-body .det-com-lic-off').val(det_com_lic_off);
    $('#modal-detail-computer .modal-body .det-com-sis-ope-act').val(det_com_sis_ope_act);
    $('#modal-detail-computer .modal-body .det-com-lin-sis-ope').val(det_com_lin_sis_ope);
    $('#modal-detail-computer .modal-body .det-com-ubi-com').val(det_com_ubi_com);
    $('#modal-detail-computer .modal-body .det-com-obs').val(det_com_obs);
    $('#modal-detail-computer .modal-body .det-com-tpm-so').val(det_com_tpm_so);
    $('#modal-detail-computer .modal-body .det-com-tpm-bio').val(det_com_tpm_bio);
    $('#modal-detail-computer .modal-body .det-com-con').val(det_com_con);
    $('#modal-detail-computer .modal-body .det-com-est').val(det_com_est);
    $('#modal-detail-computer .modal-body .det-com-fec-reg').val(det_com_fec_reg);
}

// FUNCION PARA PINTAR LOS DATOS DEL COMPUTADOR ANTES DE EDITAR
function updateComputer(upd_com_id,upd_com_cod_act_fij,upd_com_ref,upd_com_ser,upd_com_mod,upd_com_mar,upd_com_tip_com,upd_com_nom_com,upd_com_nom_usu,upd_com_pro,upd_com_mem_ram,upd_com_arq,upd_com_sis_ope,upd_com_edi_sis_ope,upd_com_cap_dis_dur,upd_com_off_ins,upd_com_off_act,upd_com_lic_off,upd_com_sis_act,upd_com_lin_act_sis_ope,upd_com_ubi,upd_com_obs,upd_com_tpm_so,upd_com_tpm_bio,upd_com_est){
    $('#modal-update-computer .modal-body .upd-com-id').val(upd_com_id);
    $('#modal-update-computer .modal-body .upd-com-cod-act-fij').val(upd_com_cod_act_fij);
    $('#modal-update-computer .modal-body .upd-com-ref').val(upd_com_ref);
    $('#modal-update-computer .modal-body .upd-com-ser').val(upd_com_ser);
    $('#modal-update-computer .modal-body .upd-com-mod').val(upd_com_mod);
    $("#upd-com-mar option[value='"+upd_com_mar+"']").attr("selected",true);
    $("#upd-com-tip-com option[value='"+upd_com_tip_com+"']").attr("selected",true);
    $('#modal-update-computer .modal-body .upd-com-nom-com').val(upd_com_nom_com);
    $('#modal-update-computer .modal-body .upd-com-nom-usu').val(upd_com_nom_usu);
    $('#modal-update-computer .modal-body .upd-com-pro').val(upd_com_pro);
    $('#modal-update-computer .modal-body .upd-com-mem-ram').val(upd_com_mem_ram);
    $("#upd-com-arq option[value='"+upd_com_arq+"']").attr("selected",true);
    $("#upd-com-sis-ope option[value='"+upd_com_sis_ope+"']").attr("selected",true);
    $('#modal-update-computer .modal-body .upd-com-edi-sis-ope').val(upd_com_edi_sis_ope);
    $('#modal-update-computer .modal-body .upd-com-cap-dis-dur').val(upd_com_cap_dis_dur);
    $("#upd-com-off-ins option[value='"+upd_com_off_ins+"']").attr("selected",true);
    $("#upd-com-off-act option[value='"+upd_com_off_act+"']").attr("selected",true);
    $('#modal-update-computer .modal-body .upd-com-lic-off').val(upd_com_lic_off);
    $("#upd-com-sis-act option[value='"+upd_com_sis_act+"']").attr("selected",true);
    $('#modal-update-computer .modal-body .upd-com-lin-act-sis-ope').val(upd_com_lin_act_sis_ope);
    $("#upd-com-ubi option[value='"+upd_com_ubi+"']").attr("selected",true);
    $('#modal-update-computer .modal-body .upd-com-obs').val(upd_com_obs);
    $("#upd-com-tpm-so option[value='"+upd_com_tpm_so+"']").attr("selected",true);
    $("#upd-com-tpm-bio option[value='"+upd_com_tpm_bio+"']").attr("selected",true);
    $("#upd-com-est option[value='"+upd_com_est+"']").attr("selected",true);
}

//FUNCION PARA ACTUALIZAR UN COMPUTADOR CON AJAX
function updateComputerAjax(){
    //Capturamos el valor que contienen los inputs y los almacenamos en una variable

    let activo_fijo                = $('#upd-com-cod-act-fij').val();
    let referencia                 = $('#upd-com-ref').val();
    let serial                     = $('#upd-com-ser').val();
    let modelo                     = $('#upd-com-mod').val();
    let marca                      = $('#upd-com-mar').val();
    let tipo_computador            = $('#upd-com-tip-com').val();
    let nombre_computador          = $('#upd-com-nom-com').val();
    let nombre_usuario             = $('#upd-com-nom-usu').val();
    let procesador                 = $('#upd-com-pro').val();   
    let memoria_ram                = $('#upd-com-mem-ram').val();
    let arquitectura               = $('#upd-com-arq').val();
    let sistema_operativo          = $('#upd-com-sis-ope').val();
    let edicion_sistema_operativo  = $('#upd-com-edi-sis-ope').val();
    let capacidad_disco_duro       = $('#upd-com-cap-dis-dur').val();
    let office_instalado           = $('#upd-com-off-ins').val();
    let office_activado            = $('#upd-com-off-act').val();
    let licencia_office            = $('#upd-com-lic-off').val();
    let sistema_operativo_activado = $('#upd-com-sis-act').val();
    let licencia_sistema_operativo = $('#upd-com-lin-act-sis-ope').val();
    let ubicacion                  = $('#upd-com-ubi').val();
    let observacion                = $('#upd-com-obs').val();
    let tpm_so                     = $('#upd-com-tpm-so').val();
    let tpm_bios                   = $('#upd-com-tpm-bio').val();
    let estado                     = $('#upd-com-est').val();
    
    $('#update-computer').click(function() {
        if ($('#upd-com-mar').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-com-tip-com').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-com-arq').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-com-sis-ope').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-com-off-ins').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-com-off-act').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-com-sis-act').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-com-ubi').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-com-tpm-so').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-com-tpm-bio').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-com-est').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        }
    });

    // Condicion para evitar campos vacios
    if (activo_fijo.length == 0 || referencia.length == 0 || serial.length == 0 || modelo.length == 0 || marca.length == 0 ||  tipo_computador.length == 0 || nombre_computador.length == 0 ||  nombre_usuario.length == 0 ||  procesador.length == 0 ||  memoria_ram.length == 0 ||  arquitectura.length == 0 ||  sistema_operativo.length == 0 ||  edicion_sistema_operativo.length == 0 ||  capacidad_disco_duro.length == 0 ||  office_instalado.length == 0 ||  office_activado.length == 0 || licencia_office.length == 0 || sistema_operativo_activado.length == 0 || licencia_sistema_operativo.length == 0 || ubicacion.length == 0 || observacion.length == 0 || tpm_so.length == 0 || tpm_bios.length == 0 ||  estado.length == 0){ 
        //retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        //Alerta de validacion
        validationAlert("¡Algunos campos no pueden quedar vacíos!","#ffc107");
    }else{
        //poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-update-computer').serialize();
        let accion = "&update_computer=1";
        dataString = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=computador',
            data:dataString,
            success: function(){
                $('#load').load('index.php?ruta=computador #load',function(){
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

// Funcion para Pintar el ID de un Computador antes de Eliminarlo
function deleteComputer(del_com_id,del_com_nom){
    $('#modal-delete-computer .modal-body .del-com-id').val(del_com_id);
    $('#modal-delete-computer .modal-body .del-com-nom').text(del_com_nom);    
}

// Funcion para Eliminar un Computador usando Ajax
function deleteComputerAjax(){
    let dataString = $('#form-delete-computer').serialize();
    let accion = "&delete_computer=1";
    dataString = dataString + accion;  
    $.ajax({
        method:"POST",
        url: 'index.php?ruta=computador',
        data:dataString,
                success: function(){
            $('#load').load('index.php?ruta=computador #load',function(){
                genericTable();
            });
            crudAlert("success","¡Computador eliminado con éxito!","#28a745");
        },
        error:function(){
            genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
        }
    });
}

// Validacion de los Formularios

// Funcion que solo permite Numeros dentro del Input
// Insertar codigo activo fijo del computador
$("#ins-com-cod-act-fij").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-com-cod-act-fij").keyup(function(){              
    var ta = $("#ins-com-cod-act-fij");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar letras
$("#ins-com-cod-act-fij").keyup(function(){              
    var ta = $("#ins-com-cod-act-fij");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-com-cod-act-fij").keyup(function(){              
    var ta = $("#ins-com-cod-act-fij");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#ins-com-cod-act-fij").keyup(function(){              
    var ta = $("#ins-com-cod-act-fij");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-com-cod-act-fij").keyup(function(){              
    var ta = $("#ins-com-cod-act-fij");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 

// Funcion que solo permite Texto dentro del Input
// Insertar referencia del computador
$("#ins-com-ref").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-com-ref").keyup(function(){              
    var ta = $("#ins-com-ref");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-com-ref").keyup(function(){              
    var ta = $("#ins-com-ref");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#ins-com-ref").keyup(function(){              
    var ta = $("#ins-com-ref");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-com-ref").keyup(function(){              
    var ta = $("#ins-com-ref");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 

// Insertar serial del computador
$("#ins-com-ser").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-com-ser").keyup(function(){              
    var ta = $("#ins-com-ser");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-com-ser").keyup(function(){              
    var ta = $("#ins-com-ser");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#ins-com-ser").keyup(function(){              
    var ta = $("#ins-com-ser");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-com-ser").keyup(function(){              
    var ta = $("#ins-com-ser");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar modelo del computador
$("#ins-com-mod").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-com-mod").keyup(function(){              
    var ta = $("#ins-com-mod");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-com-mod").keyup(function(){              
    var ta = $("#ins-com-mod");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#ins-com-mod").keyup(function(){              
    var ta = $("#ins-com-mod");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-com-mod").keyup(function(){              
    var ta = $("#ins-com-mod");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar nombre del computador
$("#ins-com-nom-com").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-com-nom-com").keyup(function(){              
    var ta = $("#ins-com-nom-com");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-com-nom-com").keyup(function(){              
    var ta = $("#ins-com-nom-com");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#ins-com-nom-com").keyup(function(){              
    var ta = $("#ins-com-nom-com");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-com-nom-com").keyup(function(){              
    var ta = $("#ins-com-nom-com");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar nombre de usuario del computador 
$("#ins-com-nom-usu").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-com-nom-usu").keyup(function(){              
    var ta = $("#ins-com-nom-usu");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-com-nom-usu").keyup(function(){              
    var ta = $("#ins-com-nom-usu");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#ins-com-nom-usu").keyup(function(){              
    var ta = $("#ins-com-nom-usu");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-com-nom-usu").keyup(function(){              
    var ta = $("#ins-com-nom-usu");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar nombre del procesador de usuario del computador 
$("#ins-com-pro").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-com-pro").keyup(function(){              
    var ta = $("#ins-com-pro");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-com-pro").keyup(function(){              
    var ta = $("#ins-com-pro");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#ins-com-pro").keyup(function(){              
    var ta = $("#ins-com-pro");
    letras = ta.val().replace(/[=|!"$%&¡?¿´´:{};*+$<>^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-com-pro").keyup(function(){              
    var ta = $("#ins-com-pro");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar cantidad en GB de memoria RAM del computador 
$("#ins-com-mem-ram").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-com-mem-ram").keyup(function(){              
    var ta = $("#ins-com-mem-ram");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-com-mem-ram").keyup(function(){              
    var ta = $("#ins-com-mem-ram");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#ins-com-mem-ram").keyup(function(){              
    var ta = $("#ins-com-mem-ram");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-com-mem-ram").keyup(function(){              
    var ta = $("#ins-com-mem-ram");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar edicion del sistema operativo del computador 
$("#ins-com-edi-sis-ope").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-com-edi-sis-ope").keyup(function(){              
    var ta = $("#ins-com-edi-sis-ope");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-com-edi-sis-ope").keyup(function(){              
    var ta = $("#ins-com-edi-sis-ope");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#ins-com-edi-sis-ope").keyup(function(){              
    var ta = $("#ins-com-edi-sis-ope");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-com-edi-sis-ope").keyup(function(){              
    var ta = $("#ins-com-edi-sis-ope");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar la capacidad de GB de disco duro del computador 
$("#ins-com-cap-dis-dur").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-com-cap-dis-dur").keyup(function(){              
    var ta = $("#ins-com-cap-dis-dur");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-com-cap-dis-dur").keyup(function(){              
    var ta = $("#ins-com-cap-dis-dur");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#ins-com-cap-dis-dur").keyup(function(){              
    var ta = $("#ins-com-cap-dis-dur");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-com-cap-dis-dur").keyup(function(){              
    var ta = $("#ins-com-cap-dis-dur");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar la licencia de office 
$("#ins-com-lic-off").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-com-lic-off").keyup(function(){              
    var ta = $("#ins-com-lic-off");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-com-lic-off").keyup(function(){              
    var ta = $("#ins-com-lic-off");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#ins-com-lic-off").keyup(function(){              
    var ta = $("#ins-com-lic-off");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-com-lic-off").keyup(function(){              
    var ta = $("#ins-com-lic-off");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar la licencia del sistema operativo
$("#ins-com-lin-act-sis-ope").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-com-lin-act-sis-ope").keyup(function(){              
    var ta = $("#ins-com-lin-act-sis-ope");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-com-lin-act-sis-ope").keyup(function(){              
    var ta = $("#ins-com-lin-act-sis-ope");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#ins-com-lin-act-sis-ope").keyup(function(){              
    var ta = $("#ins-com-lin-act-sis-ope");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-com-lin-act-sis-ope").keyup(function(){              
    var ta = $("#ins-com-lin-act-sis-ope");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar observacion del computador 
$("#ins-com-obs").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-com-obs").keyup(function(){              
    var ta = $("#ins-com-obs");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-com-obs").keyup(function(){              
    var ta = $("#ins-com-obs");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 

$("#ins-com-obs").keyup(function(){              
    var ta = $("#ins-com-obs");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
});

//Validacion para evitar las comillas
$("#ins-com-obs").keyup(function(){              
    var ta = $("#ins-com-obs");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar codigo activo fijo del computador
$("#upd-com-cod-act-fij").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-com-cod-act-fij").keyup(function(){              
    var ta = $("#upd-com-cod-act-fij");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar letras
$("#upd-com-cod-act-fij").keyup(function(){              
    var ta = $("#upd-com-cod-act-fij");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-com-cod-act-fij").keyup(function(){              
    var ta = $("#upd-com-cod-act-fij");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#upd-com-cod-act-fij").keyup(function(){              
    var ta = $("#upd-com-cod-act-fij");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
});
//Validacion para evitar las comillas
$("#upd-com-cod-act-fij").keyup(function(){              
    var ta = $("#upd-com-cod-act-fij");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 

// Actualizar referencia del computador
$("#upd-com-ref").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-com-ref").keyup(function(){              
    var ta = $("#upd-com-ref");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-com-ref").keyup(function(){              
    var ta = $("#upd-com-ref");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#upd-com-ref").keyup(function(){              
    var ta = $("#upd-com-ref");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-com-ref").keyup(function(){              
    var ta = $("#upd-com-ref");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar serial del computador
$("#upd-com-ser").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-com-ser").keyup(function(){              
    var ta = $("#upd-com-ser");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-com-ser").keyup(function(){              
    var ta = $("#upd-com-ser");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#upd-com-ser").keyup(function(){              
    var ta = $("#upd-com-ser");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-com-ser").keyup(function(){              
    var ta = $("#upd-com-ser");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar modelo del computador
$("#upd-com-mod").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-com-mod").keyup(function(){              
    var ta = $("#upd-com-mod");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-com-mod").keyup(function(){              
    var ta = $("#upd-com-mod");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#upd-com-mod").keyup(function(){              
    var ta = $("#upd-com-mod");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-com-mod").keyup(function(){              
    var ta = $("#upd-com-mod");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar nombre del computador
$("#upd-com-nom-com").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-com-nom-com").keyup(function(){              
    var ta = $("#upd-com-nom-com");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-com-nom-com").keyup(function(){              
    var ta = $("#upd-com-nom-com");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#upd-com-nom-com").keyup(function(){              
    var ta = $("#upd-com-nom-com");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-com-nom-com").keyup(function(){              
    var ta = $("#upd-com-nom-com");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar nombre de usuario del computador 
$("#upd-com-nom-usu").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-com-nom-usu").keyup(function(){              
    var ta = $("#upd-com-nom-usu");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-com-nom-usu").keyup(function(){              
    var ta = $("#upd-com-nom-usu");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#upd-com-nom-usu").keyup(function(){              
    var ta = $("#upd-com-nom-usu");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-com-nom-usu").keyup(function(){              
    var ta = $("#upd-com-nom-usu");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar nombre del procesador del computador 
$("#upd-com-pro").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-com-pro").keyup(function(){              
    var ta = $("#upd-com-pro");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-com-pro").keyup(function(){              
    var ta = $("#upd-com-pro");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#upd-com-pro").keyup(function(){              
    var ta = $("#upd-com-pro");
    letras = ta.val().replace(/[=|!"$%&¡?¿´´:{};*+$<>^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-com-pro").keyup(function(){              
    var ta = $("#upd-com-pro");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar cantidad en GB de memoria RAM del computador 
$("#upd-com-mem-ram").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-com-mem-ram").keyup(function(){              
    var ta = $("#upd-com-mem-ram");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-com-mem-ram").keyup(function(){              
    var ta = $("#upd-com-mem-ram");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#upd-com-mem-ram").keyup(function(){              
    var ta = $("#upd-com-mem-ram");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-com-mem-ram").keyup(function(){              
    var ta = $("#upd-com-mem-ram");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar edicion del sistema operativo del computador 
$("#upd-com-edi-sis-ope").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-com-edi-sis-ope").keyup(function(){              
    var ta = $("#upd-com-edi-sis-ope");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-com-edi-sis-ope").keyup(function(){              
    var ta = $("#upd-com-edi-sis-ope");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#upd-com-edi-sis-ope").keyup(function(){              
    var ta = $("#upd-com-edi-sis-ope");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-com-edi-sis-ope").keyup(function(){              
    var ta = $("#upd-com-edi-sis-ope");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar la capacidad de GB de disco duro del computador 
$("#upd-com-cap-dis-dur").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-com-cap-dis-dur").keyup(function(){              
    var ta = $("#upd-com-cap-dis-dur");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-com-cap-dis-dur").keyup(function(){              
    var ta = $("#upd-com-cap-dis-dur");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#upd-com-cap-dis-dur").keyup(function(){              
    var ta = $("#upd-com-cap-dis-dur");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-com-cap-dis-dur").keyup(function(){              
    var ta = $("#upd-com-cap-dis-dur");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar la licencia de office 
$("#upd-com-lic-off").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-com-lic-off").keyup(function(){              
    var ta = $("#upd-com-lic-off");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-com-lic-off").keyup(function(){              
    var ta = $("#upd-com-lic-off");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#upd-com-lic-off").keyup(function(){              
    var ta = $("#upd-com-lic-off");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-com-lic-off").keyup(function(){              
    var ta = $("#upd-com-lic-off");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar la licencia del sistema operativo
$("#upd-com-lin-act-sis-ope").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-com-lin-act-sis-ope").keyup(function(){              
    var ta = $("#upd-com-lin-act-sis-ope");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-com-lin-act-sis-ope").keyup(function(){              
    var ta = $("#upd-com-lin-act-sis-ope");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#upd-com-lin-act-sis-ope").keyup(function(){              
    var ta = $("#upd-com-lin-act-sis-ope");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-com-lin-act-sis-ope").keyup(function(){              
    var ta = $("#upd-com-lin-act-sis-ope");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar observacion del computador 
$("#upd-com-obs").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-com-obs").keyup(function(){              
    var ta = $("#upd-com-obs");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-com-obs").keyup(function(){              
    var ta = $("#upd-com-obs");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 

$("#upd-com-obs").keyup(function(){              
    var ta = $("#upd-com-obs");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
});

//Validacion para evitar las comillas
$("#upd-com-obs").keyup(function(){              
    var ta = $("#upd-com-obs");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});