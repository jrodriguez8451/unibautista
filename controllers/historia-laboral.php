<?php
    //Conexion a la Base de Datos
    require_once('./config/connection/connection.php');

    //Modelo Historia Laboral
    require_once('./models/work-history/workHistoryModel.php');

    //Instancia del Modelo Historia Laboral
    $object   = new WorkHistory();

    //Invocacion del Metodo Listar Historia Laboral
    $query    = $object->queryWorkHistory();

    //Invocacion del Metodo Listar Empleado
    $employee = $object->employee();

    //Invocacion del Metodo Listar Cargo
    $post     = $object->post();

    //Validacion e Invocacion del Metodo Registrar Historia Laboral
    if (isset($_POST['insert_work_history'])) {
        //isset — Determina si una variable está definida y no es null
        $object->insertWorkHistory();
    }

    //Validacion e Invocacion del Metodo Actualizar Historia Laboral
    if (isset($_POST['update_work_history'])){
        $object->updateWorkHistory();
    }

    //Validacion e Invocacion del Metodo Eliminar Historia Laboral
    if (isset($_POST['delete_work_history'])) {
        $object->deleteWorkHistory();
    }

    //Vista Historia Laboral
    require_once('./views/work-history/workHistoryView.php');
?>