// Insertar Empleado Usando Ajax
function insertEmployeeAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let numero_documento        = $('#ins-usu-num-doc').val();
    let tipo_documento          = $('#ins-emp-tip-doc').val();
    let fecha_expedicion        = $('#ins-emp-fec-exp').val();
    let departamento_expedicion = $('#ins-emp-dep-doc').val();
    let municipio               = $('#ins-emp-mun-exp').val();
    let primer_nombre           = $('#ins-emp-pri-nom').val();
    let primer_apellido         = $('#ins-emp-pri-ape').val();
    let segundo_apellido        = $('#ins-emp-seg-ape').val();
    let genero                  = $('#ins-emp-gen').val();
    let fecha_nacimiento        = $('#ins-emp-fec-nac').val();
    let estado_civil            = $('#ins-emp-est-civ').val();
    let direccion               = $('#ins-emp-dir').val();
    let celular1                = $('#ins-emp-cel-uno').val();
    let celular2                = $('#ins-emp-cel-dos').val();
    let telefono1               = $('#ins-emp-tel-uno').val();
    let telefono2               = $('#ins-emp-tel-dos').val();
    let correo1                 = $('#ins-emp-cor-per').val();
    let correo2                 = $('#ins-emp-cor-ins').val();
    let departamento            = $('#ins-emp-dep').val();
    let ciudad                  = $('#ins-emp-ciu').val();
    let comuna                  = $('#ins-emp-com').val();
    let barrio                  = $('#ins-emp-bar').val();
    let estrato                 = $('#ins-emp-est').val();
    let familia                 = $('#ins-emp-fam').val();
    let eps                     = $('#ins-emp-eps').val();
    let arl                     = $('#ins-emp-arl').val();
    let caja_compensacion       = $('#ins-em-caj-com').val();
    let fondo_pension           = $('#ins-emp-fon-pen').val();
    let formacion_academica     = $('#ins-emp-for').val();
    let tipo_contrato           = $('#ins-tip-con').val();
    let cargo                   = $('#ins-emp-car').val();
    let salario                 = $('#ins-emp-sal').val();
    let fecha_ingreso_empresa   = $('#ins-emp-fec-ing').val();
    let fecha_inicio_laboral    = $('#ins-emp-fec-ini').val();

    $('#insert-employee').click(function() {
        if ($('#ins-emp-tip-doc').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-dep-doc').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-gen').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-est-civ').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-dep').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-com').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-est').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-fam').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-eps').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-arl').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-em-caj-com').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-fon-pen').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-tip-con').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-car').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        }
    });

    // Condicion para evitar campos vacios
    if (numero_documento.length == 0 || tipo_documento.length == 0 || fecha_expedicion.length == 0 || departamento_expedicion.length == 0 || municipio.length == 0 || primer_nombre.length == 0 || primer_apellido.length == 0 || segundo_apellido.length == 0 || genero.length == 0 || fecha_nacimiento.length == 0 || estado_civil.length == 0 || direccion.length == 0 || celular1.length == 0 || celular2.length == 0 || telefono1.length == 0 || telefono2.length == 0 || correo1.length == 0 || correo2.length == 0 || departamento.length == 0 || ciudad.length == 0 || comuna.length == 0 || barrio.length == 0 || estrato.length == 0 || familia.length == 0 || eps.length == 0 || arl.length == 0 || caja_compensacion.length == 0 || fondo_pension.length == 0 || formacion_academica.length == 0 || tipo_contrato.length == 0 || cargo.length == 0 || salario.length == 0 || fecha_ingreso_empresa.length == 0 || fecha_inicio_laboral.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
    }else{
        // Poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-insert-employee').serialize();
        // Almacenamos dentro de una variable un parametro que pueda recibir el controlador para que ejecute la funcion
        let accion = "&insert_employee=1";
        // Enviamos la informacion del formulario + la variable que recibirá el controlador
        dataString = dataString + accion;  
        $.ajax({
            // Realiza una petición POST a una URL provista.
            method:"POST",
            // Ruta en donde se enviará los datos, url en donde hacemos la peticion ajax
            url: 'index.php?ruta=empleado',
            // Si todo sale bien en el success, el data es todo el contenido html que tiene el index
            data:dataString,
            // Establece una función a ejecutar si la petición a sido satisfactoria
            success: function(){
                // Load es cargar, toma el id de la tabla y vas a cargar nuevamente esta tabla, es un refrescar la tabla
                $('#load').load('index.php?ruta=empleado #load',function(){
                // Aqui hacemos una funcion que lo que haces es llamarme nuevamente a la tabla cuando todo lo anterior se ejecute
                    genericTable();
                });
                // Alerta de sweetalert
                crudAlert("success","¡Empleado creado con éxito!","#28a745");
            },
            error: function(){
                genericAlert("error","Error","¡El registro ya existe en la base de datos!","#dc3545");       
            },
            fail: function(){
                genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
            }
        });
        cleanModal();
    }
}

