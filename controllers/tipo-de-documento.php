<?php
    //Conexion a la Base de Datos
    require_once('./config/connection/connection.php');

    //Modelo Tipo de Documento
    require_once('./models/document-type/documentTypeModel.php');

    //Instancia del Modelo Tipo de Documento
    $object = new DocumentType();

    //Invocacion del Metodo Listar Tipos de Documentos
    $query = $object->queryDocumentType();
    
    //Validacion e Invocacion del Metodo Crear Tipo de Documento
    if (isset($_POST['insert_document_type'])) {
        //isset — Determina si una variable está definida y no es null
        $object->insertDocumentType();
    }

    //Validacion e Invocacion del Metodo Actualizar Tipo de Documento
    if (isset($_POST['update_document_type'])){
        $object->updateDocumentType();
    }

    //Validacion e Invocacion del Metodo Eliminar Tipo de Documento
    if (isset($_POST['delete_document_type'])) {
        $object->deleteDocumentType();
    }

    //Vista Tipos de Documentos
    require_once('./views/document-type/documentTypeView.php');
?>