<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Caja de Compensación</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="inicio">Unibautista</a></li>
                        <li class="breadcrumb-item active">Caja de Compensación</li>
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
                                        $caj_com_id                   = $row->caj_com_id ;
                                        $caj_com_nit                  = $row->caj_com_nit;
                                        $caj_com_razon_social         = $row->caj_com_razon_social;
                                        $caj_com_correo               = $row->caj_com_correo;
                                        $caj_com_direccion            = $row->caj_com_direccion;
                                        $caj_com_telefono             = $row->caj_com_telefono;
                                        $tblestado_general_est_gen_id = $row->tblestado_general_est_gen_id ;
                                        $caj_com_estado_descripcion   = $row->est_gen_descripcion;
                                        $caj_com_fecha_registro       = $row->caj_com_fecha_registro;
                                    ?>
                                    <tr>
                                        <td><?php echo $caj_com_id; ?></td>
                                        <td><?php echo $caj_com_nit; ?></td>
                                        <td><?php echo $caj_com_razon_social; ?></td>
                                        <td><?php echo $caj_com_fecha_registro; ?></td>
                                        <td> 
                                            <!-- Boton Detalle Caja de Compensación -->
                                            <a type="button" onclick="detailCompensationBox(
                                                ('<?php echo $caj_com_id; ?>'),
                                                ('<?php echo $caj_com_nit; ?>'),
                                                ('<?php echo $caj_com_razon_social; ?>'),
                                                ('<?php echo $caj_com_correo; ?>'),
                                                ('<?php echo $caj_com_direccion; ?>'),
                                                ('<?php echo $caj_com_telefono; ?>'),
                                                ('<?php echo $caj_com_estado_descripcion; ?>'),
                                                ('<?php echo $caj_com_fecha_registro; ?>'))" class="btn btn-primary text-white btn-primary-animation" title="Información de la Caja de Compensación" data-toggle="modal" data-target="#modal-detail-compensation-box"><i class="fas fa-eye"></i></a>
                                            &nbsp;
                                            <!-- Boton Actualizar Caja de Compensación -->
                                            <a type="button" onclick="updateCompensationBox(
                                                ('<?php echo $caj_com_id; ?>'),
                                                ('<?php echo $caj_com_nit; ?>'),
                                                ('<?php echo $caj_com_razon_social; ?>'),
                                                ('<?php echo $caj_com_correo; ?>'),
                                                ('<?php echo $caj_com_direccion; ?>'),
                                                ('<?php echo $caj_com_telefono; ?>'),
                                                ('<?php echo $tblestado_general_est_gen_id; ?>'),
                                                ('<?php echo $caj_com_fecha_registro; ?>'))" class="btn btn-warning text-white btn-warning-animation" title="Actualizar datos de la Caja de Compensación" data-toggle="modal" data-target="#modal-update-compensation-box"><i class="fas fa-pencil-alt"></i>
                                            </a> 
                                            &nbsp;
                                            <!-- Boton Eliminar Caja de Compensación -->
                                            <a type="button" onclick="deleteCompensationBox(
                                                ('<?php echo $caj_com_id; ?>'),
                                                ('<?php echo $caj_com_razon_social; ?>'))" class="btn btn-danger text-white btn-danger-animation" title="Eliminar Caja de Compensación" data-toggle="modal" data-target="#modal-delete-compensation-box"><i class="fas fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <?php } ?>
                                </tbody>
                                <!-- Fin Cuerpo Tabla -->
                                <!-- Inicio Footer Tabla -->
                                <tr>
                                    <td colspan ="6"> 
                                        <!-- Boton Registrar Caja de Compensación -->
                                        <a type="button" class="btn btn-info text-white btn-info-animation insert-button" title="Registrar Caja de Compensación" data-toggle="modal" data-target="#modal-insert-compensation-box"><i class="fas fa-plus"></i> Registrar Caja de Compensación</a>
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

<!-- Inicio Modal Registrar Caja de Compensación -->
<div class="modal fade" id="modal-insert-compensation-box" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-info text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">REGISTRAR CAJA DE COMPENSACIÓN</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-insert-compensation-box">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> NIT:</label>
                            <input type="text" name="ins-caj-com-nit" id="ins-caj-com-nit" class="form-control" maxlength="11" placeholder="NIT de la Caja de Compensación">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Razón Social:</label>
                            <input type="text" name="ins-caj-com-nom" id="ins-caj-com-nom" class="form-control" maxlength="69" placeholder="Nombre de la Caja de Compensación">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Correo:</label>
                            <input type="text" name="ins-caj-com-cor" id="ins-caj-com-cor" class="form-control" maxlength="45" placeholder="Correo electrónico de la Caja de Compensación">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Dirección:</label>
                            <input type="text" name="ins-caj-com-dir" id="ins-caj-com-dir" class="form-control" maxlength="60" placeholder="Dirección de la Caja de Compensación">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Teléfono:</label>
                            <input type="text" name="ins-caj-com-tel" id="ins-caj-com-tel" class="form-control" maxlength="7" placeholder="Teléfono de la Caja de Compensación">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-4" draggable="true">
                            <p class="text-dark font-weight-bold">(<b class="text-danger">*</b>) Campos obligatorios</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" id="insert-eps" onclick="insertCompensationBoxAjax();" class="btn btn-info text-white shut-down-modal" data-dismiss="modal">Registrar</button>
                        <button type="button" class="btn btn-secondary" onclick="cleanModal();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Registrar Caja de Compensación -->

