<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">EPS</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="inicio">Unibautista</a></li>
                        <li class="breadcrumb-item active">EPS</li>
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
                                        <th>NIT</th>
                                        <th>Razón Social</th>
                                        <th>Fecha de Registro</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <!-- Fin Encabezado Tabla -->
                                <!-- Inicio Cuerpo de la Tabla -->
                                <tbody>
                                    <?php while($row = mysqli_fetch_object($query)) {
                                        $eps_id                       = $row->eps_id;
                                        $eps_nit                      = $row->eps_nit;
                                        $eps_razon_social             = $row->eps_razon_social;
                                        $eps_correo                   = $row->eps_correo;
                                        $eps_direccion                = $row->eps_direccion;
                                        $eps_telefono                 = $row->eps_telefono;
                                        $tblestado_general_est_gen_id = $row->tblestado_general_est_gen_id;
                                        $eps_estado_descripcion       = $row->est_gen_descripcion;
                                        $eps_fecha_registro           = $row->eps_fecha_registro;
                                    ?>
                                    <tr>
                                        <td><?php echo $eps_id; ?></td>
                                        <td><?php echo $eps_nit; ?></td>
                                        <td><?php echo $eps_razon_social; ?></td>
                                        <td><?php echo $eps_fecha_registro; ?></td>
                                        <td> 
                                            <!-- Boton Detalle EPS -->
                                            <a type="button" onclick="detailEPS(
                                                ('<?php echo $eps_id; ?>'),
                                                ('<?php echo $eps_nit; ?>'),
                                                ('<?php echo $eps_razon_social; ?>'),
                                                ('<?php echo $eps_correo; ?>'),
                                                ('<?php echo $eps_direccion; ?>'),
                                                ('<?php echo $eps_telefono; ?>'),
                                                ('<?php echo $eps_estado_descripcion; ?>'),
                                                ('<?php echo $eps_fecha_registro; ?>'))" class="btn btn-primary text-white btn-primary-animation" title="Información de la EPS" data-toggle="modal" data-target="#modal-detail-eps"><i class="fas fa-eye"></i></a>
                                            &nbsp;
                                            <!-- Boton Actualizar EPS -->
                                            <a type="button" onclick="updateEPS(
                                                ('<?php echo $eps_id; ?>'),
                                                ('<?php echo $eps_nit; ?>'),
                                                ('<?php echo $eps_razon_social; ?>'),
                                                ('<?php echo $eps_correo; ?>'),
                                                ('<?php echo $eps_direccion; ?>'),
                                                ('<?php echo $eps_telefono; ?>'),
                                                ('<?php echo $tblestado_general_est_gen_id; ?>'),
                                                ('<?php echo $eps_fecha_registro; ?>'))" class="btn btn-warning text-white btn-warning-animation" title="Actualizar datos de la EPS" data-toggle="modal" data-target="#modal-update-eps"><i class="fas fa-pencil-alt"></i>
                                            </a> 
                                            &nbsp;
                                            <!-- Boton Eliminar EPS -->
                                            <a type="button" onclick="deleteEPS(
                                                ('<?php echo $eps_id; ?>'),
                                                ('<?php echo $eps_razon_social; ?>'))" class="btn btn-danger text-white btn-danger-animation" title="Eliminar EPS" data-toggle="modal" data-target="#modal-delete-eps"><i class="fas fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <?php } ?>
                                </tbody>
                                <!-- Fin Cuerpo Tabla -->
                                <!-- Inicio Footer Tabla -->
                                <tr>
                                    <td colspan ="6"> 
                                        <!-- Boton Registrar EPS -->
                                        <a type="button" class="btn btn-info text-white btn-info-animation insert-button" title="Registrar EPS" data-toggle="modal" data-target="#modal-insert-eps"><i class="fas fa-plus"></i> Registrar EPS</a>
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

