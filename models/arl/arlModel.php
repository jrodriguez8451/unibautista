<?php
    //Un OBJETO (ARL en este caso) se le conoce en programacion como una CLASE
    //Esta clase esta herendando otra que es la que continene la conexion a la base de datos
    class ARL extends Connection {
        /* Tipos de Variables o Funciones y Quien las puede usar:
        Private = solo tú
        Protected = tú y tus descendientes (herencia)
        Public = cualquiera.*/
        
        // Atributos:
        private $arl_id;
        private $arl_nit;
        private $arl_razon_social;
        private $arl_correo_arl;
        private $arl_telefono_arl;
        private $arl_celular_arl;
        private $arl_ciudad;
        private $arl_direccion;
        private $arl_nombre_encargado;
        private $arl_telefono_encargado;
        private $arl_celular_encargado;
        private $tblestado_general_est_gen_id;
        
        //METODOS O FUNCIONES DE LA CLASE: 

        //Las funciones o metodos reciben caracteristicas o parametros

        //Un constructor permite inicializar las propiedades de un objeto al crear el objeto. 
        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        // Funcion para listar ARL
        public function queryARL(){
            $sql = "SELECT * FROM tblarl
            INNER JOIN tblestado_general
            ON tblestado_general.est_gen_id = tblarl.tblestado_general_est_gen_id 
            WHERE tblestado_general_est_gen_id = 1 ORDER BY arl_id ASC"; 
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            if ($result) {
                return $result;
            }
        }
        //Funcion para Insertar una ARL
        public function insertARL(){
            if (isset($_POST['insert_arl'])){
                $this->arl_nit                      = $_POST['ins-arl-nit'];
                $this->arl_razon_social             = $_POST['ins-arl-nom'];
                $this->arl_correo_arl               = $_POST['ins-arl-cor'];
                $this->arl_telefono_arl             = $_POST['ins-arl-tel'];
                if (empty($_POST['ins-arl-tel'])) {
                    $this->arl_telefono_arl   = '0';       
                }
                $this->arl_celular_arl              = $_POST['ins-arl-cel'];
                if (empty($_POST['ins-arl-cel'])) {
                    $this->arl_celular_arl   = 0;       
                }
                $this->arl_ciudad                   = $_POST['ins-arl-cit'];
                $this->arl_direccion                = $_POST['ins-arl-dir'];
                $this->arl_nombre_encargado         = $_POST['ins-arl-enc'];
                if (empty($_POST['ins-arl-enc'])) {
                    $this->arl_nombre_encargado   = 'No tiene';       
                }
                $this->arl_correo_encargado         = $_POST['ins-arl-cor-enc'];
                if (empty($_POST['ins-arl-enc'])) {
                    $this->arl_correo_encargado   = 'No tiene';       
                }
                $this->arl_telefono_encargado       = $_POST['ins-arl-tel-enc'];
                if (empty($_POST['ins-arl-tel-enc'])) {
                    $this->arl_telefono_encargado   = '0';       
                }
                $this->arl_celular_encargado        = $_POST['ins-arl-cel-enc'];
                if (empty($_POST['ins-arl-cel-enc'])) {
                    $this->arl_celular_encargado   = 0;       
                }
                $this->tblestado_general_est_gen_id = 1;

                $nit_validate = "SELECT arl_nit FROM tblarl WHERE arl_nit = '$this->arl_nit'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_nit = mysqli_query($this->conection,$nit_validate);

                $arl_validate = "SELECT arl_razon_social FROM tblarl WHERE arl_razon_social = '$this->arl_razon_social'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_arl = mysqli_query($this->conection,$arl_validate);

                if(mysqli_num_rows($result_nit)>0){
                    echo "<script>alert('¡El registro ya existe en la base de datos!')</script>";
                }elseif (mysqli_num_rows($result_arl)>0){
                    echo "<script>alert('¡El registro ya existe en la base de datos!')</script>";
                }else{
                    $sql = "INSERT INTO tblarl(arl_nit,arl_razon_social,arl_correo_arl,arl_telefono_arl,arl_celular_arl,arl_ciudad,arl_direccion,arl_nombre_encargado,arl_correo_encargado,arl_telefono_encargado,arl_celular_encargado,tblestado_general_est_gen_id,arl_fecha_registro) VALUES ('$this->arl_nit','$this->arl_razon_social','$this->arl_correo_arl','$this->arl_telefono_arl',$this->arl_celular_arl,'$this->arl_ciudad','$this->arl_direccion','$this->arl_nombre_encargado','$this->arl_correo_encargado','$this->arl_telefono_encargado',$this->arl_celular_encargado,$this->tblestado_general_est_gen_id,NOW())";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if ($result){
                        return $result;
                    }
                }
            }
        }

        //Funcion para Eliminar una ARL
        public function deleteARL(){
            if (isset($_POST['delete_arl'])) {
                $this->arl_id = $_POST['del-arl-id'];

                $arl_validate = "SELECT * FROM tblempleado WHERE tblarl_arl_id = '$this->arl_id'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_arl = mysqli_query($this->conection,$arl_validate);
                
                if(mysqli_num_rows($result_arl)>0){
                    echo "<script>alert('¡El registro se encuentra vinculado a otro!')</script>";
                }else{
                    $sql = "UPDATE tblarl SET tblestado_general_est_gen_id = 2 WHERE arl_id = $this->arl_id";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if($result){
                        return $result;
                    }
                }
            }
        }

        //Funcion para Actualizar una ARL
        public function updateARL(){
            //Si me llega el parametro actualizar_usuario entonces ejecute el codigo
            if(isset($_POST['update_arl'])){
                //Por POST me estan llegando varios datos, entonces que especificarle a la funcion que esos datos son los mismos que las variables privadas y hago referencia a los name que capturé del form
                $this->arl_id                       = $_POST['upd-arl-id'];
                $this->arl_nit                      = $_POST['upd-arl-nit'];
                $this->arl_razon_social             = $_POST['upd-arl-nom'];
                $this->arl_correo_arl               = $_POST['upd-arl-cor'];
                $this->arl_telefono_arl             = $_POST['upd-arl-tel'];
                if (empty($_POST['upd-arl-tel'])) {
                    $this->arl_telefono_arl   = '0';       
                }
                $this->arl_celular_arl              = $_POST['upd-arl-cel'];
                if (empty($_POST['upd-arl-cel'])) {
                    $this->arl_celular_arl   = 0;  
                }
                $this->arl_ciudad                   = $_POST['upd-arl-cit'];
                $this->arl_direccion                = $_POST['upd-arl-dir'];
                $this->arl_nombre_encargado         = $_POST['upd-arl-enc'];
                if (empty($_POST['upd-arl-enc'])) {
                    $this->arl_nombre_encargado     = 'No tiene';  
                }
                $this->arl_correo_encargado         = $_POST['upd-arl-cor-enc'];
                if (empty($_POST['upd-arl-cor-enc'])) {
                    $this->arl_correo_encargado     = 'No tiene';  
                }
                $this->arl_telefono_encargado       = $_POST['upd-arl-tel-enc'];
                if (empty($_POST['upd-arl-tel-enc'])) {
                    $this->arl_telefono_encargado   = 0;  
                }
                $this->arl_celular_encargado        = $_POST['upd-arl-cel-enc'];
                if (empty($_POST['upd-arl-cel-enc'])) {
                    $this->arl_celular_encargado    = 0;  
                }
            
                // En una variable almaceno el sql con los datos que capturamos
                $sql = "UPDATE tblarl SET arl_nit='$this->arl_nit',arl_razon_social='$this->arl_razon_social',arl_correo_arl='$this->arl_correo_arl',arl_telefono_arl='$this->arl_telefono_arl',arl_celular_arl=$this->arl_celular_arl,arl_ciudad='$this->arl_ciudad',arl_direccion='$this->arl_direccion',arl_nombre_encargado='$this->arl_nombre_encargado',arl_correo_encargado='$this->arl_correo_encargado',arl_telefono_encargado='$this->arl_telefono_encargado',arl_celular_encargado=$this->arl_celular_encargado WHERE arl_id=$this->arl_id";
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