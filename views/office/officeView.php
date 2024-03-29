<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6"></div>
                <!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item active">Oficina</li>
                        <li class="breadcrumb-item"><a href="inicio" title="Página Principal">Inicio</a></li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
            <div class="container mt-4" id="load">
                <div class="row">
                    <div class="col-lg-12">
                        <!-- Inicio Tabla -->
                        <div>        
                            <table id="main-table" class="table table-striped table-bordered table-hover mt-4 table-style" cellspacing="0" width="100%">
                                <!-- Inicio Encabezado Tabla -->
                                <thead id="center-table" class="bg-primary text-white sticky">
                                    <tr>
                                        <th>ID</th>
                                        <th>Oficina</th>
                                        <th>Fecha de Registro</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <!-- Fin Encabezado Tabla -->
                                <!-- Inicio Cuerpo de la Tabla -->
                                <tbody>
                                    <?php while($row = mysqli_fetch_object($query)) {
                                        $oficina_id             = $row->ofi_id;
                                        $oficina_descripcion    = $row->ofi_descripcion;
                                        $oficina_fecha_registro = $row->ofi_fecha_registro;
                                    ?>
                                    <tr>
                                        <td><?php echo $oficina_id; ?></td>
                                        <td><?php echo $oficina_descripcion; ?></td>
                                        <td><?php echo $oficina_fecha_registro; ?></td>
                                        <td> 
                                            <!-- Boton Actualizar Oficina -->
                                            <a type="button" onclick="updateOffice(
                                                ('<?php echo $oficina_id; ?>'),
                                                ('<?php echo $oficina_descripcion; ?>'))" class="btn btn-warning text-white btn-warning-animation" title="Actualizar Oficina" data-toggle="modal" data-target="#modal-update-office"><i class="fas fa-pencil-alt"></i>
                                            </a> 
                                            &nbsp;
                                            <!-- Boton Eliminar Oficina -->
                                            <a type="button" onclick="deleteOffice(
                                                ('<?php echo $oficina_id; ?>'),
                                                ('<?php echo $oficina_descripcion; ?>'))" class="btn btn-danger text-white btn-danger-animation" title="Eliminar Oficina" data-toggle="modal" data-target="#modal-delete-office"><i class="fas fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <?php } ?>
                                </tbody>
                                <!-- Fin Cuerpo Tabla -->
                                <!-- Inicio Footer Tabla -->
                                <tr>
                                    <td colspan ="4"> 
                                        <!-- Boton Registrar Oficina -->
                                        <a type="button" class="btn btn-info text-white btn-info-animation insert-button" title="Registrar Oficina" data-toggle="modal" data-target="#modal-insert-office"><i class="fas fa-plus"></i> Registrar Oficina</a>
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

<!-- Inicio Modal Registrar Oficina -->
<div class="modal fade" id="modal-insert-office" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-s">
        <div class="modal-content">
            <div class="modal-header bg-info text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">REGISTRAR NUEVA OFICINA</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-insert-office">
                    <div class="form-group row center-content">
                        <div class="col-md-10 mt-3">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Oficina:</label>
                            <input type="text" name="ins-ofi-nom" id="ins-ofi-nom" class="form-control" maxlength="60" placeholder="Nombre de la oficina">
                        </div>
                    </div>
                    <div class="form-group row mt-5">
                        <div class="col-md-12" draggable="true">
                            <p class="text-dark font-weight-bold">(<b class="text-danger">*</b>) Campo obligatorio.</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="insertOfficeAjax();" class="btn btn-info text-white shut-down-modal" data-dismiss="modal">Registrar</button>
                        <button type="button" class="btn btn-secondary" onclick="cleanModal();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Registrar Oficina -->

<!-- Inicio Modal Actualizar Oficina -->
<div class="modal fade" id="modal-update-office" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-s">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <!-- Encabezado -->
                <h5 class="modal-title text-white" id="staticBackdropLabel">ACTUALIZAR OFICINA</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-update-office">
                    <div class="form-group row">
                        <div class="col-md-12 mt-1"></div>
                    </div>
                    <div class="form-group row center-content">
                        <div class="col-md-12">
                            <input type="number" name="upd-ofi-id" id="upd-ofi-id" class="form-control upd-ofi-id" hidden>
                        </div>
                        <div class="col-md-10">
                            <label draggable="true" class="form-label">Oficina:</label>
                            <input type="text" name="upd-ofi-nom" id="upd-ofi-nom" class="form-control upd-ofi-nom" maxlength="60" placeholder="Nombre de la oficina">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-3"></div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="updateOfficeAjax();" class="btn btn-warning text-white shut-down-modal" data-dismiss="modal">Actualizar</button>
                        <button type="button" class="btn btn-secondary" onclick="cleanModal();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Actualizar Oficina -->

<!-- Inicio Modal Eliminar Oficina -->
<div class="modal fade" id="modal-delete-office" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-danger  text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel" draggable="true">ELIMINAR OFICINA</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-delete-office">
                    <div>
                        <div>
                            <input type="number" class="form-control del-ofi-id" name="del-ofi-id"  id="del-ofi-id" hidden>
                        </div>
                        <div class="center-text" draggable="true">
                            <p class="font-weight-bold">¿Seguro que quieres eliminar la oficina "<b class="del-ofi-nom"></b>"?
                            </p>
                        </div>
                        <div class="center-text">
                            <p class="font-italic">¡No podrás revertir esto!</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="deleteOfficeAjax();" class="btn btn-danger text-white" data-dismiss="modal">Eliminar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div> 
            <!-- Fin Formulario -->
        </div>
    </div>
</div>
<!-- Inicio Modal Eliminar Oficina -->