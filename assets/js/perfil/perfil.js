//FUNCION PARA ACTUALIZAR UN USUARIO CON AJAX
function updateProfile() {
    //Capturamos el valor que contienen los inputs y los almacenamos en una variable
    id_perfil               = $('.usu_id_perfil').val();
    primer_nombre_perfil    = $('.usu_pri_nom_perfil').val();
    segundo_nombre_perfil   = $('.usu_seg_nom_perfil').val();
    primer_apellido_perfil  = $('.usu_pri_ape_perfil').val();
    segundo_apellido_perfil = $('.usu_seg_ape_perfil').val();
    celular_perfil          = $('.usu_cel_perfil').val();
    telefono_perfil         = $('.usu_tel_perfil').val();
    direccion_perfil        = $('.usu_dir_perfil').val();
    //condicion para evitar campos vacios
    let dataString          = $('#form_update_profile').serialize();
    let accion              = "&update_profile=1";
    dataString              = dataString + accion;  
    $.ajax({
        method:"POST",
        url: 'index.php?ruta=usuarioController.php',
        data:dataString,
        success: function(){
            $('#body').load('index.php?ruta=perfil.php #body',function(){
            tabla();
            });
            alertas_crud("success","¡Datos actualizados con éxito!","#28a745");
        },
        error:function(){
            alerta_generica("error","UPS...","¡Algo salió mal!","#dc3545");       
        }
    });
}