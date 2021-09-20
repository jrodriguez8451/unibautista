// Registrar Fondo de Pensión Usando Ajax
function insertPensionFundAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let nit       = $('#ins-fon-pen-nit').val();
    let nombre    = $('#ins-fon-pen-nom').val();
    let correo    = $('#ins-fon-pen-cor').val();
    let direccion = $('#ins-fon-pen-dir').val();
    let telefono  = $('#ins-fon-pen-tel').val();

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
function detailPensionFund(det_fon_pen_id,det_fon_pen_nit,det_fon_pen_nom,det_fon_pen_cor,det_fon_pen_dir,det_fon_pen_tel,det_fon_pen_est,det_fon_pen_fec_reg) {
    // .val() sirva para obtener el valor de un elemento
    $('#modal-detail-pension-fund .modal-body .det-fon-pen-id').val(det_fon_pen_id);
    $('#modal-detail-pension-fund .modal-body .det-fon-pen-nit').val(det_fon_pen_nit);
    $('#modal-detail-pension-fund .modal-body .det-fon-pen-nom').val(det_fon_pen_nom);
    $('#modal-detail-pension-fund .modal-body .det-fon-pen-cor').val(det_fon_pen_cor);
    $('#modal-detail-pension-fund .modal-body .det-fon-pen-dir').val(det_fon_pen_dir);
    $('#modal-detail-pension-fund .modal-body .det-fon-pen-tel').val(det_fon_pen_tel);
    $('#modal-detail-pension-fund .modal-body .det-fon-pen-est').val(det_fon_pen_est);
    $('#modal-detail-pension-fund .modal-body .det-fon-pen-fec-reg').val(det_fon_pen_fec_reg);
}

// Funcion para Pintar los Datos del Fondo de Pensión antes de Actualizar
function updatePensionFund(upd_fon_pen_id,upd_fon_pen_nit,upd_fon_pen_nom,upd_fon_pen_cor,upd_fon_pen_dir,upd_fon_pen_tel){
    $('#modal-update-pension-fund .modal-body .upd-fon-pen-id').val(upd_fon_pen_id);
    $('#modal-update-pension-fund .modal-body .upd-fon-pen-nit').val(upd_fon_pen_nit);
    $('#modal-update-pension-fund .modal-body .upd-fon-pen-nom').val(upd_fon_pen_nom);
    $('#modal-update-pension-fund .modal-body .upd-fon-pen-cor').val(upd_fon_pen_cor);
    $('#modal-update-pension-fund .modal-body .upd-fon-pen-dir').val(upd_fon_pen_dir);
    $('#modal-update-pension-fund .modal-body .upd-fon-pen-tel').val(upd_fon_pen_tel);
}

// Funcion para Actualizar los Datos del Fondo de Pensión usando Ajax
function updatePensionFundAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let nit       = $('#upd-fon-pen-nit').val();
    let nombre    = $('#upd-fon-pen-nom').val();
    let correo    = $('#upd-fon-pen-cor').val();
    let direccion = $('#upd-fon-pen-dir').val();
    let telefono  = $('#upd-fon-pen-tel').val();

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

// Funcion para Eliminar un Fondo de Pensiónusando Ajax
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

// Validacion de los Formularios

// Funcion que solo permite Numeros dentro del Input

// Insertar NIT del Fondo de Pensión
$("#ins-fon-pen-nit").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input

// Insertar nombre del Fondo de Pensión
$("#ins-fon-pen-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Insertar correo del Fondo de Pensión
$("#ins-fon-pen-cor").keyup(function(){              
    var ta = $("#ins-fon-pen-cor");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 


// Insertar direccion del Fondo de Pensión
$("#ins-fon-pen-dir").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Insertar telefono del Fondo de Pensión
$("#ins-fon-pen-tel").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Numeros dentro del Input

// Actualizar NIT del Fondo de Pensión
$("#upd-fon-pen-nit").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input

// Actualizar nombre del Fondo de Pensión
$("#upd-fon-pen-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar correo del Fondo de Pensión
$("#upd-fon-pen-cor").keyup(function(){              
    var ta = $("#upd-fon-pen-cor");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 

// Actualizar direccion del Fondo de Pensión
$("#upd-fon-pen-dir").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar telefono del Fondo de Pensión
$("#upd-fon-pen-tel").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});