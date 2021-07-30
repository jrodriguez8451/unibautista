<?php
    //Un OBJETO (usuario en este caso) se le conoce en programacion como una CLASE
    //Esta clase esta herendando otra que es la que continene la conexion a la base de datos
    class Estatus extends Connection {
        /* Tipos de Variables o Funciones y Quien las puede usar:
        Private = solo tú
        Protected = tú y tus descendientes (herencia)
        Public = cualquiera.*/
        
        // Atributos:
        private $estado_id;
        private $tipo_computador_descripcion;
        private $tipo_computador_fecha_registro;
        
        //METODOS O FUNCIONES DE LA CLASE: 

        //Las funciones o metodos reciben caracteristicas o parametros

        //Un constructor permite inicializar las propiedades de un objeto al crear el objeto. 
        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        // Funcion para listar los Estado
        public function queryStatus(){
            $sql = "SELECT * FROM tblestado 
            INNER JOIN tblestado_general
            ON tblestado_general.est_gen_id = tblestado.tblestado_general_est_gen_id 
            WHERE tblestado_general_est_gen_id = 1 ORDER BY est_id ASC"; 
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            if ($result) {
                return $result;
            }
        }

        //Funcion para Insertar un Estado
        public function insertStatus(){
            if (isset($_POST['insert_status'])){
                $this->estado_descripcion    = $_POST['ins-est-nom'];
                $this->estado_fecha_registro = $_POST['ins-est-fec'];
                $this->estado                        = 1;
                $status = "SELECT est_descripcion FROM tblestado WHERE est_descripcion = '$this->estado_descripcion'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_status = mysqli_query($this->conection,$status);
                if(mysqli_num_rows($result_status)>0){
                    echo "<script>alert('¡El registro ya existe en la base de datos!')</script>";
                }else{
                    $sql = "INSERT INTO tblestado(est_descripcion,est_fecha_registro,tblestado_general_est_gen_id) VALUES ('$this->estado_descripcion','$this->estado_fecha_registro',$this->estado)";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if ($result){
                        return $result;
                    }
                }
            }
        }

        //Funcion para Eliminar Estado
        public function deleteStatus(){
            if (isset($_POST['delete_status'])) {
                $this->estado_id = $_POST['del-est-id'];
                $sql = "UPDATE tblestado SET tblestado_general_est_gen_id = 2 WHERE est_id = $this->estado_id";
                //mysqli_query = Realiza una consulta a la base de datos
                $result = mysqli_query($this->conection,$sql);
                if($result){
                    return $result;
                }
            }
        }

        //Funcion para Actualizar Estado
        public function updateStatus(){
            //Si me llega el parametro actualizar_usuario entonces ejecute el codigo
            if(isset($_POST['update_status'])){
                //Por POST me estan llegando varios datos, entonces que especificarle a la funcion que esos datos son los mismos que las variables privadas y hago referencia a los name que capturé del form
                $this->estado_id             = $_POST['upd-est-id'];
                $this->estado_descripcion    = $_POST['upd-est-nom'];
                $this->estado_fecha_registro = $_POST['upd-est-fec'];
                // En una variable almaceno el sql con los datos que capturamos
                $sql = "UPDATE tblestado SET est_descripcion = '$this->estado_descripcion', est_fecha_registro = '$this->estado_fecha_registro' WHERE est_id = $this->estado_id";
                //mysqli_query = Realiza una consulta a la base de datos
                //En una variable almaceno la funcion mysqli_query, que recibe por parametros la conexion de la bd y el codigo sql a ejecutar
                $result = mysqli_query($this->conection,$sql);
                //Si lo anterior es true, entonces retorna mi variable
                if ($result){
                    return $result; 
                }
            }
        }
    }
?>