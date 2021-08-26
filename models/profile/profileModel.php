
<?php
    class Profile extends Connection {

        // Atributos:
        private $id_per;
        private $primer_nombre_per;
        private $segundo_nombre_per;
        private $primer_apellido_per;
        private $segundo_apellido_per;
        private $celular_per;
        private $telefono_per;
        private $direccion_per;
        private $contrasena_per;

        public function __construct()
        {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        //Funcion para listar los usuarios
        public function dataProfile(){
            $usu_id = $_SESSION['usu_id'];
            $sql = "SELECT * FROM tblusuario 
            INNER JOIN tbltipo_documento ON tbltipo_documento.tip_doc_id = tblusuario.tbltipo_documento_tip_doc_id 
            INNER JOIN tblrol ON tblrol.rol_id = tblusuario.tblrol_rol_id
            INNER JOIN tblestado_general ON tblestado_general.est_gen_id = tblusuario.tblestado_general_est_gen_id 
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
                $this->id_per               = $_POST['usu_id_per'];
                $this->primer_nombre_per    = $_POST['usu_pri_nom_per'];
                $this->segundo_nombre_per   = $_POST['usu_seg_nom_per'];
                $this->primer_apellido_per  = $_POST['usu_pri_ape_per'];
                $this->segundo_apellido_per = $_POST['usu_seg_ape_per'];
                $this->celular_per          = $_POST['usu_cel_per'];
                $this->telefono_per         = $_POST['usu_tel_per'];
                $this->direccion_per        = $_POST['usu_dir_per'];
                $this->contrasena_per       = $_POST['usu_con_per'];
                // En una variable almaceno el sql con los datos que capturamos
                $sql = "UPDATE tblusuario SET usu_primer_nombre = '$this->primer_nombre_per', usu_segundo_nombre = '$this->segundo_nombre_per', usu_primer_apellido = '$this->primer_apellido_per', usu_segundo_apellido = '$this->segundo_apellido_per', usu_celular = '$this->celular_per', usu_telefono = '$this->telefono_per', usu_direccion = '$this->direccion_per',usu_contrasena = '$this->contrasena_per' WHERE usu_id = $this->id_per";
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