<?php
    //Un OBJETO (conexion en este caso) se le conoce en programacion como una CLASE
    class Conexion {

        /* Tipos de Variables o Funciones y Quien las puede usar:
        Private = solo tú
        Protected = tú y tus descendientes (herencia)
        Public = cualquiera.*/

        // Atributos:
        private   $servidor;
        private   $usuario;
        private   $contrasena;
        private   $base_de_datos;
        protected $conexion;

        //METODOS O FUNCIONES DE LA CLASE: 
        
        //Las funciones o metodos reciben caracteristicas o parametros

        //Un constructor permite inicializar las propiedades de un objeto al crear el objeto. 
        function __construct(){
            //con this->accedemos a la clase conexion
            //$this es una referencia al objeto invocador
            $this->datosConexion();
            $this->establecerConexion();
        }

        //Funcion para usar las variables y poder conectarse a la base de datos
        protected function datosConexion(){
            //require() establece que el código del archivo invocado es requerido, es decir, obligatorio para el funcionamiento del programa. Por ello, si el archivo especificado en la función require() no se encuentra saltará un error «PHP Fatal error» y el programa PHP se detendrá.
            require('dataConnection.php');

            //Aqui le estamos diciendo a la funcion que las variables privadas de este archivo son los mismo del archivo dataConnection.php
            $this->servidor      = $servidor;
            $this->usuario       = $usuario;
            $this->contrasena    = $contrasena;
            $this->base_de_datos = $base_de_datos;
        }

        //Funcion para conectarse a la base de datos
        protected function establecerConexion(){
            //La función mysqli_connect() abre una nueva conexión al servidor MySQL
            $this->conexion = mysqli_connect($this->servidor,$this->usuario,$this->contrasena,$this->base_de_datos);

            if(!$this->conexion){
                // Imprime un mensaje y termina el script actual
                exit('Hubo un error al conectarse a la base de datos');
            }else{
                // echo("Se conecto exitosamente");
            }
            return $this->conexion;
        }
    }
?>