<?php
    //Un OBJETO (Proveedor en este caso) se le conoce en programacion como una CLASE
    //Esta clase esta herendando otra que es la que continene la conexion a la base de datos
    class Supplier extends Connection {
        /* Tipos de Variables o Funciones y Quien las puede usar:
        Private = solo tú
        Protected = tú y tus descendientes (herencia)
        Public = cualquiera.*/
        
        // Atributos:
        private $pro_id;
        private $pro_nit;
        private $pro_razon_social;
        private $pro_producto_servicio;
        private $pro_correo_proveedor;
        private $pro_telefono_proveedor;
        private $pro_celular_proveedor;
        private $pro_ciudad;
        private $pro_direccion;
        private $pro_nombre_encargado;
        private $pro_correo_encargado;
        private $pro_telefono_encargado;
        private $pro_celular_encargado;
        private $tblestado_general_est_gen_id;
        
        //METODOS O FUNCIONES DE LA CLASE: 

        //Las funciones o metodos reciben caracteristicas o parametros

        //Un constructor permite inicializar las propiedades de un objeto al crear el objeto. 
        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        // Funcion para listar Proveedor
        public function querySupplier(){
            $sql = "SELECT * FROM tblproveedor
            INNER JOIN tblestado_general
            ON tblestado_general.est_gen_id = tblproveedor.tblestado_general_est_gen_id 
            WHERE tblestado_general_est_gen_id = 1 ORDER BY pro_id ASC"; 
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            if ($result) {
                return $result;
            }
        }
        //Funcion para Insertar un Proveedor
        public function insertSupplier(){
            if (isset($_POST['insert_supplier'])){
                $this->pro_nit                      = $_POST['ins-sup-nit'];
                $this->pro_razon_social             = $_POST['ins-sup-nom'];
                $this->pro_producto_servicio        = $_POST['ins-sup-pro-ser'];
                $this->pro_correo_proveedor         = $_POST['ins-sup-cor'];
                $this->pro_telefono_proveedor       = $_POST['ins-sup-tel'];
                if (empty($_POST['ins-sup-tel'])) {
                    $this->pro_telefono_proveedor   = '0';       
                }
                $this->pro_celular_proveedor        = $_POST['ins-sup-cel'];
                if (empty($_POST['ins-sup-cel'])) {
                    $this->pro_celular_proveedor    = 0;       
                }
                $this->pro_ciudad                   = $_POST['ins-sup-cit'];
                $this->pro_direccion                = $_POST['ins-sup-dir'];
                $this->pro_nombre_encargado         = $_POST['ins-sup-nom-enc'];
                if (empty($_POST['ins-sup-nom-enc'])) {
                    $this->pro_nombre_encargado     = 'No tiene';
                }
                $this->pro_telefono_encargado       = $_POST['ins-sup-tel-enc'];
                if (empty($_POST['ins-sup-tel-enc'])) {
                    $this->pro_telefono_encargado   = '0';       
                }
                $this->pro_celular_encargado        = $_POST['ins-sup-cel-enc'];
                if (empty($_POST['ins-sup-cel-enc'])) {
                    $this->pro_celular_encargado    = 0;       
                }
                $this->pro_correo_encargado         = $_POST['ins-sup-cor-enc'];
                if (empty($_POST['ins-sup-cor-enc'])) {
                    $this->pro_correo_encargado     = 'No tiene';       
                }
                $this->tblestado_general_est_gen_id = 1;

                $supplier_validate = "SELECT pro_nit FROM tblproveedor WHERE pro_nit = '$this->pro_nit'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_supplier = mysqli_query($this->conection,$supplier_validate);
                if(mysqli_num_rows($result_supplier)>0){
                    echo "<script>alert('¡El registro ya existe en la base de datos!')</script>";
                }else{
                    $sql = "INSERT INTO tblproveedor(pro_nit,pro_razon_social,pro_producto_servicio,pro_correo_proveedor,pro_telefono_proveedor,pro_celular_proveedor,pro_ciudad,pro_direccion,pro_nombre_encargado,pro_correo_encargado,pro_telefono_encargado,pro_celular_encargado,tblestado_general_est_gen_id,pro_fecha_registro) VALUES ('$this->pro_nit','$this->pro_razon_social','$this->pro_producto_servicio','$this->pro_correo_proveedor','$this->pro_telefono_proveedor',$this->pro_celular_proveedor,'$this->pro_ciudad','$this->pro_direccion','$this->pro_nombre_encargado','$this->pro_correo_encargado','$this->pro_telefono_encargado',$this->pro_celular_encargado,$this->tblestado_general_est_gen_id,NOW())";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if ($result){
                        return $result;
                    }
                }
            }
        }

        //Funcion para Eliminar un Proveedor
        public function deleteSupplier(){
            if (isset($_POST['delete_supplier'])) {
                $this->pro_id = $_POST['del-sup-id'];
                $sql = "UPDATE tblproveedor SET tblestado_general_est_gen_id = 2 WHERE pro_id = $this->pro_id";
                //mysqli_query = Realiza una consulta a la base de datos
                $result = mysqli_query($this->conection,$sql);
                if($result){
                    return $result;
                }
            }
        }
        
        //Funcion para Actualizar un Proveedor
        public function updateSupplier(){
            //Si me llega el parametro actualizar_usuario entonces ejecute el codigo
            if(isset($_POST['update_supplier'])){
                //Por POST me estan llegando varios datos, entonces que especificarle a la funcion que esos datos son los mismos que las variables privadas y hago referencia a los name que capturé del form
                $this->pro_id                       = $_POST['upd-sup-id'];
                $this->pro_nit                      = $_POST['upd-sup-nit'];
                $this->pro_razon_social             = $_POST['upd-sup-nom'];
                $this->pro_producto_servicio        = $_POST['upd-sup-pro-ser'];
                $this->pro_correo_proveedor         = $_POST['upd-sup-cor'];
                $this->pro_telefono_proveedor       = $_POST['upd-sup-tel'];
                if (empty($_POST['upd-sup-cel'])) {
                    $this->pro_telefono_proveedor   = '0';       
                }
                $this->pro_celular_proveedor        = $_POST['upd-sup-cel'];
                if (empty($_POST['upd-sup-cel'])) {
                    $this->pro_celular_proveedor    = '0';       
                }
                $this->pro_ciudad                   = $_POST['upd-sup-cit'];
                $this->pro_direccion                = $_POST['upd-sup-dir'];
                $this->pro_nombre_encargado         = $_POST['upd-sup-nom-enc'];
                if (empty($_POST['upd-sup-nom-enc'])) {
                    $this->pro_nombre_encargado     = 'No tiene';       
                }
                $this->pro_telefono_encargado       = $_POST['upd-sup-tel-enc'];
                if (empty($_POST['upd-sup-tel-enc'])) {
                    $this->pro_telefono_encargado   = '0';       
                }
                $this->pro_celular_encargado        = $_POST['upd-sup-cel-enc'];
                if (empty($_POST['upd-sup-cel-enc'])) {
                    $this->pro_celular_encargado    = '0';       
                }
                $this->pro_correo_encargado         = $_POST['upd-sup-cor-enc'];
                if (empty($_POST['upd-sup-cor-enc'])) {
                    $this->pro_correo_encargado     = 'No tiene';       
                }
                // En una variable almaceno el sql con los datos que capturamos
                $sql = "UPDATE tblproveedor SET pro_nit='$this->pro_nit',pro_razon_social='$this->pro_razon_social',pro_producto_servicio='$this->pro_producto_servicio',pro_correo_proveedor='$this->pro_correo_proveedor',pro_telefono_proveedor='$this->pro_telefono_proveedor',pro_celular_proveedor=$this->pro_celular_proveedor,pro_ciudad='$this->pro_ciudad',pro_direccion='$this->pro_direccion',pro_nombre_encargado='$this->pro_nombre_encargado',pro_correo_encargado='$this->pro_correo_encargado',pro_telefono_encargado='$this->pro_telefono_encargado',pro_celular_encargado='$this->pro_celular_encargado' WHERE pro_id=$this->pro_id";
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