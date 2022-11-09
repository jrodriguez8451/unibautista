<!-- Inicio Modal Ver Detalle Usuario -->
<div class="modal fade" id="modal-detail-profile" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-warning">
                <!-- Encabezado de la Modal -->
                <h5 class="modal-title text-white" id="staticBackdropLabel"  draggable="true">INFORMACIÓN DEL PERFIL</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-detail-profile">
                    <div class="form-group row">
                        <div class="col-md-3">
                            <input type="text" name="usu_id_per" class="form-control usu_id_per" value="<?php echo $usu_id_per; ?>" hidden>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Número de Documento:</label>
                            <input draggable="true" type="text" class="form-control" value="<?php echo $usu_num_doc_per; ?>" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Tipo de Documento:</label>
                            <input draggable="true" type="text" class="form-control"  value="<?php echo $usu_tip_doc_per; ?>" readonly  >
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Primer Nombre:</label>
                            <input type="text" name="usu_pri_nom_per" id="usu_pri_nom_per" class="form-control usu_pri_nom_per" maxlength="60" placeholder="Escriba su primer nombre" value="<?php echo $usu_pri_nom_per; ?>">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Segundo Nombre:</label>
                            <input type="text" name="usu_seg_nom_per" id="usu_seg_nom_per" class="form-control usu_seg_nom_per" maxlength="60"  placeholder="Escriba su segundo nombre" value="<?php echo $usu_seg_nom_per; ?>">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Primer Apellido:</label>
                            <input type="text" name="usu_pri_ape_per" id="usu_pri_ape_per" class="form-control usu_pri_ape_per"  maxlength="60" placeholder="Escriba su primer apellido"  value="<?php echo $usu_pri_ape_per; ?>">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Segundo Apellido:</label>
                            <input type="text" name="usu_seg_ape_per" id="usu_seg_ape_per" class="form-control usu_seg_ape_per" maxlength="60" placeholder="Escriba su segundo apellido"  value="<?php echo $usu_seg_ape_per; ?>">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Celular:</label>
                            <input type="text" name="usu_cel_per" id="usu_cel_per" class="form-control usu_cel_per" maxlength="10" placeholder="Escriba su número de celular" minlength="10" pattern="^[0-9]+" value="<?php echo $usu_cel_per; ?>">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Teléfono:</label>
                            <input type="text" name="usu_tel_per" id="usu_tel_per" class="form-control usu_tel_per" maxlength="7" placeholder="Escriba su número de teléfono" minlength="7" pattern="^[0-9]+" value="<?php echo $usu_tel_per; ?>">
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Dirección:</label>
                            <input type="text" name="usu_dir_per" id="usu_dir_per" class="form-control usu_dir_per" maxlength="60" placeholder="Escriba su dirección de residencia" value="<?php echo $usu_dir_per; ?>">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Correo:</label>
                            <input draggable="true" type="text" class="form-control" value="<?php echo $usu_cor_per; ?>" readonly>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label"><b class="text-danger">*</b> Contraseña:</label>
                            <div class="input-group">
                                <input name="usu_con_per" id="usu_con_per" type="Password" Class="form-control usu_con_per" placeholder="Escriba una contraseña" value="<?php echo $usu_con_per; ?>" maxlength="10">
                                <div class="input-group-append">
                                    <button class="btn btn-warning text-white" type="button" onclick="showPasswordProfile();" title="Ver contraseña"> <span class="fa fa-eye-slash icon-upd-pro"></span> </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Rol:</label>
                            <input draggable="true" type="text" class="form-control" value="<?php echo $usu_rol_per; ?>" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label draggable="true" class="form-label">Fecha de Registro:</label>
                            <input draggable="true" type="date" class="form-control" value="<?php echo $usu_fec_reg_per; ?>" readonly>
                        </div>
                    </div>
                    <div class="form-group row mt-5">
                        <div class="col-md-12" draggable="true">
                            <p class="text-dark font-weight-bold">(<b class="text-danger">*</b>) Campos obligatorios.</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" onclick="updateProfile();" class="btn btn-warning text-white shut-down-modal" data-dismiss="modal">Actualizar</button>
                        <button type="reset" class="btn btn-secondary" onclick="cleanModal();" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Fin Modal Ver Detalle Usuario -->