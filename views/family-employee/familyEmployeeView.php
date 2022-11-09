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
                        <li class="breadcrumb-item active">Familia del Empleado</li>
                        <li class="breadcrumb-item"><a href="inicio">Inicio</a></li>
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
                                        <th>Documento</th>
                                        <th>Empleado</th>
                                        <th>Fecha de Registro</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <!-- Fin Encabezado Tabla -->
                                <!-- Inicio Cuerpo de la Tabla -->
                                <tbody>
                                    <?php while($row = mysqli_fetch_object($query)) {
                                        $fam_emp_id                         = $row->fam_emp_id;
                                        $fam_emp_nombre_completo_empleado   = $row->fam_emp_nombre_completo_empleado;
                                        $fam_emp_numero_documento_empleado  = $row->fam_emp_numero_documento_empleado;
                                        $fam_emp_tipo_documento_familiar1   = $row->fam_emp_tipo_documento_familiar1;
                                        $fam_emp_numero_documento_familiar1 = $row->fam_emp_numero_documento_familiar1;
                                        $fam_emp_primer_nombre_familiar1    = $row->fam_emp_primer_nombre_familiar1;
                                        $fam_emp_segundo_nombre_familiar1   = $row->fam_emp_segundo_nombre_familiar1;
                                        $fam_emp_primer_apellido_familiar1  = $row->fam_emp_primer_apellido_familiar1;
                                        $fam_emp_segundo_apellido_familiar1 = $row->fam_emp_segundo_apellido_familiar1;
                                        $fam_emp_parentesco_familiar1       = $row->fam_emp_parentesco_familiar1;
                                        $fam_emp_tipo_documento_familiar2   = $row->fam_emp_tipo_documento_familiar2;
                                        $fam_emp_numero_documento_familiar2 = $row->fam_emp_numero_documento_familiar2;
                                        $fam_emp_primer_nombre_familiar2    = $row->fam_emp_primer_nombre_familiar2;
                                        $fam_emp_segundo_nombre_familiar2   = $row->fam_emp_segundo_nombre_familiar2;
                                        $fam_emp_primer_apellido_familiar2  = $row->fam_emp_primer_apellido_familiar2;
                                        $fam_emp_segundo_apellido_familiar2 = $row->fam_emp_segundo_apellido_familiar2;
                                        $fam_emp_parentesco_familiar2       = $row->fam_emp_parentesco_familiar2;
                                        $fam_emp_tipo_documento_familiar3   = $row->fam_emp_tipo_documento_familiar3;
                                        $fam_emp_numero_documento_familiar3 = $row->fam_emp_numero_documento_familiar3;
                                        $fam_emp_primer_nombre_familiar3    = $row->fam_emp_primer_nombre_familiar3;
                                        $fam_emp_segundo_nombre_familiar3   = $row->fam_emp_segundo_nombre_familiar3;
                                        $fam_emp_primer_apellido_familiar3  = $row->fam_emp_primer_apellido_familiar3;
                                        $fam_emp_segundo_apellido_familiar3 = $row->fam_emp_segundo_apellido_familiar3;
                                        $fam_emp_parentesco_familiar3       = $row->fam_emp_parentesco_familiar3;
                                        $fam_emp_tipo_documento_familiar4   = $row->fam_emp_tipo_documento_familiar4;
                                        $fam_emp_numero_documento_familiar4 = $row->fam_emp_numero_documento_familiar4;
                                        $fam_emp_primer_nombre_familiar4    = $row->fam_emp_primer_nombre_familiar4;
                                        $fam_emp_segundo_nombre_familiar4   = $row->fam_emp_segundo_nombre_familiar4;
                                        $fam_emp_primer_apellido_familiar4  = $row->fam_emp_primer_apellido_familiar4;
                                        $fam_emp_segundo_apellido_familiar4 = $row->fam_emp_segundo_apellido_familiar4;
                                        $fam_emp_parentesco_familiar4       = $row->fam_emp_parentesco_familiar4;
                                        $fam_emp_tipo_documento_familiar5   = $row->fam_emp_tipo_documento_familiar5;
                                        $fam_emp_numero_documento_familiar5 = $row->fam_emp_numero_documento_familiar5;
                                        $fam_emp_primer_nombre_familiar5    = $row->fam_emp_primer_nombre_familiar5;
                                        $fam_emp_segundo_nombre_familiar5   = $row->fam_emp_segundo_nombre_familiar5;
                                        $fam_emp_primer_apellido_familiar5  = $row->fam_emp_primer_apellido_familiar5;
                                        $fam_emp_segundo_apellido_familiar5 = $row->fam_emp_segundo_apellido_familiar5;
                                        $fam_emp_parentesco_familiar5       = $row->fam_emp_parentesco_familiar5;
                                        $tblestado_general_est_gen_id       = $row->tblestado_general_est_gen_id;
                                        $fam_emp_estado_descripcion         = $row->est_gen_descripcion;
                                        $fam_emp_fecha_registro             = $row->fam_emp_fecha_registro;
                                    ?>
                                    <tr>
                                        <td><?php echo $fam_emp_id; ?></td>
                                        <td><?php echo $fam_emp_numero_documento_empleado; ?></td>
                                        <td><?php echo $fam_emp_nombre_completo_empleado; ?></td>
                                        <td><?php echo $fam_emp_fecha_registro; ?></td>
                                        <td> 
                                            <!-- Boton Detalle Familia del Empleado --> 
                                            <a type="button" onclick="detailFamilyEmployee(
                                                ('<?php echo $fam_emp_numero_documento_empleado; ?>'),
                                                ('<?php echo $fam_emp_nombre_completo_empleado; ?>'),
                                                ('<?php echo $fam_emp_tipo_documento_familiar1; ?>'),
                                                ('<?php echo $fam_emp_numero_documento_familiar1; ?>'),
                                                ('<?php echo $fam_emp_primer_nombre_familiar1; ?>'),
                                                ('<?php echo $fam_emp_segundo_nombre_familiar1; ?>'),
                                                ('<?php echo $fam_emp_primer_apellido_familiar1; ?>'),
                                                ('<?php echo $fam_emp_segundo_apellido_familiar1; ?>'),
                                                ('<?php echo $fam_emp_parentesco_familiar1; ?>'),
                                                ('<?php echo $fam_emp_tipo_documento_familiar2; ?>'),
                                                ('<?php echo $fam_emp_numero_documento_familiar2; ?>'),
                                                ('<?php echo $fam_emp_primer_nombre_familiar2; ?>'),
                                                ('<?php echo $fam_emp_segundo_nombre_familiar2; ?>'),
                                                ('<?php echo $fam_emp_primer_apellido_familiar2; ?>'),
                                                ('<?php echo $fam_emp_segundo_apellido_familiar2; ?>'),
                                                ('<?php echo $fam_emp_parentesco_familiar2; ?>'),
                                                ('<?php echo $fam_emp_tipo_documento_familiar3; ?>'),
                                                ('<?php echo $fam_emp_numero_documento_familiar3; ?>'),
                                                ('<?php echo $fam_emp_primer_nombre_familiar3 ; ?>'),
                                                ('<?php echo $fam_emp_segundo_nombre_familiar3; ?>'),
                                                ('<?php echo $fam_emp_primer_apellido_familiar3; ?>'),
                                                ('<?php echo $fam_emp_segundo_apellido_familiar3; ?>'),
                                                ('<?php echo $fam_emp_parentesco_familiar3; ?>'),
                                                ('<?php echo $fam_emp_tipo_documento_familiar4; ?>'),
                                                ('<?php echo $fam_emp_numero_documento_familiar4; ?>'),
                                                ('<?php echo $fam_emp_primer_nombre_familiar4; ?>'),
                                                ('<?php echo $fam_emp_segundo_nombre_familiar4; ?>'),
                                                ('<?php echo $fam_emp_primer_apellido_familiar4; ?>'),
                                                ('<?php echo $fam_emp_segundo_apellido_familiar4; ?>'),
                                                ('<?php echo $fam_emp_parentesco_familiar4; ?>'),
                                                ('<?php echo $fam_emp_tipo_documento_familiar5; ?>'),
                                                ('<?php echo $fam_emp_numero_documento_familiar5; ?>'),
                                                ('<?php echo $fam_emp_primer_nombre_familiar5; ?>'),
                                                ('<?php echo $fam_emp_segundo_nombre_familiar5; ?>'),
                                                ('<?php echo $fam_emp_primer_apellido_familiar5; ?>'),
                                                ('<?php echo $fam_emp_segundo_apellido_familiar5; ?>'),
                                                ('<?php echo $fam_emp_parentesco_familiar5; ?>'),
                                                ('<?php echo $fam_emp_id; ?>'),
                                                ('<?php echo $fam_emp_estado_descripcion; ?>'),
                                                ('<?php echo $fam_emp_fecha_registro; ?>'))" class="btn btn-primary text-white btn-primary-animation" title="Información de la Familia del Empleado" data-toggle="modal" data-target="#modal-detail-family-employee"><i class="fas fa-eye"></i></a>
                                            &nbsp;
                                            <!-- Boton Actualizar Familia del Empleado -->
                                            <a type="button" onclick="updateFamilyEmployee(
                                                ('<?php echo $fam_emp_id; ?>'),
                                                ('<?php echo $fam_emp_numero_documento_empleado; ?>'),
                                                ('<?php echo $fam_emp_nombre_completo_empleado; ?>'),
                                                ('<?php echo $fam_emp_tipo_documento_familiar1; ?>'),
                                                ('<?php echo $fam_emp_numero_documento_familiar1; ?>'),
                                                ('<?php echo $fam_emp_primer_nombre_familiar1; ?>'),
                                                ('<?php echo $fam_emp_segundo_nombre_familiar1; ?>'),
                                                ('<?php echo $fam_emp_primer_apellido_familiar1; ?>'),
                                                ('<?php echo $fam_emp_segundo_apellido_familiar1; ?>'),
                                                ('<?php echo $fam_emp_parentesco_familiar1; ?>'),
                                                ('<?php echo $fam_emp_tipo_documento_familiar2; ?>'),
                                                ('<?php echo $fam_emp_numero_documento_familiar2; ?>'),
                                                ('<?php echo $fam_emp_primer_nombre_familiar2; ?>'),
                                                ('<?php echo $fam_emp_segundo_nombre_familiar2; ?>'),
                                                ('<?php echo $fam_emp_primer_apellido_familiar2; ?>'),
                                                ('<?php echo $fam_emp_segundo_apellido_familiar2; ?>'),
                                                ('<?php echo $fam_emp_parentesco_familiar2; ?>'),
                                                ('<?php echo $fam_emp_tipo_documento_familiar3; ?>'),
                                                ('<?php echo $fam_emp_numero_documento_familiar3; ?>'),
                                                ('<?php echo $fam_emp_primer_nombre_familiar3 ; ?>'),
                                                ('<?php echo $fam_emp_segundo_nombre_familiar3; ?>'),
                                                ('<?php echo $fam_emp_primer_apellido_familiar3; ?>'),
                                                ('<?php echo $fam_emp_segundo_apellido_familiar3; ?>'),
                                                ('<?php echo $fam_emp_parentesco_familiar3; ?>'),
                                                ('<?php echo $fam_emp_tipo_documento_familiar4; ?>'),
                                                ('<?php echo $fam_emp_numero_documento_familiar4; ?>'),
                                                ('<?php echo $fam_emp_primer_nombre_familiar4; ?>'),
                                                ('<?php echo $fam_emp_segundo_nombre_familiar4; ?>'),
                                                ('<?php echo $fam_emp_primer_apellido_familiar4; ?>'),
                                                ('<?php echo $fam_emp_segundo_apellido_familiar4; ?>'),
                                                ('<?php echo $fam_emp_parentesco_familiar4; ?>'),
                                                ('<?php echo $fam_emp_tipo_documento_familiar5; ?>'),
                                                ('<?php echo $fam_emp_numero_documento_familiar5; ?>'),
                                                ('<?php echo $fam_emp_primer_nombre_familiar5; ?>'),
                                                ('<?php echo $fam_emp_segundo_nombre_familiar5; ?>'),
                                                ('<?php echo $fam_emp_primer_apellido_familiar5; ?>'),
                                                ('<?php echo $fam_emp_segundo_apellido_familiar5; ?>'),
                                                ('<?php echo $fam_emp_parentesco_familiar5; ?>'))" class="btn btn-warning text-white btn-warning-animation" title="Actualizar datos de la Familia del Empleado" data-toggle="modal" data-target="#modal-update-family-employee"><i class="fas fa-pencil-alt"></i>
                                            </a> 
                                            &nbsp;
                                            <!-- Boton Eliminar Familia del Empleado -->
                                            <a type="button" onclick="deleteFamilyEmployee(
                                                ('<?php echo $fam_emp_id; ?>'),
                                                ('<?php echo $fam_emp_nombre_completo_empleado; ?>'))" class="btn btn-danger text-white btn-danger-animation" title="Eliminar Familia del Empleado" data-toggle="modal" data-target="#modal-delete-family-employee"><i class="fas fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <?php } ?>
                                </tbody>
                                <!-- Fin Cuerpo Tabla -->
                                <!-- Inicio Footer Tabla -->
                                <tr>
                                    <td colspan = "6"> 
                                        <!-- Boton Registrar Familia del Empleado -->
                                        <a type="button" class="btn btn-info text-white btn-info-animation insert-button" title="Registrar Familia del Empleado" data-toggle="modal" data-target="#modal-insert-family-employee"><i class="fas fa-plus"></i> Registrar Familia del Empleado</a>
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

