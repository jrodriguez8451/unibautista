<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Roles</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="rol">Unibautista</a></li>
                        <li class="breadcrumb-item active">Roles</li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
            <!-- Table -->
            <table id="tabla_usuario" class="table table-striped table-bordered table-hover mt-4 table-style" cellspacing="0" width="100%">
                <!-- ENCABEZADO DE LA TABLA -->
                <thead id="center-table" class="bg-primary text-white">
                    <tr>
                        <th>Código</th>
                        <th>Rol</th>
                        <th>Fecha de Registro</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <!-- CUERPO DE LA TABLA -->
                <tbody>
                    <?php while($rows = mysqli_fetch_array($list)) { ?>
                        <tr>
                            <td><?php echo $rows['rol_id']; ?> </td>
                            <td><?php echo $rows['rol_descripcion']; ?></td>
                            <td><?php echo $rows['rol_fecha_registro']; ?></td>
                            <td> 
                                <a onclick="SetData_Rol(<?php echo $rows['rol_id'];?>,'<?php echo $rows['rol_descripcion'];?>,'<?php echo $rows['rol_fecha_registro']?>')"  data-toggle="modal" data-target="#modal_update_rol" type="button" class="btn btn-warning text-white  btn-warning-animation" title="Actualizar"><i class="fas fa-pencil-alt"></i></a>
                            
                                <a data-toggle="modal" data-target="#modal_delete_rol" type="button"  onclick="SetData_Rol(<?php echo $rows['rol_id'];?>,null)"  class="btn btn-danger text-white btn-danger-animation" title="Eliminar"><i class="fas fa-trash"></i></a> 
                            </td>
                        </tr>
                    <?php } ?>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="6">
                            <div>
                                <a type="button" class="btn btn-info text-white btn-info-animation insert-button" title="Crear Nuevo Rol" data-toggle="modal" data-target="#modal_insertar_usuario"><i class="fas fa-user-tag  nav-icon"></i> Crear Nuevo Rol</a>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
            <!-- End Table -->
        </div><!-- /.container-fluid -->
    </div>
</div> 
<!-- End Content Wrapper. Contains page content -->