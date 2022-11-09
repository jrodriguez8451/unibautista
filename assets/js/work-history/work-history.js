// Registrar Historia Laboral Usando Ajax
function insertWorkHistoryAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let empleado              = $('#ins-wor-his-emp').val();
    let fecha_ingreso_empresa = $('#ins-wor-his-dat-ent').val();
    let fecha_inicio_contrato = $('#ins-wor-his-ent-con').val();
    let fecha_final_contrato  = $('#ins-wor-his-dat-fin').val();
    let tipo_contrato         = $('#ins-wor-his-tip-con').val();
    let salario               = $('#ins-wor-his-sal').val();
    let cargo                 = $('#ins-wor-his-pos').val();
    let estado                = $('#ins-wor-his-con').val();

    // Condicion para evitar campos vacios
    if (empleado.length == 0 || fecha_ingreso_empresa.length == 0 || fecha_inicio_contrato.length == 0 || fecha_final_contrato.length == 0 || tipo_contrato.length == 0 || salario.length == 0 || cargo.length == 0 || estado.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        validationAlert("¡Algunos campos no pueden quedar vacíos!","#ffc107");
    }else{
        // Poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-insert-work-history').serialize();
        // Almacenamos dentro de una variable un parametro que pueda recibir el controlador para que ejecute la funcion
        let accion = "&insert_work_history=1";
        // Enviamos la informacion del formulario + la variable que recibirá el controlador
        dataString = dataString + accion;  
        $.ajax({
            // Realiza una petición POST a una URL provista.
            method:"POST",
            // Ruta en donde se enviará los datos, url en donde hacemos la peticion ajax
            url: 'index.php?ruta=historia-laboral',
            // Si todo sale bien en el success, el data es todo el contenido html que tiene el index
            data:dataString,
            // Establece una función a ejecutar si la petición a sido satisfactoria
            success: function(){
                // Load es cargar, toma el id de la tabla y vas a cargar nuevamente esta tabla, es un refrescar la tabla
                $('#load').load('index.php?ruta=historia-laboral #load',function(){
                // Aqui hacemos una funcion que lo que haces es llamarme nuevamente a la tabla cuando todo lo anterior se ejecute
                    genericTable();
                });
                // Alerta de sweetalert
                crudAlert("success","¡Historia laboral registrada con éxito!","#28a745");
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

//Funcion para ver detalle de la Historia Laboral
function detailWorkHistory(det_work_his_id,det_work_his_num_doc,det_work_his_emp,det_work_his_tip_con,det_work_his_pos,det_work_his_sal,det_work_his_dat_ent,det_work_his_con_sta,det_work_his_con_fin,det_work_his_ext,det_work_his_sta_con,det_work_his_dat_reg) {
    // .val() sirva para obtener el valor de un elemento
    $('#modal-detail-work-history .modal-body .det-work-his-id').val(det_work_his_id);
    $('#modal-detail-work-history .modal-body .det-work-his-num-doc').val(det_work_his_num_doc);
    $('#modal-detail-work-history .modal-body .det-work-his-emp').val(det_work_his_emp);
    $('#modal-detail-work-history .modal-body .det-work-his-tip-con').val(det_work_his_tip_con);
    $('#modal-detail-work-history .modal-body .det-work-his-pos').val(det_work_his_pos);
    $('#modal-detail-work-history .modal-body .det-work-his-sal').val(det_work_his_sal);
    $('#modal-detail-work-history .modal-body .det-work-his-dat-ent').val(det_work_his_dat_ent);
    $('#modal-detail-work-history .modal-body .det-work-his-con-sta').val(det_work_his_con_sta);
    $('#modal-detail-work-history .modal-body .det-work-his-con-fin').val(det_work_his_con_fin);
    $('#modal-detail-work-history .modal-body .det-work-his-ext').val(det_work_his_ext);
    $('#modal-detail-work-history .modal-body .det-work-his-sta-con').val(det_work_his_sta_con);
    $('#modal-detail-work-history .modal-body .det-work-his-dat-reg').val(det_work_his_dat_reg);
}

// Funcion para Pintar los Datos de la Historia Laboral antes de Actualizar
function updateWorkHistory(upd_wor_his_id,upd_wor_his_emp,upd_wor_his_dat_ent,upd_wor_his_ent_con,upd_wor_his_dat_fin,upd_wor_his_tip_con,upd_wor_his_sal,upd_wor_his_pos,upd_wor_his_ext,upd_wor_his_con){
    $('#modal-update-work-history .modal-body .upd-wor-his-id').val(upd_wor_his_id);
    $("#upd-wor-his-emp option[value='"+upd_wor_his_emp+"']").attr("selected",true);
    $('#modal-update-work-history .modal-body .upd-wor-his-dat-ent').val(upd_wor_his_dat_ent);
    $('#modal-update-work-history .modal-body .upd-wor-his-ent-con').val(upd_wor_his_ent_con);
    $('#modal-update-work-history .modal-body .upd-wor-his-dat-fin').val(upd_wor_his_dat_fin);
    $("#upd-wor-his-tip-con option[value='"+upd_wor_his_tip_con+"']").attr("selected",true);
    $('#modal-update-work-history .modal-body .upd-wor-his-sal').val(upd_wor_his_sal);
    $("#upd-wor-his-pos option[value='"+upd_wor_his_pos+"']").attr("selected",true);
    $('#modal-update-work-history .modal-body .upd-wor-his-ext').val(upd_wor_his_ext);
    $("#upd-wor-his-con option[value='"+upd_wor_his_con+"']").attr("selected",true);
}

// Funcion para Actualizar los Datos de la Historia Laboral usando Ajax
function updateWorkHistoryAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let empleado              = $('#upd-wor-his-emp').val();
    let fecha_ingreso_empresa = $('#upd-wor-his-dat-ent').val();
    let fecha_inicio_contrato = $('#upd-wor-his-ent-con').val();
    let fecha_final_contrato  = $('#upd-wor-his-dat-fin').val();
    let tipo_contrato         = $('#upd-wor-his-tip-con').val();
    let salario               = $('#upd-wor-his-sal').val();
    let cargo                 = $('#upd-wor-his-pos').val();
    let estado                = $('#upd-wor-his-con').val();

    // Condicion para evitar campos vacios
    if (empleado.length == 0 || fecha_ingreso_empresa.length == 0 || fecha_inicio_contrato.length == 0 || fecha_final_contrato.length == 0 || tipo_contrato.length == 0 || salario.length == 0 || cargo.length == 0 || estado.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        validationAlert("¡Algunos campos no pueden quedar vacíos!","#ffc107");
    }else{
        // Poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-update-work-history').serialize();
        let accion = "&update_work_history=1";
        dataString = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=historia-laboral',
            data:dataString,
            success: function(){
                $('#load').load('index.php?ruta=historia-laboral #load',function(){
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

// Funcion para Pintar el ID de la Historia Laboral antes de Eliminarla
function deleteWorkHistory(del_wor_his_id,del_wor_his_pri_nom,del_wor_his_seg_nom,del_wor_his_pri_ape,del_wor_his_seg_ape){
    $('#modal-delete-work-history .modal-body .del-wor-his-id').val(del_wor_his_id);
    $('#modal-delete-work-history .modal-body .del-wor-his-pri-nom').text(del_wor_his_pri_nom);
    $('#modal-delete-work-history .modal-body .del-wor-his-seg-nom').text(del_wor_his_seg_nom);
    $('#modal-delete-work-history .modal-body .del-wor-his-pri-ape').text(del_wor_his_pri_ape);
    $('#modal-delete-work-history .modal-body .del-wor-his-seg-ape').text(del_wor_his_seg_ape);
}

// Funcion para Eliminar una Historia Laboral usando Ajax
function deleteWorkHistoryAjax(){
    let dataString = $('#form-delete-work-history').serialize();
    let accion = "&delete_work_history=1";
    dataString = dataString + accion;  
    $.ajax({
        method:"POST",
        url: 'index.php?ruta=historia-laboral',
        data:dataString,
            success: function(){
            $('#load').load('index.php?ruta=historia-laboral #load',function(){
                genericTable();
            });
            crudAlert("success","¡Historia laboral eliminada con éxito!","#28a745");
        },
        error:function(){
            genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
        }
    });
}

// Validacion de los Formularios

// Funcion que solo permite Numeros dentro del Input

// Insertar Salario Historia Laboral
$("#ins-wor-his-sal").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-wor-his-sal").keyup(function(){              
    var ta = $("#ins-wor-his-sal");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar letras
$("#ins-wor-his-sal").keyup(function(){              
    var ta = $("#ins-wor-his-sal");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-wor-his-sal").keyup(function(){              
    var ta = $("#ins-wor-his-sal");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#ins-wor-his-sal").keyup(function(){              
    var ta = $("#ins-wor-his-sal");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-wor-his-sal").keyup(function(){              
    var ta = $("#ins-wor-his-sal");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});
//Funcion para evitar espacios
$("#ins-wor-his-sal").keyup(function(){              
    var ta = $("#ins-wor-his-sal");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 

//Insertar Prorroga Historia Laboral

//Validacion para evitar caracteres raros
$("#ins-wor-his-ext").keyup(function(){              
    var ta = $("#ins-wor-his-ext");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-wor-his-ext").keyup(function(){              
    var ta = $("#ins-wor-his-ext");
    letras = ta.val().replace(/[|!"#$%&()=¡?¿´´:{};*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-wor-his-ext").keyup(function(){              
    var ta = $("#ins-wor-his-ext");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Funcion que solo permite Numeros dentro del Input

// Actualizar Salario Historia Laboral
$("#upd-wor-his-sal").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-wor-his-sal").keyup(function(){              
    var ta = $("#upd-wor-his-sal");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar letras
$("#upd-wor-his-sal").keyup(function(){              
    var ta = $("#upd-wor-his-sal");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-wor-his-sal").keyup(function(){              
    var ta = $("#upd-wor-his-sal");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#upd-wor-his-sal").keyup(function(){              
    var ta = $("#upd-wor-his-sal");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-wor-his-sal").keyup(function(){              
    var ta = $("#upd-wor-his-sal");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});
//Funcion para evitar espacios
$("#upd-wor-his-sal").keyup(function(){              
    var ta = $("#upd-wor-his-sal");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 

//Actualizar Prorroga Historia Laboral

//Validacion para evitar caracteres raros
$("#upd-wor-his-ext").keyup(function(){              
    var ta = $("#upd-wor-his-ext");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-wor-his-ext").keyup(function(){              
    var ta = $("#upd-wor-his-ext");
    letras = ta.val().replace(/[|!"#$%&()=¡?¿´´:{};*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-wor-his-ext").keyup(function(){              
    var ta = $("#upd-wor-his-ext");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});