<?php
    //Conexion a la Base de Datos
    require_once('./config/connection/connection.php');

    //Modelo Computador
    require_once('./models/computer/computerModel.php');

    //Instancia del Modelo Computador
    $object           = new Computer();

    //Invocacion del Metodo Listar Computadores
    $query            = $object->queryComputer();

    //Invocacion del Metodo Listar Tipo de Computador
    $computer_type    = $object->computerType();

    //Invocacion del Metodo Listar Marcas
    $brand            = $object->brand();

    //Invocacion del Metodo Listar Sistemas Operativos
    $operating_system = $object->operatingSystem();

    //Invocacion del Metodo Listar Oficinas
    $office          = $object->office();

    //Validacion e Invocacion del Metodo Crear Usuario
    if (isset($_POST['insert_computer'])) {
        //isset — Determina si una variable está definida y no es null
        $object->insertComputer();
    }

    //Validacion e Invocacion del Metodo Actualizar Usuario
    if (isset($_POST['update_computer'])){
        $object->updateComputer();
    }

    //Validacion e Invocacion del Metodo Eliminar Usuario
    if (isset($_POST['delete_computer'])) {
        $object->deleteComputer();
    }

    //Vista Usuario
    require_once('./views/computer/computerView.php');
?>