//FUNCION PARA VER DETALLE DEL EMPLEADO
function detailUser(det_usu_id,det_usu_num_doc,det_usu_tip_doc,det_usu_pri_nom,det_usu_seg_nom,det_usu_pri_ape,det_usu_seg_ape,det_usu_cel,det_usu_tel,det_usu_dir,det_usu_cor,det_usu_fec_reg,det_usu_rol,det_usu_est) {
    // .val() sirva para obtener el valor de un elemento
    $('#modal-detail-user .modal-body .det-usu-id').val(det_usu_id);
    $('#modal-detail-user .modal-body .det-usu-num-doc').val(det_usu_num_doc);
    $('#modal-detail-user .modal-body .det-usu-tip-doc').val(det_usu_tip_doc);
    $('#modal-detail-user .modal-body .det-usu-pri-nom').val(det_usu_pri_nom);
    $('#modal-detail-user .modal-body .det-usu-seg-nom').val(det_usu_seg_nom);
    $('#modal-detail-user .modal-body .det-usu-pri-ape').val(det_usu_pri_ape);
    $('#modal-detail-user .modal-body .det-usu-seg-ape').val(det_usu_seg_ape);
    $('#modal-detail-user .modal-body .det-usu-cel').val(det_usu_cel);
    $('#modal-detail-user .modal-body .det-usu-tel').val(det_usu_tel);
    $('#modal-detail-user .modal-body .det-usu-dir').val(det_usu_dir);
    $('#modal-detail-user .modal-body .det-usu-cor').val(det_usu_cor);
    $('#modal-detail-user .modal-body .det-usu-fec-reg').val(det_usu_fec_reg);
    $('#modal-detail-user .modal-body .det-usu-rol').val(det_usu_rol);
    $('#modal-detail-user .modal-body .det-usu-est').val(det_usu_est);
}

