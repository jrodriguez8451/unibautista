<?php
    //Un OBJETO (Usuario en este caso) se le conoce en programacion como una CLASE
    //Esta clase esta herendando otra que es la que continene la conexion a la base de datos
    class User extends Connection {
        /* Tipos de Variables o Funciones y Quien las puede usar:
        Private = solo tú
        Protected = tú y tus descendientes (herencia)
        Public = cualquiera.*/
        
        // Atributos:
        private $usuario_id;
        private $usuario_numero_documento;
        private $usuario_tipo_documento;
        private $usuario_primer_nombre;
        private $usuario_segundo_nombre;
        private $usuario_primer_apellido;
        private $usuario_segundo_apellido;
        private $usuario_celular;
        private $usuario_telefono;
        private $usuario_direccion;
        private $usuario_correo;
        private $usuario_contrasena;
        private $usuario_rol;
        private $usuario_estado;

        
        //METODOS O FUNCIONES DE LA CLASE: 

        //Las funciones o metodos reciben caracteristicas o parametros

        //Un constructor permite inicializar las propiedades de un objeto al crear el objeto. 
        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        // Funcion para listar los Usuario
        public function queryUser() {
            $sql = "SELECT * FROM tblusuario INNER JOIN tbltipo_documento ON tbltipo_documento.tip_doc_id = tblusuario.tbltipo_documento_tip_doc_id INNER JOIN tblrol ON tblrol.rol_id = tblusuario.tblrol_rol_id INNER JOIN tblestado_general ON tblestado_general.est_gen_id = tblusuario.tblestado_general_est_gen_id WHERE est_gen_id <> 2 ORDER BY usu_id ASC"; 
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            if ($result) {
                return $result;
            }
        }

        //Funcion para listar los Estados
        public function status() {
            $sql = "SELECT * FROM tblestado WHERE tblestado_general_est_gen_id = 1";
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            return $result;
        }

        //Funcion para listar los Tipo de Documento
        public function documentType() {
            $sql = "SELECT * FROM tbltipo_documento WHERE tblestado_general_est_gen_id = 1";
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            return $result;
        }

        //Funcion para listar los Roles
        public function role() {
            $sql = "SELECT * FROM tblrol WHERE tblestado_general_est_gen_id = 1";
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            return $result;
        }

        //Funcion para Insertar un Usuario
        public function insertUser() {
            if (isset($_POST['insert_user'])){
                $this->usuario_numero_documento = $_POST['ins-usu-num-doc'];
                $this->usuario_tipo_documento   = $_POST['ins-usu-tip-doc'];
                $this->usuario_primer_nombre    = $_POST['ins-usu-pri-nom'];
                $this->usuario_segundo_nombre   = $_POST['ins-usu-seg-nom'];
                $this->usuario_primer_apellido  = $_POST['ins-usu-pri-ape'];
                $this->usuario_segundo_apellido = $_POST['ins-usu-seg-ape'];
                $this->usuario_celular          = $_POST['ins-usu-cel'];
                if(empty($_POST['ins-usu-cel'])){
                    $this->usuario_celular      = "0";
                }
                $this->usuario_telefono         = $_POST['ins-usu-tel'];
                if(empty($_POST['ins-usu-tel'])){
                    $this->usuario_telefono     = "0";
                }
                $this->usuario_direccion        = $_POST['ins-usu-dir'];
                if(empty($_POST['ins-usu-dir'])){
                    $this->usuario_direccion    = "NULL";
                }
                $this->usuario_correo           = $_POST['ins-usu-cor'];
                $this->usuario_contrasena       = $_POST['ins-usu-con'];
                $this->usuario_rol              = $_POST['ins-usu-rol'];
                $this->usuario_estado           = 1;
                
                $document = "SELECT usu_numero_documento FROM tblusuario WHERE usu_numero_documento = $this->usuario_numero_documento";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_document = mysqli_query($this->conection,$document);

                $email = "SELECT usu_correo FROM tblusuario WHERE usu_correo = '$this->usuario_correo'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_email = mysqli_query($this->conection,$email);

                if(mysqli_num_rows($result_document)>0) {
                    echo "<script>alert('¡El numero de documento ya existe en la base de datos!')</script>";
                }elseif (mysqli_num_rows($result_email)>0) {
                    echo "<script>alert('¡El correo electronico ya existe en la base de datos!')</script>";
                }else {
                    $sql = "INSERT INTO tblusuario(usu_numero_documento,tbltipo_documento_tip_doc_id,usu_primer_nombre,usu_segundo_nombre,usu_primer_apellido,usu_segundo_apellido,usu_celular,usu_telefono,usu_direccion,usu_correo,usu_contrasena,tblrol_rol_id,tblestado_general_est_gen_id,usu_fecha_registro) VALUES ($this->usuario_numero_documento,$this->usuario_tipo_documento,'$this->usuario_primer_nombre','$this->usuario_segundo_nombre','$this->usuario_primer_apellido','$this->usuario_segundo_apellido',$this->usuario_celular,$this->usuario_telefono,'$this->usuario_direccion','$this->usuario_correo','$this->usuario_contrasena',$this->usuario_rol,$this->usuario_estado,NOW())";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if ($result) {
                        return $result;
                    }
                }
            }
        }

        //Funcion para Eliminar Usuario
        public function deleteUser() {
            if (isset($_POST['delete_user'])) {
                $this->usuario_id = $_POST['del-usu-id'];
                $sql = "UPDATE tblusuario SET tblestado_general_est_gen_id = 2 WHERE usu_id = $this->usuario_id";
                //mysqli_query = Realiza una consulta a la base de datos
                $result = mysqli_query($this->conection,$sql);
                if($result) {
                    return $result;
                }
            }
        }

        //Funcion para Actualizar los datos de un Usuario
        public function updateUser() {
            //Si me llega el parametro actualizar_usuario entonces ejecute el codigo
            if(isset($_POST['update_user'])){
                //Por POST me estan llegando varios datos, entonces que especificarle a la funcion que esos datos son los mismos que las variables privadas y hago referencia a los name que capturé del form
                $this->usuario_id               = $_POST['upd-usu-id'];
                $this->usuario_numero_documento = $_POST['upd-usu-num-doc'];
                $this->usuario_tipo_documento   = $_POST['upd-usu-tip-doc'];
                $this->usuario_primer_nombre    = $_POST['upd-usu-pri-nom'];
                $this->usuario_segundo_nombre   = $_POST['upd-usu-seg-nom'];
                $this->usuario_primer_apellido  = $_POST['upd-usu-pri-ape'];
                $this->usuario_segundo_apellido = $_POST['upd-usu-seg-ape'];
                $this->usuario_celular          = $_POST['upd-usu-cel'];
                if(empty($_POST['upd-usu-cel'])){
                    $this->usuario_celular      = "0";
                }
                $this->usuario_telefono         = $_POST['upd-usu-tel'];
                if(empty($_POST['upd-usu-tel'])){
                    $this->usuario_telefono     = "0";
                }
                $this->usuario_direccion        = $_POST['upd-usu-dir'];
                if(empty($_POST['upd-usu-dir'])){
                    $this->usuario_direccion    = "NULL";
                }
                $this->usuario_correo           = $_POST['upd-usu-cor'];
                $this->usuario_contrasena       = $_POST['upd-usu-con'];
                $this->usuario_rol              = $_POST['upd-usu-rol'];

                // En una variable almaceno el sql con los datos que capturamos
                $sql = "UPDATE tblusuario SET usu_numero_documento = $this->usuario_numero_documento,tbltipo_documento_tip_doc_id  = $this->usuario_tipo_documento,usu_primer_nombre = '$this->usuario_primer_nombre',usu_segundo_nombre = '$this->usuario_segundo_nombre',usu_primer_apellido = '$this->usuario_primer_apellido',usu_segundo_apellido = '$this->usuario_segundo_apellido',usu_celular = $this->usuario_celular,usu_telefono = $this->usuario_telefono,usu_direccion = '$this->usuario_direccion',usu_correo = '$this->usuario_correo',usu_contrasena = '$this->usuario_contrasena',tblrol_rol_id  = $this->usuario_rol WHERE usu_id = $this->usuario_id";
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