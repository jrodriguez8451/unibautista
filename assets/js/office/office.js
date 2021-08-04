// Insertar Oficina Usando Ajax
function insertOfficeAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let descipcion = $('#ins-ofi-nom').val();
    let fecha      = $('#ins-ofi-fec-reg').val();
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
        let dataString = $('#form-insert-office').serialize();
        // Almacenamos dentro de una variable un parametro que pueda recibir el controlador para que ejecute la funcion
        let accion = "&insert_office=1";
        // Enviamos la informacion del formulario + la variable que recibirá el controlador
        dataString = dataString + accion;  
        $.ajax({
            // Realiza una petición POST a una URL provista.
            method:"POST",
            // Ruta en donde se enviará los datos, url en donde hacemos la peticion ajax
            url: 'index.php?ruta=oficina',
            // Si todo sale bien en el success, el data es todo el contenido html que tiene el index
            data:dataString,
            // Establece una función a ejecutar si la petición a sido satisfactoria
            success: function(){
                // Load es cargar, toma el id de la tabla y vas a cargar nuevamente esta tabla, es un refrescar la tabla
                $('#load').load('index.php?ruta=oficina #load',function(){
                // Aqui hacemos una funcion que lo que haces es llamarme nuevamente a la tabla cuando todo lo anterior se ejecute
                    genericTable();
                });
                // Alerta de sweetalert
                crudAlert("success","¡Oficina creada con éxito!","#28a745");
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

// Funcion para Pintar los Datos de la Oficina antes de Actualizar
function updateOffice(upd_ofi_id,upd_ofi_nom,upd_ofi_fec_reg){
    $('#modal-update-office .modal-body .upd-ofi-id').val(upd_ofi_id);
    $('#modal-update-office .modal-body .upd-ofi-nom').val(upd_ofi_nom);
    $('#modal-update-office .modal-body .upd-ofi-fec-reg').val(upd_ofi_fec_reg);
}

// Funcion para Actualizar los Datos de la Oficina usando Ajax
function updateOfficeAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let descipcion = $('#upd-ofi-nom').val();
    let fecha      = $('#upd-ofi-fec-reg').val();
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
        let dataString = $('#form-update-office').serialize();
        let accion = "&update_office=1";
        dataString = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=oficina',
            data:dataString,
            success: function(){
                $('#load').load('index.php?ruta=oficina #load',function(){
                    genericTable();
                });
                crudAlert("success","¡Oficina actualizada con éxito!","#28a745");
            },
            error:function(){
                genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
            }
        });
    }
}

// Funcion para Pintar el ID de una Oficina antes de Eliminar
function deleteOffice(del_ofi_id,del_ofi_des){
    $('#modal-delete-office .modal-body .del-ofi-id').val(del_ofi_id);
    $('#modal-delete-office .modal-body .del-ofi-nom').text(del_ofi_des);
}

// Funcion para Eliminar una Oficina usando Ajax
function deleteOfficeAjax(){
    let dataString = $('#form-delete-office').serialize();
    let accion = "&delete_office=1";
    dataString = dataString + accion;  
    $.ajax({
        method:"POST",
        url: 'index.php?ruta=oficina',
        data:dataString,
            success: function(){
            $('#load').load('index.php?ruta=oficina #load',function(){
                genericTable();
            });
            crudAlert("success","¡Oficina eliminada con éxito!","#28a745");
        },
        error:function(){
            genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
        }
    });
}

// Validacion de los Formularios

// Funcion que solo permite caracteres alfanumericos sin tildes, recibe numeros y espacios /*-+,.ñ

// Insertar nombre de la oficina
$("#ins-ofi-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar nombre de la oficina
$("#upd-ofi-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});