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

-- Tabla Estado

CREATE TABLE tblestado(
    est_id                       INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    est_descripcion              VARCHAR(70) NOT NULL,
    est_fecha_registro           DATE NOT NULL,
    tblestado_general_est_gen_id INT(30) UNSIGNED NOT NULL
);

-- --------------------------------------------------------

-- Tabla Rol

CREATE TABLE tblrol(
    rol_id             INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    rol_descripcion    VARCHAR(70) NOT NULL,
    rol_fecha_registro DATE NOT NULL,
    tblestado_est_id   INT(30) UNSIGNED NOT NULL
);

-- --------------------------------------------------------

-- Tabla Tipo de Documento

CREATE TABLE tbltipo_documento(
    tip_doc_id              INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tip_doc_descripcion     VARCHAR(70) NOT NULL,
    tipo_doc_fecha_registro DATE NOT NULL,
    tblestado_est_id        INT(30) UNSIGNED NOT NULL
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
    usu_celular                  INT(30) UNSIGNED NULL,
    usu_telefono                 INT(30) UNSIGNED NULL,
    usu_direccion                VARCHAR(70) NULL,
    usu_correo                   VARCHAR(50) NOT NULL,
    usu_contrasena               VARCHAR(20) NOT NULL,
    usu_fecha_registro           DATE NOT NULL,
    tblrol_rol_id                INT(30) UNSIGNED NOT NULL,
    tblestado_est_id             INT(30) UNSIGNED NOT NULL
);

-- --------------------------------------------------------

-- Tabla Oficina
CREATE TABLE tbloficina(
    ofi_id              INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ofi_descripcion     VARCHAR(70) NOT NULL,
    ofi_fecha_registro  DATE NOT NULL,
    tblestado_est_id    INT(30) UNSIGNED NOT NULL
);

-- --------------------------------------------------------

-- Tabla Marca

CREATE TABLE tblmarca(
    mar_id             INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    mar_descripcion    VARCHAR(70) NOT NULL,
    mar_fecha_registro DATE NOT NULL,
    tblestado_est_id   INT(30) UNSIGNED NOT NULL
);

-- --------------------------------------------------------

-- Tabla Sistema Operativo

CREATE TABLE tblsistema_operativo(
    sis_ope_id               INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sis_ope_descripcion      VARCHAR(70) NOT NULL,
    sis_ope_fecha_registro   DATE NOT NULL,
    tblestado_est_id         INT(30) UNSIGNED NOT NULL
);

-- --------------------------------------------------------

-- Tabla Tipo de Computador

CREATE TABLE tbltipo_computador(
    tip_com_id             INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tip_com_descripcion    VARCHAR(70) NOT NULL,
    tip_com_fecha_registro DATE NOT NULL,
    tblestado_est_id       INT(30) UNSIGNED NOT NULL
);

-- --------------------------------------------------------

-- Tabla Computador

