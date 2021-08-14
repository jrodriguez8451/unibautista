<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Sistema Operativo</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="inicio">Unibautista</a></li>
                        <li class="breadcrumb-item active">Sistema Operativo</li>
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
                                        <th>Sistema Operativo</th>
                                        <th>Fecha de Registro</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <!-- Fin Encabezado Tabla -->
                                <!-- Inicio Cuerpo de la Tabla -->
                                <tbody>
                                    <?php while($row = mysqli_fetch_object($query)) {
                                        $sistema_operativo_id             = $row->sis_ope_id;
                                        $sistema_operativo_descripcion    = $row->sis_ope_descripcion;
                                        $sistema_operativo_fecha_registro = $row->sis_ope_fecha_registro;
                                    ?>
                                    <tr>
                                        <td><?php echo $sistema_operativo_id; ?></td>
                                        <td><?php echo $sistema_operativo_descripcion; ?></td>
                                        <td><?php echo $sistema_operativo_fecha_registro; ?></td>
                                        <td> 
                                            <!-- Boton Modificar Sistema Operativo -->
                                            <a type="button" onclick="updateOperatingSystem(
                                                ('<?php echo $sistema_operativo_id; ?>'),
                                                ('<?php echo $sistema_operativo_descripcion; ?>'))" class="btn btn-warning text-white btn-warning-animation" title="Modificar Sistema Operativo" data-toggle="modal" data-target="#modal-update-operating-system"><i class="fas fa-pencil-alt"></i>
                                            </a> 
                                            &nbsp;
                                            <!-- Boton Eliminar Sistema Operativo -->
                                            <a type="button" onclick="deleteOperatingSystem(
                                                ('<?php echo $sistema_operativo_id; ?>'),
                                                ('<?php echo $sistema_operativo_descripcion; ?>'))" class="btn btn-danger text-white btn-danger-animation" title="Eliminar Sistema Operativo" data-toggle="modal" data-target="#modal-delete-operating-system"><i class="fas fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <?php } ?>
                                </tbody>
                                <!-- Fin Cuerpo Tabla -->
                                <!-- Inicio Footer Tabla -->
                                <tr>
                                    <td colspan ="4"> 
                                        <!-- Boton Registrar Sistema Operativo -->
                                        <a type="button" class="btn btn-info text-white btn-info-animation insert-button" title="Registrar Sistema Operativo" data-toggle="modal" data-target="#modal-insert-operating-system"><i class="fas fa-plus"></i> Registrar Sistema Operativo</a>
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

<!-- Inicio Modal Registrar Sistema Operativo -->
<div class="modal fade" id="modal-insert-operating-system" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-s">
        <div class="modal-content">
            <div class="modal-header bg-info text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">REGISTRAR NUEVO SISTEMA OPERATIVO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-insert-operating-system">
                    <div class="form-group row center-content">
                        <div class="col-md-10 mt-3">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Sistema Operativo:</label>
                            <input type="text" name="ins-sis-ope-nom" id="ins-sis-ope-nom" class="form-control" maxlength="60" placeholder="Nombre del sistema operativo">
                        </div>
                    </div>
                    <div class="form-group row mt-5">
                        <div class="col-md-12" draggable="true">
                            <p class="text-dark font-weight-bold">(<b class="text-danger">*</b>) Campo obligatorio.</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="insertOperatingSystemAjax();" class="btn btn-info text-white shut-down-modal" data-dismiss="modal">Registrar</button>
                        <button type="button" class="btn btn-secondary" onclick="cleanModal();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Registrar Sistema Operativo -->

<!-- Inicio Modal Modificar Sistema Operativo -->
<div class="modal fade" id="modal-update-operating-system" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-s">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <!-- Encabezado -->
                <h5 class="modal-title text-white" id="staticBackdropLabel">MODIFICAR SISTEMA OPERATIVO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-update-operating-system">
                    <div class="form-group row center-content">
                        <div class="col-md-12">
                            <input type="number" name="upd-sis-ope-id" id="upd-sis-ope-id" class="form-control upd-sis-ope-id" hidden>
                        </div>
                        <div class="col-md-9">
                            <label draggable="true" class="form-label">Sistema Operativo:</label>
                            <input type="text" name="upd-sis-ope-nom" id="upd-sis-ope-nom" class="form-control upd-sis-ope-nom" maxlength="60" placeholder="Nombre del sistema operativo">
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="updateOperatingSystemAjax();" class="btn btn-warning text-white shut-down-modal" data-dismiss="modal">Actualizar</button>
                        <button type="button" class="btn btn-secondary" onclick="cleanModal();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Modificar Sistema Operativo -->

<!-- Inicio Modal Eliminar Sistema Operativo -->
<div class="modal fade" id="modal-delete-operating-system" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-danger  text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel" draggable="true">ELIMINAR SISTEMA OPERATIVO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-delete-operating-system">
                    <div>
                        <div>
                            <input type="number" class="form-control del-sis-ope-id" name="del-sis-ope-id"  id="del-sis-ope-id" hidden>
                        </div>
                        <div class="center-text" draggable="true">
                            <p class="font-weight-bold">¿Seguro que quieres eliminar el sistema operativo "<b class="del-sis-ope-nom"></b>"?
                            </p>
                        </div>
                        <div class="center-text">
                            <p class="font-italic">¡No podrás revertir esto!</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="deleteOperatingSystemAjax();" class="btn btn-danger text-white" data-dismiss="modal">Eliminar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div> 
            <!-- Fin Formulario -->
        </div>
    </div>
</div>
<!-- Inicio Modal Eliminar Sistema Operativo -->