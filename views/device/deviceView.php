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
                                            <a type="button" onclick="updateBrand(
                                                ('<?php echo $marca_id; ?>'),
                                                ('<?php echo $marca_descripcion; ?>'),
                                                ('<?php echo $marca_fecha_registro; ?>'))" class="btn btn-warning text-white btn-warning-animation" title="Actualizar Marca" data-toggle="modal" data-target="#modal-update-brand"><i class="fas fa-pencil-alt"></i>
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
                                        <!-- Boton Crear Dispositivo -->
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

<!-- Inicio Modal Crear Dispositivo -->
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
                            <label  draggable="true" class="form-label">Activo Fijo:</label>
                            <input type="text" name="ins-dis-act-fij" id="ins-dis-act-fij" class="form-control" maxlength="10" placeholder="Código activo fijo">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Dispositivo:</label>
                            <input type="text" name="ins-dis-nom" id="ins-dis-nom" class="form-control" maxlength="60" placeholder="Nombre del dispositivo">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Marca:</label>
                            <select id="ins-dis-mar" name="ins-dis-mar" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <?php 
                                    // PHP foreach(): Bucles para recorrer arrays y objetos. Con la función PHP foreach() podemos recorrer los diferentes tipos de arrays y objetos de una manera controlada.

                                    //La variable $estados contiene una consulta que viene de la base datos, con el foreach la recorro como si fuese un arreglo, es necesario traer el id y la descripcion del campo que queremos pintar en el selector
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
                            <input type="text" name="ins-dis-ref" id="ins-dis-ref" class="form-control" maxlength="60" placeholder="Referencia del dispositivo">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Serial:</label>
                            <input type="text" name="ins-dis-ser" id="ins-dis-ser" class="form-control" maxlength="60" placeholder="Serial del dispositivo">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Modelo:</label>
                            <input type="text" name="ins-dis-mod" id="ins-dis-mod" class="form-control" maxlength="60" placeholder="Modelo del dispositivo">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Capacidad:</label>
                            <input type="text" name="ins-dis-cap" id="ins-dis-cap" class="form-control" maxlength="60" placeholder="Capacidad del dispositivo">
                        </div>   
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Observación:</label>
                            <textarea name="ins-dis-obs" id="ins-dis-obs" rows="1" class="form-control" maxlength="99" placeholder="Observación"></textarea>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Condición:</label>
                            <select id="ins-dis-est" name="ins-dis-est" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <option value="Nuevo">Nuevo</option>
                                <option value="Usado">Usado</option>
                                <option value="Averiado">Averiado</option>
                                <option value="Deteriorado">Deteriorado</option>
                                <option value="En mantenimiento">En mantenimiento</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Ubicación del Dispositivo:</label>
                            <select id="ins-dis-ofi" name="ins-dis-ofi" class="form-control">
                                <option value="">Seleccione...</option required>
                                <?php 
                                    // PHP foreach(): Bucles para recorrer arrays y objetos. Con la función PHP foreach() podemos recorrer los diferentes tipos de arrays y objetos de una manera controlada.

                                    //La variable $estados contiene una consulta que viene de la base datos, con el foreach la recorro como si fuese un arreglo, es necesario traer el id y la descripcion del campo que queremos pintar en el selector
                                    foreach ($office as $query){
                                        echo "<option value=".$query['ofi_id'].">".$query['ofi_descripcion']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Fecha de Registro:</label>
                            <input type="date" name="ins-dis-fec-reg" id="ins-dis-fec-reg" class="form-control">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12" draggable="true">
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
<!-- Final Modal Crear Marca -->

<!-- Inicio Modal Actualizar Marca -->
<div class="modal fade" id="modal-update-brand" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <!-- Encabezado -->
                <h5 class="modal-title text-white" id="staticBackdropLabel">ACTUALIZAR DATOS DEL DISPOSITIVO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-update-brand">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Activo Fijo:</label>
                            <input type="text" name="ins-bra-nom" id="ins-bra-nom" class="form-control" maxlength="60" placeholder="Código activo fijo">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Dispositivo:</label>
                            <input type="text" name="ins-bra-nom" id="ins-bra-nom" class="form-control" maxlength="60" placeholder="Nombre del dispositivo">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Marca:</label>
                            <select id="upd-com-mar" name="upd-com-mar" class="form-control restart-select">
                                <option value="NULL">Seleccione...</option>
                                <?php 
                                    // PHP foreach(): Bucles para recorrer arrays y objetos. Con la función PHP foreach() podemos recorrer los diferentes tipos de arrays y objetos de una manera controlada.

                                    //La variable $estados contiene una consulta que viene de la base datos, con el foreach la recorro como si fuese un arreglo, es necesario traer el id y la descripcion del campo que queremos pintar en el selector
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
                            <input type="text" name="ins-bra-nom" id="ins-bra-nom" class="form-control" maxlength="60" placeholder="Referencia del dispositivo">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Serial:</label>
                            <input type="text" name="ins-bra-nom" id="ins-bra-nom" class="form-control" maxlength="60" placeholder="Serial del dispositivo">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Modelo:</label>
                            <input type="text" name="ins-bra-nom" id="ins-bra-nom" class="form-control" maxlength="60" placeholder="Modelo del dispositivo">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Capacidad:</label>
                            <input type="text" name="ins-bra-nom" id="ins-bra-nom" class="form-control" maxlength="60" placeholder="Capacidad del dispositivo">
                        </div>   
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Observación:</label>
                            <textarea name="ins-com-obs" id="ins-com-obs" rows="1" class="form-control" maxlength="99" placeholder="Observación"></textarea>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Condición:</label>
                            <select id="upd-com-est" name="upd-com-est" class="form-control">
                                <option value="NULL">Seleccione...</option>
                                <option value="Nuevo">Nuevo</option>
                                <option value="Usado">Usado</option>
                                <option value="Averiado">Averiado</option>
                                <option value="Deteriorado">Deteriorado</option>
                                <option value="En mantenimiento">En mantenimiento</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Ubicación del Dispositivo:</label>
                            <select id="upd-com-ubi" name="upd-com-ubi" class="form-control">
                                <option value="NULL">Seleccione...</option>
                                <?php 
                                    // PHP foreach(): Bucles para recorrer arrays y objetos. Con la función PHP foreach() podemos recorrer los diferentes tipos de arrays y objetos de una manera controlada.

                                    //La variable $estados contiene una consulta que viene de la base datos, con el foreach la recorro como si fuese un arreglo, es necesario traer el id y la descripcion del campo que queremos pintar en el selector
                                    foreach ($office as $query){
                                        echo "<option value=".$query['ofi_id'].">".$query['ofi_descripcion']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha de Registro:</label>
                            <input type="date" name="ins-com-fec-reg" id="ins-com-fec-reg" class="form-control">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12" draggable="true">
                            <p class="text-dark font-weight-bold">(<b class="text-danger">*</b>) Campos obligatorios</p>
                        </div>
                    </div>
                    
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="updateBrandAjax();" class="btn btn-warning text-white shut-down-modal" data-dismiss="modal">Actualizar</button>
                        <button type="button" class="btn btn-secondary" onclick="cleanModal();" data-dismiss="modal">Cancelar</button>
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
                <form id="form-delete-brand">
                    <div>
                        <div>
                            <input type="number" class="form-control del-dis-id" name="del-dis-id"  id="del-dis-id" >
                        </div>
                        <div class="center-content" draggable="true">
                            <p class="font-weight-bold">¿Seguro que quieres eliminar el dispositivo "<b class="del-dis-nom"></b>"?
                            </p>
                        </div>
                        <div class="center-content">
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