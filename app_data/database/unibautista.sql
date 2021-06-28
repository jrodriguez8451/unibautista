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
    sis_ope_id               INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sis_ope_descripcion      VARCHAR(50) NOT NULL,
    sis_ope_fecha_registro   DATE NOT NULL,
    tblestado_est_id         INT(30) UNSIGNED NOT NULL
);

-- Tabla de Tipos de Computadores
CREATE TABLE tbltipo_computador(
    tip_com_id             INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tip_com_descripcion    VARCHAR(50) NOT NULL,
    tip_com_fecha_registro DATE NOT NULL,
    tblestado_est_id       INT(30) UNSIGNED NOT NULL
);

-- Tabla de Computadores
CREATE TABLE tblcomputador(
    com_id                          INT(30) USUARIO NOT NULL AUTO_INCREMENT PRIMARY KEY,
    com_activo_fijo                 INT(30) UNSIGNED NOT NULL,
    com_referencia                  VARCHAR(50) NOT NULL,
    com_serial                      VARCHAR(50) NOT NULL,
    tblmarca_computador_mar_com_id  INT(30) UNSIGNED NOT NULL,-- Lista despegable – Lista de marcas - Foránea
    tbltipo_computador_tip_com_id   INT(30) UNSIGNED NOT NULL,-- Lista despegable - Foránea
    com_arquitectura                VARCHAR(50) NOT NULL,-- - Lista despegable - Lista quemada – x32, x86, x64
    tblsistema_operativo_sis_ope_id INT(30) UNSIGNED NOT NULL, -- Lista despegable – Lista de Sistemas Operativos - Foránea
    com_version_sistema_operativo   VARCHAR(50) NOT NULL,
    com_nombre_equipo               VARCHAR(50) NOT NULL,
    com_procesador                  VARCHAR(50) NOT NULL,
    com_ghz_procesador              VARCHAR(50) NOT NULL,
    com_memoria_ram                 VARCHAR(50) NOT NULL,
    com_disco_duro                  VARCHAR(50) NOT NULL,
    com_capacidad_disco_duro        VARCHAR(50) NOT NULL,
    com_office_instalado            VARCHAR(50) NOT NULL,-- Lista despegable – Lista quemada – SI/NO
    com_office_activado             VARCHAR(50) NOT NULL,-- Lista despegable – Lista quemada – SI/NO
    com_licencia_office             VARCHAR(50) NOT NULL,
    com_windows_activado            VARCHAR(50) NOT NULL,-- Lista despegable – Lista quemada – SI/NO
    com_licencia_windows            VARCHAR(50) NOT NULL,
    tbloficina_ofi_id               INT(30) UNSIGNED NOT NULL,-- Lista despegable – Lista de todas las oficinas de la Universidad – Foránea 
    com_fecha_realizacion           DATE NOT NULL
);

-- Tabla de Empleados
CREATE TABLE tblempleado(
    emp_id                                INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    emp_numero_documento                  INT(30) UNSIGNED NOT NULL,
    tbl_tipo_documento_tip_doc_id         INT(30) UNSIGNED NOT NULL,
    emp_fecha_expendicion_documento       DATE NOT NULL,
    emp_departamento_expedicion_documento VARCHAR(50) NOT NULL, -- una solucion es una tabla de departamento para cedulas
    emp_municipio_expedicion_documento    VARCHAR(50) NOT NULL, -- una solucion es una tabla de municipios para cedulas
    emp_primer_nombre                     VARCHAR(50) NOT NULL,
    emp_segundo_nombre                    VARCHAR(50) NOT NULL,
    emp_primer_apellido                   VARCHAR(50) NOT NULL,
    emp_segundo_apellido                  VARCHAR(50) NOT NULL,
    emp_genero                            VARCHAR(50) NOT NULL, --LISTA QUEMADA = MASCULINO / FEMENINO
    emp_fecha_nacimiento                  DATE NOT NULL,
    emp_estado_civil -- PREGUNTARLE A MONICA VARCHAR(50) NOT NULL,
    -- emp_pareja DIFICIL  - Necesita Numero de Documento y tipo + Nombre Completo
    -- emp_hijo DIFICIL    - Necesita Numero de Documento y tipo + Nombre Completo
    emp_direccion                         VARCHAR(50) NOT NULL,
    emp_celular                           INT(10) UNSIGNED NOT NULL,
    emp_telefono                          INT(10) UNSIGNED NOT NULL,
    emp_correo_personal                   VARCHAR(50) NOT NULL, 
    emp_correo_institucional              VARCHAR(50) NOT NULL, 
    emp_departamento                      VARCHAR(50) NOT NULL, -- tenemos trabajadores en otros departamentos?
    emp_ciudad                            VARCHAR(50) NOT NULL, -- tenemos trabajadores en otras ciudades? cuales ciudades quiere?
    emp_comuna                            INT(10) UNSIGNED NOT NULL, -- estas comunas deben ser de cali o todas?
    emp_barrio                            VARCHAR(50) NOT NULL,
    emp_estrato                           INT(10) UNSIGNED NOT NULL,
    emp_formacion_academica               VARCHAR(50) NOT NULL,
    emp_eps                               VARCHAR(50) NOT NULL, --foranea
    emp_arl                               VARCHAR(50) NOT NULL, --foranea
    emp_caja_compensacion                 VARCHAR(50) NOT NULL, --foranea
    emp_fondo_pension                     VARCHAR(50) NOT NULL, --foranea
    emp_fecha_inicio_laboral              DATE NOT NULL,
    emp_fecha_ingreso_empresa             DATE NOT NULL,
    emp_tipo_contrato -- PREGUNTARLE A MONICA VARCHAR(50) NOT NULL, --foranea o lista quemada depente
);

-- Tabla de EPS
CREATE TABLE tbleps(
    eps_id INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    eps_nombre VARCHAR(50) NOT NULL,
    eps_fecha_registro VARCHAR(50) NOT NULL,
    tblestado_est_id
);

-- Tabla de ARL
CREATE TABLE tblarl(
    arl_id INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    arl_nombre VARCHAR(50) NOT NULL,
    arl_fecha_registro VARCHAR(50) NOT NULL,
    tblestado_est_id
);

-- Tabla de Caja de Compensación
CREATE TABLE tblcaja_compensacion(
    caj_com_id INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    caj_com_nombre VARCHAR(50) NOT NULL,
    caj_com_fecha_registro VARCHAR(50) NOT NULL,
    tblestado_est_id
);

-- Tabla de Fondo de Pensión
CREATE TABLE tblfondo_pension(
    fon_pen_id INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fon_pen_nombre VARCHAR(50) NOT NULL,
    fon_pen_fecha_registro VARCHAR(50) NOT NULL,
    tblestado_est_id
);

-- Tabla de Departamentos 
