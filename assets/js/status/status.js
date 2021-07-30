// Insertar Estado Usando Ajax
function insertStatusAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let descipcion = $('#ins-est-nom').val();
    let fecha      = $('#ins-est-fec').val();
    // Condicion para evitar campos vacios
    if (descipcion.length == 0 || fecha.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        validationAlert("¡Algunos campos no pueden quedar vacíos!","#ffc107");
    }else{
        // Poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-insert-status').serialize();
        // Almacenamos dentro de una variable un parametro que pueda recibir el controlador para que ejecute la funcion
        let accion = "&insert_status=1";
        // Enviamos la informacion del formulario + la variable que recibirá el controlador
        dataString = dataString + accion;  
        $.ajax({
            // Realiza una petición POST a una URL provista.
            method:"POST",
            // Ruta en donde se enviará los datos, url en donde hacemos la peticion ajax
            url: 'index.php?ruta=estado',
            // Si todo sale bien en el success, el data es todo el contenido html que tiene el index
            data:dataString,
            // Establece una función a ejecutar si la petición a sido satisfactoria
            success: function(){
                // Load es cargar, toma el id de la tabla y vas a cargar nuevamente esta tabla, es un refrescar la tabla
                $('#load').load('index.php?ruta=estado #load',function(){
                // Aqui hacemos una funcion que lo que haces es llamarme nuevamente a la tabla cuando todo lo anterior se ejecute
                    genericTable();
                });
                // Alerta de sweetalert
                crudAlert("success","¡Estado creado con éxito!","#28a745");
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

// Funcion para Pintar los Datos del Estado antes de Actualizar
function updateStatus(upd_est_id,upd_est_nom,upd_est_fec){
    $('#modal-update-status .modal-body .upd-est-id').val(upd_est_id);
    $('#modal-update-status .modal-body .upd-est-nom').val(upd_est_nom);
    $('#modal-update-status .modal-body .upd-est-fec').val(upd_est_fec);
}

// Funcion para Actualizar un Estado usando Ajax
function updateStatusAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let descipcion = $('#upd-est-nom').val();
    let fecha      = $('#upd-est-fec').val();
    // Condicion para evitar campos vacios
    if (descipcion.length == 0 || fecha.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        validationAlert("¡Algunos campos no pueden quedar vacíos!","#ffc107");
    }else{
        // Poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-update-status').serialize();
        let accion = "&update_status=1";
        dataString = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=estado',
            data:dataString,
            success: function(){
                $('#load').load('index.php?ruta=estado #load',function(){
                    genericTable();
                });
                genericAlert("success","¡Datos actualizados con éxito!","Los cambios se aplicarán al cerrar la sesión.","#28a745");
            },
            error:function(){
                genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
            }
        });
    }
}

// Funcion para Pintar el ID de un Estado antes de Eliminar
function deleteStatus(del_est_id,del_est_des){
    $('#modal-delete-status .modal-body .del-est-id').val(del_est_id);
    $('#modal-delete-status .modal-body .del-est-des').text(del_est_des);
}

// Funcion para Eliminar un Estado usando Ajax
function deleteStatusAjax(){
    let dataString = $('#form-delete-status').serialize();
    let accion = "&delete_status=1";
    dataString = dataString + accion;  
    $.ajax({
        method:"POST",
        url: 'index.php?ruta=estado',
        data:dataString,
                success: function(){
            $('#load').load('index.php?ruta=estado #load',function(){
                genericTable();
            });
            crudAlert("success","¡Estado eliminado con éxito!","#28a745");
        },
        error:function(){
            genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
        }
    });
}

// Validacion de los Formularios

// Funcion que solo permite Texto dentro del Input

// Insertar Descripcion del Estado
$("#ins-est-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar Descripcion del Estado
$("#upd-est-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});