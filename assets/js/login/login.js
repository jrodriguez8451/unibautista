function cleanModal() {
    $('.modal').on('hidden.bs.modal', function(){
        $(this).find('form')[0].reset();
    });
}

// Insertar Tipo de Documento Usando Ajax
function recoverPasswordAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let correo = $('#rec-pas').val();
    // Condicion para evitar campos vacios
    if (correo.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        alert("¡Diligencia el campo!");
    }else{
        // Poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-recover-password').serialize();
        // Almacenamos dentro de una variable un parametro que pueda recibir el controlador para que ejecute la funcion
        let accion = "&recover_password=1";
        // Enviamos la informacion del formulario + la variable que recibirá el controlador
        dataString = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=login',
            data:dataString,
            success: function(){
                $('#load').load('index.php?ruta=login #load');
                alert('Clave recuperada, revisa tu correo.');
            },
            error: function(){
                alert("El correo no se encuentra registrado en el sistema.");       
            },
            fail: function(){
                alert("Error al recuperar la clave.");  
            }
        });
        cleanModal();
    }
}

//Funcion para mostrar la contraseña
function showPasswordLogin(){
    var cambio = document.getElementById("password");
    if(cambio.type == "password"){
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    }else{
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
} 

// Funcion para evitar espacios en blanco en el correo
$("#email").keyup(function(){              
    var ta = $("#email");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 

// Funcion para evitar espacios en blanco en la contraseña
$("#password").keyup(function(){              
    var ta = $("#password");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
