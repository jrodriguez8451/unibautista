<?php 
    class ControllerTemplate {
        static public function controller_Template(){
            include('views/template.php');
        }
        static public function controllerLogin(){
            include('login.php');
        }
        static public function controllerRecoverPassword(){
            include('recuperar-clave.php');
        }
        static public function controllerLogout(){
            include('controllers/logout.php');
        }
    }