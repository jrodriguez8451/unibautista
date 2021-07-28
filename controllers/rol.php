<?php
    //Conexion a la Base de Datos
    require_once('./config/connection/connection.php');

    //Modelo Rol
    require_once('./models/role/roleModel.php');

    //Instancia del Modelo Rol
    $object = new Role();

    //Invocacion del Metodo Listar Roles 
    $query = $object->queryRole();
    
    //Validacion e Invocacion del Metodo Crear Rol
    if (isset($_POST['insert_role'])) {
        //isset — Determina si una variable está definida y no es null
        $object->insertRole();
    }

    //Validacion e Invocacion del Metodo Actualizar Rol
    if (isset($_POST['update_role'])){
        $object->updateRole();
    }

    //Validacion e Invocacion del Metodo Eliminar Rol
    if (isset($_POST['delete_role'])) {
        $object->deleteRole();
    }

    //Vista Rol
    require_once('./views/role/roleView.php');
?>