<!-- Inicio Modal Actualizar Caja de Compensación -->
<div class="modal fade" id="modal-update-compensation-box" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <!-- Encabezado -->
                <h5 class="modal-title text-white" id="staticBackdropLabel">ACTUALIZAR DATOS DE LA CAJA DE COMPENSACIÓN</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-update-compensation-box">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <input type="text" name="upd-caj-com-id" id="upd-caj-com-id" class="form-control upd-caj-com-id" hidden>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">NIT:</label>
                            <input type="text" name="upd-caj-com-nit" id="upd-caj-com-nit" class="form-control upd-caj-com-nit" maxlength="11" placeholder="NIT de la Caja de Compensación">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Razón Social:</label>
                            <input type="text" name="upd-caj-com-nom" id="upd-caj-com-nom" class="form-control upd-caj-com-nom" maxlength="69" placeholder="Nombre de la Caja de Compensación">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Correo:</label>
                            <input type="text" name="upd-caj-com-cor" id="upd-caj-com-cor" class="form-control upd-caj-com-cor" maxlength="45" placeholder="Correo electrónico de la Caja de Compensación">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Dirección:</label>
                            <input type="text" name="upd-caj-com-dir" id="upd-caj-com-dir" class="form-control upd-caj-com-dir" maxlength="60" placeholder="Dirección de la Caja de Compensación">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Teléfono:</label>
                            <input type="text" name="upd-caj-com-tel" id="upd-caj-com-tel" class="form-control upd-caj-com-tel" maxlength="7" placeholder="Teléfono de la Caja de Compensación">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-3"></div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="updateCompensationBoxAjax();" class="btn btn-warning text-white shut-down-modal" data-dismiss="modal">Actualizar</button>
                        <button type="button" class="btn btn-secondary" onclick="restartSelect();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Actualizar Caja de Compensación -->

<!-- Inicio Modal Detalle Caja de Compensación -->
<div class="modal fade" id="modal-detail-compensation-box" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-primary text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">INFORMACIÓN DE LA CAJA DE COMPENSACIÓN</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-detail-user">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">ID:</label>
                            <input type="text" name="det-caj-com-id" id="det-caj-com-id" class="form-control det-caj-com-id" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">NIT:</label>
                            <input type="text" name="det-caj-com-nit" id="det-caj-com-nit" class="form-control det-caj-com-nit" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Razón Social:</label>
                            <input type="text" name="det-caj-com-nom" id="det-caj-com-nom" class="form-control det-caj-com-nom" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Correo:</label>
                            <input type="text" name="det-caj-com-cor" id="det-caj-com-cor" class="form-control det-caj-com-cor" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Dirección:</label>
                            <input type="text" name="det-caj-com-dir" id="det-caj-com-dir" class="form-control det-caj-com-dir" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Teléfono:</label>
                            <input type="text" name="det-caj-com-tel" id="det-caj-com-tel" class="form-control det-caj-com-tel" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Estado:</label>
                            <input type="text" name="det-caj-com-est" id="det-caj-com-est" class="form-control det-caj-com-est" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha de Registro:</label>
                            <input type="date" name="det-caj-com-fec-reg" id="det-caj-com-fec-reg" class="form-control det-caj-com-fec-reg" readonly>
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
<!-- Final Modal Detalle Caja de Compensación -->


<!-- Inicio Modal Eliminar Caja de Compensación -->
<div class="modal fade" id="modal-delete-compensation-box" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-danger  text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel" draggable="true">ELIMINAR CAJA DE COMPENSACIÓN</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-delete-compensation-box">
                    <div>
                        <div>
                            <input type="number" class="form-control del-caj-com-id" name="del-caj-com-id"  id="del-caj-com-id" hidden>
                        </div>
                        <div class="center-text" draggable="true">
                            <p class="font-weight-bold">¿Seguro que quieres eliminar la Caja de Compensación "<b class="del-caj-com-nom"></b>"?
                            </p>
                        </div>
                        <div class="center-text">
                            <p class="font-italic">¡No podrás revertir esto!</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="deleteCompensationBoxAjax();" class="btn btn-danger text-white" data-dismiss="modal">Eliminar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div> 
            <!-- Fin Formulario -->
        </div>
    </div>
</div>
<!-- Inicio Modal Eliminar Caja de Compensación -->