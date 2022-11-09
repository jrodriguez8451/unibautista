<?php
    //Un OBJETO (Historia laboral en este caso) se le conoce en programacion como una CLASE
    //Esta clase esta herendando otra que es la que continene la conexion a la base de datos
    class WorkHistory extends Connection {
        /* Tipos de Variables o Funciones y Quien las puede usar:
        Private = solo tú
        Protected = tú y tus descendientes (herencia)
        Public = cualquiera.*/
        
        // Atributos:
        private $his_lab_id;
        private $tblempleado_emp_id;
        private $his_lab_fecha_ingreso_empresa;
        private $his_lab_fecha_inicio_contrato;
        private $his_lab_fecha_final_contrato;
        private $his_lab_tipo_contrato;
        private $his_lab_salario;
        private $tblcargo_car_id;
        private $his_lab_prorroga;
        private $his_lab_estado;
        private $tblestado_general_est_gen_id;

        //METODOS O FUNCIONES DE LA CLASE: 

        //Las funciones o metodos reciben caracteristicas o parametros

        //Un constructor permite inicializar las propiedades de un objeto al crear el objeto. 
        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        // Funcion para listar Historia Laboral
        public function queryWorkHistory(){
            $sql = "SELECT * FROM tblhistoria_laboral
            INNER JOIN tblempleado ON tblempleado.emp_id = tblhistoria_laboral.tblempleado_emp_id 
            INNER JOIN tblcargo ON tblcargo.car_id = tblhistoria_laboral.tblcargo_car_id 
            INNER JOIN tblestado_general ON tblestado_general.est_gen_id = tblhistoria_laboral.tblestado_general_est_gen_id 
            WHERE est_gen_id = 1 ORDER BY his_lab_id ASC"; 
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            if ($result) {
                return $result;
            }
        }

        //Funcion para listar los empleados
        public function employee() {
            $sql = "SELECT * FROM tblempleado WHERE tblestado_general_est_gen_id = 1";
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            return $result;
        }

        //Funcion para listar los cargos
        public function post() {
            $sql = "SELECT * FROM tblcargo WHERE tblestado_general_est_gen_id = 1";
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            return $result;
        }

        //Funcion para Insertar una Historia Laboral
        public function insertWorkHistory(){
            if (isset($_POST['insert_work_history'])){
                $this->tblempleado_emp_id            = $_POST['ins-wor-his-emp'];
                $this->his_lab_fecha_ingreso_empresa = $_POST['ins-wor-his-dat-ent'];
                $this->his_lab_fecha_inicio_contrato = $_POST['ins-wor-his-ent-con'];
                $this->his_lab_fecha_final_contrato  = $_POST['ins-wor-his-dat-fin'];
                $this->his_lab_tipo_contrato         = $_POST['ins-wor-his-tip-con'];
                $this->his_lab_salario               = $_POST['ins-wor-his-sal'];
                $this->tblcargo_car_id               = $_POST['ins-wor-his-pos'];
                $this->his_lab_prorroga              = $_POST['ins-wor-his-ext'];
                if (empty($_POST['ins-wor-his-ext'])) {
                    $this->his_lab_prorroga = 'No tiene';
                }
                $this->his_lab_estado                = $_POST['ins-wor-his-con'];
                $this->tblestado_general_est_gen_id  = 1;
                $sql = "INSERT INTO tblhistoria_laboral(tblempleado_emp_id,his_lab_fecha_ingreso_empresa,his_lab_fecha_inicio_contrato,his_lab_fecha_final_contrato,his_lab_tipo_contrato,his_lab_salario,tblcargo_car_id,his_lab_prorroga,his_lab_estado,tblestado_general_est_gen_id,his_lab_fecha_registro) VALUES ($this->tblempleado_emp_id,'$this->his_lab_fecha_ingreso_empresa','$this->his_lab_fecha_inicio_contrato','$this->his_lab_fecha_final_contrato','$this->his_lab_tipo_contrato',$this->his_lab_salario,$this->tblcargo_car_id,'$this->his_lab_prorroga','$this->his_lab_estado',$this->tblestado_general_est_gen_id,NOW())";
                //mysqli_query = Realiza una consulta a la base de datos
                $result = mysqli_query($this->conection,$sql);
                if ($result){
                    return $result;
                }
            }
        }

        //Funcion para Eliminar una Historia Laboral
        public function deleteWorkHistory(){
            if (isset($_POST['delete_work_history'])) {
                $this->his_lab_id = $_POST['del-wor-his-id'];
                $sql = "UPDATE tblhistoria_laboral SET tblestado_general_est_gen_id = 2 WHERE his_lab_id = $this->his_lab_id";
                //mysqli_query = Realiza una consulta a la base de datos
                $result = mysqli_query($this->conection,$sql);
                if($result){
                    return $result;
                }
            }   
        }

        //Funcion para Actualizar una Historia Laboral
        public function updateWorkHistory(){
            //Si me llega el parametro actualizar_usuario entonces ejecute el codigo
            if(isset($_POST['update_work_history'])){
                //Por POST me estan llegando varios datos, entonces que especificarle a la funcion que esos datos son los mismos que las variables privadas y hago referencia a los name que capturé del form
                $this->his_lab_id                    = $_POST['upd-wor-his-id'];
                $this->tblempleado_emp_id            = $_POST['upd-wor-his-emp'];
                $this->his_lab_fecha_ingreso_empresa = $_POST['upd-wor-his-dat-ent'];
                $this->his_lab_fecha_inicio_contrato = $_POST['upd-wor-his-ent-con'];
                $this->his_lab_fecha_final_contrato  = $_POST['upd-wor-his-dat-fin'];
                $this->his_lab_tipo_contrato         = $_POST['upd-wor-his-tip-con'];
                $this->his_lab_salario               = $_POST['upd-wor-his-sal'];
                $this->tblcargo_car_id               = $_POST['upd-wor-his-pos'];
                $this->his_lab_prorroga              = $_POST['upd-wor-his-ext'];
                if (empty($_POST['upd-wor-his-ext'])) {
                    $this->his_lab_prorroga = 'No tiene';
                }
                $this->his_lab_estado                = $_POST['upd-wor-his-con'];

                // En una variable almaceno el sql con los datos que capturamos
                $sql = "UPDATE tblhistoria_laboral SET tblempleado_emp_id=$this->tblempleado_emp_id,his_lab_fecha_ingreso_empresa='$this->his_lab_fecha_ingreso_empresa',his_lab_fecha_inicio_contrato='$this->his_lab_fecha_inicio_contrato',his_lab_fecha_final_contrato='$this->his_lab_fecha_final_contrato',his_lab_tipo_contrato='$this->his_lab_tipo_contrato',his_lab_salario=$this->his_lab_salario,tblcargo_car_id=$this->tblcargo_car_id,his_lab_prorroga='$this->his_lab_prorroga',his_lab_estado='$this->his_lab_estado' WHERE his_lab_id=$this->his_lab_id";
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