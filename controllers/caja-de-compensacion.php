<?php
    //Conexion a la Base de Datos
    require_once('./config/connection/connection.php');

    //Modelo Caja de Compensación
    require_once('./models/compensation-box/compensationBoxModel.php');

    //Instancia del Modelo Caja de Compensación
    $object = new CompensationBox();

    //Invocacion del Metodo Listar Caja de Compensación
    $query  = $object->queryCompensationBox();

    //Validacion e Invocacion del Metodo Registrar una Caja de Compensación
    if (isset($_POST['insert_compensation_box'])) {
        //isset — Determina si una variable está definida y no es null
        $object->insertCompensationBox();
    }

    //Validacion e Invocacion del Metodo Actualizar la informacion de la Caja de Compensación
    if (isset($_POST['update_compensation_box'])){
        $object->updateCompensationBox();
    }

    //Validacion e Invocacion del Metodo Eliminar Caja de Compensación
    if (isset($_POST['delete_compensation_box'])) {
        $object->deleteCompensationBox();
    }

    //Vista Caja de Compensación
    require_once('./views/compensation-box/compensationBoxView.php');
?>