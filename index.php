<?php 
    session_start();
    require_once('controllers/templateController.php');
    $plantilla = new ControladorDePlantilla();
    if(isset($_GET['ruta'])){
        if ($_GET['ruta']=="loginController"){
            
            $plantilla->ctrLogin();
        }
        else if($_GET['ruta']=="logout"){
            $plantilla->ctrLogout();
        }
        else if(!isset($_SESSION['usu_id'])){
            $plantilla->ctrLogout();
            
        }
        else{
            $plantilla->ctrPlantilla();
        }
    }
    else{
        $plantilla->ctrLogout();
    }