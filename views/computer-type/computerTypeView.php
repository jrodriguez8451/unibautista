<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Tipo de Computador</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="inicio">Unibautista</a></li>
                        <li class="breadcrumb-item active">Tipo de Computador</li>
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
                                        <th>Tipo de Computador</th>
                                        <th>Fecha de Registro</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <!-- Fin Encabezado Tabla -->
                                <!-- Inicio Cuerpo de la Tabla -->
                                <tbody>
                                    <?php while($row = mysqli_fetch_object($query)) {
                                        $tipo_computador_id             = $row->tip_com_id ;
                                        $tipo_computador_descripcion    = $row->tip_com_descripcion;
                                        $tipo_computador_fecha_registro = $row->tip_com_fecha_registro;
                                    ?>
                                    <tr>
                                        <td><?php echo $tipo_computador_id; ?></td>
                                        <td><?php echo $tipo_computador_descripcion; ?></td>
                                        <td><?php echo $tipo_computador_fecha_registro; ?></td>
                                        <td> 
                                            <!-- Boton Actualizar Tipo de Computador -->
                                            <a type="button" onclick="updateComputerType(
                                                ('<?php echo $tipo_computador_id; ?>'),
                                                ('<?php echo $tipo_computador_descripcion; ?>'),
                                                ('<?php echo $tipo_computador_fecha_registro; ?>'))" class="btn btn-warning text-white btn-warning-animation" title="Actualizar Tipo de Computador" data-toggle="modal" data-target="#modal-update-computer-type"><i class="fas fa-pencil-alt"></i>
                                            </a> 
                                            &nbsp;
                                            <!-- Boton Eliminar Tipo de Computador -->
                                            <a type="button" onclick="deleteComputerType(
                                                ('<?php echo $tipo_computador_id; ?>'),
                                                ('<?php echo $tipo_computador_descripcion; ?>'))" class="btn btn-danger text-white btn-danger-animation" title="Eliminar Tipo de Computador" data-toggle="modal" data-target="#modal-delete-computer-type"><i class="fas fa-trash"></i>
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
                                        <a type="button" class="btn btn-info text-white btn-info-animation insert-button" title="Crear Nuevo Tipo de Computador" data-toggle="modal" data-target="#modal-insert-computer-type">Crear Nuevo Tipo de Computador</a>
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

<!-- Inicio Modal Insertar Tipo de Computador -->
<div class="modal fade" id="modal-insert-computer-type" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-info text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">CREAR NUEVO TIPO DE COMPUTADOR</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-insert-computer-type">
                    <div class="form-group row">
                        <div class="col-md-6">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Tipo de Computador:</label>
                            <input type="text" name="ins-com-typ-nom" id="ins-com-typ-nom" class="form-control" maxlength="60" placeholder="Nombre del tipo de computador">
                        </div>
                        <div class="col-md-6">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Fecha de Registro:</label>
                            <input type="date" name="ins-com-typ-fec" id="ins-com-typ-fec" class="form-control">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12" draggable="true">
                            <p class="text-dark font-weight-bold">(<b class="text-danger">*</b>) Campos obligatorios</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="insertComputerTypeAjax();" class="btn btn-info text-white shut-down-modal" data-dismiss="modal">Guardar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Insertar Tipo de Computador -->

<!-- Inicio Modal Editar Tipo de Computador -->
<div class="modal fade" id="modal-update-computer-type" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <!-- Encabezado -->
                <h5 class="modal-title text-white" id="staticBackdropLabel">ACTUALIZAR TIPO DE COMPUTADOR</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-update-computer-type">
                    <div class="form-group row">
                        <div class="col-md-12">
                            <input type="number" name="upd-com-typ-id" id="upd-com-typ-id" class="form-control upd-com-typ-id" hidden>
                        </div>
                        <div class="col-md-6">
                            <label draggable="true" class="form-label">Tipo de Computador:</label>
                            <input type="text" name="upd-com-typ-nom" id="upd-com-typ-nom" class="form-control upd-com-typ-nom" maxlength="60" placeholder="Nombre del tipo de computador">
                        </div>
                        <div class="col-md-6">
                            <label draggable="true" class="form-label">Fecha de Registro:</label>
                            <input  type="date" name="upd-com-typ-fec" id="upd-com-typ-fec" class="form-control upd-com-typ-fec">
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="updateComputerTypeAjax();" class="btn btn-warning text-white shut-down-modal" data-dismiss="modal">Actualizar</button>
                        <button type="button" class="btn btn-secondary" onclick="cleanModal();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Editar Tipo de Computador -->

<!-- Inicio Modal Eliminar Tipo de Computador -->
<div class="modal fade" id="modal-delete-computer-type" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-danger  text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel" draggable="true">ELIMINAR TIPO DE COMPUTADOR</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-delete-computer-type">
                    <div>
                        <div>
                            <input type="number" class="form-control del-com-typ-id" name="del-com-typ-id"  id="del-com-typ-id" hidden>
                        </div>
                        <div class="center-content" draggable="true">
                            <p class="font-weight-bold">¿Seguro que quieres eliminar el tipo de computador "<b class="del-com-typ-des"></b>"?
                            </p>
                        </div>
                        <div class="center-content">
                            <p class="font-italic">¡No podrás revertir esto!</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="deleteComputerTypeAjax();" class="btn btn-danger text-white" data-dismiss="modal">Eliminar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div> 
            <!-- Fin Formulario -->
        </div>
    </div>
</div>
<!-- Inicio Modal Eliminar Tipo de Computador -->