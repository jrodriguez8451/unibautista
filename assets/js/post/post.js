// Insertar Cargo usando Ajax
function insertPostAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let descipcion = $('#ins-pos-nom').val();
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
        let dataString = $('#form-insert-post').serialize();
        // Almacenamos dentro de una variable un parametro que pueda recibir el controlador para que ejecute la funcion
        let accion = "&insert_post=1";
        // Enviamos la informacion del formulario + la variable que recibirá el controlador
        dataString = dataString + accion;  
        $.ajax({
            // Realiza una petición POST a una URL provista.
            method:"POST",
            // Ruta en donde se enviará los datos, url en donde hacemos la peticion ajax
            url: 'index.php?ruta=cargo',
            // Si todo sale bien en el success, el data es todo el contenido html que tiene el index
            data:dataString,
            // Establece una función a ejecutar si la petición a sido satisfactoria
            success: function(){
                // Load es cargar, toma el id de la tabla y vas a cargar nuevamente esta tabla, es un refrescar la tabla
                $('#load').load('index.php?ruta=cargo #load',function(){
                // Aqui hacemos una funcion que lo que haces es llamarme nuevamente a la tabla cuando todo lo anterior se ejecute
                    genericTable();
                });
                // Alerta de sweetalert
                crudAlert("success","¡Cargo registrado con éxito!","#28a745");
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

// Funcion para Pintar los Datos del Cargo antes de Actualizar
function updatePost(upd_pos_id,upd_pos_nom){
    $('#modal-update-post .modal-body .upd-pos-id').val(upd_pos_id);
    $('#modal-update-post .modal-body .upd-pos-nom').val(upd_pos_nom);
}

// Funcion para Actualizar los Datos del Cargo usando Ajax
function updatePostAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let descipcion = $('#upd-pos-nom').val();
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
        let dataString = $('#form-update-post').serialize();
        let accion = "&update_post=1";
        dataString = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=cargo',
            data:dataString,
            success: function(){
                $('#load').load('index.php?ruta=cargo #load',function(){
                    genericTable();
                });
                crudAlert("success","¡Cargo actualizado con éxito!","#28a745");
            },
            error:function(){
                genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
            }
        });
    }
}

// Funcion para Pintar el ID de un Cargo antes de Eliminarlo
function deletePost(del_pos_id,del_pos_nom){
    $('#modal-delete-post .modal-body .del-pos-id').val(del_pos_id);
    $('#modal-delete-post .modal-body .del-pos-nom').text(del_pos_nom);
}

// Funcion para Eliminar un Cargo usando Ajax
function deletePostAjax(){
    let dataString = $('#form-delete-post').serialize();
    let accion = "&delete_post=1";
    dataString = dataString + accion;  
    $.ajax({
        method:"POST",
        url: 'index.php?ruta=cargo',
        data:dataString,
            success: function(){
            $('#load').load('index.php?ruta=cargo #load',function(){
                genericTable();
            });
            crudAlert("success","¡Cargo eliminado con éxito!","#28a745");
        },
        error:function(){
            genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
        }
    });
}

// Validacion de los Formularios

// Funcion que solo permite caracteres de tipo texto

// Insertar nombre del Cargo
$("#ins-pos-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\ ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#ins-pos-nom").keyup(function(){              
    var ta = $("#ins-pos-nom");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-pos-nom").keyup(function(){              
    var ta = $("#ins-pos-nom");
    letras = ta.val().replace(/[-|!"#$%.&/()=¡?¿´´,:{};/*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#ins-pos-nom").keyup(function(){              
    var ta = $("#ins-pos-nom");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-pos-nom").keyup(function(){              
    var ta = $("#ins-pos-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar nombre del Cargo
$("#upd-pos-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\ ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#upd-pos-nom").keyup(function(){              
    var ta = $("#upd-pos-nom");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-pos-nom").keyup(function(){              
    var ta = $("#upd-pos-nom");
    letras = ta.val().replace(/[-|!"#$%&/.()=¡?¿´´,:{};/*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#upd-pos-nom").keyup(function(){              
    var ta = $("#upd-pos-nom");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-pos-nom").keyup(function(){              
    var ta = $("#upd-pos-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});