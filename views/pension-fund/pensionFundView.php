<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Fondo de Pensión</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="inicio">Unibautista</a></li>
                        <li class="breadcrumb-item active">Fondo de Pensión</li>
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
                                <thead id="center-table" class="bg-primary text-white">
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
                                        $fon_pen_id                   = $row->fon_pen_id ;
                                        $fon_pen_nit                  = $row->fon_pen_nit;
                                        $fon_pen_razon_social         = $row->fon_pen_razon_social;
                                        $fon_pen_correo               = $row->fon_pen_correo;
                                        $fon_pen_direccion            = $row->fon_pen_direccion;
                                        $fon_pen_telefono             = $row->fon_pen_telefono;
                                        $tblestado_general_est_gen_id = $row->tblestado_general_est_gen_id ;
                                        $fon_pen_estado_descripcion   = $row->est_gen_descripcion;
                                        $fon_pen_fecha_registro       = $row->fon_pen_fecha_registro;
                                    ?>
                                    <tr>
                                        <td><?php echo $fon_pen_id; ?></td>
                                        <td><?php echo $fon_pen_nit; ?></td>
                                        <td><?php echo $fon_pen_razon_social; ?></td>
                                        <td><?php echo $fon_pen_fecha_registro; ?></td>
                                        <td> 
                                            <!-- Boton Detalle Fondo de Pensión -->
                                            <a type="button" onclick="detailPensionFund(
                                                ('<?php echo $fon_pen_id; ?>'),
                                                ('<?php echo $fon_pen_nit; ?>'),
                                                ('<?php echo $fon_pen_razon_social; ?>'),
                                                ('<?php echo $fon_pen_correo; ?>'),
                                                ('<?php echo $fon_pen_direccion; ?>'),
                                                ('<?php echo $fon_pen_telefono; ?>'),
                                                ('<?php echo $fon_pen_estado_descripcion; ?>'),
                                                ('<?php echo $fon_pen_fecha_registro; ?>'))" class="btn btn-primary text-white btn-primary-animation" title="Información del Fondo de Pensión" data-toggle="modal" data-target="#modal-detail-pension-fund"><i class="fas fa-eye"></i></a>
                                            &nbsp;
                                            <!-- Boton Actualizar Fondo de Pensión -->
                                            <a type="button" onclick="updatePensionFund(
                                                ('<?php echo $fon_pen_id; ?>'),
                                                ('<?php echo $fon_pen_nit; ?>'),
                                                ('<?php echo $fon_pen_razon_social; ?>'),
                                                ('<?php echo $fon_pen_correo; ?>'),
                                                ('<?php echo $fon_pen_direccion; ?>'),
                                                ('<?php echo $fon_pen_telefono; ?>'),
                                                ('<?php echo $tblestado_general_est_gen_id; ?>'),
                                                ('<?php echo $fon_pen_fecha_registro; ?>'))" class="btn btn-warning text-white btn-warning-animation" title="Actualizar Datos del Fondo de Pensión" data-toggle="modal" data-target="#modal-update-pension-fund"><i class="fas fa-pencil-alt"></i>
                                            </a> 
                                            &nbsp;
                                            <!-- Boton Eliminar Fondo de Pensión -->
                                            <a type="button" onclick="deletePensionFund(
                                                ('<?php echo $fon_pen_id; ?>'),
                                                ('<?php echo $fon_pen_razon_social; ?>'))" class="btn btn-danger text-white btn-danger-animation" title="Eliminar Fondo de Pensión" data-toggle="modal" data-target="#modal-delete-pension-fund"><i class="fas fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <?php } ?>
                                </tbody>
                                <!-- Fin Cuerpo Tabla -->
                                <!-- Inicio Footer Tabla -->
                                <tr>
                                    <td colspan ="6"> 
                                        <!-- Boton Registrar Fondo de Pensión -->
                                        <a type="button" class="btn btn-info text-white btn-info-animation insert-button" title="Registrar Fondo de Pensión" data-toggle="modal" data-target="#modal-insert-pension-fund"><i class="fas fa-plus"></i> Registrar Fondo de Pensión</a>
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

<!-- Inicio Modal Registrar Fondo de Pensión -->
<div class="modal fade" id="modal-insert-pension-fund" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-info text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">REGISTRAR FONDO DE PENSIÓN</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-insert-pension-fund">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> NIT:</label>
                            <input type="text" name="ins-fon-pen-nit" id="ins-fon-pen-nit" class="form-control" maxlength="11" placeholder="NIT del Fondo de Pensión">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Razón Social:</label>
                            <input type="text" name="ins-fon-pen-nom" id="ins-fon-pen-nom" class="form-control" maxlength="60" placeholder="Nombre del Fondo de Pensión">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Correo:</label>
                            <input type="text" name="ins-fon-pen-cor" id="ins-fon-pen-cor" class="form-control" maxlength="45" placeholder="Correo electrónico del Fondo de Pensión">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Dirección:</label>
                            <input type="text" name="ins-fon-pen-dir" id="ins-fon-pen-dir" class="form-control" maxlength="60" placeholder="Dirección del Fondo de Pensión">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Teléfono:</label>
                            <input type="text" name="ins-fon-pen-tel" id="ins-fon-pen-tel" class="form-control" maxlength="7" placeholder="Teléfono del Fondo de Pensión">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-4" draggable="true">
                            <p class="text-dark font-weight-bold">(<b class="text-danger">*</b>) Campos obligatorios</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" id="insert-eps" onclick="insertPensionFundAjax();" class="btn btn-info text-white shut-down-modal" data-dismiss="modal">Registrar</button>
                        <button type="button" class="btn btn-secondary" onclick="cleanModal();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Registrar Fondo de Pensión -->

