<?php
    //Conexion a la Base de Datos
    require_once('./config/connection/connection.php');

    //Modelo Dispositivo
    require_once('./models/device/deviceModel.php');

    //Instancia del Modelo Dispositivo
    $object = new Device();

    //Invocacion del Metodo Listar Dispositivos
    $query  = $object->queryDevice();

    //Invocacion del Metodo Listar Oficinas
    $office = $object->office();

    //Invocacion del Metodo Listar Marcas
    $brand  = $object->brand();

    //Validacion e Invocacion del Metodo Crear un Dispositivo
    if (isset($_POST['insert_device'])) {
        //isset — Determina si una variable está definida y no es null
        $object->insertDevice();
    }

    //Validacion e Invocacion del Metodo Actualizar la informacion del Dispositivo
    if (isset($_POST['update_device'])){
        $object->updateDevice();
    }

    //Validacion e Invocacion del Metodo Eliminar para eliminar un Dispositivo
    if (isset($_POST['delete_device'])) {
        $object->deleteDevice();
    }

    //Vista Dispositivo
    require_once('./views/device/deviceView.php');
?>