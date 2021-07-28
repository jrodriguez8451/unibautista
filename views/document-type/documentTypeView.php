<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Tipos de Documentos</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="rol">Unibautista</a></li>
                        <li class="breadcrumb-item active">Tipos de Documentos</li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
            <div class="container mt-3" id="load">
                <div class="row">
                    <div class="col-lg-12">
                        <!-- Inicio Tabla -->
                        <div>        
                            <table id="main-table" class="table table-striped table-bordered table-hover mt-4 table-style" cellspacing="0" width="100%">
                                <!-- Inicio Encabezado Tabla -->
                                <thead id="center-table" class="bg-primary text-white">
                                    <tr>
                                        <th>ID</th>
                                        <th>Tipo de Documento</th>
                                        <th>Fecha de Registro</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <!-- Fin Encabezado Tabla -->
                                <!-- Inicio Cuerpo de la Tabla -->
                                <tbody>
                                    <?php while($row = mysqli_fetch_object($query)) {
                                        $tipo_documento_id             = $row->tip_doc_id ;
                                        $tipo_documento_descripcion    = $row->tip_doc_descripcion;
                                        $tipo_documento_fecha_registro = $row->tipo_doc_fecha_registro;
                                    ?>
                                    <tr>
                                        <td><?php echo $tipo_documento_id; ?></td>
                                        <td><?php echo $tipo_documento_descripcion; ?></td>
                                        <td><?php echo $tipo_documento_fecha_registro; ?></td>
                                        <td> 
                                            <!-- Boton Actualizar Tipo de Documento -->
                                            <a type="button" onclick="updateDocumentType(
                                                ('<?php echo $tipo_documento_id; ?>'),
                                                ('<?php echo $tipo_documento_descripcion; ?>'),
                                                ('<?php echo $tipo_documento_fecha_registro; ?>'))" class="btn btn-warning text-white btn-warning-animation" title="Actualizar Tipo de Documento" data-toggle="modal" data-target="#modal-update-document-type"><i class="fas fa-pencil-alt"></i>
                                            </a> 
                                            &nbsp;
                                            <!-- Boton Eliminar Tipo de Documento -->
                                            <a type="button" onclick="deleteDocumentType(
                                                ('<?php echo $tipo_documento_id; ?>'),
                                                ('<?php echo $tipo_documento_descripcion; ?>'))" class="btn btn-danger text-white btn-danger-animation" title="Eliminar Tipo de Documento" data-toggle="modal" data-target="#modal-delete-document-type"><i class="fas fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <?php } ?>
                                </tbody>
                                <!-- Fin Cuerpo Tabla -->
                                <!-- Inicio Footer Tabla -->
                                <tr>
                                    <td colspan = "4"> 
                                        <!-- Boton Crear Rol -->
                                        <a type="button" class="btn btn-info text-white btn-info-animation insert-button" title="Crear Nuevo Tipo de Documento" data-toggle="modal" data-target="#modal-insert-document-type">Crear Nuevo Tipo de Documento</a>
                                    </td>
                                </tr>
                                <!-- Fin Footer Tabla -->
                            </table>
                        </div>
                        <!-- Fin Tabla -->
                    </div>
                </div>
            </div>
        </div><!-- /.container-fluid -->
    </div>
</div> 
<!-- End Content Wrapper. Contains page content -->

<!-- Inicio Modal Insertar Tipo de Documento -->
<div class="modal fade" id="modal-insert-document-type" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-info text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">CREAR NUEVO TIPO DE DOCUMENTO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-insert-document-type">
                    <div class="form-group row">
                        <div class="col-md-6">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Tipo de Documento:</label>
                            <input type="text" name="ins-doc-typ-nom" id="ins-doc-typ-nom" class="form-control" maxlength="40" placeholder="Nombre del tipo de documento">
                        </div>
                        <div class="col-md-6">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Fecha de Registro:</label>
                            <input type="date" name="ins-doc-typ-fec" id="ins-doc-typ-fec" class="form-control">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12" draggable="true">
                            <p class="text-dark font-weight-bold">(<b class="text-danger">*</b>) Campos obligatorios</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="insertDocumentTypeAjax();" class="btn btn-info text-white shut-down-modal" data-dismiss="modal">Guardar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Insertar Tipo de Documento -->

<!-- Inicio Modal Editar Tipo de Documento -->
<div class="modal fade" id="modal-update-document-type" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <!-- Encabezado -->
                <h5 class="modal-title text-white" id="staticBackdropLabel">ACTUALIZAR TIPO DE DOCUMENTO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-update-document-type">
                    <div class="form-group row">
                        <div class="col-md-12">
                            <input type="number" name="upd-doc-typ-id" id="upd-doc-typ-id" class="form-control upd-doc-typ-id" hidden>
                        </div>
                        <div class="col-md-6">
                            <label draggable="true" class="form-label">Tipo de Documento:</label>
                            <input type="text" name="upd-doc-typ-nom" id="upd-doc-typ-nom" class="form-control upd-doc-typ-nom" maxlength="40" placeholder="Nombre del tipo de documento">
                        </div>
                        <div class="col-md-6">
                            <label draggable="true" class="form-label">Fecha de Registro:</label>
                            <input  type="date" name="upd-doc-typ-fec" id="upd-doc-typ-fec" class="form-control upd-doc-typ-fec">
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="updateDocumentTypeAjax();" class="btn btn-warning text-white shut-down-modal" data-dismiss="modal">Actualizar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Editar Tipo de Documento -->

<!-- Inicio Modal Eliminar Tipo de Documento -->
<div class="modal fade" id="modal-delete-document-type" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-danger  text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel" draggable="true">ELIMINAR TIPO DE DOCUMENTO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-delete-document-type">
                    <div>
                        <div>
                            <input type="number" class="form-control del-doc-typ-id" name="del-doc-typ-id"  id="del-doc-typ-id" hidden>
                        </div>
                        <div class="center-content" draggable="true">
                            <p class="font-weight-bold">¿Seguro que quieres eliminar el tipo de documento "<b class="del-doc-typ-des"></b>"?
                            </p>
                        </div>
                        <div class="center-content">
                            <p class="font-italic">¡No podrás revertir esto!</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="deleteDocumentTypeAjax();" class="btn btn-danger text-white" data-dismiss="modal">Eliminar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div> 
            <!-- Fin Formulario -->
        </div>
    </div>
</div>
<!-- Inicio Modal Eliminar Tipo de Documento -->