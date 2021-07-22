<!-- Inicio Modal Ver Detalle Usuario -->
<div class="modal fade" id="modal-detail-profile" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <!-- Encabezado de la Modal -->
                <h5 class="modal-title text-white" id="staticBackdropLabel">DATOS PERSONALES</h5>
            </div>
            <div class="modal-body">
                <!-- Inicio Formulario -->
                <form id="form-detail-profile">
                    <div class="form-group row">
                        <div>
                            <input type="text" name="usu_id_per" class="form-control usu_id_per" value="<?php echo $usu_id_per; ?>" hidden>
                        </div>
                        <div class="col-md-4">
                            <label class="form-label">Número de Documento:</label>
                            <input type="text" class="form-control" value="<?php echo $usu_num_doc_per; ?>" readonly>
                        </div>
                        <div class="col-md-4">
                            <label class="form-label">Tipo de Documento:</label>
                            <input type="text" class="form-control"  value="<?php echo $usu_tip_doc_per; ?>" readonly>
                        </div>
                        <div class="col-md-4">
                            <label class="form-label">Primer Nombre:</label>
                            <input type="text" name="usu_pri_nom_per" id="usu_pri_nom_per" class="form-control usu_pri_nom_per" maxlength="60" placeholder="Escriba su primer nombre" value="<?php echo $usu_pri_nom_per; ?>">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label class="form-label">Segundo Nombre:</label>
                            <input type="text" name="usu_seg_nom_per" id="usu_seg_nom_per" class="form-control usu_seg_nom_per" maxlength="60"  value="<?php echo $usu_seg_nom_per; ?>">
                        </div>
                        <div class="col-md-4">
                            <label class="form-label">Primer Apellido:</label>
                            <input type="text" name="usu_pri_ape_per" id="usu_pri_ape_per" class="form-control usu_pri_ape_per"  maxlength="60" placeholder="Escriba su primer apellido"  value="<?php echo $usu_pri_ape_per; ?>">
                        </div>
                        <div class="col-md-4">
                            <label class="form-label">Segundo Apellido:</label>
                            <input type="text" name="usu_seg_ape_per" id="usu_seg_ape_per" class="form-control usu_seg_ape_per" maxlength="60" placeholder="Escriba su segundo apellido"  value="<?php echo $usu_seg_ape_per; ?>">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label class="form-label">Celular:</label>
                            <input type="text" name="usu_cel_per" id="usu_cel_per" class="form-control usu_cel_per" maxlength="10" minlength="10" pattern="^[0-9]+" value="<?php echo $usu_cel_per; ?>">
                        </div>
                        <div class="col-md-4">
                            <label class="form-label">Teléfono:</label>
                            <input type="text" name="usu_tel_per" id="usu_tel_per" class="form-control usu_tel_per" maxlength="7" minlength="7" pattern="^[0-9]+" value="<?php echo $usu_tel_per; ?>">
                        </div>
                        <div class="col-md-4">
                            <label class="form-label">Dirección:</label>
                            <input type="text" name="usu_dir_per" id="usu_dir_per" class="form-control usu_dir_per" maxlength="60" value="<?php echo $usu_dir_per; ?>">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label class="form-label">Correo:</label>
                            <input type="text" class="form-control" value="<?php echo $usu_cor_per; ?>" readonly>
                        </div>
                        <div class="col-md-4">
                            <label class="form-label">Fecha de Registro:</label>
                            <input type="text" class="form-control" value="<?php echo $usu_fec_reg_per; ?>" readonly>
                        </div>
                        <div class="col-md-4">
                            <label class="form-label">Rol:</label>
                            <input type="text" class="form-control" value="<?php echo $usu_rol_per; ?>" readonly>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" onclick="updateProfile();" class="btn btn-primary text-white shut_down_modal" data-dismiss="modal">Guardar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- Fin Formulario -->
            </div>
        </div>
    </div>
</div>
<!-- Fin Modal Ver Detalle Usuario -->