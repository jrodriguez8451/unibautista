<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Estado</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="inicio">Unibautista</a></li>
                        <li class="breadcrumb-item active">Estado</li>
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
                                        <th>Estado</th>
                                        <th>Fecha de Registro</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <!-- Fin Encabezado Tabla -->
                                <!-- Inicio Cuerpo de la Tabla -->
                                <tbody>
                                    <?php while($row = mysqli_fetch_object($query)) {
                                        $estado_id             = $row->est_id;
                                        $estado_descripcion    = $row->est_descripcion;
                                        $estado_fecha_registro = $row->est_fecha_registro;
                                    ?>
                                    <tr>
                                        <td><?php echo $estado_id; ?></td>
                                        <td><?php echo $estado_descripcion; ?></td>
                                        <td><?php echo $estado_fecha_registro; ?></td>
                                        <td> 
                                            <!-- Boton Actualizar Estado -->
                                            <a type="button" onclick="updateStatus(
                                                ('<?php echo $estado_id; ?>'),
                                                ('<?php echo $estado_descripcion; ?>'),
                                                ('<?php echo $estado_fecha_registro; ?>'))" class="btn btn-warning text-white btn-warning-animation" title="Actualizar Estado" data-toggle="modal" data-target="#modal-update-status"><i class="fas fa-pencil-alt"></i>
                                            </a> 
                                            &nbsp;
                                            <!-- Boton Eliminar Estado -->
                                            <a type="button" onclick="deleteStatus(
                                                ('<?php echo $estado_id; ?>'),
                                                ('<?php echo $estado_descripcion; ?>'))" class="btn btn-danger text-white btn-danger-animation" title="Eliminar Estado" data-toggle="modal" data-target="#modal-delete-status"><i class="fas fa-trash"></i>
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
                                        <a type="button" class="btn btn-info text-white btn-info-animation insert-button" title="Crear Nuevo Estado" data-toggle="modal" data-target="#modal-insert-status"><i class="fas fa-star nav-icon"></i> Crear Estado</a>
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

<!-- Inicio Modal Insertar Estado -->
<div class="modal fade" id="modal-insert-status" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-info text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">CREAR NUEVO ESTADO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-insert-status">
                    <div class="form-group row">
                        <div class="col-md-6">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Estado:</label>
                            <input type="text" name="ins-est-nom" id="ins-est-nom" class="form-control" maxlength="60" placeholder="Nombre del estado">
                        </div>
                        <div class="col-md-6">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Fecha de Registro:</label>
                            <input type="date" name="ins-est-fec" id="ins-est-fec" class="form-control">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12" draggable="true">
                            <p class="text-dark font-weight-bold">(<b class="text-danger">*</b>) Campos obligatorios</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="insertStatusAjax();" class="btn btn-info text-white shut-down-modal" data-dismiss="modal">Guardar</button>
                        <button type="button" class="btn btn-secondary" onclick="cleanModal();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Insertar Estado -->

<!-- Inicio Modal Editar Estado -->
<div class="modal fade" id="modal-update-status" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <!-- Encabezado -->
                <h5 class="modal-title text-white" id="staticBackdropLabel">ACTUALIZAR ESTADO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-update-status">
                    <div class="form-group row">
                        <div class="col-md-12">
                            <input type="number" name="upd-est-id" id="upd-est-id" class="form-control upd-est-id" hidden>
                        </div>
                        <div class="col-md-6">
                            <label draggable="true" class="form-label">Estado:</label>
                            <input type="text" name="upd-est-nom" id="upd-est-nom" class="form-control upd-est-nom" maxlength="60" placeholder="Nombre del estado">
                        </div>
                        <div class="col-md-6">
                            <label draggable="true" class="form-label">Fecha de Registro:</label>
                            <input  type="date" name="upd-est-fec" id="upd-est-fec" class="form-control upd-est-fec">
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="updateStatusAjax();" class="btn btn-warning text-white shut-down-modal" data-dismiss="modal">Actualizar</button>
                        <button type="button" class="btn btn-secondary" onclick="cleanModal();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Editar Estado -->

<!-- Inicio Modal Eliminar Estado -->
<div class="modal fade" id="modal-delete-status" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-danger  text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel" draggable="true">ELIMINAR ESTADO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-delete-status">
                    <div>
                        <div>
                            <input type="number" class="form-control del-est-id" name="del-est-id"  id="del-est-id" hidden>
                        </div>
                        <div class="center-content" draggable="true">
                            <p class="font-weight-bold">¿Seguro que quieres eliminar el estado "<b class="del-est-des"></b>"?
                            </p>
                        </div>
                        <div class="center-content">
                            <p class="font-italic">¡No podrás revertir esto!</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="deleteStatusAjax();" class="btn btn-danger text-white" data-dismiss="modal">Eliminar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div> 
            <!-- Fin Formulario -->
        </div>
    </div>
</div>
<!-- Inicio Modal Eliminar Estado -->