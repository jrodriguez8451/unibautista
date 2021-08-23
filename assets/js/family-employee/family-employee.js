// Insertar Usuario Usando Ajax
function insertFamilyEmployeeAjax(){
    // Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let nombre_completo_empleado = $('#ins-fam-emp-nom-emp').val();

    // Condicion para evitar campos vacios
    if (nombre_completo_empleado.length == 0){ 
        // Retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        // Alerta de validacion
        validationAlert("¡El nombre del empleado no puede quedar vacío!","#ffc107");
    }else{
        // Poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-insert-family-employee').serialize();
        // Almacenamos dentro de una variable un parametro que pueda recibir el controlador para que ejecute la funcion
        let accion = "&insert_family_employee=1";
        // Enviamos la informacion del formulario + la variable que recibirá el controlador
        dataString = dataString + accion;  
        $.ajax({
            // Realiza una petición POST a una URL provista.
            method:"POST",
            // Ruta en donde se enviará los datos, url en donde hacemos la peticion ajax
            url: 'index.php?ruta=familia-del-empleado',
            // Si todo sale bien en el success, el data es todo el contenido html que tiene el index
            data:dataString,
            // Establece una función a ejecutar si la petición a sido satisfactoria
            success: function(){
                // Load es cargar, toma el id de la tabla y vas a cargar nuevamente esta tabla, es un refrescar la tabla
                $('#load').load('index.php?ruta=familia-del-empleado #load',function(){
                // Aqui hacemos una funcion que lo que haces es llamarme nuevamente a la tabla cuando todo lo anterior se ejecute
                    genericTable();
                });
                // Alerta de sweetalert
                crudAlert("success","¡Familia registrada con éxito!","#28a745");
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

//FUNCION PARA VER DETALLE DEL USUARIO
function detailFamilyEmployee(det_fam_emp_nom,det_fam_emp_tip_doc_fau,det_fam_emp_num_doc_fau,det_fam_emp_pri_nom_fau,det_fam_emp_seg_nom_fau,det_fam_emp_pri_ape_fau,det_fam_emp_seg_ape_fau,det_fam_emp_tip_doc_fad,det_fam_emp_num_doc_fad,det_fam_emp_pri_nom_fad,det_fam_emp_seg_nom_fad,det_fam_emp_pri_ape_fad,det_fam_emp_seg_ape_fad,det_fam_emp_tip_doc_fat,det_fam_emp_num_doc_fat,det_fam_emp_pri_nom_fat,det_fam_emp_seg_nom_fat,det_fam_emp_pri_ape_fat,det_fam_emp_seg_ape_fat,det_fam_emp_tip_doc_fac,det_fam_emp_num_doc_fac,det_fam_emp_pri_nom_fac,det_fam_emp_seg_nom_fac,det_fam_emp_pri_ape_fac,det_fam_emp_seg_ape_fac,det_fam_emp_tip_doc_fai,det_fam_emp_num_doc_fai,det_fam_emp_pri_nom_fai,det_fam_emp_seg_nom_fai,det_fam_emp_pri_ape_fai,det_fam_emp_seg_ape_fai,det_fam_emp_id,det_fam_emp_est,det_fam_emp_fec_reg) {
    // .val() sirva para obtener el valor de un elemento
    $('#modal-detail-family-employee .modal-body .det-fam-emp-nom').val(det_fam_emp_nom);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-tip-doc-fau').val(det_fam_emp_tip_doc_fau);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-num-doc-fau').val(det_fam_emp_num_doc_fau);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-pri-nom-fau').val(det_fam_emp_pri_nom_fau);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-seg-nom-fau').val(det_fam_emp_seg_nom_fau);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-pri-ape-fau').val(det_fam_emp_pri_ape_fau);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-seg-ape-fau').val(det_fam_emp_seg_ape_fau);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-tip-doc-fad').val(det_fam_emp_tip_doc_fad);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-num-doc-fad').val(det_fam_emp_num_doc_fad);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-pri-nom-fad').val(det_fam_emp_pri_nom_fad);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-seg-nom-fad').val(det_fam_emp_seg_nom_fad);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-pri-ape-fad').val(det_fam_emp_pri_ape_fad);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-seg-ape-fad').val(det_fam_emp_seg_ape_fad);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-tip-doc-fat').val(det_fam_emp_tip_doc_fat);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-num-doc-fat').val(det_fam_emp_num_doc_fat);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-pri-nom-fat').val(det_fam_emp_pri_nom_fat);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-seg-nom-fat').val(det_fam_emp_seg_nom_fat);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-pri-ape-fat').val(det_fam_emp_pri_ape_fat);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-seg-ape-fat').val(det_fam_emp_seg_ape_fat);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-tip-doc-fac').val(det_fam_emp_tip_doc_fac);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-num-doc-fac').val(det_fam_emp_num_doc_fac);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-pri-nom-fac').val(det_fam_emp_pri_nom_fac);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-seg-nom-fac').val(det_fam_emp_seg_nom_fac);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-pri-ape-fac').val(det_fam_emp_pri_ape_fac);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-seg-ape-fac').val(det_fam_emp_seg_ape_fac);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-tip-doc-fai').val(det_fam_emp_tip_doc_fai);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-num-doc-fai').val(det_fam_emp_num_doc_fai);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-pri-nom-fai').val(det_fam_emp_pri_nom_fai);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-seg-nom-fai').val(det_fam_emp_seg_nom_fai);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-pri-ape-fai').val(det_fam_emp_pri_ape_fai);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-seg-ape-fai').val(det_fam_emp_seg_ape_fai);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-id').val(det_fam_emp_id);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-est').val(det_fam_emp_est);
    $('#modal-detail-family-employee .modal-body .det-fam-emp-fec-reg').val(det_fam_emp_fec_reg);
}

