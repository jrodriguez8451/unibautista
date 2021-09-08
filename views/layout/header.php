<?php
    include('./controllers/profile.php');
?>
<!-- Navbar -->
<nav class="main-header navbar navbar-expand navbar-white navbar-light" draggable="true">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
        <li class="nav-item d-sm-inline-block">
            <a class="nav-link"  title="Menú" data-widget="pushmenu" href="#" role="button">
                <i class="fas fa-bars text-secondary" aria-hidden="true"></i> Menú
            </a>
        </li>
        <li class="nav-item d-sm-inline-block">
            <a href="inicio" class="nav-link"  title="Inicio">
                <i class="fa fa-home text-secondary" aria-hidden="true"></i> Inicio
            </a>
        </li>
        <li class="nav-item d-sm-inline-block">
            <a type="button" class="nav-link" title="Información del Usuario"  data-toggle="modal"  data-target="#modal-detail-profile">
                <i class="fa fa-user text-secondary" aria-hidden="true"></i> Perfil
            </a>
        </li>
    </ul>
    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
        <!-- Messages Dropdown Menu -->
        <li class="nav-item d-sm-inline-block">
            <a href="logout"  title="Cerrar sesión" class="nav-link" data-slide="true" role="button" onclick="return confirm('¿Realmente deseas cerrar sesión?');">
                <i class="fa fa-power-off text-secondary"></i>  Salir
            </a>
        </li>
    </ul>
</nav>
<!-- /.navbar -->