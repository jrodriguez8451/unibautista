<?php
    //Conexion a la Base de Datos
    require_once('./config/connection/connection.php');

    //Modelo Marca
    require_once('./models/brand/brandModel.php');

    //Instancia del Modelo Marca
    $object = new Brand();

    //Invocacion del Metodo Listar Marcas
    $query  = $object->queryBrand();
    
    //Validacion e Invocacion del Metodo Crear una Marca
    if (isset($_POST['insert_brand'])) {
        //isset — Determina si una variable está definida y no es null
        $object->insertBrand();
    }

    //Validacion e Invocacion del Metodo Actualizar una Marca
    if (isset($_POST['update_brand'])){
        $object->updateBrand();
    }

    //Validacion e Invocacion del Metodo Eliminar una Marca
    if (isset($_POST['delete_brand'])) {
        $object->deleteBrand();
    }

    //Vista Marca
    require_once('./views/brand/brandView.php');
?>