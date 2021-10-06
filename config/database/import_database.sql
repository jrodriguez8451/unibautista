-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-10-2021 a las 21:31:21
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `unibautista`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblarl`
--

CREATE TABLE `tblarl` (
  `arl_id` int(30) UNSIGNED NOT NULL,
  `arl_nit` varchar(20) NOT NULL,
  `arl_razon_social` varchar(70) NOT NULL,
  `arl_correo` varchar(70) NOT NULL,
  `arl_direccion` varchar(70) NOT NULL,
  `arl_telefono` int(15) UNSIGNED NOT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `arl_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblarl`
--

INSERT INTO `tblarl` (`arl_id`, `arl_nit`, `arl_razon_social`, `arl_correo`, `arl_direccion`, `arl_telefono`, `tblestado_general_est_gen_id`, `arl_fecha_registro`) VALUES
(1, '8600111536', 'Positiva', 'servicioalcliente@positiva.gov.co', 'Cra. 68 #10A-12, El Limonar, Cali, Valle del Cauca', 3307000, 1, '2021-10-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblcaja_compensacion`
--

CREATE TABLE `tblcaja_compensacion` (
  `caj_com_id` int(30) UNSIGNED NOT NULL,
  `caj_com_nit` varchar(20) NOT NULL,
  `caj_com_razon_social` varchar(70) NOT NULL,
  `caj_com_correo` varchar(70) NOT NULL,
  `caj_com_direccion` varchar(70) NOT NULL,
  `caj_com_telefono` int(15) UNSIGNED NOT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `caj_com_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblcaja_compensacion`
--

INSERT INTO `tblcaja_compensacion` (`caj_com_id`, `caj_com_nit`, `caj_com_razon_social`, `caj_com_correo`, `caj_com_direccion`, `caj_com_telefono`, `tblestado_general_est_gen_id`, `caj_com_fecha_registro`) VALUES
(1, '0', 'No tiene', 'NULL', 'NULL', 0, 3, '2021-10-04'),
(2, '890303093', 'Comfenalco Valle', 'servicioalcliente@comfenalcovalle.com.co', 'Cl. 5 #6-63, Cali, Valle del Cauca', 8862727, 1, '2021-10-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblcargo`
--

CREATE TABLE `tblcargo` (
  `car_id` int(30) UNSIGNED NOT NULL,
  `car_descripcion` varchar(70) NOT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `car_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblcargo`
--

INSERT INTO `tblcargo` (`car_id`, `car_descripcion`, `tblestado_general_est_gen_id`, `car_fecha_registro`) VALUES
(1, 'Aprendiz SENA', 1, '2021-10-04'),
(2, 'Aprendiz Universitario', 1, '2021-10-04'),
(3, 'Asesor(a) de Comunicaciones', 1, '2021-10-04'),
(4, 'Asesor(a) de Proyectos', 1, '2021-10-04'),
(5, 'Asistente de Rectoria y Administracion', 1, '2021-10-04'),
(6, 'Asistente Teologia Virtual', 1, '2021-10-04'),
(7, 'Auxiliar Contable', 1, '2021-10-04'),
(8, 'Auxiliar Contable y Cartera', 1, '2021-10-04'),
(9, 'Auxiliar de Biblioteca', 1, '2021-10-04'),
(10, 'Bibliotecologo(a)', 1, '2021-10-04'),
(11, 'Capacitador(a) de Riesgos Laborales', 1, '2021-10-04'),
(12, 'Coordinador(a) de Misiones', 1, '2021-10-04'),
(13, 'Coordinador(a) de Musica', 1, '2021-10-04'),
(14, 'Coordinador(a) de Sistemas', 1, '2021-10-04'),
(15, 'Director(a) Administrativo(a)', 1, '2021-10-04'),
(16, 'Director(a) de Bienestar Universitario', 1, '2021-10-04'),
(17, 'Director(a) de Investigaciones', 1, '2021-10-04'),
(18, 'Director(a) de Teologia a Distancia', 1, '2021-10-04'),
(19, 'Director(a) Finaciero(a) y Contable', 1, '2021-10-04'),
(20, 'Investigador(a)', 1, '2021-10-04'),
(21, 'Jardinero(a)', 1, '2021-10-04'),
(22, 'Mantenimiento', 1, '2021-10-04'),
(23, 'Operario(a) de Limpieza', 1, '2021-10-04'),
(24, 'Pastor(a)', 1, '2021-10-04'),
(25, 'Profesor(a)', 1, '2021-10-04'),
(26, 'Programador(a)', 1, '2021-10-04'),
(27, 'Recepcionista', 1, '2021-10-04'),
(28, 'Rector(a)', 1, '2021-10-04'),
(29, 'Rondero(a)', 1, '2021-10-04'),
(30, 'Secreatario(a) Academico(a) y Vicerrectoria', 1, '2021-10-04'),
(31, 'Secretario(a) de Teologia Virtual', 1, '2021-10-04'),
(32, 'Secretario(a) del Departamento de Extension y Educacion Continuada', 1, '2021-10-04'),
(33, 'Tecnico en Sistemas', 1, '2021-10-04'),
(34, 'Tesorero(a)', 1, '2021-10-04'),
(35, 'Vigilante', 1, '2021-10-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblcomputador`
--

CREATE TABLE `tblcomputador` (
  `com_id` int(30) UNSIGNED NOT NULL,
  `com_activo_fijo` varchar(100) NOT NULL,
  `com_referencia` varchar(70) NOT NULL,
  `com_serial` varchar(70) NOT NULL,
  `com_modelo` varchar(70) NOT NULL,
  `tblmarca_mar_id` int(30) UNSIGNED NOT NULL,
  `com_tipo_computador` varchar(70) NOT NULL,
  `com_nombre_equipo` varchar(70) NOT NULL,
  `com_nombre_usuario` varchar(70) NOT NULL,
  `com_procesador` varchar(70) NOT NULL,
  `com_memoria_ram` varchar(20) NOT NULL,
  `com_arquitectura` varchar(20) NOT NULL,
  `tblsistema_operativo_sis_ope_id` int(30) UNSIGNED NOT NULL,
  `com_edicion_sistema_operativo` varchar(70) NOT NULL,
  `com_capacidad_disco_duro` varchar(20) NOT NULL,
  `com_office_esta_instalado` varchar(20) NOT NULL,
  `com_office_esta_activado` varchar(20) NOT NULL,
  `com_licencia_activacion_office` varchar(50) NOT NULL,
  `com_sistema_operativo_esta_activado` varchar(20) NOT NULL,
  `com_licencia_activacion_sistema_operativo` varchar(50) NOT NULL,
  `tbloficina_ofi_id` int(30) UNSIGNED NOT NULL,
  `com_observacion` varchar(100) NOT NULL,
  `com_tpm_activo_so` varchar(20) NOT NULL,
  `com_tpm_activo_bios` varchar(20) NOT NULL,
  `com_estado` varchar(70) NOT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `com_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblcomputador`
--

INSERT INTO `tblcomputador` (`com_id`, `com_activo_fijo`, `com_referencia`, `com_serial`, `com_modelo`, `tblmarca_mar_id`, `com_tipo_computador`, `com_nombre_equipo`, `com_nombre_usuario`, `com_procesador`, `com_memoria_ram`, `com_arquitectura`, `tblsistema_operativo_sis_ope_id`, `com_edicion_sistema_operativo`, `com_capacidad_disco_duro`, `com_office_esta_instalado`, `com_office_esta_activado`, `com_licencia_activacion_office`, `com_sistema_operativo_esta_activado`, `com_licencia_activacion_sistema_operativo`, `tbloficina_ofi_id`, `com_observacion`, `com_tpm_activo_so`, `com_tpm_activo_bios`, `com_estado`, `tblestado_general_est_gen_id`, `com_fecha_registro`) VALUES
(1, '000459', '39144282769', 'HZDHTW1', 'Vostro', 8, 'Escritorio', 'Aprendiz_SENA', 'Sistemas5', 'Intel(R) Core(TM) i3-3220 CPU 3.30 GHz', '4,00 GB', 'x64', 7, 'Pro', '930 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 25, 'Ninguna', 'No', 'No', 'Usado', 1, '2021-10-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbldispositivo`
--

CREATE TABLE `tbldispositivo` (
  `dis_id` int(30) UNSIGNED NOT NULL,
  `dis_activo_fijo` varchar(100) NOT NULL,
  `dis_descripcion` varchar(70) NOT NULL,
  `tblmarca_mar_id` int(30) UNSIGNED NOT NULL,
  `dis_referencia` varchar(70) NOT NULL,
  `dis_serial` varchar(70) NOT NULL,
  `dis_modelo` varchar(70) NOT NULL,
  `dis_capacidad` varchar(70) NOT NULL,
  `dis_observacion` varchar(100) NOT NULL,
  `dis_estado` varchar(70) NOT NULL,
  `tbloficina_ofi_id` int(30) UNSIGNED NOT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `dis_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbldispositivo`
--

INSERT INTO `tbldispositivo` (`dis_id`, `dis_activo_fijo`, `dis_descripcion`, `tblmarca_mar_id`, `dis_referencia`, `dis_serial`, `dis_modelo`, `dis_capacidad`, `dis_observacion`, `dis_estado`, `tbloficina_ofi_id`, `tblestado_general_est_gen_id`, `dis_fecha_registro`) VALUES
(1, '000791', 'Desktop Switch', 18, 'No tiene', '2213234006104', 'MS108G', '8 Puertos', 'Ninguna.', 'Nuevo', 25, 1, '2021-10-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblempleado`
--

CREATE TABLE `tblempleado` (
  `emp_id` int(30) UNSIGNED NOT NULL,
  `emp_numero_documento` int(30) UNSIGNED NOT NULL,
  `tbltipo_documento_tip_doc_id` int(30) UNSIGNED NOT NULL,
  `emp_fecha_expendicion_documento` date NOT NULL,
  `emp_departamento_expedicion_documento` varchar(70) NOT NULL,
  `emp_municipio_expedicion_documento` varchar(70) NOT NULL,
  `emp_primer_nombre` varchar(70) NOT NULL,
  `emp_segundo_nombre` varchar(70) DEFAULT NULL,
  `emp_primer_apellido` varchar(70) NOT NULL,
  `emp_segundo_apellido` varchar(70) NOT NULL,
  `emp_genero` varchar(20) NOT NULL,
  `emp_fecha_nacimiento` date NOT NULL,
  `emp_estado_civil` varchar(20) NOT NULL,
  `emp_direccion` varchar(70) NOT NULL,
  `emp_celular1` int(10) UNSIGNED NOT NULL,
  `emp_celular2` int(10) UNSIGNED NOT NULL,
  `emp_telefono1` int(15) UNSIGNED NOT NULL,
  `emp_telefono2` int(15) UNSIGNED NOT NULL,
  `emp_correo_personal` varchar(70) NOT NULL,
  `emp_correo_institucional` varchar(70) NOT NULL,
  `emp_departamento` varchar(70) NOT NULL,
  `emp_ciudad` varchar(70) NOT NULL,
  `emp_comuna` int(10) UNSIGNED NOT NULL,
  `emp_barrio` varchar(70) NOT NULL,
  `emp_estrato` int(10) UNSIGNED NOT NULL,
  `tblfamilia_empleado_fam_emp_id` int(30) UNSIGNED DEFAULT NULL,
  `tbleps_eps_id` int(30) UNSIGNED NOT NULL,
  `tblarl_arl_id` int(30) UNSIGNED NOT NULL,
  `tblcaja_compensacion_caj_com_id` int(30) UNSIGNED NOT NULL,
  `tblfondo_pension_fon_pen_id` int(30) UNSIGNED NOT NULL,
  `emp_formacion_academica` varchar(100) NOT NULL,
  `emp_tipo_contrato` varchar(20) NOT NULL,
  `tblcargo_car_id` int(30) UNSIGNED NOT NULL,
  `emp_salario` int(30) UNSIGNED NOT NULL,
  `emp_fecha_ingreso_empresa` date NOT NULL,
  `emp_fecha_inicio_laboral` date NOT NULL,
  `emp_fecha_final_laboral` date DEFAULT NULL,
  `emp_estado` varchar(70) NOT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `emp_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblempleado`
--

INSERT INTO `tblempleado` (`emp_id`, `emp_numero_documento`, `tbltipo_documento_tip_doc_id`, `emp_fecha_expendicion_documento`, `emp_departamento_expedicion_documento`, `emp_municipio_expedicion_documento`, `emp_primer_nombre`, `emp_segundo_nombre`, `emp_primer_apellido`, `emp_segundo_apellido`, `emp_genero`, `emp_fecha_nacimiento`, `emp_estado_civil`, `emp_direccion`, `emp_celular1`, `emp_celular2`, `emp_telefono1`, `emp_telefono2`, `emp_correo_personal`, `emp_correo_institucional`, `emp_departamento`, `emp_ciudad`, `emp_comuna`, `emp_barrio`, `emp_estrato`, `tblfamilia_empleado_fam_emp_id`, `tbleps_eps_id`, `tblarl_arl_id`, `tblcaja_compensacion_caj_com_id`, `tblfondo_pension_fon_pen_id`, `emp_formacion_academica`, `emp_tipo_contrato`, `tblcargo_car_id`, `emp_salario`, `emp_fecha_ingreso_empresa`, `emp_fecha_inicio_laboral`, `emp_fecha_final_laboral`, `emp_estado`, `tblestado_general_est_gen_id`, `emp_fecha_registro`) VALUES
(1, 1006051548, 2, '2019-08-29', 'Valle del Cauca', 'Yumbo', 'Jonathan', '', 'Rodriguez', 'Lopez', 'Masculino', '2001-08-29', 'Soltero', 'Calle 72 F # 3 BN - 71', 3005575730, 3136388898, 3470850, 0, 'jrodriguez8451@misena.edu.co', 'aprendizsena@unibautista.edu.co', 'Valle del Cauca', 'Cali', 6, 'Floralia', 2, 2, 1, 1, 1, 1, 'Tecnico en Sistemas', 'Definidio', 1, 681396, '2020-07-07', '2021-04-12', '2021-10-11', 'Contratado(a)', 1, '2021-10-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbleps`
--

CREATE TABLE `tbleps` (
  `eps_id` int(30) UNSIGNED NOT NULL,
  `eps_nit` varchar(20) NOT NULL,
  `eps_razon_social` varchar(70) NOT NULL,
  `eps_correo` varchar(70) NOT NULL,
  `eps_direccion` varchar(70) NOT NULL,
  `eps_telefono` int(15) UNSIGNED NOT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `eps_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbleps`
--

INSERT INTO `tbleps` (`eps_id`, `eps_nit`, `eps_razon_social`, `eps_correo`, `eps_direccion`, `eps_telefono`, `tblestado_general_est_gen_id`, `eps_fecha_registro`) VALUES
(1, '8903030935', 'Comfenalco Valle Delagente', 'servicioalcliente@comfenalcovalle.com.co', 'Cl. 5 #6-63, Cali, Valle del Cauca', 8862727, 1, '2021-10-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblestado_general`
--

CREATE TABLE `tblestado_general` (
  `est_gen_id` int(30) UNSIGNED NOT NULL,
  `est_gen_descripcion` varchar(70) NOT NULL,
  `est_gen_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblestado_general`
--

INSERT INTO `tblestado_general` (`est_gen_id`, `est_gen_descripcion`, `est_gen_fecha_registro`) VALUES
(1, 'Activo', '2021-10-04'),
(2, 'Inactivo', '2021-10-04'),
(3, 'Oculto', '2021-10-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblfamilia_empleado`
--

CREATE TABLE `tblfamilia_empleado` (
  `fam_emp_id` int(30) UNSIGNED NOT NULL,
  `fam_emp_nombre_completo_empleado` varchar(70) DEFAULT NULL,
  `fam_emp_numero_documento_empleado` int(30) UNSIGNED DEFAULT NULL,
  `fam_emp_tipo_documento_familiar1` varchar(70) DEFAULT NULL,
  `fam_emp_numero_documento_familiar1` int(30) UNSIGNED DEFAULT NULL,
  `fam_emp_primer_nombre_familiar1` varchar(70) DEFAULT NULL,
  `fam_emp_segundo_nombre_familiar1` varchar(70) DEFAULT NULL,
  `fam_emp_primer_apellido_familiar1` varchar(70) DEFAULT NULL,
  `fam_emp_segundo_apellido_familiar1` varchar(70) DEFAULT NULL,
  `fam_emp_tipo_documento_familiar2` varchar(70) DEFAULT NULL,
  `fam_emp_numero_documento_familiar2` int(30) UNSIGNED DEFAULT NULL,
  `fam_emp_primer_nombre_familiar2` varchar(70) DEFAULT NULL,
  `fam_emp_segundo_nombre_familiar2` varchar(70) DEFAULT NULL,
  `fam_emp_primer_apellido_familiar2` varchar(70) DEFAULT NULL,
  `fam_emp_segundo_apellido_familiar2` varchar(70) DEFAULT NULL,
  `fam_emp_tipo_documento_familiar3` varchar(70) DEFAULT NULL,
  `fam_emp_numero_documento_familiar3` int(30) UNSIGNED DEFAULT NULL,
  `fam_emp_primer_nombre_familiar3` varchar(70) DEFAULT NULL,
  `fam_emp_segundo_nombre_familiar3` varchar(70) DEFAULT NULL,
  `fam_emp_primer_apellido_familiar3` varchar(70) DEFAULT NULL,
  `fam_emp_segundo_apellido_familiar3` varchar(70) DEFAULT NULL,
  `fam_emp_tipo_documento_familiar4` varchar(70) DEFAULT NULL,
  `fam_emp_numero_documento_familiar4` int(30) UNSIGNED DEFAULT NULL,
  `fam_emp_primer_nombre_familiar4` varchar(70) DEFAULT NULL,
  `fam_emp_segundo_nombre_familiar4` varchar(70) DEFAULT NULL,
  `fam_emp_primer_apellido_familiar4` varchar(70) DEFAULT NULL,
  `fam_emp_segundo_apellido_familiar4` varchar(70) DEFAULT NULL,
  `fam_emp_tipo_documento_familiar5` varchar(70) DEFAULT NULL,
  `fam_emp_numero_documento_familiar5` int(30) UNSIGNED DEFAULT NULL,
  `fam_emp_primer_nombre_familiar5` varchar(70) DEFAULT NULL,
  `fam_emp_segundo_nombre_familiar5` varchar(70) DEFAULT NULL,
  `fam_emp_primer_apellido_familiar5` varchar(70) DEFAULT NULL,
  `fam_emp_segundo_apellido_familiar5` varchar(70) DEFAULT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `fam_emp_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblfamilia_empleado`
--

INSERT INTO `tblfamilia_empleado` (`fam_emp_id`, `fam_emp_nombre_completo_empleado`, `fam_emp_numero_documento_empleado`, `fam_emp_tipo_documento_familiar1`, `fam_emp_numero_documento_familiar1`, `fam_emp_primer_nombre_familiar1`, `fam_emp_segundo_nombre_familiar1`, `fam_emp_primer_apellido_familiar1`, `fam_emp_segundo_apellido_familiar1`, `fam_emp_tipo_documento_familiar2`, `fam_emp_numero_documento_familiar2`, `fam_emp_primer_nombre_familiar2`, `fam_emp_segundo_nombre_familiar2`, `fam_emp_primer_apellido_familiar2`, `fam_emp_segundo_apellido_familiar2`, `fam_emp_tipo_documento_familiar3`, `fam_emp_numero_documento_familiar3`, `fam_emp_primer_nombre_familiar3`, `fam_emp_segundo_nombre_familiar3`, `fam_emp_primer_apellido_familiar3`, `fam_emp_segundo_apellido_familiar3`, `fam_emp_tipo_documento_familiar4`, `fam_emp_numero_documento_familiar4`, `fam_emp_primer_nombre_familiar4`, `fam_emp_segundo_nombre_familiar4`, `fam_emp_primer_apellido_familiar4`, `fam_emp_segundo_apellido_familiar4`, `fam_emp_tipo_documento_familiar5`, `fam_emp_numero_documento_familiar5`, `fam_emp_primer_nombre_familiar5`, `fam_emp_segundo_nombre_familiar5`, `fam_emp_primer_apellido_familiar5`, `fam_emp_segundo_apellido_familiar5`, `tblestado_general_est_gen_id`, `fam_emp_fecha_registro`) VALUES
(1, 'No tiene', 0, 'NULL', 0, 'NULL', '', 'NULL', 'NULL', 'NULL', 0, 'NULL', '', 'NULL', 'NULL', 'NULL', 0, 'NULL', '', 'NULL', 'NULL', 'NULL', 0, 'NULL', '', 'NULL', 'NULL', 'NULL', 0, 'NULL', '', 'NULL', 'NULL', 3, '2021-10-04'),
(2, 'Jonathan Rodriguez Lopez', 1006051548, 'Cedula de ciudadania', 31842390, 'Maria', 'Luz Dary', 'Lopez', 'Muriel', 'NULL', 0, 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 0, 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 0, 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 0, 'NULL', 'NULL', 'NULL', 'NULL', 1, '2021-10-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblfondo_pension`
--

CREATE TABLE `tblfondo_pension` (
  `fon_pen_id` int(30) UNSIGNED NOT NULL,
  `fon_pen_nit` varchar(20) NOT NULL,
  `fon_pen_razon_social` varchar(70) NOT NULL,
  `fon_pen_correo` varchar(70) NOT NULL,
  `fon_pen_direccion` varchar(70) NOT NULL,
  `fon_pen_telefono` int(15) UNSIGNED NOT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `fon_pen_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblfondo_pension`
--

INSERT INTO `tblfondo_pension` (`fon_pen_id`, `fon_pen_nit`, `fon_pen_razon_social`, `fon_pen_correo`, `fon_pen_direccion`, `fon_pen_telefono`, `tblestado_general_est_gen_id`, `fon_pen_fecha_registro`) VALUES
(1, '0', 'No tiene', 'NULL', 'NULL', 0, 3, '2021-10-04'),
(2, '9003360047', 'Colpensiones', 'contacto@colpensiones.gov.co', 'Cra. 42 ## 7 - 10 Piso 1, Cali, Valle del Cauca', 4890909, 1, '2021-10-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblmarca`
--

CREATE TABLE `tblmarca` (
  `mar_id` int(30) UNSIGNED NOT NULL,
  `mar_descripcion` varchar(70) NOT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `mar_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblmarca`
--

INSERT INTO `tblmarca` (`mar_id`, `mar_descripcion`, `tblestado_general_est_gen_id`, `mar_fecha_registro`) VALUES
(1, 'No tiene', 3, '2021-10-04'),
(2, 'Apple', 1, '2021-10-04'),
(3, 'Asus', 1, '2021-10-04'),
(4, 'Alienware', 1, '2021-10-04'),
(5, 'Acer', 1, '2021-10-04'),
(6, 'Clon', 1, '2021-10-04'),
(7, 'Compaq', 1, '2021-10-04'),
(8, 'Dell', 1, '2021-10-04'),
(9, 'Gateway', 1, '2021-10-04'),
(10, 'HP', 1, '2021-10-04'),
(11, 'Huawei', 1, '2021-10-04'),
(12, 'Lenovo', 1, '2021-10-04'),
(13, 'LG', 1, '2021-10-04'),
(14, 'Lanix', 1, '2021-10-04'),
(15, 'Lynksys', 1, '2021-10-04'),
(16, 'MSI', 1, '2021-10-04'),
(17, 'Microsoft', 1, '2021-10-04'),
(18, 'Mercusys', 1, '2021-10-04'),
(19, 'Samsung', 1, '2021-10-04'),
(20, 'Sony', 1, '2021-10-04'),
(21, 'Toshiba', 1, '2021-10-04'),
(22, 'Tp-link', 1, '2021-10-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbloficina`
--

CREATE TABLE `tbloficina` (
  `ofi_id` int(30) UNSIGNED NOT NULL,
  `ofi_descripcion` varchar(70) NOT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `ofi_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbloficina`
--

INSERT INTO `tbloficina` (`ofi_id`, `ofi_descripcion`, `tblestado_general_est_gen_id`, `ofi_fecha_registro`) VALUES
(1, 'Archivo', 1, '2021-10-04'),
(2, 'Biblioteca', 1, '2021-10-04'),
(3, 'Capellania', 1, '2021-10-04'),
(4, 'Capilla Welmaker', 1, '2021-10-04'),
(5, 'Comunicaciones', 1, '2021-10-04'),
(6, 'Cubiculo de Estudio', 1, '2021-10-04'),
(7, 'Datacenter', 1, '2021-10-04'),
(8, 'Direccion Administrativa', 1, '2021-10-04'),
(9, 'Direccion Bienestar Universitario', 1, '2021-10-04'),
(10, 'Direccion de Investigaciones', 1, '2021-10-04'),
(11, 'Educacion Continuada y Extension Universitaria', 1, '2021-10-04'),
(12, 'Enfermeria', 1, '2021-10-04'),
(13, 'Equipo prestado / En casa del colaborador', 1, '2021-10-04'),
(14, 'Mercadeo y Promocion', 1, '2021-10-04'),
(15, 'Oficina de Admisiones y Registro', 1, '2021-10-04'),
(16, 'Oficina de Docentes - Capilla Welmaker', 1, '2021-10-04'),
(17, 'Oficina de Misiones', 1, '2021-10-04'),
(18, 'Oficina de Profesores A - Primer Piso', 1, '2021-10-04'),
(19, 'Oficina de Profesores B - Primer Piso', 1, '2021-10-04'),
(20, 'Oficina Director de Coros', 1, '2021-10-04'),
(21, 'Programa Teologia Virtual', 1, '2021-10-04'),
(22, 'Recepcion', 1, '2021-10-04'),
(23, 'Rectoria', 1, '2021-10-04'),
(24, 'Sala de Juntas', 1, '2021-10-04'),
(25, 'Sala de Sistemas', 1, '2021-10-04'),
(26, 'Salon 101 - Primer Piso', 1, '2021-10-04'),
(27, 'Salon 102 - Primer Piso', 1, '2021-10-04'),
(28, 'Salon 201 - Segundo Piso', 1, '2021-10-04'),
(29, 'Salon 202 - Segundo Piso', 1, '2021-10-04'),
(30, 'Salon 203 - Segundo Piso', 1, '2021-10-04'),
(31, 'Salon 204 - Segundo Piso', 1, '2021-10-04'),
(32, 'Salon Audiovisual Wyatt', 1, '2021-10-04'),
(33, 'Salon de Coros', 1, '2021-10-04'),
(34, 'Salon de Estudio', 1, '2021-10-04'),
(35, 'Tesoreria', 1, '2021-10-04'),
(36, 'Vicerrectoria Academica', 1, '2021-10-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblproveedor`
--

CREATE TABLE `tblproveedor` (
  `pro_id` int(30) UNSIGNED NOT NULL,
  `pro_nit` varchar(20) NOT NULL,
  `pro_razon_social` varchar(70) NOT NULL,
  `pro_producto_servicio` varchar(70) NOT NULL,
  `pro_correo` varchar(70) NOT NULL,
  `pro_telefono` varchar(15) NOT NULL,
  `pro_celular` int(15) UNSIGNED DEFAULT NULL,
  `pro_direccion` varchar(70) NOT NULL,
  `pro_encargado` varchar(70) DEFAULT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `pro_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblproveedor`
--

INSERT INTO `tblproveedor` (`pro_id`, `pro_nit`, `pro_razon_social`, `pro_producto_servicio`, `pro_correo`, `pro_telefono`, `pro_celular`, `pro_direccion`, `pro_encargado`, `tblestado_general_est_gen_id`, `pro_fecha_registro`) VALUES
(1, '9010162979', 'S.T.I Soluciones Tecnologicas Inteligentes', 'Vendedores de UPS', 'info@stisoluciones.com.co', '3450857', 3122484802, 'Calle 10 # 43-55 Edificio La Juliana oficina 402', 'Carlos Alberto Patiño', 1, '2021-10-10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblrol`
--

CREATE TABLE `tblrol` (
  `rol_id` int(30) UNSIGNED NOT NULL,
  `rol_descripcion` varchar(70) NOT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `rol_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblrol`
--

INSERT INTO `tblrol` (`rol_id`, `rol_descripcion`, `tblestado_general_est_gen_id`, `rol_fecha_registro`) VALUES
(1, 'Administrador', 1, '2021-10-04'),
(2, 'Aprendiz', 1, '2021-10-04'),
(3, 'Asistente de Rectoria', 1, '2021-10-04'),
(4, 'Coordinador de Sistemas', 1, '2021-10-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblsistema_operativo`
--

CREATE TABLE `tblsistema_operativo` (
  `sis_ope_id` int(30) UNSIGNED NOT NULL,
  `sis_ope_descripcion` varchar(70) NOT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `sis_ope_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblsistema_operativo`
--

INSERT INTO `tblsistema_operativo` (`sis_ope_id`, `sis_ope_descripcion`, `tblestado_general_est_gen_id`, `sis_ope_fecha_registro`) VALUES
(1, 'No tiene', 3, '2021-10-04'),
(2, 'Windows XP', 1, '2021-10-04'),
(3, 'Windows vista', 1, '2021-10-04'),
(4, 'Windows 7', 1, '2021-10-04'),
(5, 'Windows 8', 1, '2021-10-04'),
(6, 'Windows 8.1', 1, '2021-10-04'),
(7, 'Windows 10', 1, '2021-10-04'),
(8, 'Windows 11', 1, '2021-10-04'),
(9, 'Ubuntu', 1, '2021-10-04'),
(10, 'Debian', 1, '2021-10-04'),
(11, 'GNU/LINUX', 1, '2021-10-04'),
(12, 'Mac OS', 1, '2021-10-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbltipo_documento`
--

CREATE TABLE `tbltipo_documento` (
  `tip_doc_id` int(30) UNSIGNED NOT NULL,
  `tip_doc_descripcion` varchar(70) NOT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `tip_doc_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbltipo_documento`
--

INSERT INTO `tbltipo_documento` (`tip_doc_id`, `tip_doc_descripcion`, `tblestado_general_est_gen_id`, `tip_doc_fecha_registro`) VALUES
(1, 'Carnet diplomatico', 1, '2021-10-04'),
(2, 'Cedula de ciudadania', 1, '2021-10-04'),
(3, 'Cedula de extranjeria', 1, '2021-10-04'),
(4, 'Documento extranjero', 1, '2021-10-04'),
(5, 'Pasaporte', 1, '2021-10-04'),
(6, 'Permiso especial de permanencia', 1, '2021-10-04'),
(7, 'Registro civil', 1, '2021-10-04'),
(8, 'Salvoconducto', 1, '2021-10-04'),
(9, 'Tarjeta de identidad', 1, '2021-10-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblusuario`
--

CREATE TABLE `tblusuario` (
  `usu_id` int(30) UNSIGNED NOT NULL,
  `usu_numero_documento` int(20) UNSIGNED NOT NULL,
  `tbltipo_documento_tip_doc_id` int(30) UNSIGNED NOT NULL,
  `usu_primer_nombre` varchar(70) NOT NULL,
  `usu_segundo_nombre` varchar(70) DEFAULT NULL,
  `usu_primer_apellido` varchar(70) NOT NULL,
  `usu_segundo_apellido` varchar(70) NOT NULL,
  `usu_celular` int(15) UNSIGNED DEFAULT NULL,
  `usu_telefono` int(15) UNSIGNED DEFAULT NULL,
  `usu_direccion` varchar(70) DEFAULT NULL,
  `usu_correo` varchar(70) NOT NULL,
  `usu_contrasena` varchar(100) NOT NULL,
  `tblrol_rol_id` int(30) UNSIGNED NOT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `usu_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblusuario`
--

INSERT INTO `tblusuario` (`usu_id`, `usu_numero_documento`, `tbltipo_documento_tip_doc_id`, `usu_primer_nombre`, `usu_segundo_nombre`, `usu_primer_apellido`, `usu_segundo_apellido`, `usu_celular`, `usu_telefono`, `usu_direccion`, `usu_correo`, `usu_contrasena`, `tblrol_rol_id`, `tblestado_general_est_gen_id`, `usu_fecha_registro`) VALUES
(1, 1006051548, 2, 'Jonathan', '', 'Rodriguez', 'Lopez', 3005575730, 3470850, 'CL 72 F # BN 71', 'jrodriguezl8451@gmail.com', '%FcjWWzDnD', 1, 1, '2021-10-04'),
(2, 94531256, 2, 'Cesar', 'Augusto', 'Ortegon', 'Rengifo', 3187357478, 5132323, 'Carrera 56 N 1B-112', 'sistemas@unibautista.edu.co', '94531256', 4, 1, '2021-10-04'),
(3, 31565127, 2, 'Monica', 'Fernanda', 'Arce', 'Paredes', 3195812955, 5132323, 'Calle 5 66 09', 'asistentederectoria@unibautista.edu.co', '31565127', 3, 1, '2021-10-04'),
(4, 0, 2, 'Aprendiz', '', '', '', 0, 0, '', 'aprendizsena@unibautista.edu.co', 'FundacioN1', 2, 1, '2021-10-04');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tblarl`
--
ALTER TABLE `tblarl`
  ADD PRIMARY KEY (`arl_id`),
  ADD KEY `tblestado_general_est_gen_id` (`tblestado_general_est_gen_id`);

--
-- Indices de la tabla `tblcaja_compensacion`
--
ALTER TABLE `tblcaja_compensacion`
  ADD PRIMARY KEY (`caj_com_id`),
  ADD KEY `tblestado_general_est_gen_id` (`tblestado_general_est_gen_id`);

--
-- Indices de la tabla `tblcargo`
--
ALTER TABLE `tblcargo`
  ADD PRIMARY KEY (`car_id`),
  ADD KEY `tblestado_general_est_gen_id` (`tblestado_general_est_gen_id`);

--
-- Indices de la tabla `tblcomputador`
--
ALTER TABLE `tblcomputador`
  ADD PRIMARY KEY (`com_id`),
  ADD KEY `tblmarca_mar_id` (`tblmarca_mar_id`),
  ADD KEY `tblsistema_operativo_sis_ope_id` (`tblsistema_operativo_sis_ope_id`),
  ADD KEY `tbloficina_ofi_id` (`tbloficina_ofi_id`),
  ADD KEY `tblestado_general_est_gen_id` (`tblestado_general_est_gen_id`);

--
-- Indices de la tabla `tbldispositivo`
--
ALTER TABLE `tbldispositivo`
  ADD PRIMARY KEY (`dis_id`),
  ADD KEY `tblmarca_mar_id` (`tblmarca_mar_id`),
  ADD KEY `tblestado_general_est_gen_id` (`tblestado_general_est_gen_id`),
  ADD KEY `tbloficina_ofi_id` (`tbloficina_ofi_id`);

--
-- Indices de la tabla `tblempleado`
--
ALTER TABLE `tblempleado`
  ADD PRIMARY KEY (`emp_id`),
  ADD KEY `tbltipo_documento_tip_doc_id` (`tbltipo_documento_tip_doc_id`),
  ADD KEY `tblfamilia_empleado_fam_emp_id` (`tblfamilia_empleado_fam_emp_id`),
  ADD KEY `tbleps_eps_id` (`tbleps_eps_id`),
  ADD KEY `tblarl_arl_id` (`tblarl_arl_id`),
  ADD KEY `tblcaja_compensacion_caj_com_id` (`tblcaja_compensacion_caj_com_id`),
  ADD KEY `tblfondo_pension_fon_pen_id` (`tblfondo_pension_fon_pen_id`),
  ADD KEY `tblcargo_car_id` (`tblcargo_car_id`),
  ADD KEY `tblestado_general_est_gen_id` (`tblestado_general_est_gen_id`);

--
-- Indices de la tabla `tbleps`
--
ALTER TABLE `tbleps`
  ADD PRIMARY KEY (`eps_id`),
  ADD KEY `tblestado_general_est_gen_id` (`tblestado_general_est_gen_id`);

--
-- Indices de la tabla `tblestado_general`
--
ALTER TABLE `tblestado_general`
  ADD PRIMARY KEY (`est_gen_id`);

--
-- Indices de la tabla `tblfamilia_empleado`
--
ALTER TABLE `tblfamilia_empleado`
  ADD PRIMARY KEY (`fam_emp_id`),
  ADD KEY `tblestado_general_est_gen_id` (`tblestado_general_est_gen_id`);

--
-- Indices de la tabla `tblfondo_pension`
--
ALTER TABLE `tblfondo_pension`
  ADD PRIMARY KEY (`fon_pen_id`),
  ADD KEY `tblestado_general_est_gen_id` (`tblestado_general_est_gen_id`);

--
-- Indices de la tabla `tblmarca`
--
ALTER TABLE `tblmarca`
  ADD PRIMARY KEY (`mar_id`),
  ADD KEY `tblestado_general_est_gen_id` (`tblestado_general_est_gen_id`);

--
-- Indices de la tabla `tbloficina`
--
ALTER TABLE `tbloficina`
  ADD PRIMARY KEY (`ofi_id`),
  ADD KEY `tblestado_general_est_gen_id` (`tblestado_general_est_gen_id`);

--
-- Indices de la tabla `tblproveedor`
--
ALTER TABLE `tblproveedor`
  ADD PRIMARY KEY (`pro_id`),
  ADD KEY `tblestado_general_est_gen_id` (`tblestado_general_est_gen_id`);

--
-- Indices de la tabla `tblrol`
--
ALTER TABLE `tblrol`
  ADD PRIMARY KEY (`rol_id`),
  ADD KEY `tblestado_general_est_gen_id` (`tblestado_general_est_gen_id`);

--
-- Indices de la tabla `tblsistema_operativo`
--
ALTER TABLE `tblsistema_operativo`
  ADD PRIMARY KEY (`sis_ope_id`),
  ADD KEY `tblestado_general_est_gen_id` (`tblestado_general_est_gen_id`);

--
-- Indices de la tabla `tbltipo_documento`
--
ALTER TABLE `tbltipo_documento`
  ADD PRIMARY KEY (`tip_doc_id`),
  ADD KEY `tblestado_general_est_gen_id` (`tblestado_general_est_gen_id`);

--
-- Indices de la tabla `tblusuario`
--
ALTER TABLE `tblusuario`
  ADD PRIMARY KEY (`usu_id`),
  ADD KEY `tbltipo_documento_tip_doc_id` (`tbltipo_documento_tip_doc_id`),
  ADD KEY `tblrol_rol_id` (`tblrol_rol_id`),
  ADD KEY `tblestado_general_est_gen_id` (`tblestado_general_est_gen_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tblarl`
--
ALTER TABLE `tblarl`
  MODIFY `arl_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tblcaja_compensacion`
--
ALTER TABLE `tblcaja_compensacion`
  MODIFY `caj_com_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tblcargo`
--
ALTER TABLE `tblcargo`
  MODIFY `car_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `tblcomputador`
--
ALTER TABLE `tblcomputador`
  MODIFY `com_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tbldispositivo`
--
ALTER TABLE `tbldispositivo`
  MODIFY `dis_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tblempleado`
--
ALTER TABLE `tblempleado`
  MODIFY `emp_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tbleps`
--
ALTER TABLE `tbleps`
  MODIFY `eps_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tblestado_general`
--
ALTER TABLE `tblestado_general`
  MODIFY `est_gen_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tblfamilia_empleado`
--
ALTER TABLE `tblfamilia_empleado`
  MODIFY `fam_emp_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tblfondo_pension`
--
ALTER TABLE `tblfondo_pension`
  MODIFY `fon_pen_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tblmarca`
--
ALTER TABLE `tblmarca`
  MODIFY `mar_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `tbloficina`
--
ALTER TABLE `tbloficina`
  MODIFY `ofi_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `tblproveedor`
--
ALTER TABLE `tblproveedor`
  MODIFY `pro_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tblrol`
--
ALTER TABLE `tblrol`
  MODIFY `rol_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tblsistema_operativo`
--
ALTER TABLE `tblsistema_operativo`
  MODIFY `sis_ope_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `tbltipo_documento`
--
ALTER TABLE `tbltipo_documento`
  MODIFY `tip_doc_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `tblusuario`
--
ALTER TABLE `tblusuario`
  MODIFY `usu_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tblarl`
--
ALTER TABLE `tblarl`
  ADD CONSTRAINT `tblarl_ibfk_1` FOREIGN KEY (`tblestado_general_est_gen_id`) REFERENCES `tblestado_general` (`est_gen_id`);

--
-- Filtros para la tabla `tblcaja_compensacion`
--
ALTER TABLE `tblcaja_compensacion`
  ADD CONSTRAINT `tblcaja_compensacion_ibfk_1` FOREIGN KEY (`tblestado_general_est_gen_id`) REFERENCES `tblestado_general` (`est_gen_id`);

--
-- Filtros para la tabla `tblcargo`
--
ALTER TABLE `tblcargo`
  ADD CONSTRAINT `tblcargo_ibfk_1` FOREIGN KEY (`tblestado_general_est_gen_id`) REFERENCES `tblestado_general` (`est_gen_id`);

--
-- Filtros para la tabla `tblcomputador`
--
ALTER TABLE `tblcomputador`
  ADD CONSTRAINT `tblcomputador_ibfk_1` FOREIGN KEY (`tblmarca_mar_id`) REFERENCES `tblmarca` (`mar_id`),
  ADD CONSTRAINT `tblcomputador_ibfk_2` FOREIGN KEY (`tblsistema_operativo_sis_ope_id`) REFERENCES `tblsistema_operativo` (`sis_ope_id`),
  ADD CONSTRAINT `tblcomputador_ibfk_3` FOREIGN KEY (`tbloficina_ofi_id`) REFERENCES `tbloficina` (`ofi_id`),
  ADD CONSTRAINT `tblcomputador_ibfk_4` FOREIGN KEY (`tblestado_general_est_gen_id`) REFERENCES `tblestado_general` (`est_gen_id`);

--
-- Filtros para la tabla `tbldispositivo`
--
ALTER TABLE `tbldispositivo`
  ADD CONSTRAINT `tbldispositivo_ibfk_1` FOREIGN KEY (`tblmarca_mar_id`) REFERENCES `tblmarca` (`mar_id`),
  ADD CONSTRAINT `tbldispositivo_ibfk_2` FOREIGN KEY (`tblestado_general_est_gen_id`) REFERENCES `tblestado_general` (`est_gen_id`),
  ADD CONSTRAINT `tbldispositivo_ibfk_3` FOREIGN KEY (`tbloficina_ofi_id`) REFERENCES `tbloficina` (`ofi_id`);

--
-- Filtros para la tabla `tblempleado`
--
ALTER TABLE `tblempleado`
  ADD CONSTRAINT `tblempleado_ibfk_1` FOREIGN KEY (`tbltipo_documento_tip_doc_id`) REFERENCES `tbltipo_documento` (`tip_doc_id`),
  ADD CONSTRAINT `tblempleado_ibfk_2` FOREIGN KEY (`tblfamilia_empleado_fam_emp_id`) REFERENCES `tblfamilia_empleado` (`fam_emp_id`),
  ADD CONSTRAINT `tblempleado_ibfk_3` FOREIGN KEY (`tbleps_eps_id`) REFERENCES `tbleps` (`eps_id`),
  ADD CONSTRAINT `tblempleado_ibfk_4` FOREIGN KEY (`tblarl_arl_id`) REFERENCES `tblarl` (`arl_id`),
  ADD CONSTRAINT `tblempleado_ibfk_5` FOREIGN KEY (`tblcaja_compensacion_caj_com_id`) REFERENCES `tblcaja_compensacion` (`caj_com_id`),
  ADD CONSTRAINT `tblempleado_ibfk_6` FOREIGN KEY (`tblfondo_pension_fon_pen_id`) REFERENCES `tblfondo_pension` (`fon_pen_id`),
  ADD CONSTRAINT `tblempleado_ibfk_7` FOREIGN KEY (`tblcargo_car_id`) REFERENCES `tblcargo` (`car_id`),
  ADD CONSTRAINT `tblempleado_ibfk_8` FOREIGN KEY (`tblestado_general_est_gen_id`) REFERENCES `tblestado_general` (`est_gen_id`);

--
-- Filtros para la tabla `tbleps`
--
ALTER TABLE `tbleps`
  ADD CONSTRAINT `tbleps_ibfk_1` FOREIGN KEY (`tblestado_general_est_gen_id`) REFERENCES `tblestado_general` (`est_gen_id`);

--
-- Filtros para la tabla `tblfamilia_empleado`
--
ALTER TABLE `tblfamilia_empleado`
  ADD CONSTRAINT `tblfamilia_empleado_ibfk_1` FOREIGN KEY (`tblestado_general_est_gen_id`) REFERENCES `tblestado_general` (`est_gen_id`);

--
-- Filtros para la tabla `tblfondo_pension`
--
ALTER TABLE `tblfondo_pension`
  ADD CONSTRAINT `tblfondo_pension_ibfk_1` FOREIGN KEY (`tblestado_general_est_gen_id`) REFERENCES `tblestado_general` (`est_gen_id`);

--
-- Filtros para la tabla `tblmarca`
--
ALTER TABLE `tblmarca`
  ADD CONSTRAINT `tblmarca_ibfk_1` FOREIGN KEY (`tblestado_general_est_gen_id`) REFERENCES `tblestado_general` (`est_gen_id`);

--
-- Filtros para la tabla `tbloficina`
--
ALTER TABLE `tbloficina`
  ADD CONSTRAINT `tbloficina_ibfk_1` FOREIGN KEY (`tblestado_general_est_gen_id`) REFERENCES `tblestado_general` (`est_gen_id`);

--
-- Filtros para la tabla `tblproveedor`
--
ALTER TABLE `tblproveedor`
  ADD CONSTRAINT `tblproveedor_ibfk_1` FOREIGN KEY (`tblestado_general_est_gen_id`) REFERENCES `tblestado_general` (`est_gen_id`);

--
-- Filtros para la tabla `tblrol`
--
ALTER TABLE `tblrol`
  ADD CONSTRAINT `tblrol_ibfk_1` FOREIGN KEY (`tblestado_general_est_gen_id`) REFERENCES `tblestado_general` (`est_gen_id`);

--
-- Filtros para la tabla `tblsistema_operativo`
--
ALTER TABLE `tblsistema_operativo`
  ADD CONSTRAINT `tblsistema_operativo_ibfk_1` FOREIGN KEY (`tblestado_general_est_gen_id`) REFERENCES `tblestado_general` (`est_gen_id`);

--
-- Filtros para la tabla `tbltipo_documento`
--
ALTER TABLE `tbltipo_documento`
  ADD CONSTRAINT `tbltipo_documento_ibfk_1` FOREIGN KEY (`tblestado_general_est_gen_id`) REFERENCES `tblestado_general` (`est_gen_id`);

--
-- Filtros para la tabla `tblusuario`
--
ALTER TABLE `tblusuario`
  ADD CONSTRAINT `tblusuario_ibfk_1` FOREIGN KEY (`tbltipo_documento_tip_doc_id`) REFERENCES `tbltipo_documento` (`tip_doc_id`),
  ADD CONSTRAINT `tblusuario_ibfk_2` FOREIGN KEY (`tblrol_rol_id`) REFERENCES `tblrol` (`rol_id`),
  ADD CONSTRAINT `tblusuario_ibfk_3` FOREIGN KEY (`tblestado_general_est_gen_id`) REFERENCES `tblestado_general` (`est_gen_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;