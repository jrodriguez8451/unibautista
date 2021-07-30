<?php
    //Conexion a la Base de Datos
    require_once('./config/connection/connection.php');

    //Modelo Tipo de Computador
    require_once('./models/computer-type/computerTypeModel.php');

    //Instancia del Modelo Tipo de Computador
    $object = new ComputerType();

    //Invocacion del Metodo Listar Tipos de Computador
    $query = $object->queryComputerType();
    
    //Validacion e Invocacion del Metodo Crear Tipo de Computador
    if (isset($_POST['insert_computer_type'])) {
        //isset — Determina si una variable está definida y no es null
        $object->insertComputerType();
    }

    //Validacion e Invocacion del Metodo Actualizar Tipo de Computador
    if (isset($_POST['update_computer_type'])){
        $object->updateComputerType();
    }

    //Validacion e Invocacion del Metodo Eliminar Tipo de Computador
    if (isset($_POST['delete_computer_type'])) {
        $object->deleteComputerType();
    }

    //Vista Tipos de Computador
    require_once('./views/computer-type/computerTypeView.php');
?>