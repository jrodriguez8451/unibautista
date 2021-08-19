<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Unibautista | Iniciar sesión</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Fav Icon -->
  <link rel="icon" href="./assets/icons/favicon.png" type="image/png">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="./assets/plugins/fontawesome-free/css/all.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="./assets/plugins/ionicons/css/ionicons.min.css">
  <!-- icheck bootstrap -->
  <link rel="stylesheet" href="./assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="./assets/css/adminlte/adminlte.min.css">
  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="./assets/css/fonts/main.font.css">
</head>
<body class="hold-transition login-page">
<div class="login-box">
  <div class="login-logo">
    <a href="http://www.unibautista.edu.co/" target="_blank" title="Página web"><i class="fa fa-university" aria-hidden="true"></i><br><b>Unibautista</b></a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Bienvenido de nuevo</p>
      <form action="login" method="POST">
        <div class="form-group">
          <select name="rol" class="form-control text-muted" required>
            <option value="" class="text-muted">Seleccione rol</option>
            <?php
                foreach($query as $rol){
                  echo '<option value='.$rol['rol_id'].'>'.$rol['rol_descripcion'].'</option>';
                }
            ?>
          </select>
          <input type="number" hidden value="1" name="enter">
        </div>
        <div class="input-group mb-3">
          <input type="email" name="email" id="email" class="form-control" placeholder="Correo" maxlength="45" required>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
            <div class="input-group">
              <input type="password" name="password" id="password" class="form-control" placeholder="Contraseña" maxlength="50" required>
              <div class="input-group-append">
                <button class="btn btn-primary" type="button" onclick="showPasswordLogin();" title="Ver contraseña"> <span class="fa fa-eye-slash icon"></span> </button>
              </div>
            </div>
        </div>
        <div></div>
        <div class="">
          <!-- /.col -->
          <div class="input-group mb-3">
            <button type="submit" class="btn btn-primary btn-block" title="Iniciar sesión">Iniciar sesión</button>
          </div>
          <!-- /.col -->
        </div>
      </form>
      <!-- /.social-auth-links -->
      <p class="mb-1">
        <a href="forgot-password" title="Olvidé mi contraseña">Olvidé mi contraseña</a>
      </p>
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
<!-- /.login-box -->
<!-- jQuery -->
<script src="./assets/plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="./assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="./assets/js/adminlte/adminlte.min.js"></script>
<!-- Login -->
<script src="./assets/js/login/login.js"></script>
</body>
</html>