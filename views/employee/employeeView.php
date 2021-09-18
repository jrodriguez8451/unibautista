<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Empleado</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="inicio">Unibautista</a></li>
                        <li class="breadcrumb-item active">Empleado</li>
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
                                        <th>Nombre</th>
                                        <th>Fecha de Registro</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <!-- Fin Encabezado Tabla -->
                                <!-- Inicio Cuerpo de la Tabla -->
                                <tbody>
                                    <?php while($row = mysqli_fetch_object($query)) {
                                        $emp_id                                = $row->emp_id;
                                        $emp_numero_documento                  = $row->emp_numero_documento;
                                        $tbltipo_documento_tip_doc_id          = $row->tbltipo_documento_tip_doc_id;
                                        $emp_tip_doc_descripcion               = $row->tip_doc_descripcion;
                                        $emp_fecha_expendicion_documento       = $row->emp_fecha_expendicion_documento;
                                        $emp_departamento_expedicion_documento = $row->emp_departamento_expedicion_documento;
                                        $emp_municipio_expedicion_documento    = $row->emp_municipio_expedicion_documento;
                                        $emp_primer_nombre                     = $row->emp_primer_nombre;
                                        $emp_segundo_nombre                    = $row->emp_segundo_nombre;
                                        $emp_primer_apellido                   = $row->emp_primer_apellido;
                                        $emp_segundo_apellido                  = $row->emp_segundo_apellido;
                                        $emp_genero                            = $row->emp_genero;
                                        $emp_fecha_nacimiento                  = $row->emp_fecha_nacimiento;
                                        $emp_estado_civil                      = $row->emp_estado_civil;
                                        $emp_direccion                         = $row->emp_direccion;
                                        $emp_celular1                          = $row->emp_celular1;
                                        $emp_celular2                          = $row->emp_celular2;
                                        $emp_telefono1                         = $row->emp_telefono1;
                                        $emp_telefono2                         = $row->emp_telefono2;
                                        $emp_correo_personal                   = $row->emp_correo_personal;
                                        $emp_correo_institucional              = $row->emp_correo_institucional;
                                        $emp_departamento                      = $row->emp_departamento;
                                        $emp_ciudad                            = $row->emp_ciudad;
                                        $emp_comuna                            = $row->emp_comuna;
                                        $emp_barrio                            = $row->emp_barrio;
                                        $emp_estrato                           = $row->emp_estrato;
                                        $tblfamilia_empleado_fam_emp_id        = $row->tblfamilia_empleado_fam_emp_id;
                                        $tbleps_eps_id                         = $row->tbleps_eps_id;
                                        $emp_eps_descripcion                   = $row->eps_razon_social;
                                        $tblarl_arl_id                         = $row->tblarl_arl_id;
                                        $emp_arl_descripcion                   = $row->arl_razon_social;
                                        $tblcaja_compensacion_caj_com_id       = $row->tblcaja_compensacion_caj_com_id;
                                        $emp_caja_compensacion_descripcion     = $row->caj_com_razon_social;
                                        $tblfondo_pension_fon_pen_id           = $row->tblfondo_pension_fon_pen_id;
                                        $emp_fondo_pension_descripcion         = $row->fon_pen_razon_social;
                                        $emp_formacion_academica               = $row->emp_formacion_academica;
                                        $emp_tipo_contrato                     = $row->emp_tipo_contrato;
                                        $tblcargo_car_id                       = $row->tblcargo_car_id;
                                        $emp_cargo_descripcion                 = $row->car_descripcion;
                                        $emp_salario                           = $row->emp_salario;
                                        $emp_fecha_inicio_laboral              = $row->emp_fecha_inicio_laboral;
                                        $emp_fecha_ingreso_empresa             = $row->emp_fecha_ingreso_empresa;
                                        $emp_estado                            = $row->emp_estado;
                                        $tblestado_general_est_gen_id          = $row->tblestado_general_est_gen_id;
                                        $emp_estado_descripcion                = $row->est_gen_descripcion;
                                        $emp_fecha_registro                    = $row->emp_fecha_registro;
                                        $fam_emp_tipo_documento_familiar1   = $row->fam_emp_tipo_documento_familiar1;
                                        $fam_emp_numero_documento_familiar1 = $row->fam_emp_numero_documento_familiar1;
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
                                    ?>
                                    <tr>
                                        <td><?php echo $emp_id; ?></td>
                                        <td><?php echo $emp_numero_documento; ?></td>
                                        <td><?php echo $emp_primer_nombre." ".$emp_segundo_nombre." ".$emp_primer_apellido." ".$emp_segundo_apellido; ?>
                                        <td><?php echo $emp_fecha_registro; ?></td>
                                        <td> 
                                            <!-- Boton Detalle Empleado -->
                                            <a type="button" onclick="detailEmployee(
                                                ('<?php echo $emp_id; ?>'),
                                                ('<?php echo $emp_numero_documento; ?>'),
                                                ('<?php echo $emp_tip_doc_descripcion; ?>'),
                                                ('<?php echo $emp_fecha_expendicion_documento; ?>'),
                                                ('<?php echo $emp_departamento_expedicion_documento; ?>'),
                                                ('<?php echo $emp_municipio_expedicion_documento; ?>'),
                                                ('<?php echo $emp_primer_nombre; ?>'),
                                                ('<?php echo $emp_segundo_nombre; ?>'),
                                                ('<?php echo $emp_primer_apellido; ?>'),
                                                ('<?php echo $emp_segundo_apellido; ?>'),
                                                ('<?php echo $emp_genero; ?>'),
                                                ('<?php echo $emp_fecha_nacimiento; ?>'),
                                                ('<?php echo $emp_estado_civil; ?>'),
                                                ('<?php echo $emp_direccion; ?>'),
                                                ('<?php echo $emp_celular1; ?>'),
                                                ('<?php echo $emp_celular2; ?>'),
                                                ('<?php echo $emp_telefono1; ?>'),
                                                ('<?php echo $emp_telefono2; ?>'),
                                                ('<?php echo $emp_correo_personal; ?>'),
                                                ('<?php echo $emp_correo_institucional; ?>'),
                                                ('<?php echo $emp_departamento; ?>'),
                                                ('<?php echo $emp_ciudad; ?>'),
                                                ('<?php echo $emp_comuna; ?>'),
                                                ('<?php echo $emp_barrio; ?>'),
                                                ('<?php echo $emp_estrato; ?>'),
                                                ('<?php echo $emp_eps_descripcion; ?>'),
                                                ('<?php echo $emp_arl_descripcion; ?>'),
                                                ('<?php echo $emp_caja_compensacion_descripcion; ?>'),
                                                ('<?php echo $emp_fondo_pension_descripcion; ?>'),
                                                ('<?php echo $emp_formacion_academica; ?>'),
                                                ('<?php echo $emp_tipo_contrato; ?>'),
                                                ('<?php echo $emp_cargo_descripcion; ?>'),
                                                ('<?php echo $emp_salario; ?>'),
                                                ('<?php echo $emp_fecha_inicio_laboral; ?>'),
                                                ('<?php echo $emp_fecha_ingreso_empresa; ?>'),
                                                ('<?php echo $emp_estado; ?>'),
                                                ('<?php echo $fam_emp_tipo_documento_familiar1; ?>'),
                                                ('<?php echo $fam_emp_numero_documento_familiar1; ?>'),
                                                ('<?php echo $fam_emp_primer_nombre_familiar1; ?>'),
                                                ('<?php echo $fam_emp_segundo_nombre_familiar1; ?>'),
                                                ('<?php echo $fam_emp_primer_apellido_familiar1; ?>'),
                                                ('<?php echo $fam_emp_segundo_apellido_familiar1; ?>'),
                                                ('<?php echo $fam_emp_tipo_documento_familiar2; ?>'),
                                                ('<?php echo $fam_emp_numero_documento_familiar2; ?>'),
                                                ('<?php echo $fam_emp_primer_nombre_familiar2; ?>'),
                                                ('<?php echo $fam_emp_segundo_nombre_familiar2; ?>'),
                                                ('<?php echo $fam_emp_primer_apellido_familiar2; ?>'),
                                                ('<?php echo $fam_emp_segundo_apellido_familiar2; ?>'),
                                                ('<?php echo $fam_emp_tipo_documento_familiar3; ?>'),
                                                ('<?php echo $fam_emp_numero_documento_familiar3; ?>'),
                                                ('<?php echo $fam_emp_primer_nombre_familiar3 ; ?>'),
                                                ('<?php echo $fam_emp_segundo_nombre_familiar3; ?>'),
                                                ('<?php echo $fam_emp_primer_apellido_familiar3; ?>'),
                                                ('<?php echo $fam_emp_segundo_apellido_familiar3; ?>'),
                                                ('<?php echo $fam_emp_tipo_documento_familiar4; ?>'),
                                                ('<?php echo $fam_emp_numero_documento_familiar4; ?>'),
                                                ('<?php echo $fam_emp_primer_nombre_familiar4; ?>'),
                                                ('<?php echo $fam_emp_segundo_nombre_familiar4; ?>'),
                                                ('<?php echo $fam_emp_primer_apellido_familiar4; ?>'),
                                                ('<?php echo $fam_emp_segundo_apellido_familiar4; ?>'),
                                                ('<?php echo $fam_emp_tipo_documento_familiar5; ?>'),
                                                ('<?php echo $fam_emp_numero_documento_familiar5; ?>'),
                                                ('<?php echo $fam_emp_primer_nombre_familiar5; ?>'),
                                                ('<?php echo $fam_emp_segundo_nombre_familiar5; ?>'),
                                                ('<?php echo $fam_emp_primer_apellido_familiar5; ?>'),
                                                ('<?php echo $fam_emp_segundo_apellido_familiar5; ?>'),
                                                ('<?php echo $emp_estado_descripcion; ?>'),
                                                ('<?php echo $emp_fecha_registro; ?>'));" class="btn btn-primary text-white btn-primary-animation" title="Información del Empleado" data-toggle="modal" data-target="#modal-detail-employee"><i class="fas fa-eye"></i></a>
                                            &nbsp;
                                            <!-- Boton Actualizar Empleado -->
                                            <a type="button" onclick="updateEmployee(
                                                ('<?php echo $emp_id; ?>'),
                                                ('<?php echo $emp_numero_documento; ?>'),
                                                ('<?php echo $tbltipo_documento_tip_doc_id; ?>'),
                                                ('<?php echo $emp_fecha_expendicion_documento; ?>'),
                                                ('<?php echo $emp_departamento_expedicion_documento; ?>'),
                                                ('<?php echo $emp_municipio_expedicion_documento; ?>'),
                                                ('<?php echo $emp_primer_nombre; ?>'),
                                                ('<?php echo $emp_segundo_nombre; ?>'),
                                                ('<?php echo $emp_primer_apellido; ?>'),
                                                ('<?php echo $emp_segundo_apellido; ?>'),
                                                ('<?php echo $emp_genero; ?>'),
                                                ('<?php echo $emp_fecha_nacimiento; ?>'),
                                                ('<?php echo $emp_estado_civil; ?>'),
                                                ('<?php echo $emp_direccion; ?>'),
                                                ('<?php echo $emp_celular1; ?>'),
                                                ('<?php echo $emp_celular2; ?>'),
                                                ('<?php echo $emp_telefono1; ?>'),
                                                ('<?php echo $emp_telefono2; ?>'),
                                                ('<?php echo $emp_correo_personal; ?>'),
                                                ('<?php echo $emp_correo_institucional; ?>'),
                                                ('<?php echo $emp_departamento; ?>'),
                                                ('<?php echo $emp_ciudad; ?>'),
                                                ('<?php echo $emp_comuna; ?>'),
                                                ('<?php echo $emp_barrio; ?>'),
                                                ('<?php echo $emp_estrato; ?>'),
                                                ('<?php echo $tblfamilia_empleado_fam_emp_id; ?>'),
                                                ('<?php echo $tbleps_eps_id; ?>'),
                                                ('<?php echo $tblarl_arl_id; ?>'),
                                                ('<?php echo $tblcaja_compensacion_caj_com_id; ?>'),
                                                ('<?php echo $tblfondo_pension_fon_pen_id; ?>'),
                                                ('<?php echo $emp_formacion_academica; ?>'),
                                                ('<?php echo $emp_tipo_contrato; ?>'),
                                                ('<?php echo $tblcargo_car_id; ?>'),
                                                ('<?php echo $emp_salario; ?>'),
                                                ('<?php echo $emp_fecha_inicio_laboral; ?>'),
                                                ('<?php echo $emp_fecha_ingreso_empresa; ?>'),
                                                ('<?php echo $emp_estado; ?>'));" class="btn btn-warning text-white btn-warning-animation" title="Actualizar datos del Empleado" data-toggle="modal" data-target="#modal-update-employee"><i class="fas fa-pencil-alt"></i>
                                            </a> 
                                            &nbsp;
                                            <!-- Boton Eliminar Empleado -->
                                            <a type="button" onclick="deleteEmployee(
                                                ('<?php echo $emp_id; ?>'),
                                                ('<?php echo $emp_primer_nombre; ?>'),
                                                ('<?php echo $emp_segundo_nombre; ?>'),
                                                ('<?php echo $emp_primer_apellido; ?>'),
                                                ('<?php echo $emp_segundo_apellido; ?>'));" class="btn btn-danger text-white btn-danger-animation" title="Eliminar Empleado" data-toggle="modal" data-target="#modal-delete-employee"><i class="fas fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <?php } ?>
                                </tbody>
                                <!-- Fin Cuerpo Tabla -->
                                <!-- Inicio Footer Tabla -->
                                <tr>
                                    <td colspan="5"> 
                                        <!-- Boton Registrar Empleado -->
                                        <a type="button" class="btn btn-info text-white btn-info-animation insert-button" title="Registrar empleado" data-toggle="modal" data-target="#modal-insert-employee"><i class="fas fa-plus"></i> Registrar empleado</a>
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

