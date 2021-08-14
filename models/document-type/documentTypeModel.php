<?php
    //Un OBJETO (usuario en este caso) se le conoce en programacion como una CLASE
    //Esta clase esta herendando otra que es la que continene la conexion a la base de datos
    class DocumentType extends Connection {
        /* Tipos de Variables o Funciones y Quien las puede usar:
        Private = solo tú
        Protected = tú y tus descendientes (herencia)
        Public = cualquiera.*/

        // Atributos:
        private $tipo_documento_id;
        private $tipo_documento_descripcion;
        
        //METODOS O FUNCIONES DE LA CLASE: 

        //Las funciones o metodos reciben caracteristicas o parametros

        //Un constructor permite inicializar las propiedades de un objeto al crear el objeto. 
        public function __construct() {
            $this->SetDataConnection();
            $this->establishConnection();
        }

        // Funcion para listar los Tipo de Documento
        public function queryDocumentType(){
            $sql = "SELECT * FROM tbltipo_documento 
            INNER JOIN tblestado_general
            ON tblestado_general.est_gen_id = tbltipo_documento.tblestado_general_est_gen_id 
            WHERE tblestado_general_est_gen_id = 1 ORDER BY tip_doc_id ASC"; 
            //mysqli_query = Realiza una consulta a la base de datos
            $result = mysqli_query($this->conection,$sql);
            if ($result) {
                return $result;
            }
        }

        //Funcion para Insertar un Tipo de Documento
        public function insertDocumentType(){
            if (isset($_POST['insert_document_type'])){
                $this->tipo_documento_descripcion    = $_POST['ins-doc-typ-nom'];
                $this->estado                        = 1;
                $document_type = "SELECT tip_doc_descripcion FROM tbltipo_documento WHERE tip_doc_descripcion = '$this->tipo_documento_descripcion'";
                //mysqli_query = Realiza una consulta a la base de datos
                $result_document_type = mysqli_query($this->conection,$document_type);
                if(mysqli_num_rows($result_document_type)>0){
                    echo "<script>alert('¡El registro ya existe en la base de datos!')</script>";
                }else{
                    $sql = "INSERT INTO tbltipo_documento(tip_doc_descripcion,tblestado_general_est_gen_id,tip_doc_fecha_registro) VALUES ('$this->tipo_documento_descripcion',$this->estado,NOW())";
                    //mysqli_query = Realiza una consulta a la base de datos
                    $result = mysqli_query($this->conection,$sql);
                    if ($result){
                        return $result;
                    }
                }
            }
        }

        //Funcion para Eliminar Tipo de Documento
        public function deleteDocumentType(){
            if (isset($_POST['delete_document_type'])) {
                $this->tipo_documento_id = $_POST['del-doc-typ-id'];
                $sql = "UPDATE tbltipo_documento SET tblestado_general_est_gen_id = 2 WHERE tip_doc_id = $this->tipo_documento_id";
                //mysqli_query = Realiza una consulta a la base de datos
                $result = mysqli_query($this->conection,$sql);
                if($result){
                    return $result;
                }
            }
        }

        //Funcion para Actualizar Tipo de Documento
        public function updateDocumentType(){
            //Si me llega el parametro actualizar_usuario entonces ejecute el codigo
            if(isset($_POST['update_document_type'])){
                //Por POST me estan llegando varios datos, entonces que especificarle a la funcion que esos datos son los mismos que las variables privadas y hago referencia a los name que capturé del form
                $this->tipo_documento_id             = $_POST['upd-doc-typ-id'];
                $this->tipo_documento_descripcion    = $_POST['upd-doc-typ-nom'];
                // En una variable almaceno el sql con los datos que capturamos
                $sql = "UPDATE tbltipo_documento SET tip_doc_descripcion = '$this->tipo_documento_descripcion' WHERE tip_doc_id = $this->tipo_documento_id";
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