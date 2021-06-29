-- Lenguaje: SQL

-- Gestor de Base de Datos: MySQL

-- Cotejamiento: utf8mb4_general_ci

-- Empresa: Fundación Universitaria Seminario Teológico Bautista Internacional 

-- Creación de la Base de Datos
CREATE DATABASE unibautista

-- Creación de Tablas

-- Tabla Estados Generales
CREATE TABLE tblestado_general(
    est_gen_id             INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    est_gen_descripcion    VARCHAR(70) NOT NULL,
    est_gen_fecha_registro DATE NOT NULL
);

-- Tabla Estados
CREATE TABLE tblestado(
    est_id                       INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    est_descripcion              VARCHAR(70) NOT NULL,
    est_fecha_registro           DATE NOT NULL,
    tblestado_general_est_gen_id INT(30) UNSIGNED NOT NULL
);

-- Tabla Roles
CREATE TABLE tblrol(
    rol_id             INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    rol_descripcion    VARCHAR(70) NOT NULL,
    rol_fecha_registro DATE NOT NULL,
    tblestado_est_id   INT(30) UNSIGNED NOT NULL
);

-- Tabla Tipos de Documentos
CREATE TABLE tbltipo_documento(
    tip_doc_id              INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tip_doc_descripcion     VARCHAR(70) NOT NULL,
    tipo_doc_fecha_registro DATE NOT NULL,
    tblestado_est_id        INT(30) UNSIGNED NOT NULL
);

-- Tabla Usuarios
CREATE TABLE tblusuario(
    usu_id                       INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    usu_numero_documento         INT(20) UNSIGNED NOT NULL,
    tbltipo_documento_tip_doc_id INT(30) UNSIGNED NOT NULL,
    usu_primer_nombre            VARCHAR(70) NOT NULL,
    usu_segundo_nombre           VARCHAR(70) NULL,
    usu_primer_apellido          VARCHAR(70) NOT NULL,
    usu_segundo_apellido         VARCHAR(70) NOT NULL,
    usu_celular                  INT(30) UNSIGNED NULL,
    usu_telefono                 INT(30) UNSIGNED NULL,
    usu_direccion                VARCHAR(70) NULL,
    usu_correo                   VARCHAR(50) NOT NULL,
    usu_contrasena               VARCHAR(20) NOT NULL,
    usu_fecha_registro           DATE NOT NULL,
    tblrol_rol_id                INT(30) UNSIGNED NOT NULL,
    tblestado_est_id             INT(30) UNSIGNED NOT NULL
);

-- Tabla Oficinas
CREATE TABLE tbloficina(
    ofi_id              INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ofi_descripcion     VARCHAR(70) NOT NULL,
    ofi_fecha_registro  DATE NOT NULL,
    tblestado_est_id    INT(30) UNSIGNED NOT NULL
);

-- Tabla Marcas de Computadores
CREATE TABLE tblmarca_computador(
    mar_com_id             INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    mar_com_descripcion    VARCHAR(70) NOT NULL,
    mar_com_fecha_registro DATE NOT NULL,
    tblestado_est_id       INT(30) UNSIGNED NOT NULL
);

-- Tabla Sistemas Operativos
CREATE TABLE tblsistema_operativo(
    sis_ope_id               INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sis_ope_descripcion      VARCHAR(70) NOT NULL,
    sis_ope_fecha_registro   DATE NOT NULL,
    tblestado_est_id         INT(30) UNSIGNED NOT NULL
);

-- Tabla Tipos de Computadores
CREATE TABLE tbltipo_computador(
    tip_com_id             INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tip_com_descripcion    VARCHAR(70) NOT NULL,
    tip_com_fecha_registro DATE NOT NULL,
    tblestado_est_id       INT(30) UNSIGNED NOT NULL
);

