// Insertar Rol Usando Ajax
function insertRoleAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let descipcion = $('#ins-rol-nom').val();
    let fecha      = $('#ins-rol-fec').val();
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
        let dataString = $('#form-insert-role').serialize();
        // Almacenamos dentro de una variable un parametro que pueda recibir el controlador para que ejecute la funcion
        let accion = "&insert_role=1";
        // Enviamos la informacion del formulario + la variable que recibirá el controlador
        dataString = dataString + accion;  
        $.ajax({
            // Realiza una petición POST a una URL provista.
            method:"POST",
            // Ruta en donde se enviará los datos, url en donde hacemos la peticion ajax
            url: 'index.php?ruta=rol',
            // Si todo sale bien en el success, el data es todo el contenido html que tiene el index
            data:dataString,
            // Establece una función a ejecutar si la petición a sido satisfactoria
            success: function(){
                // Load es cargar, toma el id de la tabla y vas a cargar nuevamente esta tabla, es un refrescar la tabla
                $('#load').load('index.php?ruta=rol #load',function(){
                // Aqui hacemos una funcion que lo que haces es llamarme nuevamente a la tabla cuando todo lo anterior se ejecute
                    genericTable();
                });
                // Alerta de sweetalert
                crudAlert("success","¡Rol creado con éxito!","#28a745");
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

// Funcion para Pintar los Datos del Rol antes de Actualizar
function updateRole(upd_rol_id,upd_rol_nom,upd_rol_fec){
    $('#modal-update-role .modal-body .upd-rol-id').val(upd_rol_id);
    $('#modal-update-role .modal-body .upd-rol-nom').val(upd_rol_nom);
    $('#modal-update-role .modal-body .upd-rol-fec').val(upd_rol_fec);
}

// Funcion para Actualizar un Rol usando Ajax
function updateRoleAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let descipcion = $('#upd-rol-nom').val();
    let fecha      = $('#upd-rol-fec').val();
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
        let dataString = $('#form-update-role').serialize();
        let accion = "&update_role=1";
        dataString = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=rol',
            data:dataString,
            success: function(){
                $('#load').load('index.php?ruta=rol #load',function(){
                    genericTable();
                });
                genericAlert("success","¡Rol actualizado con éxito!","Los cambios se aplicarán al cerrar la sesión.","#28a745");
            },
            error:function(){
                genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
            }
        });
    }
}

// Funcion para Pintar el ID de un Rol antes de Eliminar
function deleteRole(del_rol_id,del_rol_des){
    $('#modal-delete-role .modal-body .del-rol-id').val(del_rol_id);
    $('#modal-delete-role .modal-body .del-rol-des').text(del_rol_des);
}

// Funcion para Eliminar un Rol usando Ajax
function deleteRoleAjax(){
    let dataString = $('#form-delete-role').serialize();
    let accion = "&delete_role=1";
    dataString = dataString + accion;  
    $.ajax({
        method:"POST",
        url: 'index.php?ruta=rol',
        data:dataString,
                success: function(){
            $('#load').load('index.php?ruta=rol #load',function(){
                genericTable();
            });
            crudAlert("success","¡Rol eliminado con éxito!","#28a745");
        },
        error:function(){
            genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
        }
    });
}