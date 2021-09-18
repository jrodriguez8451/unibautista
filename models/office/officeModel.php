<?php
    //Un OBJETO (usuario en este caso) se le conoce en programacion como una CLASE
    //Esta clase esta herendando otra que es la que continene la conexion a la base de datos
    class Office extends Connection {
        /* Tipos de Variables o Funciones y Quien las puede usar:
        Private = solo tú
        Protected = tú y tus descendientes (herencia)
        Public = cualquiera.*/
        
        // Atributos:
        private $oficina_id;
        private $oficina_descripcion;
        private $oficina_estado;
        
        //METODOS O FUNCIONES DE LA CLASE: 

        //Las funciones o metodos reciben caracteristicas o parametros

        //Un constructor permite inicializar las propiedades de un objeto al crear el objeto. 
        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        // Funcion para listar las Oficinas
        public function queryOffice(){
            $sql = "SELECT * FROM tbloficina
            INNER JOIN tblestado_general
            ON tblestado_general.est_gen_id = tbloficina.tblestado_general_est_gen_id 
            WHERE tblestado_general_est_gen_id = 1 ORDER BY ofi_id ASC"; 
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            if ($result) {
                return $result;
            }
        }

        //Funcion para Insertar una Oficina
        public function insertOffice(){
            if (isset($_POST['insert_office'])){
                $this->oficina_descripcion    = $_POST['ins-ofi-nom'];
                $this->oficina_estado         = 1;
                $office_validate = "SELECT ofi_descripcion FROM tbloficina WHERE ofi_descripcion = '$this->oficina_descripcion'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_office = mysqli_query($this->conection,$office_validate);
                if(mysqli_num_rows($result_office)>0){
                    echo "<script>alert('¡El registro ya existe en la base de datos!')</script>";
                }else{
                    $sql = "INSERT INTO tbloficina(ofi_descripcion,tblestado_general_est_gen_id,ofi_fecha_registro) VALUES ('$this->oficina_descripcion', $this->oficina_estado, NOW())";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if ($result){
                        return $result;
                    }
                }
            }
        }

        //Funcion para Eliminar una Oficina
        public function deleteOffice(){
            if (isset($_POST['delete_office'])) {
                $this->oficina_id = $_POST['del-ofi-id'];

                $computer_validate = "SELECT * FROM tblcomputador WHERE tbloficina_ofi_id = '$this->oficina_id'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_computer = mysqli_query($this->conection,$computer_validate);

                $device_validate = "SELECT * FROM tbldispositivo WHERE tbloficina_ofi_id = '$this->oficina_id'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_device = mysqli_query($this->conection,$device_validate);

                if(mysqli_num_rows($result_computer)>0){
                    echo "<script>alert('¡El registro se encuentra vinculado a otro!')</script>";
                }elseif (mysqli_num_rows($result_device)>0){
                    echo "<script>alert('¡El registro se encuentra vinculado a otro!')</script>";
                }else{
                    $sql = "UPDATE tbloficina SET tblestado_general_est_gen_id = 2 WHERE ofi_id = $this->oficina_id";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if($result){
                        return $result;
                    }
                }
            }
        }

        //Funcion para Actualizar una Oficina
        public function updateOffice(){
            //Si me llega el parametro actualizar_usuario entonces ejecute el codigo
            if(isset($_POST['update_office'])){
                //Por POST me estan llegando varios datos, entonces que especificarle a la funcion que esos datos son los mismos que las variables privadas y hago referencia a los name que capturé del form
                $this->oficina_id             = $_POST['upd-ofi-id'];
                $this->oficina_descripcion    = $_POST['upd-ofi-nom'];
                // En una variable almaceno el sql con los datos que capturamos
                $sql = "UPDATE tbloficina SET ofi_descripcion = '$this->oficina_descripcion' WHERE ofi_id = $this->oficina_id";
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