-- Tabla Computadores
CREATE TABLE tblcomputador(
    com_id                          INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    com_activo_fijo                 VARCHAR(100) NULL,
    com_referencia                  VARCHAR(70) NULL,
    com_serial                      VARCHAR(70) NULL,
    tblmarca_computador_mar_com_id  INT(30) UNSIGNED NOT NULL,
    tbltipo_computador_tip_com_id   INT(30) UNSIGNED NOT NULL,
    com_nombre_equipo               VARCHAR(70) NOT NULL,
    com_procesador                  VARCHAR(70) NOT NULL,
    com_ghz_procesador              VARCHAR(20) NOT NULL,
    com_memoria_ram                 VARCHAR(20) NOT NULL,
    com_arquitectura                VARCHAR(20) NOT NULL,-- Lista despegable - Lista quemada – x32, x86, x64
    tblsistema_operativo_sis_ope_id INT(30) UNSIGNED NOT NULL,
    com_edicion_sistema_operativo   VARCHAR(70) NOT NULL,
    com_nombre_disco_duro           VARCHAR(70) NULL,
    com_capacidad_disco_duro        VARCHAR(70) NOT NULL,
    com_office_instalado            VARCHAR(20) NOT NULL,-- Lista despegable – Lista quemada – SI/NO
    com_office_activado             VARCHAR(20) NOT NULL,-- Lista despegable – Lista quemada – SI/NO
    com_licencia_office             VARCHAR(40) NOT NULL,
    com_windows_activado            VARCHAR(20) NOT NULL,-- Lista despegable – Lista quemada – SI/NO
    com_licencia_windows            VARCHAR(40) NOT NULL,
    tbloficina_ofi_id               INT(30) UNSIGNED NOT NULL,
    com_observacion                 VARCHAR(100) NULL,
    com_fecha_realizacion           DATE NOT NULL,
    tblestado_est_id                INT(30) UNSIGNED NOT NULL
);

-- Tabla EPS
CREATE TABLE tbleps(
    eps_id             INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    eps_nombre         VARCHAR(50) NOT NULL,
    eps_fecha_registro DATE NOT NULL,
    tblestado_est_id   INT(30) UNSIGNED NOT NULL
);

-- Tabla ARL
CREATE TABLE tblarl(
    arl_id             INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    arl_nombre         VARCHAR(50) NOT NULL,
    arl_fecha_registro DATE NOT NULL,
    tblestado_est_id   INT(30) UNSIGNED NOT NULL
);

-- Tabla Cajas de Compensación
CREATE TABLE tblcaja_compensacion(
    caj_com_id             INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    caj_com_nombre         VARCHAR(70) NOT NULL,
    caj_com_fecha_registro DATE NOT NULL,
    tblestado_est_id       INT(30) UNSIGNED NOT NULL
);

-- Tabla Fondos de Pensiones
CREATE TABLE tblfondo_pension(
    fon_pen_id             INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fon_pen_nombre         VARCHAR(50) NOT NULL,
    fon_pen_fecha_registro DATE NOT NULL,
    tblestado_est_id       INT(30) UNSIGNED NOT NULL
);

-- Tabla Departamentos 



