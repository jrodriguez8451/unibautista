<?php
    require_once("config/connection/connection.php");
    
    require_once("models/login/validateModel.php");

    $object = new Validate();

    if (isset($_POST['validar'])) {
        $object->validateLogin();
    }

    $query = $object->selector_rol();

    require_once("views/login/loginView.php");
?>