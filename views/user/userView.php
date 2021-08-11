<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Usuario</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="inicio">Unibautista</a></li>
                        <li class="breadcrumb-item active">Usuario</li>
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
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Correo</th>
                                        <th>Fecha de Registro</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <!-- Fin Encabezado Tabla -->
                                <!-- Inicio Cuerpo de la Tabla -->
                                <tbody>
                                    <?php while($row = mysqli_fetch_object($query)) {
                                        $usuario_id                       = $row->usu_id;
                                        $usuario_numero_documento         = $row->usu_numero_documento;
                                        $usuario_tipo_documento           = $row->tip_doc_descripcion;
                                        $usuario_tipo_documento_foranea   = $row->tbltipo_documento_tip_doc_id ;
                                        $usuario_primer_nombre            = $row->usu_primer_nombre;
                                        $usuario_segundo_nombre           = $row->usu_segundo_nombre;
                                        $usuario_primer_apellido          = $row->usu_primer_apellido;
                                        $usuario_segundo_apellido         = $row->usu_segundo_apellido;
                                        $usuario_celular                  = $row->usu_celular;
                                        $usuario_telefono                 = $row->usu_telefono;
                                        $usuario_direccion                = $row->usu_direccion;
                                        $usuario_correo                   = $row->usu_correo;
                                        $usuario_contrasena               = $row->usu_contrasena;
                                        $usuario_fecha_registro           = $row->usu_fecha_registro;
                                        $usuario_rol                      = $row->rol_descripcion;
                                        $usuario_rol_foranea              = $row->tblrol_rol_id;
                                        $usuario_estado                   = $row->est_gen_descripcion;
                                        $usuario_estado_foranea           = $row->tblestado_general_est_gen_id;
                                    ?>
                                    <tr>
                                        <td><?php echo $usuario_id; ?></td>
                                        <td><?php echo $usuario_primer_nombre; ?></td>
                                        <td><?php echo $usuario_primer_apellido; ?></td>
                                        <td><?php echo $usuario_correo; ?></td>
                                        <td><?php echo $usuario_fecha_registro; ?></td>
                                        <td> 
                                            <a type="button" onclick="detailUser(
                                                ('<?php echo $usuario_id; ?>'),
                                                ('<?php echo $usuario_numero_documento; ?>'),
                                                ('<?php echo $usuario_tipo_documento; ?>'),
                                                ('<?php echo $usuario_primer_nombre; ?>'),
                                                ('<?php echo $usuario_segundo_nombre; ?>'),
                                                ('<?php echo $usuario_primer_apellido; ?>'),
                                                ('<?php echo $usuario_segundo_apellido; ?>'),
                                                ('<?php echo $usuario_celular; ?>'),
                                                ('<?php echo $usuario_telefono; ?>'),
                                                ('<?php echo $usuario_direccion; ?>'),
                                                ('<?php echo $usuario_correo; ?>'),
                                                ('<?php echo $usuario_fecha_registro; ?>'),
                                                ('<?php echo $usuario_rol; ?>'),
                                                ('<?php echo $usuario_estado; ?>'))" class="btn btn-primary text-white btn-primary-animation" title="Información del Usuario" data-toggle="modal" data-target="#modal-detail-user"><i class="fas fa-eye"></i></a>
                                            &nbsp;
                                            <!-- Boton Actualizar Usuario -->
                                            <a type="button" onclick="updateUser(
                                                ('<?php echo $usuario_id; ?>'),
                                                ('<?php echo $usuario_numero_documento; ?>'),
                                                ('<?php echo $usuario_tipo_documento_foranea; ?>'),
                                                ('<?php echo $usuario_primer_nombre; ?>'),
                                                ('<?php echo $usuario_segundo_nombre; ?>'),
                                                ('<?php echo $usuario_primer_apellido; ?>'),
                                                ('<?php echo $usuario_segundo_apellido; ?>'),
                                                ('<?php echo $usuario_celular; ?>'),
                                                ('<?php echo $usuario_telefono; ?>'),
                                                ('<?php echo $usuario_direccion; ?>'),
                                                ('<?php echo $usuario_correo; ?>'),
                                                ('<?php echo $usuario_contrasena; ?>'),
                                                ('<?php echo $usuario_fecha_registro; ?>'),
                                                ('<?php echo $usuario_rol_foranea; ?>'),
                                                ('<?php echo $usuario_estado_foranea; ?>'))" class="btn btn-warning text-white btn-warning-animation" title="Actualizar datos del Usuario" data-toggle="modal" data-target="#modal-update-user"><i class="fas fa-pencil-alt"></i>
                                            </a> 
                                            &nbsp;
                                            <!-- Boton Eliminar Usuario -->
                                            <a type="button" onclick="deleteUser(
                                                ('<?php echo $usuario_id; ?>'),
                                                ('<?php echo $usuario_primer_nombre; ?>'),
                                                ('<?php echo $usuario_segundo_nombre; ?>'),
                                                ('<?php echo $usuario_primer_apellido; ?>'),
                                                ('<?php echo $usuario_segundo_apellido; ?>'))" class="btn btn-danger text-white btn-danger-animation" title="Eliminar Usuario" data-toggle="modal" data-target="#modal-delete-user"><i class="fas fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <?php } ?>
                                </tbody>
                                <!-- Fin Cuerpo Tabla -->
                                <!-- Inicio Footer Tabla -->
                                <tr>
                                    <td colspan = "6"> 
                                        <!-- Boton Crear Usuario -->
                                        <a type="button" class="btn btn-info text-white btn-info-animation insert-button" title="Crear Nuevo Usuario" data-toggle="modal" data-target="#modal-insert-user"><i class="fas fa-user-plus"></i> Crear Usuario</a>
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

