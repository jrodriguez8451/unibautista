-- Informacion de la base de datos

-- Lenguaje: SQL

-- Gestor de Base de Datos: MySQL

-- Cotejamiento: utf8mb4_general_ci

-- Empresa: Fundacion Universitaria Seminario Teologico Bautista Internacional 

-- --------------------------------------------------------

-- Creacion de la Base de Datos

CREATE DATABASE unibautista

-- --------------------------------------------------------

-- Creacion de Tablas

-- --------------------------------------------------------

-- Tabla Estado General

CREATE TABLE tblestado_general(
    est_gen_id             INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    est_gen_descripcion    VARCHAR(70) NOT NULL,
    est_gen_fecha_registro DATE NOT NULL
);

-- --------------------------------------------------------

-- Tabla Rol

CREATE TABLE tblrol(
    rol_id                       INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    rol_descripcion              VARCHAR(70) NOT NULL,
    tblestado_general_est_gen_id INT(30) UNSIGNED NOT NULL,
    rol_fecha_registro           DATE NOT NULL
);

-- --------------------------------------------------------

-- Tabla Tipo de Documento

CREATE TABLE tbltipo_documento(
    tip_doc_id                   INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tip_doc_descripcion          VARCHAR(70) NOT NULL,
    tblestado_general_est_gen_id INT(30) UNSIGNED NOT NULL,
    tip_doc_fecha_registro       DATE NOT NULL
);

-- --------------------------------------------------------

-- Tabla Usuario

CREATE TABLE tblusuario(
    usu_id                       INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    usu_numero_documento         INT(20) UNSIGNED NOT NULL,
    tbltipo_documento_tip_doc_id INT(30) UNSIGNED NOT NULL,
    usu_primer_nombre            VARCHAR(70) NOT NULL,
    usu_segundo_nombre           VARCHAR(70) NULL,
    usu_primer_apellido          VARCHAR(70) NOT NULL,
    usu_segundo_apellido         VARCHAR(70) NOT NULL,
    usu_celular                  INT(15) UNSIGNED NOT NULL,
    usu_telefono                 INT(15) UNSIGNED NOT NULL,
    usu_direccion                VARCHAR(70) NOT NULL,
    usu_correo                   VARCHAR(70) NOT NULL,
    usu_contrasena               VARCHAR(100) NOT NULL,
    tblrol_rol_id                INT(30) UNSIGNED NOT NULL,
    tblestado_general_est_gen_id INT(30) UNSIGNED NOT NULL,
    usu_fecha_registro           DATE NOT NULL
);

-- --------------------------------------------------------

-- Tabla Oficina

CREATE TABLE tbloficina(
    ofi_id                       INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ofi_descripcion              VARCHAR(70) NOT NULL,
    tblestado_general_est_gen_id INT(30) UNSIGNED NOT NULL,
    ofi_fecha_registro           DATE NOT NULL
);

-- --------------------------------------------------------

-- Tabla Marca

CREATE TABLE tblmarca(
    mar_id                       INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    mar_descripcion              VARCHAR(70) NOT NULL,
    tblestado_general_est_gen_id INT(30) UNSIGNED NOT NULL,
    mar_fecha_registro           DATE NOT NULL
);

-- --------------------------------------------------------

-- Tabla Sistema Operativo

CREATE TABLE tblsistema_operativo(
    sis_ope_id                   INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sis_ope_descripcion          VARCHAR(70) NOT NULL,
    tblestado_general_est_gen_id INT(30) UNSIGNED NOT NULL,
    sis_ope_fecha_registro       DATE NOT NULL
);

-- --------------------------------------------------------

-- Tabla Computador

