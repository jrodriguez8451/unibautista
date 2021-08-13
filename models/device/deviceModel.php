<?php
    //Un OBJETO (usuario en este caso) se le conoce en programacion como una CLASE
    //Esta clase esta herendando otra que es la que continene la conexion a la base de datos
    class Device extends Connection {
        /* Tipos de Variables o Funciones y Quien las puede usar:
        Private = solo tú
        Protected = tú y tus descendientes (herencia)
        Public = cualquiera.*/
        
        // Atributos:
        private $dis_id;
        private $dis_activo_fijo;
        private $dis_descripcion;
        private $tblmarca_mar_id;
        private $mar_descripcion;
        private $dis_referencia;
        private $dis_serial;
        private $dis_modelo;
        private $dis_capacidad;
        private $dis_observacion;
        private $dis_estado;
        private $tbloficina_ofi_id;
        private $ofi_descripcion;
        private $tblestado_general_est_gen_id;
        private $est_gen_descripcion;
        private $dis_fecha_registro;
        
        //METODOS O FUNCIONES DE LA CLASE: 

        //Las funciones o metodos reciben caracteristicas o parametros

        //Un constructor permite inicializar las propiedades de un objeto al crear el objeto. 
        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        // Funcion para listar Dispositivo
        public function queryDevice(){
            $sql = "SELECT * FROM tbldispositivo
            INNER JOIN tblmarca
            ON tblmarca.mar_id = tbldispositivo.tblmarca_mar_id  
            INNER JOIN tbloficina
            ON tbloficina.ofi_id = tbldispositivo.tbloficina_ofi_id  
            INNER JOIN tblestado_general
            ON tblestado_general.est_gen_id = tbldispositivo.tblestado_general_est_gen_id 
            WHERE est_gen_id = 1 ORDER BY dis_id ASC"; 
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            if ($result) {
                return $result;
            }
        }

        //Funcion para listar Oficinas
        public function office() {
            $sql = "SELECT * FROM tbloficina WHERE tblestado_general_est_gen_id = 1";
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            return $result;
        }

        //Funcion para listar las Marcas
        public function brand() {
            $sql = "SELECT * FROM tblmarca WHERE tblestado_general_est_gen_id = 1";
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            return $result;
        }

        //Funcion para Insertar un Dispositivo
        public function insertDevice(){
            if (isset($_POST['insert_device'])){
                $this->dis_activo_fijo              = $_POST['ins-dis-act-fij'];
                $this->dis_descripcion              = $_POST['ins-dis-nom'];
                $this->tblmarca_mar_id              = $_POST['ins-dis-mar'];
                $this->dis_referencia               = $_POST['ins-dis-ref'];
                $this->dis_serial                   = $_POST['ins-dis-ser'];
                $this->dis_modelo                   = $_POST['ins-dis-mod'];
                $this->dis_capacidad                = $_POST['ins-dis-cap'];
                $this->dis_observacion              = $_POST['ins-dis-obs'];
                $this->dis_estado                   = $_POST['ins-dis-est'];
                $this->tbloficina_ofi_id            = $_POST['ins-dis-ofi'];
                $this->tblestado_general_est_gen_id = 1;
                $this->dis_fecha_registro           = $_POST['ins-dis-fec-reg'];

                $device_validate = "SELECT dis_activo_fijo FROM tbldispositivo WHERE mar_descripcion = '$this->dis_activo_fijo'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_device = mysqli_query($this->conection,$device_validate);
                if(mysqli_num_rows($result_device)>0){
                    echo "<script>alert('¡El registro ya existe en la base de datos!')</script>";
                }else{
                    $sql = "INSERT INTO tbldispositivo(dis_activo_fijo,dis_descripcion,tblmarca_mar_id,dis_referencia,dis_serial,dis_modelo,dis_capacidad,dis_observacion,dis_estado,tbloficina_ofi_id,tblestado_general_est_gen_id,dis_fecha_registro) VALUES ('$this->dis_activo_fijo','$this->dis_descripcion',$this->tblmarca_mar_id,'$this->dis_referencia','$this->dis_serial','$this->dis_modelo','$this->dis_capacidad','$this->dis_observacion','$this->dis_estado',$this->tbloficina_ofi_id,$this->tblestado_general_est_gen_id,'$this->dis_fecha_registro')";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if ($result){
                        return $result;
                    }
                }
            }
        }

        //Funcion para Eliminar un Dispositivo
        public function deleteDevice(){
            if (isset($_POST['delete_brand'])) {
                $this->marca_id = $_POST['del-bra-id'];
                $sql = "UPDATE tblmarca SET tblestado_general_est_gen_id = 2 WHERE mar_id = $this->marca_id";
                //mysqli_query = Realiza una consulta a la base de datos
                $result = mysqli_query($this->conection,$sql);
                if($result){
                    return $result;
                }
            }
        }

        //Funcion para Actualizar un Dispositivo
        public function updateDevice(){
            //Si me llega el parametro actualizar_usuario entonces ejecute el codigo
            if(isset($_POST['update_brand'])){
                //Por POST me estan llegando varios datos, entonces que especificarle a la funcion que esos datos son los mismos que las variables privadas y hago referencia a los name que capturé del form
                $this->marca_id             = $_POST['upd-bra-id'];
                $this->marca_descripcion    = $_POST['upd-bra-nom'];
                $this->marca_fecha_registro = $_POST['upd-bra-fec-reg'];
                // En una variable almaceno el sql con los datos que capturamos
                $sql = "UPDATE tblmarca SET mar_descripcion = '$this->marca_descripcion', mar_fecha_registro = '$this->marca_fecha_registro' WHERE mar_id = $this->marca_id";
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