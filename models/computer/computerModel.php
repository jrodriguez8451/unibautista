<?php
    //Un OBJETO (usuario en este caso) se le conoce en programacion como una CLASE
    //Esta clase esta herendando otra que es la que continene la conexion a la base de datos
    class Computer extends Connection {
        /* Tipos de Variables o Funciones y Quien las puede usar:
        Private = solo tú
        Protected = tú y tus descendientes (herencia)
        Public = cualquiera.*/
        
        // Atributos:
        private $com_id;
        private $com_activo_fijo;
        private $com_referencia;
        private $com_serial;
        private $com_modelo;
        private $tblmarca_mar_id;
        private $tbltipo_computador_tip_com_id;
        private $com_nombre_equipo;
        private $com_nombre_usuario;
        private $com_procesador;
        private $com_ghz_procesador;
        private $com_memoria_ram;
        private $com_arquitectura;
        private $tblsistema_operativo_sis_ope_id;
        private $com_edicion_sistema_operativo;
        private $com_nombre_disco_duro;
        private $com_capacidad_disco_duro;
        private $com_office_esta_instalado;
        private $com_office_esta_activado;
        private $com_licencia_activacion_office;
        private $com_sistema_operativo_esta_activado;
        private $com_licencia_activacion_sistema_operativo;
        private $tbloficina_ofi_id;
        private $com_observacion;
        private $com_estado;
        private $com_fecha_registro;
        private $tblestado_general_est_gen_id;

        //METODOS O FUNCIONES DE LA CLASE: 

        //Las funciones o metodos reciben caracteristicas o parametros

        //Un constructor permite inicializar las propiedades de un objeto al crear el objeto. 
        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        // Funcion para listar los Usuario
        public function queryComputer() {
            $sql = "SELECT * FROM tblcomputador 
            INNER JOIN tblmarca ON tblmarca.mar_id = tblcomputador.tblmarca_mar_id 
            INNER JOIN tbltipo_computador ON tbltipo_computador.tip_com_id = tblcomputador.tbltipo_computador_tip_com_id  
            INNER JOIN tblsistema_operativo ON tblsistema_operativo.sis_ope_id = tblcomputador.tblsistema_operativo_sis_ope_id  
            INNER JOIN tbloficina ON tbloficina.ofi_id = tblcomputador.tbloficina_ofi_id
            INNER JOIN tblestado_general ON tblestado_general.est_gen_id  = tblcomputador.tblestado_general_est_gen_id
            WHERE est_gen_id <> 2 ORDER BY com_id ASC"; 
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            if ($result) {
                return $result;
            }
        }

        //Funcion para listar las Marcas
        public function brand() {
            $sql = "SELECT * FROM tblmarca WHERE tblestado_general_est_gen_id = 1";
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            return $result;
        }

        //Funcion para listar los Tipo de Computador
        public function computerType() {
            $sql = "SELECT * FROM tbltipo_computador WHERE tblestado_general_est_gen_id = 1";
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            return $result;
        }

        //Funcion para listar Sistemas Operativos
        public function operatingSystem() {
            $sql = "SELECT * FROM tblsistema_operativo WHERE tblestado_general_est_gen_id = 1";
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            return $result;
        }

        //Funcion para listar Oficinas
        public function office() {
        $sql = "SELECT * FROM tbloficina WHERE tblestado_general_est_gen_id = 1";
        //mysqli_query = Realiza una consulta a la base de datos
        $result = mysqli_query($this->conection,$sql);
        return $result;
        }

        //Funcion para listar los Estados
        public function status() {
            $sql = "SELECT * FROM tblestado WHERE tblestado_general_est_gen_id = 1";
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            return $result;
        }
        
        //Funcion para Insertar un Usuario
        public function insertComputer() {
            if (isset($_POST['insert_computer'])){
                $this->com_activo_fijo                           = $_POST['ins-com-cod-act-fij'];
                $this->com_referencia                            = $_POST['ins-com-ref'];
                $this->com_serial                                = $_POST['ins-com-ser'];
                $this->com_modelo                                = $_POST['ins-com-mod'];
                $this->tblmarca_mar_id                           = $_POST['ins-com-mar'];
                $this->tbltipo_computador_tip_com_id             = $_POST['ins-com-tip-com'];
                $this->com_nombre_equipo                         = $_POST['ins-com-nom-com'];
                $this->com_nombre_usuario                        = $_POST['ins-com-nom-usu'];
                $this->com_procesador                            = $_POST['ins-com-pro'];
                $this->com_ghz_procesador                        = $_POST['ins-com-ghz-pro'];
                $this->com_memoria_ram                           = $_POST['ins-com-mem-ram'];
                $this->com_arquitectura                          = $_POST['ins-com-arq'];
                $this->tblsistema_operativo_sis_ope_id           = $_POST['ins-com-sis-ope'];
                $this->com_edicion_sistema_operativo             = $_POST['ins-com-edi-sis-ope'];
                $this->com_nombre_disco_duro                     = $_POST['ins-com-nom-dis-dur'];
                $this->com_capacidad_disco_duro                  = $_POST['ins-com-cap-dis-dur'];
                $this->com_office_esta_instalado                 = $_POST['ins-com-off-ins'];
                $this->com_office_esta_activado                  = $_POST['ins-com-off-act'];
                $this->com_licencia_activacion_office            = $_POST['ins-com-lic-off'];
                $this->com_sistema_operativo_esta_activado       = $_POST['ins-com-sis-act'];
                $this->com_licencia_activacion_sistema_operativo = $_POST['ins-com-lin-act-sis-ope'];
                $this->tbloficina_ofi_id                         = $_POST['ins-com-ubi'];
                $this->com_observacion                           = $_POST['ins-com-obs'];
                $this->com_fecha_registro                        = $_POST['ins-com-fec-reg'];
                $this->com_estado                                = $_POST['ins-com-est'];
                $this->tblestado_general_est_gen_id              = 1;

                $code = "SELECT com_activo_fijo FROM tblcomputador WHERE com_activo_fijo = '$this->com_activo_fijo'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_code = mysqli_query($this->conection,$code);
                if(mysqli_num_rows($result_code)>0) {
                    echo "<script>alert('¡El activo fijo ya existe en la base de datos!')</script>";
                }else {
                    $sql = "INSERT INTO tblcomputador(com_activo_fijo,com_referencia,com_serial,com_modelo,tblmarca_mar_id,tbltipo_computador_tip_com_id,com_nombre_equipo,com_nombre_usuario,com_procesador,com_ghz_procesador,com_memoria_ram,com_arquitectura,tblsistema_operativo_sis_ope_id,com_edicion_sistema_operativo,com_nombre_disco_duro,com_capacidad_disco_duro,com_office_esta_instalado,com_office_esta_activado,com_licencia_activacion_office,com_sistema_operativo_esta_activado,com_licencia_activacion_sistema_operativo,tbloficina_ofi_id,com_observacion,com_estado,com_fecha_registro,tblestado_general_est_gen_id) VALUES ('$this->com_activo_fijo','$this->com_referencia','$this->com_serial','$this->com_modelo',$this->tblmarca_mar_id,$this->tbltipo_computador_tip_com_id,'$this->com_nombre_equipo','$this->com_nombre_usuario','$this->com_procesador','$this->com_ghz_procesador','$this->com_memoria_ram','$this->com_arquitectura','$this->tblsistema_operativo_sis_ope_id','$this->com_edicion_sistema_operativo','$this->com_nombre_disco_duro','$this->com_capacidad_disco_duro','$this->com_office_esta_instalado','$this->com_office_esta_activado','$this->com_licencia_activacion_office','$this->com_sistema_operativo_esta_activado','$this->com_licencia_activacion_sistema_operativo',$this->tbloficina_ofi_id,'$this->com_observacion','$this->com_estado','$this->com_fecha_registro',$this->tblestado_general_est_gen_id)";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if ($result) {
                        return $result;
                    }
                }
            }
        }

        //Funcion para Eliminar un Computador
        public function deleteComputer() {
            if (isset($_POST['delete_computer'])) {
                $this->com_id = $_POST['del-com-id'];
                $sql = "UPDATE tblcomputador SET tblestado_general_est_gen_id = 2 WHERE com_id = $this->com_id";
                //mysqli_query = Realiza una consulta a la base de datos
                $result = mysqli_query($this->conection,$sql);
                if($result) {
                    return $result;
                }
            }
        }

        //Funcion para Actualizar los datos de un Usuario
        public function updateUser() {
            //Si me llega el parametro actualizar_usuario entonces ejecute el codigo
            if(isset($_POST['update_user'])){
                //Por POST me estan llegando varios datos, entonces que especificarle a la funcion que esos datos son los mismos que las variables privadas y hago referencia a los name que capturé del form
                $this->usuario_id               = $_POST['upd-usu-id'];
                $this->usuario_numero_documento = $_POST['upd-usu-num-doc'];
                $this->usuario_tipo_documento   = $_POST['upd-usu-tip-doc'];
                $this->usuario_primer_nombre    = $_POST['upd-usu-pri-nom'];
                $this->usuario_segundo_nombre   = $_POST['upd-usu-seg-nom'];
                $this->usuario_primer_apellido  = $_POST['upd-usu-pri-ape'];
                $this->usuario_segundo_apellido = $_POST['upd-usu-seg-ape'];
                $this->usuario_celular          = $_POST['upd-usu-cel'];
                $this->usuario_telefono         = $_POST['upd-usu-tel'];
                $this->usuario_direccion        = $_POST['upd-usu-dir'];
                $this->usuario_correo           = $_POST['upd-usu-cor'];
                $this->usuario_contrasena       = $_POST['upd-usu-con'];
                $this->usuario_fecha_registro   = $_POST['upd-usu-fec-reg'];
                $this->usuario_rol              = $_POST['upd-usu-rol'];
                $this->usuario_estado           = $_POST['upd-usu-est'];
                // En una variable almaceno el sql con los datos que capturamos
                $sql = "UPDATE tblusuario SET usu_numero_documento = $this->usuario_numero_documento,tbltipo_documento_tip_doc_id  = $this->usuario_tipo_documento,usu_primer_nombre = '$this->usuario_primer_nombre',usu_segundo_nombre = '$this->usuario_segundo_nombre',usu_primer_apellido = '$this->usuario_primer_apellido',usu_segundo_apellido = '$this->usuario_segundo_apellido',usu_celular = $this->usuario_celular,usu_telefono = $this->usuario_telefono,usu_direccion = '$this->usuario_direccion',usu_correo = '$this->usuario_correo',usu_contrasena = '$this->usuario_contrasena',usu_fecha_registro = '$this->usuario_fecha_registro',tblrol_rol_id  = $this->usuario_rol,tblestado_est_id  = '$this->usuario_estado' WHERE usu_id = $this->usuario_id";
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