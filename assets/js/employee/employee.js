// Recordatorio para registrar los datos exactos de la cedula de ciudadania
function alertEmployee(){
    genericAlert("warning","¡Recuerda!","Los datos a registrar deben ser los mismos del documento del empleado.","#ffc107");
}

// Insertar Empleado Usando Ajax
function insertEmployeeAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let numero_documento        = $('#ins-emp-num-doc').val();
    let tipo_documento          = $('#ins-emp-tip-doc').val();
    let fecha_expedicion        = $('#ins-emp-fec-exp').val();
    let departamento_expedicion = $('#ins-emp-dep-doc').val();
    let municipio               = $('#ins-emp-mun-exp').val();
    let nacionalidad            = $('#ins-emp-nac').val();
    let primer_nombre           = $('#ins-emp-pri-nom').val();
    let primer_apellido         = $('#ins-emp-pri-ape').val();
    let segundo_apellido        = $('#ins-emp-seg-ape').val();
    let genero                  = $('#ins-emp-gen').val();
    let fecha_nacimiento        = $('#ins-emp-fec-nac').val();
    let estado_civil            = $('#ins-emp-est-civ').val();
    let direccion               = $('#ins-emp-dir').val();
    let celular1                = $('#ins-emp-cel-uno').val();
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

    $('#insert-employee').click(function() {
        if ($('#ins-emp-tip-doc').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-gen').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-est-civ').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#ins-emp-com').val().trim() === '') {
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
        }
    });

    // Condicion para evitar campos vacios
    if (numero_documento.length == 0 || tipo_documento.length == 0 || fecha_expedicion.length == 0 || departamento_expedicion.length == 0 || municipio.length == 0 || nacionalidad.length == 0 || primer_nombre.length == 0 || primer_apellido.length == 0 || segundo_apellido.length == 0 || genero.length == 0 || fecha_nacimiento.length == 0 || estado_civil.length == 0 || direccion.length == 0 || celular1.length == 0 || correo1.length == 0 || correo2.length == 0 || departamento.length == 0 || ciudad.length == 0 || comuna.length == 0 || barrio.length == 0 || estrato.length == 0 || familia.length == 0 || eps.length == 0 || arl.length == 0 || caja_compensacion.length == 0 || fondo_pension.length == 0 || formacion_academica.length == 0){ 
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
                crudAlert("success","¡Empleado registrado con éxito!","#28a745");
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
function detailEmployee(det_emp_id,det_emp_num_doc,det_emp_tip_doc,det_emp_fec_exp,det_emp_dep_exp,det_emp_mun_exp,det_emp_nac,det_emp_pri_nom,det_emp_seg_nom,det_emp_pri_ape,det_emp_seg_ape,det_emp_gen,det_emp_fec_nac,det_emp_est_civ,det_emp_dir,det_emp_cel_uno,det_emp_cel_dos,det_emp_tel_uno,det_emp_tel_dos,det_emp_cor_per,det_emp_cor_ins,det_emp_dep,det_emp_ciu,det_emp_com,det_emp_bar,det_emp_est,det_emp_eps,det_emp_arl,det_emp_caj_com,det_emp_fon_pen,det_emp_for_aca,det_emp_con,det_emp_fec_reg,det_emp_fam_emp_tip_doc_fau,det_emp_fam_emp_num_doc_fau,det_emp_fam_emp_pri_nom_fau,det_emp_fam_emp_seg_nom_fau,det_emp_fam_emp_pri_ape_fau,det_emp_fam_emp_seg_ape_fau,det_emp_fam_emp_par_fau,det_emp_fam_emp_tip_doc_fad,det_emp_fam_emp_num_doc_fad,det_emp_fam_emp_pri_nom_fad,det_emp_fam_emp_seg_nom_fad,det_emp_fam_emp_pri_ape_fad,det_emp_fam_emp_seg_ape_fad,det_emp_fam_emp_par_fad,det_emp_fam_emp_tip_doc_fat,det_emp_fam_emp_num_doc_fat,det_emp_fam_emp_pri_nom_fat,det_emp_fam_emp_seg_nom_fat,det_emp_fam_emp_pri_ape_fat,det_emp_fam_emp_seg_ape_fat,det_emp_fam_emp_par_fat,det_emp_fam_emp_tip_doc_fac,det_emp_fam_emp_num_doc_fac,det_emp_fam_emp_pri_nom_fac,det_emp_fam_emp_seg_nom_fac,det_emp_fam_emp_pri_ape_fac,det_emp_fam_emp_seg_ape_fac,det_emp_fam_emp_par_fac,det_emp_fam_emp_tip_doc_fai,det_emp_fam_emp_num_doc_fai,det_emp_fam_emp_pri_nom_fai,det_emp_fam_emp_seg_nom_fai,det_emp_fam_emp_pri_ape_fai,det_emp_fam_emp_seg_ape_fai,det_emp_fam_emp_par_fai) {
    // .val() sirva para obtener el valor de un elemento
    $('#modal-detail-employee .modal-body .det-emp-id').val(det_emp_id);
    $('#modal-detail-employee .modal-body .det-emp-num-doc').val(det_emp_num_doc);
    $('#modal-detail-employee .modal-body .det-emp-tip-doc').val(det_emp_tip_doc);
    $('#modal-detail-employee .modal-body .det-emp-fec-exp').val(det_emp_fec_exp);
    $('#modal-detail-employee .modal-body .det-emp-dep-exp').val(det_emp_dep_exp);
    $('#modal-detail-employee .modal-body .det-emp-mun-exp').val(det_emp_mun_exp);
    $('#modal-detail-employee .modal-body .det-emp-nac').val(det_emp_nac);
    $('#modal-detail-employee .modal-body .det-emp-pri-nom').val(det_emp_pri_nom);
    $('#modal-detail-employee .modal-body .det-emp-seg-nom').val(det_emp_seg_nom);
    $('#modal-detail-employee .modal-body .det-emp-pri-ape').val(det_emp_pri_ape);
    $('#modal-detail-employee .modal-body .det-emp-seg-ape').val(det_emp_seg_ape);
    $('#modal-detail-employee .modal-body .det-emp-gen').val(det_emp_gen);
    $('#modal-detail-employee .modal-body .det-emp-fec-nac').val(det_emp_fec_nac);
    $('#modal-detail-employee .modal-body .det-emp-est-civ').val(det_emp_est_civ);
    $('#modal-detail-employee .modal-body .det-emp-dir').val(det_emp_dir);
    $('#modal-detail-employee .modal-body .det-emp-cel-uno').val(det_emp_cel_uno);
    $('#modal-detail-employee .modal-body .det-emp-cel-dos').val(det_emp_cel_dos);
    $('#modal-detail-employee .modal-body .det-emp-tel-uno').val(det_emp_tel_uno);
    $('#modal-detail-employee .modal-body .det-emp-tel-dos').val(det_emp_tel_dos);
    $('#modal-detail-employee .modal-body .det-emp-cor-per').val(det_emp_cor_per);
    $('#modal-detail-employee .modal-body .det-emp-cor-ins').val(det_emp_cor_ins);
    $('#modal-detail-employee .modal-body .det-emp-dep').val(det_emp_dep);
    $('#modal-detail-employee .modal-body .det-emp-ciu').val(det_emp_ciu);
    $('#modal-detail-employee .modal-body .det-emp-com').val(det_emp_com);
    $('#modal-detail-employee .modal-body .det-emp-bar').val(det_emp_bar);
    $('#modal-detail-employee .modal-body .det-emp-est').val(det_emp_est);
    $('#modal-detail-employee .modal-body .det-emp-eps').val(det_emp_eps);
    $('#modal-detail-employee .modal-body .det-emp-arl').val(det_emp_arl);
    $('#modal-detail-employee .modal-body .det-emp-caj-com').val(det_emp_caj_com);
    $('#modal-detail-employee .modal-body .det-emp-fon-pen').val(det_emp_fon_pen);
    $('#modal-detail-employee .modal-body .det-emp-for-aca').val(det_emp_for_aca);
    $('#modal-detail-employee .modal-body .det-emp-con').val(det_emp_con);
    $('#modal-detail-employee .modal-body .det-emp-fec-reg').val(det_emp_fec_reg);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-tip-doc-fau').val(det_emp_fam_emp_tip_doc_fau);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-num-doc-fau').val(det_emp_fam_emp_num_doc_fau);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-pri-nom-fau').val(det_emp_fam_emp_pri_nom_fau);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-seg-nom-fau').val(det_emp_fam_emp_seg_nom_fau);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-pri-ape-fau').val(det_emp_fam_emp_pri_ape_fau);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-seg-ape-fau').val(det_emp_fam_emp_seg_ape_fau);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-par-fau').val(det_emp_fam_emp_par_fau);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-tip-doc-fad').val(det_emp_fam_emp_tip_doc_fad);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-num-doc-fad').val(det_emp_fam_emp_num_doc_fad);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-pri-nom-fad').val(det_emp_fam_emp_pri_nom_fad);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-seg-nom-fad').val(det_emp_fam_emp_seg_nom_fad);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-pri-ape-fad').val(det_emp_fam_emp_pri_ape_fad);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-seg-ape-fad').val(det_emp_fam_emp_seg_ape_fad);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-par-fad').val(det_emp_fam_emp_par_fad);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-tip-doc-fat').val(det_emp_fam_emp_tip_doc_fat);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-num-doc-fat').val(det_emp_fam_emp_num_doc_fat);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-pri-nom-fat').val(det_emp_fam_emp_pri_nom_fat);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-seg-nom-fat').val(det_emp_fam_emp_seg_nom_fat);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-pri-ape-fat').val(det_emp_fam_emp_pri_ape_fat);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-seg-ape-fat').val(det_emp_fam_emp_seg_ape_fat);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-par-fat').val(det_emp_fam_emp_par_fat);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-tip-doc-fac').val(det_emp_fam_emp_tip_doc_fac);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-num-doc-fac').val(det_emp_fam_emp_num_doc_fac);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-pri-nom-fac').val(det_emp_fam_emp_pri_nom_fac);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-seg-nom-fac').val(det_emp_fam_emp_seg_nom_fac);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-pri-ape-fac').val(det_emp_fam_emp_pri_ape_fac);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-seg-ape-fac').val(det_emp_fam_emp_seg_ape_fac);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-par-fac').val(det_emp_fam_emp_par_fac);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-tip-doc-fai').val(det_emp_fam_emp_tip_doc_fai);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-num-doc-fai').val(det_emp_fam_emp_num_doc_fai);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-pri-nom-fai').val(det_emp_fam_emp_pri_nom_fai);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-seg-nom-fai').val(det_emp_fam_emp_seg_nom_fai);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-pri-ape-fai').val(det_emp_fam_emp_pri_ape_fai);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-seg-ape-fai').val(det_emp_fam_emp_seg_ape_fai);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-par-fai').val(det_emp_fam_emp_par_fai);
}

