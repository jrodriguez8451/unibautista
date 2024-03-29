<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Unibautista</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Fav Icon -->
    <link rel="icon" href="assets/icons/favicon/favicon.png" type="image/png">
    <!-- Theme style -->
    <link rel="stylesheet" href="assets/css/adminlte/adminlte.min.css">
    <!-- Tempusdominus Bbootstrap 4 -->
    <link rel="stylesheet" href="assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
    <!-- iCheck -->
    <link rel="stylesheet" href="assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css">
    <!-- CSS Own -->
    <link rel="stylesheet" href="assets/css/main/main.css">
    <!-- Font Awesome v5.15.4 -->
    <link rel="stylesheet" href="assets/plugins/fontawesome-free/css/all.min.css">
    <!-- CSS DataTables v1.10.24 -->
    <link rel="stylesheet" type="text/css" href="assets/plugins/datatables/datatables.min.css">
    <link rel="stylesheet" type="text/css" href="assets/plugins/datatables/DataTables-1.10.24/css/dataTables.bootstrap4.min.css">
    <!-- overlayScrollbars -->
    <link rel="stylesheet" href="assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
</head>
<body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
        <?php
            //Funcion para evitar el ingreso forzado por URL
            if(!isset($_SERVER['HTTP_REFERER'])){
                echo "<script> alert('Acción no permitida.'); </script>";
                echo ("<script> location.href='inicio'; </script>");
            }
            // Encabezado
            include('views/layout/header.php');
            // Menu de opciones
            include('views/layout/menu.php');
            //Controladores
            if(isset($_GET['ruta'])) {
                if(
                    $_GET['ruta']=='familia-del-empleado' ||
                    $_GET['ruta']=='caja-de-compensacion' ||
                    $_GET['ruta']=='tipo-de-documento'    ||
                    $_GET['ruta']=='sistema-operativo'    ||
                    $_GET['ruta']=='fondo-de-pension'     ||
                    $_GET['ruta']=='historia-laboral'     ||
                    $_GET['ruta']=='dispositivo'          ||
                    $_GET['ruta']=='computador'           ||
                    $_GET['ruta']=='proveedor'            ||
                    $_GET['ruta']=='empleado'             ||
                    $_GET['ruta']=='usuario'              || 
                    $_GET['ruta']=='oficina'              ||
                    $_GET['ruta']=='inicio'               ||
                    $_GET['ruta']=='marca'                ||
                    $_GET['ruta']=='cargo'                ||
                    $_GET['ruta']=='rol'                  ||  
                    $_GET['ruta']=='eps'                  ||
                    $_GET['ruta']=='arl'         
                ) {
                    include('controllers/'.$_GET['ruta'].'.php'); 
                } else {
                    include('views/error/404.php');
                }
            } else {
                include('controllers/inicio.php');
            }
        ?>
    </div>
    <!-- Footer -->    
    <?php
        include('views/layout/footer.php');
    ?>
    <!-- Scripts -->
    <!-- jQuery v3.6.0 -->
    <script src="assets/plugins/jquery/jquery-3.6.0.min.js"></script>
    <!-- Moment -->
    <script src="assets/plugins/moment/moment.min.js"></script>
    <!-- Bootstrap 4 -->
    <script src="assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- Tempusdominus Bootstrap 4 -->
    <script src="assets/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
    <!-- jQuery UI 1.11.4 -->
    <script src="assets/plugins/jquery-ui/jquery-ui.min.js"></script>
    <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
    <script>
        $.widget.bridge('uibutton', $.ui.button)
    </script>
    <!-- DataTables v1.10.24 -->
    <script src="assets/plugins/datatables/datatables.min.js"></script>
    <!-- DataTables Buttons v1.10.24 -->
    <script src="assets/plugins/datatables/Buttons-1.7.0/js/dataTables.buttons.min.js"></script>
    <script src="assets/plugins/datatables/JSZip-2.5.0/jszip.min.js"></script>
    <script src="assets/plugins/datatables/pdfmake-0.1.36/pdfmake.min.js"></script>
    <script src="assets/plugins/datatables/pdfmake-0.1.36/vfs_fonts.js"></script>
    <script src="assets/plugins/datatables/Buttons-1.7.0/js/buttons.html5.min.js"></script>
    <!-- Datatable translated to Spanish -->
    <script src="assets/plugins/datatables/main.tables.js"></script>
    <!-- Daterangepicker -->
    <script src="assets/plugins/daterangepicker/daterangepicker.js"></script>
    <!-- OverlayScrollbars -->
    <script src="assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
    <!-- AdminLTE App -->
    <script src="assets/js/adminlte/adminlte.js"></script>
    <!-- Sweetalert2 v8.2.6 -->
    <script src="assets/plugins/sweetalert2/sweetalert2.all.min.js"></script>
    <script src="assets/plugins/sweetalert2/sweetalert2@10.js"></script>
    <!-- Scripts Own -->
    <script src="assets/js/operating-system/operating-system.js"></script>
    <script src="assets/js/compensation-box/compensation-box.js"></script>
    <script src="assets/js/family-employee/family-employee.js"></script>
    <script src="assets/js/document-type/document-type.js"></script>
    <script src="assets/js/pension-fund/pension-fund.js"></script>
    <script src="assets/js/work-history/work-history.js"></script>
    <script src="assets/js/computer/computer.js"></script>
    <script src="assets/js/supplier/supplier.js"></script>
    <script src="assets/js/employee/employee.js"></script>
    <script src="assets/js/general/general.js"></script>
    <script src="assets/js/profile/profile.js"></script>
    <script src="assets/js/office/office.js"></script>
    <script src="assets/js/device/device.js"></script>
    <script src="assets/js/brand/brand.js"></script>
    <script src="assets/js/role/role.js"></script> 
    <script src="assets/js/user/user.js"></script>
    <script src="assets/js/post/post.js"></script>
    <script src="assets/js/arl/arl.js"></script>
    <script src="assets/js/eps/eps.js"></script>
</body>
</html>