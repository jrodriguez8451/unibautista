<?php
    require_once('config/connection/connection.php');
    
    require_once('models/login/loginModel.php');

    $object = new Validate();

    if (isset($_POST['enter'])) {
        $object->validateLogin();
    }

    if (isset($_POST['recover_password'])) {
        $object->recoverPassword();
    }

    require_once('views/login/loginView.php');
    
    require_once('views/login/recoverPasswordView.php');
?>