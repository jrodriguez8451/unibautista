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
                        <li class="breadcrumb-item active">ARL</li>
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
                                        $arl_id                       = $row->arl_id;
                                        $arl_nit                      = $row->arl_nit;
                                        $arl_razon_social             = $row->arl_razon_social;
                                        $arl_correo_arl               = $row->arl_correo_arl;
                                        $arl_telefono_arl             = $row->arl_telefono_arl;
                                        $arl_celular_arl              = $row->arl_celular_arl;
                                        $arl_ciudad                   = $row->arl_ciudad;
                                        $arl_direccion                = $row->arl_direccion;
                                        $arl_nombre_encargado         = $row->arl_nombre_encargado;
                                        $arl_correo_encargado         = $row->arl_correo_encargado;
                                        $arl_telefono_encargado       = $row->arl_telefono_encargado;
                                        $arl_celular_encargado        = $row->arl_celular_encargado;
                                        $tblestado_general_est_gen_id = $row->tblestado_general_est_gen_id;
                                        $arl_estado_descripcion       = $row->est_gen_descripcion;
                                        $arl_fecha_registro           = $row->arl_fecha_registro;
                                    ?>
                                    <tr>
                                        <td><?php echo $arl_id; ?></td>
                                        <td><?php echo $arl_nit; ?></td>
                                        <td><?php echo $arl_razon_social; ?></td>
                                        <td><?php echo $arl_fecha_registro; ?></td>
                                        <td> 
                                            <!-- Boton Detalle ARL -->
                                            <a type="button" onclick="detailARL(
                                                ('<?php echo $arl_id; ?>'),
                                                ('<?php echo $arl_nit; ?>'),
                                                ('<?php echo $arl_razon_social; ?>'),
                                                ('<?php echo $arl_correo_arl; ?>'),
                                                ('<?php echo $arl_telefono_arl; ?>'),
                                                ('<?php echo $arl_celular_arl; ?>'),
                                                ('<?php echo $arl_ciudad; ?>'),
                                                ('<?php echo $arl_direccion; ?>'),
                                                ('<?php echo $arl_nombre_encargado; ?>'),
                                                ('<?php echo $arl_correo_encargado; ?>'),
                                                ('<?php echo $arl_telefono_encargado; ?>'),
                                                ('<?php echo $arl_celular_encargado; ?>'),
                                                ('<?php echo $arl_estado_descripcion; ?>'),
                                                ('<?php echo $arl_fecha_registro; ?>'))" class="btn btn-primary text-white btn-primary-animation" title="Información de la ARL" data-toggle="modal" data-target="#modal-detail-arl"><i class="fas fa-eye"></i></a>
                                            &nbsp;
                                            <!-- Boton Actualizar ARL -->
                                            <a type="button" onclick="updateARL(
                                                ('<?php echo $arl_id; ?>'),
                                                ('<?php echo $arl_nit; ?>'),
                                                ('<?php echo $arl_razon_social; ?>'),
                                                ('<?php echo $arl_correo_arl; ?>'),
                                                ('<?php echo $arl_telefono_arl; ?>'),
                                                ('<?php echo $arl_celular_arl; ?>'),
                                                ('<?php echo $arl_ciudad; ?>'),
                                                ('<?php echo $arl_direccion; ?>'),
                                                ('<?php echo $arl_nombre_encargado; ?>'),
                                                ('<?php echo $arl_correo_encargado; ?>'),
                                                ('<?php echo $arl_telefono_encargado; ?>'),
                                                ('<?php echo $arl_celular_encargado; ?>'))" class="btn btn-warning text-white btn-warning-animation" title="Actualizar datos de la ARL" data-toggle="modal" data-target="#modal-update-arl"><i class="fas fa-pencil-alt"></i>
                                            </a> 
                                            &nbsp;
                                            <!-- Boton Eliminar ARL -->
                                            <a type="button" onclick="deleteARL(
                                                ('<?php echo $arl_id; ?>'),
                                                ('<?php echo $arl_razon_social; ?>'))" class="btn btn-danger text-white btn-danger-animation" title="Eliminar ARL" data-toggle="modal" data-target="#modal-delete-arl"><i class="fas fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <?php } ?>
                                </tbody>
                                <!-- Fin Cuerpo Tabla -->
                                <!-- Inicio Footer Tabla -->
                                <tr>
                                    <td colspan ="6"> 
                                        <!-- Boton Registrar ARL -->
                                        <a type="button" class="btn btn-info text-white btn-info-animation insert-button" title="Registrar ARL" data-toggle="modal" data-target="#modal-insert-arl"><i class="fas fa-plus"></i> Registrar ARL</a>
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

