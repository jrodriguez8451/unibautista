<?php
    //Conexion a la Base de Datos
    require_once('./config/connection/connection.php');

    //Modelo Oficina
    require_once('./models/office/officeModel.php');

    //Instancia del Modelo Oficina
    $object = new Office();

    //Invocacion del Metodo Listar Oficinas
    $query  = $object->queryOffice();
    
    //Validacion e Invocacion del Metodo Crear una Oficina
    if (isset($_POST['insert_office'])) {
        //isset — Determina si una variable está definida y no es null
        $object->insertOffice();
    }

    //Validacion e Invocacion del Metodo Actualizar una Oficina
    if (isset($_POST['update_office'])){
        $object->updateOffice();
    }

    //Validacion e Invocacion del Metodo Eliminar una Oficina
    if (isset($_POST['delete_office'])) {
        $object->deleteOffice();
    }

    //Vista Oficina
    require_once('./views/office/officeView.php');
?>