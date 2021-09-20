<?php
    //Conexion a la Base de Datos
    require_once('./config/connection/connection.php');

    //Modelo Sistema Operativo
    require_once('./models/operating-system/operatingSystemModel.php');

    //Instancia del Modelo Sistema Operativo
    $object = new OperatingSystem();

    //Invocacion del Metodo Listar Sistemas Operativos
    $query  = $object->queryOperatingSystem();
    
    //Validacion e Invocacion del Metodo Registrar un Sistema Operativo
    if (isset($_POST['insert_operating_system'])) {
        //isset — Determina si una variable está definida y no es null
        $object->insertOperatingSystem();
    }

    //Validacion e Invocacion del Metodo Modificar un Sistema Operativo
    if (isset($_POST['update_operating_system'])){
        $object->updateOperatingSystem();
    }

    //Validacion e Invocacion del Metodo Eliminar un Sistema Operativo
    if (isset($_POST['delete_operating_system'])) {
        $object->deleteOperatingSystem();
    }

    //Vista Sistema Operativo
    require_once('./views/operating-system/operatingSystemView.php');
?>