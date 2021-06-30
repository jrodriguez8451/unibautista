<?php 
    
    class ControladorDePlantilla {

        static public function ctrPlantilla(){
            include('views/template.php');
        }

        static public function ctrLogin(){
            include('loginController.php');
        }

        static public function ctrLogout(){
            include('app_data/config/logout.php');
        }
    }
