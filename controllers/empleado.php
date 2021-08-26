<?php
    //Conexion a la Base de Datos
    require_once('./config/connection/connection.php');

    //Modelo Empleado
    require_once('./models/employee/employeeModel.php');

    //Instancia del Modelo Empleado
    $object        = new Employee();

    //Invocacion del Metodo Listar Caja de Compensacion
    $compensation_box = $object->queryCompensationBox();

    //Invocacion del Metodo Listar Fondo de Pension
    $pension_fund     = $object->queryPensionFund();

    //Invocacion del Metodo Listar Empleado
    $query            = $object->queryEmployee();

    //Invocacion del Metodo Listar Tipo de Documento
    $document_type    = $object->documentType();

    //Invocacion del Metodo Listar Familiar del Empleado
    $family           = $object->queryFamily();

    //Invocacion del Metodo Listar Cargo
    $post             = $object->queryPost();

    //Invocacion del Metodo Listar EPS
    $eps              = $object->queryEPS();

    //Invocacion del Metodo Listar ARL
    $arl              = $object->queryARL();

    //Validacion e Invocacion del Metodo Crear Usuario
    if (isset($_POST['insert_employee'])) {
        //isset — Determina si una variable está definida y no es null
        $object->insertEmployee();
    }

    //Validacion e Invocacion del Metodo Actualizar Usuario
    if (isset($_POST['update_employee'])){
        $object->updateEmployee();
    }

    //Validacion e Invocacion del Metodo Eliminar Usuario
    if (isset($_POST['delete_employee'])) {
        $object->deleteEmployee();
    }

    //Vista Usuario
    require_once('./views/employee/employeeView.php');
?>