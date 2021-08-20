<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Familia del Empleado</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="inicio">Unibautista</a></li>
                        <li class="breadcrumb-item active">Familia del Empleado</li>
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
                                        <th>Nombre del Empleado</th>
                                        <th>Fecha de Registro</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <!-- Fin Encabezado Tabla -->
                                <!-- Inicio Cuerpo de la Tabla -->
                                <tbody>
                                    <?php while($row = mysqli_fetch_object($query)) {
                                        $fam_emp_id                         = $row->fam_emp_id ;
                                        $fam_emp_nombre_completo_empleado   = $row->fam_emp_nombre_completo_empleado;
                                        $fam_emp_tipo_documento_familiar1   = $row->fam_emp_tipo_documento_familiar1;
                                        $fam_emp_numero_documento_familiar1 = $row->fam_emp_numero_documento_familiar1 ;
                                        $fam_emp_primer_nombre_familiar1    = $row->fam_emp_primer_nombre_familiar1;
                                        $fam_emp_segundo_nombre_familiar1   = $row->fam_emp_segundo_nombre_familiar1;
                                        $fam_emp_primer_apellido_familiar1  = $row->fam_emp_primer_apellido_familiar1;
                                        $fam_emp_segundo_apellido_familiar1 = $row->fam_emp_segundo_apellido_familiar1;
                                        $fam_emp_tipo_documento_familiar2   = $row->fam_emp_tipo_documento_familiar2;
                                        $fam_emp_numero_documento_familiar2 = $row->fam_emp_numero_documento_familiar2;
                                        $fam_emp_primer_nombre_familiar2    = $row->fam_emp_primer_nombre_familiar2;
                                        $fam_emp_segundo_nombre_familiar2   = $row->fam_emp_segundo_nombre_familiar2;
                                        $fam_emp_primer_apellido_familiar2  = $row->fam_emp_primer_apellido_familiar2;
                                        $fam_emp_segundo_apellido_familiar2 = $row->fam_emp_segundo_apellido_familiar2;
                                        $fam_emp_tipo_documento_familiar3   = $row->fam_emp_tipo_documento_familiar3;
                                        $fam_emp_numero_documento_familiar3 = $row->fam_emp_numero_documento_familiar3;
                                        $fam_emp_primer_nombre_familiar3    = $row->fam_emp_primer_nombre_familiar3;
                                        $fam_emp_segundo_nombre_familiar3   = $row->fam_emp_segundo_nombre_familiar3;
                                        $fam_emp_primer_apellido_familiar3  = $row->fam_emp_primer_apellido_familiar3;
                                        $fam_emp_segundo_apellido_familiar3 = $row->fam_emp_segundo_apellido_familiar3;
                                        $fam_emp_tipo_documento_familiar4   = $row->fam_emp_tipo_documento_familiar4;
                                        $fam_emp_numero_documento_familiar4 = $row->fam_emp_numero_documento_familiar4;
                                        $fam_emp_primer_nombre_familiar4    = $row->fam_emp_primer_nombre_familiar4;
                                        $fam_emp_segundo_nombre_familiar4   = $row->fam_emp_segundo_nombre_familiar4;
                                        $fam_emp_primer_apellido_familiar4  = $row->fam_emp_primer_apellido_familiar4;
                                        $fam_emp_segundo_apellido_familiar4 = $row->fam_emp_segundo_apellido_familiar4;
                                        $fam_emp_tipo_documento_familiar5   = $row->fam_emp_tipo_documento_familiar5;
                                        $fam_emp_numero_documento_familiar5 = $row->fam_emp_numero_documento_familiar5;
                                        $fam_emp_primer_nombre_familiar5    = $row->fam_emp_primer_nombre_familiar5;
                                        $fam_emp_segundo_nombre_familiar5   = $row->fam_emp_segundo_nombre_familiar5;
                                        $fam_emp_primer_apellido_familiar5  = $row->fam_emp_primer_apellido_familiar5;
                                        $fam_emp_segundo_apellido_familiar5 = $row->fam_emp_segundo_apellido_familiar5;
                                        $tblestado_general_est_gen_id       = $row->tblestado_general_est_gen_id ;
                                        $fam_emp_estado_descripcion         = $row->est_gen_descripcion;
                                        $fam_emp_fecha_registro             = $row->fam_emp_fecha_registro;
                                    ?>
                                    <tr>
                                        <td><?php echo $fam_emp_id; ?></td>
                                        <td><?php echo $fam_emp_nombre_completo_empleado; ?></td>
                                        <td><?php echo $fam_emp_fecha_registro; ?></td>
                                        <td> 
                                            <!-- Boton Detalle Usuario -->
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
                                                ('<?php echo $usuario_estado; ?>'))" class="btn btn-primary text-white btn-primary-animation" title="Información de la Familia del Empleado" data-toggle="modal" data-target="#modal-detail-user"><i class="fas fa-eye"></i></a>
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
                                                ('<?php echo $usuario_estado_foranea; ?>'))" class="btn btn-warning text-white btn-warning-animation" title="Actualizar datos de la Familia del Empleado" data-toggle="modal" data-target="#modal-update-user"><i class="fas fa-pencil-alt"></i>
                                            </a> 
                                            &nbsp;
                                            <!-- Boton Eliminar Usuario -->
                                            <a type="button" onclick="deleteUser(
                                                ('<?php echo $usuario_id; ?>'),
                                                ('<?php echo $usuario_primer_nombre; ?>'),
                                                ('<?php echo $usuario_segundo_nombre; ?>'),
                                                ('<?php echo $usuario_primer_apellido; ?>'),
                                                ('<?php echo $usuario_segundo_apellido; ?>'))" class="btn btn-danger text-white btn-danger-animation" title="Eliminar Familia del Empleado" data-toggle="modal" data-target="#modal-delete-user"><i class="fas fa-trash"></i>
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
                                        <a type="button" class="btn btn-info text-white btn-info-animation insert-button" title="Registrar Familia del Empleado" data-toggle="modal" data-target="#modal-insert-family-employee"><i class="fas fa-users"></i> Registrar Familia del Empleado</a>
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
<div class="modal fade" id="modal-insert-family-employee" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-info text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">REGISTRAR FAMILIA DEL EMPLEADO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-insert-family-employee">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label for="Empleado" class="text-dark">Empleado</label>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4"></div>
                        <div class="col-md-4 center-text">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Nombre Completo del Empleado:</label>
                            <input type="text" name="ins-usu-num" id="ins-usu-num   " class="form-control" maxlength="60" placeholder="Nombre completo del empleado">
                        </div>
                        <div class="col-md-4"></div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-2"></div>
                    </div>
                    <hr>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label for="Familiar #1" class="text-dark">Familiar #1</label>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Tipo de Documento:</label>
                            <select id="ins-usu-tip-doc" name="ins-usu-tip-doc" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <option value="Cedula de Ciudadania">Cedula de Ciudadania</option>
                                <option value="Cedula de Extranjeria Colombiana">Cedula de Extranjeria Colombiana</option>
                                <option value="Cedula Extranjera">Cedula Extranjera</option>
                                <option value="Documento Extranjero">Documento Extranjero</option>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="Registro Civil">Registro Civil</option>
                                <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="ins-usu-pri-nom" id="ins-usu-pri-nom" class="form-control" maxlength="60" placeholder="Número de documento">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="ins-usu-pri-nom" id="ins-usu-pri-nom" class="form-control" maxlength="60" placeholder="Primer nombre">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="ins-usu-seg-nom" id="ins-usu-seg-nom" class="form-control" maxlength="60" placeholder="Segundo nombre">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="ins-usu-pri-ape" id="ins-usu-pri-ape" class="form-control" maxlength="60" placeholder="Primer apellido">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="ins-usu-seg-ape" id="ins-usu-seg-ape" class="form-control" maxlength="60" placeholder="Segundo apellido">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-3"></div>
                    </div>
                    <hr>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label for="Familiar #2" class="text-dark">Familiar #2</label>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Tipo de Documento:</label>
                            <select id="ins-usu-tip-doc" name="ins-usu-tip-doc" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <option value="Cedula de Ciudadania">Cedula de Ciudadania</option>
                                <option value="Cedula de Extranjeria Colombiana">Cedula de Extranjeria Colombiana</option>
                                <option value="Cedula Extranjera">Cedula Extranjera</option>
                                <option value="Documento Extranjero">Documento Extranjero</option>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="Registro Civil">Registro Civil</option>
                                <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="ins-usu-pri-nom" id="ins-usu-pri-nom" class="form-control" maxlength="60" placeholder="Número de documento">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="ins-usu-pri-nom" id="ins-usu-pri-nom" class="form-control" maxlength="60" placeholder="Primer nombre">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="ins-usu-seg-nom" id="ins-usu-seg-nom" class="form-control" maxlength="60" placeholder="Segundo nombre">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="ins-usu-pri-ape" id="ins-usu-pri-ape" class="form-control" maxlength="60" placeholder="Primer apellido">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="ins-usu-seg-ape" id="ins-usu-seg-ape" class="form-control" maxlength="60" placeholder="Segundo apellido">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-3"></div>
                    </div>
                    <hr>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label for="Familiar #3" class="text-dark">Familiar #3</label>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Tipo de Documento:</label>
                            <select id="ins-usu-tip-doc" name="ins-usu-tip-doc" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <option value="Cedula de Ciudadania">Cedula de Ciudadania</option>
                                <option value="Cedula de Extranjeria Colombiana">Cedula de Extranjeria Colombiana</option>
                                <option value="Cedula Extranjera">Cedula Extranjera</option>
                                <option value="Documento Extranjero">Documento Extranjero</option>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="Registro Civil">Registro Civil</option>
                                <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="ins-usu-pri-nom" id="ins-usu-pri-nom" class="form-control" maxlength="60" placeholder="Número de documento">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="ins-usu-pri-nom" id="ins-usu-pri-nom" class="form-control" maxlength="60" placeholder="Primer nombre">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="ins-usu-seg-nom" id="ins-usu-seg-nom" class="form-control" maxlength="60" placeholder="Segundo nombre">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="ins-usu-pri-ape" id="ins-usu-pri-ape" class="form-control" maxlength="60" placeholder="Primer apellido">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="ins-usu-seg-ape" id="ins-usu-seg-ape" class="form-control" maxlength="60" placeholder="Segundo apellido">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-3"></div>
                    </div>
                    <hr>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label for="Familiar #4" class="text-dark">Familiar #4</label>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Tipo de Documento:</label>
                            <select id="ins-usu-tip-doc" name="ins-usu-tip-doc" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <option value="Cedula de Ciudadania">Cedula de Ciudadania</option>
                                <option value="Cedula de Extranjeria Colombiana">Cedula de Extranjeria Colombiana</option>
                                <option value="Cedula Extranjera">Cedula Extranjera</option>
                                <option value="Documento Extranjero">Documento Extranjero</option>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="Registro Civil">Registro Civil</option>
                                <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="ins-usu-pri-nom" id="ins-usu-pri-nom" class="form-control" maxlength="60" placeholder="Número de documento">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="ins-usu-pri-nom" id="ins-usu-pri-nom" class="form-control" maxlength="60" placeholder="Primer nombre">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="ins-usu-pri-ape" id="ins-usu-pri-ape" class="form-control" maxlength="60" placeholder="Primer apellido">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="ins-usu-seg-ape" id="ins-usu-seg-ape" class="form-control" maxlength="60" placeholder="Segundo apellido">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="ins-usu-seg-nom" id="ins-usu-seg-nom" class="form-control" maxlength="60" placeholder="Segundo nombre">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-4" draggable="true">
                            <p class="text-dark font-weight-bold">(<b class="text-danger">*</b>) Campo obligatorio.</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" id="insert-user" onclick="insertUserAjax();" class="btn btn-info text-white shut-down-modal" data-dismiss="modal">Registrar</button>
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
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">INFORMACIÓN DE LA FAMILIA DEL EMPLEADO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-detail-user">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label for="Empleado" class="text-dark">Empleado</label>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4"></div>
                        <div class="col-md-4 center-text">
                            <label  draggable="true" class="form-label">Nombre Completo del Empleado:</label>
                            <input type="text" name="ins-usu-num" id="ins-usu-num " class="form-control" readonly>
                        </div>
                        <div class="col-md-4"></div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-2"></div>
                    </div>
                    <hr>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label for="Familiar #1" class="text-dark">Familiar #1</label>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Tipo de Documento:</label>
                            <input type="text" name="ins-usu-pri-nom" id="ins-usu-pri-nom" class="form-control" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="ins-usu-pri-nom" id="ins-usu-pri-nom" class="form-control" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="ins-usu-pri-nom" id="ins-usu-pri-nom" class="form-control" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="ins-usu-seg-nom" id="ins-usu-seg-nom" class="form-control" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="ins-usu-pri-ape" id="ins-usu-pri-ape" class="form-control" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="ins-usu-seg-ape" id="ins-usu-seg-ape" class="form-control" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-3"></div>
                    </div>
                    <hr>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label for="Familiar #2" class="text-dark">Familiar #2</label>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Tipo de Documento:</label>
                            <input type="text" name="ins-usu-pri-nom" id="ins-usu-pri-nom" class="form-control" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="ins-usu-pri-nom" id="ins-usu-pri-nom" class="form-control" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="ins-usu-pri-nom" id="ins-usu-pri-nom" class="form-control" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="ins-usu-seg-nom" id="ins-usu-seg-nom" class="form-control" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="ins-usu-pri-ape" id="ins-usu-pri-ape" class="form-control" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="ins-usu-seg-ape" id="ins-usu-seg-ape" class="form-control" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-3"></div>
                    </div>
                    <hr>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label for="Familiar #3" class="text-dark">Familiar #3</label>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Tipo de Documento:</label>
                            <input type="text" name="ins-usu-pri-nom" id="ins-usu-pri-nom" class="form-control" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="ins-usu-pri-nom" id="ins-usu-pri-nom" class="form-control" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="ins-usu-pri-nom" id="ins-usu-pri-nom" class="form-control" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="ins-usu-seg-nom" id="ins-usu-seg-nom" class="form-control" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="ins-usu-pri-ape" id="ins-usu-pri-ape" class="form-control" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="ins-usu-seg-ape" id="ins-usu-seg-ape" class="form-control" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-3"></div>
                    </div>
                    <hr>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label for="Familiar #4" class="text-dark">Familiar #4</label>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Tipo de Documento:</label>
                            <input type="text" name="ins-usu-pri-nom" id="ins-usu-pri-nom" class="form-control" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="ins-usu-pri-nom" id="ins-usu-pri-nom" class="form-control" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="ins-usu-pri-nom" id="ins-usu-pri-nom" class="form-control" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="ins-usu-pri-ape" id="ins-usu-pri-ape" class="form-control" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="ins-usu-seg-ape" id="ins-usu-seg-ape" class="form-control" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="ins-usu-seg-nom" id="ins-usu-seg-nom" class="form-control" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-3"></div>
                    </div>
                    <hr>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">ID:</label>
                            <input type="text" name="det-usu-id" id="det-usu-id" class="form-control det-usu-id" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Estado:</label>
                            <input type="text" name="det-usu-est" id="det-usu-est" class="form-control det-usu-est" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha de Registro:</label>
                            <input type="date" name="det-usu-fec-reg" id="det-usu-fec-reg" class="form-control det-usu-fec-reg" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-3"></div>
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
                        <div class="col-md-3">
                            <input type="number" class="form-control upd-usu-id" name="upd-usu-id"  id="upd-usu-id" hidden>
                        </div>
                    </div>
                    <div class="form-group row">
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
                                <input name="upd-usu-con" id="upd-usu-con" type="password" Class="form-control upd-usu-con" maxlength="15" placeholder="Contraseña">
                                <div class="input-group-append">
                                    <button class="btn btn-warning text-white" type="button" onclick="showPasswordUpdate();" title="Ver contraseña"> <span class="fa fa-eye-slash icon"></span> </button>
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
                        <div class="col-md-12 mt-3"></div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" id="update-user" onclick="updateUserAjax();" class="btn btn-warning text-white shut-down-modal" data-dismiss="modal">Actualizar</button>
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
                <h5 class="modal-title" id="staticBackdropLabel" draggable="true">ELIMINAR FAMILIA DEL TRABAJADOR</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-delete-user">
                    <div>
                        <div>
                            <input type="number" class="form-control del-usu-id" name="del-usu-id"  id="del-usu-id" hidden>
                        </div>
                        <div class="center-text" draggable="true">
                            <p class="font-weight-bold">¿Seguro que quieres eliminar la Familia del Empleado "<b class="del-usu-pri_nom"></b><b>&nbsp;</b><b class="del-usu-seg_nom"></b><b>&nbsp;</b><b class="del-usu-pri_ape"></b><b>&nbsp;</b><b class="del-usu-seg_ape"></b>"?
                            </p>
                        </div>
                        <div class="center-text">
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