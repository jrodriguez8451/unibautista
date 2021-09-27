<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Proveedor</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="inicio">Unibautista</a></li>
                        <li class="breadcrumb-item active">Proveedor</li>
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
                                        $pro_id                       = $row->pro_id;
                                        $pro_nit                      = $row->pro_nit;
                                        $pro_razon_social             = $row->pro_razon_social;
                                        $pro_producto_servicio        = $row->pro_producto_servicio;
                                        $pro_correo                   = $row->pro_correo;
                                        $pro_telefono                 = $row->pro_telefono;
                                        $pro_celular                  = $row->pro_celular;
                                        $pro_direccion                = $row->pro_direccion;
                                        $pro_encargado                = $row->pro_encargado;
                                        $tblestado_general_est_gen_id = $row->tblestado_general_est_gen_id;
                                        $pro_estado_descripcion       = $row->est_gen_descripcion;
                                        $pro_fecha_registro           = $row->pro_fecha_registro;
                                    ?>
                                    <tr>
                                        <td><?php echo $pro_id; ?></td>
                                        <td><?php echo $pro_nit; ?></td>
                                        <td><?php echo $pro_razon_social; ?></td>
                                        <td><?php echo $pro_fecha_registro; ?></td>
                                        <td> 
                                            <!-- Boton Detalle Proveedor -->
                                            <a type="button" onclick="detailSupplier(
                                                ('<?php echo $pro_id; ?>'),
                                                ('<?php echo $pro_nit; ?>'),
                                                ('<?php echo $pro_razon_social; ?>'),
                                                ('<?php echo $pro_producto_servicio; ?>'),
                                                ('<?php echo $pro_correo; ?>'),
                                                ('<?php echo $pro_telefono; ?>'),
                                                ('<?php echo $pro_celular; ?>'),
                                                ('<?php echo $pro_direccion; ?>'),
                                                ('<?php echo $pro_encargado; ?>'),
                                                ('<?php echo $pro_estado_descripcion; ?>'),
                                                ('<?php echo $pro_fecha_registro; ?>'))" class="btn btn-primary text-white btn-primary-animation" title="Información del Proveedor" data-toggle="modal" data-target="#modal-detail-supplier"><i class="fas fa-eye"></i></a>
                                            &nbsp;
                                            <!-- Boton Actualizar Proveedor -->
                                            <a type="button" onclick="updateSupplier(
                                                ('<?php echo $pro_id; ?>'),
                                                ('<?php echo $pro_nit; ?>'),
                                                ('<?php echo $pro_razon_social; ?>'),
                                                ('<?php echo $pro_producto_servicio; ?>'),
                                                ('<?php echo $pro_correo; ?>'),
                                                ('<?php echo $pro_telefono; ?>'),
                                                ('<?php echo $pro_celular; ?>'),
                                                ('<?php echo $pro_direccion; ?>'),
                                                ('<?php echo $pro_encargado; ?>'))" class="btn btn-warning text-white btn-warning-animation" title="Actualizar Datos del Proveedor" data-toggle="modal" data-target="#modal-update-supplier"><i class="fas fa-pencil-alt"></i>
                                            </a> 
                                            &nbsp;
                                            <!-- Boton Eliminar Proveedor -->
                                            <a type="button" onclick="deleteSupplier(
                                                ('<?php echo $pro_id; ?>'),
                                                ('<?php echo $pro_razon_social; ?>'))" class="btn btn-danger text-white btn-danger-animation" title="Eliminar Proveedor" data-toggle="modal" data-target="#modal-delete-supplier"><i class="fas fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <?php } ?>
                                </tbody>
                                <!-- Fin Cuerpo Tabla -->
                                <!-- Inicio Footer Tabla -->
                                <tr>
                                    <td colspan ="6"> 
                                        <!-- Boton Registrar Proveedor -->
                                        <a type="button" class="btn btn-info text-white btn-info-animation insert-button" title="Registrar Proveedor" data-toggle="modal" data-target="#modal-insert-supplier"><i class="fas fa-plus"></i> Registrar Proveedor</a>
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

<!-- Inicio Modal Registrar Proveedor -->
<div class="modal fade" id="modal-insert-supplier" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-info text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">REGISTRAR PROVEEDOR</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-insert-supplier">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> NIT:</label>
                            <input type="text" name="ins-sup-nit" id="ins-sup-nit" class="form-control" maxlength="11" placeholder="NIT del proveedor">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Razón Social:</label>
                            <input type="text" name="ins-sup-nom" id="ins-sup-nom" class="form-control" maxlength="60" placeholder="Nombre del proveedor">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Producto / Servicio:</label>
                            <input type="text" name="ins-sup-pro-ser" id="ins-sup-pro-ser" class="form-control" maxlength="60" placeholder="Producto o servicio del proveedor">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Correo:</label>
                            <input type="text" name="ins-sup-cor" id="ins-sup-cor" class="form-control" maxlength="45" placeholder="Correo electrónico del proveedor">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Teléfono:</label>
                            <input type="text" name="ins-sup-tel" id="ins-sup-tel" class="form-control" maxlength="7" placeholder="Número de teléfono del proveedor">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Celular:</label>
                            <input type="text" name="ins-sup-cel" id="ins-sup-cel" class="form-control" maxlength="10" placeholder="Número de celular del proveedor">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Dirección:</label>
                            <input type="text" name="ins-sup-dir" id="ins-sup-dir" class="form-control" maxlength="60" placeholder="Dirección del proveedor">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"> Nombre del Encargado:</label>
                            <input type="text" name="ins-sup-nom-enc" id="ins-sup-nom-enc" class="form-control" maxlength="60" placeholder="Nombre completo del encargado">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-4" draggable="true">
                            <p class="text-dark font-weight-bold">(<b class="text-danger">*</b>) Campos obligatorios</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="insertSupplierAjax();" class="btn btn-info text-white shut-down-modal" data-dismiss="modal">Registrar</button>
                        <button type="button" class="btn btn-secondary" onclick="cleanModal();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Registrar Proveedor -->