// FUNCION PARA PINTAR LOS DATOS DEL USUARIO ANTES DE EDITAR
function updateFamilyEmployee(upd_fam_emp_id,upd_fam_emp_nom,upd_fam_emp_tip_doc_fau,upd_fam_emp_num_doc_fau,upd_fam_emp_pri_nom_fau,upd_fam_emp_seg_nom_fau,upd_fam_emp_pri_ape_fau,upd_fam_emp_seg_ape_fau,upd_fam_emp_tip_doc_fad,upd_fam_emp_num_doc_fad,upd_fam_emp_pri_nom_fad,upd_fam_emp_seg_nom_fad,upd_fam_emp_pri_ape_fad,upd_fam_emp_seg_ape_fad,upd_fam_emp_tip_doc_fat,upd_fam_emp_num_doc_fat,upd_fam_emp_pri_nom_fat,upd_fam_emp_seg_nom_fat,upd_fam_emp_pri_ape_fat,upd_fam_emp_seg_ape_fat,upd_fam_emp_tip_doc_fac,upd_fam_emp_num_doc_fac,upd_fam_emp_pri_nom_fac,upd_fam_emp_seg_nom_fac,upd_fam_emp_pri_ape_fac,upd_fam_emp_seg_ape_fac,upd_fam_emp_tip_doc_fai,upd_fam_emp_num_doc_fai,upd_fam_emp_pri_nom_fai,upd_fam_emp_seg_nom_fai,upd_fam_emp_pri_ape_fai,upd_fam_emp_seg_ape_fai){
    $('#modal-update-family-employee .modal-body .upd-fam-emp-id').val(upd_fam_emp_id);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-nom').val(upd_fam_emp_nom);
    $("#upd-fam-emp-tip-doc-fau option[value='"+upd_fam_emp_tip_doc_fau+"']").attr("selected",true);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-num-doc-fau').val(upd_fam_emp_num_doc_fau);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-pri-nom-fau').val(upd_fam_emp_pri_nom_fau);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-seg-nom-fau').val(upd_fam_emp_seg_nom_fau);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-pri-ape-fau').val(upd_fam_emp_pri_ape_fau);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-seg-ape-fau').val(upd_fam_emp_seg_ape_fau);
    $("#upd-fam-emp-tip-doc-fad option[value='"+upd_fam_emp_tip_doc_fad+"']").attr("selected",true);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-num-doc-fad').val(upd_fam_emp_num_doc_fad);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-pri-nom-fad').val(upd_fam_emp_pri_nom_fad);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-seg-nom-fad').val(upd_fam_emp_seg_nom_fad);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-pri-ape-fad').val(upd_fam_emp_pri_ape_fad);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-seg-ape-fad').val(upd_fam_emp_seg_ape_fad);
    $("#upd-fam-emp-tip-doc-fat option[value='"+upd_fam_emp_tip_doc_fat+"']").attr("selected",true);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-num-doc-fat').val(upd_fam_emp_num_doc_fat);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-pri-nom-fat').val(upd_fam_emp_pri_nom_fat);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-seg-nom-fat').val(upd_fam_emp_seg_nom_fat);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-pri-ape-fat').val(upd_fam_emp_pri_ape_fat);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-seg-ape-fat').val(upd_fam_emp_seg_ape_fat);
    $("#upd-fam-emp-tip-doc-fac option[value='"+upd_fam_emp_tip_doc_fac+"']").attr("selected",true);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-num-doc-fac').val(upd_fam_emp_num_doc_fac);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-pri-nom-fac').val(upd_fam_emp_pri_nom_fac);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-seg-nom-fac').val(upd_fam_emp_seg_nom_fac);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-pri-ape-fac').val(upd_fam_emp_pri_ape_fac);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-seg-ape-fac').val(upd_fam_emp_seg_ape_fac);
    $("#upd-fam-emp-tip-doc-fai option[value='"+upd_fam_emp_tip_doc_fai+"']").attr("selected",true);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-num-doc-fai').val(upd_fam_emp_num_doc_fai);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-pri-nom-fai').val(upd_fam_emp_pri_nom_fai);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-seg-nom-fai').val(upd_fam_emp_seg_nom_fai);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-pri-ape-fai').val(upd_fam_emp_pri_ape_fai);
    $('#modal-update-family-employee .modal-body .upd-fam-emp-seg-ape-fai').val(upd_fam_emp_seg_ape_fai);
}

