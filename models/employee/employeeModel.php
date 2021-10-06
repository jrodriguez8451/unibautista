<?php
    //Un OBJETO (empleado en este caso) se le conoce en programacion como una CLASE
    //Esta clase esta herendando otra que es la que continene la conexion a la base de datos
    class Employee extends Connection {
        /* Tipos de Variables o Funciones y Quien las puede usar:
        Private = solo tú
        Protected = tú y tus descendientes (herencia)
        Public = cualquiera.*/
        
        // Atributos:
        private $emp_id;
        private $emp_numero_documento;
        private $tbltipo_documento_tip_doc_id;
        private $emp_fecha_expendicion_documento;
        private $emp_departamento_expedicion_documento;
        private $emp_municipio_expedicion_documento;
        private $emp_primer_nombre;
        private $emp_segundo_nombre;
        private $emp_primer_apellido;
        private $emp_segundo_apellido;
        private $emp_genero;
        private $emp_fecha_nacimiento;
        private $emp_estado_civil;
        private $emp_direccion;
        private $emp_celular1;
        private $emp_celular2;
        private $emp_telefono1;
        private $emp_telefono2;
        private $emp_correo_personal;
        private $emp_correo_institucional;
        private $emp_departamento;
        private $emp_ciudad;
        private $emp_comuna;
        private $emp_barrio;
        private $emp_estrato;
        private $tblfamilia_empleado_fam_emp_id;
        private $tbleps_eps_id;
        private $tblarl_arl_id;
        private $tblcaja_compensacion_caj_com_id;
        private $tblfondo_pension_fon_pen_id;
        private $emp_formacion_academica;
        private $emp_tipo_contrato;
        private $tblcargo_car_id;
        private $emp_salario;
        private $emp_fecha_ingreso_empresa;
        private $emp_fecha_inicio_laboral;
        private $emp_fecha_final_laboral;
        private $emp_estado;
        private $tblestado_general_est_gen_id;

        //METODOS O FUNCIONES DE LA CLASE: 

        //Las funciones o metodos reciben caracteristicas o parametros

        //Un constructor permite inicializar las propiedades de un objeto al crear el objeto. 
        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        // Funcion para listar los Empleados
        public function queryEmployee() {
            $sql = "SELECT * FROM tblempleado 
            INNER JOIN tbltipo_documento ON tbltipo_documento.tip_doc_id = tblempleado.tbltipo_documento_tip_doc_id 
            INNER JOIN tblfamilia_empleado ON tblfamilia_empleado.fam_emp_id = tblempleado.tblfamilia_empleado_fam_emp_id 
            INNER JOIN tbleps ON tbleps.eps_id = tblempleado.tbleps_eps_id 
            INNER JOIN tblarl ON tblarl.arl_id  = tblempleado.tblarl_arl_id 
            INNER JOIN tblcaja_compensacion ON tblcaja_compensacion.caj_com_id  = tblempleado.tblcaja_compensacion_caj_com_id 
            INNER JOIN tblfondo_pension ON tblfondo_pension.fon_pen_id   = tblempleado.tblfondo_pension_fon_pen_id 
            INNER JOIN tblcargo ON tblcargo.car_id  = tblempleado.tblcargo_car_id 
            INNER JOIN tblestado_general ON tblestado_general.est_gen_id = tblempleado.tblestado_general_est_gen_id 
            WHERE est_gen_id <> 2 ORDER BY emp_id ASC"; 
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            if ($result) {
                return $result;
            }
        }


        //Funcion para listar loa Familia del Empleado
        public function queryFamily() {
            $sql = "SELECT * FROM tblfamilia_empleado WHERE tblestado_general_est_gen_id = 1";
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            return $result;
        }

        //Funcion para listar las EPS
        public function queryEPS() {
            $sql = "SELECT * FROM tbleps WHERE tblestado_general_est_gen_id = 1";
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            return $result;
        }
        
        //Funcion para listar las ARL
        public function queryARL() {
            $sql = "SELECT * FROM tblarl WHERE tblestado_general_est_gen_id = 1";
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            return $result;
        }
        
        //Funcion para listar las Caja de Compensacion
        public function queryCompensationBox() {
            $sql = "SELECT * FROM tblcaja_compensacion WHERE tblestado_general_est_gen_id = 1";
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            return $result;
        }

        //Funcion para listar los Fondos de Pension
        public function queryPensionFund() {
            $sql = "SELECT * FROM tblfondo_pension WHERE tblestado_general_est_gen_id = 1";
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            return $result;
        }

        //Funcion para listar los Cargos
        public function queryPost() {
            $sql = "SELECT * FROM tblcargo WHERE tblestado_general_est_gen_id = 1";
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            return $result;
        }
        
        //Funcion para listar los Tipo de Documento
        public function documentType() {
            $sql = "SELECT * FROM tbltipo_documento WHERE tblestado_general_est_gen_id = 1";
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            return $result;
        }

        //Funcion para Insertar un Empleado
        public function insertEmployee() {
            if (isset($_POST['insert_employee'])){
                $this->emp_numero_documento                  = $_POST['ins-emp-num-doc'];
                $this->tbltipo_documento_tip_doc_id          = $_POST['ins-emp-tip-doc'];
                $this->emp_fecha_expendicion_documento       = $_POST['ins-emp-fec-exp'];
                $this->emp_departamento_expedicion_documento = $_POST['ins-emp-dep-doc'];
                $this->emp_municipio_expedicion_documento    = $_POST['ins-emp-mun-exp'];
                $this->emp_primer_nombre                     = $_POST['ins-emp-pri-nom'];
                $this->emp_segundo_nombre                    = $_POST['ins-emp-seg-nom'];
                if (empty($_POST['ins-emp-seg-nom'])) {
                    $this->emp_segundo_nombre = '';       
                }
                $this->emp_primer_apellido                   = $_POST['ins-emp-pri-ape'];
                $this->emp_segundo_apellido                  = $_POST['ins-emp-seg-ape'];
                $this->emp_genero                            = $_POST['ins-emp-gen'];
                $this->emp_fecha_nacimiento                  = $_POST['ins-emp-fec-nac'];
                $this->emp_estado_civil                      = $_POST['ins-emp-est-civ'];
                $this->emp_direccion                         = $_POST['ins-emp-dir'];
                $this->emp_celular1                          = $_POST['ins-emp-cel-uno'];
                $this->emp_celular2                          = $_POST['ins-emp-cel-dos'];
                $this->emp_telefono1                         = $_POST['ins-emp-tel-uno'];
                $this->emp_telefono2                         = $_POST['ins-emp-tel-dos'];
                $this->emp_correo_personal                   = $_POST['ins-emp-cor-per'];
                $this->emp_correo_institucional              = $_POST['ins-emp-cor-ins'];
                $this->emp_departamento                      = $_POST['ins-emp-dep'];
                $this->emp_ciudad                            = $_POST['ins-emp-ciu'];
                $this->emp_comuna                            = $_POST['ins-emp-com'];
                $this->emp_barrio                            = $_POST['ins-emp-bar'];
                $this->emp_estrato                           = $_POST['ins-emp-est'];
                $this->tblfamilia_empleado_fam_emp_id        = $_POST['ins-emp-fam'];
                $this->tbleps_eps_id                         = $_POST['ins-emp-eps'];
                $this->tblarl_arl_id                         = $_POST['ins-emp-arl'];
                $this->tblcaja_compensacion_caj_com_id       = $_POST['ins-em-caj-com'];
                $this->tblfondo_pension_fon_pen_id           = $_POST['ins-emp-fon-pen'];
                $this->emp_formacion_academica               = $_POST['ins-emp-for'];
                $this->emp_tipo_contrato                     = $_POST['ins-tip-con'];
                $this->tblcargo_car_id                       = $_POST['ins-emp-car'];
                $this->emp_salario                           = $_POST['ins-emp-sal'];
                $this->emp_fecha_ingreso_empresa             = $_POST['ins-emp-fec-ing'];
                $this->emp_fecha_inicio_laboral              = $_POST['ins-emp-fec-ini'];
                $this->emp_fecha_final_laboral               = $_POST['ins-emp-fec-fin'];
                if (empty($_POST['ins-emp-fec-fin'])) {
                    $this->emp_fecha_final_laboral = '0000-00-00';       
                }
                $this->emp_estado                            = "Contratado(a)";
                $this->tblestado_general_est_gen_id          = 1;

                $document = "SELECT emp_numero_documento FROM tblempleado WHERE emp_numero_documento = $this->emp_numero_documento";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_document = mysqli_query($this->conection,$document);
                if(mysqli_num_rows($result_document)>0) {
                    echo "<script>alert('¡El numero de documento ya existe en la base de datos!')</script>";
                }else {
                    $sql = "INSERT INTO tblempleado(emp_numero_documento, tbltipo_documento_tip_doc_id, emp_fecha_expendicion_documento, emp_departamento_expedicion_documento, emp_municipio_expedicion_documento, emp_primer_nombre, emp_segundo_nombre, emp_primer_apellido, emp_segundo_apellido, emp_genero, emp_fecha_nacimiento, emp_estado_civil, emp_direccion, emp_celular1, emp_celular2, emp_telefono1, emp_telefono2, emp_correo_personal, emp_correo_institucional, emp_departamento, emp_ciudad, emp_comuna, emp_barrio, emp_estrato, tblfamilia_empleado_fam_emp_id, tbleps_eps_id, tblarl_arl_id, tblcaja_compensacion_caj_com_id, tblfondo_pension_fon_pen_id, emp_formacion_academica, emp_tipo_contrato, tblcargo_car_id, emp_salario, emp_fecha_inicio_laboral, emp_fecha_ingreso_empresa, emp_fecha_final_laboral, emp_estado, tblestado_general_est_gen_id, emp_fecha_registro) VALUES ($this->emp_numero_documento,$this->tbltipo_documento_tip_doc_id,'$this->emp_fecha_expendicion_documento','$this->emp_departamento_expedicion_documento','$this->emp_municipio_expedicion_documento','$this->emp_primer_nombre','$this->emp_segundo_nombre','$this->emp_primer_apellido','$this->emp_segundo_apellido','$this->emp_genero','$this->emp_fecha_nacimiento','$this->emp_estado_civil','$this->emp_direccion',$this->emp_celular1,$this->emp_celular2,$this->emp_telefono1,$this->emp_telefono2,'$this->emp_correo_personal','$this->emp_correo_institucional','$this->emp_departamento','$this->emp_ciudad',$this->emp_comuna,'$this->emp_barrio',$this->emp_estrato,$this->tblfamilia_empleado_fam_emp_id,$this->tbleps_eps_id,$this->tblarl_arl_id,$this->tblcaja_compensacion_caj_com_id,$this->tblfondo_pension_fon_pen_id,'$this->emp_formacion_academica','$this->emp_tipo_contrato',$this->tblcargo_car_id,$this->emp_salario,'$this->emp_fecha_inicio_laboral','$this->emp_fecha_ingreso_empresa','$this->emp_fecha_final_laboral','$this->emp_estado',$this->tblestado_general_est_gen_id,NOW())";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if ($result) {
                        return $result;
                    }
                }
            }
        }

        //Funcion para Eliminar Empleado
        public function deleteEmployee() {
            if (isset($_POST['delete_employee'])) {
                $this->emp_id = $_POST['del-emp-id'];
                $sql = "UPDATE tblempleado SET tblestado_general_est_gen_id = 2 WHERE emp_id = $this->emp_id";
                //mysqli_query = Realiza una consulta a la base de datos
                $result = mysqli_query($this->conection,$sql);
                if($result) {
                    return $result;
                }
            }
        }

        //Funcion para Actualizar los datos del empleado
        public function updateEmployee() {
            if(isset($_POST['update_employee'])){
                //Por POST me estan llegando varios datos, entonces que especificarle a la funcion que esos datos son los mismos que las variables privadas y hago referencia a los name que capturé del form
                $this->emp_id                                = $_POST['upd-emp-id'];
                $this->emp_numero_documento                  = $_POST['upd-emp-num-doc'];
                $this->tbltipo_documento_tip_doc_id          = $_POST['upd-emp-tip-doc'];
                $this->emp_fecha_expendicion_documento       = $_POST['upd-emp-fec-exp'];
                $this->emp_departamento_expedicion_documento = $_POST['upd-emp-dep-doc'];
                $this->emp_municipio_expedicion_documento    = $_POST['upd-emp-mun-exp'];
                $this->emp_primer_nombre                     = $_POST['upd-emp-pri-nom'];
                $this->emp_segundo_nombre                    = $_POST['upd-emp-seg-nom'];
                if (empty($_POST['upd-emp-seg-nom'])) {
                    $this->emp_segundo_nombre = '';       
                }
                $this->emp_primer_apellido                   = $_POST['upd-emp-pri-ape'];
                $this->emp_segundo_apellido                  = $_POST['upd-emp-seg-ape'];
                $this->emp_genero                            = $_POST['upd-emp-gen'];
                $this->emp_fecha_nacimiento                  = $_POST['upd-emp-fec-nac'];
                $this->emp_estado_civil                      = $_POST['upd-emp-est-civ'];
                $this->emp_direccion                         = $_POST['upd-emp-dir'];
                $this->emp_celular1                          = $_POST['upd-emp-cel-uno'];
                $this->emp_celular2                          = $_POST['upd-emp-cel-dos'];
                $this->emp_telefono1                         = $_POST['upd-emp-tel-uno'];
                $this->emp_telefono2                         = $_POST['upd-emp-tel-dos'];
                $this->emp_correo_personal                   = $_POST['upd-emp-cor-per'];
                $this->emp_correo_institucional              = $_POST['upd-emp-cor-ins'];
                $this->emp_departamento                      = $_POST['upd-emp-dep'];
                $this->emp_ciudad                            = $_POST['upd-emp-ciu'];
                $this->emp_comuna                            = $_POST['upd-emp-com'];
                $this->emp_barrio                            = $_POST['upd-emp-bar'];
                $this->emp_estrato                           = $_POST['upd-emp-est'];
                $this->tblfamilia_empleado_fam_emp_id        = $_POST['upd-emp-fam'];
                $this->tbleps_eps_id                         = $_POST['upd-emp-eps'];
                $this->tblarl_arl_id                         = $_POST['upd-emp-arl'];
                $this->tblcaja_compensacion_caj_com_id       = $_POST['upd-em-caj-com'];
                $this->tblfondo_pension_fon_pen_id           = $_POST['upd-emp-fon-pen'];
                $this->emp_formacion_academica               = $_POST['upd-emp-for'];
                $this->emp_tipo_contrato                     = $_POST['upd-emp-tip-con'];
                $this->tblcargo_car_id                       = $_POST['upd-emp-car'];
                $this->emp_salario                           = $_POST['upd-emp-sal'];
                $this->emp_fecha_ingreso_empresa             = $_POST['upd-emp-fec-ing'];
                $this->emp_fecha_inicio_laboral              = $_POST['upd-emp-fec-ini'];
                $this->emp_fecha_final_laboral               = $_POST['upd-emp-fec-fin'];
                if (empty($_POST['upd-emp-fec-fin'])) {
                    $this->emp_fecha_final_laboral = '0000-00-00';       
                }
                $this->emp_estado                            = $_POST['upd-emp-con'];

                // En una variable almaceno el sql con los datos que capturamos
                $sql = "UPDATE tblempleado SET emp_numero_documento = $this->emp_numero_documento, tbltipo_documento_tip_doc_id = $this->tbltipo_documento_tip_doc_id, emp_fecha_expendicion_documento = '$this->emp_fecha_expendicion_documento', emp_departamento_expedicion_documento = '$this->emp_departamento_expedicion_documento', emp_municipio_expedicion_documento = '$this->emp_municipio_expedicion_documento', emp_primer_nombre = '$this->emp_primer_nombre', emp_segundo_nombre = '$this->emp_segundo_nombre', emp_primer_apellido = '$this->emp_primer_apellido', emp_segundo_apellido = '$this->emp_segundo_apellido', emp_genero = '$this->emp_genero', emp_fecha_nacimiento = '$this->emp_fecha_nacimiento', emp_estado_civil = '$this->emp_estado_civil', emp_direccion = '$this->emp_direccion', emp_celular1 = $this->emp_celular1, emp_celular2 = $this->emp_celular2, emp_telefono1 = $this->emp_telefono1, emp_telefono2 = $this->emp_telefono2, emp_correo_personal = '$this->emp_correo_personal', emp_correo_institucional = '$this->emp_correo_institucional', emp_departamento = '$this->emp_departamento', emp_ciudad = '$this->emp_ciudad', emp_comuna = $this->emp_comuna, emp_barrio = '$this->emp_barrio', emp_estrato = $this->emp_estrato, tblfamilia_empleado_fam_emp_id = $this->tblfamilia_empleado_fam_emp_id, tbleps_eps_id = $this->tbleps_eps_id, tblarl_arl_id = $this->tblarl_arl_id, tblcaja_compensacion_caj_com_id = $this->tblcaja_compensacion_caj_com_id,tblfondo_pension_fon_pen_id = $this->tblfondo_pension_fon_pen_id, emp_formacion_academica = '$this->emp_formacion_academica', emp_tipo_contrato = '$this->emp_tipo_contrato', tblcargo_car_id = $this->tblcargo_car_id, emp_salario = $this->emp_salario, emp_fecha_ingreso_empresa = '$this->emp_fecha_ingreso_empresa', emp_fecha_inicio_laboral = '$this->emp_fecha_inicio_laboral', emp_fecha_final_laboral ='$this->emp_fecha_final_laboral', emp_estado = '$this->emp_estado' WHERE emp_id = $this->emp_id";
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