<!-- Inicio Modal Insertar Familia del Empleado -->
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
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Número de Documento del Empleado:</label>
                            <input type="text" name="ins-fam-emp-doc" id="ins-fam-emp-doc" class="form-control" maxlength="10" placeholder="Número de documento del empleado">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Nombre Completo del Empleado:</label>
                            <input type="text" name="ins-fam-emp-nom-emp" id="ins-fam-emp-nom-emp" class="form-control" maxlength="60" placeholder="Nombre completo del empleado">
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
                            <select id="ins-fam-emp-tip-doc-fau" name="ins-fam-emp-tip-doc-fau" class="form-control">
                                <option value="NULL">Seleccione...</option>
                                <option value="Carnet diplomatico">Carnet diplomatico</option>
                                <option value="Cedula de ciudadania">Cedula de ciudadania</option>
                                <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                                <option value="Documento extranjero">Documento extranjero</option>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="Permiso especial de permanencia">Permiso especial de permanencia</option>
                                <option value="Registro civil">Registro civil</option>
                                <option value="Salvoconducto">Salvoconducto</option>
                                <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="ins-fam-emp-num-doc-fau" id="ins-fam-emp-num-doc-fau" class="form-control" maxlength="10" placeholder="Número de documento">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="ins-fam-emp-pri-nom-fau" id="ins-fam-emp-pri-nom-fau" class="form-control" maxlength="60" placeholder="Primer nombre">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="ins-fam-emp-seg-nom-fau" id="ins-fam-emp-seg-nom-fau" class="form-control" maxlength="60" placeholder="Segundo nombre">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="ins-fam-emp-pri-ape-fau" id="ins-fam-emp-pri-ape-fau" class="form-control" maxlength="60" placeholder="Primer apellido">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="ins-fam-emp-seg-ape-fau" id="ins-fam-emp-seg-ape-fau" class="form-control" maxlength="60" placeholder="Segundo apellido">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Parentesco:</label>
                            <select id="ins-fam-emp-par-fau" name="ins-fam-emp-par-fau" class="form-control">
                                <option value="NULL">Seleccione...</option>
                                <option value="Conyuge">Conyuge</option>
                                <option value="Esposo(a)">Esposo(a)</option>
                                <option value="Hermano(a)">Hermano(a)</option>
                                <option value="Hijo(a)">Hijo(a)</option>
                                <option value="Madre">Madre</option>
                                <option value="Nieto(a)">Nieto(a)</option>
                                <option value="Padre">Padre</option>
                            </select>
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
                            <select id="ins-fam-emp-tip-doc-fad" name="ins-fam-emp-tip-doc-fad" class="form-control">
                                <option value="NULL">Seleccione...</option>
                                <option value="Carnet diplomatico">Carnet diplomatico</option>
                                <option value="Cedula de ciudadania">Cedula de ciudadania</option>
                                <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                                <option value="Documento extranjero">Documento extranjero</option>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="Permiso especial de permanencia">Permiso especial de permanencia</option>
                                <option value="Registro civil">Registro civil</option>
                                <option value="Salvoconducto">Salvoconducto</option>
                                <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="ins-fam-emp-num-doc-fad" id="ins-fam-emp-num-doc-fad" class="form-control" maxlength="10" placeholder="Número de documento">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="ins-fam-emp-pri-nom-fad" id="ins-fam-emp-pri-nom-fad" class="form-control" maxlength="60" placeholder="Primer nombre">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="ins-fam-emp-seg-nom-fad" id="ins-fam-emp-seg-nom-fad" class="form-control" maxlength="60" placeholder="Segundo nombre">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="ins-fam-emp-pri-ape-fad" id="ins-fam-emp-pri-ape-fad" class="form-control" maxlength="60" placeholder="Primer apellido">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="ins-fam-emp-seg-ape-fad" id="ins-fam-emp-seg-ape-fad" class="form-control" maxlength="60" placeholder="Segundo apellido">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Parentesco:</label>
                            <select id="ins-fam-emp-par-fad" name="ins-fam-emp-par-fad" class="form-control">
                                <option value="NULL">Seleccione...</option>
                                <option value="Conyuge">Conyuge</option>
                                <option value="Esposo(a)">Esposo(a)</option>
                                <option value="Hermano(a)">Hermano(a)</option>
                                <option value="Hijo(a)">Hijo(a)</option>
                                <option value="Madre">Madre</option>
                                <option value="Nieto(a)">Nieto(a)</option>
                                <option value="Padre">Padre</option>
                            </select>
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
                            <select id="ins-fam-emp-tip-doc-fat" name="ins-fam-emp-tip-doc-fat" class="form-control">
                                <option value="NULL">Seleccione...</option>
                                <option value="Carnet diplomatico">Carnet diplomatico</option>
                                <option value="Cedula de ciudadania">Cedula de ciudadania</option>
                                <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                                <option value="Documento extranjero">Documento extranjero</option>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="Permiso especial de permanencia">Permiso especial de permanencia</option>
                                <option value="Registro civil">Registro civil</option>
                                <option value="Salvoconducto">Salvoconducto</option>
                                <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="ins-fam-emp-num-doc-fat" id="ins-fam-emp-num-doc-fat" class="form-control" maxlength="10" placeholder="Número de documento">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="ins-fam-emp-pri-nom-fat" id="ins-fam-emp-pri-nom-fat" class="form-control" maxlength="60" placeholder="Primer nombre">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="ins-fam-emp-seg-nom-fat" id="ins-fam-emp-seg-nom-fat" class="form-control" maxlength="60" placeholder="Segundo nombre">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="ins-fam-emp-pri-ape-fat" id="ins-fam-emp-pri-ape-fat" class="form-control" maxlength="60" placeholder="Primer apellido">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="ins-fam-emp-seg-ape-fat" id="ins-fam-emp-seg-ape-fat" class="form-control" maxlength="60" placeholder="Segundo apellido">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Parentesco:</label>
                            <select id="ins-fam-emp-par-fat" name="ins-fam-emp-par-fat" class="form-control">
                                <option value="NULL">Seleccione...</option>
                                <option value="Conyuge">Conyuge</option>
                                <option value="Esposo(a)">Esposo(a)</option>
                                <option value="Hermano(a)">Hermano(a)</option>
                                <option value="Hijo(a)">Hijo(a)</option>
                                <option value="Madre">Madre</option>
                                <option value="Nieto(a)">Nieto(a)</option>
                                <option value="Padre">Padre</option>
                            </select>
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
                            <select id="ins-fam-emp-tip-doc-fac" name="ins-fam-emp-tip-doc-fac" class="form-control">
                                <option value="NULL">Seleccione...</option>
                                <option value="Carnet diplomatico">Carnet diplomatico</option>
                                <option value="Cedula de ciudadania">Cedula de ciudadania</option>
                                <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                                <option value="Documento extranjero">Documento extranjero</option>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="Permiso especial de permanencia">Permiso especial de permanencia</option>
                                <option value="Registro civil">Registro civil</option>
                                <option value="Salvoconducto">Salvoconducto</option>
                                <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="ins-fam-emp-num-doc-fac" id="ins-fam-emp-num-doc-fac" class="form-control" maxlength="10" placeholder="Número de documento">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="ins-fam-emp-pri-nom-fac" id="ins-fam-emp-pri-nom-fac" class="form-control" maxlength="60" placeholder="Primer nombre">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="ins-fam-emp-seg-nom-fac" id="ins-fam-emp-seg-nom-fac" class="form-control" maxlength="60" placeholder="Segundo nombre">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="ins-fam-emp-pri-ape-fac" id="ins-fam-emp-pri-ape-fac" class="form-control" maxlength="60" placeholder="Primer apellido">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="ins-fam-emp-seg-ape-fac" id="ins-fam-emp-seg-ape-fac" class="form-control" maxlength="60" placeholder="Segundo apellido">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Parentesco:</label>
                            <select id="ins-fam-emp-par-fac" name="ins-fam-emp-par-fac" class="form-control">
                                <option value="NULL">Seleccione...</option>
                                <option value="Conyuge">Conyuge</option>
                                <option value="Esposo(a)">Esposo(a)</option>
                                <option value="Hermano(a)">Hermano(a)</option>
                                <option value="Hijo(a)">Hijo(a)</option>
                                <option value="Madre">Madre</option>
                                <option value="Nieto(a)">Nieto(a)</option>
                                <option value="Padre">Padre</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-3"></div>
                    </div>
                    <hr>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label for="Familiar #4" class="text-dark">Familiar #5</label>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Tipo de Documento:</label>
                            <select id="ins-fam-emp-tip-doc-fai" name="ins-fam-emp-tip-doc-fai" class="form-control">
                                <option value="NULL">Seleccione...</option>
                                <option value="Carnet diplomatico">Carnet diplomatico</option>
                                <option value="Cedula de ciudadania">Cedula de ciudadania</option>
                                <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                                <option value="Documento extranjero">Documento extranjero</option>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="Permiso especial de permanencia">Permiso especial de permanencia</option>
                                <option value="Registro civil">Registro civil</option>
                                <option value="Salvoconducto">Salvoconducto</option>
                                <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="ins-fam-emp-num-doc-fai" id="ins-fam-emp-num-doc-fai" class="form-control" maxlength="10" placeholder="Número de documento">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="ins-fam-emp-pri-nom-fai" id="ins-fam-emp-pri-nom-fai" class="form-control" maxlength="60" placeholder="Primer nombre">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="ins-fam-emp-seg-nom-fai" id="ins-fam-emp-seg-nom-fai" class="form-control" maxlength="60" placeholder="Segundo nombre">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="ins-fam-emp-pri-ape-fai" id="ins-fam-emp-pri-ape-fai" class="form-control" maxlength="60" placeholder="Primer apellido">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="ins-fam-emp-seg-ape-fai" id="ins-fam-emp-seg-ape-fai" class="form-control" maxlength="60" placeholder="Segundo apellido">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Parentesco:</label>
                            <select id="ins-fam-emp-par-fai" name="ins-fam-emp-par-fai" class="form-control">
                                <option value="NULL">Seleccione...</option>
                                <option value="Conyuge">Conyuge</option>
                                <option value="Esposo(a)">Esposo(a)</option>
                                <option value="Hermano(a)">Hermano(a)</option>
                                <option value="Hijo(a)">Hijo(a)</option>
                                <option value="Madre">Madre</option>
                                <option value="Nieto(a)">Nieto(a)</option>
                                <option value="Padre">Padre</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-4" draggable="true">
                            <p class="text-dark font-weight-bold">(<b class="text-danger">*</b>) Campos obligatorios.</p>
                        </div>
                    </div>
                    </form>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" id="insert-user" onclick="insertFamilyEmployeeAjax();" class="btn btn-info text-white shut-down-modal" data-dismiss="modal">Registrar</button>
                        <button type="button" class="btn btn-secondary" onclick="cleanModal();" data-dismiss="modal">Cancelar</button>
                    </div>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Insertar Familia del Empleado -->