<!-- Inicio Modal Actualizar Proveedor -->
<div class="modal fade" id="modal-update-supplier" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <!-- Encabezado -->
                <h5 class="modal-title text-white" id="staticBackdropLabel">ACTUALIZAR DATOS DEL PROVEEDOR</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-update-supplier">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <input type="text" name="upd-sup-id" id="upd-sup-id" class="form-control upd-sup-id" hidden>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">NIT:</label>
                            <input type="text" name="upd-sup-nit" id="upd-sup-nit" class="form-control upd-sup-nit" maxlength="11" placeholder="NIT del proveedor">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Razón Social:</label>
                            <input type="text" name="upd-sup-nom" id="upd-sup-nom" class="form-control upd-sup-nom" maxlength="60" placeholder="Nombre del proveedor">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Producto / Servicio:</label>
                            <input type="text" name="upd-sup-pro-ser" id="upd-sup-pro-ser" class="form-control upd-sup-pro-ser" maxlength="60" placeholder="Producto o servicio del proveedor">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Correo:</label>
                            <input type="text" name="upd-sup-cor" id="upd-sup-cor" class="form-control upd-sup-cor" maxlength="45" placeholder="Correo electrónico del proveedor">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Teléfono:</label>
                            <input type="text" name="upd-sup-tel" id="upd-sup-tel" class="form-control upd-sup-tel" maxlength="7" placeholder="Teléfono del proveedor">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Celular:</label>
                            <input type="text" name="upd-sup-cel" id="upd-sup-cel" class="form-control upd-sup-cel" maxlength="7" placeholder="Teléfono del proveedor">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Dirección:</label>
                            <input type="text" name="upd-sup-dir" id="upd-sup-dir" class="form-control upd-sup-dir" maxlength="60" placeholder="Dirección del proveedor">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Nombre del Encargado:</label>
                            <input type="text" name="upd-sup-nom-enc" id="upd-sup-nom-enc" class="form-control upd-sup-nom-enc" maxlength="60" placeholder="Nombre completo del encargado">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-3"></div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" id="update-arl" onclick="updateSupplierAjax();" class="btn btn-warning text-white shut-down-modal" data-dismiss="modal">Actualizar</button>
                        <button type="button" class="btn btn-secondary" onclick="restartSelect();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Actualizar Proveedor -->

<!-- Inicio Modal Detalle Proveedor -->
<div class="modal fade" id="modal-detail-supplier" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-primary text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel" draggable="true">INFORMACIÓN DEL PROVEEDOR</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">ID:</label>
                            <input type="text" name="det-sup-id" id="det-sup-id" class="form-control det-sup-id" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">NIT:</label>
                            <input type="text" name="det-sup-nit" id="det-sup-nit" class="form-control det-sup-nit" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Razón Social:</label>
                            <input type="text" name="det-sup-nom" id="det-sup-nom" class="form-control det-sup-nom" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Producto / Servicio:</label>
                            <input type="text" name="det-sup-pro-ser" id="det-sup-pro-ser" class="form-control det-sup-pro-ser" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Correo:</label>
                            <input type="text" name="det-sup-cor" id="det-sup-cor" class="form-control det-sup-cor" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Teléfono:</label>
                            <input type="text" name="det-sup-tel" id="det-sup-tel" class="form-control det-sup-tel" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Celular:</label>
                            <input type="text" name="det-sup-cel" id="det-sup-cel" class="form-control det-sup-cel" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Dirección:</label>
                            <input type="text" name="det-sup-dir" id="det-sup-dir" class="form-control det-sup-dir" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Encargado:</label>
                            <input type="text" name="det-sup-enc" id="det-sup-enc" class="form-control det-sup-enc" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Estado:</label>
                            <input type="text" name="det-sup-est" id="det-sup-est" class="form-control det-sup-est" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha de Registro:</label>
                            <input type="date" name="det-sup-fec-reg" id="det-sup-fec-reg" class="form-control det-sup-fec-reg" readonly>
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
<!-- Final Modal Detalle Proveedor -->


<!-- Inicio Modal Eliminar Proveedor -->
<div class="modal fade" id="modal-delete-supplier" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-danger  text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel" draggable="true">ELIMINAR PROVEEDOR</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-delete-supplier">
                    <div>
                        <div>
                            <input type="number" class="form-control del-sup-id" name="del-sup-id"  id="del-sup-id" hidden>
                        </div>
                        <div class="center-text" draggable="true">
                            <p class="font-weight-bold">¿Seguro que quieres eliminar el proveedor "<b class="del-sup-nom"></b>"?
                            </p>
                        </div>
                        <div class="center-text">
                            <p class="font-italic">¡No podrás revertir esto!</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="deleteSupplierAjax();" class="btn btn-danger text-white" data-dismiss="modal">Eliminar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div> 
            <!-- Fin Formulario -->
        </div>
    </div>
</div>
<!-- Inicio Modal Eliminar Proveedor -->