<!-- Inicio Modal Registrar ARL -->
<div class="modal fade" id="modal-insert-arl" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-info text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">REGISTRAR ARL</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-insert-arl">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> NIT:</label>
                            <input type="text" name="ins-arl-nit" id="ins-arl-nit" class="form-control" maxlength="11" placeholder="NIT de la ARL">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Razón Social:</label>
                            <input type="text" name="ins-arl-nom" id="ins-arl-nom" class="form-control" maxlength="60" placeholder="Nombre de la ARL">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Correo de la ARL:</label>
                            <input type="text" name="ins-arl-cor" id="ins-arl-cor" class="form-control" maxlength="45" placeholder="Correo electrónico de la ARL">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Teléfono de la ARL:</label>
                            <input type="text" name="ins-arl-tel" id="ins-arl-tel" class="form-control" maxlength="30" placeholder="Número de teléfono de la ARL">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Celular de la ARL:</label>
                            <input type="text" name="ins-arl-cel" id="ins-arl-cel" class="form-control" maxlength="10" placeholder="Número de celular de la ARL">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Ciudad:</label>
                            <input type="text" name="ins-arl-cit" id="ins-arl-cit" class="form-control" maxlength="60" placeholder="Ciudad de la ARL">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Dirección:</label>
                            <input type="text" name="ins-arl-dir" id="ins-arl-dir" class="form-control" maxlength="60" placeholder="Dirección de la ARL">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Nombre del Encargado:</label>
                            <input type="text" name="ins-arl-enc" id="ins-arl-enc" class="form-control" maxlength="60" placeholder="Nombre completo del encargado">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Correo del Encargado:</label>
                            <input type="text" name="ins-arl-cor-enc" id="ins-arl-cor-enc" class="form-control" maxlength="45" placeholder="Correo electrónico del encargado">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Teléfono del Encargado:</label>
                            <input type="text" name="ins-arl-tel-enc" id="ins-arl-tel-enc" class="form-control" maxlength="30" placeholder="Número de teléfono del encargado">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Celular del Encargado:</label>
                            <input type="text" name="ins-arl-cel-enc" id="ins-arl-cel-enc" class="form-control" maxlength="10" placeholder="Número de celular del encargado">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-4" draggable="true">
                            <p class="text-dark font-weight-bold">(<b class="text-danger">*</b>) Campos obligatorios</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="insertARLAjax();" class="btn btn-info text-white shut-down-modal" data-dismiss="modal">Registrar</button>
                        <button type="button" class="btn btn-secondary" onclick="cleanModal();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Registrar ARL -->

<!-- Inicio Modal Actualizar ARL -->
<div class="modal fade" id="modal-update-arl" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <!-- Encabezado -->
                <h5 class="modal-title text-white" id="staticBackdropLabel">ACTUALIZAR DATOS DE LA ARL</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-update-arl">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <input type="text" name="upd-arl-id" id="upd-arl-id" class="form-control upd-arl-id" hidden>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">NIT:</label>
                            <input type="text" name="upd-arl-nit" id="upd-arl-nit" class="form-control upd-arl-nit" maxlength="11" placeholder="NIT de la ARL">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Razón Social:</label>
                            <input type="text" name="upd-arl-nom" id="upd-arl-nom" class="form-control upd-arl-nom" maxlength="60" placeholder="Nombre de la ARL">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Correo de la ARL:</label>
                            <input type="text" name="upd-arl-cor" id="upd-arl-cor" class="form-control upd-arl-cor" maxlength="45" placeholder="Correo electrónico de la ARL">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Teléfono de la ARL:</label>
                            <input type="text" name="upd-arl-tel" id="upd-arl-tel" class="form-control upd-arl-tel" maxlength="30" placeholder="Teléfono de la ARL">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Celular de la ARL:</label>
                            <input type="text" name="upd-arl-cel" id="upd-arl-cel" class="form-control upd-arl-cel" maxlength="10" placeholder="Celular de la ARL">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Ciudad:</label>
                            <input type="text" name="upd-arl-cit" id="upd-arl-cit" class="form-control upd-arl-cit" maxlength="60" placeholder="Ciudad de la ARL">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Dirección:</label>
                            <input type="text" name="upd-arl-dir" id="upd-arl-dir" class="form-control upd-arl-dir" maxlength="60" placeholder="Dirección de la ARL">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Nombre del Encargado:</label>
                            <input type="text" name="upd-arl-enc" id="upd-arl-enc" class="form-control upd-arl-enc" maxlength="60" placeholder="Nombre completo del encargado">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Correo del Encargado:</label>
                            <input type="text" name="upd-arl-cor-enc" id="upd-arl-cor-enc" class="form-control upd-arl-cor-enc" maxlength="45" placeholder="Correo electrónico del encargado">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Teléfono del Encargado:</label>
                            <input type="text" name="upd-arl-tel-enc" id="upd-arl-tel-enc" class="form-control upd-arl-tel-enc" maxlength="30" placeholder="Teléfono del encargado">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Celular del Encargado:</label>
                            <input type="text" name="upd-arl-cel-enc" id="upd-arl-cel-enc" class="form-control upd-arl-cel-enc" maxlength="10" placeholder="Celular del encargado">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-3"></div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" id="update-arl" onclick="updateARLAjax();" class="btn btn-warning text-white shut-down-modal" data-dismiss="modal">Actualizar</button>
                        <button type="button" class="btn btn-secondary" onclick="restartSelect();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Actualizar ARL -->