// FUNCION PARA PINTAR LOS DATOS DEL EMPLEADO ANTES DE EDITAR
function updateEmployee(upd_emp_id,upd_usu_num_doc,upd_emp_tip_doc,upd_emp_fec_exp,upd_emp_dep_doc,upd_emp_mun_exp,upd_emp_pri_nom,upd_emp_seg_nom,upd_emp_pri_ape,upd_emp_seg_ape,upd_emp_gen,upd_emp_fec_nac,upd_emp_est_civ,upd_emp_dir,upd_emp_cel_uno,upd_emp_cel_dos,upd_emp_tel_uno,upd_emp_tel_dos,upd_emp_cor_per,upd_emp_cor_ins,upd_emp_dep,upd_emp_ciu,upd_emp_com,upd_emp_bar,upd_emp_est,upd_emp_fam,upd_emp_eps,upd_emp_arl,upd_em_caj_com,upd_emp_fon_pen,upd_emp_for,upd_tip_con,upd_emp_car,upd_emp_sal,upd_emp_fec_ing,upd_emp_fec_ini,upd_fam_emp_tip_doc_fau){
    $('#modal-update-employee .modal-body .upd-emp-id').val(upd_emp_id);
    $('#modal-update-employee .modal-body .upd-emp-num-doc').val(upd_usu_num_doc);
    $("#upd-emp-tip-doc option[value='"+upd_emp_tip_doc+"']").attr("selected",true);
    $('#modal-update-employee .modal-body .upd-emp-fec-exp').val(upd_emp_fec_exp);
    $("#upd-emp-dep-doc option[value='"+upd_emp_dep_doc+"']").attr("selected",true);
    $('#modal-update-employee .modal-body .upd-emp-mun-exp').val(upd_emp_mun_exp);
    $('#modal-update-employee .modal-body .upd-emp-pri-nom').val(upd_emp_pri_nom);
    $('#modal-update-employee .modal-body .upd-emp-seg-nom').val(upd_emp_seg_nom);
    $('#modal-update-employee .modal-body .upd-emp-pri-ape').val(upd_emp_pri_ape);
    $('#modal-update-employee .modal-body .upd-emp-seg-ape').val(upd_emp_seg_ape);
    $("#upd-emp-gen option[value='"+upd_emp_gen+"']").attr("selected",true);
    $('#modal-update-employee .modal-body .upd-emp-fec-nac').val(upd_emp_fec_nac);
    $("#upd-emp-est-civ option[value='"+upd_emp_est_civ+"']").attr("selected",true);
    $('#modal-update-employee .modal-body .upd-emp-dir').val(upd_emp_dir);
    $('#modal-update-employee .modal-body .upd-emp-cel-uno').val(upd_emp_cel_uno);
    $('#modal-update-employee .modal-body .upd-emp-cel-dos').val(upd_emp_cel_dos);
    $('#modal-update-employee .modal-body .upd-emp-tel-uno').val(upd_emp_tel_uno);
    $('#modal-update-employee .modal-body .upd-emp-tel-dos').val(upd_emp_tel_dos);
    $('#modal-update-employee .modal-body .upd-emp-cor-per').val(upd_emp_cor_per);
    $('#modal-update-employee .modal-body .upd-emp-cor-ins').val(upd_emp_cor_ins);
    $("#upd-emp-dep option[value='"+upd_emp_dep+"']").attr("selected",true);
    $('#modal-update-employee .modal-body .upd-emp-ciu').val(upd_emp_ciu);
    $("#upd-emp-com option[value='"+upd_emp_com+"']").attr("selected",true);
    $('#modal-update-employee .modal-body .upd-emp-bar').val(upd_emp_bar);
    $("#upd-emp-est option[value='"+upd_emp_est+"']").attr("selected",true);
    $("#upd-emp-fam option[value='"+upd_emp_fam+"']").attr("selected",true);
    $("#upd-emp-eps option[value='"+upd_emp_eps+"']").attr("selected",true);
    $("#upd-emp-arl option[value='"+upd_emp_arl+"']").attr("selected",true);
    $("#upd-em-caj-com option[value='"+upd_em_caj_com+"']").attr("selected",true);
    $("#upd-emp-fon-pen option[value='"+upd_emp_fon_pen+"']").attr("selected",true);
    $('#modal-update-employee .modal-body .upd-emp-for').val(upd_emp_for);
    $("#upd-tip-con option[value='"+upd_tip_con+"']").attr("selected",true);
    $("#upd-emp-car option[value='"+upd_emp_car+"']").attr("selected",true);
    $('#modal-update-employee .modal-body .upd-emp-sal').val(upd_emp_sal);
    $('#modal-update-employee .modal-body .upd-emp-fec-ing').val(upd_emp_fec_ing);
    $('#modal-update-employee .modal-body .upd-emp-fec-ini').val(upd_emp_fec_ini);
    $("#upd-fam-emp-tip-doc-fau option[value='"+upd_fam_emp_tip_doc_fau+"']").attr("selected",true);
}

