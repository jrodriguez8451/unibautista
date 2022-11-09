<?php
    //Un OBJETO (EPS en este caso) se le conoce en programacion como una CLASE
    //Esta clase esta herendando otra que es la que continene la conexion a la base de datos
    class EPS extends Connection {
        /* Tipos de Variables o Funciones y Quien las puede usar:
        Private = solo tú
        Protected = tú y tus descendientes (herencia)
        Public = cualquiera.*/
        
        // Atributos:
        private $eps_id;
        private $eps_nit;
        private $eps_razon_social;
        private $eps_correo_eps;
        private $eps_telefono_eps;
        private $eps_celular_eps;
        private $eps_ciudad;
        private $eps_direccion;
        private $eps_nombre_encargado;
        private $eps_correo_encargado;
        private $eps_telefono_encargado;
        private $eps_celular_encargado;
        private $tblestado_general_est_gen_id;
        
        //METODOS O FUNCIONES DE LA CLASE: 

        //Las funciones o metodos reciben caracteristicas o parametros

        //Un constructor permite inicializar las propiedades de un objeto al crear el objeto. 
        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        // Funcion para listar EPS
        public function queryEPS(){
            $sql = "SELECT * FROM tbleps
            INNER JOIN tblestado_general
            ON tblestado_general.est_gen_id = tbleps.tblestado_general_est_gen_id 
            WHERE tblestado_general_est_gen_id = 1 ORDER BY eps_id ASC"; 
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            if ($result) {
                return $result;
            }
        }
        //Funcion para Insertar una EPS
        public function insertEPS(){
            if (isset($_POST['insert_eps'])){
                $this->eps_nit                      = $_POST['ins-eps-nit'];
                $this->eps_razon_social             = $_POST['ins-eps-nom'];
                $this->eps_correo_eps               = $_POST['ins-eps-cor'];
                $this->eps_telefono_eps             = $_POST['ins-eps-tel'];
                if (empty($_POST['ins-eps-tel'])) {
                    $this->eps_telefono_eps   = '0';       
                }
                $this->eps_celular_eps              = $_POST['ins-eps-cel'];
                if (empty($_POST['ins-eps-cel'])) {
                    $this->eps_celular_eps   = 0;       
                }
                $this->eps_ciudad                   = $_POST['ins-eps-cit'];
                $this->eps_direccion                = $_POST['ins-eps-dir'];
                $this->eps_nombre_encargado         = $_POST['ins-eps-nom-enc'];
                if (empty($_POST['ins-eps-nom-enc'])) {
                    $this->eps_nombre_encargado   = 'No tiene';       
                }
                $this->eps_correo_encargado         = $_POST['ins-eps-cor-enc'];
                if (empty($_POST['ins-eps-cor-enc'])) {
                    $this->eps_correo_encargado   = 'No tiene';       
                }
                $this->eps_telefono_encargado       = $_POST['ins-eps-tel-enc'];
                if (empty($_POST['ins-eps-tel-enc'])) {
                    $this->eps_telefono_encargado   = '0';       
                }
                $this->eps_celular_encargado        = $_POST['ins-eps-cel-enc'];
                if (empty($_POST['ins-eps-cel-enc'])) {
                    $this->eps_celular_encargado   = 0;       
                }
                $this->tblestado_general_est_gen_id = 1;

                $nit_validate = "SELECT eps_nit FROM tbleps WHERE eps_nit = '$this->eps_nit'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_nit = mysqli_query($this->conection,$nit_validate);

                $eps_validate = "SELECT eps_razon_social FROM tbleps WHERE eps_razon_social = '$this->eps_razon_social'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_eps = mysqli_query($this->conection,$eps_validate);

                if(mysqli_num_rows($result_nit)>0){
                    echo "<script>alert('¡El registro ya existe en la base de datos!')</script>";
                }elseif (mysqli_num_rows($result_eps)>0){
                    echo "<script>alert('¡El registro ya existe en la base de datos!')</script>";
                }else{
                    $sql = "INSERT INTO tbleps(eps_nit,eps_razon_social,eps_correo_eps,eps_telefono_eps,eps_celular_eps,eps_ciudad,eps_direccion,eps_nombre_encargado,eps_correo_encargado,eps_telefono_encargado,eps_celular_encargado,tblestado_general_est_gen_id,eps_fecha_registro) VALUES ('$this->eps_nit','$this->eps_razon_social','$this->eps_correo_eps','$this->eps_telefono_eps',$this->eps_celular_eps,'$this->eps_ciudad','$this->eps_direccion','$this->eps_nombre_encargado','$this->eps_correo_encargado','$this->eps_telefono_encargado',$this->eps_celular_encargado,$this->tblestado_general_est_gen_id,NOW())";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if ($result){
                        return $result;
                    }
                }
            }
        }

        //Funcion para Eliminar una EPS
        public function deleteEPS(){
            if (isset($_POST['delete_eps'])) {
                $this->eps_id = $_POST['del-eps-id'];

                $eps_validate = "SELECT * FROM tblempleado WHERE tbleps_eps_id = '$this->eps_id'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_eps = mysqli_query($this->conection,$eps_validate);

                if(mysqli_num_rows($result_eps)>0){
                    echo "<script>alert('¡El registro se encuentra vinculado a otro!')</script>";
                }else{
                    $sql = "UPDATE tbleps SET tblestado_general_est_gen_id = 2 WHERE eps_id = $this->eps_id";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if($result){
                        return $result;
                    }
                }
            }
        }

        //Funcion para Actualizar una EPS
        public function updateEPS(){
            //Si me llega el parametro actualizar_usuario entonces ejecute el codigo
            if(isset($_POST['update_eps'])){
                //Por POST me estan llegando varios datos, entonces que especificarle a la funcion que esos datos son los mismos que las variables privadas y hago referencia a los name que capturé del form
                $this->eps_id                 = $_POST['upd-eps-id'];
                $this->eps_nit                = $_POST['upd-eps-nit'];
                $this->eps_razon_social       = $_POST['upd-eps-nom'];
                $this->eps_correo_eps         = $_POST['upd-eps-cor'];
                $this->eps_telefono_eps       = $_POST['upd-eps-tel'];
                if (empty($_POST['upd-eps-tel'])) {
                    $this->eps_telefono_eps   = '0';       
                }
                $this->eps_celular_eps        = $_POST['upd-eps-cel'];
                if (empty($_POST['upd-eps-cel'])) {
                    $this->eps_celular_eps   = 0;       
                }
                $this->eps_ciudad             = $_POST['upd-eps-cit'];
                $this->eps_direccion          = $_POST['upd-eps-dir'];
                $this->eps_nombre_encargado   = $_POST['upd-eps-nom-enc'];
                if (empty($_POST['upd-eps-nom-enc'])) {
                    $this->eps_nombre_encargado = 'No tiene';       
                }
                $this->eps_correo_encargado   = $_POST['upd-eps-cor-enc'];
                if (empty($_POST['upd-eps-cor-enc'])) {
                    $this->eps_correo_encargado = 'No tiene';       
                }
                $this->eps_telefono_encargado = $_POST['upd-eps-tel-enc'];
                if (empty($_POST['upd-eps-tel-enc'])) {
                    $this->eps_telefono_encargado   = '0';       
                }
                $this->eps_celular_encargado  = $_POST['upd-eps-cel-enc'];
                if (empty($_POST['upd-eps-cel-enc'])) {
                    $this->eps_celular_encargado = 0;       
                }

                // En una variable almaceno el sql con los datos que capturamos
                $sql = "UPDATE tbleps SET eps_nit='$this->eps_nit',eps_razon_social='$this->eps_razon_social',eps_correo_eps='$this->eps_correo_eps',eps_telefono_eps='$this->eps_telefono_eps',eps_celular_eps=$this->eps_celular_eps,eps_ciudad='$this->eps_ciudad',eps_direccion='$this->eps_direccion',eps_nombre_encargado='$this->eps_nombre_encargado',eps_correo_encargado='$this->eps_correo_encargado',eps_telefono_encargado='$this->eps_telefono_encargado',eps_celular_encargado=$this->eps_celular_encargado WHERE eps_id=$this->eps_id";
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