CREATE TABLE tblcomputador(
    com_id                                    INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    com_activo_fijo                           VARCHAR(100) NOT NULL,
    com_referencia                            VARCHAR(70) NOT NULL,
    com_serial                                VARCHAR(70) NOT NULL,
    com_modelo                                VARCHAR(70) NOT NULL,
    tblmarca_mar_id                           INT(30) UNSIGNED NOT NULL,
    com_tipo_computador                       VARCHAR(70) NOT NULL,
    com_nombre_equipo                         VARCHAR(70) NOT NULL,
    com_nombre_usuario                        VARCHAR(70) NOT NULL,
    com_procesador                            VARCHAR(70) NOT NULL,
    com_memoria_ram                           VARCHAR(20) NOT NULL,
    com_arquitectura                          VARCHAR(20) NOT NULL,
    tblsistema_operativo_sis_ope_id           INT(30) UNSIGNED NOT NULL,
    com_edicion_sistema_operativo             VARCHAR(70) NOT NULL,
    com_capacidad_disco_duro                  VARCHAR(20) NOT NULL,
    com_office_esta_instalado                 VARCHAR(20) NOT NULL,
    com_office_esta_activado                  VARCHAR(20) NOT NULL,
    com_licencia_activacion_office            VARCHAR(50) NOT NULL,
    com_sistema_operativo_esta_activado       VARCHAR(20) NOT NULL,
    com_licencia_activacion_sistema_operativo VARCHAR(50) NOT NULL,
    tbloficina_ofi_id                         INT(30) UNSIGNED NOT NULL,
    com_observacion                           VARCHAR(100) NOT NULL,
    com_estado                                VARCHAR(70) NOT NULL,
    tblestado_general_est_gen_id              INT(30) UNSIGNED NOT NULL,
    com_fecha_registro                        DATE NOT NULL
);

-- --------------------------------------------------------

-- Tabla EPS

CREATE TABLE tbleps(
    eps_id                       INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    eps_nit                      VARCHAR(20) NOT NULL,
    eps_razon_social             VARCHAR(70) NOT NULL,
    eps_correo                   VARCHAR(70) NOT NULL,
    eps_direccion                VARCHAR(70) NOT NULL,
    eps_telefono                 INT(15) UNSIGNED NOT NULL,
    tblestado_general_est_gen_id INT(30) UNSIGNED NOT NULL,
    eps_fecha_registro           DATE NOT NULL
);

-- --------------------------------------------------------

-- Tabla ARL

CREATE TABLE tblarl(
    arl_id                       INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    arl_nit                      VARCHAR(20) NOT NULL,
    arl_razon_social             VARCHAR(70) NOT NULL,
    arl_correo                   VARCHAR(70) NOT NULL,
    arl_direccion                VARCHAR(70) NOT NULL,
    arl_telefono                 INT(15) UNSIGNED NOT NULL,
    tblestado_general_est_gen_id INT(30) UNSIGNED NOT NULL,
    arl_fecha_registro           DATE NOT NULL
);

-- --------------------------------------------------------

-- Tabla Caja de Compensacion

CREATE TABLE tblcaja_compensacion(
    caj_com_id                   INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    caj_nit                      VARCHAR(20) NOT NULL,
    caj_razon_social             VARCHAR(70) NOT NULL,
    caj_correo                   VARCHAR(70) NOT NULL,
    caj_direccion                VARCHAR(70) NOT NULL,
    caj_telefono                 INT(15) UNSIGNED NOT NULL,
    tblestado_general_est_gen_id INT(30) UNSIGNED NOT NULL,
    caj_com_fecha_registro       DATE NOT NULL
);

-- --------------------------------------------------------

-- Tabla Fondo de Pensiones

CREATE TABLE tblfondo_pension(
    fon_pen_id                   INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fon_nit                      VARCHAR(20) NOT NULL,
    fon_razon_social             VARCHAR(70) NOT NULL,
    fon_correo                   VARCHAR(70) NOT NULL,
    fon_direccion                VARCHAR(70) NOT NULL,
    fon_telefono                 INT(15) UNSIGNED NOT NULL,
    tblestado_general_est_gen_id INT(30) UNSIGNED NOT NULL,
    fon_pen_fecha_registro       DATE NOT NULL
);

-- --------------------------------------------------------

-- Tabla Dispositivo

CREATE TABLE tbldispositivo(
    dis_id                          INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dis_activo_fijo                 VARCHAR(100) NOT NULL,
    dis_descripcion                 VARCHAR(70) NOT NULL,
    tblmarca_mar_id                 INT(30) UNSIGNED NOT NULL,
    dis_referencia                  VARCHAR(70) NOT NULL,
    dis_serial                      VARCHAR(70) NOT NULL,
    dis_modelo                      VARCHAR(70) NOT NULL,
    dis_capacidad                   VARCHAR(70) NOT NULL,
    dis_observacion                 VARCHAR(100) NOT NULL,
    dis_estado                      VARCHAR(70) NOT NULL,
    tbloficina_ofi_id               INT(30) UNSIGNED NOT NULL,
    tblestado_general_est_gen_id    INT(30) UNSIGNED NOT NULL,
    dis_fecha_registro              DATE NOT NULL
);

-- --------------------------------------------------------

-- Tabla Cargo

