function cleanModal() {
    $('.modal').on('hidden.bs.modal', function(){
        $(this).find('form')[0].reset();
    });
}

function validateFormLogin(){
    var correo     = document.getElementById("email").value;
    var contrasena = document.getElementById("password").value;
    if((correo == "") || (contrasena == "")) {
        alert("¡Los campos no pueden quedar vacíos!");
        return false;
    }
}

// Funcion para enviar el correo electronico del usuario para poder recuperar su contraseña
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
            url: 'index.php?ruta=iniciar-sesion',
            data:dataString,
            success: function(){
                $('#load').load('index.php?ruta=iniciar-sesion #load');
                alert('Revisa tu correo institucional para recuperar la contraseña.');
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
$("#email").keyup(function(){              
    var ta = $("#email");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#email").keyup(function(){              
    var ta = $("#email");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#email").keyup(function(){              
    var ta = $("#email");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#email").keyup(function(){              
    var ta = $("#email");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Funcion para evitar espacios en blanco en la contraseña
$("#password").keyup(function(){              
    var ta = $("#password");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
$("#password").keyup(function(){              
    var ta = $("#password");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#password").keyup(function(){              
    var ta = $("#password");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#password").keyup(function(){              
    var ta = $("#password");
    letras = ta.val().replace(/[|"´.,:;<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├™╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸Ññ\\{}]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#password").keyup(function(){              
    var ta = $("#password");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Funcion para evitar espacios en blanco en el correo
$("#rec-pas").keyup(function(){              
    var ta = $("#rec-pas");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
$("#rec-pas").keyup(function(){              
    var ta = $("#rec-pas");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#rec-pas").keyup(function(){              
    var ta = $("#rec-pas");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#rec-pas").keyup(function(){              
    var ta = $("#rec-pas");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»™┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#rec-pas").keyup(function(){              
    var ta = $("#rec-pas");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});