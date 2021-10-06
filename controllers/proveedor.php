<?php
    //Conexion a la Base de Datos
    require_once('./config/connection/connection.php');

    //Modelo Proveedor
    require_once('./models/supplier/supplierModel.php');

    //Instancia del Modelo Proveedor
    $object = new Supplier();

    //Invocacion del Metodo Listar Proveedor
    $query  = $object->querySupplier();

    //Validacion e Invocacion del Metodo Registrar un Proveedor
    if (isset($_POST['insert_supplier'])) {
        //isset — Determina si una variable está definida y no es null
        $object->insertSupplier();
    }

    //Validacion e Invocacion del Metodo Actualizar la informacion del Proveedor
    if (isset($_POST['update_supplier'])){
        $object->updateSupplier();
    }

    //Validacion e Invocacion del Metodo Eliminar un Proveedor
    if (isset($_POST['delete_supplier'])) {
        $object->deleteSupplier();
    }

    //Vista Proveedor
    require_once('./views/supplier/supplierView.php');
?>