<?php
    //Un OBJETO (Fondo de pension en este caso) se le conoce en programacion como una CLASE
    //Esta clase esta herendando otra que es la que continene la conexion a la base de datos
    class PensionFund extends Connection {
        /* Tipos de Variables o Funciones y Quien las puede usar:
        Private = solo tú
        Protected = tú y tus descendientes (herencia)
        Public = cualquiera.*/
        
        // Atributos:
        private $fon_pen_id;
        private $fon_pen_nit;
        private $fon_pen_razon_social;
        private $fon_pen_correo_fp;
        private $fon_pen_telefono_fp;
        private $fon_pen_celular_fp;
        private $fon_pen_ciudad;
        private $fon_pen_direccion;
        private $fon_pen_nombre_encargado;
        private $fon_pen_correo_encargado;
        private $fon_pen_telefono_encargado;
        private $fon_pen_celular_encargado;
        private $tblestado_general_est_gen_id;
        
        //METODOS O FUNCIONES DE LA CLASE: 

        //Las funciones o metodos reciben caracteristicas o parametros

        //Un constructor permite inicializar las propiedades de un objeto al crear el objeto. 
        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        // Funcion para listar Fondo de Pensión
        public function queryPensionFund(){
            $sql = "SELECT * FROM tblfondo_pension
            INNER JOIN tblestado_general
            ON tblestado_general.est_gen_id = tblfondo_pension.tblestado_general_est_gen_id 
            WHERE tblestado_general_est_gen_id = 1 ORDER BY fon_pen_id ASC"; 
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            if ($result) {
                return $result;
            }
        }
        //Funcion para Insertar un Fondo de Pensión
        public function insertPensionFund(){
            if (isset($_POST['insert_pension_fund'])){
                $this->fon_pen_nit                  = $_POST['ins-fon-pen-nit'];
                $this->fon_pen_razon_social         = $_POST['ins-fon-pen-nom'];
                $this->fon_pen_correo_fp            = $_POST['ins-fon-pen-cor'];
                $this->fon_pen_telefono_fp          = $_POST['ins-fon-pen-tel'];
                if (empty($_POST['ins-fon-pen-tel'])) {
                    $this->fon_pen_telefono_fp = '0';       
                }
                $this->fon_pen_celular_fp           = $_POST['ins-fon-pen-cel'];
                if (empty($_POST['ins-fon-pen-cel'])) {
                    $this->fon_pen_celular_fp = 0;       
                }
                $this->fon_pen_ciudad               = $_POST['ins-fon-pen-cit'];
                $this->fon_pen_direccion            = $_POST['ins-fon-pen-dir'];
                $this->fon_pen_nombre_encargado     = $_POST['ins-fon-pen-nom-enc'];
                if (empty($_POST['ins-fon-pen-nom-enc'])) {
                    $this->fon_pen_nombre_encargado = 'No tiene';       
                }
                $this->fon_pen_correo_encargado     = $_POST['ins-fon-pen-cor-enc'];
                if (empty($_POST['ins-fon-pen-cor-enc'])) {
                    $this->fon_pen_correo_encargado = 'No tiene';       
                }
                $this->fon_pen_telefono_encargado   = $_POST['ins-fon-pen-tel-enc'];
                if (empty($_POST['ins-fon-pen-tel-enc'])) {
                    $this->fon_pen_telefono_encargado = '0';       
                }
                $this->fon_pen_celular_encargado     = $_POST['ins-fon-pen-cel-enc'];
                if (empty($_POST['ins-fon-pen-cel-enc'])) {
                    $this->fon_pen_celular_encargado = 0;       
                }
                $this->tblestado_general_est_gen_id = 1;

                $nit_validate = "SELECT fon_pen_nit FROM tblfondo_pension WHERE fon_pen_nit = '$this->fon_pen_nit'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_nit = mysqli_query($this->conection,$nit_validate);

                $fon_pen_validate = "SELECT fon_pen_razon_social FROM tblfondo_pension WHERE fon_pen_razon_social = '$this->fon_pen_razon_social'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_fon_pen = mysqli_query($this->conection,$fon_pen_validate);

                if(mysqli_num_rows($result_nit)>0){
                    echo "<script>alert('¡El registro ya existe en la base de datos!')</script>";
                }elseif (mysqli_num_rows($result_fon_pen)>0){
                    echo "<script>alert('¡El registro ya existe en la base de datos!')</script>";
                }else{
                    $sql = "INSERT INTO tblfondo_pension(fon_pen_nit,fon_pen_razon_social,fon_pen_correo_fp,fon_pen_telefono_fp,fon_pen_celular_fp,fon_pen_ciudad,fon_pen_direccion,fon_pen_nombre_encargado,fon_pen_correo_encargado,fon_pen_telefono_encargado,fon_pen_celular_encargado,tblestado_general_est_gen_id,fon_pen_fecha_registro) VALUES ('$this->fon_pen_nit','$this->fon_pen_razon_social','$this->fon_pen_correo_fp','$this->fon_pen_telefono_fp',$this->fon_pen_celular_fp,'$this->fon_pen_ciudad','$this->fon_pen_direccion','$this->fon_pen_nombre_encargado','$this->fon_pen_correo_encargado','$this->fon_pen_telefono_encargado',$this->fon_pen_celular_encargado,$this->tblestado_general_est_gen_id,NOW())";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if ($result){
                        return $result;
                    }
                }
            }   
        }

        //Funcion para Eliminar un Fondo de Pensión
        public function deletePensionFund(){
            if (isset($_POST['delete_pension_fund'])) {
                $this->fon_pen_id = $_POST['del-fon-pen-id'];

                $eps_validate = "SELECT * FROM tblempleado WHERE tblfondo_pension_fon_pen_id = '$this->fon_pen_id'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_eps = mysqli_query($this->conection,$eps_validate);

                if(mysqli_num_rows($result_eps)>0){
                    echo "<script>alert('¡El registro se encuentra vinculado a otro!')</script>";
                    echo "<script>console.log('¡El registro se encuentra vinculado a otro!')</script>";
                }else{
                    $sql = "UPDATE tblfondo_pension SET tblestado_general_est_gen_id = 2 WHERE fon_pen_id = $this->fon_pen_id";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if($result){
                        return $result;
                    }
                }   
            }
        }

        //Funcion para Actualizar un Fondo de Pensión
        public function updatePensionFund(){
            //Si me llega el parametro actualizar_usuario entonces ejecute el codigo
            if(isset($_POST['update_pension_fund'])){
                //Por POST me estan llegando varios datos, entonces que especificarle a la funcion que esos datos son los mismos que las variables privadas y hago referencia a los name que capturé del form
                $this->fon_pen_id                   = $_POST['upd-fon-pen-id'];
                $this->fon_pen_nit                  = $_POST['upd-fon-pen-nit'];
                $this->fon_pen_razon_social         = $_POST['upd-fon-pen-nom'];
                $this->fon_pen_correo_fp            = $_POST['upd-fon-pen-cor'];
                $this->fon_pen_telefono_fp          = $_POST['upd-fon-pen-tel'];
                if (empty($_POST['upd-fon-pen-tel'])) {
                    $this->fon_pen_telefono_fp = '0';       
                }
                $this->fon_pen_celular_fp           = $_POST['upd-fon-pen-cel'];
                if (empty($_POST['upd-fon-pen-cel'])) {
                    $this->fon_pen_celular_fp = 0;       
                }
                $this->fon_pen_ciudad               = $_POST['upd-fon-pen-cit'];
                $this->fon_pen_direccion            = $_POST['upd-fon-pen-dir'];
                $this->fon_pen_nombre_encargado     = $_POST['upd-fon-pen-nom-enc'];
                if (empty($_POST['upd-fon-pen-nom-enc'])) {
                    $this->fon_pen_nombre_encargado = 'No tiene';       
                }
                $this->fon_pen_correo_encargado     = $_POST['upd-fon-pen-cor-enc'];
                if (empty($_POST['upd-fon-pen-cor-enc'])) {
                    $this->fon_pen_correo_encargado = 'No tiene';       
                }
                $this->fon_pen_telefono_encargado   = $_POST['upd-fon-pen-tel-enc'];
                if (empty($_POST['upd-fon-pen-tel-enc'])) {
                    $this->fon_pen_telefono_encargado = '0';       
                }
                $this->fon_pen_celular_encargado     = $_POST['upd-fon-pen-cel-enc'];
                if (empty($_POST['upd-fon-pen-cel-enc'])) {
                    $this->fon_pen_celular_encargado = 0;   
                }
                // En una variable almaceno el sql con los datos que capturamos
                $sql = "UPDATE tblfondo_pension SET fon_pen_nit='$this->fon_pen_nit',fon_pen_razon_social='$this->fon_pen_razon_social',fon_pen_correo_fp='$this->fon_pen_correo_fp',fon_pen_telefono_fp='$this->fon_pen_telefono_fp',fon_pen_celular_fp=$this->fon_pen_celular_fp,fon_pen_ciudad='$this->fon_pen_ciudad',fon_pen_direccion='$this->fon_pen_direccion',fon_pen_nombre_encargado='$this->fon_pen_nombre_encargado',fon_pen_correo_encargado='$this->fon_pen_correo_encargado',fon_pen_telefono_encargado='$this->fon_pen_telefono_encargado',fon_pen_celular_encargado=$this->fon_pen_celular_encargado WHERE fon_pen_id=$this->fon_pen_id";
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