
<!-- MODAL VER DETALLE USUARIO -->
<div class="modal fade" id="modal_detalle_usuario" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <!-- ENCABEZADO -->
                <h5 class="modal-title text-white" id="staticBackdropLabel">DATOS PERSONALES</h5>
            </div>
            <div class="modal-body">
                <!-- INICIO FORMULARIO -->
                <form id="form_update_profile">
                    <div class="form-group row">
                        <div>
                            <input type="text" name="usu_id_perfil" class="form-control usu_id_perfil" value="<?php echo $usu_id; ?>" hidden>
                        </div>
                        <div class="col-md-4">
                            <label class="form-label"><strong>Número de Documento:</strong></label>
                            <input type="text" class="form-control" value="<?php echo $usu_num_doc; ?>" readonly>
                        </div>
                        <div class="col-md-4">
                            <label class="form-label"><strong>Tipo de Documento:</strong></label>
                            <input type="text" class="form-control"  value="<?php echo $usu_tip_doc; ?>" readonly>
                        </div>
                        <div class="col-md-4">
                            <label class="form-label"><strong>Primer Nombre:</strong></label>
                            <input type="text" name="usu_pri_nom_perfil" id="usu_pri_nom_perfil" maxlength="60" placeholder="Escriba su primer nombre" class="form-control usu_pri_nom_perfil" value="<?php echo $usu_pri_nom; ?>">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label class="form-label"><strong>Segundo Nombre:</strong></label>
                            <input type="text" name="usu_seg_nom_perfil" maxlength="60" class="form-control usu_seg_nom_perfil" value="<?php echo $usu_seg_nom; ?>">
                        </div>
                        <div class="col-md-4">
                            <label class="form-label"><strong>Primer Apellido:</strong></label>
                            <input type="text" name="usu_pri_ape_perfil" id="usu_pri_ape_perfil" maxlength="60" placeholder="Escriba su primer apellido" class="form-control" value="<?php echo $usu_pri_ape; ?>">
                        </div>
                        <div class="col-md-4">
                            <label class="form-label"><strong>Segundo Apellido:</strong></label>
                            <input type="text" name="usu_seg_ape_perfil" id="usu_seg_ape_perfil" maxlength="60" placeholder="Escriba su segundo apellido" class="form-control" value="<?php echo $usu_seg_ape; ?>">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label class="form-label"><strong>Celular:</strong></label>
                            <input type="text" name="usu_cel_perfil" id="usu_cel_perfil" maxlength="10" minlength="10" pattern="^[0-9]+" class="form-control" value="<?php echo $usu_cel; ?>">
                        </div>
                        <div class="col-md-4">
                            <label class="form-label"><strong>Teléfono:</strong></label>
                            <input type="text" name="usu_tel_perfil" id="usu_tel_perfil" maxlength="7" minlength="7" pattern="^[0-9]+" class="form-control" value="<?php echo $usu_tel ; ?>">
                        </div>
                        <div class="col-md-4">
                            <label class="form-label"><strong>Dirección:</strong></label>
                            <input type="text" name="usu_dir_perfil" maxlength="60" class="form-control" value="<?php echo $usu_dir; ?>">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label class="form-label"><strong>Correo:</strong></label>
                            <input type="text" class="form-control" value="<?php echo $usu_cor; ?>" readonly>
                        </div>
                        <div class="col-md-4">
                            <label class="form-label"><strong>Fecha de Registro:</strong></label>
                            <input type="text" class="form-control" value="<?php echo $usu_fec_reg; ?>" readonly>
                        </div>
                        <div class="col-md-4">
                            <label class="form-label"><strong>Rol:</strong></label>
                            <input type="text" class="form-control" value="<?php echo $usu_rol; ?>" readonly>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" onclick="updateProfile();" class="btn btn-primary text-white cerrar_modal" data-dismiss="modal">Guardar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                <!-- FIN FORMULARIO -->
            </div>
        </div>
    </div>
</div>