<?php
    //Conexion a la Base de Datos
    require_once('./config/connection/connection.php');

    //Modelo Fondo de Pensión
    require_once('./models/pension-fund/pensionFundModel.php');

    //Instancia del Modelo Fondo de Pensión
    $object = new PensionFund();

    //Invocacion del Metodo Listar Fondo de Pensión
    $query  = $object->queryPensionFund();

    //Validacion e Invocacion del Metodo Registrar un Fondo de Pensión
    if (isset($_POST['insert_pension_fund'])) {
        //isset — Determina si una variable está definida y no es null
        $object->insertPensionFund();
    }

    //Validacion e Invocacion del Metodo Actualizar la informacion del Fondo de Pensión
    if (isset($_POST['update_pension_fund'])){
        $object->updatePensionFund();
    }

    //Validacion e Invocacion del Metodo Eliminar Fondo de Pensión
    if (isset($_POST['delete_pension_fund'])) {
        $object->deletePensionFund();
    }

    //Vista Fondo de Pensión
    require_once('./views/pension-fund/pensionFundView.php');
?>