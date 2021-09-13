<!-- Inicio Modal Recuperar Contraseña -->
<div class="modal fade" id="modal-recover-password" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-s">
    <div class="modal-content">
      <div class="modal-header bg-primary text-white">
        <!-- Encabezado -->
        <h5 class="modal-title" id="staticBackdropLabel"  draggable="true">RECUPERA TU CONTRASEÑA</h5>
      </div>
      <div class="modal-body">
        <!-- Inicio Formulario -->
        <form id="form-recover-password">
          <div class="form-group row">
            <div class="col-md-12">
              <p class="font-weight-normal">Ingresa tu correo institucional para buscar tu cuenta.</p>
              <input type="text" name="rec-pas" id="rec-pas" class="form-control" maxlength="60" required autocomplete="username" placeholder="Correo institucional">
            </div>
          </div>
          <!-- Botones del Footer -->
          <div class="modal-footer">
            <button type="button"  onclick="recoverPasswordAjax();" class="btn btn-primary text-white shut-down-modal" data-dismiss="modal">Recuperar</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
          </div>
        </form>
        <!-- Fin Formulario -->
      </div>
    </div>
  </div>
</div>
<!-- Final Modal Recuperar Contraseña-->