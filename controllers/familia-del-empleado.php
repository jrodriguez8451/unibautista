<?php
    //Conexion a la Base de Datos
    require_once('./config/connection/connection.php');

    //Modelo Familia del Empleado
    require_once('./models/family-employee/familyEmployeeModel.php');

    //Instancia del Modelo Familia del Empleado
    $object = new FamilyEmployee();

    //Invocacion del Metodo Listar Usuario
    $query = $object->queryFamilyEmployee();

    //Validacion e Invocacion del Metodo Registrar Familia del Empleado
    if (isset($_POST['insert_family_employee'])) {
        //isset — Determina si una variable está definida y no es null
        $object->insertFamilyEmployee();
    }

    //Validacion e Invocacion del Metodo Actualizar Familia del Empleado
    if (isset($_POST['update_family_employee'])){
        $object->updateFamilyEmployee();
    }

    //Validacion e Invocacion del Metodo Eliminar Familia del Empleado
    if (isset($_POST['delete_family_employee'])) {
        $object->deleteFamilyEmployee();
    }

    //Vista Familia del Empleado
    require_once('./views/family-employee/familyEmployeeView.php');
?>