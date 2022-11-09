<!-- Inicio Modal Recuperar Contraseña -->
<div class="modal fade" id="modal-recover-password" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-s">
    <div class="modal-content">
      <div class="modal-header bg-primary text-white">
        <!-- Encabezado -->
        <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">RECUPERAR CONTRASEÑA</h5>
      </div>
      <div class="modal-body">
        <!-- Inicio Formulario -->
        <form id="form-recover-password" autocomplete="off">
          <div class="input-group mb-4">
            <label class="form-label">Ingresa tu Correo Institucional:</label>
            <div class="input-group">
              <input type="text" autocomplete="off" name="rec-cor" id="rec-cor" class="form-control" maxlength="45" placeholder="Correo institucional">
            </div>
          </div>
          <div class="input-group mb-4">
            <label class="form-label">Escribe tu Nueva Contraseña:</label>
            <div class="input-group">
              <input type="password" autocomplete="off" name="rec-pas" id="rec-pas" class="form-control" maxlength="10" placeholder="Nueva contraseña">
              <div class="input-group-append">
                <button class="btn btn-secondary" type="button" onclick="showRecoverPassword();" title="Ver contraseña"><span class="fa fa-eye-slash icon-rp"></span></button>
              </div>
            </div>
          </div>
          <!-- Botones del Footer -->
          <div class="modal-footer">
            <button type="button" onclick="recoverPasswordAjax();" class="btn btn-primary text-white shut-down-modal" data-dismiss="modal">Restablecer</button>
            <button type="button" onclick="cleanModal();" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
          </div>
        </form>
        <!-- Fin Formulario -->
      </div>
    </div>
  </div>
</div>
<!-- Final Modal Recuperar Contraseña-->
<!-- Login -->
<script src="./assets/js/login/login.js"></script>