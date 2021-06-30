<?php
    require_once("./app_data/config/connection.php");
    require_once("./models/validateLoginModel.php");

    $obj = new ValidarElLogin();
    if (isset($_POST['validar'])) {
        $obj->validarLogin();
    }
    
    $query=$obj->selector_rol();

    require_once("./views/login/login.php");
?>