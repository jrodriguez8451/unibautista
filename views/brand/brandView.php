<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Marca</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="inicio">Unibautista</a></li>
                        <li class="breadcrumb-item active">Marca</li>
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
                                        <th>Marca</th>
                                        <th>Fecha de Registro</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <!-- Fin Encabezado Tabla -->
                                <!-- Inicio Cuerpo de la Tabla -->
                                <tbody>
                                    <?php while($row = mysqli_fetch_object($query)) {
                                        $marca_id             = $row->mar_id;
                                        $marca_descripcion    = $row->mar_descripcion;
                                        $marca_fecha_registro = $row->mar_fecha_registro;
                                    ?>
                                    <tr>
                                        <td><?php echo $marca_id; ?></td>
                                        <td><?php echo $marca_descripcion; ?></td>
                                        <td><?php echo $marca_fecha_registro; ?></td>
                                        <td> 
                                            <!-- Boton Actualizar Marca -->
                                            <a type="button" onclick="updateBrand(
                                                ('<?php echo $marca_id; ?>'),
                                                ('<?php echo $marca_descripcion; ?>'),
                                                ('<?php echo $marca_fecha_registro; ?>'))" class="btn btn-warning text-white btn-warning-animation" title="Actualizar Marca" data-toggle="modal" data-target="#modal-update-brand"><i class="fas fa-pencil-alt"></i>
                                            </a> 
                                            &nbsp;
                                            <!-- Boton Eliminar Marca -->
                                            <a type="button" onclick="deleteBrand(
                                                ('<?php echo $marca_id; ?>'),
                                                ('<?php echo $marca_descripcion; ?>'))" class="btn btn-danger text-white btn-danger-animation" title="Eliminar Marca" data-toggle="modal" data-target="#modal-delete-brand"><i class="fas fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <?php } ?>
                                </tbody>
                                <!-- Fin Cuerpo Tabla -->
                                <!-- Inicio Footer Tabla -->
                                <tr>
                                    <td colspan ="4"> 
                                        <!-- Boton Crear Marca -->
                                        <a type="button" class="btn btn-info text-white btn-info-animation insert-button" title="Crear Marca" data-toggle="modal" data-target="#modal-insert-brand"><i class="fa fa-tags"></i> Crear Marca</a>
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

<!-- Inicio Modal Crear Marca -->
<div class="modal fade" id="modal-insert-brand" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-info text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">CREAR NUEVA MARCA</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-insert-brand">
                    <div class="form-group row">
                        <div class="col-md-6">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Marca:</label>
                            <input type="text" name="ins-bra-nom" id="ins-bra-nom" class="form-control" maxlength="60" placeholder="Nombre de la marca">
                        </div>
                        <div class="col-md-6">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Fecha de Registro:</label>
                            <input type="date" name="ins-bra-fec-reg" id="ins-bra-fec-reg" class="form-control">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12" draggable="true">
                            <p class="text-dark font-weight-bold">(<b class="text-danger">*</b>) Campos obligatorios</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="insertBrandAjax();" class="btn btn-info text-white shut-down-modal" data-dismiss="modal">Guardar</button>
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
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <!-- Encabezado -->
                <h5 class="modal-title text-white" id="staticBackdropLabel">ACTUALIZAR MARCA</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-update-brand">
                    <div class="form-group row">
                        <div class="col-md-12">
                            <input type="number" name="upd-bra-id" id="upd-bra-id" class="form-control upd-bra-id" hidden>
                        </div>
                        <div class="col-md-6">
                            <label draggable="true" class="form-label">Marca:</label>
                            <input type="text" name="upd-bra-nom" id="upd-bra-nom" class="form-control upd-bra-nom" maxlength="60" placeholder="Nombre de la marca">
                        </div>
                        <div class="col-md-6">
                            <label draggable="true" class="form-label">Fecha de Registro:</label>
                            <input  type="date" name="upd-bra-fec-reg" id="upd-bra-fec-reg" class="form-control upd-bra-fec-reg">
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
<!-- Final Modal Actualizar Marca -->

<!-- Inicio Modal Eliminar Marca -->
<div class="modal fade" id="modal-delete-brand" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-danger  text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel" draggable="true">ELIMINAR MARCA</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-delete-brand">
                    <div>
                        <div>
                            <input type="number" class="form-control del-bra-id" name="del-bra-id"  id="del-bra-id" hidden>
                        </div>
                        <div class="center-content" draggable="true">
                            <p class="font-weight-bold">¿Seguro que quieres eliminar la marca "<b class="del-bra-nom"></b>"?
                            </p>
                        </div>
                        <div class="center-content">
                            <p class="font-italic">¡No podrás revertir esto!</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="deleteBrandAjax();" class="btn btn-danger text-white" data-dismiss="modal">Eliminar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div> 
            <!-- Fin Formulario -->
        </div>
    </div>
</div>
<!-- Inicio Modal Eliminar Marca -->