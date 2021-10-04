<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Computador</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="inicio">Unibautista</a></li>
                        <li class="breadcrumb-item active">Computador</li>
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
                                        <th>Activo Fijo</th>
                                        <th>Nombre Equipo</th>
                                        <th>Usuario</th>
                                        <th>Fecha de Registro</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <!-- Fin Encabezado Tabla -->
                                <!-- Inicio Cuerpo de la Tabla -->
                                <tbody>
                                    <?php while($row = mysqli_fetch_object($query)) {
                                        $com_id                                    = $row->com_id;
                                        $com_activo_fijo                           = $row->com_activo_fijo;
                                        $com_referencia                            = $row->com_referencia;
                                        $com_serial                                = $row->com_serial;
                                        $com_modelo                                = $row->com_modelo;
                                        $tblmarca_mar_id                           = $row->tblmarca_mar_id;
                                        $mar_descripcion                           = $row->mar_descripcion;
                                        $com_tipo_computador                       = $row->com_tipo_computador;
                                        $com_nombre_equipo                         = $row->com_nombre_equipo;
                                        $com_nombre_usuario                        = $row->com_nombre_usuario;
                                        $com_procesador                            = $row->com_procesador;
                                        $com_memoria_ram                           = $row->com_memoria_ram;
                                        $com_arquitectura                          = $row->com_arquitectura;
                                        $tblsistema_operativo_sis_ope_id           = $row->tblsistema_operativo_sis_ope_id;
                                        $sis_ope_descripcion                       = $row->sis_ope_descripcion;
                                        $com_edicion_sistema_operativo             = $row->com_edicion_sistema_operativo;
                                        $com_capacidad_disco_duro                  = $row->com_capacidad_disco_duro;
                                        $com_office_esta_instalado                 = $row->com_office_esta_instalado;
                                        $com_office_esta_activado                  = $row->com_office_esta_activado;
                                        $com_licencia_activacion_office            = $row->com_licencia_activacion_office;
                                        $com_sistema_operativo_esta_activado       = $row->com_sistema_operativo_esta_activado;
                                        $com_licencia_activacion_sistema_operativo = $row->com_licencia_activacion_sistema_operativo;
                                        $tbloficina_ofi_id                         = $row->tbloficina_ofi_id;
                                        $ofi_descripcion                           = $row->ofi_descripcion;
                                        $com_observacion                           = $row->com_observacion;
                                        $com_tpm_activo_so                         = $row->com_tpm_activo_so;
                                        $com_tpm_activo_bios                       = $row->com_tpm_activo_bios;
                                        $com_estado                                = $row->com_estado;
                                        $com_fecha_registro                        = $row->com_fecha_registro;
                                        $tblestado_general_est_gen_id              = $row->tblestado_general_est_gen_id;
                                        $est_descripcion                           = $row->est_gen_descripcion;
                                    ?>
                                    <tr>
                                        <td><?php echo $com_id; ?></td>
                                        <td><?php echo $com_activo_fijo; ?></td>
                                        <td><?php echo $com_nombre_equipo; ?></td>
                                        <td><?php echo $com_nombre_usuario; ?></td>
                                        <td><?php echo $com_fecha_registro; ?></td>
                                        <td> 
                                            <a type="button" onclick="detailComputer(
                                                ('<?php echo $com_id; ?>'),
                                                ('<?php echo $com_activo_fijo; ?>'),
                                                ('<?php echo $com_referencia; ?>'),
                                                ('<?php echo $com_serial; ?>'),
                                                ('<?php echo $com_modelo; ?>'),
                                                ('<?php echo $mar_descripcion; ?>'),
                                                ('<?php echo $com_tipo_computador; ?>'),
                                                ('<?php echo $com_nombre_equipo; ?>'),
                                                ('<?php echo $com_nombre_usuario; ?>'),
                                                ('<?php echo $com_procesador; ?>'),
                                                ('<?php echo $com_memoria_ram; ?>'),
                                                ('<?php echo $com_arquitectura; ?>'),
                                                ('<?php echo $sis_ope_descripcion; ?>'),
                                                ('<?php echo $com_edicion_sistema_operativo; ?>'),
                                                ('<?php echo $com_capacidad_disco_duro; ?>'),
                                                ('<?php echo $com_office_esta_instalado; ?>'),
                                                ('<?php echo $com_office_esta_activado; ?>'),
                                                ('<?php echo $com_licencia_activacion_office; ?>'),
                                                ('<?php echo $com_sistema_operativo_esta_activado; ?>'),
                                                ('<?php echo $com_licencia_activacion_sistema_operativo; ?>'),
                                                ('<?php echo $ofi_descripcion; ?>'),
                                                ('<?php echo $com_observacion; ?>'),
                                                ('<?php echo $com_tpm_activo_so; ?>'),
                                                ('<?php echo $com_tpm_activo_bios; ?>'),
                                                ('<?php echo $com_estado; ?>'),
                                                ('<?php echo $est_descripcion; ?>'),
                                                ('<?php echo $com_fecha_registro;?>'))" class="btn btn-primary text-white btn-primary-animation" title="Información del Computador" data-toggle="modal" data-target="#modal-detail-computer"><i class="fas fa-eye"></i></a>
                                            &nbsp;
                                            <!-- Boton Actualizar Computador -->
                                            <a type="button" onclick="updateComputer(
                                                ('<?php echo $com_id; ?>'),
                                                ('<?php echo $com_activo_fijo; ?>'),
                                                ('<?php echo $com_referencia; ?>'),
                                                ('<?php echo $com_serial; ?>'),
                                                ('<?php echo $com_modelo; ?>'),
                                                ('<?php echo $tblmarca_mar_id; ?>'),
                                                ('<?php echo $com_tipo_computador; ?>'),
                                                ('<?php echo $com_nombre_equipo; ?>'),
                                                ('<?php echo $com_nombre_usuario; ?>'),
                                                ('<?php echo $com_procesador; ?>'),
                                                ('<?php echo $com_memoria_ram; ?>'),
                                                ('<?php echo $com_arquitectura; ?>'),
                                                ('<?php echo $tblsistema_operativo_sis_ope_id; ?>'),
                                                ('<?php echo $com_edicion_sistema_operativo; ?>'),
                                                ('<?php echo $com_capacidad_disco_duro; ?>'),
                                                ('<?php echo $com_office_esta_instalado; ?>'),
                                                ('<?php echo $com_office_esta_activado; ?>'),
                                                ('<?php echo $com_licencia_activacion_office; ?>'),
                                                ('<?php echo $com_sistema_operativo_esta_activado; ?>'),
                                                ('<?php echo $com_licencia_activacion_sistema_operativo; ?>'),
                                                ('<?php echo $tbloficina_ofi_id; ?>'),
                                                ('<?php echo $com_observacion; ?>'),
                                                ('<?php echo $com_tpm_activo_so; ?>'),
                                                ('<?php echo $com_tpm_activo_bios; ?>'),
                                                ('<?php echo $com_estado; ?>'))" class="btn btn-warning text-white btn-warning-animation" title="Actualizar datos del Computador" data-toggle="modal" data-target="#modal-update-computer"><i class="fas fa-pencil-alt"></i>
                                            </a> 
                                            &nbsp;
                                            <!-- Boton Eliminar Computador -->
                                            <a type="button" onclick="deleteComputer(
                                                ('<?php echo $com_id; ?>'),
                                                ('<?php echo $com_nombre_equipo; ?>'))" class="btn btn-danger text-white btn-danger-animation" title="Eliminar Computador" data-toggle="modal" data-target="#modal-delete-computer"><i class="fas fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <?php } ?>
                                </tbody>
                                <!-- Fin Cuerpo Tabla -->
                                <!-- Inicio Footer Tabla -->
                                <tr>
                                    <td colspan = "6"> 
                                        <!-- Boton Registrar Computador -->
                                        <a type="button" class="btn btn-info text-white btn-info-animation insert-button" title="Registrar Computador" data-toggle="modal" data-target="#modal-insert-user"><i class="fas fa-plus"></i> Registrar Computador</a>
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