CREATE TABLE tblcargo(
    car_id                       INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    car_descripcion              VARCHAR(70) NOT NULL,
    tblestado_general_est_gen_id INT(30) UNSIGNED NOT NULL,
    car_fecha_registro           DATE NOT NULL
);

-- --------------------------------------------------------

-- Tabla Familia

CREATE TABLE tblfamilia_empleado(
    fam_emp_id                         INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fam_emp_nombre_completo_empleado   VARCHAR(70) NULL,   
    fam_emp_tipo_documento_familiar1   VARCHAR(70) NULL,   
    fam_emp_numero_documento_familiar1 INT(30) UNSIGNED NULL,
    fam_emp_primer_nombre_familiar1    VARCHAR(70) NULL,
    fam_emp_segundo_nombre_familiar1   VARCHAR(70) NULL,
    fam_emp_primer_apellido_familiar1  VARCHAR(70) NULL,
    fam_emp_segundo_apellido_familiar1 VARCHAR(70) NULL,
    fam_emp_tipo_documento_familiar2   VARCHAR(70)  NULL,
    fam_emp_numero_documento_familiar2 INT(30) UNSIGNED NULL,
    fam_emp_primer_nombre_familiar2    VARCHAR(70) NULL,
    fam_emp_segundo_nombre_familiar2   VARCHAR(70) NULL,
    fam_emp_primer_apellido_familiar2  VARCHAR(70) NULL,
    fam_emp_segundo_apellido_familiar2 VARCHAR(70) NULL,
    fam_emp_tipo_documento_familiar3   VARCHAR(70) NULL,
    fam_emp_numero_documento_familiar3 INT(30) UNSIGNED NULL,
    fam_emp_primer_nombre_familiar3    VARCHAR(70) NULL,
    fam_emp_segundo_nombre_familiar3   VARCHAR(70) NULL,
    fam_emp_primer_apellido_familiar3  VARCHAR(70) NULL,
    fam_emp_segundo_apellido_familiar3 VARCHAR(70) NULL,
    fam_emp_tipo_documento_familiar4   VARCHAR(70) NULL,
    fam_emp_numero_documento_familiar4 INT(30) UNSIGNED NULL,
    fam_emp_primer_nombre_familiar4    VARCHAR(70) NULL,
    fam_emp_segundo_nombre_familiar4   VARCHAR(70) NULL,
    fam_emp_primer_apellido_familiar4  VARCHAR(70) NULL,
    fam_emp_segundo_apellido_familiar4 VARCHAR(70) NULL,
    tblestado_general_est_gen_id       INT(30) UNSIGNED NOT NULL, -- asignar foranea
    fam_emp_fecha_registro             DATE NOT NULL
);

-- --------------------------------------------------------

-- Tabla Empleados

CREATE TABLE tblempleado(
    emp_id                                INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    emp_numero_documento                  INT(30) UNSIGNED NOT NULL,
    tbltipo_documento_tip_doc_id          INT(30) UNSIGNED NOT NULL, -- asignar foranea
    emp_fecha_expendicion_documento       DATE NOT NULL,
    emp_departamento_expedicion_documento VARCHAR(70) NOT NULL, -- lista quemada / colombia tiene 32 departamentos 
    emp_municipio_expedicion_documento    VARCHAR(70) NOT NULL,
    emp_primer_nombre                     VARCHAR(70) NOT NULL,
    emp_segundo_nombre                    VARCHAR(70) NOT NULL,
    emp_primer_apellido                   VARCHAR(70) NOT NULL,
    emp_segundo_apellido                  VARCHAR(70) NOT NULL,
    emp_genero                            VARCHAR(20) NOT NULL, -- LISTA QUEMADA = MASCULINO / FEMENINO
    emp_fecha_nacimiento                  DATE NOT NULL,
    emp_estado_civil                      VARCHAR(20) NOT NULL,  -- lista quemada / Casado / Soltero / Viudo / Divorciado / Separado
    emp_direccion                         VARCHAR(70) NOT NULL,
    emp_celular1                          INT(10) UNSIGNED NOT NULL,
    emp_celular2                          INT(10) UNSIGNED NULL,
    emp_telefono1                         INT(10) UNSIGNED NOT NULL,
    emp_telefono2                         INT(10) UNSIGNED NULL,
    emp_correo_personal                   VARCHAR(70) NOT NULL, 
    emp_correo_institucional              VARCHAR(70) NOT NULL, 
    emp_departamento                      VARCHAR(70) NOT NULL, -- lista quemada / colombia tiene 32 departamentos 
    emp_ciudad                            VARCHAR(70) NOT NULL,
    emp_comuna                            INT(10) UNSIGNED NOT NULL, -- lista quemada / del 1 al 22 (comunas de la ciudad de cali)
    emp_barrio                            VARCHAR(70) NOT NULL,
    emp_estrato                           INT(10) UNSIGNED NOT NULL, -- lista quemada / del 1 al 6
    tblfamilia_empleado_fam_emp_id        INT(30) UNSIGNED NULL,
    tbleps_eps_id                         INT(30) UNSIGNED NOT NULL, -- asignar foranea
    tblarl_arl_id                         INT(30) UNSIGNED NOT NULL, -- asignar foranea
    tblcaja_compensacion_caj_com_id       INT(30) UNSIGNED NOT NULL, -- asignar foranea
    tblfondo_pension_fon_pen_id           INT(30) UNSIGNED NOT NULL, -- asignar foranea
    emp_formacion_academica               VARCHAR(100) NOT NULL, 
    emp_tipo_contrato                     VARCHAR(20) NOT NULL, -- lista quemada: definido / indefinido
    tblcargo_car_id                       INT(30) UNSIGNED NOT NULL,
    emp_salario                           INT(30) UNSIGNED NOT NULL, 
    emp_fecha_inicio_laboral              DATE NOT NULL,
    emp_fecha_ingreso_empresa             DATE NOT NULL,
    emp_estado                            VARCHAR(70) NOT NULL,  -- lista quemada contratado/ despedido / retirado / pensionado
    tblestado_general_est_gen_id          INT(30) UNSIGNED NOT NULL,      
    emp_fecha_registro                    DATE NOT NULL
);

