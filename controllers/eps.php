<?php
    //Conexion a la Base de Datos
    require_once('./config/connection/connection.php');

    //Modelo EPS
    require_once('./models/eps/epsModel.php');

    //Instancia del Modelo EPS
    $object = new EPS();

    //Invocacion del Metodo Listar EPS
    $query  = $object->queryEPS();

    //Validacion e Invocacion del Metodo Registrar una EPS
    if (isset($_POST['insert_eps'])) {
        //isset — Determina si una variable está definida y no es null
        $object->insertEPS();
    }

    //Validacion e Invocacion del Metodo Actualizar la informacion de la EPS
    if (isset($_POST['update_eps'])){
        $object->updateEPS();
    }

    //Validacion e Invocacion del Metodo Eliminar EPS
    if (isset($_POST['delete_eps'])) {
        $object->deleteEPS();
    }

    //Vista EPS
    require_once('./views/eps/epsView.php');
?>