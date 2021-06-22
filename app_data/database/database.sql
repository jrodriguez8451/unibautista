-- SQL Base de Datos Fundación Universitaria Seminario Teológico Bautista Internacional 

-- Creación de la Base de Datos
CREATE DATABASE unibautista

-- Tablas

-- Tabla de Estados Generales
CREATE TABLE tblestado_general(
    est_gen_id             INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    est_gen_descripcion    VARCHAR(50) NOT NULL,
    est_gen_fecha_registro DATE NOT NULL
);

-- Tabla de Estados
CREATE TABLE tblestado(
    est_id                       INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    est_descripcion              VARCHAR(50) NOT NULL,
    est_fecha_registro           DATE NOT NULL,
    tblestado_general_est_gen_id INT(30) UNSIGNED NOT NULL
);

-- Tabla de Roles
CREATE TABLE tblrol(
    rol_id             INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    rol_descripcion    VARCHAR(50) NOT NULL,
    rol_fecha_registro DATE NOT NULL,
    tblestado_est_id   INT(30) UNSIGNED NOT NULL
);

-- Tabla de Tipos de Documentos
CREATE TABLE tbltipo_documento(
    tip_doc_id              INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tip_doc_descripcion     VARCHAR(50) NOT NULL,
    tipo_doc_fecha_registro DATE NOT NULL,
    tblestado_est_id        INT(30) UNSIGNED NOT NULL
);

-- Tabla de Usuarios
CREATE TABLE tblusuario(
    usu_id               INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    usu_numero_documento INT(20) UNSIGNED NOT NULL,
    usu_primer_nombre    VARCHAR(50) NOT NULL,
    usu_segundo_nombre   VARCHAR(50) NULL,
    usu_primer_apellido  VARCHAR(50) NOT NULL,
    usu_segundo_apellido VARCHAR(50) NOT NULL,
    usu_celular          INT(30) UNSIGNED NULL,
    usu_telefono         INT(30) UNSIGNED NULL,
    usu_direccion        VARCHAR(50) NULL,
    usu_correo           VARCHAR(50) NOT NULL,
    usu_contrasena       VARCHAR(50) NOT NULL,
    usu_fecha_registro   DATE NOT NULL,
    tblrol_rol_id        INT(30) UNSIGNED NOT NULL,
    tblestado_est_id     INT(30) UNSIGNED NOT NULL
);

-- Tabla de Oficinas
CREATE TABLE tbloficina(
    ofi_id              INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ofi_descripcion     VARCHAR(50) NOT NULL,
    ofi_fecha_registro  DATE NOT NULL,
    tblestado_est_id    INT(30) UNSIGNED NOT NULL
);

-- Tabla de Marcas de Computadores
CREATE TABLE tblmarca_computador(
    mar_com_id             INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    mar_com_descripcion    VARCHAR(50) NOT NULL,
    mar_com_fecha_registro DATE NOT NULL,
    tblestado_est_id       INT(30) UNSIGNED NOT NULL
);

-- Tabla de Sistemas Operativos
CREATE TABLE tblsistema_operativo(
    sis_op_id               INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sis_op_descripcion      VARCHAR(50) NOT NULL,
    sis_op_fecha_registro   DATE NOT NULL,
    tblestado_est_id        INT(30) UNSIGNED NOT NULL
);

-- Tabla de Tipos de Computadores
CREATE TABLE tbltipo_computador(
    tip_com INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tip_com_descripcion VARCHAR(50) NOT NULL,
    tip_com_fecha_registro DATE NOT NULL,
    tblestado_est_id INT(30) UNSIGNED NOT NULL
);

-- Tabla de Computadores
CREATE TABLE tblcomputador(
    com_id INT(30) USUARIO NOT NULL AUTO_INCREMENT PRIMARY KEY,
    com_activo_fijo 
    com_referencia
    com_serial
    com_marca - Lista despegable – Lista de marcas - Foránea
    com_tipo_computador - Lista despegable - Foránea
    com_arquitectura - Lista despegable - Lista quemada – x32, x86, x64
    com_sistema_operativo   - Lista despegable – Lista de Sistemas Operativos - Foránea
    com_version_sistema_operativo
    com_nombre_equipo
    com_procesador
    com_ghz_procesador
    com_memoria_ram
    com_disco_duro
    com_capacidad_disco_duro
    com_office_instalado - Lista despegable – Lista quemada – SI/NO
    com_office_activado - Lista despegable – Lista quemada – SI/NO
    com_licencia_office
    com_windows_activado - Lista despegable – Lista quemada – SI/NO
    com_licencia_windows
    com_ubicacion - Lista despegable – Lista de todas las oficinas de la Universidad – Foránea 
    com_fecha_realizacion - DATE NOT NULL
);

-- Tabla de Empleados
CREATE TABLE tblempleado(
    emp_id
    emp_numero_documento
    emp_tipo_documento
    emp_fecha_expendicion_documento
    emp_departamento_expedicion_documento
    emp_municipio_expedicion_documento
    emp_primer_nombre
    emp_segundo_nombre
    emp_primer_apellido
    emp_segundo_apellido
    emp_genero
    emp_fecha_nacimiento
    emp_estado_civil
    emp_pareja
    emp_hijo
    emp_direccion
    emp_celular
    emp_telefono
    emp_correo_personal
    emp_correo_institucional
    emp_comuna
    emp_barrio
    emp_estrato
    emp_ciudad
    emp_departamento
    emp_formacion_academica
    emp_eps
    emp_arl
    emp_caja_compensacion
    emp_fondo_pension
    emp_fecha_inicio_laboral
    emp_fecha_ingreso_empresa
    emp_tipo_contrato
);