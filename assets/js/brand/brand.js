// Insertar Marca Usando Ajax
function insertBrandAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let descipcion = $('#ins-bra-nom').val();
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
        let dataString = $('#form-insert-brand').serialize();
        // Almacenamos dentro de una variable un parametro que pueda recibir el controlador para que ejecute la funcion
        let accion = "&insert_brand=1";
        // Enviamos la informacion del formulario + la variable que recibirá el controlador
        dataString = dataString + accion;  
        $.ajax({
            // Realiza una petición POST a una URL provista.
            method:"POST",
            // Ruta en donde se enviará los datos, url en donde hacemos la peticion ajax
            url: 'index.php?ruta=marca',
            // Si todo sale bien en el success, el data es todo el contenido html que tiene el index
            data:dataString,
            // Establece una función a ejecutar si la petición a sido satisfactoria
            success: function(){
                // Load es cargar, toma el id de la tabla y vas a cargar nuevamente esta tabla, es un refrescar la tabla
                $('#load').load('index.php?ruta=marca #load',function(){
                // Aqui hacemos una funcion que lo que haces es llamarme nuevamente a la tabla cuando todo lo anterior se ejecute
                    genericTable();
                });
                // Alerta de sweetalert
                crudAlert("success","¡Marca registrada con éxito!","#28a745");
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

// Funcion para Pintar los Datos de la Marca antes de Actualizar
function updateBrand(upd_bra_id,upd_bra_nom){
    $('#modal-update-brand .modal-body .upd-bra-id').val(upd_bra_id);
    $('#modal-update-brand .modal-body .upd-bra-nom').val(upd_bra_nom);
}

// Funcion para Actualizar los Datos de la Marca usando Ajax
function updateBrandAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let descipcion = $('#upd-bra-nom').val();
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
        let dataString = $('#form-update-brand').serialize();
        let accion = "&update_brand=1";
        dataString = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=marca',
            data:dataString,
            success: function(){
                $('#load').load('index.php?ruta=marca #load',function(){
                    genericTable();
                });
                crudAlert("success","¡Marca actualizada con éxito!","#28a745");
            },
            error:function(){
                genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
            }
        });
    }
}

// Funcion para Pintar el ID de una Marca antes de Eliminar
function deleteBrand(del_bra_id,del_bra_des){
    $('#modal-delete-brand .modal-body .del-bra-id').val(del_bra_id);
    $('#modal-delete-brand .modal-body .del-bra-nom').text(del_bra_des);
}

// Funcion para Eliminar una Marca usando Ajax
function deleteBrandAjax(){
    let dataString = $('#form-delete-brand').serialize();
    let accion = "&delete_brand=1";
    dataString = dataString + accion;  
    $.ajax({
        method:"POST",
        url: 'index.php?ruta=marca',
        data:dataString,
            success: function(){
            $('#load').load('index.php?ruta=marca #load',function(){
                genericTable();
            });
            crudAlert("success","¡Marca eliminada con éxito!","#28a745");
        },
        error:function(){
            genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
        }
    });
}

// Validacion de los Formularios

// Funcion que solo permite caracteres alfanumericos sin tildes, recibe numeros y espacios /*-+,.ñ

// Insertar nombre de la Marca
$("#ins-bra-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\ ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar las comillas
$("#ins-bra-nom").keyup(function(){              
    var ta = $("#ins-bra-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar nombre de la Marca
$("#upd-bra-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar las comillas
$("#upd-bra-nom").keyup(function(){              
    var ta = $("#upd-bra-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});