<!-- Inicio Modal Insertar Usuario -->
<div class="modal fade" id="modal-insert-user" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-info text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">CREAR NUEVO USUARIO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-insert-user">
                    <div class="form-group row">
                        <div class="col-md-3">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Número de Documento:</label>
                            <input type="text" name="ins-usu-num-doc" id="ins-usu-num-doc" class="form-control" maxlength="10" placeholder="Número de documento">
                        </div>
                        <div class="col-md-3">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Tipo de Documento:</label>
                            <select id="ins-usu-tip-doc" name="ins-usu-tip-doc" class="form-control">
                                <option>Seleccione...</option>
                                <?php 
                                    // PHP foreach(): Bucles para recorrer arrays y objetos. Con la función PHP foreach() podemos recorrer los diferentes tipos de arrays y objetos de una manera controlada.

                                    //La variable $estados contiene una consulta que viene de la base datos, con el foreach la recorro como si fuese un arreglo, es necesario traer el id y la descripcion del campo que queremos pintar en el selector
                                    foreach ($document_type as $query){
                                        echo "<option value=".$query['tip_doc_id'].">".$query['tip_doc_descripcion']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Primer Nombre:</label>
                            <input type="text" name="ins-usu-pri-nom" id="ins-usu-pri-nom" class="form-control" maxlength="60" placeholder="Primer nombre">
                        </div>
                        <div class="col-md-3">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="ins-usu-seg-nom" id="ins-usu-seg-nom" class="form-control" maxlength="60" placeholder="Segundo nombre">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-3">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Primer Apellido:</label>
                            <input type="text" name="ins-usu-pri-ape" id="ins-usu-pri-ape" class="form-control" maxlength="60" placeholder="Primer apellido">
                        </div>
                        <div class="col-md-3">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Segundo Apellido:</label>
                            <input type="text" name="ins-usu-seg-ape" id="ins-usu-seg-ape" class="form-control" maxlength="60" placeholder="Segundo apellido">
                        </div>
                        <div class="col-md-3">
                            <label draggable="true" class="form-label">Celular:</label>
                            <input type="text" name="ins-usu-cel" id="ins-usu-cel" class="form-control" maxlength="10" placeholder="Número de celular">
                        </div>
                        <div class="col-md-3">
                            <label draggable="true" class="form-label">Teléfono:</label>
                            <input type="text" name="ins-usu-tel" id="ins-usu-tel" class="form-control" maxlength="7" placeholder="Número de teléfono">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-3">
                            <label  draggable="true" class="form-label">Dirección:</label>
                            <input type="text" name="ins-usu-dir" id="ins-usu-dir" class="form-control" maxlength="60" placeholder="Dirección de residencia">
                        </div>
                        <div class="col-md-3">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Correo:</label>
                            <input type="text" name="ins-usu-cor" id="ins-usu-cor" class="form-control" maxlength="45" placeholder="Correo electrónico">
                        </div>
                        <div class="col-md-3">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Contraseña:</label>
                            <div class="input-group">
                                <input name="ins-usu-con" id="ins-usu-con" type="password" Class="form-control" maxlength="50" placeholder="Contraseña">
                                <div class="input-group-append">
                                    <button class="btn btn-info" type="button" onclick="showPasswordInsert();"> <span class="fa fa-eye-slash icon"></span> </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Rol:</label>
                            <select id="ins-usu-rol" name="ins-usu-rol" class="form-control">
                                <option>Seleccione...</option>
                                <?php 
                                    // PHP foreach(): Bucles para recorrer arrays y objetos. Con la función PHP foreach() podemos recorrer los diferentes tipos de arrays y objetos de una manera controlada.

                                    //La variable $estados contiene una consulta que viene de la base datos, con el foreach la recorro como si fuese un arreglo, es necesario traer el id y la descripcion del campo que queremos pintar en el selector
                                    foreach ($role as $query){
                                        echo "<option value=".$query['rol_id'].">".$query['rol_descripcion']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-3">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Fecha de Registro:</label>
                            <input type="date" name="ins-usu-fec-reg" id="ins-usu-fec-reg" class="form-control">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12" draggable="true">
                            <p class="text-dark font-weight-bold">(<b class="text-danger">*</b>) Campos obligatorios</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="insertUserAjax();" class="btn btn-info text-white shut-down-modal" data-dismiss="modal">Guardar</button>
                        <button type="button" class="btn btn-secondary" onclick="cleanModal();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Insertar Usuario -->

<!-- Inicio Modal Detalle Usuario -->
<div class="modal fade" id="modal-detail-user" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-primary text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">INFORMACIÓN DEL USUARIO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-detail-user">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">ID:</label>
                            <input type="text" name="det-usu-id" id="det-usu-id" class="form-control det-usu-id" maxlength="60" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="det-usu-num-doc" id="det-usu-num-doc" class="form-control det-usu-num-doc" maxlength="60" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Tipo de Documento:</label>
                            <input type="text" name="det-usu-tip-doc" id="det-usu-tip-doc" class="form-control det-usu-tip-doc" maxlength="60" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="det-usu-pri-nom" id="det-usu-pri-nom" class="form-control det-usu-pri-nom" maxlength="60" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="det-usu-seg-nom" id="det-usu-seg-nom" class="form-control det-usu-seg-nom" maxlength="60" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="det-usu-pri-ape" id="det-usu-pri-ape" class="form-control det-usu-pri-ape" maxlength="60" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="det-usu-seg-ape" id="det-usu-seg-ape" class="form-control det-usu-seg-ape" maxlength="60" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Celular:</label>
                            <input type="text" name="det-usu-cel" id="det-usu-cel" class="form-control det-usu-cel" maxlength="60" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Teléfono:</label>
                            <input type="text" name="det-usu-tel" id="det-usu-tel" class="form-control det-usu-tel" maxlength="60" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Dirección:</label>
                            <input type="text" name="det-usu-dir" id="det-usu-dir" class="form-control det-usu-dir" maxlength="60" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Correo:</label>
                            <input type="text" name="det-usu-cor" id="det-usu-cor" class="form-control det-usu-cor" maxlength="60" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Rol:</label>
                            <input type="text" name="det-usu-rol" id="det-usu-rol" class="form-control det-usu-rol" maxlength="60" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Estado:</label>
                            <input type="text" name="det-usu-est" id="det-usu-est" class="form-control det-usu-est" maxlength="60" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha de Registro:</label>
                            <input type="date" name="det-usu-fec-reg" id="det-usu-fec-reg" class="form-control det-usu-fec-reg" readonly>
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
<!-- Final Modal Detalle Usuario -->

<!-- Inicio Modal Editar Usuario -->
<div class="modal fade" id="modal-update-user" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <!-- Encabezado -->
                <h5 class="modal-title text-white" id="staticBackdropLabel">ACTUALIZAR DATOS DEL USUARIO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-update-user">
                    <div class="form-group row">
                        <div>
                            <input type="number" class="form-control upd-usu-id" name="upd-usu-id"  id="upd-usu-id" hidden>
                        </div>
                        <div class="col-md-3">
                            <label  draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="upd-usu-num-doc" id="upd-usu-num-doc" class="form-control upd-usu-num-doc" maxlength="10" placeholder="Número de documento">
                        </div>
                        <div class="col-md-3">
                            <label draggable="true" class="form-label">Tipo de Documento:</label>
                            <select id="upd-usu-tip-doc" name="upd-usu-tip-doc" class="form-control restart-select">
                                <?php 
                                    // PHP foreach(): Bucles para recorrer arrays y objetos. Con la función PHP foreach() podemos recorrer los diferentes tipos de arrays y objetos de una manera controlada.

                                    //La variable $estados contiene una consulta que viene de la base datos, con el foreach la recorro como si fuese un arreglo, es necesario traer el id y la descripcion del campo que queremos pintar en el selector
                                    foreach ($document_type as $query){
                                        echo "<option value=".$query['tip_doc_id'].">".$query['tip_doc_descripcion']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="upd-usu-pri-nom" id="upd-usu-pri-nom" class="form-control upd-usu-pri-nom" maxlength="60" placeholder="Primer nombre">
                        </div>
                        <div class="col-md-3">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="upd-usu-seg-nom" id="upd-usu-seg-nom" class="form-control upd-usu-seg-nom" maxlength="60" placeholder="Segundo nombre">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-3">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="upd-usu-pri-ape" id="upd-usu-pri-ape" class="form-control upd-usu-pri-ape" maxlength="60" placeholder="Primer apellido">
                        </div>
                        <div class="col-md-3">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="upd-usu-seg-ape" id="upd-usu-seg-ape" class="form-control upd-usu-seg-ape" maxlength="60" placeholder="Segundo apellido">
                        </div>
                        <div class="col-md-3">
                            <label draggable="true" class="form-label">Celular:</label>
                            <input type="text" name="upd-usu-cel" id="upd-usu-cel" class="form-control upd-usu-cel" maxlength="10" placeholder="Número de celular">
                        </div>
                        <div class="col-md-3">
                            <label draggable="true" class="form-label">Teléfono:</label>
                            <input type="text" name="upd-usu-tel" id="upd-usu-tel" class="form-control upd-usu-tel" maxlength="7" placeholder="Número de teléfono">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-3">
                            <label  draggable="true" class="form-label">Dirección:</label>
                            <input type="text" name="upd-usu-dir" id="upd-usu-dir" class="form-control upd-usu-dir" maxlength="60" placeholder="Dirección de residencia">
                        </div>
                        <div class="col-md-3">
                            <label draggable="true" class="form-label">Correo:</label>
                            <input type="text" name="upd-usu-cor" id="upd-usu-cor" class="form-control upd-usu-cor" maxlength="45" placeholder="Correo electrónico">
                        </div>
                        <div class="col-md-3">
                            <label draggable="true" class="form-label">Contraseña:</label>
                            <div class="input-group">
                                <input name="upd-usu-con" id="upd-usu-con" type="password" Class="form-control upd-usu-con" maxlength="50" placeholder="Contraseña">
                                <div class="input-group-append">
                                    <button class="btn btn-warning text-white" type="button" onclick="showPasswordUpdate();"> <span class="fa fa-eye-slash icon"></span> </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <label  draggable="true" class="form-label">Rol:</label>
                            <select id="upd-usu-rol" name="upd-usu-rol" class="form-control restart-select">
                                <?php 
                                    // PHP foreach(): Bucles para recorrer arrays y objetos. Con la función PHP foreach() podemos recorrer los diferentes tipos de arrays y objetos de una manera controlada.

                                    //La variable $estados contiene una consulta que viene de la base datos, con el foreach la recorro como si fuese un arreglo, es necesario traer el id y la descripcion del campo que queremos pintar en el selector
                                    foreach ($role as $query){
                                        echo "<option value=".$query['rol_id'].">".$query['rol_descripcion']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-3">
                            <label draggable="true" class="form-label">Fecha de Registro:</label>
                            <input type="date" name="upd-usu-fec-reg" id="upd-usu-fec-reg" class="form-control upd-usu-fec-reg">
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="updateUserAjax();" class="btn btn-warning text-white shut-down-modal" data-dismiss="modal">Actualizar</button>
                        <button type="button" class="btn btn-secondary" onclick="restartSelect();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Editar Usuario -->

<!-- Inicio Modal Eliminar Usuario -->
<div class="modal fade" id="modal-delete-user" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-danger  text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel" draggable="true">ELIMINAR USUARIO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-delete-user">
                    <div>
                        <div>
                            <input type="number" class="form-control del-usu-id" name="del-usu-id"  id="del-usu-id" hidden>
                        </div>
                        <div class="center-content" draggable="true">
                            <p class="font-weight-bold">¿Seguro que quieres eliminar al usuario "<b class="del-usu-pri_nom"></b><b>&nbsp;</b><b class="del-usu-seg_nom"></b><b>&nbsp;</b><b class="del-usu-pri_ape"></b><b>&nbsp;</b><b class="del-usu-seg_ape"></b>"?
                            </p>
                        </div>
                        <div class="center-content">
                            <p class="font-italic">¡No podrás revertir esto!</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="deleteUserAjax();" class="btn btn-danger text-white" data-dismiss="modal">Eliminar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div> 
            <!-- Fin Formulario -->
        </div>
    </div>
</div>
<!-- Inicio Modal Eliminar Usuario -->