<!-- Inicio Modal Actualizar Fondo de Pensión -->
<div class="modal fade" id="modal-update-pension-fund" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <!-- Encabezado -->
                <h5 class="modal-title text-white" id="staticBackdropLabel">ACTUALIZAR DATOS DEL FONDO DE PENSIÓN</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-update-pension-fund">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <input type="text" name="upd-fon-pen-id" id="upd-fon-pen-id" class="form-control upd-fon-pen-id" hidden>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">NIT:</label>
                            <input type="text" name="upd-fon-pen-nit" id="upd-fon-pen-nit" class="form-control upd-fon-pen-nit" maxlength="11" placeholder="NIT del Fondo de Pensión">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Razón Social:</label>
                            <input type="text" name="upd-fon-pen-nom" id="upd-fon-pen-nom" class="form-control upd-fon-pen-nom" maxlength="60" placeholder="Nombre del Fondo de Pensión">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Correo:</label>
                            <input type="text" name="upd-fon-pen-cor" id="upd-fon-pen-cor" class="form-control upd-fon-pen-cor" maxlength="45" placeholder="Correo electrónico del Fondo de Pensión">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Dirección:</label>
                            <input type="text" name="upd-fon-pen-dir" id="upd-fon-pen-dir" class="form-control upd-fon-pen-dir" maxlength="60" placeholder="Dirección del Fondo de Pensión">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Teléfono:</label>
                            <input type="text" name="upd-fon-pen-tel" id="upd-fon-pen-tel" class="form-control upd-fon-pen-tel" maxlength="7" placeholder="Teléfono del Fondo de Pensión">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-3"></div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="updatePensionFundAjax();" class="btn btn-warning text-white shut-down-modal" data-dismiss="modal">Actualizar</button>
                        <button type="button" class="btn btn-secondary" onclick="restartSelect();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Actualizar Fondo de Pensión -->

<!-- Inicio Modal Detalle Fondo de Pensión -->
<div class="modal fade" id="modal-detail-pension-fund" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-primary text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">INFORMACIÓN DEL FONDO DE PENSIÓN</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-detail-user">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">ID:</label>
                            <input type="text" name="det-fon-pen-id" id="det-fon-pen-id" class="form-control det-fon-pen-id" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">NIT:</label>
                            <input type="text" name="det-fon-pen-nit" id="det-fon-pen-nit" class="form-control det-fon-pen-nit" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Razón Social:</label>
                            <input type="text" name="det-fon-pen-nom" id="det-fon-pen-nom" class="form-control det-fon-pen-nom" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Correo:</label>
                            <input type="text" name="det-fon-pen-cor" id="det-fon-pen-cor" class="form-control det-fon-pen-cor" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Dirección:</label>
                            <input type="text" name="det-fon-pen-dir" id="det-fon-pen-dir" class="form-control det-fon-pen-dir" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Telefono:</label>
                            <input type="text" name="det-fon-pen-tel" id="det-fon-pen-tel" class="form-control det-fon-pen-tel" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Estado:</label>
                            <input type="text" name="det-fon-pen-est" id="det-fon-pen-est" class="form-control det-fon-pen-est" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha de Registro:</label>
                            <input type="date" name="det-fon-pen-fec-reg" id="det-fon-pen-fec-reg" class="form-control det-fon-pen-fec-reg" readonly>
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
<!-- Final Modal Detalle Fondo de Pensión -->


<!-- Inicio Modal Eliminar Fondo de Pensión -->
<div class="modal fade" id="modal-delete-pension-fund" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-danger  text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel" draggable="true">ELIMINAR FONDO DE PENSIÓN</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-delete-pension-fund">
                    <div>
                        <div>
                            <input type="number" class="form-control del-fon-pen-id" name="del-fon-pen-id"  id="del-fon-pen-id" hidden>
                        </div>
                        <div class="center-text" draggable="true">
                            <p class="font-weight-bold">¿Seguro que quieres eliminar el Fondo de Pensión "<b class="del-fon-pen-nom"></b>"?
                            </p>
                        </div>
                        <div class="center-text">
                            <p class="font-italic">¡No podrás revertir esto!</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="deletePensionFundAjax();" class="btn btn-danger text-white" data-dismiss="modal">Eliminar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div> 
            <!-- Fin Formulario -->
        </div>
    </div>
</div>
<!-- Inicio Modal Eliminar Fondo de Pensión -->