<?php 
    class Template {
        static public function controllerTemplate(){
            include('views/template.php');
        }
        static public function controllerLogin(){
            include('iniciar-sesion.php');
        }
        static public function controllerLogout(){
            include('controllers/logout.php');
        }
    }