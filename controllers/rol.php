<?php
    //Llamada a la conexion
    require_once('./config/connection/connection.php');
    //Llamada a los modelos(consultas sql)
    require_once('./models/role/roleModel.php');
    //Objeto o Instacia de la clase Crud
    $object = new Role();
    //Listado de los Tipos de Roles 
    $query = $object->queryRole();
    //Insertar Tipos de Roles 

    //Llamada a las vistas
    require_once('./views/role/roleView.php');
?>