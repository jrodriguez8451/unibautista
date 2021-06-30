<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Unibautista</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="./content/plugins/fontawesome-free/css/all.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="./content/plugins/ionicons/css/ionicons.min.css">
    <!-- Tempusdominus Bbootstrap 4 -->
    <link rel="stylesheet" href="./content/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
    <!-- iCheck -->
    <link rel="stylesheet" href="./content/plugins/icheck-bootstrap/icheck-bootstrap.min.css">
    <!-- JQVMap -->
    <link rel="stylesheet" href="./content/plugins/jqvmap/jqvmap.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="./content/assets/css/adminlte/adminlte.min.css">
    <!-- overlayScrollbars -->
    <link rel="stylesheet" href="./content/plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
    <!-- Daterange picker -->
    <link rel="stylesheet" href="./content/plugins/daterangepicker/daterangepicker.css">
    <!-- summernote -->
    <link rel="stylesheet" href="./content/plugins/summernote/summernote-bs4.css">
    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="./content/assets/css/fonts/main.font.css">
</head>
<body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
        <?php
            include("views/layout/header.php");
            include("views/layout/menu.php");
            include("views/layout/header.php");
        ?>
            <section>
                <hr>
                    <p class="text-center">Contenido Principal</p>
                    <?php
                         if(isset($_GET['ruta'])){
                            if(
                                $_GET['ruta']=="C_inicio"||
                                $_GET['ruta']=="C_thirdparties"||
                                $_GET['ruta']=="C_users"||
                                $_GET['ruta']=="C_Tipo_documento"||
                                $_GET['ruta']=="C_rol"||
                                $_GET['ruta']=="C_suppliersListActive"||
                                $_GET['ruta']=="C_Tipo_Maquinaria"||
                                $_GET['ruta']=="C_Tipo_Zona"||
                                $_GET['ruta']=="C_Tipo_Herramienta"||
                                $_GET['ruta']=="C_Tipo_Material"||
                                $_GET['ruta']=="C_machinery"||
                                $_GET['ruta']=="C_ToolsListActive"||
                                $_GET['ruta']=="C_material"||
                                $_GET['ruta']=="C_cellar"||
                                $_GET['ruta']=="C_Tipo_dano"||
                                $_GET['ruta']=="C_inventario_consultar"||
                                $_GET['ruta']=="C_registro_compras"||
                                $_GET['ruta']=="C_reguistrar_anomalia"||
                                $_GET['ruta']=="C_mis_reportes"||
                                $_GET['ruta']=="C_caso"||
                                $_GET['ruta']=="C_consultar_caso"||
                                $_GET['ruta']=="C_ordenes_pestanas"||
                                $_GET['ruta']=="C_reporte_caso1"||
                                $_GET['ruta']=="C_reporte_orden"
                                ){
                              include('controllers/'.$_GET['ruta'].".php"); 
                            }else{
                              include('views/404.php');
                            }
                          }else{
                            include('controllers/homeController.php');
                          }
                          include('views/layout/footer.php');
                          ?>
                    
                <hr>
            </section>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->
    </div>
    <!-- ./wrapper -->
    <!-- jQuery -->
    <script src="./content/plugins/jquery/jquery.min.js"></script>
    <!-- jQuery UI 1.11.4 -->
    <script src="./content/plugins/jquery-ui/jquery-ui.min.js"></script>
    <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
    <script>
        $.widget.bridge('uibutton', $.ui.button)
    </script>
    <!-- Bootstrap 4 -->
    <script src="./content/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- ChartJS -->
    <script src="./content/plugins/chart.js/Chart.min.js"></script>
    <!-- Sparkline -->
    <script src="./content/plugins/sparklines/sparkline.js"></script>
    <!-- JQVMap -->
    <script src="./content/plugins/jqvmap/jquery.vmap.min.js"></script>
    <script src="./content/plugins/jqvmap/maps/jquery.vmap.usa.js"></script>
    <!-- jQuery Knob Chart -->
    <script src="./content/plugins/jquery-knob/jquery.knob.min.js"></script>
    <!-- daterangepicker -->
    <script src="./content/plugins/moment/moment.min.js"></script>
    <script src="./content/plugins/daterangepicker/daterangepicker.js"></script>
    <!-- Tempusdominus Bootstrap 4 -->
    <script src="./content/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
    <!-- Summernote -->
    <script src="./content/plugins/summernote/summernote-bs4.min.js"></script>
    <!-- overlayScrollbars -->
    <script src="./content/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
    <!-- AdminLTE App -->
    <script src="./content/assets/scripts/adminlte/adminlte.js"></script>
    <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
    <script src="./content/assets/scripts/pages/dashboard.js"></script>
    <!-- AdminLTE for demo purposes -->
    <script src="./content/assets/scripts/adminlte/demo.js"></script>
</body>
</html>