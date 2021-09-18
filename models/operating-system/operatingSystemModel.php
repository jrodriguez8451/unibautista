<?php
    //Un OBJETO (usuario en este caso) se le conoce en programacion como una CLASE
    //Esta clase esta herendando otra que es la que continene la conexion a la base de datos
    class OperatingSystem extends Connection {
        /* Tipos de Variables o Funciones y Quien las puede usar:
        Private = solo tú
        Protected = tú y tus descendientes (herencia)
        Public = cualquiera.*/
        
        // Atributos:
        private $sistema_operativo_id;
        private $sistema_operativo_descripcion;
        private $sistema_operativo_estado;
        
        //METODOS O FUNCIONES DE LA CLASE: 

        //Las funciones o metodos reciben caracteristicas o parametros

        //Un constructor permite inicializar las propiedades de un objeto al crear el objeto. 
        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        // Funcion para listar Sistemas operativos
        public function queryOperatingSystem(){
            $sql = "SELECT * FROM tblsistema_operativo
            INNER JOIN tblestado_general
            ON tblestado_general.est_gen_id = tblsistema_operativo.tblestado_general_est_gen_id 
            WHERE tblestado_general_est_gen_id = 1 ORDER BY sis_ope_id ASC"; 
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            if ($result) {
                return $result;
            }
        }

        //Funcion para Insertar un Sistema operativo
        public function insertOperatingSystem(){
            if (isset($_POST['insert_operating_system'])){
                $this->sistema_operativo_descripcion    = $_POST['ins-sis-ope-nom'];
                $this->sistema_operativo_estado         = 1;
                $operating_system = "SELECT sis_ope_descripcion FROM tblsistema_operativo WHERE sis_ope_descripcion = '$this->sistema_operativo_descripcion'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_operating_system = mysqli_query($this->conection,$operating_system);
                if(mysqli_num_rows($result_operating_system)>0){
                    echo "<script>alert('¡El registro ya existe en la base de datos!')</script>";
                }else{
                    $sql = "INSERT INTO tblsistema_operativo(sis_ope_descripcion,tblestado_general_est_gen_id,sis_ope_fecha_registro) VALUES ('$this->sistema_operativo_descripcion',$this->sistema_operativo_estado,NOW())";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if ($result){
                        return $result;
                    }
                }
            }
        }

        //Funcion para Eliminar un Sistema operativo
        public function deleteOperatingSystem(){
            if (isset($_POST['delete_operating_system'])) {

                $this->sistema_operativo_id = $_POST['del-sis-ope-id'];
                $operating_system = "SELECT * FROM tblcomputador WHERE tblsistema_operativo_sis_ope_id = '$this->sistema_operativo_id'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_operating_system = mysqli_query($this->conection,$operating_system);
                
                if(mysqli_num_rows($result_operating_system)>0){
                    echo "<script>alert('¡El registro se encuentra vinculado a otro!')</script>";
                }else{
                    $sql = "UPDATE tblsistema_operativo SET tblestado_general_est_gen_id = 2 WHERE sis_ope_id = $this->sistema_operativo_id";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if($result){
                        return $result;
                    }
                }
            }
        }

        //Funcion para Actualizar un Sistema operativo
        public function updateOperatingSystem(){
            //Si me llega el parametro actualizar_usuario entonces ejecute el codigo
            if(isset($_POST['update_operating_system'])){
                //Por POST me estan llegando varios datos, entonces que especificarle a la funcion que esos datos son los mismos que las variables privadas y hago referencia a los name que capturé del form
                $this->sistema_operativo_id             = $_POST['upd-sis-ope-id'];
                $this->sistema_operativo_descripcion    = $_POST['upd-sis-ope-nom'];
                // En una variable almaceno el sql con los datos que capturamos
                $sql = "UPDATE tblsistema_operativo SET sis_ope_descripcion = '$this->sistema_operativo_descripcion' WHERE sis_ope_id = $this->sistema_operativo_id";
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