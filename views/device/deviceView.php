<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Dispositivo</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="inicio">Unibautista</a></li>
                        <li class="breadcrumb-item active">Dispositivo</li>
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
                                        <th>Activo Fijo</th>
                                        <th>Dispositivo</th>
                                        <th>Marca</th>
                                        <th>Fecha de Registro</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <!-- Fin Encabezado Tabla -->
                                <!-- Inicio Cuerpo de la Tabla -->
                                <tbody>
                                    <?php while($row = mysqli_fetch_object($query)) {
                                        $dis_id                       = $row->dis_id;
                                        $dis_activo_fijo              = $row->dis_activo_fijo;
                                        $dis_descripcion              = $row->dis_descripcion;
                                        $tblmarca_mar_id              = $row->tblmarca_mar_id;
                                        $mar_descripcion              = $row->mar_descripcion;
                                        $dis_referencia               = $row->dis_referencia;
                                        $dis_serial                   = $row->dis_serial;
                                        $dis_modelo                   = $row->dis_modelo;
                                        $dis_capacidad                = $row->dis_capacidad;
                                        $dis_observacion              = $row->dis_observacion;
                                        $dis_estado                   = $row->dis_estado;
                                        $tbloficina_ofi_id            = $row->tbloficina_ofi_id;
                                        $ofi_descripcion              = $row->ofi_descripcion;
                                        $tblestado_general_est_gen_id = $row->tblestado_general_est_gen_id;
                                        $est_gen_descripcion          = $row->est_gen_descripcion;
                                        $dis_fecha_registro           = $row->dis_fecha_registro;
                                    ?>
                                    <tr>
                                        <td><?php echo $dis_id; ?></td>
                                        <td><?php echo $dis_activo_fijo; ?></td>
                                        <td><?php echo $dis_descripcion; ?></td>
                                        <td><?php echo $mar_descripcion; ?></td>
                                        <td><?php echo $dis_fecha_registro; ?></td>
                                        <td> 
                                            <!-- Boton Detalle Dispositivo -->
                                            <a type="button" onclick="detailDevice(
                                                ('<?php echo $dis_id; ?>'),
                                                ('<?php echo $dis_activo_fijo; ?>'),
                                                ('<?php echo $dis_descripcion; ?>'),
                                                ('<?php echo $mar_descripcion; ?>'),
                                                ('<?php echo $dis_referencia; ?>'),
                                                ('<?php echo $dis_serial; ?>'),
                                                ('<?php echo $dis_modelo; ?>'),
                                                ('<?php echo $dis_capacidad; ?>'),
                                                ('<?php echo $dis_observacion; ?>'),
                                                ('<?php echo $dis_estado; ?>'),
                                                ('<?php echo $ofi_descripcion; ?>'),
                                                ('<?php echo $est_gen_descripcion; ?>'),
                                                ('<?php echo $dis_fecha_registro; ?>'))" class="btn btn-primary text-white btn-primary-animation" title="Información del Dispositivo" data-toggle="modal" data-target="#modal-detail-device"><i class="fas fa-eye"></i></a>
                                            &nbsp;
                                            <!-- Boton Actualizar Dispositivo -->
                                            <a type="button" onclick="updateDevice(
                                                ('<?php echo $dis_id; ?>'),
                                                ('<?php echo $dis_activo_fijo; ?>'),
                                                ('<?php echo $dis_descripcion; ?>'),
                                                ('<?php echo $tblmarca_mar_id; ?>'),
                                                ('<?php echo $dis_referencia; ?>'),
                                                ('<?php echo $dis_serial; ?>'),
                                                ('<?php echo $dis_modelo; ?>'),
                                                ('<?php echo $dis_capacidad; ?>'),
                                                ('<?php echo $dis_observacion; ?>'),
                                                ('<?php echo $dis_estado; ?>'),
                                                ('<?php echo $tbloficina_ofi_id; ?>'))" class="btn btn-warning text-white btn-warning-animation" title="Actualizar Datos del Dispositivo" data-toggle="modal" data-target="#modal-update-device"><i class="fas fa-pencil-alt"></i>
                                            </a> 
                                            &nbsp;
                                            <!-- Boton Eliminar Dispositivo -->
                                            <a type="button" onclick="deleteDevice(
                                                ('<?php echo $dis_id; ?>'),
                                                ('<?php echo $dis_descripcion; ?>'))" class="btn btn-danger text-white btn-danger-animation" title="Eliminar Dispositivo" data-toggle="modal" data-target="#modal-delete-device"><i class="fas fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <?php } ?>
                                </tbody>
                                <!-- Fin Cuerpo Tabla -->
                                <!-- Inicio Footer Tabla -->
                                <tr>
                                    <td colspan ="6"> 
                                        <!-- Boton Registrar Dispositivo -->
                                        <a type="button" class="btn btn-info text-white btn-info-animation insert-button" title="Registrar Dispositivo" data-toggle="modal" data-target="#modal-insert-device"><i class="fas fa-plus"></i> Registrar Dispositivo</a>
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

