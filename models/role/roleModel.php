<?php
    //Un OBJETO (usuario en este caso) se le conoce en programacion como una CLASE
    //Esta clase esta herendando otra que es la que continene la conexion a la base de datos
    class Role extends Connection {
        /* Tipos de Variables o Funciones y Quien las puede usar:
        Private = solo tú
        Protected = tú y tus descendientes (herencia)
        Public = cualquiera.*/

        // Atributos:
        private $nombre1;
        private $nombre2;
        private $apellido1;
        private $apellido2;
        private $correo;
        private $contrasena;
        private $telefono;
        private $estado;


        //METODOS O FUNCIONES DE LA CLASE: 

        //Las funciones o metodos reciben caracteristicas o parametros

        //Un constructor permite inicializar las propiedades de un objeto al crear el objeto. 
        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        //Funcion para listar los usuarios
        public function queryRole(){
            $sql = "SELECT * FROM tblrol 
            INNER JOIN tblestado
            ON tblestado.est_id = tblrol.tblestado_est_id
            WHERE tblestado_est_id = 1 ORDER BY rol_id ASC"; 
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            if ($result) {
                return $result;
            }
        }

        //Funcion para listar los estados
        public function estado(){
            $sql = "SELECT * FROM tblestado WHERE est_nombre <> 'Inactivo'";
            //mysqli_query = Realiza una consulta a la base de datos
            $resultado = mysqli_query($this->conexion,$sql);
            return $resultado;
        }

        //Funcion para Insertar Usuario
        public function insertar_Usuario(){
            if (isset($_POST['insertar_usuario'])){
                $this->nombre1    = $_POST['insert_nombre1'];
                $this->nombre2    = $_POST['insert_nombre2'];
                $this->apellido1  = $_POST['insert_apellido1'];
                $this->apellido2  = $_POST['insert_apellido2'];
                $this->correo     = $_POST['insert_correo'];
                $this->contrasena = $_POST['insert_contrasena'];
                $this->telefono   = $_POST['insert_telefono'];
                $this->estado     = 1;

                $validar_correo = "SELECT usu_correo FROM tblusuario WHERE usu_correo = '$this->correo'";
                //mysqli_query = Realiza una consulta a la base de datos
                $resultado_correo = mysqli_query($this->conexion,$validar_correo);

                if(mysqli_num_rows($resultado_correo)>0){
                    header("Location:../../controllers/usuarioControllers/usuarioController.php");
                }else{
                    $sql = "INSERT INTO tblusuario(usu_nombre1,usu_nombre2,usu_apellido1,usu_apellido2,usu_correo,usu_contrasena,usu_telefono,tblestado_est_id) VALUES ('$this->nombre1','$this->nombre2','$this->apellido1','$this->apellido2','$this->correo','$this->contrasena',$this->telefono,$this->estado)";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $resultado = mysqli_query($this->conexion,$sql);
                    if ($resultado){
                        return $resultado;
                    }
                }
            }
        }

        //Funcion para Eliminar Usuario
        public function eliminar_Usuario(){
            if (isset($_POST['id_eliminar_usuario'])) {
                $this->id = $_POST['delete_usuario_id'];
                $sql = "UPDATE tblusuario SET tblestado_est_id = 2 WHERE usu_id = $this->id";
                //mysqli_query = Realiza una consulta a la base de datos
                $resultado = mysqli_query($this->conexion,$sql);
                if($resultado){
                    return $resultado;
                }
            }
        }

        //Funcion para Actualizar la informacion de un Usuario
        public function actualizar_Usuario(){
            //Si me llega el parametro actualizar_usuario entonces ejecute el codigo
            if(isset($_POST['actualizar_usuario'])){
                //Por POST me estan llegando varios datos, entonces que especificarle a la funcion que esos datos son los mismos que las variables privadas y hago referencia a los name que capturé del form
                $this->id         = $_POST['update_usuario_id'];
                $this->nombre1    = $_POST['update_nombre1'];
                $this->nombre2    = $_POST['update_nombre2'];
                $this->apellido1  = $_POST['update_apellido1'];
                $this->apellido2  = $_POST['update_apellido2'];
                $this->correo     = $_POST['update_correo'];
                $this->contrasena = $_POST['update_contrasena'];
                $this->telefono   = $_POST['update_telefono'];
                $this->estado     = $_POST['update_estado'];    

                // En una variable almaceno el sql con los datos que capturamos
                $sql = "UPDATE tblusuario SET usu_nombre1 = '$this->nombre1', usu_nombre2 = '$this->nombre2', usu_apellido1 = '$this->apellido1', usu_apellido2 = '$this->apellido2', usu_correo = '$this->correo', usu_contrasena = '$this->contrasena', usu_telefono = $this->telefono, tblestado_est_id = $this->estado WHERE usu_id = $this->id";
                //mysqli_query = Realiza una consulta a la base de datos
                //En una variable almaceno la funcion mysqli_query, que recibe por parametros la conexion de la bd y el codigo sql a ejecutar
                $resultado = mysqli_query($this->conexion,$sql);
                //Si lo anterior es true, entonces retorna mi variable
                if ($resultado){
                    return $resultado;
                }
            }
        }
    }
?>