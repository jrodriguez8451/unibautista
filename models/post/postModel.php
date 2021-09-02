<?php
    //Un OBJETO (usuario en este caso) se le conoce en programacion como una CLASE
    //Esta clase esta herendando otra que es la que continene la conexion a la base de datos
    class Post extends Connection {
        /* Tipos de Variables o Funciones y Quien las puede usar:
        Private = solo tú
        Protected = tú y tus descendientes (herencia)
        Public = cualquiera.*/
        
        // Atributos:
        private $cargo_id;
        private $cargo_descripcion;
        private $cargo_estado;
        
        //METODOS O FUNCIONES DE LA CLASE: 

        //Las funciones o metodos reciben caracteristicas o parametros

        //Un constructor permite inicializar las propiedades de un objeto al crear el objeto. 
        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        // Funcion para listar Cargos
        public function queryPost(){
            $sql = "SELECT * FROM tblcargo
            INNER JOIN tblestado_general
            ON tblestado_general.est_gen_id = tblcargo.tblestado_general_est_gen_id 
            WHERE tblestado_general_est_gen_id = 1 ORDER BY car_id ASC"; 
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            if ($result) {
                return $result;
            }
        }

        //Funcion para Insertar un Cargo
        public function insertPost(){
            if (isset($_POST['insert_post'])){
                $this->cargo_descripcion    = $_POST['ins-pos-nom'];
                $this->cargo_estado         = 1;
                $post_validate = "SELECT car_descripcion FROM tblcargo WHERE car_descripcion = '$this->cargo_descripcion'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_post = mysqli_query($this->conection,$post_validate);
                if(mysqli_num_rows($result_post)>0){
                    echo "<script>alert('¡El registro ya existe en la base de datos!')</script>";
                }else{
                    $sql = "INSERT INTO tblcargo(car_descripcion,tblestado_general_est_gen_id,car_fecha_registro) VALUES ('$this->cargo_descripcion',$this->cargo_estado,NOW())";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if ($result){
                        return $result;
                    }
                }
            }
        }

        //Funcion para Eliminar un Cargo
        public function deletePost(){
            if (isset($_POST['delete_post'])) {
                $this->cargo_id = $_POST['del-pos-id'];
                $sql = "UPDATE tblcargo SET tblestado_general_est_gen_id = 2 WHERE car_id = $this->cargo_id";
                //mysqli_query = Realiza una consulta a la base de datos
                $result = mysqli_query($this->conection,$sql);
                if($result){
                    return $result;
                }
            }
        }

        //Funcion para Actualizar un Cargo
        public function updatePost(){
            //Si me llega el parametro actualizar_usuario entonces ejecute el codigo
            if(isset($_POST['update_post'])){
                //Por POST me estan llegando varios datos, entonces que especificarle a la funcion que esos datos son los mismos que las variables privadas y hago referencia a los name que capturé del form
                $this->cargo_id             = $_POST['upd-pos-id'];
                $this->cargo_descripcion    = $_POST['upd-pos-nom'];
                // En una variable almaceno el sql con los datos que capturamos
                $sql = "UPDATE tblcargo SET car_descripcion = '$this->cargo_descripcion' WHERE car_id = $this->cargo_id";
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