<!-- Inicio Modal Registrar Computador -->
<div class="modal fade" id="modal-insert-user" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-info text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">REGISTRAR COMPUTADOR</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-insert-computer">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Activo Fijo:</label>
                            <input type="text" name="ins-com-cod-act-fij" id="ins-com-cod-act-fij" class="form-control" maxlength="10" placeholder="Código activo fijo">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Referencia:</label>
                            <input type="text" name="ins-com-ref" id="ins-com-ref" class="form-control" maxlength="60" placeholder="Referencia del computador">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Serial:</label>
                            <input type="text" name="ins-com-ser" id="ins-com-ser" class="form-control" maxlength="60" placeholder="Serial del computador">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Modelo:</label>
                            <input type="text" name="ins-com-mod" id="ins-com-mod" class="form-control" maxlength="60" placeholder="Modelo del computador">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Marca:</label>
                            <select id="ins-com-mar" name="ins-com-mar" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <?php 
                                    foreach ($brand as $query){
                                        echo "<option value=".$query['mar_id'].">".$query['mar_descripcion']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Tipo de Computador:</label>
                            <select id="ins-com-tip-com" name="ins-com-tip-com" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <option value="Escritorio">Escritorio</option>
                                <option value="Portatil">Portatil</option>
                                <option value="Servidor">Servidor</option>
                                <option value="Todo en uno">Todo en uno</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Nombre del Computador:</label>
                            <input type="text" name="ins-com-nom-com" id="ins-com-nom-com" class="form-control" maxlength="60" placeholder="Nombre del computador">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Nombre de Usuario:</label>
                            <input type="text" name="ins-com-nom-usu" id="ins-com-nom-usu" class="form-control" maxlength="60" placeholder="Nombre de usuario computador">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Procesador:</label>
                            <input type="text" name="ins-com-pro" id="ins-com-pro" class="form-control" maxlength="60" placeholder="Procesador del computador">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Memoria RAM Instalada:</label>
                            <input type="text" name="ins-com-mem-ram" id="ins-com-mem-ram" class="form-control" maxlength="15" placeholder="GB de memoria RAM">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Arquitectura:</label>
                            <select id="ins-com-arq" name="ins-com-arq" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <option value="x32">x32</option>
                                <option value="x86">x86</option>
                                <option value="x64">x64</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Sistema Operativo:</label>
                            <select id="ins-com-sis-ope" name="ins-com-sis-ope" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <?php 
                                    foreach ($operating_system as $query){
                                        echo "<option value=".$query['sis_ope_id'].">".$query['sis_ope_descripcion']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Edición del Sistema Operativo:</label>
                            <input type="text" name="ins-com-edi-sis-ope" id="ins-com-edi-sis-ope" class="form-control" maxlength="60" placeholder="Edición del sistema operativo">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Capacidad del Disco Duro:</label>
                            <input type="text" name="ins-com-cap-dis-dur" id="ins-com-cap-dis-dur" class="form-control" maxlength="15" placeholder="GB de capacidad del disco duro">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> ¿Office está Instalado?:</label>
                            <select id="ins-com-off-ins" name="ins-com-off-ins" class="form-control">
                                <option value="">Seleccione...</option required>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> ¿Office está Activado?:</label>
                            <select id="ins-com-off-act" name="ins-com-off-act" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Licencia de Activación de Office:</label>
                            <input type="text" name="ins-com-lic-off" id="ins-com-lic-off" class="form-control" maxlength="30" placeholder="Licencia de Office">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Sistema Operativo ¿Activado?:</label>
                            <select id="ins-com-sis-act" name="ins-com-sis-act" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                                <option value="No lo requiere">No lo requiere</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Licencia de Activación Sistema Operativo:</label>
                            <input type="text" name="ins-com-lin-act-sis-ope" id="ins-com-lin-act-sis-ope" class="form-control" maxlength="30" placeholder="Licencia de Sistema Operativo">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Ubicación del Computador:</label>
                            <select id="ins-com-ubi" name="ins-com-ubi" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <?php 
                                    foreach ($office as $query){
                                        echo "<option value=".$query['ofi_id'].">".$query['ofi_descripcion']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label"><b class="text-danger">*</b> Observación:</label>
                            <textarea name="ins-com-obs" id="ins-com-obs" rows="1" class="form-control" maxlength="99" placeholder="Observación"></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> ¿TPM está activado en el SO?:</label>
                            <select id="ins-com-tpm-so" name="ins-com-tpm-so" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> ¿TPM se puede habilitar en BIOS?:</label>
                            <select id="ins-com-tpm-bio" name="ins-com-tpm-bio" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Condición:</label>
                            <select id="ins-com-est" name="ins-com-est" class="form-control" required>
                                <option value="">Seleccione...</option>
                                <option value="Antiguo">Antiguo</option>
                                <option value="Averiado">Averiado</option>
                                <option value="Dado de baja">Dado de baja</option>
                                <option value="Deteriorado">Deteriorado</option>
                                <option value="En mantenimiento">En mantenimiento</option>
                                <option value="Nuevo">Nuevo</option>
                                <option value="Usado">Usado</option>
                                <option value="Otro">Otro</option>
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
                        <button type="button" id="insert-computer" onclick="insertComputerAjax();" class="btn btn-info text-white shut-down-modal" data-dismiss="modal">Registrar</button>
                        <button type="button" class="btn btn-secondary" onclick="cleanModal();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Registrar Computador -->

<!-- Inicio Modal Detalle Computador -->
<div class="modal fade" id="modal-detail-computer" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-primary text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">INFORMACIÓN DEL COMPUTADOR</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-detail-computer">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">ID:</label>
                            <input type="text" name="det-com-id" id="det-com-id" class="form-control det-com-id" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Activo Fijo:</label>
                            <input type="text" name="det-com-act-fij" id="det-com-act-fij" class="form-control det-com-act-fij" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Referencia:</label>
                            <input type="text" name="det-com-ref" id="det-com-ref" class="form-control det-com-ref" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Serial:</label>
                            <input type="text" name="det-com-ser" id="det-com-ser" class="form-control det-com-ser" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Modelo:</label>
                            <input type="text" name="det-com-mod" id="det-com-mod" class="form-control det-com-mod" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Marca:</label>
                            <input type="text" name="det-com-mar" id="det-com-mar" class="form-control det-com-mar" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Tipo de Computador:</label>
                            <input type="text" name="det-com-tip-com" id="det-com-tip-com" class="form-control det-com-tip-com" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Nombre del Computador:</label>
                            <input type="text" name="det-com-nom-com" id="det-com-nom-com" class="form-control det-com-nom-com" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Nombre de Usuario:</label>
                            <input type="text" name="det-com-nom-usu" id="det-com-nom-usu" class="form-control det-com-nom-usu" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Procesador:</label>
                            <input type="text" name="det-com-pro" id="det-com-pro" class="form-control det-com-pro" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Memoria RAM Instalada:</label>
                            <input type="text" name="det-com-ram" id="det-com-ram" class="form-control det-com-ram" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Arquitectura:</label>
                            <input type="text" name="det-com-arq" id="det-com-arq" class="form-control det-com-arq" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Sistema Operativo:</label>
                            <input type="text" name="det-com-sis-ope" id="det-com-sis-ope" class="form-control det-com-sis-ope" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Edición de Sistema Operativo:</label>
                            <input type="text" name="det-com-edi-sis-ope" id="det-com-edi-sis-ope" class="form-control det-com-edi-sis-ope" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Capacidad del Disco Duro:</label>
                            <input type="text" name="det-com-cap-dis-dur" id="det-com-cap-dis-dur" class="form-control det-com-cap-dis-dur" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">¿Office está Instalado?:</label>
                            <input type="text" name="det-com-off-ins" id="det-com-off-ins" class="form-control det-com-off-ins" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">¿Office está Activado?:</label>
                            <input type="text" name="det-com-off-est-act" id="det-com-off-est-act" class="form-control det-com-off-est-act" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Licencia de Activación de Office:</label>
                            <input type="text" name="det-com-lic-off" id="det-com-lic-off" class="form-control det-com-lic-off" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Sistema Operativo ¿Activado?:</label>
                            <input type="text" name="det-com-sis-ope-act" id="det-com-sis-ope-act" class="form-control det-com-sis-ope-act" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Licencia del Sistema Operativo:</label>
                            <input type="text" name="det-com-lin-sis-ope" id="det-com-lin-sis-ope" class="form-control det-com-lin-sis-ope" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Ubicación del Computador:</label>
                            <input type="text" name="det-com-ubi-com" id="det-com-ubi-com" class="form-control det-com-ubi-com" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Observación:</label>
                            <textarea name="det-com-obs" id="det-com-obs" rows="1" class="form-control det-com-obs" readonly></textarea>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">¿TPM está activado en el SO?:</label>
                            <input type="text" name="det-com-tpm-so" id="det-com-tpm-so" class="form-control det-com-tpm-so" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">¿TPM se puede habilitar en BIOS?:</label>
                            <input type="text" name="det-com-tpm-bio" id="det-com-tpm-bio" class="form-control det-com-tpm-bio" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Condición:</label>
                            <input type="text"  name="det-com-con" id="det-com-con" class="form-control det-com-con" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Estado:</label>
                            <input type="text" name="det-com-est" id="det-com-est" class="form-control det-com-est" readonly>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Fecha de Registro:</label>
                            <input type="date" name="det-com-fec-reg" id="det-com-fec-reg" class="form-control det-com-fec-reg" readonly>
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
<!-- Final Modal Detalle Computador -->

<!-- Inicio Modal Editar Información del Computador -->
<div class="modal fade" id="modal-update-computer" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <!-- Encabezado -->
                <h5 class="modal-title text-white" id="staticBackdropLabel">ACTUALIZAR DATOS DEL COMPUTADOR</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-update-computer">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <input type="text" name="upd-com-id" id="upd-com-id" class="form-control upd-com-id" hidden>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Activo Fijo:</label>
                            <input type="text" name="upd-com-cod-act-fij" id="upd-com-cod-act-fij" class="form-control upd-com-cod-act-fij" maxlength="10" placeholder="Código activo fijo">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Referencia:</label>
                            <input type="text" name="upd-com-ref" id="upd-com-ref" class="form-control upd-com-ref" maxlength="60" placeholder="Referencia del computador">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Serial:</label>
                            <input type="text" name="upd-com-ser" id="upd-com-ser" class="form-control upd-com-ser" maxlength="60" placeholder="Serial del computador">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Modelo:</label>
                            <input type="text" name="upd-com-mod" id="upd-com-mod" class="form-control upd-com-mod" maxlength="60" placeholder="Modelo del computador">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Marca:</label>
                            <select id="upd-com-mar" name="upd-com-mar" class="form-control restart-select">
                                <?php 
                                    foreach ($brand as $query){
                                        echo "<option value=".$query['mar_id'].">".$query['mar_descripcion']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Tipo de Computador:</label>
                            <select id="upd-com-tip-com" name="upd-com-tip-com" class="form-control restart-select">
                                <option value="Escritorio">Escritorio</option>
                                <option value="Portatil">Portatil</option>
                                <option value="Servidor">Servidor</option>
                                <option value="Todo en uno">Todo en uno</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Nombre del Computador:</label>
                            <input type="text" name="upd-com-nom-com" id="upd-com-nom-com" class="form-control  upd-com-nom-com" maxlength="60" placeholder="Nombre del computador">
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Nombre de Usuario:</label>
                            <input type="text" name="upd-com-nom-usu" id="upd-com-nom-usu" class="form-control upd-com-nom-usu" maxlength="60" placeholder="Nombre de usuario computador">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Procesador:</label>
                            <input type="text" name="upd-com-pro" id="upd-com-pro" class="form-control upd-com-pro" maxlength="60" placeholder="Procesador del computador">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Memoria RAM Instalada:</label>
                            <input type="text" name="upd-com-mem-ram" id="upd-com-mem-ram" class="form-control upd-com-mem-ram" maxlength="15" placeholder="GB de memoria RAM">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Arquitectura:</label>
                            <select id="upd-com-arq" name="upd-com-arq" class="form-control restart-select">
                                <option value="x32">x32</option>
                                <option value="x86">x86</option>
                                <option value="x64">x64</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Sistema Operativo:</label>
                            <select id="upd-com-sis-ope" name="upd-com-sis-ope" class="form-control restart-select">
                                <?php 
                                    foreach ($operating_system as $query){
                                        echo "<option value=".$query['sis_ope_id'].">".$query['sis_ope_descripcion']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Edición del Sistema Operativo:</label>
                            <input type="text" name="upd-com-edi-sis-ope" id="upd-com-edi-sis-ope" class="form-control upd-com-edi-sis-ope" maxlength="60" placeholder="Edición del sistema operativo">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Capacidad del Disco Duro:</label>
                            <input type="text" name="upd-com-cap-dis-dur" id="upd-com-cap-dis-dur" class="form-control upd-com-cap-dis-dur" maxlength="15" placeholder="GB de capacidad del disco duro">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">¿Office está Instalado?:</label>
                            <select id="upd-com-off-ins" name="upd-com-off-ins" class="form-control restart-select">
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">¿Office está Activado?:</label>
                            <select id="upd-com-off-act" name="upd-com-off-act" class="form-control restart-select">
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Licencia de Activación de Office:</label>
                            <input type="text" name="upd-com-lic-off" id="upd-com-lic-off" class="form-control upd-com-lic-off" maxlength="30" placeholder="Licencia de Office">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Sistema Operativo ¿Activado?:</label>
                            <select id="upd-com-sis-act" name="upd-com-sis-act" class="form-control restart-select">
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                                <option value="No lo requiere">No lo requiere</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Licencia de Activación Sistema Operativo:</label>
                            <input type="text" name="upd-com-lin-act-sis-ope" id="upd-com-lin-act-sis-ope" class="form-control upd-com-lin-act-sis-ope" maxlength="30" placeholder="Licencia de Sistema Operativo">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Ubicación del Computador:</label>
                            <select id="upd-com-ubi" name="upd-com-ubi" class="form-control restart-select">
                                <?php 
                                    foreach ($office as $query){
                                        echo "<option value=".$query['ofi_id'].">".$query['ofi_descripcion']."</option>";
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label  draggable="true" class="form-label">Observación:</label>
                            <textarea name="upd-com-obs" id="upd-com-obs" rows="1" class="form-control upd-com-obs" maxlength="99" placeholder="Observación"></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">¿TPM está activado en el SO?:</label>
                            <select id="upd-com-tpm-so" name="upd-com-tpm-so" class="form-control restart-select">
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">¿TPM se puede habilitar en BIOS?:</label>
                            <select id="upd-com-tpm-bio" name="upd-com-tpm-bio" class="form-control restart-select">
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Condición:</label>
                            <select id="upd-com-est" name="upd-com-est" class="form-control restart-select">
                                <option value="Antiguo">Antiguo</option>
                                <option value="Averiado">Averiado</option>
                                <option value="Dado de baja">Dado de baja</option>
                                <option value="Deteriorado">Deteriorado</option>
                                <option value="En mantenimiento">En mantenimiento</option>
                                <option value="Nuevo">Nuevo</option>
                                <option value="Usado">Usado</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
            <!-- Botones del Footer -->
            <div class="modal-footer">
                <button type="button" id="update-computer" onclick="updateComputerAjax();" class="btn btn-warning text-white shut-down-modal" data-dismiss="modal">Actualizar</button>
                <button type="button" class="btn btn-secondary" onclick="restartSelect();" data-dismiss="modal">Cancelar</button>
            </div>
        </div>
    </div>
</div>
<!-- Final Modal Editar Información del Computador -->

<!-- Inicio Modal Eliminar Computador -->
<div class="modal fade" id="modal-delete-computer" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-danger  text-white">
                <!-- Encabezado -->
                <h5 class="modal-title" id="staticBackdropLabel" draggable="true">ELIMINAR COMPUTADOR</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-delete-computer">
                    <div>
                        <div>
                            <input type="number" class="form-control del-com-id" name="del-com-id"  id="del-com-id" hidden>
                        </div>
                        <div class="center-text" draggable="true">
                            <p class="font-weight-bold">¿Seguro que quieres eliminar el computador "<b class="del-com-nom"></b>"?
                            </p>
                        </div>
                        <div class="center-text">
                            <p class="font-italic">¡No podrás revertir esto!</p>
                        </div>
                    </div>
                    <!-- Botones del Footer -->
                    <div class="modal-footer">
                        <button type="button" onclick="deleteComputerAjax();" class="btn btn-danger text-white" data-dismiss="modal">Eliminar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
            </div> 
            <!-- Fin Formulario -->
        </div>
    </div>
</div>
<!-- Inicio Modal Eliminar Computador -->