<!-- Inicio Modal Registrar Dispositivo -->
<div class="modal fade" id="modal-insert-device" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-info text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">REGISTRAR DISPOSITIVO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-insert-device">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Activo Fijo:</label>
                            <input type="text" name="ins-dis-act-fij" id="ins-dis-act-fij" class="form-control" maxlength="10" placeholder="Código activo fijo">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Dispositivo:</label>
                            <input type="text" name="ins-dis-nom" id="ins-dis-nom" class="form-control" maxlength="60" placeholder="Nombre del dispositivo">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Marca:</label>
                            <select id="ins-dis-mar" name="ins-dis-mar" class="form-control" required>
                                <option value="" selected disabled>Seleccione...</option>
                                <?php 
                                    foreach ($brand as $query){
                                        echo "<option value=".$query['mar_id'].">".$query['mar_descripcion']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Referencia:</label>
                            <input type="text" name="ins-dis-ref" id="ins-dis-ref" class="form-control" maxlength="60" placeholder="Referencia del dispositivo">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Serial:</label>
                            <input type="text" name="ins-dis-ser" id="ins-dis-ser" class="form-control" maxlength="60" placeholder="Serial del dispositivo">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Modelo:</label>
                            <input type="text" name="ins-dis-mod" id="ins-dis-mod" class="form-control" maxlength="60" placeholder="Modelo del dispositivo">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Capacidad:</label>
                            <input type="text" name="ins-dis-cap" id="ins-dis-cap" class="form-control" maxlength="60" placeholder="Capacidad del dispositivo">
                        </div>   
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Observación:</label>
                            <textarea name="ins-dis-obs" id="ins-dis-obs" rows="1" class="form-control" maxlength="99" placeholder="Observación"></textarea>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Condición:</label>
                            <select id="ins-dis-est" name="ins-dis-est" class="form-control" required>
                                <option value="" selected disabled>Seleccione...</option>
                                <option value="Antiguo">Antiguo</option>
                                <option value="Averiado">Averiado</option>
                                <option value="Dado de baja">Dado de baja</option>
                                <option value="Deteriorado">Deteriorado</option>
                                <option value="En mantenimiento">En mantenimiento</option>
                                <option value="Nuevo">Nuevo</option>
                                <option value="Usado">Usado</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Ubicación del Dispositivo:</label>
                            <select id="ins-dis-ofi" name="ins-dis-ofi" class="form-control">
                                <option value="" selected disabled>Seleccione...</option required>
                                <?php 
                                    foreach ($office as $query){
                                        echo "<option value=".$query['ofi_id'].">".$query['ofi_descripcion']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-4" draggable="true">
                            <p class="text-dark font-weight-bold">(<b class="text-danger">*</b>) Campos obligatorios</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" id="insert-device" onclick="insertDeviceAjax();" class="btn btn-info text-white shut-down-modal" data-dismiss="modal">Registrar</button>
                        <button type="button" class="btn btn-secondary" onclick="cleanModal();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Registrar Dispositivo -->

<!-- Inicio Modal Actualizar Dispositivo -->
<div class="modal fade" id="modal-update-device" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <!-- Encabezado -->
                <h5 class="modal-title text-white" id="staticBackdropLabel">ACTUALIZAR DATOS DEL DISPOSITIVO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-update-device">
                    <div class="form-group row">
                        <div class="col-md-3">
                            <input type="text" name="upd-dis-id" id="upd-dis-id" class="form-control upd-dis-id" hidden>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Activo Fijo:</label>
                            <input type="text" name="upd-dis-act-fij" id="upd-dis-act-fij" class="form-control upd-dis-act-fij" maxlength="60" placeholder="Código activo fijo">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Dispositivo:</label>
                            <input type="text" name="upd-dis-nom" id="upd-dis-nom" class="form-control upd-dis-nom" maxlength="60" placeholder="Nombre del dispositivo">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Marca:</label>
                            <select id="upd-dis-mar" name="upd-dis-mar" class="form-control restart-select">
                                <?php 
                                    foreach ($brand as $query){
                                        echo "<option value=".$query['mar_id'].">".$query['mar_descripcion']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Referencia:</label>
                            <input type="text" name="upd-dis-ref" id="upd-dis-ref" class="form-control upd-dis-ref" maxlength="60" placeholder="Referencia del dispositivo">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Serial:</label>
                            <input type="text" name="upd-dis-ser" id="upd-dis-ser" class="form-control upd-dis-ser" maxlength="60" placeholder="Serial del dispositivo">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Modelo:</label>
                            <input type="text" name="upd-dis-mod" id="upd-dis-mod" class="form-control upd-dis-mod" maxlength="60" placeholder="Modelo del dispositivo">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Capacidad:</label>
                            <input type="text" name="upd-dis-cap" id="upd-dis-cap" class="form-control upd-dis-cap" maxlength="60" placeholder="Capacidad del dispositivo">
                        </div>   
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Observación:</label>
                            <textarea name="upd-dis-obs" id="upd-dis-obs" rows="1" class="form-control upd-dis-obs" maxlength="99" placeholder="Observación"></textarea>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Condición:</label>
                            <select id="upd-dis-est" name="upd-dis-est" class="form-control restart-select" required>
                                <option value="Antiguo">Antiguo</option>
                                <option value="Averiado">Averiado</option>
                                <option value="Dado de baja">Dado de baja</option>
                                <option value="Deteriorado">Deteriorado</option>
                                <option value="En mantenimiento">En mantenimiento</option>
                                <option value="Nuevo">Nuevo</option>
                                <option value="Usado">Usado</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Ubicación del Dispositivo:</label>
                            <select id="upd-dis-ofi" name="upd-dis-ofi" class="form-control restart-select">
                                <?php 
                                    foreach ($office as $query){
                                        echo "<option value=".$query['ofi_id'].">".$query['ofi_descripcion']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-2"></div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" id="update-device" onclick="updateDeviceAjax();" class="btn btn-warning text-white shut-down-modal" data-dismiss="modal">Actualizar</button>
                        <button type="button" class="btn btn-secondary" onclick="restartSelect();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Actualizar Dispositivo -->

<!-- Inicio Modal Detalle Dispositivo -->
<div class="modal fade" id="modal-detail-device" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-primary text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">INFORMACIÓN DEL DISPOSITIVO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-detail-user">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">ID:</label>
                            <input type="text" name="det-dis-id" id="det-dis-id" class="form-control det-dis-id" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Activo Fijo:</label>
                            <input type="text" name="det-dis-act-fij" id="det-dis-act-fij" class="form-control det-dis-act-fij" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Dispositivo:</label>
                            <input type="text" name="det-nom-dis" id="det-nom-dis" class="form-control det-nom-dis" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Marca:</label>
                            <input type="text" name="det-dis-mar" id="det-dis-mar" class="form-control det-dis-mar" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Referencia:</label>
                            <input type="text" name="det-dis-ref" id="det-dis-ref" class="form-control det-dis-ref" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Serial:</label>
                            <input type="text" name="det-dis-ser" id="det-dis-ser" class="form-control det-dis-ser" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Modelo:</label>
                            <input type="text" name="det-dis-mod" id="det-dis-mod" class="form-control det-dis-mod" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Capacidad:</label>
                            <input type="text" name="det-dis-cap" id="det-dis-cap" class="form-control det-dis-cap" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Observación:</label>
                            <textarea name="det-dis-obs" id="det-dis-obs" rows="1" class="form-control det-dis-obs" readonly></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Condición:</label>
                            <input type="text" name="det-dis-con" id="det-dis-con" class="form-control det-dis-con" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Ubicación del Dispositivo:</label>
                            <input type="text" name="det-dis-ofi" id="det-dis-ofi" class="form-control det-dis-ofi" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Estado:</label>
                            <input type="text" name="det-dis-est" id="det-dis-est" class="form-control det-dis-est" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha de Registro:</label>
                            <input type="date" name="det-dis-fec-reg" id="det-dis-fec-reg" class="form-control det-dis-fec-reg" readonly>
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
<!-- Final Modal Detalle Dispositivo -->


<!-- Inicio Modal Eliminar Dispositivo -->
<div class="modal fade" id="modal-delete-device" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-danger  text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel" draggable="true">ELIMINAR DISPOSITIVO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-delete-device">
                    <div>
                        <div>
                            <input type="number" class="form-control del-dis-id" name="del-dis-id"  id="del-dis-id" hidden>
                        </div>
                        <div class="center-text" draggable="true">
                            <p class="font-weight-bold">¿Seguro que quieres eliminar el dispositivo "<b class="del-dis-nom"></b>"?
                            </p>
                        </div>
                        <div class="center-text">
                            <p class="font-italic">¡No podrás revertir esto!</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="deleteDeviceAjax();" class="btn btn-danger text-white" data-dismiss="modal">Eliminar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div> 
            <!-- Fin Formulario -->
        </div>
    </div>
</div>
<!-- Inicio Modal Eliminar Dispositivo -->