<?php 
    session_start();

    require_once('./controllers/template.php');

    $template = new Template();

    if(isset($_GET['ruta'])) {
        if ($_GET['ruta']=='iniciar-sesion') {
            $template->controllerLogin();
        }
        else if($_GET['ruta']=='logout') {
            $template->controllerLogout();
        }
        else if(!isset($_SESSION['usu_id'])) {
            $template->controllerLogout();
        }
        else {
            $template->controllerTemplate();
        }
    } else {
        $template->controllerLogout();
    }