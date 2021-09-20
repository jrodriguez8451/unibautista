// Insertar Tipo de Documento Usando Ajax
function insertDocumentTypeAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let descipcion = $('#ins-doc-typ-nom').val();
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
        let dataString = $('#form-insert-document-type').serialize();
        // Almacenamos dentro de una variable un parametro que pueda recibir el controlador para que ejecute la funcion
        let accion = "&insert_document_type=1";
        // Enviamos la informacion del formulario + la variable que recibirá el controlador
        dataString = dataString + accion;  
        $.ajax({
            // Realiza una petición POST a una URL provista.
            method:"POST",
            // Ruta en donde se enviará los datos, url en donde hacemos la peticion ajax
            url: 'index.php?ruta=tipo-de-documento',
            // Si todo sale bien en el success, el data es todo el contenido html que tiene el index
            data:dataString,
            // Establece una función a ejecutar si la petición a sido satisfactoria
            success: function(){
                // Load es cargar, toma el id de la tabla y vas a cargar nuevamente esta tabla, es un refrescar la tabla
                $('#load').load('index.php?ruta=tipo-de-documento #load',function(){
                // Aqui hacemos una funcion que lo que haces es llamarme nuevamente a la tabla cuando todo lo anterior se ejecute
                    genericTable();
                });
                // Alerta de sweetalert
                crudAlert("success","¡Tipo de documento registrado con éxito!","#28a745");
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

// Funcion para Pintar los Datos del Tipo de Documento antes de Actualizar
function updateDocumentType(upd_doc_typ_id,upd_doc_typ_nom,upd_doc_typ_fec){
    $('#modal-update-document-type .modal-body .upd-doc-typ-id').val(upd_doc_typ_id);
    $('#modal-update-document-type .modal-body .upd-doc-typ-nom').val(upd_doc_typ_nom);
    $('#modal-update-document-type .modal-body .upd-doc-typ-fec').val(upd_doc_typ_fec);
}

// Funcion para Actualizar un Tipo de Documento usando Ajax
function updateDocumentTypeAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let descipcion = $('#upd-doc-typ-nom').val();
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
        let dataString = $('#form-update-document-type').serialize();
        let accion = "&update_document_type=1";
        dataString = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=tipo-de-documento',
            data:dataString,
            success: function(){
                $('#load').load('index.php?ruta=tipo-de-documento #load',function(){
                    genericTable();
                });
                genericAlert("success","¡Tipo de documento actualizado con éxito!","Los cambios se aplicarán al cerrar la sesión.","#28a745");
            },
            error:function(){
                genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
            }
        });
    }
}

// Funcion para Pintar el ID de un Tipo de Documento antes de Eliminar
function deleteDocumentType(del_doc_typ_id,del_doc_typ_des){
    $('#modal-delete-document-type .modal-body .del-doc-typ-id').val(del_doc_typ_id);
    $('#modal-delete-document-type .modal-body .del-doc-typ-des').text(del_doc_typ_des);
}

// Funcion para Eliminar un Tipo de Documento usando Ajax
function deleteDocumentTypeAjax(){
    let dataString = $('#form-delete-document-type').serialize();
    let accion = "&delete_document_type=1";
    dataString = dataString + accion;  
    $.ajax({
        method:"POST",
        url: 'index.php?ruta=tipo-de-documento',
        data:dataString,
                success: function(){
            $('#load').load('index.php?ruta=tipo-de-documento #load',function(){
                genericTable();
            });
            crudAlert("success","¡Tipo de documento eliminado con éxito!","#28a745");
        },
        error:function(){
            genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
        }
    });
}

// Validacion de los Formularios

// Funcion que solo permite Texto dentro del Input

// Insertar Descripcion del Tipo de Documento
$("#ins-doc-typ-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar Descripcion del Tipo de Documento
$("#upd-doc-typ-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});