// FUNCION PARA PINTAR LOS DATOS DEL EMPLEADO ANTES DE EDITAR
function updateEmployee(upd_emp_id,upd_emp_num_doc,upd_emp_tip_doc,upd_emp_fec_exp,upd_emp_dep_doc,upd_emp_mun_exp,upd_emp_nac,upd_emp_pri_nom,upd_emp_seg_nom,upd_emp_pri_ape,upd_emp_seg_ape,upd_emp_gen,upd_emp_fec_nac,upd_emp_est_civ,upd_emp_dir,upd_emp_cel_uno,upd_emp_cel_dos,upd_emp_tel_uno,upd_emp_tel_dos,upd_emp_cor_per,upd_emp_cor_ins,upd_emp_dep,upd_emp_ciu,upd_emp_com,upd_emp_bar,upd_emp_est,upd_emp_fam,upd_emp_eps,upd_emp_arl,upd_em_caj_com,upd_emp_fon_pen,upd_emp_for){
    $('#modal-update-employee .modal-body .upd-emp-id').val(upd_emp_id);
    $('#modal-update-employee .modal-body .upd-emp-num-doc').val(upd_emp_num_doc);
    $("#upd-emp-tip-doc option[value='"+upd_emp_tip_doc+"']").attr("selected",true);
    $('#modal-update-employee .modal-body .upd-emp-fec-exp').val(upd_emp_fec_exp);
    $('#modal-update-employee .modal-body .upd-emp-dep-doc').val(upd_emp_dep_doc);
    $('#modal-update-employee .modal-body .upd-emp-mun-exp').val(upd_emp_mun_exp);
    $('#modal-update-employee .modal-body .upd-emp-nac').val(upd_emp_nac);
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
    $('#modal-update-employee .modal-body .upd-emp-dep').val(upd_emp_dep);
    $('#modal-update-employee .modal-body .upd-emp-ciu').val(upd_emp_ciu);
    $('#modal-update-employee .modal-body .upd-emp-com').val(upd_emp_com);
    $('#modal-update-employee .modal-body .upd-emp-bar').val(upd_emp_bar);
    $('#modal-update-employee .modal-body .upd-emp-est').val(upd_emp_est);
    $("#upd-emp-fam option[value='"+upd_emp_fam+"']").attr("selected",true);
    $("#upd-emp-eps option[value='"+upd_emp_eps+"']").attr("selected",true);
    $("#upd-emp-arl option[value='"+upd_emp_arl+"']").attr("selected",true);
    $("#upd-em-caj-com option[value='"+upd_em_caj_com+"']").attr("selected",true);
    $("#upd-emp-fon-pen option[value='"+upd_emp_fon_pen+"']").attr("selected",true);
    $('#modal-update-employee .modal-body .upd-emp-for').val(upd_emp_for);
}