<!-- Inicio Modal Detalle Familia del Empleado -->
<div class="modal fade" id="modal-detail-family-employee" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-primary text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">INFORMACIÓN DE LA FAMILIA DEL EMPLEADO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-detail-family-employee">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label for="Empleado" class="text-dark">Empleado</label>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Número de documento del Empleado:</label>
                            <input type="text" name="det-fam-emp-doc" id="det-fam-emp-doc" class="form-control det-fam-emp-doc" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Nombre Completo del Empleado:</label>
                            <input type="text" name="det-fam-emp-nom" id="det-fam-emp-nom" class="form-control det-fam-emp-nom" readonly>
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
                            <input type="text" name="det-fam-emp-tip-doc-fau" id="det-fam-emp-tip-doc-fau" class="form-control det-fam-emp-tip-doc-fau" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="det-fam-emp-num-doc-fau" id="det-fam-emp-num-doc-fau" class="form-control det-fam-emp-num-doc-fau" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="det-fam-emp-pri-nom-fau" id="det-fam-emp-pri-nom-fau" class="form-control det-fam-emp-pri-nom-fau" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="det-fam-emp-seg-nom-fau" id="det-fam-emp-seg-nom-fau" class="form-control det-fam-emp-seg-nom-fau" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="det-fam-emp-pri-ape-fau" id="det-fam-emp-pri-ape-fau" class="form-control det-fam-emp-pri-ape-fau" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="det-fam-emp-seg-ape-fau" id="det-fam-emp-seg-ape-fau" class="form-control det-fam-emp-seg-ape-fau" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Parentesco:</label>
                            <input type="text" name="det-fam-emp-par-fau" id="det-fam-emp-par-fau" class="form-control det-fam-emp-par-fau" readonly>
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
                            <input type="text" name="det-fam-emp-tip-doc-fad" id="det-fam-emp-tip-doc-fad" class="form-control det-fam-emp-tip-doc-fad" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="det-fam-emp-num-doc-fad" id="det-fam-emp-num-doc-fad" class="form-control det-fam-emp-num-doc-fad" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="det-fam-emp-pri-nom-fad" id="det-fam-emp-pri-nom-fad" class="form-control det-fam-emp-pri-nom-fad" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="det-fam-emp-seg-nom-fad" id="det-fam-emp-seg-nom-fad" class="form-control det-fam-emp-seg-nom-fad" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="det-fam-emp-pri-ape-fad" id="det-fam-emp-pri-ape-fad" class="form-control det-fam-emp-pri-ape-fad" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="det-fam-emp-seg-ape-fad" id="det-fam-emp-seg-ape-fad" class="form-control det-fam-emp-seg-ape-fad" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Parentesco:</label>
                            <input type="text" name="det-fam-emp-par-fad" id="det-fam-emp-par-fad" class="form-control det-fam-emp-par-fad" readonly>
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
                            <input type="text" name="det-fam-emp-tip-doc-fat" id="det-fam-emp-tip-doc-fat" class="form-control det-fam-emp-tip-doc-fat" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="det-fam-emp-num-doc-fat" id="det-fam-emp-num-doc-fat" class="form-control det-fam-emp-num-doc-fat" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="det-fam-emp-pri-nom-fat" id="det-fam-emp-pri-nom-fat" class="form-control det-fam-emp-pri-nom-fat" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="det-fam-emp-seg-nom-fat" id="det-fam-emp-seg-nom-fat" class="form-control det-fam-emp-seg-nom-fat" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="det-fam-emp-pri-ape-fat" id="det-fam-emp-pri-ape-fat" class="form-control det-fam-emp-pri-ape-fat" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="det-fam-emp-seg-ape-fat" id="det-fam-emp-seg-ape-fat" class="form-control det-fam-emp-seg-ape-fat" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Parentesco:</label>
                            <input type="text" name="det-fam-emp-par-fat" id="det-fam-emp-par-fat" class="form-control det-fam-emp-par-fat" readonly>
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
                            <input type="text" name="det-fam-emp-tip-doc-fac" id="det-fam-emp-tip-doc-fac" class="form-control det-fam-emp-tip-doc-fac" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="det-fam-emp-num-doc-fac" id="det-fam-emp-num-doc-fac" class="form-control det-fam-emp-num-doc-fac" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="det-fam-emp-pri-nom-fac" id="det-fam-emp-pri-nom-fac" class="form-control det-fam-emp-pri-nom-fac" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="det-fam-emp-seg-nom-fac" id="det-fam-emp-seg-nom-fac" class="form-control det-fam-emp-seg-nom-fac" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="det-fam-emp-pri-ape-fac" id="det-fam-emp-pri-ape-fac" class="form-control det-fam-emp-pri-ape-fac" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="det-fam-emp-seg-ape-fac" id="det-fam-emp-seg-ape-fac" class="form-control det-fam-emp-seg-ape-fac" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Parentesco:</label>
                            <input type="text" name="det-fam-emp-par-fac" id="det-fam-emp-par-fac" class="form-control det-fam-emp-par-fac" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-3"></div>
                    </div>
                    <hr>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label for="Familiar #4" class="text-dark">Familiar #5</label>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Tipo de Documento:</label>
                            <input type="text" name="det-fam-emp-tip-doc-fai" id="det-fam-emp-tip-doc-fai" class="form-control det-fam-emp-tip-doc-fai" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="det-fam-emp-num-doc-fai" id="det-fam-emp-num-doc-fai" class="form-control det-fam-emp-num-doc-fai" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="det-fam-emp-pri-nom-fai" id="det-fam-emp-pri-nom-fai" class="form-control det-fam-emp-pri-nom-fai" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="det-fam-emp-seg-nom-fai" id="det-fam-emp-seg-nom-fai" class="form-control det-fam-emp-seg-nom-fai" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="det-fam-emp-pri-ape-fai" id="det-fam-emp-pri-ape-fai" class="form-control det-fam-emp-pri-ape-fai" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="det-fam-emp-seg-ape-fai" id="det-fam-emp-seg-ape-fai" class="form-control det-fam-emp-seg-ape-fai" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Parentesco:</label>
                            <input type="text" name="det-fam-emp-par-fai" id="det-fam-emp-par-fai" class="form-control det-fam-emp-par-fai" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-3"></div>
                    </div>
                    <hr>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">ID:</label>
                            <input type="text" name="det-fam-emp-id" id="det-fam-emp-id" class="form-control det-fam-emp-id" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Estado:</label>
                            <input type="text" name="det-fam-emp-est" id="det-fam-emp-est" class="form-control det-fam-emp-est" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha de Registro:</label>
                            <input type="date" name="det-fam-emp-fec-reg" id="det-fam-emp-fec-reg" class="form-control det-fam-emp-fec-reg" readonly>
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
<!-- Final Modal Detalle Familia del Empleado -->

