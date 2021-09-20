// Insertar Sistema Operativo Usando Ajax
function insertOperatingSystemAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let descipcion = $('#ins-sis-ope-nom').val();
    // Condicion para evitar campos vacios
    if (descipcion.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        validationAlert("¡Diligencia el campo!","#ffc107");
    }else{
        // Poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-insert-operating-system').serialize();
        // Almacenamos dentro de una variable un parametro que pueda recibir el controlador para que ejecute la funcion
        let accion = "&insert_operating_system=1";
        // Enviamos la informacion del formulario + la variable que recibirá el controlador
        dataString = dataString + accion;  
        $.ajax({
            // Realiza una petición POST a una URL provista.
            method:"POST",
            // Ruta en donde se enviará los datos, url en donde hacemos la peticion ajax
            url: 'index.php?ruta=sistema-operativo',
            // Si todo sale bien en el success, el data es todo el contenido html que tiene el index
            data:dataString,
            // Establece una función a ejecutar si la petición a sido satisfactoria
            success: function(){
                // Load es cargar, toma el id de la tabla y vas a cargar nuevamente esta tabla, es un refrescar la tabla
                $('#load').load('index.php?ruta=sistema-operativo #load',function(){
                // Aqui hacemos una funcion que lo que haces es llamarme nuevamente a la tabla cuando todo lo anterior se ejecute
                    genericTable();
                });
                // Alerta de sweetalert
                crudAlert("success","¡Sistema operativo registrado con éxito!","#28a745");
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

// Funcion para Pintar los Datos del Sistema Operativo antes de Actualizar
function updateOperatingSystem(upd_sis_ope_id,upd_sis_ope_nom){
    $('#modal-update-operating-system .modal-body .upd-sis-ope-id').val(upd_sis_ope_id);
    $('#modal-update-operating-system .modal-body .upd-sis-ope-nom').val(upd_sis_ope_nom);
}

// Funcion para Actualizar un Sistema Operativo usando Ajax
function updateOperatingSystemAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let descipcion = $('#upd-sis-ope-nom').val();
    // Condicion para evitar campos vacios
    if (descipcion.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        validationAlert("¡Diligencia el campo!","#ffc107");
    }else{
        // Poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-update-operating-system').serialize();
        let accion = "&update_operating_system=1";
        dataString = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=sistema-operativo',
            data:dataString,
            success: function(){
                $('#load').load('index.php?ruta=sistema-operativo #load',function(){
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

// Funcion para Pintar el ID de un Sistema Operativo antes de Eliminar
function deleteOperatingSystem(del_sis_ope_id,del_sis_ope_des){
    $('#modal-delete-operating-system .modal-body .del-sis-ope-id').val(del_sis_ope_id);
    $('#modal-delete-operating-system .modal-body .del-sis-ope-nom').text(del_sis_ope_des);
}

// Funcion para Eliminar un Sistema Operativo usando Ajax
function deleteOperatingSystemAjax(){
    let dataString = $('#form-delete-operating-system').serialize();
    let accion = "&delete_operating_system=1";
    dataString = dataString + accion;  
    $.ajax({
        method:"POST",
        url: 'index.php?ruta=sistema-operativo',
        data:dataString,
            success: function(){
            $('#load').load('index.php?ruta=sistema-operativo #load',function(){
                genericTable();
            });
            crudAlert("success","¡Sistema operativo eliminado con éxito!","#28a745");
        },
        error:function(){
            genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
        }
    });
}

// Validacion de los Formularios

// Funcion que solo permite caracteres alfanumericos sin tildes, recibe numeros y espacios /*-+,.ñ

// Insertar nombre del sistema operativo
$("#ins-sis-ope-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar nombre del sistema operativo
$("#upd-sis-ope-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});