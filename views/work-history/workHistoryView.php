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
                        <li class="breadcrumb-item active">Historia Laboral</li>
                        <li class="breadcrumb-item"><a href="inicio" title="Página Principal">Inicio</a></li>
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
                                        $his_lab_id                    = $row->his_lab_id;
                                        $tblempleado_emp_id            = $row->tblempleado_emp_id;
                                        $emp_numero_documento          = $row->emp_numero_documento;
                                        $emp_primer_nombre             = $row->emp_primer_nombre;
                                        $emp_segundo_nombre            = $row->emp_segundo_nombre;
                                        $emp_primer_apellido           = $row->emp_primer_apellido;
                                        $emp_segundo_apellido          = $row->emp_segundo_apellido;
                                        $his_lab_fecha_ingreso_empresa = $row->his_lab_fecha_ingreso_empresa;
                                        $his_lab_fecha_inicio_contrato = $row->his_lab_fecha_inicio_contrato;
                                        $his_lab_fecha_final_contrato  = $row->his_lab_fecha_final_contrato;
                                        $his_lab_tipo_contrato         = $row->his_lab_tipo_contrato;
                                        $his_lab_salario               = $row->his_lab_salario;
                                        $tblcargo_car_id               = $row->tblcargo_car_id;
                                        $his_lab_prorroga              = $row->his_lab_prorroga;
                                        $car_descripcion               = $row->car_descripcion;
                                        $his_lab_estado                = $row->his_lab_estado;
                                        $tblestado_general_est_gen_id  = $row->tblestado_general_est_gen_id;
                                        $his_lab_fecha_registro        = $row->his_lab_fecha_registro;
                                        $nombre_completo_empleado      = $emp_primer_nombre." ".$emp_segundo_nombre." ".$emp_primer_apellido." ".$emp_segundo_apellido; 
                                    ?>
                                    <tr>
                                        <td><?php echo $his_lab_id; ?></td>
                                        <td><?php echo $emp_numero_documento; ?></td>
                                        <td><?php echo $emp_primer_nombre." ".$emp_segundo_nombre." ".$emp_primer_apellido." ".$emp_segundo_apellido; ?></td>
                                        <td><?php echo $his_lab_fecha_registro; ?></td>
                                        <td> 
                                            <!-- Boton Detalle Historia Laboral -->
                                            <a type="button" onclick="detailWorkHistory(
                                                ('<?php echo $his_lab_id; ?>'),
                                                ('<?php echo $emp_numero_documento; ?>'),
                                                ('<?php echo $nombre_completo_empleado; ?>'),
                                                ('<?php echo $his_lab_tipo_contrato; ?>'),
                                                ('<?php echo $car_descripcion; ?>'),
                                                ('<?php echo '$'.number_format($his_lab_salario); ?>'),
                                                ('<?php echo $his_lab_fecha_ingreso_empresa; ?>'),
                                                ('<?php echo $his_lab_fecha_inicio_contrato; ?>'),
                                                ('<?php echo $his_lab_fecha_final_contrato; ?>'),
                                                ('<?php echo $his_lab_prorroga; ?>'),
                                                ('<?php echo $his_lab_estado; ?>'),
                                                ('<?php echo $his_lab_fecha_registro; ?>'))" class="btn btn-primary text-white btn-primary-animation" title="Información de la Historia Laboral" data-toggle="modal" data-target="#modal-detail-work-history"><i class="fas fa-eye"></i></a>
                                            &nbsp;
                                            <!-- Boton Actualizar Historia Laboral -->
                                            <a type="button" onclick="updateWorkHistory(
                                                ('<?php echo $his_lab_id; ?>'),
                                                ('<?php echo $tblempleado_emp_id; ?>'),
                                                ('<?php echo $his_lab_fecha_ingreso_empresa; ?>'),
                                                ('<?php echo $his_lab_fecha_inicio_contrato; ?>'),
                                                ('<?php echo $his_lab_fecha_final_contrato; ?>'),
                                                ('<?php echo $his_lab_tipo_contrato; ?>'),
                                                ('<?php echo $his_lab_salario; ?>'),
                                                ('<?php echo $tblcargo_car_id; ?>'),
                                                ('<?php echo $his_lab_prorroga; ?>'),
                                                ('<?php echo $his_lab_estado; ?>'))" class="btn btn-warning text-white btn-warning-animation" title="Actualizar datos de la Historia Laboral" data-toggle="modal" data-target="#modal-update-work-history"><i class="fas fa-pencil-alt"></i>
                                            </a> 
                                            &nbsp;
                                            <!-- Boton Eliminar Historia Laboral -->
                                            <a type="button" onclick="deleteWorkHistory(
                                                ('<?php echo $his_lab_id; ?>'),
                                                ('<?php echo $emp_primer_nombre; ?>'),
                                                ('<?php echo $emp_segundo_nombre; ?>'),
                                                ('<?php echo $emp_primer_apellido; ?>'),
                                                ('<?php echo $emp_segundo_apellido; ?>'))" class="btn btn-danger text-white btn-danger-animation" title="Eliminar Historia Laboral" data-toggle="modal" data-target="#modal-delete-work-history"><i class="fas fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <?php } ?>
                                </tbody>
                                <!-- Fin Cuerpo Tabla -->
                                <!-- Inicio Footer Tabla -->
                                <tr>
                                    <td colspan ="6"> 
                                        <!-- Boton Registrar Historia Laboral -->
                                        <a type="button" class="btn btn-info text-white btn-info-animation insert-button" title="Registrar Historia Laboral" data-toggle="modal" data-target="#modal-insert-work-history"><i class="fas fa-plus"></i> Registrar Histora Laboral</a>
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

