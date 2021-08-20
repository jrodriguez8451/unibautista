<?php
    //Un OBJETO (usuario en este caso) se le conoce en programacion como una CLASE
    //Esta clase esta herendando otra que es la que continene la conexion a la base de datos
    class CompensationBox extends Connection {
        /* Tipos de Variables o Funciones y Quien las puede usar:
        Private = solo tú
        Protected = tú y tus descendientes (herencia)
        Public = cualquiera.*/
        
        // Atributos:
        private $caj_com_id;
        private $caj_com_nit;
        private $caj_com_razon_social;
        private $caj_com_correo;
        private $caj_com_direccion;
        private $caj_com_telefono;
        private $tblestado_general_est_gen_id;
        
        //METODOS O FUNCIONES DE LA CLASE: 

        //Las funciones o metodos reciben caracteristicas o parametros

        //Un constructor permite inicializar las propiedades de un objeto al crear el objeto. 
        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        // Funcion para listar Caja de Compensación
        public function queryCompensationBox(){
            $sql = "SELECT * FROM tblcaja_compensacion
            INNER JOIN tblestado_general
            ON tblestado_general.est_gen_id = tblcaja_compensacion.tblestado_general_est_gen_id 
            WHERE tblestado_general_est_gen_id = 1 ORDER BY caj_com_id ASC"; 
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            if ($result) {
                return $result;
            }
        }
        //Funcion para Insertar una Caja de Compensación
        public function insertCompensationBox(){
            if (isset($_POST['insert_compensation_box'])){
                $this->caj_com_nit                  = $_POST['ins-caj-com-nit'];
                $this->caj_com_razon_social         = $_POST['ins-caj-com-nom'];
                $this->caj_com_correo               = $_POST['ins-caj-com-cor'];
                $this->caj_com_direccion            = $_POST['ins-caj-com-dir'];
                $this->caj_com_telefono             = $_POST['ins-caj-com-tel'];
                $this->tblestado_general_est_gen_id = 1;

                $eps_validate = "SELECT caj_com_nit FROM tblcaja_compensacion WHERE caj_com_nit = '$this->caj_com_nit'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_eps = mysqli_query($this->conection,$eps_validate);
                if(mysqli_num_rows($result_eps)>0){
                    echo "<script>alert('¡El registro ya existe en la base de datos!')</script>";
                }else{
                    $sql = "INSERT INTO tblcaja_compensacion(caj_com_nit,caj_com_razon_social,caj_com_correo,caj_com_direccion,caj_com_telefono,tblestado_general_est_gen_id,caj_com_fecha_registro) VALUES ('$this->caj_com_nit','$this->caj_com_razon_social','$this->caj_com_correo','$this->caj_com_direccion',$this->caj_com_telefono,$this->tblestado_general_est_gen_id,NOW())";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if ($result){
                        return $result;
                    }
                }
            }
        }

        //Funcion para Eliminar una Caja de Compensación
        public function deleteCompensationBox(){
            if (isset($_POST['delete_compensation_box'])) {
                $this->caj_com_id = $_POST['del-caj-com-id'];
                $sql = "UPDATE tblcaja_compensacion SET tblestado_general_est_gen_id = 2 WHERE caj_com_id = $this->caj_com_id";
                //mysqli_query = Realiza una consulta a la base de datos
                $result = mysqli_query($this->conection,$sql);
                if($result){
                    return $result;
                }
            }
        }

        //Funcion para Actualizar una Caja de Compensación
        public function updateCompensationBox(){
            //Si me llega el parametro actualizar_usuario entonces ejecute el codigo
            if(isset($_POST['update_compensation_box'])){
                //Por POST me estan llegando varios datos, entonces que especificarle a la funcion que esos datos son los mismos que las variables privadas y hago referencia a los name que capturé del form
                $this->caj_com_id           = $_POST['upd-caj-com-id'];
                $this->caj_com_nit          = $_POST['upd-caj-com-nit'];
                $this->caj_com_razon_social = $_POST['upd-caj-com-nom'];
                $this->caj_com_correo       = $_POST['upd-caj-com-cor'];
                $this->caj_com_direccion    = $_POST['upd-caj-com-dir'];
                $this->caj_com_telefono     = $_POST['upd-caj-com-tel'];

                // En una variable almaceno el sql con los datos que capturamos
                $sql = "UPDATE tblcaja_compensacion SET caj_com_nit='$this->caj_com_nit',caj_com_razon_social='$this->caj_com_razon_social', caj_com_correo='$this->caj_com_correo',caj_com_direccion='$this->caj_com_direccion',caj_com_telefono=$this->caj_com_telefono WHERE caj_com_id =$this->caj_com_id";
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