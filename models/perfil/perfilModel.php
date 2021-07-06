
<?php
    class Perfil extends Connection {

        // Atributos:
        private $id;
        private $primer_nombre;
        private $segundo_nombre;
        private $primer_apellido;
        private $segundo_apellido;
        private $celular;
        private $telefono;
        private $direccion;

        public function __construct()
        {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        //Funcion para listar los usuarios
        public function dataPerfil(){
            $usu_id = $_SESSION['usu_id'];
            $sql = "SELECT * FROM tblusuario 
            INNER JOIN tbltipo_documento ON tbltipo_documento.tip_doc_id = tblusuario.tbltipo_documento_tip_doc_id 
            INNER JOIN tblrol ON tblrol.rol_id = tblusuario.tblrol_rol_id
            INNER JOIN tblestado ON tblestado.est_id = tblusuario.tblestado_est_id 
            WHERE usu_id = $usu_id
            ORDER BY usu_id ASC"; 
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            if ($result) {
                return $result;
            }
        }

        //Funcion para Actualizar la informacion de un Usuario
        public function updateUserProfile(){
            //Si me llega el parametro actualizar_usuario entonces ejecute el codigo
            if(isset($_POST['update_profile'])){
                //Por POST me estan llegando varios datos, entonces que especificarle a la funcion que esos datos son los mismos que las variables privadas y hago referencia a los name que capturé del form
                $this->id               = $_POST['usu_id_perfil'];
                $this->primer_nombre    = $_POST['usu_pri_nom_perfil'];
                $this->segundo_nombre   = $_POST['usu_seg_nom_perfil'];
                $this->primer_apellido  = $_POST['usu_pri_ape_perfil'];
                $this->segundo_apellido = $_POST['usu_seg_ape_perfil'];
                $this->celular          = $_POST['usu_cel_perfil'];
                $this->telefono         = $_POST['usu_tel_perfil'];
                $this->direccion        = $_POST['usu_dir_perfil'];

                // En una variable almaceno el sql con los datos que capturamos
                $sql = "UPDATE tblusuario SET usu_primer_nombre = '$this->primer_nombre', usu_segundo_nombre = '$this->segundo_nombre', usu_primer_apellido = '$this->primer_apellido', usu_segundo_apellido = '$this->segundo_apellido', usu_celular = '$this->celular', usu_telefono = '$this->telefono', usu_direccion = '$this->direccion' WHERE usu_id = $this->id";
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