-- --------------------------------------------------------

-- Creacion de Llave Foranea

--------------------------------------------------------

-- Foranea Tabla Estado

ALTER TABLE     tblestado 
ADD FOREIGN KEY (tblestado_general_est_gen_id) 
REFERENCES      tblestado_general(est_gen_id);

-- --------------------------------------------------------

-- Foranea Tabla Rol

ALTER TABLE     tblrol 
ADD FOREIGN KEY (tblestado_general_est_gen_id) 
REFERENCES      tblestado_general(est_gen_id);

-- --------------------------------------------------------

-- Foranea Tabla Tipo de Documento

ALTER TABLE     tbltipo_documento 
ADD FOREIGN KEY (tblestado_general_est_gen_id) 
REFERENCES      tblestado_general(est_gen_id);

-- --------------------------------------------------------

-- Foranea Tabla Usuario

ALTER TABLE     tblusuario 
ADD FOREIGN KEY (tbltipo_documento_tip_doc_id) 
REFERENCES      tbltipo_documento(tip_doc_id);

ALTER TABLE     tblusuario
ADD FOREIGN KEY (tblrol_rol_id) 
REFERENCES      tblrol(rol_id);

ALTER TABLE     tblusuario 
ADD FOREIGN KEY (tblestado_general_est_gen_id) 
REFERENCES      tblestado_general(est_gen_id);

-- --------------------------------------------------------

-- Foranea Tabla Oficina

ALTER TABLE     tbloficina 
ADD FOREIGN KEY (tblestado_general_est_gen_id) 
REFERENCES      tblestado_general(est_gen_id);

-- --------------------------------------------------------

-- Foranea Tabla Marca

ALTER TABLE     tblmarca
ADD FOREIGN KEY (tblestado_general_est_gen_id) 
REFERENCES      tblestado_general(est_gen_id);


-- --------------------------------------------------------

-- Foranea Tabla Sistema Operativo

ALTER TABLE     tblsistema_operativo
ADD FOREIGN KEY (tblestado_general_est_gen_id) 
REFERENCES      tblestado_general(est_gen_id);

-- --------------------------------------------------------

-- Foranea Tabla Computador

ALTER TABLE     tblcomputador
ADD FOREIGN KEY (tblmarca_mar_id) 
REFERENCES      tblmarca(mar_id);

ALTER TABLE     tblcomputador
ADD FOREIGN KEY (tblsistema_operativo_sis_ope_id) 
REFERENCES      tblsistema_operativo(sis_ope_id);

ALTER TABLE     tblcomputador
ADD FOREIGN KEY (tbloficina_ofi_id) 
REFERENCES      tbloficina(ofi_id);

ALTER TABLE     tblcomputador
ADD FOREIGN KEY (tblestado_general_est_gen_id) 
REFERENCES      tblestado_general(est_gen_id);

-- --------------------------------------------------------

