//FUNCION PARA ACTUALIZAR UN USUARIO CON AJAX

function updateProfile() {
    //Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let id_perfil               = $('.usu_id_per').val();
    let primer_nombre_perfil    = $('#usu_pri_nom_per').val();
    let segundo_nombre_perfil   = $('.usu_seg_nom_per').val();
    let primer_apellido_perfil  = $('#usu_pri_ape_per').val();
    let segundo_apellido_perfil = $('#usu_seg_ape_per').val();
    let celular_perfil          = $('.usu_cel_per').val();
    let telefono_perfil         = $('.usu_tel_per').val();
    let direccion_perfil        = $('.usu_dir_per').val();

    //condicion para evitar campos vacios
    if (primer_nombre_perfil.length == 0 || primer_apellido_perfil.length == 0 || segundo_apellido_perfil.length == 0){ 
        //retirar el data-dismiss para que no se cierre la modal
        $(".shut_down_modal").removeAttr("data-dismiss");
        //Alerta de validacion
        validationAlert("¡Algunos campos no pueden quedar vacíos!","#ffc107");
    }else{
        //poner el data-dismiss para que se cierre la modal
        $(".shut_down_modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form_update_profile').serialize();
        let accion     = "&update_profile=1";
        dataString     = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=profile.php',
            data:dataString,
            success: function(){
                $('').load('index.php?ruta=profile.php');
                genericAlert("success","¡Datos actualizados con éxito!","Los cambios se aplicarán al cerrar la sesión.","#28a745");
            },
            error:function(){
                genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
            }
        });
    }
}

//VALIDACION DEL FORMULARIO DE ACTUALIZAR DATOS DEL USUARIO

//FUNCION QUE SOLO PERMITE NUMEROS EN EL INPUT

// Celular del Usuario
$("#usu_cel_per").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Telefono del Usuario
$("#usu_tel_per").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// FUNCION PARA EVITAR QUE SE INGRESEN ESPACIOS EN BLANCO

// Celular del Usuario
$("#usu_cel_per").keyup(function(){              
    var ta = $("#usu_cel_per");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 

// Telefono del Usuario
$("#usu_tel_per").keyup(function(){              
    var ta = $("#usu_tel_per");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 