<!-- Inicio Modal Registrar EPS -->
<div class="modal fade" id="modal-insert-eps" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-info text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">REGISTRAR EPS</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-insert-eps">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> NIT:</label>
                            <input type="text" name="ins-eps-nit" id="ins-eps-nit" class="form-control" maxlength="11" placeholder="NIT de la EPS">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Razón Social:</label>
                            <input type="text" name="ins-eps-nom" id="ins-eps-nom" class="form-control" maxlength="69" placeholder="Nombre de la EPS">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Correo:</label>
                            <input type="text" name="ins-eps-cor" id="ins-eps-cor" class="form-control" maxlength="45" placeholder="Correo electrónico de la EPS">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Dirección:</label>
                            <input type="text" name="ins-eps-dir" id="ins-eps-dir" class="form-control" maxlength="60" placeholder="Dirección de la EPS">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Teléfono:</label>
                            <input type="text" name="ins-eps-tel" id="ins-eps-tel" class="form-control" maxlength="7" placeholder="Teléfono de la EPS">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-4" draggable="true">
                            <p class="text-dark font-weight-bold">(<b class="text-danger">*</b>) Campos obligatorios</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="insertEPSAjax();" class="btn btn-info text-white shut-down-modal" data-dismiss="modal">Registrar</button>
                        <button type="button" class="btn btn-secondary" onclick="cleanModal();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Registrar EPS -->

<!-- Inicio Modal Actualizar EPS -->
<div class="modal fade" id="modal-update-eps" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <!-- Encabezado -->
                <h5 class="modal-title text-white" id="staticBackdropLabel">ACTUALIZAR DATOS DE LA EPS</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-update-eps">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <input type="text" name="upd-eps-id" id="upd-eps-id" class="form-control upd-eps-id" hidden>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">NIT:</label>
                            <input type="text" name="upd-eps-nit" id="upd-eps-nit" class="form-control upd-eps-nit" maxlength="11" placeholder="NIT de la EPS">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Razón Social:</label>
                            <input type="text" name="upd-eps-nom" id="upd-eps-nom" class="form-control upd-eps-nom" maxlength="69" placeholder="Nombre de la EPS">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Correo:</label>
                            <input type="text" name="upd-eps-cor" id="upd-eps-cor" class="form-control upd-eps-cor" maxlength="45" placeholder="Correo electrónico de la EPS">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Dirección:</label>
                            <input type="text" name="upd-eps-dir" id="upd-eps-dir" class="form-control upd-eps-dir" maxlength="60" placeholder="Dirección de la EPS">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Teléfono:</label>
                            <input type="text" name="upd-eps-tel" id="upd-eps-tel" class="form-control upd-eps-tel" maxlength="7" placeholder="Teléfono de la EPS">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-3"></div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="updateEPSAjax();" class="btn btn-warning text-white shut-down-modal" data-dismiss="modal">Actualizar</button>
                        <button type="button" class="btn btn-secondary" onclick="restartSelect();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Actualizar EPS -->

<!-- Inicio Modal Detalle EPS -->
<div class="modal fade" id="modal-detail-eps" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-primary text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">INFORMACIÓN DE LA EPS</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-detail-user">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">ID:</label>
                            <input type="text" name="det-eps-id" id="det-eps-id" class="form-control det-eps-id" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">NIT:</label>
                            <input type="text" name="det-eps-nit" id="det-eps-nit" class="form-control det-eps-nit" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Razón Social:</label>
                            <input type="text" name="det-eps-nom" id="det-eps-nom" class="form-control det-eps-nom" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Correo:</label>
                            <input type="text" name="det-eps-cor" id="det-eps-cor" class="form-control det-eps-cor" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Dirección:</label>
                            <input type="text" name="det-eps-dir" id="det-eps-dir" class="form-control det-eps-dir" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Teléfono:</label>
                            <input type="text" name="det-eps-tel" id="det-eps-tel" class="form-control det-eps-tel" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Estado:</label>
                            <input type="text" name="det-eps-est" id="det-eps-est" class="form-control det-eps-est" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha de Registro:</label>
                            <input type="date" name="det-eps-fec-reg" id="det-eps-fec-reg" class="form-control det-eps-fec-reg" readonly>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Detalle EPS -->

<!-- Inicio Modal Eliminar EPS -->
<div class="modal fade" id="modal-delete-eps" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-danger  text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel" draggable="true">ELIMINAR EPS</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-delete-eps">
                    <div>
                        <div>
                            <input type="number" class="form-control del-eps-id" name="del-eps-id"  id="del-eps-id" hidden>
                        </div>
                        <div class="center-text" draggable="true">
                            <p class="font-weight-bold">¿Seguro que quieres eliminar la EPS "<b class="del-eps-nom"></b>"?
                            </p>
                        </div>
                        <div class="center-text">
                            <p class="font-italic">¡No podrás revertir esto!</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="deleteEPSAjax();" class="btn btn-danger text-white" data-dismiss="modal">Eliminar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div> 
            <!-- Fin Formulario -->
        </div>
    </div>
</div>
<!-- Inicio Modal Eliminar EPS -->