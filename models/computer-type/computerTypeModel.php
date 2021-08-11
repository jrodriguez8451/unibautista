<?php
    //Un OBJETO (usuario en este caso) se le conoce en programacion como una CLASE
    //Esta clase esta herendando otra que es la que continene la conexion a la base de datos
    class ComputerType extends Connection {
        /* Tipos de Variables o Funciones y Quien las puede usar:
        Private = solo tú
        Protected = tú y tus descendientes (herencia)
        Public = cualquiera.*/
        
        // Atributos:
        private $tipo_computador_id;
        private $tipo_computador_descripcion;
        private $tipo_computador_fecha_registro;
        
        //METODOS O FUNCIONES DE LA CLASE: 

        //Las funciones o metodos reciben caracteristicas o parametros

        //Un constructor permite inicializar las propiedades de un objeto al crear el objeto. 
        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        // Funcion para listar los Tipo de Computador
        public function queryComputerType(){
            $sql = "SELECT * FROM tbltipo_computador 
            INNER JOIN tblestado_general
            ON tblestado_general.est_gen_id = tbltipo_computador.tblestado_general_est_gen_id 
            WHERE tblestado_general_est_gen_id = 1 ORDER BY tip_com_id ASC"; 
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            if ($result) {
                return $result;
            }
        }

        //Funcion para Insertar un Tipo de Computador
        public function insertComputerType(){
            if (isset($_POST['insert_computer_type'])){
                $this->tipo_computador_descripcion    = $_POST['ins-com-typ-nom'];
                $this->estado                         = 1;
                $this->tipo_computador_fecha_registro = $_POST['ins-com-typ-fec'];

                $computer_type = "SELECT tip_com_descripcion FROM tbltipo_computador WHERE tip_com_descripcion = '$this->tipo_computador_descripcion'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_computer_type = mysqli_query($this->conection,$computer_type);
                if(mysqli_num_rows($result_computer_type)>0){
                    echo "<script>alert('¡El registro ya existe en la base de datos!')</script>";
                }else{
                    $sql = "INSERT INTO tbltipo_computador(tip_com_descripcion,tblestado_general_est_gen_id,tip_com_fecha_registro) VALUES ('$this->tipo_computador_descripcion',$this->estado,'$this->tipo_computador_fecha_registro')";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if ($result){
                        return $result;
                    }
                }
            }
        }

        //Funcion para Eliminar Tipo de Computador
        public function deleteComputerType(){
            if (isset($_POST['delete_computer_type'])) {
                $this->tipo_computador_id = $_POST['del-com-typ-id'];
                $sql = "UPDATE tbltipo_computador SET tblestado_general_est_gen_id = 2 WHERE tip_com_id = $this->tipo_computador_id";
                //mysqli_query = Realiza una consulta a la base de datos
                $result = mysqli_query($this->conection,$sql);
                if($result){
                    return $result;
                }
            }
        }

        //Funcion para Actualizar Tipo de Computador
        public function updateComputerType(){
            //Si me llega el parametro actualizar_usuario entonces ejecute el codigo
            if(isset($_POST['update_computer_type'])){
                //Por POST me estan llegando varios datos, entonces que especificarle a la funcion que esos datos son los mismos que las variables privadas y hago referencia a los name que capturé del form
                $this->tipo_computador_id             = $_POST['upd-com-typ-id'];
                $this->tipo_computador_fecha_registro = $_POST['upd-com-typ-fec'];
                $this->tipo_computador_descripcion    = $_POST['upd-com-typ-nom'];
                // En una variable almaceno el sql con los datos que capturamos
                $sql = "UPDATE tbltipo_computador SET tip_com_descripcion = '$this->tipo_computador_descripcion', tip_com_fecha_registro = '$this->tipo_computador_fecha_registro' WHERE tip_com_id = $this->tipo_computador_id";
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