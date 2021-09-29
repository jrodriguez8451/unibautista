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
function detailEmployee(det_emp_id,det_emp_num_doc,det_emp_tip_doc,det_emp_fec_exp,det_emp_dep_exp,det_emp_mun_exp,det_emp_pri_nom,det_emp_seg_nom,det_emp_pri_ape,det_emp_seg_ape,det_emp_gen,det_emp_fec_nac,det_emp_est_civ,det_emp_dir,det_emp_cel_uno,det_emp_cel_dos,det_emp_tel_uno,det_emp_tel_dos,det_emp_cor_per,det_emp_cor_ins,det_emp_dep,det_emp_ciu,det_emp_com,det_emp_bar,det_emp_est,det_emp_eps,det_emp_arl,det_emp_caj_com,det_emp_fon_pen,det_emp_for_aca,det_emp_tip_con,det_emp_car,det_emp_sal,det_emp_fec_ing,det_emp_fec_ini,det_emp_fec_fin,det_emp_con,det_emp_fam_emp_tip_doc_fau,det_emp_fam_emp_num_doc_fau,det_emp_fam_emp_pri_nom_fau,det_emp_fam_emp_seg_nom_fau,det_emp_fam_emp_pri_ape_fau,det_emp_fam_emp_seg_ape_fau,det_emp_fam_emp_tip_doc_fad,det_emp_fam_emp_num_doc_fad,det_emp_fam_emp_pri_nom_fad,det_emp_fam_emp_seg_nom_fad,det_emp_fam_emp_pri_ape_fad,det_emp_fam_emp_seg_ape_fad,det_emp_fam_emp_tip_doc_fat,det_emp_fam_emp_num_doc_fat,det_emp_fam_emp_pri_nom_fat,det_emp_fam_emp_seg_nom_fat,det_emp_fam_emp_pri_ape_fat,det_emp_fam_emp_seg_ape_fat,det_emp_fam_emp_tip_doc_fac,det_emp_fam_emp_num_doc_fac,det_emp_fam_emp_pri_nom_fac,det_emp_fam_emp_seg_nom_fac,det_emp_fam_emp_pri_ape_fac,det_emp_fam_emp_seg_ape_fac,det_emp_fam_emp_tip_doc_fai,det_emp_fam_emp_num_doc_fai,det_emp_fam_emp_pri_nom_fai,det_emp_fam_emp_seg_nom_fai,det_emp_fam_emp_pri_ape_fai,det_emp_fam_emp_seg_ape_fai,det_emp_es,det_emp_fec_reg) {
    // .val() sirva para obtener el valor de un elemento
    $('#modal-detail-employee .modal-body .det-emp-id').val(det_emp_id);
    $('#modal-detail-employee .modal-body .det-emp-num-doc').val(det_emp_num_doc);
    $('#modal-detail-employee .modal-body .det-emp-tip-doc').val(det_emp_tip_doc);
    $('#modal-detail-employee .modal-body .det-emp-fec-exp').val(det_emp_fec_exp);
    $('#modal-detail-employee .modal-body .det-emp-dep-exp').val(det_emp_dep_exp);
    $('#modal-detail-employee .modal-body .det-emp-mun-exp').val(det_emp_mun_exp);
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
    $('#modal-detail-employee .modal-body .det-emp-tip-con').val(det_emp_tip_con);
    $('#modal-detail-employee .modal-body .det-emp-car').val(det_emp_car);
    $('#modal-detail-employee .modal-body .det-emp-sal').val(det_emp_sal);
    $('#modal-detail-employee .modal-body .det-emp-fec-ing').val(det_emp_fec_ing);
    $('#modal-detail-employee .modal-body .det-emp-fec-ini').val(det_emp_fec_ini);
    $('#modal-detail-employee .modal-body .det-emp-fec-fin').val(det_emp_fec_fin);
    $('#modal-detail-employee .modal-body .det-emp-con').val(det_emp_con);
    $('#modal-detail-employee .modal-body .det-emp-es').val(det_emp_es);
    $('#modal-detail-employee .modal-body .det-emp-fec-reg').val(det_emp_fec_reg);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-tip-doc-fau').val(det_emp_fam_emp_tip_doc_fau);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-num-doc-fau').val(det_emp_fam_emp_num_doc_fau);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-pri-nom-fau').val(det_emp_fam_emp_pri_nom_fau);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-seg-nom-fau').val(det_emp_fam_emp_seg_nom_fau);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-pri-ape-fau').val(det_emp_fam_emp_pri_ape_fau);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-seg-ape-fau').val(det_emp_fam_emp_seg_ape_fau);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-tip-doc-fad').val(det_emp_fam_emp_tip_doc_fad);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-num-doc-fad').val(det_emp_fam_emp_num_doc_fad);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-pri-nom-fad').val(det_emp_fam_emp_pri_nom_fad);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-seg-nom-fad').val(det_emp_fam_emp_seg_nom_fad);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-pri-ape-fad').val(det_emp_fam_emp_pri_ape_fad);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-seg-ape-fad').val(det_emp_fam_emp_seg_ape_fad);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-tip-doc-fat').val(det_emp_fam_emp_tip_doc_fat);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-num-doc-fat').val(det_emp_fam_emp_num_doc_fat);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-pri-nom-fat').val(det_emp_fam_emp_pri_nom_fat);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-seg-nom-fat').val(det_emp_fam_emp_seg_nom_fat);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-pri-ape-fat').val(det_emp_fam_emp_pri_ape_fat);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-seg-ape-fat').val(det_emp_fam_emp_seg_ape_fat);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-tip-doc-fac').val(det_emp_fam_emp_tip_doc_fac);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-num-doc-fac').val(det_emp_fam_emp_num_doc_fac);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-pri-nom-fac').val(det_emp_fam_emp_pri_nom_fac);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-seg-nom-fac').val(det_emp_fam_emp_seg_nom_fac);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-pri-ape-fac').val(det_emp_fam_emp_pri_ape_fac);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-seg-ape-fac').val(det_emp_fam_emp_seg_ape_fac);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-tip-doc-fai').val(det_emp_fam_emp_tip_doc_fai);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-num-doc-fai').val(det_emp_fam_emp_num_doc_fai);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-pri-nom-fai').val(det_emp_fam_emp_pri_nom_fai);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-seg-nom-fai').val(det_emp_fam_emp_seg_nom_fai);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-pri-ape-fai').val(det_emp_fam_emp_pri_ape_fai);
    $('#modal-detail-employee .modal-body .det-emp-fam-emp-seg-ape-fai').val(det_emp_fam_emp_seg_ape_fai);
}

