<?php
    //Conexion a la Base de Datos
    require_once('./config/connection/connection.php');

    //Modelo Usuario
    require_once('./models/family-employee/familyEmployeeModel.php');

    //Instancia del Modelo Usuario
    $object        = new User();

    //Invocacion del Metodo Listar Tipo de Documento
    $document_type = $object->documentType();

    //Invocacion del Metodo Listar Usuario
    $query         = $object->queryUser();

    //Invocacion del Metodo Listar Estado
    $status        = $object->status();

    //Invocacion del Metodo Listar Rol
    $role          = $object->role();

    //Validacion e Invocacion del Metodo Crear Usuario
    if (isset($_POST['insert_user'])) {
        //isset — Determina si una variable está definida y no es null
        $object->insertUser();
    }

    //Validacion e Invocacion del Metodo Actualizar Usuario
    if (isset($_POST['update_user'])){
        $object->updateUser();
    }

    //Validacion e Invocacion del Metodo Eliminar Usuario
    if (isset($_POST['delete_user'])) {
        $object->deleteUser();
    }

    //Vista Usuario
    require_once('./views/family-employee/familyEmployeeView.php');
?>