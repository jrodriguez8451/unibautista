// Funcion para Actualizar los Datos del Usuario usando AJAX
function updateProfile() {
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let primer_nombre_perfil    = $('.usu_pri_nom_per').val();
    let primer_apellido_perfil  = $('.usu_pri_ape_per').val();
    let segundo_apellido_perfil = $('.usu_seg_ape_per').val();
    let contrasena              = $('.usu_con_per').val();
    // Condicion para evitar campos vacios
    if (primer_nombre_perfil.length == 0 || primer_apellido_perfil.length == 0 || segundo_apellido_perfil.length == 0 || contrasena.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        validationAlert("¡Algunos campos no pueden quedar vacíos!","#ffc107");
    }else{
        // Poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-detail-profile').serialize();
        let accion     = "&update_profile=1";
        dataString     = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=profile',
            data:dataString,
            success: function(){
                $('').load('index.php?ruta=profile');
                genericAlert("success","¡Datos actualizados con éxito!","Los cambios se aplicarán al cerrar la sesión.","#28a745");
                //Función para actualizar cada 3 segundos(5000 milisegundos)
                setInterval("refreshData()",2000);
            },
            error:function(){
                genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
            },
            fail: function(){
                genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
            }
        });
        cleanModal();
    }
}

//Función para actualizar cada 3 segundos(5000 milisegundos)
function refreshData(){location.reload(true);}

// Validacion del Formulario Actualizar Datos del Usuario

// Funcion que solo permite Texto dentro del Input

// Primer Nombre del Usuario
$("#usu_pri_nom_per").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar las comillas
$("#usu_pri_nom_per").keyup(function(){              
    var ta = $("#usu_pri_nom_per");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#usu_pri_nom_per").keyup(function(){              
    var ta = $("#usu_pri_nom_per");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#usu_pri_nom_per").keyup(function(){              
    var ta = $("#usu_pri_nom_per");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#usu_pri_nom_per").keyup(function(){              
    var ta = $("#usu_pri_nom_per");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 


// Segundo Nombre del Usuario
$("#usu_seg_nom_per").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#usu_seg_nom_per").keyup(function(){              
    var ta = $("#usu_seg_nom_per");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#usu_seg_nom_per").keyup(function(){              
    var ta = $("#usu_seg_nom_per");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#usu_seg_nom_per").keyup(function(){              
    var ta = $("#usu_seg_nom_per");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#usu_seg_nom_per").keyup(function(){              
    var ta = $("#usu_seg_nom_per");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Primer Apellido del Usuario
$("#usu_pri_ape_per").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#usu_pri_ape_per").keyup(function(){              
    var ta = $("#usu_pri_ape_per");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#usu_pri_ape_per").keyup(function(){              
    var ta = $("#usu_pri_ape_per");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#usu_pri_ape_per").keyup(function(){              
    var ta = $("#usu_pri_ape_per");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#usu_pri_ape_per").keyup(function(){              
    var ta = $("#usu_pri_ape_per");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Segundo Apellido del Usuario
$("#usu_seg_ape_per").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#usu_seg_ape_per").keyup(function(){              
    var ta = $("#usu_seg_ape_per");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#usu_seg_ape_per").keyup(function(){              
    var ta = $("#usu_seg_ape_per");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#usu_seg_ape_per").keyup(function(){              
    var ta = $("#usu_seg_ape_per");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#usu_seg_ape_per").keyup(function(){              
    var ta = $("#usu_seg_ape_per");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Funcion que solo permite Numeros dentro del Input

// Celular del Usuario
$("#usu_cel_per").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#usu_cel_per").keyup(function(){              
    var ta = $("#usu_cel_per");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 

//Validacion para evitar caracteres raros
$("#usu_cel_per").keyup(function(){              
    var ta = $("#usu_cel_per");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#usu_cel_per").keyup(function(){              
    var ta = $("#usu_cel_per");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#usu_cel_per").keyup(function(){              
    var ta = $("#usu_cel_per");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
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
//Validacion para evitar caracteres raros
$("#usu_tel_per").keyup(function(){              
    var ta = $("#usu_tel_per");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar letras
$("#usu_tel_per").keyup(function(){              
    var ta = $("#usu_tel_per");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#usu_tel_per").keyup(function(){              
    var ta = $("#usu_tel_per");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#usu_tel_per").keyup(function(){              
    var ta = $("#usu_tel_per");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#usu_tel_per").keyup(function(){              
    var ta = $("#usu_tel_per");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});
//Validacion para evitar caracteres raros
$("#usu_cel_per").keyup(function(){              
    var ta = $("#usu_cel_per");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar letras
$("#usu_cel_per").keyup(function(){              
    var ta = $("#usu_cel_per");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#usu_dir_per").keyup(function(){              
    var ta = $("#usu_dir_per");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});
//Validacion para evitar caracteres raros
$("#usu_dir_per").keyup(function(){              
    var ta = $("#usu_dir_per");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#usu_dir_per").keyup(function(){              
    var ta = $("#usu_dir_per");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#usu_dir_per").keyup(function(){              
    var ta = $("#usu_dir_per");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 

// Funcion para evitar que se Ingresen Espacios en Blanco

// Celular del Usuario
$("#usu_cel_per").keyup(function(){              
    var ta = $("#usu_cel_per");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#usu_cel_per").keyup(function(){              
    var ta = $("#usu_cel_per");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});
//Validacion para evitar numeros en los input de tipo texto
$("#usu_cel_per").keyup(function(){              
    var ta = $("#usu_cel_per");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 

// Telefono del Usuario
$("#usu_tel_per").keyup(function(){              
    var ta = $("#usu_tel_per");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#usu_tel_per").keyup(function(){              
    var ta = $("#usu_tel_per");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#usu_tel_per").keyup(function(){              
    var ta = $("#usu_tel_per");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

//Funcion para mostrar la contraseña
function showPasswordProfile(){
    var cambio = document.getElementById("usu_con_per");
    if(cambio.type == "password"){
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    }else{
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
} 

// Funcion para evitar espacios en blanco en la contraseña
$("#usu_con_per").keyup(function(){              
    var ta = $("#usu_con_per");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#usu_con_per").keyup(function(){              
    var ta = $("#usu_con_per");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});
$("#usu_con_per").keyup(function(){              
    var ta = $("#usu_con_per");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#usu_con_per").keyup(function(){              
    var ta = $("#usu_con_per");
    letras = ta.val().replace(/[|"´.,:;<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸Ññ\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#usu_con_per").keyup(function(){              
    var ta = $("#usu_con_per");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 