//FUNCION PARA ACTUALIZAR UN EMPLEADO CON AJAX
function updateEmployeeAjax(){
    //Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let numero_documento        = $('#upd-emp-num-doc').val();
    let tipo_documento          = $('#upd-emp-tip-doc').val();
    let fecha_expedicion        = $('#upd-emp-fec-exp').val();
    let departamento_expedicion = $('#upd-emp-dep-doc').val();
    let municipio               = $('#upd-emp-mun-exp').val();
    let nacionalidad            = $('#upd-emp-nac').val();
    let primer_nombre           = $('#upd-emp-pri-nom').val();
    let primer_apellido         = $('#upd-emp-pri-ape').val();
    let segundo_apellido        = $('#upd-emp-seg-ape').val();
    let genero                  = $('#upd-emp-gen').val();
    let fecha_nacimiento        = $('#upd-emp-fec-nac').val();
    let estado_civil            = $('#upd-emp-est-civ').val();
    let direccion               = $('#upd-emp-dir').val();
    let celular1                = $('#upd-emp-cel-uno').val();
    let correo1                 = $('#upd-emp-cor-per').val();
    let correo2                 = $('#upd-emp-cor-ins').val();
    let departamento            = $('#upd-emp-dep').val();
    let ciudad                  = $('#upd-emp-ciu').val();
    let comuna                  = $('#upd-emp-com').val();
    let barrio                  = $('#upd-emp-bar').val();
    let estrato                 = $('#upd-emp-est').val();
    let familia                 = $('#upd-emp-fam').val();
    let eps                     = $('#upd-emp-eps').val();
    let arl                     = $('#upd-emp-arl').val();
    let caja_compensacion       = $('#upd-em-caj-com').val();
    let fondo_pension           = $('#upd-emp-fon-pen').val();
    let formacion_academica     = $('#upd-emp-for').val();


    $('#update-employee').click(function() {
        if ($('#upd-emp-tip-doc').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-emp-dep-doc').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-emp-gen').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-emp-est-civ').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-emp-fam').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-emp-eps').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-emp-arl').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-em-caj-com').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-emp-fon-pen').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-emp-for').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } 
    });

    // Condicion para evitar campos vacios
    if (numero_documento.length == 0 || tipo_documento.length == 0 || fecha_expedicion.length == 0 || departamento_expedicion.length == 0 || municipio.length == 0 || nacionalidad.length == 0 || primer_nombre.length == 0 || primer_apellido.length == 0 || segundo_apellido.length == 0 || genero.length == 0 || fecha_nacimiento.length == 0 || estado_civil.length == 0 || direccion.length == 0 || celular1.length == 0 || correo1.length == 0 || correo2.length == 0 || departamento.length == 0 || ciudad.length == 0 || comuna.length == 0 || barrio.length == 0 || estrato.length == 0 || familia.length == 0 || eps.length == 0 || arl.length == 0 || caja_compensacion.length == 0 || fondo_pension.length == 0 || formacion_academica.length == 0){ 
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
        cleanModal();
        restartSelect();
    }
}