// FUNCION PARA PINTAR LOS DATOS DEL EMPLEADO ANTES DE EDITAR
function updateEmployee(upd_emp_id,upd_emp_num_doc,upd_emp_tip_doc,upd_emp_fec_exp,upd_emp_dep_doc,upd_emp_mun_exp,upd_emp_pri_nom,upd_emp_seg_nom,upd_emp_pri_ape,upd_emp_seg_ape,upd_emp_gen,upd_emp_fec_nac,upd_emp_est_civ,upd_emp_dir,upd_emp_cel_uno,upd_emp_cel_dos,upd_emp_tel_uno,upd_emp_tel_dos,upd_emp_cor_per,upd_emp_cor_ins,upd_emp_dep,upd_emp_ciu,upd_emp_com,upd_emp_bar,upd_emp_est,upd_emp_fam,upd_emp_eps,upd_emp_arl,upd_em_caj_com,upd_emp_fon_pen,upd_emp_for,upd_emp_tip_con,upd_emp_car,upd_emp_sal,upd_emp_fec_ing,upd_emp_fec_ini,upd_emp_fec_fin,upd_emp_con){
    $('#modal-update-employee .modal-body .upd-emp-id').val(upd_emp_id);
    $('#modal-update-employee .modal-body .upd-emp-num-doc').val(upd_emp_num_doc);
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
    $("#upd-emp-tip-con option[value='"+upd_emp_tip_con+"']").attr("selected",true);
    $("#upd-emp-car option[value='"+upd_emp_car+"']").attr("selected",true);
    $('#modal-update-employee .modal-body .upd-emp-sal').val(upd_emp_sal);
    $('#modal-update-employee .modal-body .upd-emp-fec-ing').val(upd_emp_fec_ing);
    $('#modal-update-employee .modal-body .upd-emp-fec-ini').val(upd_emp_fec_ini);
    $('#modal-update-employee .modal-body .upd-emp-fec-fin').val(upd_emp_fec_fin);
    $("#upd-emp-con option[value='"+upd_emp_con+"']").attr("selected",true);
}

