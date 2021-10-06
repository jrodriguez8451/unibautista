<?php
    //Conexion a la Base de Datos
    require_once('./config/connection/connection.php');

    //Modelo Marca
    require_once('./models/post/postModel.php');

    //Instancia del Modelo Cargo
    $object = new Post();

    //Invocacion del Metodo Listar Cargos
    $query  = $object->queryPost();
    
    //Validacion e Invocacion del Metodo Crear un Cargo
    if (isset($_POST['insert_post'])) {
        //isset — Determina si una variable está definida y no es null
        $object->insertPost();
    }

    //Validacion e Invocacion del Metodo Actualizar un Cargo
    if (isset($_POST['update_post'])){
        $object->updatePost();
    }

    //Validacion e Invocacion del Metodo Eliminar Cargo
    if (isset($_POST['delete_post'])) {
        $object->deletePost();
    }

    //Vista Cargo
    require_once('./views/post/postView.php');
?>