CREATE TABLE tblcomputador(
    com_id                          INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    com_activo_fijo                 VARCHAR(100) NULL,
    com_referencia                  VARCHAR(70) NULL,
    com_serial                      VARCHAR(70) NULL,
    com_modelo                      VARCHAR(70) NULL,
    tblmarca_mar_id                 INT(30) UNSIGNED NOT NULL,
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

-- --------------------------------------------------------

-- Tabla EPS

CREATE TABLE tbleps(
    eps_id             INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    eps_descripcion    VARCHAR(50) NOT NULL,
    eps_fecha_registro DATE NOT NULL,
    tblestado_est_id   INT(30) UNSIGNED NOT NULL
);

-- --------------------------------------------------------

-- Tabla ARL

CREATE TABLE tblarl(
    arl_id             INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    arl_descripcion    VARCHAR(50) NOT NULL,
    arl_fecha_registro DATE NOT NULL,
    tblestado_est_id   INT(30) UNSIGNED NOT NULL
);

-- --------------------------------------------------------

-- Tabla Caja de Compensacion

CREATE TABLE tblcaja_compensacion(
    caj_com_id             INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    caj_com_descripcion    VARCHAR(70) NOT NULL,
    caj_com_fecha_registro DATE NOT NULL,
    tblestado_est_id       INT(30) UNSIGNED NOT NULL
);

-- --------------------------------------------------------

-- Tabla Fondo de Pensiones

CREATE TABLE tblfondo_pension(
    fon_pen_id             INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fon_pen_descripcion    VARCHAR(50) NOT NULL,
    fon_pen_fecha_registro DATE NOT NULL,
    tblestado_est_id       INT(30) UNSIGNED NOT NULL
);

-- --------------------------------------------------------

-- Tabla Dispositivo

CREATE TABLE tbldispositivo(
    dis_id                          INT(30) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dis_activo_fijo                 VARCHAR(100) NULL,
    dis_descripcion                 VARCHAR(50) NOT NULL,
    tblmarca_mar_id                 INT(30) UNSIGNED NOT NULL,
    dis_referencia                  VARCHAR(70) NULL,
    dis_serial                      VARCHAR(70) NULL,
    dis_modelo                      VARCHAR(70) NULL,
    dis_capacidad                   VARCHAR(70) NULL,
    dis_observacion                 VARCHAR(100) NULL,
    dis_fecha_registro              DATE NOT NULL,
    tbloficina_ofi_id               INT(30) UNSIGNED NOT NULL,
    tblestado_est_id                INT(30) UNSIGNED NOT NULL
);

-- --------------------------------------------------------

-- Tabla Departamento



-- --------------------------------------------------------

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
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

-- --------------------------------------------------------

-- Foranea Tabla Tipo de Documento

ALTER TABLE     tbltipo_documento 
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

-- --------------------------------------------------------

-- Foranea Tabla Usuario

ALTER TABLE     tblusuario 
ADD FOREIGN KEY (tbltipo_documento_tip_doc_id) 
REFERENCES      tbltipo_documento(tip_doc_id);

ALTER TABLE     tblusuario
ADD FOREIGN KEY (tblrol_rol_id) 
REFERENCES      tblrol(rol_id);

ALTER TABLE     tblusuario 
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

-- --------------------------------------------------------

-- Foranea Tabla Oficina

ALTER TABLE     tbloficina 
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

-- --------------------------------------------------------

-- Foranea Tabla Marca

ALTER TABLE     tblmarca
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);


-- --------------------------------------------------------

-- Foranea Tabla Sistema Operativo

ALTER TABLE     tblsistema_operativo
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

-- --------------------------------------------------------

-- Foranea Tabla Tipo de Computador

ALTER TABLE     tbltipo_computador
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

-- --------------------------------------------------------

-- Foranea Tabla Computador

ALTER TABLE     tblcomputador
ADD FOREIGN KEY (tblmarca_mar_id) 
REFERENCES      tblmarca(mar_id);

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

-- --------------------------------------------------------

-- Foranea Tabla EPS

ALTER TABLE     tbleps
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

-- --------------------------------------------------------

-- Foranea Tabla ARL

ALTER TABLE     tblarl
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

-- --------------------------------------------------------

-- Foranea Tabla Cajas de Compensacion

ALTER TABLE     tblcaja_compensacion
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

-- --------------------------------------------------------

-- Foranea Tabla Fondo de Pensiones

ALTER TABLE     tblfondo_pension
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

-- --------------------------------------------------------

-- Foranea Tabla Dispositivo

ALTER TABLE     tbldispositivo
ADD FOREIGN KEY (tblmarca_mar_id) 
REFERENCES      tblmarca(mar_id);

ALTER TABLE     tbldispositivo
ADD FOREIGN KEY (tblestado_est_id) 
REFERENCES      tblestado(est_id);

ALTER TABLE     tbldispositivo
ADD FOREIGN KEY (tbloficina_ofi_id) 
REFERENCES      tbloficina(ofi_id);

-- --------------------------------------------------------

-- Foranea Tabla Empleado



-- --------------------------------------------------------

-- Insercion de registros

-- --------------------------------------------------------

-- Volcado de datos para la tabla `tblestado_general`

INSERT INTO `tblestado_general` (`est_gen_id`, `est_gen_descripcion`, `est_gen_fecha_registro`) VALUES
(1, 'Activo', '2021-06-29'),
(2, 'Inactivo', '2021-06-29');