<!-- Inicio Modal Registrar Historia Laboral -->
<div class="modal fade" id="modal-insert-work-history" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-info text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">REGISTRAR HISTORIA LABORAL</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-insert-work-history">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Empleado:</label>
                            <select id="ins-wor-his-emp" name="ins-wor-his-emp" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <?php
                                    foreach ($employee as $query){
                                        echo "<option value=".$query['emp_id'].">".$query['emp_numero_documento']." - ".$query['emp_primer_nombre']." ".$query['emp_segundo_nombre']." ".$query['emp_primer_apellido']." ".$query['emp_segundo_apellido']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Fecha de Ingreso en la Empresa:</label>
                            <input type="date" id="ins-wor-his-dat-ent" name="ins-wor-his-dat-ent"  class="form-control">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Fecha de Inicio del Contrato:</label>
                            <input type="date" id="ins-wor-his-ent-con" name="ins-wor-his-ent-con"  class="form-control">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Fecha Final del Contrato:</label>
                            <input type="date" id="ins-wor-his-dat-fin" name="ins-wor-his-dat-fin"  class="form-control">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Tipo de Contrato:</label>
                            <select id="ins-wor-his-tip-con" name="ins-wor-his-tip-con" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <option value="Termino Fijo Inferior a 12 Meses">Termino Fijo Inferior a 12 Meses</option>
                                <option value="Termino Indefinido">Termino Indefinido</option>
                                <option value="Prestacion de Servicios Profesionales">Prestacion de Servicios Profesionales</option>
                                <option value="Prestacion de Servicios Hora Catedra">Prestacion de Servicios Hora Catedra</option>
                                <option value="Contrato de Aprendizaje">Contrato de Aprendizaje</option>
                                <option value="Convenio de Pasantia">Convenio de Pasantia</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Salario:</label>
                            <input type="text" name="ins-wor-his-sal" id="ins-wor-his-sal" class="form-control" maxlength="15" placeholder="Salario del empleado">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Cargo:</label>
                            <select id="ins-wor-his-pos" name="ins-wor-his-pos" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <?php
                                    foreach ($post as $query){
                                        echo "<option value=".$query['car_id'].">".$query['car_descripcion']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Prórroga:</label>
                            <textarea name="ins-wor-his-ext" id="ins-wor-his-ext" rows="1" class="form-control" maxlength="99" placeholder="Prórroga"></textarea>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Estado:</label>
                            <select id="ins-wor-his-con" name="ins-wor-his-con" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <option value="Contrato Vigente">Contrato Vigente</option>
                                <option value="Contrato Terminado">Contrato Terminado</option>
                                <option value="Finalizado por Mutuo Acuerdo">Finalizado por Mutuo Acuerdo</option>
                                <option value="Finalizado por Despido">Finalizado por Despido</option>
                                <option value="Finalizado por Fallecimiento">Finalizado por Fallecimiento</option>
                                <option value="Finalizado por Retiro Voluntario">Finalizado por Retiro Voluntario</option>
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
                        <button type="button" id="insert-work-history" onclick="insertWorkHistoryAjax();" class="btn btn-info text-white shut-down-modal" data-dismiss="modal">Registrar</button>
                        <button type="button" class="btn btn-secondary" onclick="cleanModal();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Registrar Historia Laboral -->

<!-- Inicio Modal Actualizar Historia Laboral -->
<div class="modal fade" id="modal-update-work-history" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <!-- Encabezado -->
                <h5 class="modal-title text-white" id="staticBackdropLabel">ACTUALIZAR DATOS DE LA HISTORIA LABORAL</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-update-work-history">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <input type="text" name="upd-wor-his-id" id="upd-wor-his-id" class="form-control upd-wor-his-id" hidden>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Empleado:</label>
                            <select id="upd-wor-his-emp" name="upd-wor-his-emp" class="form-control restart-select">
                                <?php
                                    foreach ($employee as $query){
                                        echo "<option value=".$query['emp_id'].">".$query['emp_numero_documento']." - ".$query['emp_primer_nombre']." ".$query['emp_segundo_nombre']." ".$query['emp_primer_apellido']." ".$query['emp_segundo_apellido']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Fecha de Ingreso en la Empresa:</label>
                            <input type="date" id="upd-wor-his-dat-ent" name="upd-wor-his-dat-ent"  class="form-control upd-wor-his-dat-ent">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha de Inicio del Contrato:</label>
                            <input type="date" id="upd-wor-his-ent-con" name="upd-wor-his-ent-con"  class="form-control upd-wor-his-ent-con">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha Final del Contrato:</label>
                            <input type="date" id="upd-wor-his-dat-fin" name="upd-wor-his-dat-fin"  class="form-control upd-wor-his-dat-fin">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Tipo de Contrato:</label>
                            <select id="upd-wor-his-tip-con" name="upd-wor-his-tip-con" class="form-control restart-select">
                                <option value="Termino Fijo Inferior a 12 Meses">Termino Fijo Inferior a 12 Meses</option>
                                <option value="Termino Indefinido">Termino Indefinido</option>
                                <option value="Prestacion de Servicios Profesionales">Prestacion de Servicios Profesionales</option>
                                <option value="Prestacion de Servicios Hora Catedra">Prestacion de Servicios Hora Catedra</option>
                                <option value="Contrato de Aprendizaje">Contrato de Aprendizaje</option>
                                <option value="Convenio de Pasantia">Convenio de Pasantia</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Salario:</label>
                            <input type="text" name="upd-wor-his-sal" id="upd-wor-his-sal" class="form-control upd-wor-his-sal" maxlength="15" placeholder="Salario del empleado">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Cargo:</label>
                            <select id="upd-wor-his-pos" name="upd-wor-his-pos" class="form-control restart-select">
                                <?php
                                    foreach ($post as $query){
                                        echo "<option value=".$query['car_id'].">".$query['car_descripcion']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Prórroga:</label>
                            <textarea name="upd-wor-his-ext" id="upd-wor-his-ext" rows="1" class="form-control upd-wor-his-ext" maxlength="99" placeholder="Prórroga"></textarea>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Estado:</label>
                            <select id="upd-wor-his-con" name="upd-wor-his-con" class="form-control restart-select">
                                <option value="Contrato Vigente">Contrato Vigente</option>
                                <option value="Contrato Terminado">Contrato Terminado</option>
                                <option value="Finalizado por Mutuo Acuerdo">Finalizado por Mutuo Acuerdo</option>
                                <option value="Finalizado por Despido">Finalizado por Despido</option>
                                <option value="Finalizado por Fallecimiento">Finalizado por Fallecimiento</option>
                                <option value="Finalizado por Retiro Voluntario">Finalizado por Retiro Voluntario</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 mt-3"></div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="updateWorkHistoryAjax();" class="btn btn-warning text-white shut-down-modal" data-dismiss="modal">Actualizar</button>
                        <button type="button" class="btn btn-secondary" onclick="restartSelect();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Actualizar Historia Laboral -->

<!-- Inicio Modal Detalle Historia Laboral -->
<div class="modal fade" id="modal-detail-work-history" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-primary text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">INFORMACIÓN DE LA HISTORIA LABORAL</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-detail-work-history">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">ID:</label>
                            <input type="text" name="det-work-his-id" id="det-work-his-id" class="form-control det-work-his-id" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Número de Documento:</label>
                            <input type="text" name="det-work-his-num-doc" id="det-work-his-num-doc" class="form-control det-work-his-num-doc" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Empleado:</label>
                            <input type="text" name="det-work-his-emp" id="det-work-his-emp" class="form-control det-work-his-emp" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Tipo de Contrato:</label>
                            <input type="text" name="det-work-his-tip-con" id="det-work-his-tip-con" class="form-control det-work-his-tip-con" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Cargo:</label>
                            <input type="text" name="det-work-his-pos" id="det-work-his-pos" class="form-control det-work-his-pos" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Salario:</label>
                            <input type="text" name="det-work-his-sal" id="det-work-his-sal" class="form-control det-work-his-sal" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha de Ingreso en la Empresa:</label>
                            <input type="date" name="det-work-his-dat-ent" id="det-work-his-dat-ent" class="form-control det-work-his-dat-ent" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha de Inicio del Contrato:</label>
                            <input type="date" name="det-work-his-con-sta" id="det-work-his-con-sta" class="form-control det-work-his-con-sta" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha Final del Contrato:</label>
                            <input type="date" name="det-work-his-con-fin" id="det-work-his-con-fin" class="form-control det-work-his-con-fin" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Prorroga:</label>
                            <textarea name="det-work-his-ext" id="det-work-his-ext" rows="1" class="form-control det-work-his-ext" readonly></textarea>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Estado del Contrato:</label>
                            <input type="text" name="det-work-his-sta-con" id="det-work-his-sta-con" class="form-control det-work-his-sta-con" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha de Registro:</label>
                            <input type="date" name="det-work-his-dat-reg" id="det-work-his-dat-reg" class="form-control det-work-his-dat-reg" readonly>
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
<!-- Final Modal Detalle Historia Laboral -->


<!-- Inicio Modal Eliminar Historia Laboral -->
<div class="modal fade" id="modal-delete-work-history" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-danger  text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel" draggable="true">ELIMINAR HISTORIA LABORAL</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-delete-work-history">
                    <div>
                        <div>
                            <input type="number" class="form-control del-wor-his-id" name="del-wor-his-id"  id="del-wor-his-id" hidden>
                        </div>
                        <div class="center-text" draggable="true">
                            <p class="font-weight-bold">¿Seguro que quieres eliminar la historia laboral del empleado "<b class="del-wor-his-pri-nom"></b><b>&nbsp;</b><b class="del-wor-his-seg-nom"></b><b>&nbsp;</b><b class="del-wor-his-pri-ape"></b><b>&nbsp;</b><b class="del-wor-his-seg-ape"></b>"?
                            </p>
                        </div>
                        <div class="center-text">
                            <p class="font-italic">¡No podrás revertir esto!</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="deleteWorkHistoryAjax();" class="btn btn-danger text-white" data-dismiss="modal">Eliminar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div> 
            <!-- Fin Formulario -->
        </div>
    </div>
</div>
<!-- Inicio Modal Eliminar Historia Laboral -->