-- Foranea Tabla EPS

ALTER TABLE     tbleps
ADD FOREIGN KEY (tblestado_general_est_gen_id) 
REFERENCES      tblestado_general(est_gen_id);

-- --------------------------------------------------------

-- Foranea Tabla ARL

ALTER TABLE     tblarl
ADD FOREIGN KEY (tblestado_general_est_gen_id) 
REFERENCES      tblestado_general(est_gen_id);

-- --------------------------------------------------------

-- Foranea Tabla Cajas de Compensacion

ALTER TABLE     tblcaja_compensacion
ADD FOREIGN KEY (tblestado_general_est_gen_id) 
REFERENCES      tblestado_general(est_gen_id);

-- --------------------------------------------------------

-- Foranea Tabla Fondo de Pensiones

ALTER TABLE     tblfondo_pension
ADD FOREIGN KEY (tblestado_general_est_gen_id) 
REFERENCES      tblestado_general(est_gen_id);

-- --------------------------------------------------------

-- Foranea Tabla Dispositivo

ALTER TABLE     tbldispositivo
ADD FOREIGN KEY (tblmarca_mar_id) 
REFERENCES      tblmarca(mar_id);

ALTER TABLE     tbldispositivo
ADD FOREIGN KEY (tblestado_general_est_gen_id) 
REFERENCES      tblestado_general(est_gen_id);

ALTER TABLE     tbldispositivo
ADD FOREIGN KEY (tbloficina_ofi_id) 
REFERENCES      tbloficina(ofi_id);

-- --------------------------------------------------------

-- Foranea Tabla Cargo

ALTER TABLE     tblcargo
ADD FOREIGN KEY (tblestado_general_est_gen_id) 
REFERENCES      tblestado_general(est_gen_id);

-- --------------------------------------------------------

-- Foranea Tabla Familia Empleado

ALTER TABLE     tblfamilia_empleado
ADD FOREIGN KEY (tblestado_general_est_gen_id) 
REFERENCES      tblestado_general(est_gen_id);

-- --------------------------------------------------------


-- Foranea Tabla Empleado

ALTER TABLE     tblempleado
ADD FOREIGN KEY (tbltipo_documento_tip_doc_id) 
REFERENCES      tbltipo_documento(tip_doc_id);

ALTER TABLE     tblempleado
ADD FOREIGN KEY (tblfamilia_empleado_fam_emp_id) 
REFERENCES      tblfamilia_empleado(fam_emp_id);

ALTER TABLE     tblempleado
ADD FOREIGN KEY (tbleps_eps_id) 
REFERENCES      tbleps(eps_id);

ALTER TABLE     tblempleado
ADD FOREIGN KEY (tblarl_arl_id) 
REFERENCES      tblarl(arl_id);

ALTER TABLE     tblempleado
ADD FOREIGN KEY (tblcaja_compensacion_caj_com_id) 
REFERENCES      tblcaja_compensacion(caj_com_id);

ALTER TABLE     tblempleado
ADD FOREIGN KEY (tblfondo_pension_fon_pen_id) 
REFERENCES      tblfondo_pension(fon_pen_id);

ALTER TABLE     tblempleado
ADD FOREIGN KEY (tblcargo_car_id) 
REFERENCES      tblcargo(car_id);

ALTER TABLE     tblempleado
ADD FOREIGN KEY (tblestado_general_est_gen_id) 
REFERENCES      tblestado_general(est_gen_id);

-- --------------------------------------------------------

-- Insercion de registros

-- --------------------------------------------------------

-- Volcado de datos para la tabla `tblestado_general`

INSERT INTO `tblestado_general` (`est_gen_id`, `est_gen_descripcion`, `est_gen_fecha_registro`) VALUES
(1, 'Activo', '2021-10-11'),
(2, 'Inactivo', '2021-10-11');

-- --------------------------------------------------------

-- Volcado de datos para la tabla `tblestado`

INSERT INTO `tblestado` (`est_id`, `est_descripcion`, `tblestado_general_est_gen_id`, `est_fecha_registro`) VALUES
(1, 'Activo',  1, '2021-10-11'),
(2, 'Inactivo', 1,  '2021-10-11');

-- --------------------------------------------------------

-- Volcado de datos para la tabla `tblrol`

INSERT INTO `tblrol` (`rol_id`, `rol_descripcion`, `tblestado_general_est_gen_id`, `rol_fecha_registro`) VALUES
(1, 'Administrador', 1, '2021-10-11');

-- --------------------------------------------------------

