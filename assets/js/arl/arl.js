// Registrar ARL Usando Ajax
function insertARLAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let nit       = $('#ins-arl-nit').val();
    let nombre    = $('#ins-arl-nom').val();
    let correo    = $('#ins-arl-cor').val();
    let direccion = $('#ins-arl-dir').val();
    let telefono  = $('#ins-arl-tel').val();

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
function detailARL(det_arl_id,det_arl_nit,det_arl_nom,det_arl_cor,det_arl_dir,det_arl_tel,det_arl_est,det_arl_fec_reg) {
    // .val() sirva para obtener el valor de un elemento
    $('#modal-detail-arl .modal-body .det-arl-id').val(det_arl_id);
    $('#modal-detail-arl .modal-body .det-arl-nit').val(det_arl_nit);
    $('#modal-detail-arl .modal-body .det-arl-nom').val(det_arl_nom);
    $('#modal-detail-arl .modal-body .det-arl-cor').val(det_arl_cor);
    $('#modal-detail-arl .modal-body .det-arl-dir').val(det_arl_dir);
    $('#modal-detail-arl .modal-body .det-arl-tel').val(det_arl_tel);
    $('#modal-detail-arl .modal-body .det-arl-est').val(det_arl_est);
    $('#modal-detail-arl .modal-body .det-arl-fec-reg').val(det_arl_fec_reg);
}

// Funcion para Pintar los Datos de la ARL antes de Actualizar
function updateARL(upd_arl_id,upd_arl_nit,upd_arl_nom,upd_arl_cor,upd_arl_dir,upd_arl_tel){
    $('#modal-update-arl .modal-body .upd-arl-id').val(upd_arl_id);
    $('#modal-update-arl .modal-body .upd-arl-nit').val(upd_arl_nit);
    $('#modal-update-arl .modal-body .upd-arl-nom').val(upd_arl_nom);
    $('#modal-update-arl .modal-body .upd-arl-cor').val(upd_arl_cor);
    $('#modal-update-arl .modal-body .upd-arl-dir').val(upd_arl_dir);
    $('#modal-update-arl .modal-body .upd-arl-tel').val(upd_arl_tel);
}

// Funcion para Actualizar los Datos de la ARL usando Ajax
function updateARLAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let nit       = $('#upd-arl-nit').val();
    let nombre    = $('#upd-arl-nom').val();
    let correo    = $('#upd-arl-cor').val();
    let direccion = $('#upd-arl-dir').val();
    let telefono  = $('#upd-arl-tel').val();

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

// Validacion de los Formularios

// Funcion que solo permite Numeros dentro del Input

// Insertar NIT de la ARL
$("#ins-arl-nit").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input

// Insertar nombre de la ARL
$("#ins-arl-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Insertar correo de la ARL
$("#ins-arl-cor").keyup(function(){              
    var ta = $("#ins-arl-cor");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 


// Insertar direccion de la ARL
$("#ins-arl-dir").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Insertar telefono de la ARL
$("#ins-arl-tel").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Numeros dentro del Input

// Actualizar NIT de la ARL
$("#upd-arl-nit").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input

// Actualizar nombre de la ARL
$("#upd-arl-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar correo de la ARL
$("#upd-arl-cor").keyup(function(){              
    var ta = $("#upd-arl-cor");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 

// Actualizar direccion de la ARL
$("#upd-arl-dir").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar telefono de la ARL
$("#upd-arl-tel").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});