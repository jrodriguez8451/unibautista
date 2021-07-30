// Insertar Tipo de Computador Usando Ajax
function insertComputerTypeAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let descipcion = $('#ins-com-typ-nom').val();
    let fecha      = $('#ins-com-typ-fec').val();
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
        let dataString = $('#form-insert-computer-type').serialize();
        // Almacenamos dentro de una variable un parametro que pueda recibir el controlador para que ejecute la funcion
        let accion = "&insert_computer_type=1";
        // Enviamos la informacion del formulario + la variable que recibirá el controlador
        dataString = dataString + accion;  
        $.ajax({
            // Realiza una petición POST a una URL provista.
            method:"POST",
            // Ruta en donde se enviará los datos, url en donde hacemos la peticion ajax
            url: 'index.php?ruta=tipo-de-computador',
            // Si todo sale bien en el success, el data es todo el contenido html que tiene el index
            data:dataString,
            // Establece una función a ejecutar si la petición a sido satisfactoria
            success: function(){
                // Load es cargar, toma el id de la tabla y vas a cargar nuevamente esta tabla, es un refrescar la tabla
                $('#load').load('index.php?ruta=tipo-de-computador #load',function(){
                // Aqui hacemos una funcion que lo que haces es llamarme nuevamente a la tabla cuando todo lo anterior se ejecute
                    genericTable();
                });
                // Alerta de sweetalert
                crudAlert("success","¡Tipo de Computador creado con éxito!","#28a745");
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

// Funcion para Pintar los Datos del Tipo de Computador antes de Actualizar
function updateComputerType(upd_com_typ_id,upd_com_typ_nom,upd_com_typ_fec){
    $('#modal-update-computer-type .modal-body .upd-com-typ-id').val(upd_com_typ_id);
    $('#modal-update-computer-type .modal-body .upd-com-typ-nom').val(upd_com_typ_nom);
    $('#modal-update-computer-type .modal-body .upd-com-typ-fec').val(upd_com_typ_fec);
}

// Funcion para Actualizar un Tipo de Computador usando Ajax
function updateComputerTypeAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let descipcion = $('#upd-com-typ-nom').val();
    let fecha      = $('#upd-com-typ-fec').val();
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
        let dataString = $('#form-update-computer-type').serialize();
        let accion = "&update_computer_type=1";
        dataString = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=tipo-de-computador',
            data:dataString,
            success: function(){
                $('#load').load('index.php?ruta=tipo-de-computador #load',function(){
                    genericTable();
                });
                crudAlert("success","¡Tipo de Computador actualizado con éxito!","#28a745");
            },
            error:function(){
                genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
            }
        });
    }
}

// Funcion para Pintar el ID de un Tipo de Computador antes de Eliminar
function deleteComputerType(del_com_typ_id,del_com_typ_des){
    $('#modal-delete-computer-type .modal-body .del-com-typ-id').val(del_com_typ_id);
    $('#modal-delete-computer-type .modal-body .del-com-typ-des').text(del_com_typ_des);
}

// Funcion para Eliminar un Tipo de Computador usando Ajax
function deleteComputerTypeAjax(){
    let dataString = $('#form-delete-computer-type').serialize();
    let accion = "&delete_computer_type=1";
    dataString = dataString + accion;  
    $.ajax({
        method:"POST",
        url: 'index.php?ruta=tipo-de-computador',
        data:dataString,
                success: function(){
            $('#load').load('index.php?ruta=tipo-de-computador #load',function(){
                genericTable();
            });
            crudAlert("success","¡Tipo de Computador eliminado con éxito!","#28a745");
        },
        error:function(){
            genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
        }
    });
}

// Validacion de los Formularios

// Funcion que solo permite Texto dentro del Input

// Insertar Descripcion del Tipo de Computador
$("#ins-com-typ-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar Descripcion del Tipo de Computador
$("#upd-com-typ-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});