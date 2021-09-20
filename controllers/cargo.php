<?php
    //Conexion a la Base de Datos
    require_once('./config/connection/connection.php');

    //Modelo Marca
    require_once('./models/post/postModel.php');

    //Instancia del Modelo Marca
    $object = new Post();

    //Invocacion del Metodo Listar Marcas
    $query  = $object->queryPost();
    
    //Validacion e Invocacion del Metodo Crear una Marca
    if (isset($_POST['insert_post'])) {
        //isset — Determina si una variable está definida y no es null
        $object->insertPost();
    }

    //Validacion e Invocacion del Metodo Actualizar una Marca
    if (isset($_POST['update_post'])){
        $object->updatePost();
    }

    //Validacion e Invocacion del Metodo Eliminar una Marca
    if (isset($_POST['delete_post'])) {
        $object->deletePost();
    }

    //Vista Marca
    require_once('./views/post/postView.php');
?>