<!-- Inicio Modal Detalle ARL -->
<div class="modal fade" id="modal-detail-arl" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-primary text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">INFORMACIÓN DE LA ARL</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-detail-user">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">ID:</label>
                            <input type="text" name="det-arl-id" id="det-arl-id" class="form-control det-arl-id" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">NIT:</label>
                            <input type="text" name="det-arl-nit" id="det-arl-nit" class="form-control det-arl-nit" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Razón Social:</label>
                            <input type="text" name="det-arl-nom" id="det-arl-nom" class="form-control det-arl-nom" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Correo de la ARL:</label>
                            <input type="text" name="det-arl-cor" id="det-arl-cor" class="form-control det-arl-cor" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Teléfono de la ARL:</label>
                            <input type="text" name="det-arl-tel" id="det-arl-tel" class="form-control det-arl-tel" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Celular de la ARL:</label>
                            <input type="text" name="det-arl-cel" id="det-arl-cel" class="form-control det-arl-cel" readonly>
                        </div>
                        
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Ciudad:</label>
                            <input type="text" name="det-arl-cit" id="det-arl-cit" class="form-control det-arl-cit" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Dirección:</label>
                            <input type="text" name="det-arl-dir" id="det-arl-dir" class="form-control det-arl-dir" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Nombre del Encargado:</label>
                            <input type="text" name="det-arl-enc" id="det-arl-enc" class="form-control det-arl-enc" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Correo del Encargado:</label>
                            <input type="text" name="det-arl-enc-cor" id="det-arl-enc-cor" class="form-control det-arl-enc-cor" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Teléfono del Encargado:</label>
                            <input type="text" name="det-arl-enc-tel" id="det-arl-enc-tel" class="form-control det-arl-enc-tel" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Celular del Encargado:</label>
                            <input type="text" name="det-arl-enc-cel" id="det-arl-enc-cel" class="form-control det-arl-enc-cel" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Estado:</label>
                            <input type="text" name="det-arl-est" id="det-arl-est" class="form-control det-arl-est" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha de Registro:</label>
                            <input type="date" name="det-arl-fec-reg" id="det-arl-fec-reg" class="form-control det-arl-fec-reg" readonly>
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
<!-- Final Modal Detalle ARL -->


<!-- Inicio Modal Eliminar ARL -->
<div class="modal fade" id="modal-delete-arl" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-danger  text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel" draggable="true">ELIMINAR ARL</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-delete-arl">
                    <div>
                        <div>
                            <input type="number" class="form-control del-arl-id" name="del-arl-id"  id="del-arl-id" hidden>
                        </div>
                        <div class="center-text" draggable="true">
                            <p class="font-weight-bold">¿Seguro que quieres eliminar la ARL "<b class="del-arl-nom"></b>"?
                            </p>
                        </div>
                        <div class="center-text">
                            <p class="font-italic">¡No podrás revertir esto!</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="deleteARLAjax();" class="btn btn-danger text-white" data-dismiss="modal">Eliminar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div> 
            <!-- Fin Formulario -->
        </div>
    </div>
</div>
<!-- Inicio Modal Eliminar ARL -->