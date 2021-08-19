<?php
    //Conexion a la Base de Datos
    require_once('./config/connection/connection.php');

    //Modelo ARL
    require_once('./models/arl/arlModel.php');

    //Instancia del Modelo ARL
    $object = new ARL();

    //Invocacion del Metodo Listar ARL
    $query  = $object->queryARL();

    //Validacion e Invocacion del Metodo Registrar una ARL
    if (isset($_POST['insert_arl'])) {
        //isset — Determina si una variable está definida y no es null
        $object->insertARL();
    }

    //Validacion e Invocacion del Metodo Actualizar la informacion de la ARL
    if (isset($_POST['update_arl'])){
        $object->updateARL();
    }

    //Validacion e Invocacion del Metodo Eliminar ARL
    if (isset($_POST['delete_arl'])) {
        $object->deleteARL();
    }

    //Vista ARL
    require_once('./views/arl/arlView.php');
?>