<!-- Inicio Modal Acutalizar Datos Familia del Empleado -->
<div class="modal fade" id="modal-update-family-employee" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <!-- Encabezado -->
                <h5 class="modal-title text-white" id="staticBackdropLabel">ACTUALIZAR DATOS DE LA FAMILIA DEL EMPLEADO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-update-family-employee">
                    <div class="">
                        <div class="col-md-4">
                            <input type="number" class="form-control upd-fam-emp-id" name="upd-fam-emp-id" id="upd-fam-emp-id" hidden>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label for="Empleado" class="text-dark">Empleado</label>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Número de documento del Empleado:</label>
                            <input type="text" name="upd-fam-emp-doc" id="upd-fam-emp-doc" class="form-control upd-fam-emp-doc" maxlength="10" placeholder="Número de documento del empleado">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Nombre Completo del Empleado:</label>
                            <input type="text" name="upd-fam-emp-nom" id="upd-fam-emp-nom" class="form-control upd-fam-emp-nom" maxlength="60" placeholder="Nombre completo del empleado">
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
                            <select id="upd-fam-emp-tip-doc-fau" name="upd-fam-emp-tip-doc-fau" class="form-control restart-select">
                                <option value="NULL">Seleccione...</option>
                                <option value="Carnet diplomatico">Carnet diplomatico</option>
                                <option value="Cedula de ciudadania">Cedula de ciudadania</option>
                                <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                                <option value="Documento extranjero">Documento extranjero</option>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="Permiso especial de permanencia">Permiso especial de permanencia</option>
                                <option value="Registro civil">Registro civil</option>
                                <option value="Salvoconducto">Salvoconducto</option>
                                <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="upd-fam-emp-num-doc-fau" id="upd-fam-emp-num-doc-fau" class="form-control upd-fam-emp-num-doc-fau" maxlength="60" placeholder="Número de documento">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="upd-fam-emp-pri-nom-fau" id="upd-fam-emp-pri-nom-fau" class="form-control upd-fam-emp-pri-nom-fau" maxlength="60" placeholder="Primer nombre">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="upd-fam-emp-seg-nom-fau" id="upd-fam-emp-seg-nom-fau" class="form-control upd-fam-emp-seg-nom-fau" maxlength="60" placeholder="Segundo nombre">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="upd-fam-emp-pri-ape-fau" id="upd-fam-emp-pri-ape-fau" class="form-control upd-fam-emp-pri-ape-fau" maxlength="60" placeholder="Primer apellido">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="upd-fam-emp-seg-ape-fau" id="upd-fam-emp-seg-ape-fau" class="form-control upd-fam-emp-seg-ape-fau" maxlength="60" placeholder="Segundo apellido">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Parentesco:</label>
                            <select id="upd-fam-emp-par-fau" name="upd-fam-emp-par-fau" class="form-control">
                                <option value="NULL">Seleccione...</option>
                                <option value="Conyuge">Conyuge</option>
                                <option value="Esposo(a)">Esposo(a)</option>
                                <option value="Hermano(a)">Hermano(a)</option>
                                <option value="Hijo(a)">Hijo(a)</option>
                                <option value="Madre">Madre</option>
                                <option value="Nieto(a)">Nieto(a)</option>
                                <option value="Padre">Padre</option>
                            </select>
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
                            <select id="upd-fam-emp-tip-doc-fad" name="upd-fam-emp-tip-doc-fad" class="form-control restart-select">
                                <option value="NULL">Seleccione...</option>
                                <option value="Carnet diplomatico">Carnet diplomatico</option>
                                <option value="Cedula de ciudadania">Cedula de ciudadania</option>
                                <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                                <option value="Documento extranjero">Documento extranjero</option>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="Permiso especial de permanencia">Permiso especial de permanencia</option>
                                <option value="Registro civil">Registro civil</option>
                                <option value="Salvoconducto">Salvoconducto</option>
                                <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="upd-fam-emp-num-doc-fad" id="upd-fam-emp-num-doc-fad" class="form-control upd-fam-emp-num-doc-fad" maxlength="60" placeholder="Número de documento">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="upd-fam-emp-pri-nom-fad" id="upd-fam-emp-pri-nom-fad" class="form-control upd-fam-emp-pri-nom-fad" maxlength="60" placeholder="Primer nombre">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="upd-fam-emp-seg-nom-fad" id="upd-fam-emp-seg-nom-fad" class="form-control upd-fam-emp-seg-nom-fad" maxlength="60" placeholder="Segundo nombre">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="upd-fam-emp-pri-ape-fad" id="upd-fam-emp-pri-ape-fad" class="form-control upd-fam-emp-pri-ape-fad" maxlength="60" placeholder="Primer apellido">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="upd-fam-emp-seg-ape-fad" id="upd-fam-emp-seg-ape-fad" class="form-control upd-fam-emp-seg-ape-fad" maxlength="60" placeholder="Segundo apellido">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Parentesco:</label>
                            <select id="upd-fam-emp-par-fad" name="upd-fam-emp-par-fad" class="form-control">
                                <option value="NULL">Seleccione...</option>
                                <option value="Conyuge">Conyuge</option>
                                <option value="Esposo(a)">Esposo(a)</option>
                                <option value="Hermano(a)">Hermano(a)</option>
                                <option value="Hijo(a)">Hijo(a)</option>
                                <option value="Madre">Madre</option>
                                <option value="Nieto(a)">Nieto(a)</option>
                                <option value="Padre">Padre</option>
                            </select>
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
                            <select id="upd-fam-emp-tip-doc-fat" name="upd-fam-emp-tip-doc-fat" class="form-control restart-select">
                                <option value="NULL">Seleccione...</option>
                                <option value="Carnet diplomatico">Carnet diplomatico</option>
                                <option value="Cedula de ciudadania">Cedula de ciudadania</option>
                                <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                                <option value="Documento extranjero">Documento extranjero</option>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="Permiso especial de permanencia">Permiso especial de permanencia</option>
                                <option value="Registro civil">Registro civil</option>
                                <option value="Salvoconducto">Salvoconducto</option>
                                <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="upd-fam-emp-num-doc-fat" id="upd-fam-emp-num-doc-fat" class="form-control upd-fam-emp-num-doc-fat" maxlength="60" placeholder="Número de documento">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="upd-fam-emp-pri-nom-fat" id="upd-fam-emp-pri-nom-fat" class="form-control upd-fam-emp-pri-nom-fat" maxlength="60" placeholder="Primer nombre">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="upd-fam-emp-seg-nom-fat" id="upd-fam-emp-seg-nom-fat" class="form-control upd-fam-emp-seg-nom-fat" maxlength="60" placeholder="Segundo nombre">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="upd-fam-emp-pri-ape-fat" id="upd-fam-emp-pri-ape-fat" class="form-control upd-fam-emp-pri-ape-fat" maxlength="60" placeholder="Primer apellido">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="upd-fam-emp-seg-ape-fat" id="upd-fam-emp-seg-ape-fat" class="form-control upd-fam-emp-seg-ape-fat"" maxlength="60" placeholder="Segundo apellido">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Parentesco:</label>
                            <select id="upd-fam-emp-par-fat" name="upd-fam-emp-par-fat" class="form-control">
                                <option value="NULL">Seleccione...</option>
                                <option value="Conyuge">Conyuge</option>
                                <option value="Esposo(a)">Esposo(a)</option>
                                <option value="Hermano(a)">Hermano(a)</option>
                                <option value="Hijo(a)">Hijo(a)</option>
                                <option value="Madre">Madre</option>
                                <option value="Nieto(a)">Nieto(a)</option>
                                <option value="Padre">Padre</option>
                            </select>
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
                            <select id="upd-fam-emp-tip-doc-fac" name="upd-fam-emp-tip-doc-fac" class="form-control restart-select">
                                <option value="NULL">Seleccione...</option>
                                <option value="Carnet diplomatico">Carnet diplomatico</option>
                                <option value="Cedula de ciudadania">Cedula de ciudadania</option>
                                <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                                <option value="Documento extranjero">Documento extranjero</option>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="Permiso especial de permanencia">Permiso especial de permanencia</option>
                                <option value="Registro civil">Registro civil</option>
                                <option value="Salvoconducto">Salvoconducto</option>
                                <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="upd-fam-emp-num-doc-fac" id="upd-fam-emp-num-doc-fac" class="form-control upd-fam-emp-num-doc-fac" maxlength="60" placeholder="Número de documento">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="upd-fam-emp-pri-nom-fac" id="upd-fam-emp-pri-nom-fac" class="form-control upd-fam-emp-pri-nom-fac" maxlength="60" placeholder="Primer nombre">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="upd-fam-emp-seg-nom-fac" id="upd-fam-emp-seg-nom-fac" class="form-control upd-fam-emp-seg-nom-fac" maxlength="60" placeholder="Segundo nombre">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="upd-fam-emp-pri-ape-fac" id="upd-fam-emp-pri-ape-fac" class="form-control upd-fam-emp-pri-ape-fac" maxlength="60" placeholder="Primer apellido">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="upd-fam-emp-seg-ape-fac" id="upd-fam-emp-seg-ape-fac" class="form-control upd-fam-emp-seg-ape-fac" maxlength="60" placeholder="Segundo apellido">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Parentesco:</label>
                            <select id="upd-fam-emp-par-fac" name="upd-fam-emp-par-fac" class="form-control">
                                <option value="NULL">Seleccione...</option>
                                <option value="Conyuge">Conyuge</option>
                                <option value="Esposo(a)">Esposo(a)</option>
                                <option value="Hermano(a)">Hermano(a)</option>
                                <option value="Hijo(a)">Hijo(a)</option>
                                <option value="Madre">Madre</option>
                                <option value="Nieto(a)">Nieto(a)</option>
                                <option value="Padre">Padre</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-3"></div>
                    </div>
                    <hr>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label for="Familiar #4" class="text-dark">Familiar #5</label>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Tipo de Documento:</label>
                            <select id="upd-fam-emp-tip-doc-fai" name="upd-fam-emp-tip-doc-fai" class="form-control restart-select">
                                <option value="NULL">Seleccione...</option>
                                <option value="Carnet diplomatico">Carnet diplomatico</option>
                                <option value="Cedula de ciudadania">Cedula de ciudadania</option>
                                <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                                <option value="Documento extranjero">Documento extranjero</option>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="Permiso especial de permanencia">Permiso especial de permanencia</option>
                                <option value="Registro civil">Registro civil</option>
                                <option value="Salvoconducto">Salvoconducto</option>
                                <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="upd-fam-emp-num-doc-fai" id="upd-fam-emp-num-doc-fai" class="form-control upd-fam-emp-num-doc-fai" maxlength="60" placeholder="Número de documento">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="upd-fam-emp-pri-nom-fai" id="upd-fam-emp-pri-nom-fai" class="form-control upd-fam-emp-pri-nom-fai" maxlength="60" placeholder="Primer nombre">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="upd-fam-emp-seg-nom-fai" id="upd-fam-emp-seg-nom-fai" class="form-control upd-fam-emp-seg-nom-fai" maxlength="60" placeholder="Segundo nombre">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="upd-fam-emp-pri-ape-fai" id="upd-fam-emp-pri-ape-fai" class="form-control upd-fam-emp-pri-ape-fai" maxlength="60" placeholder="Primer apellido">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="upd-fam-emp-seg-ape-fai" id="upd-fam-emp-seg-ape-fai" class="form-control upd-fam-emp-seg-ape-fai" maxlength="60" placeholder="Segundo apellido">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Parentesco:</label>
                            <select id="upd-fam-emp-par-fai" name="upd-fam-emp-par-fai" class="form-control">
                                <option value="NULL">Seleccione...</option>
                                <option value="Conyuge">Conyuge</option>
                                <option value="Esposo(a)">Esposo(a)</option>
                                <option value="Hermano(a)">Hermano(a)</option>
                                <option value="Hijo(a)">Hijo(a)</option>
                                <option value="Madre">Madre</option>
                                <option value="Nieto(a)">Nieto(a)</option>
                                <option value="Padre">Padre</option>
                            </select>
                        </div>
                    </div>
                </form>
                <!-- Fin Formulario -->
                <!-- Botones del Footer -->
                <div class="modal-footer">
                    <button type="button" onclick="updateFamilyEmployeeAjax();" class="btn btn-warning text-white shut-down-modal" data-dismiss="modal">Actualizar</button>
                    <button type="button" class="btn btn-secondary" onclick="restartSelect();" data-dismiss="modal">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Acutalizar Datos Familia del Empleado -->

<!-- Inicio Modal Eliminar Familia del Empleado -->
<div class="modal fade" id="modal-delete-family-employee" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-danger  text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel" draggable="true">ELIMINAR FAMILIA DEL TRABAJADOR</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-delete-family-employee">
                    <div>
                        <div>
                            <input type="number" class="form-control del-fam-emp-id" name="del-fam-emp-id"  id="del-fam-emp-id" hidden>
                        </div>
                        <div class="center-text" draggable="true">
                            <p class="font-weight-bold">¿Seguro que quieres eliminar la familia del empleado "<b class="del-fam-emp-emp-nom"></b>"?
                            </p>
                        </div>
                        <div class="center-text">
                            <p class="font-italic">¡No podrás revertir esto!</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="deleteFamilyEmployeeAjax();" class="btn btn-danger text-white" data-dismiss="modal">Eliminar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div> 
            <!-- Fin Formulario -->
        </div>
    </div>
</div>
<!-- Inicio Modal Eliminar Familia del Empleado -->