<!-- Inicio Modal Insertar Empleado -->
<div class="modal fade" id="modal-insert-employee" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-info text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">REGISTRAR EMPLEADO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-insert-employee">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Número de Documento:</label>
                            <input type="text" name="ins-emp-num-doc" id="ins-usu-num-doc" class="form-control" maxlength="10" placeholder="Número de documento">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Tipo de Documento:</label>
                            <select id="ins-emp-tip-doc" name="ins-emp-tip-doc" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <?php
                                    foreach ($document_type as $query){
                                        echo "<option value=".$query['tip_doc_id'].">".$query['tip_doc_descripcion']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Fecha de Expedición:</label>
                            <input type="date" id="ins-emp-fec-exp" name="ins-emp-fec-exp"  class="form-control">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Departamento de Expedición:</label>
                            <select id="ins-emp-dep-doc" name="ins-emp-dep-doc" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <option value="Amazonas">Amazonas</option>
                                <option value="Antioquia">Antioquia</option>
                                <option value="Arauca">Arauca</option>
                                <option value="Atlantico">Atlantico</option>
                                <option value="Bolivar">Bolivar</option>
                                <option value="Boyaca">Boyaca</option>
                                <option value="Caldas">Caldas</option>
                                <option value="Caqueta">Caqueta</option>
                                <option value="Casanare">Casanare</option>
                                <option value="Cauca">Cauca</option>
                                <option value="Cesar">Cesar</option>
                                <option value="Choco">Choco</option>
                                <option value="Cordoba">Cordoba</option>
                                <option value="Cundinamarca">Cundinamarca</option>
                                <option value="Guainia">Guainia</option>
                                <option value="Guaviare">Guaviare</option>
                                <option value="Huila">Huila</option>
                                <option value="La Guajira">La Guajira</option>
                                <option value="Magdalena">Magdalena</option>
                                <option value="Meta">Meta</option>
                                <option value="Nariño">Nariño</option>
                                <option value="Norte de Santander">Norte de Santander</option>
                                <option value="Putumayo">Putumayo</option>
                                <option value="Quindio">Quindio</option>
                                <option value="Risaralda">Risaralda</option>
                                <option value="San Andrés y Providencia">San Andres y Providencia</option>
                                <option value="Santander">Santander</option>
                                <option value="Sucre">Sucre</option>
                                <option value="Tolima">Tolima</option>
                                <option value="Valle del Cauca">Valle del Cauca</option>
                                <option value="Vaupes">Vaupes</option>
                                <option value="Vichada">Vichada</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Municipio de Expedición:</label>
                            <input type="text" id="ins-emp-mun-exp" name="ins-emp-mun-exp" class="form-control" maxlength="60" placeholder="Municipio expedición documento">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Primer Nombre:</label>
                            <input type="text" id="ins-emp-pri-nom" name="ins-emp-pri-nom" class="form-control" maxlength="60" placeholder="Primer nombre">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" id="ins-emp-seg-nom"  name="ins-emp-seg-nom"  class="form-control" maxlength="60" placeholder="Segundo nombre">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Primer Apellido:</label>
                            <input type="text" id="ins-emp-pri-ape" name="ins-emp-pri-ape"  class="form-control" maxlength="60" placeholder="Primer apellido">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Segundo Apellido:</label>
                            <input type="text" id="ins-emp-seg-ape" name="ins-emp-seg-ape" class="form-control" maxlength="60" placeholder="Segundo apellido">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Genero:</label>
                            <select id="ins-emp-gen" name="ins-emp-gen" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Fecha de Nacimiento:</label>
                            <input type="date" id="ins-emp-fec-nac" name="ins-emp-fec-nac"  class="form-control">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Estado Civil:</label>
                            <select id="ins-emp-est-civ" name="ins-emp-est-civ" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <option value="Casado(a)">Casado(a)</option>
                                <option value="Soltero(a)">Soltero(a)</option>
                                <option value="Viudo(a)">Viudo(a)</option>
                                <option value="Divorciado(a)">Divorciado(a)</option>
                                <option value="Separado(a)">Separado(a)</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Dirección:</label>
                            <input type="text" id="ins-emp-dir" name="ins-emp-dir" class="form-control" maxlength="60" placeholder="Dirección de residencia">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Celular #1:</label>
                            <input type="text" id="ins-emp-cel-uno" name="ins-emp-cel-uno" class="form-control" maxlength="10" placeholder="Número de celular">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Celular #2:</label>
                            <input type="text" id="ins-emp-cel-dos" name="ins-emp-cel-dos" class="form-control" maxlength="10" placeholder="Número de celular">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Teléfono #1:</label>
                            <input type="text" id="ins-emp-tel-uno" name="ins-emp-tel-uno" class="form-control" maxlength="7" placeholder="Número de teléfono">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Teléfono #2:</label>
                            <input type="text" id="ins-emp-tel-dos" name="ins-emp-tel-dos" class="form-control" maxlength="7" placeholder="Número de teléfono">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Correo Personal:</label>
                            <input type="text" id="ins-emp-cor-per" name="ins-emp-cor-per" class="form-control" maxlength="45" placeholder="Correo electrónico personal">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Correo Institucional:</label>
                            <input type="text" id="ins-emp-cor-ins" name="ins-emp-cor-ins" class="form-control" maxlength="45" placeholder="Correo electrónico institucional">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Departamento:</label>
                            <select id="ins-emp-dep" name="ins-emp-dep" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <option value="Amazonas">Amazonas</option>
                                <option value="Antioquia">Antioquia</option>
                                <option value="Arauca">Arauca</option>
                                <option value="Atlantico">Atlantico</option>
                                <option value="Bolivar">Bolivar</option>
                                <option value="Boyaca">Boyaca</option>
                                <option value="Caldas">Caldas</option>
                                <option value="Caqueta">Caqueta</option>
                                <option value="Casanare">Casanare</option>
                                <option value="Cauca">Cauca</option>
                                <option value="Cesar">Cesar</option>
                                <option value="Choco">Choco</option>
                                <option value="Cordoba">Cordoba</option>
                                <option value="Cundinamarca">Cundinamarca</option>
                                <option value="Guainia">Guainia</option>
                                <option value="Guaviare">Guaviare</option>
                                <option value="Huila">Huila</option>
                                <option value="La Guajira">La Guajira</option>
                                <option value="Magdalena">Magdalena</option>
                                <option value="Meta">Meta</option>
                                <option value="Nariño">Nariño</option>
                                <option value="Norte de Santander">Norte de Santander</option>
                                <option value="Putumayo">Putumayo</option>
                                <option value="Quindio">Quindio</option>
                                <option value="Risaralda">Risaralda</option>
                                <option value="San Andrés y Providencia">San Andres y Providencia</option>
                                <option value="Santander">Santander</option>
                                <option value="Sucre">Sucre</option>
                                <option value="Tolima">Tolima</option>
                                <option value="Valle del Cauca">Valle del Cauca</option>
                                <option value="Vaupes">Vaupes</option>
                                <option value="Vichada">Vichada</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Ciudad:</label>
                            <input type="text" id="ins-emp-ciu" name="ins-emp-ciu" class="form-control" maxlength="45" placeholder="Ciudad de residencia">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Comuna:</label>
                            <select id="ins-emp-com" name="ins-emp-com" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Barrio:</label>
                            <input type="text" id="ins-emp-bar" name="ins-emp-bar" class="form-control" maxlength="45" placeholder="Barrio de residencia">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Estrato:</label>
                            <select id="ins-emp-est" name="ins-emp-est" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Familia:</label>
                            <select id="ins-emp-fam" name="ins-emp-fam" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <?php
                                    foreach ($family as $query){
                                        echo "<option value=".$query['fam_emp_id'].">".$query['fam_emp_nombre_completo_empleado']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> EPS:</label>
                            <select id="ins-emp-eps" name="ins-emp-eps" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <?php
                                    foreach ($eps as $query){
                                        echo "<option value=".$query['eps_id'].">".$query['eps_razon_social']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> ARL:</label>
                            <select id="ins-emp-arl" name="ins-emp-arl" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <?php
                                    foreach ($arl as $query){
                                        echo "<option value=".$query['arl_id'].">".$query['arl_razon_social']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Caja de Compensación:</label>
                            <select id="ins-em-caj-com" name="ins-em-caj-com" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <?php
                                    foreach ($compensation_box as $query){
                                        echo "<option value=".$query['caj_com_id'].">".$query['caj_com_razon_social']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Fondo de Pensión:</label>
                            <select id="ins-emp-fon-pen" name="ins-emp-fon-pen" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <?php
                                    foreach ($pension_fund as $query){
                                        echo "<option value=".$query['fon_pen_id'].">".$query['fon_pen_razon_social']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Formación Académica:</label>
                            <input type="text" id="ins-emp-for" name="ins-emp-for"  class="form-control" maxlength="70" placeholder="Formación académica">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Tipo de Contrato:</label>
                            <select id="ins-tip-con" name="ins-tip-con" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <option value="Definido">Definido</option>
                                <option value="Indefinido">Indefinido</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Cargo:</label>
                            <select id="ins-emp-car" name="ins-emp-car" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <?php
                                    foreach ($post as $query){
                                        echo "<option value=".$query['car_id'].">".$query['car_descripcion']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Salario:</label>
                            <input type="text" id="ins-emp-sal" name="ins-emp-sal" class="form-control" maxlength="30" placeholder="Salario">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Fecha Ingreso Empresa:</label>
                            <input type="date" id="ins-emp-fec-ing" name="ins-emp-fec-ing"  class="form-control">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Fecha Inicio Laboral:</label>
                            <input type="date" id="ins-emp-fec-ini" name="ins-emp-fec-ini"  class="form-control">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-4" draggable="true">
                            <p class="text-dark font-weight-bold">(<b class="text-danger">*</b>) Campos obligatorios</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" id="insert-employee" onclick="insertEmployeeAjax();" class="btn btn-info text-white shut-down-modal" data-dismiss="modal">Registrar</button>
                        <button type="button" class="btn btn-secondary" onclick="cleanModal();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Insertar Empleado -->

<!-- Inicio Modal Detalle Empleado -->
<div class="modal fade" id="modal-detail-employee" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-primary text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">INFORMACIÓN DEL EMPLEADO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-detail-employee">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">ID:</label>
                            <input type="text" name="det-emp-id" id="det-emp-id" class="form-control det-emp-id" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="det-emp-num-doc" id="det-emp-num-doc" class="form-control det-emp-num-doc" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Tipo de Documento:</label>
                            <input type="text" name="det-emp-tip-doc" id="det-emp-tip-doc" class="form-control det-emp-tip-doc" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha de Expedición:</label>
                            <input type="date" id="det-emp-fec-exp" name="det-emp-fec-exp" class="form-control det-emp-fec-exp" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Departamento de Expedición:</label>
                            <input type="text" name="det-emp-dep-exp" id="det-emp-dep-exp" class="form-control det-emp-dep-exp" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Municipio de Expedición:</label>
                            <input type="text" id="det-emp-mun-exp" name="det-emp-mun-exp" class="form-control det-emp-mun-exp" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" id="det-emp-pri-nom" name="det-emp-pri-nom" class="form-control det-emp-pri-nom" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" id="det-emp-seg-nom"  name="det-emp-seg-nom"  class="form-control det-emp-seg-nom" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" id="det-emp-pri-ape" name="det-emp-pri-ape"  class="form-control det-emp-pri-ape" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" id="det-emp-seg-ape" name="det-emp-seg-ape" class="form-control det-emp-seg-ape" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Genero:</label>
                            <input type="text" id="det-emp-gen" name="det-emp-gen" class="form-control det-emp-gen" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha de Nacimiento:</label>
                            <input type="date" id="det-emp-fec-nac" name="det-emp-fec-nac"  class="form-control det-emp-fec-nac" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Estado Civil:</label>
                            <input type="text" id="det-emp-est-civ" name="det-emp-est-civ" class="form-control det-emp-est-civ" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Dirección:</label>
                            <input type="text" id="det-emp-dir" name="det-emp-dir" class="form-control det-emp-dir" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Celular #1:</label>
                            <input type="text" id="det-emp-cel-uno" name="det-emp-cel-uno" class="form-control det-emp-cel-uno" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Celular #2:</label>
                            <input type="text" id="det-emp-cel-dos" name="det-emp-cel-dos" class="form-control det-emp-cel-dos" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Teléfono #1:</label>
                            <input type="text" id="det-emp-tel-uno" name="det-emp-tel-uno" class="form-control det-emp-tel-uno" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Teléfono #2:</label>
                            <input type="text" id="det-emp-tel-dos" name="det-emp-tel-dos" class="form-control det-emp-tel-dos" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Correo Personal:</label>
                            <input type="text" id="det-emp-cor-per" name="det-emp-cor-per" class="form-control det-emp-cor-per" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Correo Institucional:</label>
                            <input type="text" id="det-emp-cor-ins" name="det-emp-cor-ins" class="form-control det-emp-cor-ins" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Departamento:</label>
                            <input type="text" id="det-emp-dep" name="det-emp-dep" class="form-control det-emp-dep" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Ciudad:</label>
                            <input type="text" id="det-emp-ciu" name="det-emp-ciu" class="form-control det-emp-ciu" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Comuna:</label>
                            <input type="text" id="det-emp-com" name="det-emp-com" class="form-control det-emp-com" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Barrio:</label>
                            <input type="text" id="det-emp-bar" name="det-emp-bar" class="form-control det-emp-bar" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Estrato:</label>
                            <input type="text" id="det-emp-est" name="det-emp-est" class="form-control det-emp-est" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">EPS:</label>
                            <input type="text" id="det-emp-eps" name="det-emp-eps" class="form-control det-emp-eps" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">ARL:</label>
                            <input type="text" id="det-emp-arl" name="det-emp-arl" class="form-control det-emp-arl" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Caja de Compensación:</label>
                            <input type="text" id="det-emp-caj-com" name="det-emp-caj-com" class="form-control det-emp-caj-com" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fondo de Pensión:</label>
                            <input type="text" id="det-emp-fon-pen" name="det-emp-fon-pen" class="form-control det-emp-fon-pen" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Formación Académica:</label>
                            <input type="text" id="det-emp-for-aca" name="det-emp-for-aca" class="form-control det-emp-for-aca" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Tipo de Contrato:</label>
                            <input type="text" id="det-emp-tip-con" name="det-emp-tip-con" class="form-control det-emp-tip-con" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Cargo:</label>
                            <input type="text" id="det-emp-car" name="det-emp-car" class="form-control det-emp-car" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Salario:</label>
                            <input type="text" id="det-emp-sal" name="det-emp-sal" class="form-control det-emp-sal" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"> Fecha Ingreso Empresa:</label>
                            <input type="date" id="det-emp-fec-ing" name="det-emp-fec-ing"  class="form-control det-emp-fec-ing" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha Inicio Laboral:</label>
                            <input type="date" id="det-emp-fec-ini" name="det-emp-fec-ini"  class="form-control det-emp-fec-ini" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Estado:</label>
                            <input type="text" name="det-emp-con" id="det-emp-con" class="form-control det-emp-con" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-3"></div>
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
                            <input type="text" name="det-emp-fam-emp-tip-doc-fau" id="det-emp-fam-emp-tip-doc-fau" class="form-control det-emp-fam-emp-tip-doc-fau" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="det-emp-fam-emp-num-doc-fau" id="det-emp-fam-emp-num-doc-fau" class="form-control det-emp-fam-emp-num-doc-fau" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="det-emp-fam-emp-pri-nom-fau" id="det-emp-fam-emp-pri-nom-fau" class="form-control det-emp-fam-emp-pri-nom-fau" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="det-emp-fam-emp-seg-nom-fau" id="det-emp-fam-emp-seg-nom-fau" class="form-control det-emp-fam-emp-seg-nom-fau" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="det-emp-fam-emp-pri-ape-fau" id="det-emp-fam-emp-pri-ape-fau" class="form-control det-emp-fam-emp-pri-ape-fau" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="det-emp-fam-emp-seg-ape-fau" id="det-emp-fam-emp-seg-ape-fau" class="form-control det-emp-fam-emp-seg-ape-fau" readonly>
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
                            <input type="text" name="det-emp-fam-emp-tip-doc-fad" id="det-emp-fam-emp-tip-doc-fad" class="form-control det-emp-fam-emp-tip-doc-fad" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="det-emp-fam-emp-num-doc-fad" id="det-emp-fam-emp-num-doc-fad" class="form-control det-emp-fam-emp-num-doc-fad" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="det-emp-fam-emp-pri-nom-fad" id="det-emp-fam-emp-pri-nom-fad" class="form-control det-emp-fam-emp-pri-nom-fad" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="det-emp-fam-emp-seg-nom-fad" id="det-emp-fam-emp-seg-nom-fad" class="form-control det-emp-fam-emp-seg-nom-fad" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="det-emp-fam-emp-pri-ape-fad" id="det-emp-fam-emp-pri-ape-fad" class="form-control det-emp-fam-emp-pri-ape-fad" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="det-emp-fam-emp-seg-ape-fad" id="det-emp-fam-emp-seg-ape-fad" class="form-control det-emp-fam-emp-seg-ape-fad" readonly>
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
                            <input type="text" name="det-emp-fam-emp-tip-doc-fat" id="det-emp-fam-emp-tip-doc-fat" class="form-control det-emp-fam-emp-tip-doc-fat" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="det-emp-fam-emp-num-doc-fat" id="det-emp-fam-emp-num-doc-fat" class="form-control det-emp-fam-emp-num-doc-fat" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="det-emp-fam-emp-pri-nom-fat" id="det-emp-fam-emp-pri-nom-fat" class="form-control det-emp-fam-emp-pri-nom-fat" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="det-emp-fam-emp-seg-nom-fat" id="det-emp-fam-emp-seg-nom-fat" class="form-control det-emp-fam-emp-seg-nom-fat" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="det-emp-fam-emp-pri-ape-fat" id="det-emp-fam-emp-pri-ape-fat" class="form-control det-emp-fam-emp-pri-ape-fat" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="det-emp-fam-emp-seg-ape-fat" id="det-emp-fam-emp-seg-ape-fat" class="form-control det-emp-fam-emp-seg-ape-fat" readonly>
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
                            <input type="text" name="det-emp-fam-emp-tip-doc-fac" id="det-emp-fam-emp-tip-doc-fac" class="form-control det-emp-fam-emp-tip-doc-fac" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="det-emp-fam-emp-num-doc-fac" id="det-emp-fam-emp-num-doc-fac" class="form-control det-emp-fam-emp-num-doc-fac" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="det-emp-fam-emp-pri-nom-fac" id="det-emp-fam-emp-pri-nom-fac" class="form-control det-emp-fam-emp-pri-nom-fac" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="det-emp-fam-emp-seg-nom-fac" id="det-emp-fam-emp-seg-nom-fac" class="form-control det-emp-fam-emp-seg-nom-fac" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="det-emp-fam-emp-pri-ape-fac" id="det-emp-fam-emp-pri-ape-fac" class="form-control det-emp-fam-emp-pri-ape-fac" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="det-emp-fam-emp-seg-ape-fac" id="det-emp-fam-emp-seg-ape-fac" class="form-control det-emp-fam-emp-seg-ape-fac" readonly>
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
                            <input type="text" name="det-emp-fam-emp-tip-doc-fai" id="det-emp-fam-emp-tip-doc-fai" class="form-control det-emp-fam-emp-tip-doc-fai" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="det-emp-fam-emp-num-doc-fai" id="det-emp-fam-emp-num-doc-fai" class="form-control det-emp-fam-emp-num-doc-fai" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" name="det-emp-fam-emp-pri-nom-fai" id="det-emp-fam-emp-pri-nom-fai" class="form-control det-emp-fam-emp-pri-nom-fai" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="det-emp-fam-emp-seg-nom-fai" id="det-emp-fam-emp-seg-nom-fai" class="form-control det-emp-fam-emp-seg-nom-fai" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" name="det-emp-fam-emp-pri-ape-fai" id="det-emp-fam-emp-pri-ape-fai" class="form-control det-emp-fam-emp-pri-ape-fai" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" name="det-emp-fam-emp-seg-ape-fai" id="det-emp-fam-emp-seg-ape-fai" class="form-control det-emp-fam-emp-seg-ape-fai" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-3"></div>
                    </div>
                    <hr>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Condición:</label>
                            <input type="text" name="det-emp-es" id="det-emp-es" class="form-control det-emp-es" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha de Registro:</label>
                            <input type="date" name="det-emp-fec-reg" id="det-emp-fec-reg" class="form-control det-emp-fec-reg" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-4"></div>
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
<!-- Final Modal Detalle Empleado -->

<!-- Inicio Modal Editar Empleado -->
<div class="modal fade" id="modal-update-employee" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <!-- Encabezado -->
                <h5 class="modal-title text-white" id="staticBackdropLabel">ACTUALIZAR DATOS DEL EMPLEADO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-update-employee">
                    <div class="">
                        <div class="col-md-4">
                            <input type="number" class="form-control upd-emp-id" name="upd-emp-id" id="upd-emp-id" hidden>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="upd-emp-num-doc" id="upd-emp-num-doc" class="form-control upd-emp-num-doc" maxlength="10" placeholder="Número de documento">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Tipo de Documento:</label>
                            <select id="upd-emp-tip-doc" name="upd-emp-tip-doc" class="form-control restart-select">
                                <?php
                                    foreach ($document_type as $query){
                                        echo "<option value=".$query['tip_doc_id'].">".$query['tip_doc_descripcion']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha de Expedición:</label>
                            <input type="date" id="upd-emp-fec-exp" name="upd-emp-fec-exp"  class="form-control upd-emp-fec-exp">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Departamento de Expedición:</label>
                            <select id="upd-emp-dep-doc" name="upd-emp-dep-doc" class="form-control restart-select">
                                <option value="Amazonas">Amazonas</option>
                                <option value="Antioquia">Antioquia</option>
                                <option value="Arauca">Arauca</option>
                                <option value="Atlantico">Atlantico</option>
                                <option value="Bolivar">Bolivar</option>
                                <option value="Boyaca">Boyaca</option>
                                <option value="Caldas">Caldas</option>
                                <option value="Caqueta">Caqueta</option>
                                <option value="Casanare">Casanare</option>
                                <option value="Cauca">Cauca</option>
                                <option value="Cesar">Cesar</option>
                                <option value="Choco">Choco</option>
                                <option value="Cordoba">Cordoba</option>
                                <option value="Cundinamarca">Cundinamarca</option>
                                <option value="Guainia">Guainia</option>
                                <option value="Guaviare">Guaviare</option>
                                <option value="Huila">Huila</option>
                                <option value="La Guajira">La Guajira</option>
                                <option value="Magdalena">Magdalena</option>
                                <option value="Meta">Meta</option>
                                <option value="Nariño">Nariño</option>
                                <option value="Norte de Santander">Norte de Santander</option>
                                <option value="Putumayo">Putumayo</option>
                                <option value="Quindio">Quindio</option>
                                <option value="Risaralda">Risaralda</option>
                                <option value="San Andrés y Providencia">San Andres y Providencia</option>
                                <option value="Santander">Santander</option>
                                <option value="Sucre">Sucre</option>
                                <option value="Tolima">Tolima</option>
                                <option value="Valle del Cauca">Valle del Cauca</option>
                                <option value="Vaupes">Vaupes</option>
                                <option value="Vichada">Vichada</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Municipio de Expedición:</label>
                            <input type="text" id="upd-emp-mun-exp" name="upd-emp-mun-exp" class="form-control upd-emp-mun-exp" maxlength="60" placeholder="Municipio expedición documento">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Primer Nombre:</label>
                            <input type="text" id="upd-emp-pri-nom" name="upd-emp-pri-nom" class="form-control upd-emp-pri-nom" maxlength="60" placeholder="Primer nombre">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" id="upd-emp-seg-nom"  name="upd-emp-seg-nom"  class="form-control upd-emp-seg-nom" maxlength="60" placeholder="Segundo nombre">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Primer Apellido:</label>
                            <input type="text" id="upd-emp-pri-ape" name="upd-emp-pri-ape"  class="form-control upd-emp-pri-ape" maxlength="60" placeholder="Primer apellido">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Apellido:</label>
                            <input type="text" id="upd-emp-seg-ape" name="upd-emp-seg-ape" class="form-control upd-emp-seg-ape" maxlength="60" placeholder="Segundo apellido">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Genero:</label>
                            <select id="upd-emp-gen" name="upd-emp-gen" class="form-control restart-select">
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha de Nacimiento:</label>
                            <input type="date" id="upd-emp-fec-nac" name="upd-emp-fec-nac"  class="form-control upd-emp-fec-nac">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Estado Civil:</label>
                            <select id="upd-emp-est-civ" name="upd-emp-est-civ" class="form-control restart-select">
                                <option value="Casado(a)">Casado(a)</option>
                                <option value="Soltero(a)">Soltero(a)</option>
                                <option value="Viudo(a)">Viudo(a)</option>
                                <option value="Divorciado(a)">Divorciado(a)</option>
                                <option value="Separado(a)">Separado(a)</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Dirección:</label>
                            <input type="text" id="upd-emp-dir" name="upd-emp-dir" class="form-control upd-emp-dir" maxlength="60" placeholder="Dirección de residencia">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Celular #1:</label>
                            <input type="text" id="upd-emp-cel-uno" name="upd-emp-cel-uno" class="form-control upd-emp-cel-uno" maxlength="10" placeholder="Número de celular">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Celular #2:</label>
                            <input type="text" id="upd-emp-cel-dos" name="upd-emp-cel-dos" class="form-control upd-emp-cel-dos" maxlength="10" placeholder="Número de celular">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Teléfono #1:</label>
                            <input type="text" id="upd-emp-tel-uno" name="upd-emp-tel-uno" class="form-control upd-emp-tel-uno" maxlength="7" placeholder="Número de teléfono">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Teléfono #2:</label>
                            <input type="text" id="upd-emp-tel-dos" name="upd-emp-tel-dos" class="form-control upd-emp-tel-dos" maxlength="7" placeholder="Número de teléfono">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Correo Personal:</label>
                            <input type="text" id="upd-emp-cor-per" name="upd-emp-cor-per" class="form-control upd-emp-cor-per" maxlength="45" placeholder="Correo electrónico personal">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Correo Institucional:</label>
                            <input type="text" id="upd-emp-cor-ins" name="upd-emp-cor-ins" class="form-control upd-emp-cor-ins" maxlength="45" placeholder="Correo electrónico institucional">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Departamento:</label>
                            <select id="upd-emp-dep" name="upd-emp-dep" class="form-control restart-select">
                                <option value="Amazonas">Amazonas</option>
                                <option value="Antioquia">Antioquia</option>
                                <option value="Arauca">Arauca</option>
                                <option value="Atlantico">Atlantico</option>
                                <option value="Bolivar">Bolivar</option>
                                <option value="Boyaca">Boyaca</option>
                                <option value="Caldas">Caldas</option>
                                <option value="Caqueta">Caqueta</option>
                                <option value="Casanare">Casanare</option>
                                <option value="Cauca">Cauca</option>
                                <option value="Cesar">Cesar</option>
                                <option value="Choco">Choco</option>
                                <option value="Cordoba">Cordoba</option>
                                <option value="Cundinamarca">Cundinamarca</option>
                                <option value="Guainia">Guainia</option>
                                <option value="Guaviare">Guaviare</option>
                                <option value="Huila">Huila</option>
                                <option value="La Guajira">La Guajira</option>
                                <option value="Magdalena">Magdalena</option>
                                <option value="Meta">Meta</option>
                                <option value="Nariño">Nariño</option>
                                <option value="Norte de Santander">Norte de Santander</option>
                                <option value="Putumayo">Putumayo</option>
                                <option value="Quindio">Quindio</option>
                                <option value="Risaralda">Risaralda</option>
                                <option value="San Andrés y Providencia">San Andres y Providencia</option>
                                <option value="Santander">Santander</option>
                                <option value="Sucre">Sucre</option>
                                <option value="Tolima">Tolima</option>
                                <option value="Valle del Cauca">Valle del Cauca</option>
                                <option value="Vaupes">Vaupes</option>
                                <option value="Vichada">Vichada</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Ciudad:</label>
                            <input type="text" id="upd-emp-ciu" name="upd-emp-ciu" class="form-control upd-emp-ciu" maxlength="45" placeholder="Ciudad de residencia">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Comuna:</label>
                            <select id="upd-emp-com" name="upd-emp-com" class="form-control restart-select">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Barrio:</label>
                            <input type="text" id="upd-emp-bar" name="upd-emp-bar" class="form-control upd-emp-bar" maxlength="45" placeholder="Barrio de residencia">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Estrato:</label>
                            <select id="upd-emp-est" name="upd-emp-est" class="form-control restart-select">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Familia:</label>
                            <select id="upd-emp-fam" name="upd-emp-fam" class="form-control restart-select">
                                <?php
                                    foreach ($family as $query){
                                        echo "<option value=".$query['fam_emp_id'].">".$query['fam_emp_nombre_completo_empleado']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">EPS:</label>
                            <select id="upd-emp-eps" name="upd-emp-eps" class="form-control restart-select">
                                <?php
                                    foreach ($eps as $query){
                                        echo "<option value=".$query['eps_id'].">".$query['eps_razon_social']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">ARL:</label>
                            <select id="upd-emp-arl" name="upd-emp-arl" class="form-control restart-select">
                                <?php
                                    foreach ($arl as $query){
                                        echo "<option value=".$query['arl_id'].">".$query['arl_razon_social']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Caja de Compensación:</label>
                            <select id="upd-em-caj-com" name="upd-em-caj-com" class="form-control restart-select">
                                <?php
                                    foreach ($compensation_box as $query){
                                        echo "<option value=".$query['caj_com_id'].">".$query['caj_com_razon_social']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fondo de Pensión:</label>
                            <select id="upd-emp-fon-pen" name="upd-emp-fon-pen" class="form-control restart-select">
                                <?php
                                    foreach ($pension_fund as $query){
                                        echo "<option value=".$query['fon_pen_id'].">".$query['fon_pen_razon_social']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Formación Académica:</label>
                            <input type="text" id="upd-emp-for" name="upd-emp-for"  class="form-control upd-emp-for" maxlength="70" placeholder="Formación académica">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Tipo de Contrato:</label>
                            <select id="upd-emp-tip-con" name="upd-emp-tip-con" class="form-control restart-select">
                                <option value="Definido">Definido</option>
                                <option value="Indefinido">Indefinido</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Cargo:</label>
                            <select id="upd-emp-car" name="upd-emp-car" class="form-control restart-select">
                                <?php
                                    foreach ($post as $query){
                                        echo "<option value=".$query['car_id'].">".$query['car_descripcion']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Salario:</label>
                            <input type="text" id="upd-emp-sal" name="upd-emp-sal" class="form-control upd-emp-sal" maxlength="30" placeholder="Salario">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha Ingreso Empresa:</label>
                            <input type="date" id="upd-emp-fec-ing" name="upd-emp-fec-ing"  class="form-control upd-emp-fec-ing">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha Inicio Laboral:</label>
                            <input type="date" id="upd-emp-fec-ini" name="upd-emp-fec-ini"  class="form-control upd-emp-fec-ini">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Estado:</label>
                            <select id="upd-emp-con" name="upd-emp-con" class="restart-select form-control">
                                <option value="Contratado(a)">Contratado(a)</option>
                                <option value="Contrato Terminado">Contrato Terminado</option>
                                <option value="Despedido(a)">Despedido(a)</option>
                                <option value="En Vacaciones">En Vacaciones</option>
                                <option value="Fallecimiento">Fallecimiento</option>
                                <option value="Jubilado(a)">Jubilado(a)</option>
                                <option value="Licencia Laboral">Licencia Laboral</option>
                                <option value="Licencia por Enfermedad">Licencia por Enfermedad</option>
                                <option value="Licencia por Maternidad">Licencia por Maternidad</option>
                                <option value="Licencia por Paternidad">Licencia por Paternidad</option>
                                <option value="Retirado(a)">Retirado(a)</option>
                            </select>
                        </div>
                    </div>
                </form>
                <!-- Fin Formulario -->
                <!-- Botones del Footer -->
                <div class="modal-footer">
                    <button type="button" id="update-employee" onclick="updateEmployeeAjax();" class="btn btn-warning text-white shut-down-modal" data-dismiss="modal">Actualizar</button>
                    <button type="button" class="btn btn-secondary" onclick="restartSelect();" data-dismiss="modal">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Editar Empleado -->

<!-- Inicio Modal Eliminar Empleado -->
<div class="modal fade" id="modal-delete-employee" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-danger  text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel" draggable="true">ELIMINAR EMPLEADO</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-delete-employee">
                    <div>
                        <div>
                            <input type="number" class="form-control del-emp-id" name="del-emp-id"  id="del-emp-id" hidden>
                        </div>
                        <div class="center-text" draggable="true">
                            <p class="font-weight-bold">¿Seguro que quieres eliminar al empleado "<b class="del-emp-pri_nom"></b><b>&nbsp;</b><b class="del-emp-seg_nom"></b><b>&nbsp;</b><b class="del-emp-pri_ape"></b><b>&nbsp;</b><b class="del-emp-seg_ape"></b>"?
                            </p>
                        </div>
                        <div class="center-text">
                            <p class="font-italic">¡No podrás revertir esto!</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="deleteEmployeeAjax();" class="btn btn-danger text-white" data-dismiss="modal">Eliminar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div> 
            <!-- Fin Formulario -->
        </div>
    </div>
</div>
<!-- Inicio Modal Eliminar Empleado -->