-- Tabla Empleados
-- CREATE TABLE tblempleado(
--     emp_id                                INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     emp_numero_documento                  INT(30) UNSIGNED NOT NULL,
--     tbltipo_documento_tip_doc_id          INT(30) UNSIGNED NOT NULL,
--     emp_fecha_expendicion_documento       DATE NOT NULL,
--     emp_departamento_expedicion_documento VARCHAR(50) NOT NULL, -- una solucion es una tabla de departamento para cedulas
--     emp_municipio_expedicion_documento    VARCHAR(50) NOT NULL, -- una solucion es una tabla de municipios para cedulas
--     emp_primer_nombre                     VARCHAR(50) NOT NULL,
--     emp_segundo_nombre                    VARCHAR(50) NOT NULL,
--     emp_primer_apellido                   VARCHAR(50) NOT NULL,
--     emp_segundo_apellido                  VARCHAR(50) NOT NULL,
--     emp_genero                            VARCHAR(50) NOT NULL, --LISTA QUEMADA = MASCULINO / FEMENINO
--     emp_fecha_nacimiento                  DATE NOT NULL,
--     emp_estado_civil -- PREGUNTARLE A MONICA VARCHAR(50) NOT NULL,
--     -- emp_pareja DIFICIL  - Necesita Numero de Documento y tipo + Nombre Completo
--     -- emp_hijo DIFICIL    - Necesita Numero de Documento y tipo + Nombre Completo
--     emp_direccion                         VARCHAR(50) NOT NULL,
--     emp_celular                           INT(10) UNSIGNED NOT NULL,
--     emp_telefono                          INT(10) UNSIGNED NOT NULL,
--     emp_correo_personal                   VARCHAR(50) NOT NULL, 
--     emp_correo_institucional              VARCHAR(50) NOT NULL, 
--     emp_departamento                      VARCHAR(50) NOT NULL, -- tenemos trabajadores en otros departamentos?
--     emp_ciudad                            VARCHAR(50) NOT NULL, -- tenemos trabajadores en otras ciudades? cuales ciudades quiere?
--     emp_comuna                            INT(10) UNSIGNED NOT NULL, -- estas comunas deben ser de cali o todas?
--     emp_barrio                            VARCHAR(50) NOT NULL,
--     emp_estrato                           INT(10) UNSIGNED NOT NULL,
--     emp_formacion_academica               VARCHAR(50) NOT NULL,
--     emp_eps                               VARCHAR(50) NOT NULL, --foranea
--     emp_arl                               VARCHAR(50) NOT NULL, --foranea
--     emp_caja_compensacion                 VARCHAR(50) NOT NULL, --foranea
--     emp_fondo_pension                     VARCHAR(50) NOT NULL, --foranea
--     emp_fecha_inicio_laboral              DATE NOT NULL,
--     emp_fecha_ingreso_empresa             DATE NOT NULL,
--     emp_tipo_contrato -- PREGUNTARLE A MONICA VARCHAR(50) NOT NULL, --foranea o lista quemada depente
-- );

-- Creación de Llaves Foraneas

-- Foraneas Tabla Estados
ALTER TABLE     tblestado 
ADD FOREIGN KEY (tblestado_general_est_gen_id) 
REFERENCES      tblestado_general(est_gen_id);

-- Foraneas Tabla Roles
ALTER TABLE     tblrol 
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

-- Foraneas Tabla Tipos de Documento
ALTER TABLE     tbltipo_documento 
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

-- Foraneas Tabla Usuarios
ALTER TABLE     tblusuario 
ADD FOREIGN KEY (tbltipo_documento_tip_doc_id) 
REFERENCES      tbltipo_documento(tip_doc_id);

ALTER TABLE     tblusuario
ADD FOREIGN KEY (tblrol_rol_id) 
REFERENCES      tblrol(rol_id);

ALTER TABLE     tblusuario 
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

-- Foraneas Tabla Oficinas
ALTER TABLE     tbloficina 
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

-- Foraneas Tabla Marcas de Computadores
ALTER TABLE     tblmarca_computador
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

-- Foraneas Tabla Sistemas Operativos
ALTER TABLE     tblsistema_operativo
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

-- Foraneas Tabla Tipos de Computadores
ALTER TABLE     tbltipo_computador
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

-- Foraneas Tabla Computadores
ALTER TABLE     tblcomputador
ADD FOREIGN KEY (tblmarca_computador_mar_com_id) 
REFERENCES      tblmarca_computador(mar_com_id);

ALTER TABLE     tblcomputador
ADD FOREIGN KEY (tbltipo_computador_tip_com_id) 
REFERENCES      tbltipo_computador(tip_com_id);

ALTER TABLE     tblcomputador
ADD FOREIGN KEY (tblsistema_operativo_sis_ope_id) 
REFERENCES      tblsistema_operativo(sis_ope_id);

ALTER TABLE     tblcomputador
ADD FOREIGN KEY (tbloficina_ofi_id) 
REFERENCES      tbloficina(ofi_id);

ALTER TABLE     tblcomputador
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

-- Foraneas Tabla EPS
ALTER TABLE     tbleps
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

-- Foraneas Tabla ARL
ALTER TABLE     tblarl
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

-- Foraneas Tabla Cajas de Compensación
ALTER TABLE     tblcaja_compensacion
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

-- Foraneas Tabla Fondos de Pensiones
ALTER TABLE     tblfondo_pension
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

-- Foraneas Tabla Empleados