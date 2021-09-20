<?php
    //Conexion a la Base de Datos
    require_once('./config/connection/connection.php');
    //La función require_once() incluye y evalua el fichero especificado durante la ejecución del script.

    //Modelo Prefil
    require_once('./models/profile/profileModel.php');

    //Instancia del Modelo Prefil
    $object    = new Profile();

    //Invocacion del Metodo Listar el Prefil de los Usuarios 
    $query     = $object->dataProfile();

    while($row = mysqli_fetch_object($query)){
        //mysqli_fetch_object Devuelve la fila actual que contiene un conjunto de resultados e imprime el valor de cada campo.
        //Almaceno dentro de una variable el campo que quiero llamar, le digo que es igual a fila para poder asignarle el nombre y valor que tiene en la base de datos.
        $usu_id_per       = $row->usu_id;
        $usu_num_doc_per  = $row->usu_numero_documento;
        $usu_tip_doc_per  = $row->tip_doc_descripcion;
        $usu_pri_nom_per  = $row->usu_primer_nombre;
        $usu_seg_nom_per  = $row->usu_segundo_nombre;
        $usu_pri_ape_per  = $row->usu_primer_apellido;
        $usu_seg_ape_per  = $row->usu_segundo_apellido;
        $usu_cel_per      = $row->usu_celular;
        $usu_tel_per      = $row->usu_telefono;
        $usu_dir_per      = $row->usu_direccion;
        $usu_cor_per      = $row->usu_correo;
        $usu_con_per      = $row->usu_contrasena;
        $usu_fec_reg_per  = $row->usu_fecha_registro;
        $usu_rol_per      = $row->rol_descripcion;
    }

    if (isset($_POST['update_profile'])){
        $object->updateUserProfile();
    }

    //Vista Prefil de los Usuario
    require_once('./views/profile/profileView.php');
?>