// Insertar Computador Usando Ajax
function insertComputerAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let marca                      = $('#ins-com-mar').val();
    let tipo_computador            = $('#ins-com-tip-com').val();
    let nombre_computador          = $('#ins-com-nom-com').val();
    let nombre_usuario             = $('#ins-com-nom-usu').val();
    let procesador                 = $('#ins-com-pro').val();   
    let ghz_procesafor             = $('#ins-com-ghz-pro').val();
    let memoria_ram                = $('#ins-com-mem-ram').val();
    let arquitectura               = $('#ins-com-arq').val();
    let sistema_operativo          = $('#ins-com-sis-ope').val();
    let edicion_sistema_operativo  = $('#ins-com-edi-sis-ope').val();
    let capacidad_disco_duro       = $('#ins-com-cap-dis-dur').val();
    let office_instalado           = $('#ins-com-off-ins').val();
    let office_activado            = $('#ins-com-off-act')
    let sistema_operativo_activado = $('#ins-com-sis-act').val();
    let ubicacion                  = $('#ins-com-ubi').val();
    let estado                     = $('#ins-com-est').val();
    let fecha_registro             = $('#ins-com-fec-reg').val();      
    // Condicion para evitar campos vacios
    if (marca.length == 0 || tipo_computador.length == 0 || nombre_computador.length == 0 || nombre_usuario.length == 0 || procesador.length == 0 || ghz_procesafor.length == 0 || memoria_ram.length == 0 || arquitectura.length == 0 || sistema_operativo.length == 0 || edicion_sistema_operativo.length == 0 || capacidad_disco_duro.length == 0 || office_instalado.length == 0 || office_activado.length == 0 || sistema_operativo_activado.length == 0 || ubicacion.length == 0 || estado.length == 0 || fecha_registro.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        validationAlert("¡Algunos campos no pueden quedar vacíos!","#ffc107");
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
function detailComputer(det_com_id,det_com_act_fij,det_com_ref,det_com_ser,det_com_mod,det_com_mar,det_com_tip_com,det_com_nom_com,det_com_nom_usu,det_com_pro,det_com_ghz_pro,det_com_ram,det_com_arq,det_com_sis_ope,det_com_edi_sis_ope,det_com_nom_dis_dur,det_com_cap_dis_dur,det_com_off_ins,det_com_off_est_act,det_com_lic_off,det_com_sis_ope_act,det_com_lin_sis_ope,det_com_ubi_com,det_com_obs,det_com_con,det_com_fec_reg,det_com_est,) {
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
    $('#modal-detail-computer .modal-body .det-com-ghz-pro').val(det_com_ghz_pro);
    $('#modal-detail-computer .modal-body .det-com-ram').val(det_com_ram);
    $('#modal-detail-computer .modal-body .det-com-arq').val(det_com_arq);
    $('#modal-detail-computer .modal-body .det-com-sis-ope').val(det_com_sis_ope);
    $('#modal-detail-computer .modal-body .det-com-edi-sis-ope').val(det_com_edi_sis_ope);
    $('#modal-detail-computer .modal-body .det-com-nom-dis-dur').val(det_com_nom_dis_dur);
    $('#modal-detail-computer .modal-body .det-com-cap-dis-dur').val(det_com_cap_dis_dur);
    $('#modal-detail-computer .modal-body .det-com-off-ins').val(det_com_off_ins);
    $('#modal-detail-computer .modal-body .det-com-off-est-act').val(det_com_off_est_act);
    $('#modal-detail-computer .modal-body .det-com-lic-off').val(det_com_lic_off);
    $('#modal-detail-computer .modal-body .det-com-sis-ope-act').val(det_com_sis_ope_act);
    $('#modal-detail-computer .modal-body .det-com-lin-sis-ope').val(det_com_lin_sis_ope);
    $('#modal-detail-computer .modal-body .det-com-ubi-com').val(det_com_ubi_com);
    $('#modal-detail-computer .modal-body .det-com-obs').val(det_com_obs);
    $('#modal-detail-computer .modal-body .det-com-con').val(det_com_con);
    $('#modal-detail-computer .modal-body .det-com-fec-reg').val(det_com_fec_reg);
    $('#modal-detail-computer .modal-body .det-com-est').val(det_com_est);
}

// FUNCION PARA PINTAR LOS DATOS DEL COMPUTADOR ANTES DE EDITAR
function updateComputer(upd_com_id,upd_com_cod_act_fij,upd_com_ref,upd_com_ser,upd_com_mod,upd_com_mar,upd_com_tip_com,upd_com_nom_com,upd_com_nom_usu,upd_com_pro,upd_com_ghz_pro,upd_com_mem_ram,upd_com_arq,upd_com_sis_ope,upd_com_edi_sis_ope,upd_com_nom_dis_dur,upd_com_cap_dis_dur,upd_com_off_ins,upd_com_off_act,upd_com_lic_off,upd_com_sis_act,upd_com_lin_act_sis_ope,upd_com_ubi,upd_com_obs,upd_com_est,upd_com_fec_reg){
    $('#modal-update-computer .modal-body .upd-com-id').val(upd_com_id);
    $('#modal-update-computer .modal-body .upd-com-cod-act-fij').val(upd_com_cod_act_fij);
    $('#modal-update-computer .modal-body .upd-com-ref').val(upd_com_ref);
    $('#modal-update-computer .modal-body .upd-com-ser').val(upd_com_ser);
    $('#modal-update-computer .modal-body .upd-com-mod').val(upd_com_mod);
    $("#upd-com-mar option[value='"+upd_com_mar+"']").attr("selected",true);
    $('#modal-update-computer .modal-body .upd-com-tip-com').val(upd_com_tip_com);
    $('#modal-update-computer .modal-body .upd-com-nom-com').val(upd_com_nom_com);
    $('#modal-update-computer .modal-body .upd-com-nom-usu').val(upd_com_nom_usu);
    $('#modal-update-computer .modal-body .upd-com-pro').val(upd_com_pro);
    $('#modal-update-computer .modal-body .upd-com-ghz-pro').val(upd_com_ghz_pro);
    $('#modal-update-computer .modal-body .upd-com-mem-ram').val(upd_com_mem_ram);
    $("#upd-com-arq option[value='"+upd_com_arq+"']").attr("selected",true);
    $("#upd-com-sis-ope option[value='"+upd_com_sis_ope+"']").attr("selected",true);
    $('#modal-update-computer .modal-body .upd-com-edi-sis-ope').val(upd_com_edi_sis_ope);
    $('#modal-update-computer .modal-body .upd-com-nom-dis-dur').val(upd_com_nom_dis_dur);
    $('#modal-update-computer .modal-body .upd-com-cap-dis-dur').val(upd_com_cap_dis_dur);
    $("#upd-com-off-ins option[value='"+upd_com_off_ins+"']").attr("selected",true);
    $("#upd-com-off-act option[value='"+upd_com_off_act+"']").attr("selected",true);
    $('#modal-update-computer .modal-body .upd-com-lic-off').val(upd_com_lic_off);
    $("#upd-com-sis-act option[value='"+upd_com_sis_act+"']").attr("selected",true);
    $('#modal-update-computer .modal-body .upd-com-lin-act-sis-ope').val(upd_com_lin_act_sis_ope);
    $("#upd-com-ubi option[value='"+upd_com_ubi+"']").attr("selected",true);
    $('#modal-update-computer .modal-body .upd-com-obs').val(upd_com_obs);
    $("#upd-com-est option[value='"+upd_com_est+"']").attr("selected",true);
    $('#modal-update-computer .modal-body .upd-com-fec-reg').val(upd_com_fec_reg);
}

//FUNCION PARA ACTUALIZAR UN COMPUTADOR CON AJAX
function updateComputerAjax(){
    //Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let marca                      = $('#upd-com-mar').val();
    let tipo_computador            = $('#upd-com-tip-com').val();
    let nombre_computador          = $('#upd-com-nom-com').val();
    let nombre_usuario             = $('#upd-com-nom-usu').val();
    let procesador                 = $('#upd-com-pro').val();   
    let ghz_procesafor             = $('#upd-com-ghz-pro').val();
    let memoria_ram                = $('#upd-com-mem-ram').val();
    let arquitectura               = $('#upd-com-arq').val();
    let sistema_operativo          = $('#upd-com-sis-ope').val();
    let edicion_sistema_operativo  = $('#upd-com-edi-sis-ope').val();
    let capacidad_disco_duro       = $('#upd-com-cap-dis-dur').val();
    let office_instalado           = $('#upd-com-off-ins').val();
    let office_activado            = $('#upd-com-off-act')
    let sistema_operativo_activado = $('#upd-com-sis-act').val();
    let ubicacion                  = $('#upd-com-ubi').val();
    let estado                     = $('#upd-com-est').val();
    let fecha_registro             = $('#upd-com-fec-reg').val();      
    // Condicion para evitar campos vacios
    if (marca.length == 0 || tipo_computador.length == 0 || nombre_computador.length == 0 || nombre_usuario.length == 0 || procesador.length == 0 || ghz_procesafor.length == 0 || memoria_ram.length == 0 || arquitectura.length == 0 || sistema_operativo.length == 0 || edicion_sistema_operativo.length == 0 || capacidad_disco_duro.length == 0 || office_instalado.length == 0 || office_activado.length == 0 || sistema_operativo_activado.length == 0 || ubicacion.length == 0 || estado.length == 0 || fecha_registro.length == 0){ 
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

// Funcion que solo permite Texto dentro del Input

// Insertar primer nombre del usuario
$("#ins-usu-pri-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Insertar segundo nombre del usuario
$("#ins-usu-seg-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Insertar primer apellido del usuario
$("#ins-usu-pri-ape").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Insertar segundo apellido del usuario
$("#ins-usu-seg-ape").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Actualizar primer nombre del usuario
$("#upd-usu-pri-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar segundo nombre del usuario
$("#upd-usu-seg-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar primer apellido del usuario
$("#upd-usu-pri-ape").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar segundo apellido del usuario
$("#upd-usu-seg-ape").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Funcion que solo permite Numeros dentro del Input

// Insertar numero de documento del Usuario
$("#ins-usu-num-doc").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Insertar celular del Usuario
$("#ins-usu-cel").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Insertar telefono del Usuario
$("#ins-usu-tel").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar numero de documento del Usuario
$("#upd-usu-num-doc").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar celular del Usuario
$("#upd-usu-cel").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar telefono del Usuario
$("#upd-usu-tel").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion para evitar que se Ingresen Espacios en Blanco

// Insertar celular del Usuario
$("#ins-usu-cel").keyup(function(){              
    var ta = $("#ins-usu-cel");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 

// Insertar telefono del Usuario
$("#ins-usu-tel").keyup(function(){              
    var ta = $("#ins-usu-tel");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 

// Insertar correo del Usuario
$("#ins-usu-cor").keyup(function(){              
    var ta = $("#ins-usu-cor");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 

// Insertar contraseña del Usuario
$("#ins-usu-con").keyup(function(){              
    var ta = $("#ins-usu-con");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 


// Actualizar celular del Usuario
$("#upd-usu-cel").keyup(function(){              
    var ta = $("#upd-usu-cel");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 

// Actualizar telefono del Usuario
$("#upd-usu-tel").keyup(function(){              
    var ta = $("#upd-usu-tel");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 

// Actualizar correo del Usuario
$("#upd-usu-cor").keyup(function(){              
    var ta = $("#upd-usu-cor");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 

// Actualizar contraseña del Usuario
$("#upd-usu-con").keyup(function(){              
    var ta = $("#upd-usu-con");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 


// Funcion para mostrar  ocultar la contraseña
function showPasswordInsert(){
    var cambio = document.getElementById("ins-usu-con");
    if(cambio.type == "password"){
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    }else{
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
} 

function showPasswordUpdate(){
    var cambio = document.getElementById("upd-usu-con");
    if(cambio.type == "password"){
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    }else{
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
} 