-- --------------------------------------------------------

-- Volcado de datos para la tabla `tblestado`

INSERT INTO `tblestado` (`est_id`, `est_descripcion`, `est_fecha_registro`, `tblestado_general_est_gen_id`) VALUES
(1, 'Activo', '2021-06-29', 1),
(2, 'Inactivo', '2021-06-29', 1);

-- --------------------------------------------------------

-- Volcado de datos para la tabla `tblrol`

INSERT INTO `tblrol` (`rol_id`, `rol_descripcion`, `rol_fecha_registro`, `tblestado_est_id`) VALUES
(1, 'Administrador', '2021-06-29', 1);

-- --------------------------------------------------------

-- Volcado de datos para la tabla `tbltipo_documento`

INSERT INTO `tbltipo_documento` (`tip_doc_id`, `tip_doc_descripcion`, `tipo_doc_fecha_registro`, `tblestado_est_id`) VALUES
(1, 'Cedula de Ciudadania', '2021-06-29', 1),
(2, 'Cedula de Extranjeria Colombiana', '2021-06-29', 1),
(3, 'Cedula Extranjera', '2021-06-29', 1),
(4, 'Documento Extranjero', '2021-06-29', 1),
(5, 'Pasaporte', '2021-06-29', 1),
(6, 'Registro Civil', '2021-06-29', 1),
(7, 'Tarjeta de Identidad', '2021-06-29', 1);

-- --------------------------------------------------------

-- Volcado de datos para la tabla `tblusuario`

INSERT INTO `tblusuario` (`usu_id`, `usu_numero_documento`, `tbltipo_documento_tip_doc_id`, `usu_primer_nombre`, `usu_segundo_nombre`, `usu_primer_apellido`, `usu_segundo_apellido`, `usu_celular`, `usu_telefono`, `usu_direccion`, `usu_correo`, `usu_contrasena`, `usu_fecha_registro`, `tblrol_rol_id`, `tblestado_est_id`) VALUES
(1, 1006051548, 1, 'Jonathan', '', 'Rodriguez', 'Lopez', 3005575730, 3659874, ' Calle 14 B N 41A – 25', 'aprendizsena@unibautista.edu.co', '1234', '2021-06-29', 1, 1);

-- --------------------------------------------------------

-- Volcado de datos para la tabla `tbloficina`

INSERT INTO `tbloficina` (`ofi_id`, `ofi_descripcion`, `ofi_fecha_registro`, `tblestado_est_id`) VALUES
(1, 'Biblioteca', '2021-06-29', 1),
(2, 'Comunicaciones', '2021-06-29', 1),
(3, 'Datacenter', '2021-06-29', 1),
(4, 'Direccion de Investigaciones', '2021-06-29', 1),
(5, 'Direccion Financiera y Contable', '2021-06-29', 1),
(6, 'Extension Universitaria', '2021-06-29', 1),
(7, 'Educacion Continuada y Extension Universitaria', '2021-06-29', 1),
(8, 'Equipo Prestado / En casa del Colaborador', '2021-06-29', 1),
(9, 'Mercadeo y Promocion ', '2021-06-29', 1),
(10, 'Oficina de Admisiones y Registro', '2021-06-29', 1),
(11, 'Oficina de Profesores A', '2021-06-29', 1),
(12, 'Oficina de Profesores B', '2021-06-29', 1),
(13, 'Programa Teologia Virtual', '2021-06-29', 1),
(14, 'Recepcion', '2021-06-29', 1),
(15, 'Rectoria', '2021-06-29', 1),
(16, 'Sala de Sistemas', '2021-06-29', 1),
(17, 'Salon Audiovisual Wyatt', '2021-06-29', 1),
(18, 'Sala de Estudio', '2021-06-29', 1),
(19, 'Salon 203 A', '2021-06-29', 1),
(20, 'Salon 203 B', '2021-06-29', 1),
(21, 'Salon 203 C', '2021-06-29', 1),
(22, 'Salon 204', '2021-06-29', 1),
(23, 'Tesoreria', '2021-06-29', 1),
(24, 'Vicerrectoria academica', '2021-06-29', 1);

-- --------------------------------------------------------

