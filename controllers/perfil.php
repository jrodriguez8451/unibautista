<?php
    //Conexion a la Base de Datos
    require_once('./config/connection/connection.php');
    //La función require_once() incluye y evalua el fichero especificado durante la ejecución del script.

    //Modelo Usuario
    require_once('./models/perfil/perfilModel.php');

    //Instancia del Modelo Usuario
    $object = new Perfil();

    //Invocacion del Metodo Listar Usuarios 
    $query = $object->dataPerfil();

    while($row = mysqli_fetch_object($query)){
        //mysqli_fetch_object Devuelve la fila actual que contiene un conjunto de resultados e imprime el valor de cada campo.

        //Almaceno dentro de una variable el campo que quiero llamar, le digo que es igual a fila para poder asignarle el nombre y valor que tiene en la base de datos.
        $usu_id       = $row-> usu_id;
        $usu_num_doc  = $row-> usu_numero_documento;
        $usu_tip_doc  = $row-> tip_doc_descripcion;
        $usu_pri_nom  = $row-> usu_primer_nombre;
        $usu_seg_nom  = $row-> usu_segundo_nombre;
        $usu_pri_ape  = $row-> usu_primer_apellido;
        $usu_seg_ape  = $row-> usu_segundo_apellido;
        $usu_cel      = $row-> usu_celular;
        $usu_tel      = $row-> usu_telefono;
        $usu_dir      = $row-> usu_direccion;
        $usu_cor      = $row-> usu_correo;
        $usu_fec_reg  = $row-> usu_fecha_registro;
        $usu_rol      = $row-> rol_descripcion;
    }

    // $_POST es una variable super global php que se utiliza para recopilar datos de formulario después de enviar un formulario HTML con method="post". $_POST también se utiliza ampliamente para pasar variables.

    //Validacion e Invocacion del Metodo Actualizar Usuario
    if (isset($_POST['update_profile'])){
        $object->updateUserProfile();
    }

    //Vista Usuario
    require_once('./views/perfil/perfilView.php');
?>