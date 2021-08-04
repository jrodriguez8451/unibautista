<?php
    require_once('config/connection/connection.php');
    
    require_once('models/login/validateModel.php');

    $object = new Validate();

    if (isset($_POST['enter'])) {
        $object->validateLogin();
    }

    $query = $object->selectorRol();

    require_once('views/login/loginView.php');
?>