//FUNCION PARA ACTUALIZAR UN EMPLEADO CON AJAX
function updateEmployeeAjax(){
    //Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let numero_documento        = $('#ins-usu-num-doc').val();
    let tipo_documento          = $('#ins-emp-tip-doc').val();
    let fecha_expedicion        = $('#ins-emp-fec-exp').val();
    let departamento_expedicion = $('#ins-emp-dep-doc').val();
    let municipio               = $('#ins-emp-mun-exp').val();
    let primer_nombre           = $('#ins-emp-pri-nom').val();
    let primer_apellido         = $('#ins-emp-pri-ape').val();
    let segundo_apellido        = $('#ins-emp-seg-ape').val();
    let genero                  = $('#ins-emp-gen').val();
    let fecha_nacimiento        = $('#ins-emp-fec-nac').val();
    let estado_civil            = $('#ins-emp-est-civ').val();
    let direccion               = $('#ins-emp-dir').val();
    let celular1                = $('#ins-emp-cel-uno').val();
    let celular2                = $('#ins-emp-cel-dos').val();
    let telefono1               = $('#ins-emp-tel-uno').val();
    let telefono2               = $('#ins-emp-tel-dos').val();
    let correo1                 = $('#ins-emp-cor-per').val();
    let correo2                 = $('#ins-emp-cor-ins').val();
    let departamento            = $('#ins-emp-dep').val();
    let ciudad                  = $('#ins-emp-ciu').val();
    let comuna                  = $('#ins-emp-com').val();
    let barrio                  = $('#ins-emp-bar').val();
    let estrato                 = $('#ins-emp-est').val();
    let familia                 = $('#ins-emp-fam').val();
    let eps                     = $('#ins-emp-eps').val();
    let arl                     = $('#ins-emp-arl').val();
    let caja_compensacion       = $('#ins-em-caj-com').val();
    let fondo_pension           = $('#ins-emp-fon-pen').val();
    let formacion_academica     = $('#ins-emp-for').val();
    let tipo_contrato           = $('#ins-tip-con').val();
    let cargo                   = $('#ins-emp-car').val();
    let salario                 = $('#ins-emp-sal').val();
    let fecha_ingreso_empresa   = $('#ins-emp-fec-ing').val();
    let fecha_inicio_laboral    = $('#ins-emp-fec-ini').val();

    $('#update-employee').click(function() {
        if ($('#ins-emp-tip-doc').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-dep-doc').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-gen').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-est-civ').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-dep').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-com').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-est').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-fam').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-eps').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-arl').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-em-caj-com').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-fon-pen').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-tip-con').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-car').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        }
    });

    // Condicion para evitar campos vacios
    if (numero_documento.length == 0 || tipo_documento.length == 0 || fecha_expedicion.length == 0 || departamento_expedicion.length == 0 || municipio.length == 0 || primer_nombre.length == 0 || primer_apellido.length == 0 || segundo_apellido.length == 0 || genero.length == 0 || fecha_nacimiento.length == 0 || estado_civil.length == 0 || direccion.length == 0 || celular1.length == 0 || celular2.length == 0 || telefono1.length == 0 || telefono2.length == 0 || correo1.length == 0 || correo2.length == 0 || departamento.length == 0 || ciudad.length == 0 || comuna.length == 0 || barrio.length == 0 || estrato.length == 0 || familia.length == 0 || eps.length == 0 || arl.length == 0 || caja_compensacion.length == 0 || fondo_pension.length == 0 || formacion_academica.length == 0 || tipo_contrato.length == 0 || cargo.length == 0 || salario.length == 0 || fecha_ingreso_empresa.length == 0 || fecha_inicio_laboral.length == 0){ 
        //retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        //Alerta de validacion
        validationAlert("¡Algunos campos no pueden quedar vacíos!","#ffc107");
    }else{
        //poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-update-employee').serialize();
        let accion = "&update_employee=1";
        dataString = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=empleado',
            data:dataString,
            success: function(){
                $('#load').load('index.php?ruta=empleado #load',function(){
                    genericTable();
                });
                crudAlert("success","¡Datos actualizados con éxito!","#28a745");
            },
            error:function(){
                genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
            }
        });
    }
}

