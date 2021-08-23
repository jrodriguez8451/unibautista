<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Cargo</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="inicio">Unibautista</a></li>
                        <li class="breadcrumb-item active">Cargo</li>
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
                                        <th>Cargo</th>
                                        <th>Fecha de Registro</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <!-- Fin Encabezado Tabla -->
                                <!-- Inicio Cuerpo de la Tabla -->
                                <tbody>
                                    <?php while($row = mysqli_fetch_object($query)) {
                                        $cargo_id             = $row->car_id;
                                        $cargo_descripcion    = $row->car_descripcion;
                                        $cargo_fecha_registro = $row->car_fecha_registro;
                                    ?>
                                    <tr>
                                        <td><?php echo $cargo_id; ?></td>
                                        <td><?php echo $cargo_descripcion; ?></td>
                                        <td><?php echo $cargo_fecha_registro; ?></td>
                                        <td> 
                                            <!-- Boton Actualizar Cargo -->
                                            <a type="button" onclick="updatePost(
                                                ('<?php echo $cargo_id; ?>'),
                                                ('<?php echo $cargo_descripcion; ?>'))" class="btn btn-warning text-white btn-warning-animation" title="Actualizar Cargo" data-toggle="modal" data-target="#modal-update-post"><i class="fas fa-pencil-alt"></i>
                                            </a> 
                                            &nbsp;
                                            <!-- Boton Eliminar Cargo -->
                                            <a type="button" onclick="deletePost(
                                                ('<?php echo $cargo_id; ?>'),
                                                ('<?php echo $cargo_descripcion; ?>'))" class="btn btn-danger text-white btn-danger-animation" title="Eliminar Cargo" data-toggle="modal" data-target="#modal-delete-post"><i class="fas fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <?php } ?>
                                </tbody>
                                <!-- Fin Cuerpo Tabla -->
                                <!-- Inicio Footer Tabla -->
                                <tr>
                                    <td colspan ="4"> 
                                        <!-- Boton Registrar Cargo -->
                                        <a type="button" class="btn btn-info text-white btn-info-animation insert-button" title="Crear Cargo" data-toggle="modal" data-target="#modal-insert-post"><i class="fas fa-plus"></i> Crear Cargo</a>
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

<!-- Inicio Modal Registrar Cargo -->
<div class="modal fade" id="modal-insert-post" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-s">
        <div class="modal-content">
            <div class="modal-header bg-info text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">CREAR NUEVO CARGO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-insert-post">
                    <div class="form-group row center-content">
                        <div class="col-md-10 mt-3">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Cargo:</label>
                            <input type="text" name="ins-pos-nom" id="ins-pos-nom" class="form-control" maxlength="60" placeholder="Nombre del cargo">
                        </div>
                    </div>
                    <div class="form-group row mt-5">
                        <div class="col-md-12" draggable="true">
                            <p class="text-dark font-weight-bold">(<b class="text-danger">*</b>) Campo obligatorio.</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="insertPostAjax();" class="btn btn-info text-white shut-down-modal" data-dismiss="modal">Registrar</button>
                        <button type="button" class="btn btn-secondary" onclick="cleanModal();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Crear Cargo -->

<!-- Inicio Modal Actualizar Cargo -->
<div class="modal fade" id="modal-update-post" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-s">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <!-- Encabezado -->
                <h5 class="modal-title text-white" id="staticBackdropLabel">ACTUALIZAR CARGO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-update-post">
                    <div class="form-group row center-content">
                        <div class="col-md-10">
                            <input type="number" name="upd-pos-id" id="upd-pos-id" class="form-control upd-pos-id" hidden>
                        </div>
                        <div class="col-md-9">
                            <label draggable="true" class="form-label">Cargo:</label>
                            <input type="text" name="upd-pos-nom" id="upd-pos-nom" class="form-control upd-pos-nom" maxlength="60" placeholder="Nombre del cargo">
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="updatePostAjax();" class="btn btn-warning text-white shut-down-modal" data-dismiss="modal">Actualizar</button>
                        <button type="button" class="btn btn-secondary" onclick="cleanModal();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Actualizar Cargo -->

<!-- Inicio Modal Eliminar Cargo -->
<div class="modal fade" id="modal-delete-post" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-danger  text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel" draggable="true">ELIMINAR CARGO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-delete-post">
                    <div>
                        <div>
                            <input type="number" class="form-control del-pos-id" name="del-pos-id"  id="del-pos-id" hidden>
                        </div>
                        <div class="center-text" draggable="true">
                            <p class="font-weight-bold">¿Seguro que quieres eliminar el cargo "<b class="del-pos-nom"></b>"?
                            </p>
                        </div>
                        <div class="center-text">
                            <p class="font-italic">¡No podrás revertir esto!</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="deletePostAjax();" class="btn btn-danger text-white" data-dismiss="modal">Eliminar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div> 
            <!-- Fin Formulario -->
        </div>
    </div>
</div>
<!-- Inicio Modal Eliminar Cargo -->