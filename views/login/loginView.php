<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Unibautista - Iniciar sesión</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Fav Icon -->
  <link rel="icon" href="./assets/icons/favicon/favicon.png" type="image/png">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="./assets/plugins/fontawesome-free/css/all.min.css">
  <!-- icheck bootstrap -->
  <link rel="stylesheet" href="./assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="./assets/css/adminlte/adminlte.min.css">
  <link rel="stylesheet" href="./assets/css/main/main.css">
</head>
<body class="hold-transition login-page">
  <div class="login-box" id="load">
    <div class="login-logo">
      <a href="http://www.unibautista.edu.co/" target="_blank" title="Visitar Página Web">
        <i class="fa fa-university fa-2x" aria-hidden="true"></i>
        <h1>Unibautista</h1>
      </a>
    </div>
    <div class="card mt-4">
      <div class="card-body login-card-body border border-muted rounded login-card">
        <h5 class="login-box-msg mt-3 mb-4">Te damos la Bienvenida</h5>
        <form action="iniciar-sesion" method="POST">
          <input type="number" hidden value="1" name="enter">
          <div class="input-group mb-4">
            <input type="text" name="email" id="email" class="form-control" placeholder="Correo institucional" maxlength="45" required autocomplete="username">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope text-secondary"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-4">
            <div class="input-group">
              <input type="password" name="password" id="password" class="form-control" placeholder="Contraseña" maxlength="10" required autocomplete="current-password">
              <div class="input-group-append">
                <button class="btn btn-secondary" type="button" onclick="showPasswordLogin();" title="Ver contraseña"><span class="fa fa-eye-slash icon"></span></button>
              </div>
            </div>
          </div>
          <div class="input-group">
              <button type="submit" class="btn btn-primary btn-block btn-lg" title="Iniciar sesión" onclick="validateFormLogin();">Iniciar sesión</button>
          </div>
        </form>
        <div class="input-group">
          <p class="mt-4 mb-0">
            <a type="button" onclick="cleanModal();" class="text-primary" title="¿Has olvidado tu contraseña?" data-toggle="modal" data-target="#modal-recover-password">¿Has olvidado tu contraseña?</a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- jQuery -->
  <script src="./assets/plugins/jquery/jquery-3.6.0.min.js"></script>
  <!-- Bootstrap 4 -->
  <script src="./assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- AdminLTE App -->
  <script src="./assets/js/adminlte/adminlte.min.js"></script>
  <!-- Scripts Own -->
  <script src="./assets/js/general/general.js"></script>
  <script src="./assets/js/login/login.js"></script>
</body>
</html>