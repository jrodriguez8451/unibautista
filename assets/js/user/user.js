// Insertar Usuario Usando Ajax
function insertUserAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let numero_documento = $('#ins-usu-num-doc').val();
    let tipo_documento   = $('#ins-usu-tip-doc').val();
    let primer_nombre    = $('#ins-usu-pri-nom').val();
    let primer_apellido  = $('#ins-usu-pri-ape').val();
    let segundo_apellido = $('#ins-usu-seg-ape').val();
    let celular          = $('#ins-usu-cel').val();
    let telefono         = $('#ins-usu-tel').val();
    let direccion        = $('#ins-usu-dir').val();
    let correo           = $('#ins-usu-cor').val();
    let contrasena       = $('#ins-usu-con').val();
    let rol              = $('#ins-usu-rol').val();
    
    $('#insert-user').click(function() {
        if ($('#ins-usu-tip-doc').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-usu-rol').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        }
    });

    // Condicion para evitar campos vacios
    if (numero_documento.length == 0 || tipo_documento.length == 0 || primer_nombre.length == 0 || primer_apellido.length == 0 || segundo_apellido.length == 0 || celular.length == 0 || telefono.length == 0 || direccion.length == 0 || correo.length == 0 || contrasena.length == 0 || rol.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
    }else{
        // Poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-insert-user').serialize();
        // Almacenamos dentro de una variable un parametro que pueda recibir el controlador para que ejecute la funcion
        let accion = "&insert_user=1";
        // Enviamos la informacion del formulario + la variable que recibirá el controlador
        dataString = dataString + accion;  
        $.ajax({
            // Realiza una petición POST a una URL provista.
            method:"POST",
            // Ruta en donde se enviará los datos, url en donde hacemos la peticion ajax
            url: 'index.php?ruta=usuario',
            // Si todo sale bien en el success, el data es todo el contenido html que tiene el index
            data:dataString,
            // Establece una función a ejecutar si la petición a sido satisfactoria
            success: function(){
                // Load es cargar, toma el id de la tabla y vas a cargar nuevamente esta tabla, es un refrescar la tabla
                $('#load').load('index.php?ruta=usuario #load',function(){
                // Aqui hacemos una funcion que lo que haces es llamarme nuevamente a la tabla cuando todo lo anterior se ejecute
                    genericTable();
                });
                // Alerta de sweetalert
                crudAlert("success","¡Usuario creado con éxito!","#28a745");
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

//FUNCION PARA VER DETALLE DEL USUARIO
function detailUser(det_usu_id,det_usu_num_doc,det_usu_tip_doc,det_usu_pri_nom,det_usu_seg_nom,det_usu_pri_ape,det_usu_seg_ape,det_usu_cel,det_usu_tel,det_usu_dir,det_usu_cor,det_usu_fec_reg,det_usu_rol,det_usu_est) {
    // .val() sirva para obtener el valor de un elemento
    $('#modal-detail-user .modal-body .det-usu-id').val(det_usu_id);
    $('#modal-detail-user .modal-body .det-usu-num-doc').val(det_usu_num_doc);
    $('#modal-detail-user .modal-body .det-usu-tip-doc').val(det_usu_tip_doc);
    $('#modal-detail-user .modal-body .det-usu-pri-nom').val(det_usu_pri_nom);
    $('#modal-detail-user .modal-body .det-usu-seg-nom').val(det_usu_seg_nom);
    $('#modal-detail-user .modal-body .det-usu-pri-ape').val(det_usu_pri_ape);
    $('#modal-detail-user .modal-body .det-usu-seg-ape').val(det_usu_seg_ape);
    $('#modal-detail-user .modal-body .det-usu-cel').val(det_usu_cel);
    $('#modal-detail-user .modal-body .det-usu-tel').val(det_usu_tel);
    $('#modal-detail-user .modal-body .det-usu-dir').val(det_usu_dir);
    $('#modal-detail-user .modal-body .det-usu-cor').val(det_usu_cor);
    $('#modal-detail-user .modal-body .det-usu-fec-reg').val(det_usu_fec_reg);
    $('#modal-detail-user .modal-body .det-usu-rol').val(det_usu_rol);
    $('#modal-detail-user .modal-body .det-usu-est').val(det_usu_est);
}

// FUNCION PARA PINTAR LOS DATOS DEL USUARIO ANTES DE EDITAR
function updateUser(upd_usu_id,upd_usu_num_doc,upd_usu_tip_doc,upd_usu_pri_nom,upd_usu_seg_nom,upd_usu_pri_ape,upd_usu_seg_ape,upd_usu_cel,upd_usu_tel,upd_usu_dir,upd_usu_cor,upd_usu_con,upd_usu_fec_reg,upd_usu_rol){
    $('#modal-update-user .modal-body .upd-usu-id').val(upd_usu_id);
    $('#modal-update-user .modal-body .upd-usu-num-doc').val(upd_usu_num_doc);
    $("#upd-usu-tip-doc option[value='"+upd_usu_tip_doc+"']").attr("selected",true);
    $('#modal-update-user .modal-body .upd-usu-pri-nom').val(upd_usu_pri_nom);
    $('#modal-update-user .modal-body .upd-usu-seg-nom').val(upd_usu_seg_nom);
    $('#modal-update-user .modal-body .upd-usu-pri-ape').val(upd_usu_pri_ape);
    $('#modal-update-user .modal-body .upd-usu-seg-ape').val(upd_usu_seg_ape);
    $('#modal-update-user .modal-body .upd-usu-cel').val(upd_usu_cel);
    $('#modal-update-user .modal-body .upd-usu-tel').val(upd_usu_tel);
    $('#modal-update-user .modal-body .upd-usu-dir').val(upd_usu_dir);
    $('#modal-update-user .modal-body .upd-usu-cor').val(upd_usu_cor);
    $('#modal-update-user .modal-body .upd-usu-con').val(upd_usu_con);
    $('#modal-update-user .modal-body .upd-usu-fec-reg').val(upd_usu_fec_reg);
    $("#upd-usu-rol option[value='"+upd_usu_rol+"']").attr("selected",true);
}

//FUNCION PARA ACTUALIZAR UN USUARIO CON AJAX
function updateUserAjax(){
    //Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let numero_documento = $('#upd-usu-num-doc').val();
    let tipo_documento   = $('#upd-usu-tip-doc').val();
    let primer_nombre    = $('#upd-usu-pri-nom').val();
    let primer_apellido  = $('#upd-usu-pri-ape').val();
    let segundo_apellido = $('#upd-usu-seg-ape').val();
    let celular          = $('#upd-usu-cel').val();
    let telefono         = $('#upd-usu-tel').val();
    let direccion        = $('#upd-usu-dir').val();
    let correo           = $('#upd-usu-cor').val();
    let contrasena       = $('#upd-usu-con').val();
    let rol              = $('#upd-usu-rol').val();

    $('#update-user').click(function() {
        if ($('#upd-usu-tip-doc').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-usu-rol').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        }
    });

    //condicion para evitar campos vacios
    if (numero_documento.length == 0 || tipo_documento.length == 0 || primer_nombre.length == 0 || primer_apellido.length == 0 || segundo_apellido.length == 0 || celular.length == 0 || telefono.length == 0 || direccion.length == 0 || correo.length == 0 || contrasena.length == 0 || rol.length == 0){ 
        //retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        //Alerta de validacion
        validationAlert("¡Algunos campos no pueden quedar vacíos!","#ffc107");
    }else{
        //poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-update-user').serialize();
        let accion = "&update_user=1";
        dataString = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=usuario',
            data:dataString,
            success: function(){
                $('#load').load('index.php?ruta=usuario #load',function(){
                    genericTable();
                });
                genericAlert("success","¡Datos actualizados con éxito!","Algunos cambios se aplicarán al cerrar la sesión.","#28a745");
            },
            error:function(){
                genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
            }
        });
        restartSelect();
    }
}

// Funcion para Pintar el ID de un Estado antes de Eliminar
function deleteUser(del_est_id,del_usu_pri_nom,del_usu_seg_nom,del_usu_pri_ape,del_usu_seg_ape){
    $('#modal-delete-user .modal-body .del-usu-id').val(del_est_id);
    $('#modal-delete-user .modal-body .del-usu-pri_nom').text(del_usu_pri_nom);    
    $('#modal-delete-user .modal-body .del-usu-seg_nom').text(del_usu_seg_nom);
    $('#modal-delete-user .modal-body .del-usu-pri_ape').text(del_usu_pri_ape);
    $('#modal-delete-user .modal-body .del-usu-seg_ape').text(del_usu_seg_ape);
}

// Funcion para Eliminar un Estado usando Ajax
function deleteUserAjax(){
    let dataString = $('#form-delete-user').serialize();
    let accion = "&delete_user=1";
    dataString = dataString + accion;  
    $.ajax({
        method:"POST",
        url: 'index.php?ruta=usuario',
        data:dataString,
                success: function(){
            $('#load').load('index.php?ruta=usuario #load',function(){
                genericTable();
            });
            crudAlert("success","¡Usuario eliminado con éxito!","#28a745");
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