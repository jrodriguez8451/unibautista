<?php
    //Un OBJETO (usuario en este caso) se le conoce en programacion como una CLASE
    //Esta clase esta herendando otra que es la que continene la conexion a la base de datos
    class Brand extends Connection {
        /* Tipos de Variables o Funciones y Quien las puede usar:
        Private = solo tú
        Protected = tú y tus descendientes (herencia)
        Public = cualquiera.*/
        
        // Atributos:
        private $marca_id;
        private $marca_descripcion;
        private $marca_fecha_registro;
        private $marca_estado;
        
        //METODOS O FUNCIONES DE LA CLASE: 

        //Las funciones o metodos reciben caracteristicas o parametros

        //Un constructor permite inicializar las propiedades de un objeto al crear el objeto. 
        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        // Funcion para listar Marcas
        public function queryBrand(){
            $sql = "SELECT * FROM tblmarca
            INNER JOIN tblestado_general
            ON tblestado_general.est_gen_id = tblmarca.tblestado_general_est_gen_id 
            WHERE tblestado_general_est_gen_id = 1 ORDER BY mar_id ASC"; 
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            if ($result) {
                return $result;
            }
        }

        //Funcion para Insertar una Marca
        public function insertBrand(){
            if (isset($_POST['insert_brand'])){
                $this->marca_descripcion    = $_POST['ins-bra-nom'];
                $this->marca_fecha_registro = $_POST['ins-bra-fec-reg'];
                $this->marca_estado         = 1;
                $brand_validate = "SELECT mar_descripcion FROM tblmarca WHERE mar_descripcion = '$this->marca_descripcion'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_brand = mysqli_query($this->conection,$brand_validate);
                if(mysqli_num_rows($result_brand)>0){
                    echo "<script>alert('¡El registro ya existe en la base de datos!')</script>";
                }else{
                    $sql = "INSERT INTO tblmarca(mar_descripcion,mar_fecha_registro,tblestado_general_est_gen_id) VALUES ('$this->marca_descripcion','$this->marca_fecha_registro',$this->marca_estado)";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if ($result){
                        return $result;
                    }
                }
            }
        }

        //Funcion para Eliminar una Marca
        public function deleteBrand(){
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

        //Funcion para Actualizar una Marca
        public function updateBrand(){
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