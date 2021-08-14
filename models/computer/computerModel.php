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
        private $com_tipo_computador;
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

        //Funcion para Insertar un Usuario
        public function insertComputer() {
            if (isset($_POST['insert_computer'])){
                $this->com_activo_fijo                           = $_POST['ins-com-cod-act-fij'];
                $this->com_referencia                            = $_POST['ins-com-ref'];
                $this->com_serial                                = $_POST['ins-com-ser'];
                $this->com_modelo                                = $_POST['ins-com-mod'];
                $this->tblmarca_mar_id                           = $_POST['ins-com-mar'];
                $this->com_tipo_computador                       = $_POST['ins-com-tip-com'];
                $this->com_nombre_equipo                         = $_POST['ins-com-nom-com'];
                $this->com_nombre_usuario                        = $_POST['ins-com-nom-usu'];
                $this->com_procesador                            = $_POST['ins-com-pro'];
                $this->com_memoria_ram                           = $_POST['ins-com-mem-ram'];
                $this->com_arquitectura                          = $_POST['ins-com-arq'];
                $this->tblsistema_operativo_sis_ope_id           = $_POST['ins-com-sis-ope'];
                $this->com_edicion_sistema_operativo             = $_POST['ins-com-edi-sis-ope'];
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
                    $sql = "INSERT INTO tblcomputador(com_activo_fijo, com_referencia, com_serial, com_modelo, tblmarca_mar_id, com_tipo_computador, com_nombre_equipo, com_nombre_usuario, com_procesador, com_memoria_ram, com_arquitectura, tblsistema_operativo_sis_ope_id, com_edicion_sistema_operativo, com_capacidad_disco_duro, com_office_esta_instalado, com_office_esta_activado, com_licencia_activacion_office, com_sistema_operativo_esta_activado, com_licencia_activacion_sistema_operativo, tbloficina_ofi_id, com_observacion, com_estado, tblestado_general_est_gen_id, com_fecha_registro) VALUES ('$this->com_activo_fijo','$this->com_referencia','$this->com_serial','$this->com_modelo',$this->tblmarca_mar_id,'$this->com_tipo_computador','$this->com_nombre_equipo','$this->com_nombre_usuario','$this->com_procesador','$this->com_memoria_ram','$this->com_arquitectura',$this->tblsistema_operativo_sis_ope_id,'$this->com_edicion_sistema_operativo','$this->com_capacidad_disco_duro','$this->com_office_esta_instalado','$this->com_office_esta_activado','$this->com_licencia_activacion_office','$this->com_sistema_operativo_esta_activado','$this->com_licencia_activacion_sistema_operativo',$this->tbloficina_ofi_id,'$this->com_observacion','$this->com_estado',$this->tblestado_general_est_gen_id,NOW())";
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
        public function updateComputer() {
            //Si me llega el parametro actualizar_usuario entonces ejecute el codigo
            if(isset($_POST['update_computer'])){
                //Por POST me estan llegando varios datos, entonces que especificarle a la funcion que esos datos son los mismos que las variables privadas y hago referencia a los name que capturé del form
                $this->com_id                                    = $_POST['upd-com-id'];
                $this->com_activo_fijo                           = $_POST['upd-com-cod-act-fij'];
                $this->com_referencia                            = $_POST['upd-com-ref'];
                $this->com_serial                                = $_POST['upd-com-ser'];
                $this->com_modelo                                = $_POST['upd-com-mod'];
                $this->tblmarca_mar_id                           = $_POST['upd-com-mar'];
                $this->tbltipo_computador_tip_com_id             = $_POST['upd-com-tip-com'];
                $this->com_nombre_equipo                         = $_POST['upd-com-nom-com'];
                $this->com_nombre_usuario                        = $_POST['upd-com-nom-usu'];
                $this->com_procesador                            = $_POST['upd-com-pro'];
                $this->com_ghz_procesador                        = $_POST['upd-com-ghz-pro'];
                $this->com_memoria_ram                           = $_POST['upd-com-mem-ram'];
                $this->com_arquitectura                          = $_POST['upd-com-arq'];
                $this->tblsistema_operativo_sis_ope_id           = $_POST['upd-com-sis-ope'];
                $this->com_edicion_sistema_operativo             = $_POST['upd-com-edi-sis-ope'];
                $this->com_nombre_disco_duro                     = $_POST['upd-com-nom-dis-dur'];
                $this->com_capacidad_disco_duro                  = $_POST['upd-com-cap-dis-dur'];
                $this->com_office_esta_instalado                 = $_POST['upd-com-off-ins'];
                $this->com_office_esta_activado                  = $_POST['upd-com-off-act'];
                $this->com_licencia_activacion_office            = $_POST['upd-com-lic-off'];
                $this->com_sistema_operativo_esta_activado       = $_POST['upd-com-sis-act'];
                $this->com_licencia_activacion_sistema_operativo = $_POST['upd-com-lin-act-sis-ope'];
                $this->tbloficina_ofi_id                         = $_POST['upd-com-ubi'];
                $this->com_observacion                           = $_POST['upd-com-obs'];
                $this->com_estado                                = $_POST['upd-com-est'];
                $this->com_fecha_registro                        = $_POST['upd-com-fec-reg'];
                // En una variable almaceno el sql con los datos que capturamos
                $sql = "UPDATE tblcomputador SET com_activo_fijo = '$this->com_activo_fijo', com_referencia = '$this->com_referencia', com_serial = '$this->com_serial', com_modelo = '$this->com_modelo', tblmarca_mar_id = $this->tblmarca_mar_id, tbltipo_computador_tip_com_id = $this->tbltipo_computador_tip_com_id, com_nombre_equipo = '$this->com_nombre_equipo', com_nombre_usuario = '$this->com_nombre_usuario', com_procesador = '$this->com_procesador', com_ghz_procesador = '$this->com_ghz_procesador', com_memoria_ram = '$this->com_memoria_ram', com_arquitectura = '$this->com_arquitectura', tblsistema_operativo_sis_ope_id = $this->tblsistema_operativo_sis_ope_id, com_edicion_sistema_operativo = '$this->com_edicion_sistema_operativo', com_nombre_disco_duro = '$this->com_nombre_disco_duro', com_capacidad_disco_duro = '$this->com_capacidad_disco_duro', com_office_esta_instalado = '$this->com_office_esta_instalado',  com_office_esta_activado = '$this->com_office_esta_activado', com_licencia_activacion_office = '$this->com_licencia_activacion_office',  com_sistema_operativo_esta_activado = '$this->com_sistema_operativo_esta_activado', com_licencia_activacion_sistema_operativo = '$this->com_licencia_activacion_sistema_operativo', tbloficina_ofi_id = $this->tbloficina_ofi_id, com_observacion = '$this->com_observacion', com_estado = '$this->com_estado', com_fecha_registro = '$this->com_fecha_registro' WHERE com_id = $this->com_id";
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