-- Volcado de datos para la tabla `tbltipo_documento`

INSERT INTO `tbltipo_documento` (`tip_doc_id`, `tip_doc_descripcion`, `tblestado_general_est_gen_id`,`tip_doc_fecha_registro`) VALUES
(1, 'Cedula de Ciudadania', 1, '2021-10-11'),
(2, 'Cedula de Extranjeria Colombiana', 1, '2021-10-11'),
(3, 'Cedula Extranjera', 1, '2021-10-11'),
(4, 'Documento Extranjero', 1, '2021-10-11'),
(5, 'Pasaporte', 1, '2021-10-11'),
(6, 'Registro Civil', 1, '2021-10-11'),
(7, 'Tarjeta de Identidad', 1, '2021-10-11');

-- --------------------------------------------------------

-- Volcado de datos para la tabla `tblusuario`

INSERT INTO `tblusuario` (`usu_id`, `usu_numero_documento`, `tbltipo_documento_tip_doc_id`, `usu_primer_nombre`, `usu_segundo_nombre`, `usu_primer_apellido`, `usu_segundo_apellido`, `usu_celular`, `usu_telefono`, `usu_direccion`, `usu_correo`, `usu_contrasena`, `tblrol_rol_id`, `tblestado_general_est_gen_id`,`usu_fecha_registro`) VALUES
(1, 1006051548, 1, 'Jonathan', '', 'Rodriguez', 'Lopez', 3005575730, 3659874, ' Calle 14 B N 41A – 25', 'aprendizsena@unibautista.edu.co', '1234', 1, 1,'2021-10-11');

-- --------------------------------------------------------

-- Volcado de datos para la tabla `tbloficina`

INSERT INTO `tbloficina` (`ofi_id`, `ofi_descripcion`, `tblestado_general_est_gen_id`, `ofi_fecha_registro`) VALUES
(1, 'Biblioteca', 1, '2021-10-11'),
(2, 'Comunicaciones', 1,'2021-10-11'),
(3, 'Datacenter', 1, '2021-10-11'),
(4, 'Direccion de Investigaciones', 1, '2021-10-11'),
(5, 'Direccion Financiera y Contable', 1, '2021-10-11'),
(6, 'Extension Universitaria', 1, '2021-10-11'),
(7, 'Educacion Continuada y Extension Universitaria', 1, '2021-10-11'),
(8, 'Equipo Prestado / En casa del Colaborador', 1, '2021-10-11'),
(9, 'Mercadeo y Promocion ', 1, '2021-10-11'),
(10, 'Oficina de Admisiones y Registro', 1, '2021-10-11'),
(11, 'Oficina de Profesores A', 1, '2021-10-11'),
(12, 'Oficina de Profesores B', 1, '2021-10-11'),
(13, 'Programa Teologia Virtual', 1,'2021-10-11'),
(14, 'Recepcion', 1, '2021-10-11'),
(15, 'Rectoria', 1, '2021-10-11'),
(16, 'Sala de Sistemas', 1, '2021-10-11'),
(17, 'Salon Audiovisual Wyatt',  1, '2021-10-11'),
(18, 'Sala de Estudio', 1, '2021-10-11'),
(19, 'Salon 203 A', 1, '2021-10-11'),
(20, 'Salon 203 B', 1, '2021-10-11'),
(21, 'Salon 203 C', 1, '2021-10-11'),
(22, 'Salon 204', 1, '2021-10-11'),
(23, 'Tesoreria', 1, '2021-10-11'),
(24, 'Vicerrectoria academica', 1, '2021-10-11');

-- --------------------------------------------------------

-- Volcado de datos para la tabla `tblmarca`

INSERT INTO `tblmarca` (`mar_id`, `mar_descripcion`, `tblestado_general_est_gen_id`, `mar_fecha_registro`) VALUES
(1, 'No tiene', 1, '2021-10-11'),
(2, 'Apple', 1, '2021-10-11'),
(3, 'Asus', 1, '2021-10-11'),
(4, 'Alienware', 1, '2021-10-11'),
(5, 'Acer',  1, '2021-10-11'),
(6, 'Clon', 1, '2021-10-11'),
(7, 'Compaq', 1, '2021-10-11'),
(8, 'Dell', 1, '2021-10-11'),
(9, 'Gateway', 1, '2021-10-11'),
(10, 'HP', 1, '2021-10-11'),
(11, 'Huawei', 1, '2021-10-11'),
(12, 'Lenovo', 1, '2021-10-11'),
(13, 'LG', 1, '2021-10-11'),
(14, 'Lanix', 1, '2021-10-11'),
(15, 'Lynksys', 1, '2021-10-11'),
(16, 'MSI', 1, '2021-10-11'),
(17, 'Microsoft', 1, '2021-10-11'),
(18, 'Mercusys', 1, '2021-10-11'),
(19, 'Samsung', 1,'2021-10-11'),
(20, 'Sony', 1, '2021-10-11'),
(21, 'Toshiba', 1, '2021-10-11'),
(22, 'Tp-link', 1, '2021-10-11');