// Funcion para Pintar el ID de un Empleado antes de Eliminar
function deleteEmployee(del_emp_id,del_emp_pri_nom,del_emp_seg_nom,del_emp_pri_ape,del_emp_seg_ape){
    $('#modal-delete-employee .modal-body .del-emp-id').val(del_emp_id);
    $('#modal-delete-employee .modal-body .del-emp-pri_nom').text(del_emp_pri_nom);    
    $('#modal-delete-employee .modal-body .del-emp-seg_nom').text(del_emp_seg_nom);
    $('#modal-delete-employee .modal-body .del-emp-pri_ape').text(del_emp_pri_ape);
    $('#modal-delete-employee .modal-body .del-emp-seg_ape').text(del_emp_seg_ape);
}

// Funcion para Eliminar un Empleado usando Ajax
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


// Validacion de los Formularios - Insertar

// Funcion que solo permite Numeros dentro del Input

// Insertar numero de documento del Empleado
$("#ins-emp-num-doc").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-emp-num-doc").keyup(function(){              
    var ta = $("#ins-emp-num-doc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar letras
$("#ins-emp-num-doc").keyup(function(){              
    var ta = $("#ins-emp-num-doc");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-emp-num-doc").keyup(function(){              
    var ta = $("#ins-emp-num-doc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#ins-emp-num-doc").keyup(function(){              
    var ta = $("#ins-emp-num-doc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-emp-num-doc").keyup(function(){              
    var ta = $("#ins-emp-num-doc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar Municipio de Expedicion de Documento
$("#ins-emp-mun-exp").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#ins-emp-mun-exp").keyup(function(){              
    var ta = $("#ins-emp-mun-exp");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-emp-mun-exp").keyup(function(){              
    var ta = $("#ins-emp-mun-exp");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#ins-emp-mun-exp").keyup(function(){              
    var ta = $("#ins-emp-mun-exp");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-emp-mun-exp").keyup(function(){              
    var ta = $("#ins-emp-mun-exp");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar Departamento de Expedicion de Documento
$("#ins-emp-dep-doc").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#ins-emp-dep-doc").keyup(function(){              
    var ta = $("#ins-emp-dep-doc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-emp-dep-doc").keyup(function(){              
    var ta = $("#ins-emp-dep-doc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#ins-emp-dep-doc").keyup(function(){              
    var ta = $("#ins-emp-dep-doc");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-emp-dep-doc").keyup(function(){              
    var ta = $("#ins-emp-dep-doc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Insertar Nacionalidad del empleado
$("#ins-emp-nac").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#ins-emp-nac").keyup(function(){              
    var ta = $("#ins-emp-nac");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-emp-nac").keyup(function(){              
    var ta = $("#ins-emp-nac");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#ins-emp-nac").keyup(function(){              
    var ta = $("#ins-emp-nac");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-emp-nac").keyup(function(){              
    var ta = $("#ins-emp-nac");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Insertar primer nombre del empleado
$("#ins-emp-pri-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#ins-emp-pri-nom").keyup(function(){              
    var ta = $("#ins-emp-pri-nom");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-emp-pri-nom").keyup(function(){              
    var ta = $("#ins-emp-pri-nom");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#ins-emp-pri-nom").keyup(function(){              
    var ta = $("#ins-emp-pri-nom");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-emp-pri-nom").keyup(function(){              
    var ta = $("#ins-emp-pri-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar segundo nombre del empleado
$("#ins-emp-seg-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#ins-emp-seg-nom").keyup(function(){              
    var ta = $("#ins-emp-seg-nom");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-emp-seg-nom").keyup(function(){              
    var ta = $("#ins-emp-seg-nom");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#ins-emp-seg-nom").keyup(function(){              
    var ta = $("#ins-emp-seg-nom");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-emp-seg-nom").keyup(function(){              
    var ta = $("#ins-emp-seg-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar primer apellido del empleado
$("#ins-emp-pri-ape").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#ins-emp-pri-ape").keyup(function(){              
    var ta = $("#ins-emp-pri-ape");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-emp-pri-ape").keyup(function(){              
    var ta = $("#ins-emp-pri-ape");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#ins-emp-pri-ape").keyup(function(){              
    var ta = $("#ins-emp-pri-ape");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-emp-pri-ape").keyup(function(){              
    var ta = $("#ins-emp-pri-ape");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar segundo apellido del empleado
$("#ins-emp-seg-ape").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#ins-emp-seg-ape").keyup(function(){              
    var ta = $("#ins-emp-seg-ape");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-emp-seg-ape").keyup(function(){              
    var ta = $("#ins-emp-seg-ape");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#ins-emp-seg-ape").keyup(function(){              
    var ta = $("#ins-emp-seg-ape");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-emp-seg-ape").keyup(function(){              
    var ta = $("#ins-emp-seg-ape");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar Direccion de residencia del Empleado
$("#ins-emp-dir").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Actualizar direccion del Usuariio
$("#ins-emp-dir").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-emp-dir").keyup(function(){              
    var ta = $("#ins-emp-dir");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-emp-dir").keyup(function(){              
    var ta = $("#ins-emp-dir");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-emp-dir").keyup(function(){              
    var ta = $("#ins-emp-dir");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 

//Validacion para evitar las comillas
$("#ins-emp-dir").keyup(function(){              
    var ta = $("#ins-emp-dir");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar celular #1 del Empleado
// Insertar celular #1 - Validacion para evitar espacios en blanco
$("#ins-emp-cel-uno").keyup(function(){              
    var ta = $("#ins-emp-cel-uno");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
//Validacion para evitar caracteres raros
$("#ins-emp-cel-uno").keyup(function(){              
    var ta = $("#ins-emp-cel-uno");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar letras
$("#ins-emp-cel-uno").keyup(function(){              
    var ta = $("#ins-emp-cel-uno");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-emp-cel-uno").keyup(function(){              
    var ta = $("#ins-emp-cel-uno");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#ins-emp-cel-uno").keyup(function(){              
    var ta = $("#ins-emp-cel-uno");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-emp-cel-uno").keyup(function(){              
    var ta = $("#ins-emp-cel-uno");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Insertar celular #2 del Empleado
// Insertar celular #2 - Validacion para evitar espacios en blanco
$("#ins-emp-cel-dos").keyup(function(){              
    var ta = $("#ins-emp-cel-dos");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
//Validacion para evitar caracteres raros
$("#ins-emp-cel-dos").keyup(function(){              
    var ta = $("#ins-emp-cel-dos");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar letras
$("#ins-emp-cel-dos").keyup(function(){              
    var ta = $("#ins-emp-cel-dos");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-emp-cel-dos").keyup(function(){              
    var ta = $("#ins-emp-cel-dos");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#ins-emp-cel-dos").keyup(function(){              
    var ta = $("#ins-emp-cel-dos");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-emp-cel-dos").keyup(function(){              
    var ta = $("#ins-emp-cel-dos");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar telefono #1 del Empleado
// Insertar telefono #1 - Validacion para evitar espacios en blanco
$("#ins-emp-tel-uno").keyup(function(){              
    var ta = $("#ins-emp-tel-uno");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Insertar Telefono del empleado - Validacion para evitar caracteres acentuados
$("#ins-emp-tel-uno").keyup(function(){              
    var ta = $("#ins-emp-tel-uno");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono #1 - Validacion para evitar letras ñÑ
$("#ins-emp-tel-uno").keyup(function(){              
    var ta = $("#ins-emp-tel-uno");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono #1 - Validacion para evitar caracteres acentuados
$("#ins-emp-tel-uno").keyup(function(){              
    var ta = $("#ins-emp-tel-uno");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono #1 -  Validacion para evitar numeros pequeños
$("#ins-emp-tel-uno").keyup(function(){              
    var ta = $("#ins-emp-tel-uno");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono #1 - Validacion para evitar las comillas
$("#ins-emp-tel-uno").keyup(function(){              
    var ta = $("#ins-emp-tel-uno");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 

// Insertar telefono #2 del Empleado
// Insertar telefono #1 - Validacion para evitar espacios en blanco
$("#ins-emp-tel-dos").keyup(function(){              
    var ta = $("#ins-emp-tel-dos");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Insertar Telefono del empleado - Validacion para evitar caracteres acentuados
$("#ins-emp-tel-dos").keyup(function(){              
    var ta = $("#ins-emp-tel-dos");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono #2 - Validacion para evitar letras ñÑ
$("#ins-emp-tel-dos").keyup(function(){              
    var ta = $("#ins-emp-tel-dos");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono #2 - Validacion para evitar caracteres acentuados
$("#ins-emp-tel-dos").keyup(function(){              
    var ta = $("#ins-emp-tel-dos");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono #2 -  Validacion para evitar numeros pequeños
$("#ins-emp-tel-dos").keyup(function(){              
    var ta = $("#ins-emp-tel-dos");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Telefono #2 - Validacion para evitar las comillas
$("#ins-emp-tel-dos").keyup(function(){              
    var ta = $("#ins-emp-tel-dos");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


//  Insertar correo personal del Empleado
$("#ins-emp-cor-per").keyup(function(){              
    var ta = $("#ins-emp-cor-per");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-emp-cor-per").keyup(function(){              
    var ta = $("#ins-emp-cor-per");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});
$("#ins-emp-cor-per").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-emp-cor-per").keyup(function(){              
    var ta = $("#ins-emp-cor-per");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-emp-cor-per").keyup(function(){              
    var ta = $("#ins-emp-cor-per");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-emp-cor-per").keyup(function(){              
    var ta = $("#ins-emp-cor-per");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 

//  Insertar correo institucional del Empleado
$("#ins-emp-cor-ins").keyup(function(){              
    var ta = $("#ins-emp-cor-ins");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-emp-cor-ins").keyup(function(){              
    var ta = $("#ins-emp-cor-ins");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});
$("#ins-emp-cor-ins").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-emp-cor-ins").keyup(function(){              
    var ta = $("#ins-emp-cor-ins");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-emp-cor-ins").keyup(function(){              
    var ta = $("#ins-emp-cor-ins");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-emp-cor-ins").keyup(function(){              
    var ta = $("#ins-emp-cor-ins");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 

// Insertar Departamento de Residencia del Empleado
$("#ins-emp-dep").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#ins-emp-dep").keyup(function(){              
    var ta = $("#ins-emp-dep");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-emp-dep").keyup(function(){              
    var ta = $("#ins-emp-dep");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#ins-emp-dep").keyup(function(){              
    var ta = $("#ins-emp-dep");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-emp-dep").keyup(function(){              
    var ta = $("#ins-emp-dep");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar ciudad de residencia del empleado
$("#ins-emp-ciu").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#ins-emp-ciu").keyup(function(){              
    var ta = $("#ins-emp-ciu");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-emp-ciu").keyup(function(){              
    var ta = $("#ins-emp-ciu");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#ins-emp-ciu").keyup(function(){              
    var ta = $("#ins-emp-ciu");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-emp-ciu").keyup(function(){              
    var ta = $("#ins-emp-ciu");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Insertar comuna del empleado
//Validacion para evitar caracteres raros
$("#ins-emp-com").keyup(function(){              
    var ta = $("#ins-emp-com");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-emp-com").keyup(function(){              
    var ta = $("#ins-emp-com");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#ins-emp-com").keyup(function(){              
    var ta = $("#ins-emp-com");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-emp-com").keyup(function(){              
    var ta = $("#ins-emp-com");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

//Insertar Estrato del Empleado
// Insertar Estrato - Validacion para evitar caracteres acentuados
$("#ins-emp-est").keyup(function(){              
    var ta = $("#ins-emp-est");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Insertar Estrato - Validacion para evitar letras ñÑ
$("#ins-emp-est").keyup(function(){              
    var ta = $("#ins-emp-est");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Insertar Estrato - Validacion para evitar caracteres acentuados
$("#ins-emp-est").keyup(function(){              
    var ta = $("#ins-emp-est");
    letras = ta.val().replace(/[-|!"#$%&/=+¡?¿´´.,:{};()/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Insertar Estrato -  Validacion para evitar numeros pequeños
$("#ins-emp-est").keyup(function(){              
    var ta = $("#ins-emp-est");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Insertar Estrato - Validacion para evitar las comillas
$("#ins-emp-est").keyup(function(){              
    var ta = $("#ins-emp-est");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Insertar barrio de residencia del empleado
//Validacion para evitar caracteres raros
$("#ins-emp-bar").keyup(function(){              
    var ta = $("#ins-emp-bar");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-emp-bar").keyup(function(){              
    var ta = $("#ins-emp-bar");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#ins-emp-bar").keyup(function(){              
    var ta = $("#ins-emp-bar");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-emp-bar").keyup(function(){              
    var ta = $("#ins-emp-bar");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar formacion academica del empleado
$("#ins-emp-for").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#ins-emp-for").keyup(function(){              
    var ta = $("#ins-emp-for");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-emp-for").keyup(function(){              
    var ta = $("#ins-emp-for");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#ins-emp-for").keyup(function(){              
    var ta = $("#ins-emp-for");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#ins-emp-for").keyup(function(){              
    var ta = $("#ins-emp-for");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Insertar salario del empleado
$("#ins-emp-sal").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#ins-emp-sal").keyup(function(){              
    var ta = $("#ins-emp-sal");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar letras
$("#ins-emp-sal").keyup(function(){              
    var ta = $("#ins-emp-sal");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#ins-emp-sal").keyup(function(){              
    var ta = $("#ins-emp-sal");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#ins-emp-sal").keyup(function(){              
    var ta = $("#ins-emp-sal");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 

//Validacion para evitar las comillas
$("#ins-emp-sal").keyup(function(){              
    var ta = $("#ins-emp-sal");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});



// Validacion de los Formularios - Actualizar

// Funcion que solo permite Numeros dentro del Input

// Actualizar numero de documento del Empleado
$("#upd-emp-num-doc").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-emp-num-doc").keyup(function(){              
    var ta = $("#upd-emp-num-doc");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar letras
$("#upd-emp-num-doc").keyup(function(){              
    var ta = $("#upd-emp-num-doc");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-emp-num-doc").keyup(function(){              
    var ta = $("#upd-emp-num-doc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#upd-emp-num-doc").keyup(function(){              
    var ta = $("#upd-emp-num-doc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-emp-num-doc").keyup(function(){              
    var ta = $("#upd-emp-num-doc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar Municipio de Expedicion de Documento
$("#upd-emp-mun-exp").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#upd-emp-mun-exp").keyup(function(){              
    var ta = $("#upd-emp-mun-exp");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-emp-mun-exp").keyup(function(){              
    var ta = $("#upd-emp-mun-exp");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#upd-emp-mun-exp").keyup(function(){              
    var ta = $("#upd-emp-mun-exp");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-emp-mun-exp").keyup(function(){              
    var ta = $("#upd-emp-mun-exp");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar Departamento de Expedicion de Documento
$("#upd-emp-dep-doc").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#upd-emp-dep-doc").keyup(function(){              
    var ta = $("#upd-emp-dep-doc");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-emp-dep-doc").keyup(function(){              
    var ta = $("#upd-emp-dep-doc");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#upd-emp-dep-doc").keyup(function(){              
    var ta = $("#upd-emp-dep-doc");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-emp-dep-doc").keyup(function(){              
    var ta = $("#upd-emp-dep-doc");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar Nacionalidad del empleado
$("#upd-emp-nac").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#upd-emp-nac").keyup(function(){              
    var ta = $("#upd-emp-nac");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-emp-nac").keyup(function(){              
    var ta = $("#upd-emp-nac");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#upd-emp-nac").keyup(function(){              
    var ta = $("#upd-emp-nac");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-emp-nac").keyup(function(){              
    var ta = $("#upd-emp-nac");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar primer nombre del empleado
$("#upd-emp-pri-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#upd-emp-pri-nom").keyup(function(){              
    var ta = $("#upd-emp-pri-nom");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-emp-pri-nom").keyup(function(){              
    var ta = $("#upd-emp-pri-nom");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#upd-emp-pri-nom").keyup(function(){              
    var ta = $("#upd-emp-pri-nom");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-emp-pri-nom").keyup(function(){              
    var ta = $("#upd-emp-pri-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar segundo nombre del empleado
$("#upd-emp-seg-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#upd-emp-seg-nom").keyup(function(){              
    var ta = $("#upd-emp-seg-nom");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-emp-seg-nom").keyup(function(){              
    var ta = $("#upd-emp-seg-nom");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#upd-emp-seg-nom").keyup(function(){              
    var ta = $("#upd-emp-seg-nom");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-emp-seg-nom").keyup(function(){              
    var ta = $("#upd-emp-seg-nom");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar primer apellido del empleado
$("#upd-emp-pri-ape").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#upd-emp-pri-ape").keyup(function(){              
    var ta = $("#upd-emp-pri-ape");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-emp-pri-ape").keyup(function(){              
    var ta = $("#upd-emp-pri-ape");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#upd-emp-pri-ape").keyup(function(){              
    var ta = $("#upd-emp-pri-ape");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-emp-pri-ape").keyup(function(){              
    var ta = $("#upd-emp-pri-ape");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar segundo apellido del empleado
$("#upd-emp-seg-ape").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#upd-emp-seg-ape").keyup(function(){              
    var ta = $("#upd-emp-seg-ape");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-emp-seg-ape").keyup(function(){              
    var ta = $("#upd-emp-seg-ape");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#upd-emp-seg-ape").keyup(function(){              
    var ta = $("#upd-emp-seg-ape");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-emp-seg-ape").keyup(function(){              
    var ta = $("#upd-emp-seg-ape");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar Direccion de residencia del Empleado
$("#upd-emp-dir").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
// Actualizar direccion del Usuariio
$("#upd-emp-dir").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-emp-dir").keyup(function(){              
    var ta = $("#upd-emp-dir");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-emp-dir").keyup(function(){              
    var ta = $("#upd-emp-dir");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-emp-dir").keyup(function(){              
    var ta = $("#upd-emp-dir");
    letras = ta.val().replace(/[=|!"$%&()¡?¿´´:{};*+$<>@^_`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 

//Validacion para evitar las comillas
$("#upd-emp-dir").keyup(function(){              
    var ta = $("#upd-emp-dir");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar celular #1 del Empleado
// Actualizar celular #1 - Validacion para evitar espacios en blanco
$("#upd-emp-cel-uno").keyup(function(){              
    var ta = $("#upd-emp-cel-uno");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
//Validacion para evitar caracteres raros
$("#upd-emp-cel-uno").keyup(function(){              
    var ta = $("#upd-emp-cel-uno");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar letras
$("#upd-emp-cel-uno").keyup(function(){              
    var ta = $("#upd-emp-cel-uno");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-emp-cel-uno").keyup(function(){              
    var ta = $("#upd-emp-cel-uno");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#upd-emp-cel-uno").keyup(function(){              
    var ta = $("#upd-emp-cel-uno");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-emp-cel-uno").keyup(function(){              
    var ta = $("#upd-emp-cel-uno");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar celular #2 del Empleado
// Actualizar celular #2 - Validacion para evitar espacios en blanco
$("#upd-emp-cel-dos").keyup(function(){              
    var ta = $("#upd-emp-cel-dos");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
//Validacion para evitar caracteres raros
$("#upd-emp-cel-dos").keyup(function(){              
    var ta = $("#upd-emp-cel-dos");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar letras
$("#upd-emp-cel-dos").keyup(function(){              
    var ta = $("#upd-emp-cel-dos");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-emp-cel-dos").keyup(function(){              
    var ta = $("#upd-emp-cel-dos");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#upd-emp-cel-dos").keyup(function(){              
    var ta = $("#upd-emp-cel-dos");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-emp-cel-dos").keyup(function(){              
    var ta = $("#upd-emp-cel-dos");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar telefono #1 del Empleado
// Actualizar telefono #1 - Validacion para evitar espacios en blanco
$("#upd-emp-tel-uno").keyup(function(){              
    var ta = $("#upd-emp-tel-uno");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Actualizar Telefono del empleado - Validacion para evitar caracteres acentuados
$("#upd-emp-tel-uno").keyup(function(){              
    var ta = $("#upd-emp-tel-uno");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono #1 - Validacion para evitar letras ñÑ
$("#upd-emp-tel-uno").keyup(function(){              
    var ta = $("#upd-emp-tel-uno");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono #1 - Validacion para evitar caracteres acentuados
$("#upd-emp-tel-uno").keyup(function(){              
    var ta = $("#upd-emp-tel-uno");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono #1 -  Validacion para evitar numeros pequeños
$("#upd-emp-tel-uno").keyup(function(){              
    var ta = $("#upd-emp-tel-uno");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono #1 - Validacion para evitar las comillas
$("#upd-emp-tel-uno").keyup(function(){              
    var ta = $("#upd-emp-tel-uno");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 

// Actualizar telefono #2 del Empleado
// Actualizar telefono #1 - Validacion para evitar espacios en blanco
$("#upd-emp-tel-dos").keyup(function(){              
    var ta = $("#upd-emp-tel-dos");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
});
// Actualizar Telefono del empleado - Validacion para evitar caracteres acentuados
$("#upd-emp-tel-dos").keyup(function(){              
    var ta = $("#upd-emp-tel-dos");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono #2 - Validacion para evitar letras ñÑ
$("#upd-emp-tel-dos").keyup(function(){              
    var ta = $("#upd-emp-tel-dos");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono #2 - Validacion para evitar caracteres acentuados
$("#upd-emp-tel-dos").keyup(function(){              
    var ta = $("#upd-emp-tel-dos");
    letras = ta.val().replace(/[-|!"#$%&/=¡?¿´´.,:{};/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono #2 -  Validacion para evitar numeros pequeños
$("#upd-emp-tel-dos").keyup(function(){              
    var ta = $("#upd-emp-tel-dos");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Telefono #2 - Validacion para evitar las comillas
$("#upd-emp-tel-dos").keyup(function(){              
    var ta = $("#upd-emp-tel-dos");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


//  Actualizar correo personal del Empleado
$("#upd-emp-cor-per").keyup(function(){              
    var ta = $("#upd-emp-cor-per");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-emp-cor-per").keyup(function(){              
    var ta = $("#upd-emp-cor-per");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});
$("#upd-emp-cor-per").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-emp-cor-per").keyup(function(){              
    var ta = $("#upd-emp-cor-per");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-emp-cor-per").keyup(function(){              
    var ta = $("#upd-emp-cor-per");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-emp-cor-per").keyup(function(){              
    var ta = $("#upd-emp-cor-per");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 

//  Actualizar correo institucional del Empleado
$("#upd-emp-cor-ins").keyup(function(){              
    var ta = $("#upd-emp-cor-ins");
    letras = ta.val().replace(/ /g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-emp-cor-ins").keyup(function(){              
    var ta = $("#upd-emp-cor-ins");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});
$("#upd-emp-cor-ins").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1\0-9 \_\@]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-emp-cor-ins").keyup(function(){              
    var ta = $("#upd-emp-cor-ins");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-emp-cor-ins").keyup(function(){              
    var ta = $("#upd-emp-cor-ins");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-emp-cor-ins").keyup(function(){              
    var ta = $("#upd-emp-cor-ins");
    letras = ta.val().replace(/[|!"#$%&/()=¡?¿´´,:{};/*+$<>^`¯¶‗°■®·┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 

// Actualizar Departamento de Residencia del Empleado
$("#upd-emp-dep").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#upd-emp-dep").keyup(function(){              
    var ta = $("#upd-emp-dep");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-emp-dep").keyup(function(){              
    var ta = $("#upd-emp-dep");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#upd-emp-dep").keyup(function(){              
    var ta = $("#upd-emp-dep");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-emp-dep").keyup(function(){              
    var ta = $("#upd-emp-dep");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar ciudad de residencia del empleado
$("#upd-emp-ciu").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
//Validacion para evitar caracteres raros
$("#upd-emp-ciu").keyup(function(){              
    var ta = $("#upd-emp-ciu");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-emp-ciu").keyup(function(){              
    var ta = $("#upd-emp-ciu");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#upd-emp-ciu").keyup(function(){              
    var ta = $("#upd-emp-ciu");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-emp-ciu").keyup(function(){              
    var ta = $("#upd-emp-ciu");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});


// Actualizar comuna del empleado
//Validacion para evitar caracteres raros
$("#upd-emp-com").keyup(function(){              
    var ta = $("#upd-emp-com");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-emp-com").keyup(function(){              
    var ta = $("#upd-emp-com");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#upd-emp-com").keyup(function(){              
    var ta = $("#upd-emp-com");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-emp-com").keyup(function(){              
    var ta = $("#upd-emp-com");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar Estrato del Empleado
// Actualizar Estrato - Validacion para evitar caracteres acentuados
$("#upd-emp-est").keyup(function(){              
    var ta = $("#upd-emp-est");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
// Actualizar Estrato - Validacion para evitar letras ñÑ
$("#upd-emp-est").keyup(function(){              
    var ta = $("#upd-emp-est");
    letras = ta.val().replace(/[ñÑ]/g, "");
    ta.val(letras)
}); 
// Actualizar Estrato - Validacion para evitar caracteres acentuados
$("#upd-emp-est").keyup(function(){              
    var ta = $("#upd-emp-est");
    letras = ta.val().replace(/[-|!"#$%&/=+¡?¿´´.,:{};()/*$<>@^_`¯¶‗°■®·┘™┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
// Actualizar Estrato -  Validacion para evitar numeros pequeños
$("#upd-emp-est").keyup(function(){              
    var ta = $("#upd-emp-est");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
// Actualizar Estrato - Validacion para evitar las comillas
$("#upd-emp-est").keyup(function(){              
    var ta = $("#upd-emp-est");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
}); 


// Actualizar barrio de residencia del empleado
//Validacion para evitar caracteres raros
$("#upd-emp-bar").keyup(function(){              
    var ta = $("#upd-emp-bar");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-emp-bar").keyup(function(){              
    var ta = $("#upd-emp-bar");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#upd-emp-bar").keyup(function(){              
    var ta = $("#upd-emp-bar");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-emp-bar").keyup(function(){              
    var ta = $("#upd-emp-bar");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

// Actualizar formacion academica del empleado
$("#upd-emp-for").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar salario del empleado
$("#upd-emp-sal").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});
$("#upd-emp-sal").keyup(function(){              
    var ta = $("#upd-emp-sal");
    letras = ta.val().replace(/[¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar letras
$("#upd-emp-sal").keyup(function(){              
    var ta = $("#upd-emp-sal");
    letras = ta.val().replace(/[abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-emp-sal").keyup(function(){              
    var ta = $("#upd-emp-sal");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
$("#upd-emp-sal").keyup(function(){              
    var ta = $("#upd-emp-sal");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-emp-sal").keyup(function(){              
    var ta = $("#upd-emp-sal");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});

//Validacion para evitar caracteres raros
$("#upd-emp-for").keyup(function(){              
    var ta = $("#upd-emp-for");
    letras = ta.val().replace(/[äÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑçÇØøÅåæÆÿãÃðÐßÕõÝýµþÞƒ£×ªº€œ]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar caracteres raros
$("#upd-emp-for").keyup(function(){              
    var ta = $("#upd-emp-for");
    letras = ta.val().replace(/[-|!"#$%&/()=¡?¿´´.,:{};/*+$<>@^_`¯¶‗°■®·™┘┌¦÷±¬«»┤©╣║╗╝¢¥┐└╠├╚╦┬┴╔╬─╩┼¤┘┌¦█▄▀≡§¨·¸\\]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar numeros en los input de tipo texto
$("#upd-emp-for").keyup(function(){              
    var ta = $("#upd-emp-for");
    letras = ta.val().replace(/[0123456789¹³²¾]/g, "");
    ta.val(letras)
}); 
//Validacion para evitar las comillas
$("#upd-emp-for").keyup(function(){              
    var ta = $("#upd-emp-for");
    letras = ta.val().replace(/["']/g, "");
    ta.val(letras)
});