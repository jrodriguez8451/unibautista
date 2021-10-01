<?php
    //Un OBJETO (usuario en este caso) se le conoce en programacion como una CLASE
    //Esta clase esta herendando otra que es la que continene la conexion a la base de datos
    class Role extends Connection {
        /* Tipos de Variables o Funciones y Quien las puede usar:
        Private = solo tú
        Protected = tú y tus descendientes (herencia)
        Public = cualquiera.*/

        // Atributos:
        private $rol_descripcion;
        private $rol_id;

        //METODOS O FUNCIONES DE LA CLASE: 

        //Las funciones o metodos reciben caracteristicas o parametros

        //Un constructor permite inicializar las propiedades de un objeto al crear el objeto. 
        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        // Funcion para listar los Roles
        public function queryRole(){
            $sql = "SELECT * FROM tblrol 
            INNER JOIN tblestado_general
            ON tblestado_general.est_gen_id = tblrol.tblestado_general_est_gen_id 
            WHERE tblestado_general_est_gen_id = 1 ORDER BY rol_id ASC"; 
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            if ($result) {
                return $result;
            }
        }

        //Funcion para Insertar un Rol
        public function insertRole(){
            if (isset($_POST['insert_role'])){
                $this->rol_descripcion    = $_POST['ins-rol-nom'];
                $this->estado             = 1;

                $validate_rol = "SELECT rol_descripcion FROM tblrol WHERE rol_descripcion = '$this->rol_descripcion'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_rol = mysqli_query($this->conection,$validate_rol);

                if(mysqli_num_rows($result_rol)>0){
                    echo "<script>alert('¡El registro ya existe en la base de datos!')</script>";
                }else{
                    $sql = "INSERT INTO tblrol(rol_descripcion,tblestado_general_est_gen_id,rol_fecha_registro) VALUES ('$this->rol_descripcion',$this->estado,NOW())";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if ($result){
                        return $result;
                    }
                }
            }
        }

        //Funcion para Eliminar Rol
        public function deleteRole(){
            if (isset($_POST['delete_role'])) {
                $this->rol_id = $_POST['del-rol-id'];
                
                $validate_rol = "SELECT * FROM tblusuario WHERE tblrol_rol_id = '$this->rol_id'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_rol = mysqli_query($this->conection,$validate_rol);

                if(mysqli_num_rows($result_rol)>0){
                    echo "<script>alert('¡El registro se encuentra vinculado a otro!')</script>";
                }else{
                    $sql = "UPDATE tblrol SET tblestado_general_est_gen_id = 2 WHERE rol_id = $this->rol_id";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if($result){
                        return $result;
                    }
                }
            }
        }

        //Funcion para Actualizar un Rol
        public function updateRole(){
            //Si me llega el parametro actualizar_usuario entonces ejecute el codigo
            if(isset($_POST['update_role'])){
                //Por POST me estan llegando varios datos, entonces que especificarle a la funcion que esos datos son los mismos que las variables privadas y hago referencia a los name que capturé del form
                $this->rol_id             = $_POST['upd-rol-id'];
                $this->rol_descripcion    = $_POST['upd-rol-nom'];

                $validate_rol = "SELECT * FROM tblusuario WHERE tblrol_rol_id = '$this->rol_id'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_rol = mysqli_query($this->conection,$validate_rol);

                if(mysqli_num_rows($result_rol)>0){
                    echo "<script>alert('¡El registro se encuentra vinculado a otro!')</script>";
                }else{
                    // En una variable almaceno el sql con los datos que capturamos
                    $sql = "UPDATE tblrol SET rol_descripcion = '$this->rol_descripcion' WHERE rol_id = $this->rol_id";
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
    }
?>