-- --------------------------------------------------------

-- Volcado de datos para la tabla `tblsistema_operativo`

INSERT INTO `tblsistema_operativo` (`sis_ope_id`, `sis_ope_descripcion`, `tblestado_general_est_gen_id`, `sis_ope_fecha_registro`) VALUES
(1, 'No tiene', 1, '2021-10-11'),
(2, 'Windows XP', 1, '2021-10-11'),
(3, 'Windows Vista', 1, '2021-10-11'),
(4, 'Windows 7', 1, '2021-10-11'),
(5, 'Windows 8', 1, '2021-10-11'),
(6, 'Windows 8.1', 1, '2021-10-11'),
(7, 'Windows 10', 1, '2021-10-11'),
(8, 'Windows 11', 1, '2021-10-11'),
(9, 'Ubuntu', 1, '2021-10-11'),
(10, 'Debian', 1, '2021-10-11'),
(11, 'GNU/LINUX', 1, '2021-10-11'),
(12, 'Mac OS', 1, '2021-10-11');

-- --------------------------------------------------------

-- Volcado de datos para la tabla `tblcomputador`

INSERT INTO `tblcomputador` (`com_id`, `com_activo_fijo`, `com_referencia`, `com_serial`, `com_modelo`, `tblmarca_mar_id`, `com_tipo_computador`, `com_nombre_equipo`, `com_nombre_usuario`, `com_procesador`, `com_memoria_ram`, `com_arquitectura`, `tblsistema_operativo_sis_ope_id`, `com_edicion_sistema_operativo`, `com_capacidad_disco_duro`, `com_office_esta_instalado`, `com_office_esta_activado`, `com_licencia_activacion_office`, `com_sistema_operativo_esta_activado`, `com_licencia_activacion_sistema_operativo`, `tbloficina_ofi_id`, `com_observacion`, `com_estado`, `tblestado_general_est_gen_id`, `com_fecha_registro`) VALUES (NULL, '000459', '39144282769', 'HZDHTW1', 'Vostro', '8', 'Escritorio', 'Aprendiz_SENA', 'Sistemas5', 'Intel(R) Core(TM) i3-3220 CPU 3.30 GHz', '4,00 GB', 'x64', '7', 'Pro', '930 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', '16', 'Ninguna', 'Usado', '1', '2021-10-11');

-- --------------------------------------------------------

-- Volcado de datos para la tabla `tbldispositivo`

INSERT INTO `tbldispositivo` (`dis_id`, `dis_activo_fijo`, `dis_descripcion`, `tblmarca_mar_id`, `dis_referencia`, `dis_serial`, `dis_modelo`, `dis_capacidad`, `dis_observacion`, `dis_estado`, `tbloficina_ofi_id`, `tblestado_general_est_gen_id`, `dis_fecha_registro`) VALUES (NULL, '000791', ' Desktop Switch', '18', 'No tiene', '2213234006104', 'MS108G', '8 Puertos', 'Ninguna.', 'Nuevo', '21', '1', '2021-10-11');

-- --------------------------------------------------------

-- Volcado de datos para la tabla `tbleps`

INSERT INTO `tbleps` (`eps_id`, `eps_nit`, `eps_razon_social`, `eps_correo`, `eps_direccion`, `eps_telefono`, `tblestado_general_est_gen_id`, `eps_fecha_registro`) VALUES (NULL, '890303093', 'Comfenalco Valle Delagente', 'citasmedicas@comfenalcovalle.com.co', ' Cl. 5 #6-63, Cali, Valle del Cauca', '8862727', '1', '2021-10-11');

-- --------------------------------------------------------


INSERT INTO `tblcargo` (`car_id`, `car_descripcion`, `tblestado_general_est_gen_id`, `car_fecha_registro`) VALUES (NULL, 'Programador', '1', '2021-10-11');