-- Volcado de datos para la tabla `tblmarca`

INSERT INTO `tblmarca` (`mar_id`, `mar_descripcion`, `mar_fecha_registro`, `tblestado_est_id`) VALUES
(1, 'No tiene', '2021-06-29', 1),
(2, 'Apple', '2021-06-29', 1),
(3, 'Asus', '2021-06-29', 1),
(4, 'Alienware', '2021-06-29', 1),
(5, 'Acer', '2021-06-29', 1),
(6, 'Clon', '2021-06-29', 1),
(7, 'Compaq', '2021-06-29', 1),
(8, 'Dell', '2021-06-29', 1),
(9, 'Gateway', '2021-06-29', 1),
(10, 'HP', '2021-06-29', 1),
(11, 'Huawei', '2021-06-29', 1),
(12, 'Lenovo', '2021-06-29', 1),
(13, 'LG', '2021-06-29', 1),
(14, 'Lanix', '2021-06-29', 1),
(15, 'Lynksys', '2021-06-29', 1),
(16, 'MSI', '2021-06-29', 1),
(17, 'Microsoft', '2021-06-29', 1),
(18, 'Mercusys', '2021-06-29', 1),
(19, 'Samsung', '2021-06-29', 1),
(20, 'Sony', '2021-06-29', 1),
(21, 'Toshiba', '2021-06-29', 1),
(22, 'Tp-link', '2021-06-29', 1);


-- --------------------------------------------------------

-- Volcado de datos para la tabla `tblsistema_operativo`

INSERT INTO `tblsistema_operativo` (`sis_ope_id`, `sis_ope_descripcion`, `sis_ope_fecha_registro`, `tblestado_est_id`) VALUES
(1, 'Windows XP', '2021-06-29', 1),
(2, 'Windows Vista', '2021-06-29', 1),
(3, 'Windows 7', '2021-06-29', 1),
(4, 'Windows 8', '2021-06-29', 1),
(5, 'Windows 8.1', '2021-06-29', 1),
(6, 'Windows 10', '2021-06-29', 1),
(7, 'Windows 11', '2021-06-29', 1),
(8, 'Ubuntu', '2021-06-29', 1),
(9, 'Debian', '2021-06-29', 1),
(10, 'GNU/LINUX', '2021-06-29', 1),
(11, 'Mac OS', '2021-06-29', 1);

-- --------------------------------------------------------

-- Volcado de datos para la tabla `tbltipo_computador`

INSERT INTO `tbltipo_computador` (`tip_com_id`, `tip_com_descripcion`, `tip_com_fecha_registro`, `tblestado_est_id`) VALUES
(1, 'Escritorio', '2021-06-29', 1),
(2, 'Portatil', '2021-06-29', 1),
(3, 'Servidor', '2021-06-29', 1),
(4, 'Todo en uno', '2021-06-29', 1);

-- --------------------------------------------------------

-- Volcado de datos para la tabla `tblcomputador`

INSERT INTO `tblcomputador` (`com_id`, `com_activo_fijo`, `com_referencia`, `com_serial`, `tblmarca_mar_id`, `tbltipo_computador_tip_com_id`, `com_nombre_equipo`, `com_procesador`, `com_ghz_procesador`, `com_memoria_ram`, `com_arquitectura`, `tblsistema_operativo_sis_ope_id`, `com_edicion_sistema_operativo`, `com_nombre_disco_duro`, `com_capacidad_disco_duro`, `com_office_instalado`, `com_office_activado`, `com_licencia_office`, `com_windows_activado`, `com_licencia_windows`, `tbloficina_ofi_id`, `com_observacion`, `com_fecha_realizacion`, `tblestado_est_id`) VALUES
(1, '000459', '39144282769', 'HZDHTW1', 7, 1, 'Aprendiz_SENA', 'Intel(R) Core(TM) i3-3220 CPU', '3.30 GHz', '4,00 GB', 'x64', 6, 'Pro', 'ST1000DM003-1CH162', '930 GB', 'Si', 'No', 'No tiene', 'No', 'No tiene', 16, 'Es el computador mas rapido de la sala de sistemas', '2021-06-29', 1);

-- --------------------------------------------------------