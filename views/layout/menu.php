<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <div>
        <a href="http://www.unibautista.edu.co/" class="brand-link center-text" target="_blank"  title="Unibautista">
            <h3 class="brand-text text-center">
                <i class="fa fa-university" aria-hidden="true"></i> Unibautista
            </h3>
        </a>
    </div>
    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel center-text">
            <div class="info mt-1 mb-1 center-text">
                <a href="" title="Usuario" class="d-block brand-text center-text"><?php echo $_SESSION['usu_nom']; ?></a>
                <a href="" title="Rol" class="d-block brand-text center-text"><?php echo $_SESSION['usu_rol']; ?></a>
            </div>
        </div>
        <?php
            if ($_SESSION['usu_rol']=='Administrador') {
                include('administradorView.php');
            }elseif ($_SESSION['usu_rol']=='Aprendiz') {
                include('aprendizView.php');
            }elseif ($_SESSION['usu_rol']=='Coordinador de Sistemas') {
                include('coordinadorSistemasView.php');
            }elseif ($_SESSION['usu_rol']=='Asistente de Rectoria') {
                include('asistenteRectoriaView.php');
            }else {
                echo "<script>alert('Lo sentimos, el rol asignado no corresponde con el perfil.')</script>";
                echo ("<script> location.href='logout'; </script>");
                exit();
            }
        ?>
    </div>
    <!-- /.sidebar -->
</aside>