// Funcion para Pintar el ID de un Estado antes de Eliminar
function deleteEmployee(del_emp_id,del_emp_pri_nom,del_emp_seg_nom,del_emp_pri_ape,del_emp_seg_ape){
    $('#modal-delete-employee .modal-body .del-emp-id').val(del_emp_id);
    $('#modal-delete-employee .modal-body .del-emp-pri_nom').text(del_emp_pri_nom);    
    $('#modal-delete-employee .modal-body .del-emp-seg_nom').text(del_emp_seg_nom);
    $('#modal-delete-employee .modal-body .del-emp-pri_ape').text(del_emp_pri_ape);
    $('#modal-delete-employee .modal-body .del-emp-seg_ape').text(del_emp_seg_ape);
}

// Funcion para Eliminar un Estado usando Ajax
function deleteEmployeeAjax(){
    let dataString = $('#form-delete-employee').serialize();
    let accion = "&delete_employee=1";
    dataString = dataString + accion;  
    $.ajax({
        method:"POST",
        url: 'index.php?ruta=empleado',
        data:dataString,
                success: function(){
            $('#load').load('index.php?ruta=empleado #load',function(){
                genericTable();
            });
            crudAlert("success","¡Empleado eliminado con éxito!","#28a745");
        },
        error:function(){
            genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
        }
    });
}

// Validacion de los Formularios

// Funcion que solo permite Texto dentro del Input

// Insertar primer nombre del usuario
$("#ins-usu-pri-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Insertar segundo nombre del usuario
$("#ins-usu-seg-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Insertar primer apellido del usuario
$("#ins-usu-pri-ape").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Insertar segundo apellido del usuario
$("#ins-usu-seg-ape").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Actualizar primer nombre del usuario
$("#upd-usu-pri-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar segundo nombre del usuario
$("#upd-usu-seg-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar primer apellido del usuario
$("#upd-usu-pri-ape").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar segundo apellido del usuario
$("#upd-usu-seg-ape").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Funcion que solo permite Numeros dentro del Input

// Insertar numero de documento del Usuario
$("#ins-usu-num-doc").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Insertar celular del Usuario
$("#ins-usu-cel").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Insertar telefono del Usuario
$("#ins-usu-tel").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar numero de documento del Usuario
$("#upd-usu-num-doc").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar celular del Usuario
$("#upd-usu-cel").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar telefono del Usuario
$("#upd-usu-tel").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion para evitar que se Ingresen Espacios en Blanco

// Insertar celular del Usuario
$("#ins-usu-cel").keyup(function(){              
    var ta = $("#ins-usu-cel");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 

// Insertar telefono del Usuario
$("#ins-usu-tel").keyup(function(){              
    var ta = $("#ins-usu-tel");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 

// Insertar correo del Usuario
$("#ins-usu-cor").keyup(function(){              
    var ta = $("#ins-usu-cor");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 

// Insertar contraseña del Usuario
$("#ins-usu-con").keyup(function(){              
    var ta = $("#ins-usu-con");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 


// Actualizar celular del Usuario
$("#upd-usu-cel").keyup(function(){              
    var ta = $("#upd-usu-cel");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 

// Actualizar telefono del Usuario
$("#upd-usu-tel").keyup(function(){              
    var ta = $("#upd-usu-tel");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 

// Actualizar correo del Usuario
$("#upd-usu-cor").keyup(function(){              
    var ta = $("#upd-usu-cor");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 

// Actualizar contraseña del Usuario
$("#upd-usu-con").keyup(function(){              
    var ta = $("#upd-usu-con");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 


// Funcion para mostrar  ocultar la contraseña
function showPasswordInsert(){
    var cambio = document.getElementById("ins-usu-con");
    if(cambio.type == "password"){
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    }else{
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
} 

function showPasswordUpdate(){
    var cambio = document.getElementById("upd-usu-con");
    if(cambio.type == "password"){
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    }else{
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
} 