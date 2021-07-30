<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <div>
        <a href="https://www.unibautista.edu.co/" class="brand-link" target="_blank"  title="Unibautista">
            <h3 class="brand-text text-center">
                <i class="fa fa-university" aria-hidden="true"></i> Unibautista
            </h3>
        </a>
    </div>
    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel">
            <center>
            <div class="info">
                <a href="" title="Usuario" class="d-block brand-text"><?php echo $_SESSION['nom_app']; ?></a>
                <a href="" title="Rol" class="d-block brand-text"><?php echo $_SESSION['nameRol']; ?></a>
            </div>
            </center>
        </div>
        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library -->
                <li class="nav-header">GENERALES</li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="fas fa-user-tie  nav-icon"></i><p>Empleado</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="fas fa-desktop  nav-icon" aria-hidden="true"></i><p>Computador</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="fas fa-hdd  nav-icon"></i><p>Dispositivo</p>
                    </a>
                    <hr class="line-section">
                </li>
                <li class="nav-header">OPCIONES</li>
                <li class="nav-item has-treeview">
                    <a href="#" class="nav-link active" title="Panel de Control">
                        <i class="fa fa-cog"></i>
                        <p>Panel de Control<i class="right fas fa-angle-left"></i></p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item has-treeview">
                            <a href="#" class="nav-link">
                                <i class="fas fa-code-branch"></i>
                                <p>Tipos<i class="fas fa-angle-left right"></i></p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="tipo-de-documento" class="nav-link">
                                        <i class="far fa-circle nav-icon"></i><p>Tipo de Documento</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="tipo-de-computador" class="nav-link">
                                        <i class="far fa-circle nav-icon"></i><p>Tipo de Computador</p>
                                    </a>
                                </li>
                                <hr class="line-section">
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="estado" class="nav-link">
                                <i class="fas fa-star nav-icon"></i><p>Estado</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="rol" class="nav-link">
                                <i class="fas fa-user-tag  nav-icon"></i><p>Rol</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="usuario" class="nav-link">
                            <i class="fas fa-user nav-icon"></i><p>Usuario</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">
                                <i class="fas fa-building nav-icon"></i><p>Oficina</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">
                                <i class="fas fa-heartbeat  nav-icon"></i><p>EPS</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">
                                <i class="fas fa-hard-hat  nav-icon"></i><p>ARL</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">
                                <i class="fas fa-cash-register  nav-icon"></i><p>Caja de Compensación</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">
                                <i class="fas fa-piggy-bank nav-icon"></i><p>Fondo de Pensión</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">
                                <i class="fab fa-windows  nav-icon"></i><p>Sistema Operativo</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">
                                <i class="fa fa-tags  nav-icon" aria-hidden="true"></i><p>Marca</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">
                                <i class="fas fa-building nav-icon"></i><p>Oficina</p>
                            </a>
                        </li>
                        <hr class="line-section">
                    </ul>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