INSERT INTO `tblcaja_compensacion` (`caj_com_id`, `caj_nit`, `caj_razon_social`, `caj_correo`, `caj_direccion`, `caj_telefono`, `tblestado_general_est_gen_id`, `caj_com_fecha_registro`) VALUES (NULL, '8903030935', 'Caja De Compensacion Familiar Del Valle Del Cauca Comfenalco Valle', 'sucaja@comfenalco.com.co', 'CALLE 5 6 63', '8862727', '1', '2021-10-11');


INSERT INTO `tblfondo_pension` (`fon_pen_id`, `fon_nit`, `fon_razon_social`, `fon_correo`, `fon_direccion`, `fon_telefono`, `tblestado_general_est_gen_id`, `fon_pen_fecha_registro`) VALUES (NULL, '8001443313', 'SOCIEDAD ADMINISTRADORA DE FONDOS DE PENSIONES Y CESANTIAS– Porvenir', 'porvenir@en-contacto.co', 'Carrera 13 # 26a- 65, Bogotá, Colombia', '7434441', '1', '2021-10-11');


INSERT INTO `tblfamilia_empleado` (`fam_emp_id`, `fam_emp_nombre_completo_empleado`, `fam_emp_tipo_documento_familiar1`, `fam_emp_numero_documento_familiar1`, `fam_emp_primer_nombre_familiar1`, `fam_emp_segundo_nombre_familiar1`, `fam_emp_primer_apellido_familiar1`, `fam_emp_segundo_apellido_familiar1`, `fam_emp_tipo_documento_familiar2`, `fam_emp_numero_documento_familiar2`, `fam_emp_primer_nombre_familiar2`, `fam_emp_segundo_nombre_familiar2`, `fam_emp_primer_apellido_familiar2`, `fam_emp_segundo_apellido_familiar2`, `fam_emp_tipo_documento_familiar3`, `fam_emp_numero_documento_familiar3`, `fam_emp_primer_nombre_familiar3`, `fam_emp_segundo_nombre_familiar3`, `fam_emp_primer_apellido_familiar3`, `fam_emp_segundo_apellido_familiar3`, `fam_emp_tipo_documento_familiar4`, `fam_emp_numero_documento_familiar4`, `fam_emp_primer_nombre_familiar4`, `fam_emp_segundo_nombre_familiar4`, `fam_emp_primer_apellido_familiar4`, `fam_emp_segundo_apellido_familiar4`, `tblestado_general_est_gen_id`, `fam_emp_fecha_registro`) VALUES (NULL, 'Jonathan Rodriguez Lopez', 'Cedula de Ciudadania', '31842390', 'Maria Luz', 'Dary', 'Lopez', 'Muriel', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', '2021-10-11');

INSERT INTO `tblempleado` (`emp_id`, `emp_numero_documento`, `tbltipo_documento_tip_doc_id`, `emp_fecha_expendicion_documento`, `emp_departamento_expedicion_documento`, `emp_municipio_expedicion_documento`, `emp_primer_nombre`, `emp_segundo_nombre`, `emp_primer_apellido`, `emp_segundo_apellido`, `emp_genero`, `emp_fecha_nacimiento`, `emp_estado_civil`, `emp_direccion`, `emp_celular1`, `emp_celular2`, `emp_telefono1`, `emp_telefono2`, `emp_correo_personal`, `emp_correo_institucional`, `emp_departamento`, `emp_ciudad`, `emp_comuna`, `emp_barrio`, `emp_estrato`, `tblfamilia_empleado_fam_emp_id`, `tbleps_eps_id`, `tblarl_arl_id`, `tblcaja_compensacion_caj_com_id`, `tblfondo_pension_fon_pen_id`, `emp_formacion_academica`, `emp_tipo_contrato`, `tblcargo_car_id`, `emp_salario`, `emp_fecha_inicio_laboral`, `emp_fecha_ingreso_empresa`, `emp_estado`, `tblestado_general_est_gen_id`, `emp_fecha_registro`) VALUES (NULL, '1006051548', '1', '2019-08-29', 'Valle del Cauca', 'Yumbo', 'Jonathan', '', 'Rodriguez', 'Lopez', 'Masculino', '2001-08-29', 'Soltero', 'Calle 72 F # 3 BN - 71', '3005575730', NULL, '68757854', NULL, 'jrodriguez8451@misena.edu.co', 'aprendizsena@unibautista.edu.co', 'Valle del Cauca', 'Cali', '6', 'Floralia', '2', '1', '1', '1', '1', '1', 'Tecnico en Sistemas', 'Definidio', '1', '650000', '2020-07-15', '2020-07-15', 'Contratado', '1', '2021-08-18');