//FUNCION PARA ACTUALIZAR UN EMPLEADO CON AJAX
function updateEmployeeAjax(){
    //Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let numero_documento        = $('#upd-emp-num-doc').val();
    let tipo_documento          = $('#upd-emp-tip-doc').val();
    let fecha_expedicion        = $('#upd-emp-fec-exp').val();
    let departamento_expedicion = $('#upd-emp-dep-doc').val();
    let municipio               = $('#upd-emp-mun-exp').val();
    let primer_nombre           = $('#upd-emp-pri-nom').val();
    let primer_apellido         = $('#upd-emp-pri-ape').val();
    let segundo_apellido        = $('#upd-emp-seg-ape').val();
    let genero                  = $('#upd-emp-gen').val();
    let fecha_nacimiento        = $('#upd-emp-fec-nac').val();
    let estado_civil            = $('#upd-emp-est-civ').val();
    let direccion               = $('#upd-emp-dir').val();
    let celular1                = $('#upd-emp-cel-uno').val();
    let celular2                = $('#upd-emp-cel-dos').val();
    let telefono1               = $('#upd-emp-tel-uno').val();
    let telefono2               = $('#upd-emp-tel-dos').val();
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
    let tipo_contrato           = $('#upd-emp-tip-con').val();
    let cargo                   = $('#upd-emp-car').val();
    let salario                 = $('#upd-emp-sal').val();
    let fecha_ingreso_empresa   = $('#upd-emp-fec-ing').val();
    let fecha_inicio_laboral    = $('#upd-emp-fec-ini').val();
    let estado                  = $('#upd-emp-con').val();

    $('#update-employee').click(function() {
        if ($('#upd-emp-tip-doc').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-emp-dep-doc').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-emp-gen').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-emp-est-civ').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-emp-dep').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-emp-com').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-emp-est').val().trim() === '') {
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
        } else if ($('#upd-emp-tip-con').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-emp-car').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        } else if ($('#upd-emp-con').val().trim() === '') {
            validationAlert("¡Los campos no pueden quedar vacíos!","#ffc107");
        }
    });

    // Condicion para evitar campos vacios
    if (numero_documento.length == 0 || tipo_documento.length == 0 || fecha_expedicion.length == 0 || departamento_expedicion.length == 0 || municipio.length == 0 || primer_nombre.length == 0 || primer_apellido.length == 0 || segundo_apellido.length == 0 || genero.length == 0 || fecha_nacimiento.length == 0 || estado_civil.length == 0 || direccion.length == 0 || celular1.length == 0 || celular2.length == 0 || telefono1.length == 0 || telefono2.length == 0 || correo1.length == 0 || correo2.length == 0 || departamento.length == 0 || ciudad.length == 0 || comuna.length == 0 || barrio.length == 0 || estrato.length == 0 || familia.length == 0 || eps.length == 0 || arl.length == 0 || caja_compensacion.length == 0 || fondo_pension.length == 0 || formacion_academica.length == 0 || tipo_contrato.length == 0 || cargo.length == 0 || salario.length == 0 || fecha_ingreso_empresa.length == 0 || fecha_inicio_laboral.length == 0 || estado.length == 0){ 
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

// Insertar Municipio de Expedicion de Documento
$("#ins-emp-mun-exp").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
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

// Insertar segundo nombre del usuario
$("#ins-emp-seg-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Insertar primer apellido del usuario
$("#ins-emp-pri-ape").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Insertar segundo apellido del usuario
$("#ins-emp-seg-ape").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
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

// Insertar celular #1 del Empleado
$("#ins-emp-cel-uno").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Insertar celular #2 del Empleado
$("#ins-emp-cel-dos").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Insertar telefono #1 del Empleado
$("#ins-emp-tel-uno").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Insertar telefono #2 del Empleado
$("#ins-emp-tel-dos").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

//  Insertar correo personal del Empleado
$("#ins-emp-cor-per").keyup(function(){              
    var ta = $("#ins-emp-cor-per");
    letras = ta.val().replace(/ /g, "");
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

//  Insertar correo institucional del Empleado
$("#ins-emp-cor-ins").keyup(function(){              
    var ta = $("#ins-emp-cor-ins");
    letras = ta.val().replace(/ /g, "");
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

// Insertar ciudad de residencia del empleado
$("#ins-emp-ciu").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Insertar barrio de residencia del empleado
$("#ins-emp-bar").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
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

// Insertar salario del empleado
$("#ins-emp-sal").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


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

// Actualizar Municipio de Expedicion de Documento
$("#upd-emp-mun-exp").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
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

// Actualizar segundo nombre del usuario
$("#upd-emp-seg-nom").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar primer apellido del usuario
$("#upd-emp-pri-ape").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar segundo apellido del usuario
$("#upd-emp-seg-ape").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
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

// Actualizar celular #1 del Empleado
$("#upd-emp-cel-uno").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar celular #2 del Empleado
$("#upd-emp-cel-dos").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar telefono #1 del Empleado
$("#upd-emp-tel-uno").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar telefono #2 del Empleado
$("#upd-emp-tel-dos").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar correo personal del Empleado
$("#upd-emp-cor-per").keyup(function(){              
    var ta = $("#upd-emp-cor-per");
    letras = ta.val().replace(/ /g, "");
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

// Actualizar correo institucional del Empleado
$("#upd-emp-cor-ins").keyup(function(){              
    var ta = $("#upd-emp-cor-ins");
    letras = ta.val().replace(/ /g, "");
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

// Actualizar ciudad de residencia del empleado
$("#upd-emp-ciu").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Actualizar barrio de residencia del empleado
$("#upd-emp-bar").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
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