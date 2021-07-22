<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Roles</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="rol">Unibautista</a></li>
                        <li class="breadcrumb-item active">Roles</li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <!-- Inicio Tabla -->
                        <div>        
                            <table id="main-table" class="table table-striped table-bordered table-hover mt-4 table-style" cellspacing="0" width="100%">
                                <!-- Inicio Encabezado Tabla -->
                                <thead id="center-table" class="bg-primary text-white">
                                    <tr>
                                        <th>ID</th>
                                        <th>Rol</th>
                                        <th>Fecha de Registro</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <!-- Fin Encabezado Tabla -->
                                <!-- Inicio Cuerpo de la Tabla -->
                                <tbody>
                                    <?php while($row = mysqli_fetch_object($query)) {
                                        $rol_id      = $row->rol_id;
                                        $rol_des     = $row->rol_descripcion;
                                        $rol_fec_reg = $row->rol_fecha_registro;
                                    ?>
                                    <tr>
                                        <td><?php echo $rol_id; ?></td>
                                        <td><?php echo $rol_des; ?></td>
                                        <td><?php echo $rol_fec_reg; ?></td>
                                        <td> 
                                            <!-- Boton Actualizar Rol -->
                                            <a type="button" onclick="actualizar_Usuario(('<?php echo $rol_id; ?>'),('<?php echo $rol_des; ?>'),('<?php echo $rol_fec_reg; ?>'))" class="btn btn-warning text-white btn-warning-animation" title="Actualizar Rol" data-toggle="modal" data-target="#modal-update-rol"><i class="fas fa-pencil-alt"></i>
                                            </a> 
                                            &nbsp;
                                            <!-- Boton Eliminar Rol -->
                                            <a type="button" onclick="eliminar_Usuario(('<?php echo $rol_id; ?>'))" class="btn btn-danger text-white btn-danger-animation" title="Eliminar Rol" data-toggle="modal" data-target="#modal-delete-rol"><i class="fas fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <?php } ?>
                                </tbody>
                                <!-- Fin Cuerpo Tabla -->
                                <!-- Inicio Footer Tabla -->
                                <tr>
                                    <td colspan = "4"> 
                                        <!-- Boton Crear Rol -->
                                        <a type="button" class="btn btn-info text-white btn-info-animation insert-button" title="Crear Nuevo Rol" data-toggle="modal" data-target="#modal-insert-rol"><i class="fas fa-user-tag  nav-icon"></i> Crear Nuevo Rol</a>
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

<!-- Inicio Modal Insertar Rol -->
<div class="modal fade" id="modal-insert-rol" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-info text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel">CREAR NUEVO ROL</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="formulario_insertar_usuario">
                    <div class="form-group row">
                        <div class="col-md-6">
                            <label class="form-label">* Rol:</label>
                            <input type="text" class="form-control" name="insert_nombre1" id="insert_nombre1" maxlength="40" placeholder="Nombre del rol">
                        </div>
                        <div class="col-md-6">
                            <label draggable="true" class="form-label">* Fecha de Registro:</label>
                            <input class="form-control" type="date" id="example-date-input1" name="fec_ven_insert" id="fec_ven_insert">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12">
                            <p class="text-dark font-weight-bold">(*) Campos obligatorios</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="insertar_usuario_ajax();" class="btn btn-info text-white cerrar_modal" data-dismiss="modal">Guardar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Insertar Rol -->

<!-- Inicio Modal Editar Usuario -->
<div class="modal fade" id="modal-update-rol" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <!-- Encabezado -->
                <h5 class="modal-title text-white" id="staticBackdropLabel">ACTUALIZAR ROL</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="formulario_actualizar_usuario">
                    <div class="form-group row">
                        <div class="col-md-12">
                            <input type="number" class="form-control editar_usuario_id" name="update_usuario_id" id="update_usuario_id" hidden>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Rol:</label>
                            <input type="text" class="form-control editar_usuario_primer_nombre" name="update_nombre1" id="update_nombre1" maxlength="40" placeholder="Nombre del rol">
                        </div>
                        <div class="col-md-6">
                            <label draggable="true" class="form-label">Fecha de Registro:</label>
                            <input class="form-control" type="date" id="example-date-input1" name="fec_ven_insert" id="fec_ven_insert">
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="actualizar_usuario_ajax();" class="btn btn-warning text-white cerrar_modal" data-dismiss="modal">Actualizar</button>
                        <button type="button" onclick="CancelarSelect();" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Editar Usuario -->

<!-- Inicio Modal Eliminar Usuario -->
<div class="modal fade" id="modal-delete-rol" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-danger  text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel">ELIMINAR ROL</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-delete-rol">
                    <div >
                        <div>
                            <input type="number" class="form-control del-rol-id" name="del-rol-id"  id="del-rol-id" hidden>
                        </div>
                        <div class="center-content">
                            <p class="font-weight-bold">¿Seguro que quieres eliminar el rol "<b class="del-rol-des"></b>"?
                            </p>
                        </div>
                        <div class="center-content">
                            <p class="font-italic">¡No podrás revertir esto!</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="deleteRol();" class="btn btn-danger text-white" data-dismiss="modal">Eliminar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div> 
            <!-- Fin Formulario -->
        </div>
    </div>
</div>
<!-- Inicio Modal Eliminar Usuario -->