// Registrar EPS Usando Ajax
function insertEPSAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let nit       = $('#ins-eps-nit').val();
    let nombre    = $('#ins-eps-nom').val();
    let correo    = $('#ins-eps-cor').val();
    let direccion = $('#ins-eps-dir').val();
    let telefono  = $('#ins-eps-tel').val();

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
        let dataString = $('#form-insert-eps').serialize();
        // Almacenamos dentro de una variable un parametro que pueda recibir el controlador para que ejecute la funcion
        let accion = "&insert_eps=1";
        // Enviamos la informacion del formulario + la variable que recibirá el controlador
        dataString = dataString + accion;  
        $.ajax({
            // Realiza una petición POST a una URL provista.
            method:"POST",
            // Ruta en donde se enviará los datos, url en donde hacemos la peticion ajax
            url: 'index.php?ruta=eps',
            // Si todo sale bien en el success, el data es todo el contenido html que tiene el index
            data:dataString,
            // Establece una función a ejecutar si la petición a sido satisfactoria
            success: function(){
                // Load es cargar, toma el id de la tabla y vas a cargar nuevamente esta tabla, es un refrescar la tabla
                $('#load').load('index.php?ruta=eps #load',function(){
                // Aqui hacemos una funcion que lo que haces es llamarme nuevamente a la tabla cuando todo lo anterior se ejecute
                    genericTable();
                });
                // Alerta de sweetalert
                crudAlert("success","¡EPS registrada con éxito!","#28a745");
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

//Funcion para ver detalle de la EPS
function detailEPS(det_eps_id,det_eps_nit,det_eps_nom,det_eps_cor,det_eps_dir,det_eps_tel,det_eps_est,det_eps_fec_reg) {
    // .val() sirva para obtener el valor de un elemento
    $('#modal-detail-eps .modal-body .det-eps-id').val(det_eps_id);
    $('#modal-detail-eps .modal-body .det-eps-nit').val(det_eps_nit);
    $('#modal-detail-eps .modal-body .det-eps-nom').val(det_eps_nom);
    $('#modal-detail-eps .modal-body .det-eps-cor').val(det_eps_cor);
    $('#modal-detail-eps .modal-body .det-eps-dir').val(det_eps_dir);
    $('#modal-detail-eps .modal-body .det-eps-tel').val(det_eps_tel);
    $('#modal-detail-eps .modal-body .det-eps-est').val(det_eps_est);
    $('#modal-detail-eps .modal-body .det-eps-fec-reg').val(det_eps_fec_reg);
}

// Funcion para Pintar los Datos de la EPS antes de Actualizar
function updateEPS(upd_eps_id,upd_eps_nit,upd_eps_nom,upd_eps_cor,upd_eps_dir,upd_eps_tel){
    $('#modal-update-eps .modal-body .upd-eps-id').val(upd_eps_id);
    $('#modal-update-eps .modal-body .upd-eps-nit').val(upd_eps_nit);
    $('#modal-update-eps .modal-body .upd-eps-nom').val(upd_eps_nom);
    $('#modal-update-eps .modal-body .upd-eps-cor').val(upd_eps_cor);
    $('#modal-update-eps .modal-body .upd-eps-dir').val(upd_eps_dir);
    $('#modal-update-eps .modal-body .upd-eps-tel').val(upd_eps_tel);
}

// Funcion para Actualizar los Datos de la EPS usando Ajax
function updateEPSAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let nit       = $('#upd-eps-nit').val();
    let nombre    = $('#upd-eps-nom').val();
    let correo    = $('#upd-eps-cor').val();
    let direccion = $('#upd-eps-dir').val();
    let telefono  = $('#upd-eps-tel').val();

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
        let dataString = $('#form-update-eps').serialize();
        let accion = "&update_eps=1";
        dataString = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=eps',
            data:dataString,
            success: function(){
                $('#load').load('index.php?ruta=eps #load',function(){
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

// Funcion para Pintar el ID de la EPS antes de Eliminarla
function deleteEPS(del_eps_id,del_eps_nom){
    $('#modal-delete-eps .modal-body .del-eps-id').val(del_eps_id);
    $('#modal-delete-eps .modal-body .del-eps-nom').text(del_eps_nom);
}

// Funcion para Eliminar una EPS usando Ajax
function deleteEPSAjax(){
    let dataString = $('#form-delete-eps').serialize();
    let accion = "&delete_eps=1";
    dataString = dataString + accion;  
    $.ajax({
        method:"POST",
        url: 'index.php?ruta=eps',
        data:dataString,
            success: function(){
            $('#load').load('index.php?ruta=eps #load',function(){
                genericTable();
            });
            crudAlert("success","¡EPS eliminada con éxito!","#28a745");
        },
        error:function(){
            genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
        }
    });
}

// Validacion de los Formularios

// Funcion que solo permite Numeros dentro del Input

// Insertar NIT de la EPS
$("#ins-eps-nit").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar las comillas
$("#ins-eps-nit").keyup(function(){              
    var ta = $("#ins-eps-nit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Funcion que solo permite Texto dentro del Input

// Insertar nombre de la EPS
$("#ins-eps-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar las comillas
$("#ins-eps-nom").keyup(function(){              
    var ta = $("#ins-eps-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar correo de la EPS
$("#ins-eps-cor").keyup(function(){              
    var ta = $("#ins-eps-cor");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-eps-cor").keyup(function(){              
    var ta = $("#ins-eps-cor");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});
$("#ins-eps-cor").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Insertar direccion de la EPS
$("#ins-eps-dir").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar las comillas
$("#ins-eps-dir").keyup(function(){              
    var ta = $("#ins-eps-dir");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar telefono de la EPS
$("#ins-eps-tel").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar las comillas
$("#ins-eps-tel").keyup(function(){              
    var ta = $("#ins-eps-tel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Funcion que solo permite Numeros dentro del Input

// Actualizar NIT de la EPS
$("#upd-eps-nit").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar las comillas
$("#upd-eps-nit").keyup(function(){              
    var ta = $("#upd-eps-nit");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Funcion que solo permite Texto dentro del Input

// Actualizar nombre de la EPS
$("#upd-eps-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar las comillas
$("#upd-eps-nom").keyup(function(){              
    var ta = $("#upd-eps-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar correo de la EPS
$("#upd-eps-cor").keyup(function(){              
    var ta = $("#upd-eps-cor");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-eps-cor").keyup(function(){              
    var ta = $("#upd-eps-cor");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});
$("#upd-eps-cor").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar direccion de la EPS
$("#upd-eps-dir").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar las comillas
$("#upd-eps-dir").keyup(function(){              
    var ta = $("#upd-eps-dir");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar telefono de la EPS
$("#upd-eps-tel").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar las comillas
$("#upd-eps-tel").keyup(function(){              
    var ta = $("#upd-eps-tel");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});