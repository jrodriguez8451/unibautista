<?php
    //Un OBJETO (usuario en este caso) se le conoce en programacion como una CLASE
    //Esta clase esta herendando otra que es la que continene la conexion a la base de datos
    class FamilyEmployee extends Connection {
        /* Tipos de Variables o Funciones y Quien las puede usar:
        Private = solo tú
        Protected = tú y tus descendientes (herencia)
        Public = cualquiera.*/
        
        // Atributos:
        private $fam_emp_id;
        private $fam_emp_nombre_completo_empleado;
        private $fam_emp_tipo_documento_familiar1;
        private $fam_emp_numero_documento_familiar1;
        private $fam_emp_primer_nombre_familiar1;
        private $fam_emp_segundo_nombre_familiar1;
        private $fam_emp_primer_apellido_familiar1;
        private $fam_emp_segundo_apellido_familiar1;
        private $fam_emp_tipo_documento_familiar2;
        private $fam_emp_numero_documento_familiar2;
        private $fam_emp_primer_nombre_familiar2;
        private $fam_emp_segundo_nombre_familiar2;
        private $fam_emp_primer_apellido_familiar2;
        private $fam_emp_segundo_apellido_familiar2;
        private $fam_emp_tipo_documento_familiar3;
        private $fam_emp_numero_documento_familiar3;
        private $fam_emp_primer_nombre_familiar3;
        private $fam_emp_segundo_nombre_familiar3;
        private $fam_emp_primer_apellido_familiar3;
        private $fam_emp_segundo_apellido_familiar3;
        private $fam_emp_tipo_documento_familiar4;
        private $fam_emp_numero_documento_familiar4;
        private $fam_emp_primer_nombre_familiar4;
        private $fam_emp_segundo_nombre_familiar4;
        private $fam_emp_primer_apellido_familiar4;
        private $fam_emp_segundo_apellido_familiar4;
        private $fam_emp_tipo_documento_familiar5;
        private $fam_emp_numero_documento_familiar5;
        private $fam_emp_primer_nombre_familiar5;
        private $fam_emp_segundo_nombre_familiar5;
        private $fam_emp_primer_apellido_familiar5;
        private $fam_emp_segundo_apellido_familiar5;
        private $tblestado_general_est_gen_id;

        //METODOS O FUNCIONES DE LA CLASE: 

        //Las funciones o metodos reciben caracteristicas o parametros

        //Un constructor permite inicializar las propiedades de un objeto al crear el objeto. 
        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        // Funcion para listar los Usuario
        public function queryFamilyEmployee() {
            $sql = "SELECT * FROM tblfamilia_empleado INNER JOIN tblestado_general ON tblestado_general.est_gen_id = tblfamilia_empleado.tblestado_general_est_gen_id WHERE est_gen_id <> 2 ORDER BY fam_emp_id ASC"; 
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            if ($result) {
                return $result;
            }
        }

        //Funcion para Insertar un Usuario
        public function insertFamilyEmployee() {
            if (isset($_POST['insert_family_employee'])){
                $this->fam_emp_nombre_completo_empleado   = $_POST['ins-fam-emp-nom-emp'];
                if (empty($_POST['ins-fam-emp-nom-emp'])) {
                    $this->fam_emp_nombre_completo_empleado = 'NULL';       
                }
                $this->fam_emp_tipo_documento_familiar1   = $_POST['ins-fam-emp-tip-doc-fau'];
                if (empty($_POST['ins-fam-emp-tip-doc-fau'])) {
                    $this->fam_emp_tipo_documento_familiar1 = 'NULL';       
                }
                $this->fam_emp_numero_documento_familiar1 = $_POST['ins-fam-emp-num-doc-fau'];
                if (empty($_POST['ins-fam-emp-num-doc-fau'])) {
                    $this->fam_emp_numero_documento_familiar1 = '0';       
                }
                $this->fam_emp_primer_nombre_familiar1    = $_POST['ins-fam-emp-pri-nom-fau'];
                if (empty($_POST['ins-fam-emp-pri-nom-fau'])) {
                    $this->fam_emp_primer_nombre_familiar1 = 'NULL';       
                }
                $this->fam_emp_segundo_nombre_familiar1   = $_POST['ins-fam-emp-seg-nom-fau'];
                if (empty($_POST['ins-fam-emp-seg-nom-fau'])) {
                    $this->fam_emp_segundo_nombre_familiar1 = ' ';       
                }
                $this->fam_emp_primer_apellido_familiar1  = $_POST['ins-fam-emp-pri-ape-fau'];
                if (empty($_POST['ins-fam-emp-pri-ape-fau'])) {
                    $this->fam_emp_primer_apellido_familiar1 = 'NULL';       
                }
                $this->fam_emp_segundo_apellido_familiar1 = $_POST['ins-fam-emp-seg-ape-fau'];
                if (empty($_POST['ins-fam-emp-seg-ape-fau'])) {
                    $this->fam_emp_segundo_apellido_familiar1 = 'NULL';       
                }
                $this->fam_emp_tipo_documento_familiar2   = $_POST['ins-fam-emp-tip-doc-fad'];
                if (empty($_POST['ins-fam-emp-tip-doc-fad'])) {
                    $this->fam_emp_tipo_documento_familiar2 = 'NULL';       
                }
                $this->fam_emp_numero_documento_familiar2 = $_POST['ins-fam-emp-num-doc-fad'];
                if (empty($_POST['ins-fam-emp-num-doc-fad'])) {
                    $this->fam_emp_numero_documento_familiar2 = '0';       
                }
                $this->fam_emp_primer_nombre_familiar2    = $_POST['ins-fam-emp-pri-nom-fad'];
                if (empty($_POST['ins-fam-emp-pri-nom-fad'])) {
                    $this->fam_emp_primer_nombre_familiar2 = 'NULL';       
                }
                $this->fam_emp_segundo_nombre_familiar2   = $_POST['ins-fam-emp-seg-nom-fad'];
                if (empty($_POST['ins-fam-emp-seg-nom-fad'])) {
                    $this->fam_emp_segundo_nombre_familiar2 = ' ';       
                }
                $this->fam_emp_primer_apellido_familiar2  = $_POST['ins-fam-emp-pri-ape-fad'];
                if (empty($_POST['ins-fam-emp-pri-ape-fad'])) {
                    $this->fam_emp_primer_apellido_familiar2 = 'NULL';       
                }
                $this->fam_emp_segundo_apellido_familiar2 = $_POST['ins-fam-emp-seg-ape-fad'];
                if (empty($_POST['ins-fam-emp-seg-ape-fad'])) {
                    $this->fam_emp_segundo_apellido_familiar2 = 'NULL';       
                }
                $this->fam_emp_tipo_documento_familiar3   = $_POST['ins-fam-emp-tip-doc-fat'];
                if (empty($_POST['ins-fam-emp-tip-doc-fat'])) {
                    $this->fam_emp_tipo_documento_familiar3 = 'NULL';       
                }
                $this->fam_emp_numero_documento_familiar3 = $_POST['ins-fam-emp-num-doc-fat'];
                if (empty($_POST['ins-fam-emp-num-doc-fat'])) {
                    $this->fam_emp_numero_documento_familiar3 = '0';       
                }
                $this->fam_emp_primer_nombre_familiar3    = $_POST['ins-fam-emp-pri-nom-fat'];
                if (empty($_POST['ins-fam-emp-pri-nom-fat'])) {
                    $this->fam_emp_primer_nombre_familiar3 = 'NULL';       
                }
                $this->fam_emp_segundo_nombre_familiar3   = $_POST['ins-fam-emp-seg-nom-fat'];
                if (empty($_POST['ins-fam-emp-seg-nom-fat'])) {
                    $this->fam_emp_segundo_nombre_familiar3 = ' ';       
                }
                $this->fam_emp_primer_apellido_familiar3  = $_POST['ins-fam-emp-pri-ape-fat'];
                if (empty($_POST['ins-fam-emp-pri-ape-fat'])) {
                    $this->fam_emp_primer_apellido_familiar3 = 'NULL';       
                }
                $this->fam_emp_segundo_apellido_familiar3 = $_POST['ins-fam-emp-seg-ape-fat'];
                if (empty($_POST['ins-fam-emp-seg-ape-fat'])) {
                    $this->fam_emp_segundo_apellido_familiar3 = 'NULL';       
                }
                $this->fam_emp_tipo_documento_familiar4   = $_POST['ins-fam-emp-tip-doc-fac'];
                if (empty($_POST['ins-fam-emp-tip-doc-fac'])) {
                    $this->fam_emp_tipo_documento_familiar4 = 'NULL';       
                }
                $this->fam_emp_numero_documento_familiar4 = $_POST['ins-fam-emp-num-doc-fac'];
                if (empty($_POST['ins-fam-emp-num-doc-fac'])) {
                    $this->fam_emp_numero_documento_familiar4 = '0';       
                }
                $this->fam_emp_primer_nombre_familiar4    = $_POST['ins-fam-emp-pri-nom-fac'];
                if (empty($_POST['ins-fam-emp-pri-nom-fac'])) {
                    $this->fam_emp_primer_nombre_familiar4 = 'NULL';       
                }
                $this->fam_emp_segundo_nombre_familiar4   = $_POST['ins-fam-emp-seg-nom-fac'];
                if (empty($_POST['ins-fam-emp-seg-nom-fac'])) {
                    $this->fam_emp_segundo_nombre_familiar4 = ' ';       
                }
                $this->fam_emp_primer_apellido_familiar4  = $_POST['ins-fam-emp-pri-ape-fac'];
                if (empty($_POST['ins-fam-emp-pri-ape-fac'])) {
                    $this->fam_emp_primer_apellido_familiar4 = 'NULL';       
                }
                $this->fam_emp_segundo_apellido_familiar4 = $_POST['ins-fam-emp-seg-ape-fac'];
                if (empty($_POST['ins-fam-emp-seg-ape-fac'])) {
                    $this->fam_emp_segundo_apellido_familiar4 = 'NULL';       
                }
                $this->fam_emp_tipo_documento_familiar5   = $_POST['ins-fam-emp-tip-doc-fai'];
                if (empty($_POST['ins-fam-emp-tip-doc-fai'])) {
                    $this->fam_emp_tipo_documento_familiar5 = 'NULL';       
                }
                $this->fam_emp_numero_documento_familiar5 = $_POST['ins-fam-emp-num-doc-fai'];
                if (empty($_POST['ins-fam-emp-num-doc-fai'])) {
                    $this->fam_emp_numero_documento_familiar5 = '0';       
                }
                $this->fam_emp_primer_nombre_familiar5    = $_POST['ins-fam-emp-pri-nom-fai'];
                if (empty($_POST['ins-fam-emp-pri-nom-fai'])) {
                    $this->fam_emp_primer_nombre_familiar5 = 'NULL';       
                }
                $this->fam_emp_segundo_nombre_familiar5   = $_POST['ins-fam-emp-seg-nom-fai'];
                if (empty($_POST['ins-fam-emp-seg-nom-fai'])) {
                    $this->fam_emp_segundo_nombre_familiar5 = ' ';       
                }
                $this->fam_emp_primer_apellido_familiar5  = $_POST['ins-fam-emp-pri-ape-fai'];
                if (empty($_POST['ins-fam-emp-pri-ape-fai'])) {
                    $this->fam_emp_primer_apellido_familiar5 = 'NULL';       
                }
                $this->fam_emp_segundo_apellido_familiar5 = $_POST['ins-fam-emp-seg-ape-fai'];
                if (empty($_POST['ins-fam-emp-seg-ape-fai'])) {
                    $this->fam_emp_segundo_apellido_familiar5 = 'NULL';       
                }
                $this->tblestado_general_est_gen_id       = 1;
                
                $employee = "SELECT fam_emp_nombre_completo_empleado FROM tblfamilia_empleado WHERE fam_emp_nombre_completo_empleado = '$this->fam_emp_nombre_completo_empleado'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_employee = mysqli_query($this->conection,$employee);
                if(mysqli_num_rows($result_employee)>0) {
                    echo "<script>alert('¡El empleado ya tiene registrada esa familia!')</script>";
                }else {
                    $sql = "INSERT INTO tblfamilia_empleado(fam_emp_nombre_completo_empleado,fam_emp_tipo_documento_familiar1,fam_emp_numero_documento_familiar1,fam_emp_primer_nombre_familiar1,fam_emp_segundo_nombre_familiar1,fam_emp_primer_apellido_familiar1,fam_emp_segundo_apellido_familiar1,fam_emp_tipo_documento_familiar2,fam_emp_numero_documento_familiar2,fam_emp_primer_nombre_familiar2,fam_emp_segundo_nombre_familiar2,fam_emp_primer_apellido_familiar2,fam_emp_segundo_apellido_familiar2,fam_emp_tipo_documento_familiar3,fam_emp_numero_documento_familiar3,fam_emp_primer_nombre_familiar3,fam_emp_segundo_nombre_familiar3,fam_emp_primer_apellido_familiar3,fam_emp_segundo_apellido_familiar3,fam_emp_tipo_documento_familiar4,fam_emp_numero_documento_familiar4,fam_emp_primer_nombre_familiar4,fam_emp_segundo_nombre_familiar4,fam_emp_primer_apellido_familiar4,fam_emp_segundo_apellido_familiar4,fam_emp_tipo_documento_familiar5,fam_emp_numero_documento_familiar5,fam_emp_primer_nombre_familiar5,fam_emp_segundo_nombre_familiar5,fam_emp_primer_apellido_familiar5,fam_emp_segundo_apellido_familiar5,tblestado_general_est_gen_id,fam_emp_fecha_registro) VALUES ('$this->fam_emp_nombre_completo_empleado','$this->fam_emp_tipo_documento_familiar1',$this->fam_emp_numero_documento_familiar1,'$this->fam_emp_primer_nombre_familiar1','$this->fam_emp_segundo_nombre_familiar1','$this->fam_emp_primer_apellido_familiar1','$this->fam_emp_segundo_apellido_familiar1','$this->fam_emp_tipo_documento_familiar2',$this->fam_emp_numero_documento_familiar2,'$this->fam_emp_primer_nombre_familiar2','$this->fam_emp_segundo_nombre_familiar2','$this->fam_emp_primer_apellido_familiar2','$this->fam_emp_segundo_apellido_familiar2','$this->fam_emp_tipo_documento_familiar3',$this->fam_emp_numero_documento_familiar3,'$this->fam_emp_primer_nombre_familiar3','$this->fam_emp_segundo_nombre_familiar3','$this->fam_emp_primer_apellido_familiar3','$this->fam_emp_segundo_apellido_familiar3','$this->fam_emp_tipo_documento_familiar4',$this->fam_emp_numero_documento_familiar4,'$this->fam_emp_primer_nombre_familiar4','$this->fam_emp_segundo_nombre_familiar4','$this->fam_emp_primer_apellido_familiar4','$this->fam_emp_segundo_apellido_familiar4','$this->fam_emp_tipo_documento_familiar5',$this->fam_emp_numero_documento_familiar5,'$this->fam_emp_primer_nombre_familiar5','$this->fam_emp_segundo_nombre_familiar5','$this->fam_emp_primer_apellido_familiar5','$this->fam_emp_segundo_apellido_familiar5',$this->tblestado_general_est_gen_id,NOW())";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if ($result) {
                        return $result;
                    }
                }
            }
        }

        //Funcion para Eliminar Familia del Empleado
        public function deleteFamilyEmployee() {
            if (isset($_POST['delete_family_employee'])) {
                $this->fam_emp_id = $_POST['del-fam-emp-id'];

                $employee = "SELECT * FROM tblempleado WHERE tblfamilia_empleado_fam_emp_id = '$this->fam_emp_id'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_employee = mysqli_query($this->conection,$employee);
                if(mysqli_num_rows($result_employee)>0) {
                    echo "<script>alert('¡El registro se encuentra vinculado a otro!')</script>";
                }else {
                    $sql = "UPDATE tblfamilia_empleado SET tblestado_general_est_gen_id = 2 WHERE fam_emp_id = $this->fam_emp_id";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if($result) {
                        return $result;
                    }
                }
            }
        }

        //Funcion para Actualizar los datos de un Usuario
        public function updateFamilyEmployee() {
            //Si me llega el parametro actualizar_usuario entonces ejecute el codigo
            if(isset($_POST['update_family_employee'])){
                //Por POST me estan llegando varios datos, entonces que especificarle a la funcion que esos datos son los mismos que las variables privadas y hago referencia a los name que capturé del form
                $this->fam_emp_id                         = $_POST['upd-fam-emp-id'];
                $this->fam_emp_nombre_completo_empleado   = $_POST['upd-fam-emp-nom'];
                if (empty($_POST['upd-fam-emp-nom'])) {
                    $this->fam_emp_nombre_completo_empleado = 'NULL';       
                }
                $this->fam_emp_tipo_documento_familiar1   = $_POST['upd-fam-emp-tip-doc-fau'];
                if (empty($_POST['upd-fam-emp-tip-doc-fau'])) {
                    $this->fam_emp_tipo_documento_familiar1 = 'NULL';       
                }
                $this->fam_emp_numero_documento_familiar1 = $_POST['upd-fam-emp-num-doc-fau'];
                if (empty($_POST['upd-fam-emp-num-doc-fau'])) {
                    $this->fam_emp_numero_documento_familiar1 = '0';       
                }
                $this->fam_emp_primer_nombre_familiar1    = $_POST['upd-fam-emp-pri-nom-fau'];
                if (empty($_POST['upd-fam-emp-pri-nom-fau'])) {
                    $this->fam_emp_primer_nombre_familiar1 = 'NULL';       
                }
                $this->fam_emp_segundo_nombre_familiar1   = $_POST['upd-fam-emp-seg-nom-fau'];
                if (empty($_POST['upd-fam-emp-seg-nom-fau'])) {
                    $this->fam_emp_segundo_nombre_familiar1 = ' ';       
                }
                $this->fam_emp_primer_apellido_familiar1  = $_POST['upd-fam-emp-pri-ape-fau'];
                if (empty($_POST['upd-fam-emp-pri-ape-fau'])) {
                    $this->fam_emp_primer_apellido_familiar1 = 'NULL';       
                }
                $this->fam_emp_segundo_apellido_familiar1 = $_POST['upd-fam-emp-seg-ape-fau'];
                if (empty($_POST['upd-fam-emp-seg-ape-fau'])) {
                    $this->fam_emp_segundo_apellido_familiar1 = 'NULL';       
                }
                $this->fam_emp_tipo_documento_familiar2   = $_POST['upd-fam-emp-tip-doc-fad'];
                if (empty($_POST['upd-fam-emp-tip-doc-fad'])) {
                    $this->fam_emp_tipo_documento_familiar2 = 'NULL';       
                }
                $this->fam_emp_numero_documento_familiar2 = $_POST['upd-fam-emp-num-doc-fad'];
                if (empty($_POST['upd-fam-emp-num-doc-fad'])) {
                    $this->fam_emp_numero_documento_familiar2 = '0';       
                }
                $this->fam_emp_primer_nombre_familiar2    = $_POST['upd-fam-emp-pri-nom-fad'];
                if (empty($_POST['upd-fam-emp-pri-nom-fad'])) {
                    $this->fam_emp_primer_nombre_familiar2 = 'NULL';       
                }
                $this->fam_emp_segundo_nombre_familiar2   = $_POST['upd-fam-emp-seg-nom-fad'];
                if (empty($_POST['upd-fam-emp-seg-nom-fad'])) {
                    $this->fam_emp_segundo_nombre_familiar2 = ' ';       
                }
                $this->fam_emp_primer_apellido_familiar2  = $_POST['upd-fam-emp-pri-ape-fad'];
                if (empty($_POST['upd-fam-emp-pri-ape-fad'])) {
                    $this->fam_emp_primer_apellido_familiar2 = 'NULL';       
                }
                $this->fam_emp_segundo_apellido_familiar2 = $_POST['upd-fam-emp-seg-ape-fad'];
                if (empty($_POST['upd-fam-emp-seg-ape-fad'])) {
                    $this->fam_emp_segundo_apellido_familiar2 = 'NULL';       
                }
                $this->fam_emp_tipo_documento_familiar3   = $_POST['upd-fam-emp-tip-doc-fat'];
                if (empty($_POST['upd-fam-emp-tip-doc-fat'])) {
                    $this->fam_emp_tipo_documento_familiar3 = 'NULL';       
                }
                $this->fam_emp_numero_documento_familiar3 = $_POST['upd-fam-emp-num-doc-fat'];
                if (empty($_POST['upd-fam-emp-num-doc-fat'])) {
                    $this->fam_emp_numero_documento_familiar3 = '0';       
                }
                $this->fam_emp_primer_nombre_familiar3    = $_POST['upd-fam-emp-pri-nom-fat'];
                if (empty($_POST['upd-fam-emp-pri-nom-fat'])) {
                    $this->fam_emp_primer_nombre_familiar3 = 'NULL';       
                }
                $this->fam_emp_segundo_nombre_familiar3   = $_POST['upd-fam-emp-seg-nom-fat'];
                if (empty($_POST['upd-fam-emp-seg-nom-fat'])) {
                    $this->fam_emp_segundo_nombre_familiar3 = ' ';       
                }
                $this->fam_emp_primer_apellido_familiar3  = $_POST['upd-fam-emp-pri-ape-fat'];
                if (empty($_POST['upd-fam-emp-pri-ape-fat'])) {
                    $this->fam_emp_primer_apellido_familiar3 = 'NULL';       
                }
                $this->fam_emp_segundo_apellido_familiar3 = $_POST['upd-fam-emp-seg-ape-fat'];
                if (empty($_POST['upd-fam-emp-seg-ape-fat'])) {
                    $this->fam_emp_segundo_apellido_familiar3 = 'NULL';       
                }
                $this->fam_emp_tipo_documento_familiar4   = $_POST['upd-fam-emp-tip-doc-fac'];
                if (empty($_POST['upd-fam-emp-tip-doc-fac'])) {
                    $this->fam_emp_tipo_documento_familiar4 = 'NULL';       
                }
                $this->fam_emp_numero_documento_familiar4 = $_POST['upd-fam-emp-num-doc-fac'];
                if (empty($_POST['upd-fam-emp-num-doc-fac'])) {
                    $this->fam_emp_numero_documento_familiar4 = '0';       
                }
                $this->fam_emp_primer_nombre_familiar4    = $_POST['upd-fam-emp-pri-nom-fac'];
                if (empty($_POST['upd-fam-emp-pri-nom-fac'])) {
                    $this->fam_emp_primer_nombre_familiar4 = 'NULL';       
                }
                $this->fam_emp_segundo_nombre_familiar4   = $_POST['upd-fam-emp-seg-nom-fac'];
                if (empty($_POST['upd-fam-emp-seg-nom-fac'])) {
                    $this->fam_emp_segundo_nombre_familiar4 = ' ';       
                }
                $this->fam_emp_primer_apellido_familiar4  = $_POST['upd-fam-emp-pri-ape-fac'];
                if (empty($_POST['upd-fam-emp-pri-ape-fac'])) {
                    $this->fam_emp_primer_apellido_familiar4 = 'NULL';       
                }
                $this->fam_emp_segundo_apellido_familiar4 = $_POST['upd-fam-emp-seg-ape-fac'];
                if (empty($_POST['upd-fam-emp-seg-ape-fac'])) {
                    $this->fam_emp_segundo_apellido_familiar4 = 'NULL';       
                }
                $this->fam_emp_tipo_documento_familiar5   = $_POST['upd-fam-emp-tip-doc-fai'];
                if (empty($_POST['upd-fam-emp-tip-doc-fai'])) {
                    $this->fam_emp_tipo_documento_familiar5 = 'NULL';       
                }
                $this->fam_emp_numero_documento_familiar5 = $_POST['upd-fam-emp-num-doc-fai'];
                if (empty($_POST['upd-fam-emp-num-doc-fai'])) {
                    $this->fam_emp_numero_documento_familiar5 = '0';       
                }
                $this->fam_emp_primer_nombre_familiar5    = $_POST['upd-fam-emp-pri-nom-fai'];
                if (empty($_POST['upd-fam-emp-pri-nom-fai'])) {
                    $this->fam_emp_primer_nombre_familiar5 = 'NULL';       
                }
                $this->fam_emp_segundo_nombre_familiar5   = $_POST['upd-fam-emp-seg-nom-fai'];
                if (empty($_POST['upd-fam-emp-seg-nom-fai'])) {
                    $this->fam_emp_segundo_nombre_familiar5 = ' ';       
                }
                $this->fam_emp_primer_apellido_familiar5  = $_POST['upd-fam-emp-pri-ape-fai'];
                if (empty($_POST['upd-fam-emp-pri-ape-fai'])) {
                    $this->fam_emp_primer_apellido_familiar5 = 'NULL';       
                }
                $this->fam_emp_segundo_apellido_familiar5 = $_POST['upd-fam-emp-seg-ape-fai'];
                if (empty($_POST['upd-fam-emp-seg-ape-fai'])) {
                    $this->fam_emp_segundo_apellido_familiar5 = 'NULL';       
                }
                
                // En una variable almaceno el sql con los datos que capturamos
                $sql = "UPDATE tblfamilia_empleado SET fam_emp_nombre_completo_empleado = '$this->fam_emp_nombre_completo_empleado',fam_emp_tipo_documento_familiar1 = '$this->fam_emp_tipo_documento_familiar1', fam_emp_numero_documento_familiar1 = $this->fam_emp_numero_documento_familiar1, fam_emp_primer_nombre_familiar1 = '$this->fam_emp_primer_nombre_familiar1', fam_emp_segundo_nombre_familiar1 = '$this->fam_emp_segundo_nombre_familiar1', fam_emp_primer_apellido_familiar1 = '$this->fam_emp_primer_apellido_familiar1', fam_emp_segundo_apellido_familiar1 = '$this->fam_emp_segundo_apellido_familiar1',fam_emp_tipo_documento_familiar2 = '$this->fam_emp_tipo_documento_familiar2',fam_emp_numero_documento_familiar2 = $this->fam_emp_numero_documento_familiar2, fam_emp_primer_nombre_familiar2 = '$this->fam_emp_primer_nombre_familiar2', fam_emp_segundo_nombre_familiar2 = '$this->fam_emp_segundo_nombre_familiar2',fam_emp_primer_apellido_familiar2 = '$this->fam_emp_primer_apellido_familiar2',fam_emp_segundo_apellido_familiar2 = '$this->fam_emp_segundo_apellido_familiar2', fam_emp_tipo_documento_familiar3 = '$this->fam_emp_tipo_documento_familiar3',fam_emp_numero_documento_familiar3 = $this->fam_emp_numero_documento_familiar3,fam_emp_primer_nombre_familiar3 = '$this->fam_emp_primer_nombre_familiar3', fam_emp_segundo_nombre_familiar3 = '$this->fam_emp_segundo_nombre_familiar3',fam_emp_primer_apellido_familiar3 = '$this->fam_emp_primer_apellido_familiar3', fam_emp_segundo_apellido_familiar3 = '$this->fam_emp_segundo_apellido_familiar3', fam_emp_tipo_documento_familiar4 = '$this->fam_emp_tipo_documento_familiar4',fam_emp_numero_documento_familiar4 = $this->fam_emp_numero_documento_familiar4, fam_emp_primer_nombre_familiar4 = '$this->fam_emp_primer_nombre_familiar4', fam_emp_segundo_nombre_familiar4 = '$this->fam_emp_segundo_nombre_familiar4',fam_emp_primer_apellido_familiar4 = '$this->fam_emp_primer_apellido_familiar4',fam_emp_segundo_apellido_familiar4 = '$this->fam_emp_segundo_apellido_familiar4', fam_emp_tipo_documento_familiar5 = '$this->fam_emp_tipo_documento_familiar5',fam_emp_numero_documento_familiar5 = $this->fam_emp_numero_documento_familiar5, fam_emp_primer_nombre_familiar5 = '$this->fam_emp_primer_nombre_familiar5', fam_emp_segundo_nombre_familiar5 = '$this->fam_emp_segundo_nombre_familiar5',fam_emp_primer_apellido_familiar5 = '$this->fam_emp_primer_apellido_familiar5', fam_emp_segundo_apellido_familiar5 = '$this->fam_emp_segundo_apellido_familiar5' WHERE fam_emp_id = $this->fam_emp_id";
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