//FUNCION PARA ACTUALIZAR UN USUARIO CON AJAX
function updateFamilyEmployeeAjax(){
    //Capturamos el valor que contienen los inputs y los almacenamos en una variable
    let nombre_completo_empleado = $('#upd-fam-emp-nom').val();

    //condicion para evitar campos vacios
    if (nombre_completo_empleado.length == 0){ 
        //retirar el data-dismiss para que no se cierre la modal
        $(".shut-down-modal").removeAttr("data-dismiss");
        //Alerta de validacion
        validationAlert("¡Algunos campos no pueden quedar vacíos!","#ffc107");
    }else{
        //poner el data-dismiss para que se cierre la modal
        $(".shut-down-modal").attr("data-dismiss","modal");
        // Captura de datos del form
        let dataString = $('#form-update-family-employee').serialize();
        let accion = "&update_family_employee=1";
        dataString = dataString + accion;  
        $.ajax({
            method:"POST",
            url: 'index.php?ruta=familia-del-empleado',
            data:dataString,
            success: function(){
                $('#load').load('index.php?ruta=familia-del-empleado #load',function(){
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
function deleteFamilyEmployee(del_fam_emp_id,del_fam_emp_emp_nom){
    $('#modal-delete-family-employee .modal-body .del-fam-emp-id').val(del_fam_emp_id);
    $('#modal-delete-family-employee .modal-body .del-fam-emp-emp-nom').text(del_fam_emp_emp_nom);    
}

// Funcion para Eliminar un Estado usando Ajax
function deleteFamilyEmployeeAjax(){
    let dataString = $('#form-delete-family-employee ').serialize();
    let accion = "&delete_family_employee=1";
    dataString = dataString + accion;  
    $.ajax({
        method:"POST",
        url: 'index.php?ruta=familia-del-empleado',
        data:dataString,
                success: function(){
            $('#load').load('index.php?ruta=familia-del-empleado #load',function(){
                genericTable();
            });
            crudAlert("success","¡Familia eliminada con éxito!","#28a745");
        },
        error:function(){
            genericAlert("error","UPS...","¡Algo salió mal!","#dc3545");       
        }
    });
}

// Validacion de los Formularios

// Funcion que solo permite Texto dentro del Input
// Insertar nombre completo del empleado
$("#ins-fam-emp-nom-emp").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Numeros dentro del Input
// Insertar numero de documento del familiar #1 del empleado
$("#ins-fam-emp-num-doc-fau").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input
// Insertar primer nombre del familiar #1 del empleado
$("#ins-fam-emp-pri-nom-fau").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input
// Insertar segundo nombre del familiar #1 del empleado
$("#ins-fam-emp-seg-nom-fau").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input
// Insertar primer apellido del familiar #1 del empleado
$("#ins-fam-emp-pri-ape-fau").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input
// Insertar segundo apellido del familiar #1 del empleado
$("#ins-fam-emp-seg-ape-fau").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Numeros dentro del Input
// Insertar numero de documento del familiar #2 del empleado
$("#ins-fam-emp-num-doc-fad").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input
// Insertar primer nombre del familiar #2 del empleado
$("#ins-fam-emp-pri-nom-fad").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input
// Insertar segundo nombre del familiar #2 del empleado
$("#ins-fam-emp-seg-nom-fad").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input
// Insertar primer apellido del familiar #2 del empleado
$("#ins-fam-emp-pri-ape-fad").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input
// Insertar segundo apellido del familiar #2 del empleado
$("#ins-fam-emp-seg-ape-fad").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Numeros dentro del Input
// Insertar numero de documento del familiar #3 del empleado
$("#ins-fam-emp-num-doc-fat").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input
// Insertar primer nombre del familiar #3 del empleado
$("#ins-fam-emp-pri-nom-fat").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input
// Insertar segundo nombre del familiar #3 del empleado
$("#ins-fam-emp-seg-nom-fat").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input
// Insertar primer apellido del familiar #3 del empleado
$("#ins-fam-emp-pri-ape-fat").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input
// Insertar segundo apellido del familiar #3 del empleado
$("#ins-fam-emp-seg-ape-fat").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Numeros dentro del Input
// Insertar numero de documento del familiar #4 del empleado
$("#ins-fam-emp-num-doc-fac").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input
// Insertar primer nombre del familiar #4 del empleado
$("#ins-fam-emp-pri-nom-fac").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input
// Insertar segundo nombre del familiar #4 del empleado
$("#ins-fam-emp-seg-nom-fac").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input
// Insertar primer apellido del familiar #4 del empleado
$("#ins-fam-emp-pri-ape-fac").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input
// Insertar segundo apellido del familiar #4 del empleado
$("#ins-fam-emp-seg-ape-fac").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});


// Funcion que solo permite Numeros dentro del Input
// Insertar numero de documento del familiar #5 del empleado
$("#ins-fam-emp-num-doc-fai").bind('keypress', function(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input
// Insertar primer nombre del familiar #5 del empleado
$("#ins-fam-emp-pri-nom-fai").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input
// Insertar segundo nombre del familiar #5 del empleado
$("#ins-fam-emp-seg-nom-fai").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input
// Insertar primer apellido del familiar #5 del empleado
$("#ins-fam-emp-pri-ape-fai").bind('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z\u00F1\u00D1 ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

// Funcion que solo permite Texto dentro del Input
// Insertar segundo apellido del familiar #5 del empleado
$("#ins-fam-emp-seg-ape-fai").bind('keypress', function(event) {
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