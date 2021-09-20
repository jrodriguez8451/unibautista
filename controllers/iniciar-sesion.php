<?php
    //Conexion a la Base de Datos
    require_once('config/connection/connection.php');
    
    //Modelo Iniciar sesion
    require_once('models/login/loginModel.php');

    //Instancia del Modelo Iniciar sesion
    $object = new Validate();

    //Validacion e Invocacion del Metodo Iniciar sesion
    if (isset($_POST['enter'])) {
        $object->validateLogin();
    }

    //Validacion e Invocacion del Metodo Recuperar clave
    if (isset($_POST['recover_password'])) {
        $object->recoverPassword();
    }

    //Vista Iniciar sesion
    require_once('views/login/loginView.php');
    
    //Vista recuperar clave
    require_once('views/login/recoverPasswordView.php');
?>