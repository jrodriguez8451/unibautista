<?php
    //Conexion a la Base de Datos
    require_once('./config/connection/connection.php');

    //Modelo Estado
    require_once('./models/status/statusModel.php');

    //Instancia del Modelo Estado
    $object = new Estatus();

    //Invocacion del Metodo Listar Estado
    $query = $object->queryStatus();
    
    //Validacion e Invocacion del Metodo Crear Estado
    if (isset($_POST['insert_status'])) {
        //isset — Determina si una variable está definida y no es null
        $object->insertStatus();
    }

    //Validacion e Invocacion del Metodo Actualizar Estado
    if (isset($_POST['update_status'])){
        $object->updateStatus();
    }

    //Validacion e Invocacion del Metodo Eliminar Estado
    if (isset($_POST['delete_status'])) {
        $object->deleteStatus();
    }

    //Vista Estado
    require_once('./views/status/statusView.php');
?>