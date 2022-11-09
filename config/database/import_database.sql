-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-11-2022 a las 13:56:30
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
  `arl_correo_arl` varchar(70) NOT NULL,
  `arl_telefono_arl` varchar(40) DEFAULT NULL,
  `arl_celular_arl` int(15) UNSIGNED DEFAULT NULL,
  `arl_ciudad` varchar(70) NOT NULL,
  `arl_direccion` varchar(70) NOT NULL,
  `arl_nombre_encargado` varchar(70) DEFAULT NULL,
  `arl_correo_encargado` varchar(70) DEFAULT NULL,
  `arl_telefono_encargado` varchar(40) DEFAULT NULL,
  `arl_celular_encargado` int(15) UNSIGNED DEFAULT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `arl_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblarl`
--

INSERT INTO `tblarl` (`arl_id`, `arl_nit`, `arl_razon_social`, `arl_correo_arl`, `arl_telefono_arl`, `arl_celular_arl`, `arl_ciudad`, `arl_direccion`, `arl_nombre_encargado`, `arl_correo_encargado`, `arl_telefono_encargado`, `arl_celular_encargado`, `tblestado_general_est_gen_id`, `arl_fecha_registro`) VALUES
(1, '0', 'No tiene', 'NULL', 'NULL', 0, '0', 'NULL', 'NULL', 'NULL', '0', 0, 3, '2021-10-04'),
(2, '860011153-6', 'Positiva Compania de Seguros S.A.', 'servicioalcliente@positiva.gov.co', '3307000', 0, 'Cali', 'Cra. 68 #10A-12, El Limonar', 'No tiene', 'No tiene', '0', 0, 1, '2021-10-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblcaja_compensacion`
--

CREATE TABLE `tblcaja_compensacion` (
  `caj_com_id` int(30) UNSIGNED NOT NULL,
  `caj_com_nit` varchar(20) NOT NULL,
  `caj_com_razon_social` varchar(70) NOT NULL,
  `caj_com_correo_cc` varchar(70) NOT NULL,
  `caj_com_telefono_cc` varchar(40) DEFAULT NULL,
  `caj_com_celular_cc` int(15) UNSIGNED DEFAULT NULL,
  `caj_com_ciudad` varchar(70) NOT NULL,
  `caj_com_direccion` varchar(70) NOT NULL,
  `caj_com_nombre_encargado` varchar(70) DEFAULT NULL,
  `caj_com_correo_encargado` varchar(70) DEFAULT NULL,
  `caj_com_telefono_encargado` varchar(40) DEFAULT NULL,
  `caj_com_celular_encargado` int(15) UNSIGNED DEFAULT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `caj_com_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblcaja_compensacion`
--

INSERT INTO `tblcaja_compensacion` (`caj_com_id`, `caj_com_nit`, `caj_com_razon_social`, `caj_com_correo_cc`, `caj_com_telefono_cc`, `caj_com_celular_cc`, `caj_com_ciudad`, `caj_com_direccion`, `caj_com_nombre_encargado`, `caj_com_correo_encargado`, `caj_com_telefono_encargado`, `caj_com_celular_encargado`, `tblestado_general_est_gen_id`, `caj_com_fecha_registro`) VALUES
(1, '0', 'No tiene', 'NULL', 'NULL', 0, '0', 'NULL', 'NULL', 'NULL', '0', 0, 3, '2021-10-04'),
(2, '890303093-5', 'Comfenalco Valle', 'servicioalcliente@comfenalcovalle.com.co', '(602) 8862727', 0, 'Cali', 'Cl. 5 #6-63', 'No tiene', 'No tiene', '0', 0, 1, '2021-10-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblcargo`
--

CREATE TABLE `tblcargo` (
  `car_id` int(30) UNSIGNED NOT NULL,
  `car_descripcion` varchar(100) NOT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `car_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblcargo`
--

INSERT INTO `tblcargo` (`car_id`, `car_descripcion`, `tblestado_general_est_gen_id`, `car_fecha_registro`) VALUES
(1, 'Asesor(a) de Salud Ocupacional', 1, '2021-10-04'),
(2, 'Asistente de Rectoria y Direccion Administrativa', 1, '2021-10-04'),
(3, 'Asistente de Teologia Virtual', 1, '2021-10-04'),
(4, 'Auxiliar de Contabilidad', 1, '2021-10-04'),
(5, 'Auxiliar de Contabilidad y Cartera', 1, '2021-10-04'),
(6, 'Auxiliar de Mantenimiento', 1, '2021-10-04'),
(7, 'Auxiliar de Mantenimiento y Mensajeria', 1, '2021-10-04'),
(8, 'Auxiliar de Servicios Generales', 1, '2021-10-04'),
(9, 'Auxiliar de Sistemas', 1, '2021-10-04'),
(10, 'Aprendiz SENA', 1, '2021-10-04'),
(11, 'Asesor(a) de Comunicaciones y Mercadeo', 1, '2021-10-04'),
(12, 'Becario(a)', 1, '2021-10-04'),
(13, 'Bibliotecologo(a)', 1, '2021-10-04'),
(14, 'Capellan', 1, '2021-10-04'),
(15, 'Contratista', 1, '2021-10-04'),
(16, 'Coordinador(a) de Calidad', 1, '2021-10-04'),
(17, 'Coordinador(a) de Extension y Educacion Continuada', 1, '2021-10-04'),
(18, 'Coordinador(a) de Misiones', 1, '2021-10-04'),
(19, 'Coordinador(a) de Sistemas', 1, '2021-10-04'),
(20, 'Coordinador(a) del Programa de Musica y Gospel', 1, '2021-10-04'),
(21, 'Coordinador(a) del Proyecto Esperanzas de Paz y Formacion Politica a Traves del Libro de Apocalipsis', 1, '2021-10-04'),
(22, 'Coordinador(a) del Proyecto Jovenes con Futuro', 1, '2021-10-04'),
(23, 'Coordinador(a) del Proyecto Pastoral Indigena Biblica', 1, '2021-10-04'),
(24, 'Director(a) Administrativa', 1, '2021-10-04'),
(25, 'Director(a) de Bienestar Universitario', 1, '2021-10-04'),
(26, 'Director(a) de Coros', 1, '2021-10-04'),
(27, 'Director(a) de Investigaciones', 1, '2021-10-04'),
(28, 'Director(a) de Sistemas', 1, '2021-10-04'),
(29, 'Director(a) de Teologia a Distancia', 1, '2021-10-04'),
(30, 'Director(a) del Programa de Especializacion', 1, '2021-10-04'),
(31, 'Director(a) del Programa de Maestria', 1, '2021-10-04'),
(32, 'Director(a) Financiera y Contable', 1, '2021-10-04'),
(33, 'Docente', 1, '2021-10-04'),
(34, 'Ingeniero(a) en Sistemas', 1, '2021-10-04'),
(35, 'Jadinero(a)', 1, '2021-10-04'),
(36, 'Jefe de Mantenimiento', 1, '2021-10-04'),
(37, 'Monitor(a) de Seguimiento y Evaluacion de Proyectos', 1, '2021-10-04'),
(38, 'Recepcionista', 1, '2021-10-04'),
(39, 'Rector(a)', 1, '2021-10-04'),
(40, 'Secretario(a) de Extension y Educacion Continuada', 1, '2021-10-04'),
(41, 'Secretario(a) de Teologia Virtual', 1, '2021-10-04'),
(42, 'Secretario(a) de Vicerrectoria', 1, '2021-10-04'),
(43, 'Tesorero(a)', 1, '2021-10-04'),
(44, 'Vicerrector(a)', 1, '2021-10-04');

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
(1, '000686', 'AIO 510-22ISH', 'MP15GFY4', 'Ideacentre', 24, 'Todo en uno', 'Administrativa', 'Administracion', 'Intel Core  i3-6100T CPU 3.20 GHz', '4,00 GB', 'x64', 7, 'Pro', '930 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 14, 'Ninguna', 'Si', 'Si', 'Usado', 1, '2021-10-04'),
(2, '000705', 'AIO 300-23ISU', 'MP15MP9D', 'Ideacenter', 24, 'Todo en uno', 'Biblioteca', 'Biblioteca', 'Intel Core i3-6006U CPU 1.99 GHz', '4,00 GB', 'x64', 7, 'Pro', '240 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 2, 'Ninguna', 'Si', 'Si', 'Usado', 1, '2022-11-04'),
(3, 'No tiene', 'V130-14IKB', 'MP1GLWTA', 'Sin registrar', 24, 'Portatil', 'Biblioteca2', 'Biblioteca-Soporte', 'Intel Core i5-7200U CPU 2.50 GHz', '4,00 GB', 'x64', 7, 'Pro', '240 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 2, 'Ninguna', 'Si', 'Si', 'Usado', 1, '2022-11-04'),
(4, '000455', 'D06S', 'HZF8TW1', 'Vostro', 14, 'Escritorio', 'Auxiliar-Biblioteca', 'Auxiliar-Biblioteca', 'Intel Core i3-3220 CPU 3.30 GHz', '6,00 GB', 'x64', 7, 'Pro', '930 GB', 'Si', 'Si', 'V7QKV-4XVVR-XYV4D-F7DFM-8R6BM', 'Si', 'VK7JG-NPHTM-C97JM-9MPGT-3V66T', 2, 'Ninguna', 'No', 'No', 'Usado', 1, '2022-11-04'),
(5, '000706', 'AIO 300-23ISU', 'MP15P6ML', 'Ideacenter', 24, 'Todo en uno', 'Bienestar', 'Bienestar', 'Intel Core i3-6006U CPU 1.99 GHz', '4,00 GB', 'x64', 7, 'Pro', '256 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 15, 'Ninguna', 'Si', 'Si', 'Usado', 1, '2022-11-04'),
(6, '000721', 'AIO 520-22IKU', 'MP1A03H0', 'Ideacentre', 24, 'Todo en uno', 'Consulta1', 'Consulta1', 'Intel Pentium CPU 4415U 2.30 GHz', '4,00 GB', 'x64', 7, 'Home Single Language', '909 GB', 'No', 'No', 'No tiene', 'Si', 'GN4YG-YVR8V-2G6X6-CWQ6T-XQBMP', 34, 'Ninguna', 'Si', 'Si', 'Usado', 1, '2022-11-04'),
(7, '000720', 'AIO 520-22IKU', 'MP1A1XYV', 'Ideacentre', 24, 'Todo en uno', 'Consulta2', 'Consulta2', 'Intel Pentium CPU 4415U 2.30 GHz', '4,00 GB', 'x64', 7, 'Home Single Language', '909 GB', 'No', 'No', 'No tiene', 'Si', 'PBQN9-8CG27-PWGH6-DKMFV-RGDFC', 34, 'Ninguna', 'Si', 'Si', 'Usado', 1, '2022-11-04'),
(8, '000719', 'AIO 520-22IKU', 'MP1A1TUZ', 'Ideacentre', 24, 'Todo en uno', 'Consulta3', 'Consulta3', 'Intel Pentimum CPU 4415U 2.30 GHz', '4,00 GB', 'x64', 7, 'Home Single Language', '909 GB', 'No', 'No', 'No tiene', 'Si', 'T6RNR-Q4KPY-CB2DT-RW96B-39MMP', 34, 'Ninguna', 'Si', 'Si', 'Usado', 1, '2022-11-04'),
(9, '000781', 'MacBook Air', 'FVFDP26QJ1WK', 'Sin registrar', 7, 'Portatil', 'Mac-204', 'Mac-204', 'Intel Core i5  2 Nucleos 1.8 GHz', '8,00 GB', 'x64', 12, 'Catalina 10.15.7', '121 GB', 'No', 'No', 'No tiene', 'Si', 'Software Privativo', 2, 'Ninguna', 'Si', 'Si', 'Usado', 1, '2022-11-04'),
(10, '000591', 'H890PV1', '37504179181', 'Vostro', 14, 'Todo en uno', 'Capellan', 'Capellan', 'Intel Core i3-2120T CPU 2.60 GHz', '4,00 GB', 'x64', 4, 'Professional', '465 GB', 'Si', 'Si', 'Se desconoce', 'Si', 'Se desconoce', 9, 'Ninguna', 'No', 'No', 'Antiguo', 1, '2022-11-04'),
(11, '000500', '6566059513', '30L9FY1', 'Vostro', 14, 'Todo en uno', 'pc-comunicacion', 'Comunicaciones', 'Intel Core i3-4150T CPU 3.00 GHz', '8,00 GB', 'x64', 4, 'Professional', '931 GB', 'Si', 'Si', 'JNRGM-WHDWX-FJJG3-K47QV-DRTFM', 'Si', '3RB2W-MNB29-WG8K8-X74QP-BTB99', 22, 'Ninguna', 'No', 'No', 'Antiguo', 1, '2022-11-04'),
(12, '000710', 'AIO 520-24IKU', 'MP1AYJW3', 'Ideacentre', 24, 'Todo en uno', 'Calidad', 'Calidad', 'Intel Core i3-7020U CPU 2.30 GHz', '4,00 GB', 'x64', 7, 'Pro', '240 GB', 'Si', 'No', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 8, 'Ninguna', 'Si', 'Si', 'Usado', 1, '2022-11-04'),
(13, '000467', 'D06S', 'HZF6TW1', 'Vostro', 14, 'Escritorio', 'Becario', 'Becario', 'Intel Core i3-3220 CPU 3.30 GHz', '4,00 GB', 'x64', 7, 'Pro', '930 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 16, 'Ninguna', 'No', 'No', 'Usado', 1, '2022-11-04'),
(14, '000696', 'AIO 300-23ISU', 'MP15NTK5', 'Ideacentre', 24, 'Todo en uno', 'Investigaciones', 'Direinvestigaci', 'Intel Core i3-6006U CPU 2.00 GHz', '4,00 GB', 'x64', 7, 'Pro', '500 GB', 'Si', 'Si', 'KBKQT-2NMXY-JJWGP-M62JB-92CD4', 'Si', 'MPGYN-BHMHH-JHCX6-KTCC9-P37YP', 16, 'Ninguna', 'Si', 'Si', 'Usado', 1, '2022-11-04'),
(15, '000784', ' AIO 3 22IIL5', 'MP1TTLT0', 'Ideacentre', 24, 'Todo en uno', 'Auxiliar-Contable', 'Auxiliar Contable', 'Intel Core i3-1005G1 CPU 1.19 GHz', '8,00 GB', 'x64', 7, 'Pro', '930 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 17, 'Ninguna', 'Si', 'Si', 'Nuevo', 1, '2022-11-04'),
(16, '000716', 'AIO 510-22ISH', 'MP15GANS', 'Sin registrar', 24, 'Todo en uno', 'Contabilidad', 'Contabilidad', 'Intel Core i3-6100T CPU 3.20 GHz', '4,00 GB', 'x64', 7, 'Pro', '256 GB', 'Si', 'Si', 'JNRGM-WHDWX-FJJG3-K47QV-DRTFM', 'Si', 'JDP67-3NK2V-XYQHM-JC3XY-DPFBP', 17, 'Ninguna', 'Si', 'Si', 'Usado', 1, '2022-11-04'),
(17, '000707', 'AIO 300-23ISU', 'MP15QXT3', 'Ideacentre', 24, 'Todo en uno', 'Cartera', 'Cartera', 'Intel Core i3-6006U CPU 1.99 GHz', '4,00 GB', 'x64', 7, 'Pro', '256 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 17, 'Ninguna', 'Si', 'Si', 'Usado', 1, '2022-11-04'),
(18, '000727', 'AIO 520-22IKU', 'MP1F06RS', 'Ideacentre', 24, 'Todo en uno', 'Extension', 'Secretaria Extension', 'Intel Core i3-7020 CPU 2.30 GHz', '4,00 GB', 'x64', 7, 'Pro', '256 GB', 'Si', 'Si', 'V7QKV-4XVVR-XYV4D-F7DFM-8R6BM', 'Si', 'VK7JG-NPHTM-C97JM-9MPGT-3V66T', 18, 'Ninguna', 'Si', 'Si', 'Usado', 1, '2022-11-04'),
(19, '000718', 'No registra', '5CG53664XD', 'RTL8128EE', 18, 'Todo en uno', 'Portatil1', 'Portatil1', 'Intel Celeron CPU N3050 1.60 GHz', '4,00 GB', 'x64', 8, 'Pro', '256 GB', 'Si', 'Si', 'V7QKV-4XVVR-XYV4D-F7DFM-8R6BM', 'Si', 'VK7JG-NPHTM-C97JM-9MPGT-3V66T', 19, 'Ninguna', 'No', 'No', 'Antiguo', 1, '2022-11-04'),
(20, '000457', 'D06S001', 'HZF9TW1', 'Vostro', 14, 'Escritorio', 'Misiones', 'Misiones', 'Intel Core i3-3220 CPU 3.30  GHz', '6,00 GB', 'x64', 7, 'Pro', '930 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 23, 'Ninguna', 'No', 'No', 'Usado', 1, '2022-11-04'),
(21, '000722', 'AIO 300-23ISU', 'MP15NXWJ', 'Ideacentre', 24, 'Todo en uno', 'Docente-Edwin', 'Docente', 'Intel Core i3-6006U CPU 1.99 GHz', '4,00 GB', 'x64', 7, 'Pro', '256 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 25, 'Clave 0509', 'Si', 'Si', 'Usado', 1, '2022-11-04'),
(22, '000685', 'AIO 520-22IKU', 'MP1ARXGE', 'Ideacentre', 24, 'Todo en uno', 'Docente-Jeannet', 'Docente', 'Intel Core i3 7020U CPU 2.30 GHz', '4,00 GB', 'x64', 7, 'Pro', '240 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 25, 'Ninguna', 'Si', 'Si', 'Usado', 1, '2022-11-04'),
(23, '000695', 'AIO 300-23ISU', 'MP15NRCG', 'Ideacentre', 24, 'Todo en uno', 'Docente-Javier', 'Docente', 'Intel Core i3-6006U CPU 1.99 GHz', '4,00 GB', 'x64', 7, 'Pro', '256 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 26, 'Ninguna', 'Si', 'Si', 'Usado', 1, '2022-11-04'),
(24, '000465', 'D06S', 'HZDDTW1', 'Vostro', 14, 'Escritorio', 'Docente-Roberto', 'Docente', 'Intel Core i3-3220 CPU 3.30 GHz', '8,00 GB', 'x64', 7, 'Pro', '930 GB', 'Si', 'Si', 'JNRGM-WHDWX-FJJG3-K47QV-DRTFM', 'Si', '3N8JQ-2TX6P-7W3T8-MM7TC-V8RBP', 26, 'Ninguna', 'No', 'No', 'Usado', 1, '2022-11-04'),
(25, '000785', 'AIO 3 22IIL5', 'MP1TTL57', 'Ideacentre', 24, 'Todo en uno', 'secreadistancia', 'Distancia', 'Intel Core i3-1005G1 CPU 1.19 GHz', '8,00 GB', 'x64', 7, 'Pro', '930 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 30, 'Ninguna', 'Si', 'Si', 'Nuevo', 1, '2022-11-04'),
(26, '000786', 'AIO 3 22IIL5', 'MP1TTL4D', 'Ideacentre', 24, 'Todo en uno', 'Virtual', 'direvirtual', 'Intel Core i3-1005G1 CPU 1.19 GHz', '8,00 GB', 'x64', 7, 'Pro', '930 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 30, 'Ninguna', 'Si', 'Si', 'Nuevo', 1, '2022-11-04'),
(27, 'No tiene', '3442', '4Q7X632', 'Inspiron ', 14, 'Portatil', 'Portatil2', 'Portatil2', '1.70 GHz', '4,00 GB', 'x64', 8, 'Pro', '256 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 30, 'Ninguna', 'No', 'No', 'Usado', 1, '2022-11-04'),
(28, '000783', 'A340-22IWL', 'MP1N202R', 'Ideacentre', 24, 'Todo en uno', 'Recepcion', 'Recepcion', 'Intel Core i3-8145U CPU 2.30 GHz', '8,00 GB', 'x64', 7, 'Pro', '256 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 32, 'Ninguna', 'Si', 'Si', 'Nuevo', 1, '2022-11-04'),
(29, '000788', 'AIO 3 22IIL5', 'MP1TTM00', 'Ideacentre', 24, 'Todo en uno', 'Tesoreria', 'Tesoreria', 'Intel Core i3-1005G1 CPU 1.19 GHz', '8,00 GB', 'x64', 7, 'Pro', '930 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 46, 'Ninguna', 'Si', 'Si', 'Nuevo', 1, '2022-11-04'),
(30, '000698', 'AIO 300-23ISU', 'MP15NVS5', 'Ideacentre', 24, 'Todo en uno', 'Asistente-Rectoria', 'Asistente de Rectoria', 'Intel Core i3-6006U CPU 1.99 GHz', '4,00 GB', 'x64', 7, 'Pro', '256 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 33, 'Ninguna', 'Si', 'Si', 'Usado', 1, '2022-11-04'),
(31, '000474', '12973745305', '5DK8DY1', 'Sin registrar', 14, 'Todo en uno', 'ASISRECTORIA', 'ASISRECTORIA', 'Intel Core i3-3240T CPU 2.90 GHz', '4,00 GB', 'x64', 7, 'Pro', '930 GB', 'Si', 'Si', 'JNRGM-WHDWX-FJJG3-K47QV-DRTFM', 'Si', 'JJKRY-NM3GK-PPYFB-G3TJX-2YRX9', 33, 'Guardado en rectoria', 'No', 'No', 'Antiguo', 1, '2022-11-04'),
(32, 'No tiene', 'MacBook Air', 'FVFXGFQJJ1WK', 'Sin registrar', 7, 'Portatil', 'Pablo Moreno', 'Pablo Moreno', 'Intel Core i5 1.8 GHz', '8,00 GB', 'x64', 12, 'Catalina 10.15.5', '500 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', 'Software Privativo', 33, 'Mac Pastor Pablo Moreno', 'Si', 'Si', 'Usado', 1, '2022-11-04'),
(33, '000767', 'Sin registrar', 'Sin registrar', 'Sin registrar', 24, 'Portatil', 'Sala-Juntas', 'Sala de Juntas', 'Intel Core i5-8250U CPU 1.60 GHz', '8,00 GB', 'x64', 8, 'Pro', '256 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 33, 'Ninguna', 'Si', 'Si', 'Usado', 1, '2022-11-04'),
(34, '000787', 'ThinkBook 14 - IML', 'LR0ETVTP', 'Sin registrar', 24, 'Portatil', 'Lider-Proyectos', 'Lider de Proyectos', 'Intel Core i3-10110U CPU 2.10  GHz', '8,00 GB', 'x64', 7, 'Pro', '512 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 33, 'Ninguna', 'Si', 'Si', 'Nuevo', 1, '2022-11-04'),
(35, '000807', 'PF9XB1616003', '81WE0085LM', 'IdeaPad 3-15IIL05', 24, 'Portatil', 'Sin registrar', 'Sin registrar', 'Intel Core i3-1005G1 CPU 1.20 GHz', '12,0 GB', 'x64', 8, 'Pro', '256 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 33, 'Ninguna', 'Si', 'Si', 'Nuevo', 1, '2022-11-04'),
(36, '000808', 'PF9XB1616003', '81WE0085LM', 'IdeaPad 3-15IIL05', 24, 'Portatil', 'Sin registrar', 'Sin registrar', 'Intel Core i3-1005G1 CPU 1.20 GHz', '12,0 GB', 'x64', 8, 'Pro', '256 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 33, 'Ninguna', 'Si', 'Si', 'Nuevo', 1, '2022-11-04'),
(37, 'No tiene', '176629250686', '176629250686', 'P6006002', 14, 'Portatil', 'Usuario', 'Usuario', 'Intel Celeron CPU N2840 2.16 GHz', '4,00 GB', 'x64', 7, 'Pro', '465 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 33, 'La bateria no funciona', 'No', 'No', 'Antiguo', 1, '2022-11-04'),
(38, 'No tiene', 'Sin registrar', 'Sin registrar', 'Sin registrar', 18, 'Portatil', 'Administracion', 'Administracion', 'AMD A9-9425 RADEON R5, 5 COMPUTE CORES 2C  3G 3.10 GHz ', '12,0 GB', 'x64', 7, 'Pro', '930 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 33, 'La bateria esta fallando', 'Si', 'Si', 'Usado', 1, '2022-11-04'),
(39, '000463', 'D06S', 'HZDGTW1', 'Sin registrar', 14, 'Escritorio', 'unibautista9-PC', 'Sin registrar', 'Intel Core i3-3220 CPU 3.30 GHz', '4,00 GB', 'x64', 4, 'Professional', '931 GB', 'Si', 'Si', 'V7QKV-4XWR-XYV4D-F7DFM-8R6BM', 'Si', '2YTNB-BGP8F-2GCGV-BRM43-2WCMP', 2, 'Ninguno', 'No', 'No', 'Antiguo', 1, '2022-11-04'),
(40, '000441', 'D06S', 'BHX6GZ1', 'Vostro', 14, 'Escritorio', 'salon204', 'salon204', 'Intel Core i3-4130 CPU 3.40 GHz', '4,00 GB', 'x64', 4, 'Professional', '931 GB', 'Si', 'Si', 'JNRGM-WHDWX-FJJG3-K47QV-DRTFM', 'Si', 'NGT3Y-B8WWH-KCH8C-XXDJB-CWD3X', 2, 'Ninguna', 'No', 'No', 'Usado', 1, '2022-11-04'),
(41, '000453', 'D06S', 'HZFCTW1', 'Sin registrar', 14, 'Escritorio', 'salon-201-PC', 'salon-201-PC', 'Intel Core i3-3220 CPU 3.30 GHz', '6,00 GB', 'x32', 4, 'Professional', '931 GB', 'Si', 'Si', 'JNRGM-WHDWX-FJJG3-K47QV-DRTFM', 'Si', 'MN97X-YB99X-6WXC4-V4GPC-VFPMP', 2, 'Ninguna', 'No', 'No', 'Usado', 1, '2022-11-04'),
(42, '000782', 'No tiene', 'No tiene', 'No tiene', 12, 'Escritorio', 'Transmisiones', 'Audiovisuales', 'Intel Core i5-10400F CPU 2.90 GHz', '8,00 GB', 'x64', 7, 'Pro', '237 GB', 'Si', 'Si', 'JNRGM-WHDWX-FJJG3-K47QV-DRTFM', 'Si', '3N8JQ-2TX6P-7W3T8-MM7TC-V8RBP', 43, 'Ninguna', 'No', 'No', 'Nuevo', 1, '2022-11-05'),
(43, '000709', 'AIO 520-24IKU', 'MP1AYGT2', 'Ideacentre', 24, 'Todo en uno', 'No registra', 'No registra', 'Intel Core i3-7020U CPU 2.30 GHz', '4,00 GB', 'x64', 1, 'Pro', 'No tiene disco', 'No', 'No', 'No registra', 'No', 'No registra', 36, 'Board quemada', 'Si', 'Si', 'En mantenimiento', 1, '2022-11-05'),
(44, '000805', 'AIO 510-22ISH', 'MP15GALE', 'Ideacentre', 24, 'Todo en uno', 'Vicerrector', 'Vicerrector', 'AMD A9-9410 Radeon R5 CPU 2.90 GHz', '4,00 GB', 'x64', 8, 'Pro', '256 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 47, 'Ninguna', 'Si', 'Si', 'Usado', 1, '2022-11-05'),
(45, '000451', 'JSD2', '39147175441', 'Vostro', 14, 'Escritorio', 'Sistemas1', 'Sistemas1', 'Intel Core i3-3220 CPU 3.30 GHz', '4,00 GB', 'x64', 7, 'Pro', '930 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 36, 'Ninguna', 'No', 'No', 'Usado', 1, '2022-11-05'),
(46, '000590', '41867743863', 'J890PV1', 'Vostro', 14, 'Todo en uno', 'Sistemas2', 'Sistemas2', 'Intel Core i3-2120T CPU 2.60GHz', '4,00 GB', 'x64', 7, 'Pro', '465 GB', 'Si', 'Si', 'JNRGM-WHDWX-FJJG3-K47QV-DRTFM', 'Si', 'YMBNT-9KWB4-C63MW-VFKRV-G6JYP', 36, 'Ninguna', 'No', 'No', 'Antiguo', 1, '2022-11-05'),
(47, '000459', 'D06S', 'HZDHTW1', 'Vostro', 14, 'Escritorio', 'Sistemas3', 'Sistemas3', 'Intel Core i3-3220 CPU 3.30 GHz', '2,00 GB', 'x64', 7, 'Pro', '930 GB', 'Si', 'Si', 'JNRGM-WHDWX-FJJG3-K47QV-DRTFM', 'Si', '4HPH4-7NQD7-MVB32-9VHXC-MPWYP', 36, 'Ninguna', 'No', 'No', 'Usado', 1, '2022-11-05'),
(48, '000496', 'Model 3048 Series', 'D73WDY1', 'Vostro', 14, 'Escritorio', 'Sistemas4', 'Sistemas4', 'Intel Pentium CPU G3220T 2.60 GHz', '4,00 GB', 'x64', 4, 'Professional', '931 GB', 'Si', 'Si', 'Sin registrar', 'Si', 'Sin registrar', 36, 'Ninguna', 'No', 'No', 'Antiguo', 1, '2022-11-05'),
(49, '000461', 'D06S', 'HZFBTW1', 'Vostro', 14, 'Escritorio', 'Vicerrectoria', 'Vicerrectoria', 'Intel Core i3-3220 CPU 3.30 GHz', '6,00 GB', 'x64', 7, 'Pro', '930 GB', 'Si', 'Si', 'V7QKV-4XVVR-XYV4D-F7DFM-8R6BM', 'Si', 'BDNGF-WBRCQ-HMR4T-PRPG8-XWXV2', 47, 'Ninguna', 'No', 'No', 'Usado', 1, '2022-11-05'),
(50, '000714', '41534324461', 'J2WGPV1', 'Vostro', 14, 'Todo en uno', 'Sistemas5', 'Sistemas5', 'Intel Pentium CPU G2020T 2.50 GHz', '4,00 GB', 'x64', 4, 'Professional', '465 GB', 'Si', 'Si', 'JNRGM-WHDWX-FJJG3-K47QV-DRTFM', 'Si', 'WG7N7-R42MD-PVJKW-F69TF-84YQ3', 36, 'Ninguna', 'No', 'No', 'Antiguo', 1, '2022-11-05'),
(51, '000595', '17005212397', '7T8GPV1', 'Vostro', 14, 'Todo en uno', 'Sistemas6', 'Sistemas6', 'Intel Pentium CPU G2020T 2.50 GHz', '4,00 GB', 'x32', 4, 'Pro', '465 GB', 'Si', 'Si', 'V7QKV-4XVVR-XYV4D-F7DFM-8R6BM', 'Si', 'NDF4G-97FCP-8WVJW-QXBCB-MY2MD', 36, 'Ninguna', 'No', 'No', 'Antiguo', 1, '2022-11-05'),
(52, '000606', 'N4V52AA#ABM', '3CR61207YR', 'Sin registrar', 18, 'Todo en uno', 'Sistemas7', 'Sistemas7', 'Intel Pentium CPU G3250T 2.80 GHz', '4,00 GB', 'x64', 7, 'Pro', '300 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 36, 'Ninguna', 'No', 'No', 'Antiguo', 1, '2022-11-05'),
(53, '000605', 'N4V52AA#ABM', '3CR61207XG', 'Sin registrar', 18, 'Todo en uno', 'Sistemas8', 'Sistemas8', 'Intel Pentium CPU G3250T 2.80 GHz', '4,00 GB', 'x64', 7, 'Pro', '300 GB', 'Si', 'Si', 'G4NKG-BDT43-YM899-BH3H8-DGPRP', 'Si', '2CGDQ-8NKGY-YWFVJ-T44KB-43KTY', 36, 'Ninguna', 'No', 'No', 'Antiguo', 1, '2022-11-05'),
(54, '000699', '13863516409', '6D9Z9Q1', 'Vostro 360', 14, 'Todo en uno', 'Sistemas9', 'Sistemas9', 'Intel Pentium CPU 2.60 GHz', '4,00 GB', 'x64', 8, 'Pro', '449 GB', 'Si', 'Si', 'V7QKV-4XVVR-XYV4D-F7DFM-8R6BM', 'Si', '32KD2-K9CTF-M3DJT-4J3WC-733WD', 36, 'Ninguna', 'No', 'No', 'Antiguo', 1, '2022-11-05'),
(55, '000345', '5764690585', '2NC5BQ1', 'Vostro 360', 14, 'Todo en uno', 'Sistemas10', 'Sistemas10', 'Intel Pentium CPU G620 2.60 GHz', '4,00 GB', 'x64', 8, 'Pro', '297 GB', 'Si', 'Si', 'JNRGM-WHDWX-FJJG3-K47QV-DRTFM', 'Si', 'VK7JG-NPHTM-C97JM-9MPGT-3V66T', 36, 'Ninguna', 'No', 'No', 'Antiguo', 1, '2022-11-05'),
(56, '000704', 'AIO 300-23ISU', 'MP15R6HS', 'Ideacenter', 24, 'Todo en uno', 'Coordinador-Sistemas', 'Coordinador de Sistemas', 'Intel Core i3-6006U CPU 1.99 GHz', '4,00 GB', 'x64', 7, 'Pro', '930 GB', 'Si', 'Si', 'JNRGM-WHDWX-FJJG3-K47QV-DRTFM', 'Si', '7RFW8-CN83Q-B8JY9-9T2MV-B7VYP', 36, 'Ninguna', 'Si', 'Si', 'Usado', 1, '2022-11-08'),
(57, '000449', 'D06S', 'HZDFTW1', 'Vostro', 14, 'Escritorio', 'Sistemas', 'Auxiliar de Sistemas', 'Intel Core i3-3220 CPU 3.30 GHz', '8,00 GB', 'x64', 7, 'Pro', '930 GB', 'Si', 'Si', 'JNRGM-WHDWX-FJJG3-K47QV-DRTFM', 'Si', 'BQW63-7N78C-FTXKB-492GJ-9TJYP', 36, 'Equipo del Auxiliar en Sistemas', 'No', 'No', 'Usado', 1, '2022-11-08'),
(58, '000679', 'Lenovo C20-00', 'MP10V34Z', 'Sin registrar', 24, 'Todo en uno', 'Usuario', 'Usuario', 'Intel Pentium CPU N3700 1.60 GHz', '4,00 GB', 'x64', 8, 'Pro', '930 GB', 'Si', 'Si', 'JNRGM-WHDWX-FJJG3-K47QV-DRTFM', 'Si', 'NW4G4-VFRR4-8DJ9P-HCJM4-DJXV2', 13, 'Ninguna', 'Si', 'Si', 'Usado', 1, '2022-11-08');

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
(1, '000751', 'Access Point', 40, 'No tiene', '1809K FCECDA8372A9-LGEPHU', 'UAP-AC-LITE', '1 GB', 'Pasillo Piso 1 - MAC fc:ec:da:83:72:a9', 'Usado', 29, 1, '2021-10-04'),
(2, '000701', 'Rompemuros', 2, 'Sin registrar', '53551101030599', 'Sin registrar', '100 Mbps', 'Deshabilitado', 'Antiguo', 38, 1, '2021-10-04'),
(3, 'No tiene', 'Acces Point', 40, 'Sin registrar', 'Sin registrar', 'UAP-AC-LITE', '1 GB', 'Salon 101 - MAC fc:ec:da:83:69:7f', 'Usado', 37, 1, '2021-10-04'),
(4, 'No tiene', 'Access Point', 40, 'Sin registrar', 'Sin registrar', 'UAP-AC-LITE', '1 GB', 'Salon 102 - MAC fc:ec:da:83:6e:19', 'Usado', 38, 1, '2021-10-04'),
(5, '000483', 'Router', 33, 'Sin registrar', 'Sin registrar', 'Broadband Wireless-N', '100 Mbps', 'Ninguna', 'Usado', 35, 1, '2021-10-04'),
(6, '000681', 'Switch', 38, 'Sin registrar', '2187454010161', 'TL-SF1008D', '8 Puertos', 'Proporciona red por cable a biblioteca', 'Usado', 36, 1, '2021-10-04'),
(7, '000687', 'Acces Point', 40, 'Sin registrar', 'Sin registrar', 'UAP-AC-LITE', '1 GB', 'Biblioteca - MAC 78:8a:20:b6:68:dc', 'Usado', 2, 1, '2021-10-04'),
(8, 'No tiene', 'Router', 13, 'DIR-G615', 'Sin registrar', 'Sin registrar', '300 Mbps', 'Ninguna', 'Usado', 43, 1, '2021-10-04'),
(9, '000688', 'Access Point', 40, 'Sin registrar', 'Sin registrar', 'UAP-AC-LITE', '1 GB', 'Audiovisuales - MAC 78:8a:20:b6:6b:29', 'Usado', 43, 1, '2021-10-04'),
(10, '000692', 'Access Point', 40, 'Sin registrar', 'Sin registrar', 'UAP-AC-LITE', '1 GB', 'Salon 202 - MAC 78:8a:20:b6:68:be', 'Usado', 40, 1, '2021-10-04'),
(11, '000761', 'Rompemuros', 2, 'Sin registrar', 'Sin registrar', 'Sin registrar', '100 Mbps', 'Deshabilitado', 'Antiguo', 39, 1, '2021-10-04'),
(12, 'No tiene', 'Access Point', 40, 'Sin registrar', 'Sin registrar', 'UAP-AC-LITE', '1 GB', 'Salon 204 - MAC 78:8a:20:b6:6a:13', 'Usado', 42, 1, '2021-10-04'),
(13, '000690', 'Access Point', 40, 'Sin registrar', 'Sin registrar', 'UAP-AC-LITE', '1 GB', 'Salon 203 - MAC 78:8a:20:b6:6a:6d', 'Usado', 41, 1, '2021-10-04'),
(14, 'No tiene', 'Access Point', 40, 'Sin registrar', 'Sin registrar', 'UAP-AC-LITE', '1 GB', 'Cafeteria - MAC 18:e8:29:9c:8d:8a', 'Usado', 7, 1, '2021-10-04'),
(15, '000752', 'Access Point', 40, 'Sin registrar', 'Sin registrar', 'UAP-AC-LITE', '1 GB', 'Bloque A Piso 3 - MAC 18:e8:29:9c:8e:ff', 'Usado', 3, 1, '2021-10-04'),
(16, 'No tiene', 'Access Point', 40, 'Sin registrar', 'Sin registrar', 'UAP-AC-LITE', '1 GB', 'Bloque A Piso 2', 'Usado', 3, 1, '2021-10-04'),
(17, '000750', 'Access Point', 40, 'Sin registrar', 'Sin registrar', 'UAP-AC-LITE', '1 GB', 'Bloque B Piso 1 Frente - MAC fc:ec:da:83:69:e0', 'Usado', 4, 1, '2021-10-04'),
(18, '000632', 'Router', 13, 'DIR-G615', 'Sin registrar', 'Sin registrar', '300 Mbps', 'Ninguna', 'Usado', 4, 1, '2021-10-04'),
(19, 'No tiene', 'Router', 32, 'Sin registrar', 'Sin registrar', 'Sin registrar', 'Sin registrar', 'Rectoria', 'Antiguo', 33, 1, '2021-10-04'),
(20, 'No tiene', 'Rompemuros', 2, 'Sin registrar', 'Sin registrar', 'Sin registrar', '100 Mbps', 'Habilitado', 'Antiguo', 10, 1, '2021-10-04'),
(21, '0000792', 'Switch', 27, 'Sin registrar', '13W20M42B02123', 'LGS124V2', '24 Puertos', 'Tiene 4 entradas quemadas', 'Nuevo', 15, 1, '2021-10-04'),
(22, '0000790', 'Switch', 38, 'Sin registrar', '2211710011271', 'LS1005G', '5 Puertos', 'Ninguna', 'Nuevo', 28, 1, '2021-10-04'),
(23, '000791', 'Switch', 29, 'Sin registrar', '2213234006104', 'MS108G', '8 Puertos', 'Ninguna', 'Nuevo', 28, 1, '2021-10-04'),
(24, '000723', 'Impresora', 15, 'L220', 'V6NK124393', 'C462H', 'N/A', 'Tinta', 'Usado', 14, 1, '2022-11-03'),
(25, 'No tiene', 'Impresora', 18, 'Sin registrar', 'Sin registrar', 'LaserJet 1020', 'N/A', 'Toner', 'Antiguo', 2, 1, '2022-11-03'),
(26, '0000728', 'Inversor', 39, 'No tiene', '2723CY0AP682700012', 'No tiene', 'N/A', 'Ninguna', 'Usado', 15, 1, '2022-11-03'),
(27, '000343', 'Impresora', 18, 'Sin registrar', 'VNB4F75665', 'LaserJet P1102w', 'N/A', 'Toner', 'Usado', 16, 1, '2022-11-03'),
(28, '000351', 'Escaner', 18, 'FCLSD-0512', 'CN1CHAD11C', 'Scanjet G2710', 'N/A', 'Ninguna', 'Antiguo', 16, 1, '2022-11-03'),
(29, 'No tiene', 'Impresora', 15, 'Sin registrar', 'Sin registrar', 'FX-890', 'N/A', 'Matriz de Puntos', 'Antiguo', 17, 1, '2022-11-03'),
(30, 'No tiene', 'Impresora', 18, 'Sin registrar', 'Sin registrar', 'LaserJet 1020', 'N/A', 'Toner', 'Antiguo', 17, 1, '2022-11-03'),
(31, 'No tiene', 'Impresora', 15, 'Sin registrar', 'Sin registrar', 'FX-890', 'N/A', 'Matriz de Puntos', 'Antiguo', 17, 1, '2022-11-03'),
(32, '000647', 'UPS', 21, 'Sin registrar', 'Sin registrar', 'Turbo UPS 8xP', '2000 VA', 'Ninguna', 'Usado', 17, 1, '2022-11-03'),
(33, '000159', 'Impresora', 18, 'Q2461A', 'CNFL110317', 'LaserJet 1012', 'N/A', 'Toner', 'Antiguo', 18, 1, '2022-11-03'),
(34, '000303', 'Impresora', 18, 'Sin registrar', 'VN83J31230', 'P1102w', 'N/A', 'Toner', 'Usado', 19, 1, '2022-11-03'),
(35, '0000729', 'UPS', 21, 'Sin registrar', 'Sin registrar', 'Turbo UPS 8xP', '2000 VA', 'Ninguna', 'Usado', 26, 1, '2022-11-03'),
(36, 'No tiene', 'Impresora', 18, 'Sin registrar', 'Sin registrar', 'LaserJet P1102w', 'N/A', 'Toner', 'Usado', 30, 1, '2022-11-03'),
(37, '000354', 'Escaner', 18, 'FCLSD-0512', 'CN06VA50D4', 'Scanjet G2710', 'N/A', 'Ninguna', 'Antiguo', 30, 1, '2022-11-03'),
(38, '000161', 'UPS', 21, 'Sin registrar', 'Sin registrar', 'Turbo UPS T6-XP', '1500 VA', 'Ninguna', 'Antiguo', 30, 1, '2022-11-03'),
(39, '000766', 'Impresora', 34, ' ES5473MFP', 'AK9A005911A0', 'N36401A', 'N/A', 'Toner', 'Usado', 32, 1, '2022-11-03'),
(40, '000806', 'UPS', 21, 'Sin registrar', 'Sin registrar', 'Turbo UPS 6xP', '1800 VA', 'Ninguna', 'Usado', 33, 1, '2022-11-03'),
(41, '000646', 'Impresora', 35, 'SL-M2070W/XAX', 'O6YCB8KTI8C0008E', 'Express M2070W', 'N/A', 'Ninguna', 'Averiado', 33, 1, '2022-11-03'),
(42, '000809', 'Impresora', 43, 'Sin registrar', 'KKEX48462', 'G3100', 'N/A', 'Tinta - Donacion de DIPAZ', 'Usado', 33, 1, '2022-11-03'),
(43, '000754', 'Video Beam', 42, 'Sin registrar', 'Sin registrar', 'DLP', 'N/A', 'Conexion VGA', 'Usado', 36, 1, '2022-11-03'),
(44, '000134', 'Impresora', 18, 'Q5911A', 'CNBKB01799', 'LaserJet 1020', 'N/A', 'Toner', 'Antiguo', 47, 1, '2022-11-03'),
(45, '000675', 'Servidor', 14, 'PowerEdge R230', 'No registra', 'No registra', 'No registra', 'BigBlueButton', 'Usado', 13, 1, '2022-11-08'),
(46, '000798', 'Servidor', 14, 'PowerEdge R230', 'Sin registrar', 'Sin registrar', 'Sin registrar', 'Moodle', 'Usado', 13, 1, '2022-11-08'),
(47, '000793', 'Servidor', 14, 'PowerEdge R540', '30440901855', 'Sin registrar', 'Sin registrar', 'Pagina Web', 'Nuevo', 13, 1, '2022-11-08'),
(48, '000593', 'Servidor', 14, 'PowerEdge T20', 'CN-OH2-TM1-70163-393B-A0G1', 'Power', '465 GB', 'Servidor Helisa / Contabautista', 'Usado', 13, 1, '2022-11-08'),
(49, '000113', 'Servidor', 12, 'Sin registrar', '1707902105', 'No tiene', '256 GB', 'Siabuc9', 'Usado', 13, 1, '2022-11-08'),
(50, '000670', 'Switch', 10, 'No tiene', 'S6 500-28', 'Stackable Managed', '28 Puertos', 'Ninguna', 'Usado', 13, 1, '2022-11-08'),
(51, 'No tiene', 'Modular Jack Termination', 10, 'Sin registrar', 'Sin registrar', 'AMP NETCONNECT XG Cat6A', '25 Puertos', 'P1', 'Usado', 13, 1, '2022-11-08'),
(52, 'No tiene', 'Modular Jack Termination', 10, 'Sin registrar', 'Sin registrar', 'AMP NETCONNECT XG Cat6A', '25 Puertos', 'P2', 'Usado', 13, 1, '2022-11-08'),
(53, 'No tiene', 'Modular Jack Termination', 10, 'Sin registrar', 'Sin registrar', 'AMP NETCONNECT XG Cat6A', '12 Puertos', 'PP3', 'Usado', 13, 1, '2022-11-08'),
(54, '000670', 'Switch', 10, 'Sin registrar', 'Sin registrar', 'Stackable Managed', '28 Puertos', 'Cisco - S2', 'Usado', 13, 1, '2022-11-08'),
(55, '000794', 'UPS', 21, 'Sin registrar', 'Sin registrar', 'Turbo UPS 8xP', '2000 VA', 'Ninguna', 'Usado', 13, 1, '2022-11-08'),
(56, '000796', 'UPS', 21, 'Sin registrar', 'Sin registrar', 'Turbo UPS 4000', '4000 VA', 'Ninguna', 'Usado', 13, 1, '2022-11-08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblempleado`
--

CREATE TABLE `tblempleado` (
  `emp_id` int(30) UNSIGNED NOT NULL,
  `emp_numero_documento` varchar(70) NOT NULL,
  `tbltipo_documento_tip_doc_id` int(30) UNSIGNED NOT NULL,
  `emp_fecha_expendicion_documento` date NOT NULL,
  `emp_departamento_expedicion_documento` varchar(70) NOT NULL,
  `emp_municipio_expedicion_documento` varchar(70) NOT NULL,
  `emp_nacionalidad` varchar(70) NOT NULL,
  `emp_primer_nombre` varchar(70) NOT NULL,
  `emp_segundo_nombre` varchar(70) DEFAULT NULL,
  `emp_primer_apellido` varchar(70) NOT NULL,
  `emp_segundo_apellido` varchar(70) NOT NULL,
  `emp_genero` varchar(20) NOT NULL,
  `emp_fecha_nacimiento` date NOT NULL,
  `emp_estado_civil` varchar(20) NOT NULL,
  `emp_direccion` varchar(70) NOT NULL,
  `emp_celular1` varchar(70) NOT NULL,
  `emp_celular2` varchar(70) NOT NULL,
  `emp_telefono1` varchar(70) NOT NULL,
  `emp_telefono2` varchar(70) NOT NULL,
  `emp_correo_personal` varchar(70) NOT NULL,
  `emp_correo_institucional` varchar(70) NOT NULL,
  `emp_departamento` varchar(70) NOT NULL,
  `emp_ciudad` varchar(70) NOT NULL,
  `emp_comuna` varchar(70) NOT NULL,
  `emp_barrio` varchar(70) NOT NULL,
  `emp_estrato` varchar(70) NOT NULL,
  `tblfamilia_empleado_fam_emp_id` int(30) UNSIGNED DEFAULT NULL,
  `tbleps_eps_id` int(30) UNSIGNED NOT NULL,
  `tblarl_arl_id` int(30) UNSIGNED NOT NULL,
  `tblcaja_compensacion_caj_com_id` int(30) UNSIGNED NOT NULL,
  `tblfondo_pension_fon_pen_id` int(30) UNSIGNED NOT NULL,
  `emp_formacion_academica` varchar(100) NOT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `emp_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblempleado`
--

INSERT INTO `tblempleado` (`emp_id`, `emp_numero_documento`, `tbltipo_documento_tip_doc_id`, `emp_fecha_expendicion_documento`, `emp_departamento_expedicion_documento`, `emp_municipio_expedicion_documento`, `emp_nacionalidad`, `emp_primer_nombre`, `emp_segundo_nombre`, `emp_primer_apellido`, `emp_segundo_apellido`, `emp_genero`, `emp_fecha_nacimiento`, `emp_estado_civil`, `emp_direccion`, `emp_celular1`, `emp_celular2`, `emp_telefono1`, `emp_telefono2`, `emp_correo_personal`, `emp_correo_institucional`, `emp_departamento`, `emp_ciudad`, `emp_comuna`, `emp_barrio`, `emp_estrato`, `tblfamilia_empleado_fam_emp_id`, `tbleps_eps_id`, `tblarl_arl_id`, `tblcaja_compensacion_caj_com_id`, `tblfondo_pension_fon_pen_id`, `emp_formacion_academica`, `tblestado_general_est_gen_id`, `emp_fecha_registro`) VALUES
(1, '1006051548', 2, '2019-08-29', 'Valle del Cauca', 'Yumbo', 'Colombiano', 'Jonathan', '', 'Rodriguez', 'Lopez', 'Masculino', '2001-08-29', 'Soltero(a)', 'Calle 72 F # 3 BN - 71', '3005575730', '3136388898', '4004678', '0', 'jrodriguezl8451@gmail.com', 'auxiliardesistemas@unibautista.edu.co', 'Valle del Cauca', 'Cali', '6', 'Floralia', '2', 2, 2, 2, 2, 2, 'Tecnologo en Sistemas', 1, '2021-10-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbleps`
--

CREATE TABLE `tbleps` (
  `eps_id` int(30) UNSIGNED NOT NULL,
  `eps_nit` varchar(20) NOT NULL,
  `eps_razon_social` varchar(70) NOT NULL,
  `eps_correo_eps` varchar(70) NOT NULL,
  `eps_telefono_eps` varchar(40) DEFAULT NULL,
  `eps_celular_eps` int(15) UNSIGNED DEFAULT NULL,
  `eps_ciudad` varchar(70) NOT NULL,
  `eps_direccion` varchar(70) NOT NULL,
  `eps_nombre_encargado` varchar(70) DEFAULT NULL,
  `eps_correo_encargado` varchar(70) DEFAULT NULL,
  `eps_telefono_encargado` varchar(40) DEFAULT NULL,
  `eps_celular_encargado` int(15) UNSIGNED DEFAULT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `eps_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbleps`
--

INSERT INTO `tbleps` (`eps_id`, `eps_nit`, `eps_razon_social`, `eps_correo_eps`, `eps_telefono_eps`, `eps_celular_eps`, `eps_ciudad`, `eps_direccion`, `eps_nombre_encargado`, `eps_correo_encargado`, `eps_telefono_encargado`, `eps_celular_encargado`, `tblestado_general_est_gen_id`, `eps_fecha_registro`) VALUES
(1, '0', 'No tiene', 'NULL', 'NULL', 0, '0', 'NULL', 'NULL', 'NULL', '0', 0, 3, '2021-10-04'),
(2, '890303093-5', 'Comfenalco Valle EPS', 'servicioalcliente@comfenalcovalle.com.co', '(602) 4853530', 0, 'Cali', 'Cl. 5 #6-63', 'No tiene', 'No tiene', '0', 0, 1, '2021-10-04');

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
  `fam_emp_parentesco_familiar1` varchar(70) DEFAULT NULL,
  `fam_emp_tipo_documento_familiar2` varchar(70) DEFAULT NULL,
  `fam_emp_numero_documento_familiar2` int(30) UNSIGNED DEFAULT NULL,
  `fam_emp_primer_nombre_familiar2` varchar(70) DEFAULT NULL,
  `fam_emp_segundo_nombre_familiar2` varchar(70) DEFAULT NULL,
  `fam_emp_primer_apellido_familiar2` varchar(70) DEFAULT NULL,
  `fam_emp_segundo_apellido_familiar2` varchar(70) DEFAULT NULL,
  `fam_emp_parentesco_familiar2` varchar(70) DEFAULT NULL,
  `fam_emp_tipo_documento_familiar3` varchar(70) DEFAULT NULL,
  `fam_emp_numero_documento_familiar3` int(30) UNSIGNED DEFAULT NULL,
  `fam_emp_primer_nombre_familiar3` varchar(70) DEFAULT NULL,
  `fam_emp_segundo_nombre_familiar3` varchar(70) DEFAULT NULL,
  `fam_emp_primer_apellido_familiar3` varchar(70) DEFAULT NULL,
  `fam_emp_segundo_apellido_familiar3` varchar(70) DEFAULT NULL,
  `fam_emp_parentesco_familiar3` varchar(70) DEFAULT NULL,
  `fam_emp_tipo_documento_familiar4` varchar(70) DEFAULT NULL,
  `fam_emp_numero_documento_familiar4` int(30) UNSIGNED DEFAULT NULL,
  `fam_emp_primer_nombre_familiar4` varchar(70) DEFAULT NULL,
  `fam_emp_segundo_nombre_familiar4` varchar(70) DEFAULT NULL,
  `fam_emp_primer_apellido_familiar4` varchar(70) DEFAULT NULL,
  `fam_emp_segundo_apellido_familiar4` varchar(70) DEFAULT NULL,
  `fam_emp_parentesco_familiar4` varchar(70) DEFAULT NULL,
  `fam_emp_tipo_documento_familiar5` varchar(70) DEFAULT NULL,
  `fam_emp_numero_documento_familiar5` int(30) UNSIGNED DEFAULT NULL,
  `fam_emp_primer_nombre_familiar5` varchar(70) DEFAULT NULL,
  `fam_emp_segundo_nombre_familiar5` varchar(70) DEFAULT NULL,
  `fam_emp_primer_apellido_familiar5` varchar(70) DEFAULT NULL,
  `fam_emp_segundo_apellido_familiar5` varchar(70) DEFAULT NULL,
  `fam_emp_parentesco_familiar5` varchar(70) DEFAULT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `fam_emp_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblfamilia_empleado`
--

INSERT INTO `tblfamilia_empleado` (`fam_emp_id`, `fam_emp_nombre_completo_empleado`, `fam_emp_numero_documento_empleado`, `fam_emp_tipo_documento_familiar1`, `fam_emp_numero_documento_familiar1`, `fam_emp_primer_nombre_familiar1`, `fam_emp_segundo_nombre_familiar1`, `fam_emp_primer_apellido_familiar1`, `fam_emp_segundo_apellido_familiar1`, `fam_emp_parentesco_familiar1`, `fam_emp_tipo_documento_familiar2`, `fam_emp_numero_documento_familiar2`, `fam_emp_primer_nombre_familiar2`, `fam_emp_segundo_nombre_familiar2`, `fam_emp_primer_apellido_familiar2`, `fam_emp_segundo_apellido_familiar2`, `fam_emp_parentesco_familiar2`, `fam_emp_tipo_documento_familiar3`, `fam_emp_numero_documento_familiar3`, `fam_emp_primer_nombre_familiar3`, `fam_emp_segundo_nombre_familiar3`, `fam_emp_primer_apellido_familiar3`, `fam_emp_segundo_apellido_familiar3`, `fam_emp_parentesco_familiar3`, `fam_emp_tipo_documento_familiar4`, `fam_emp_numero_documento_familiar4`, `fam_emp_primer_nombre_familiar4`, `fam_emp_segundo_nombre_familiar4`, `fam_emp_primer_apellido_familiar4`, `fam_emp_segundo_apellido_familiar4`, `fam_emp_parentesco_familiar4`, `fam_emp_tipo_documento_familiar5`, `fam_emp_numero_documento_familiar5`, `fam_emp_primer_nombre_familiar5`, `fam_emp_segundo_nombre_familiar5`, `fam_emp_primer_apellido_familiar5`, `fam_emp_segundo_apellido_familiar5`, `fam_emp_parentesco_familiar5`, `tblestado_general_est_gen_id`, `fam_emp_fecha_registro`) VALUES
(1, 'No tiene', 0, 'NULL', 0, 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 0, 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 0, 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 0, 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 0, 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 3, '2021-10-04'),
(2, 'Jonathan Rodriguez Lopez', 1006051548, 'Cedula de ciudadania', 31842390, 'Maria', 'Luz Dary', 'Lopez', 'Muriel', 'Madre', 'NULL', 0, 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 0, 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 0, 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 0, 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 1, '2021-10-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblfondo_pension`
--

CREATE TABLE `tblfondo_pension` (
  `fon_pen_id` int(30) UNSIGNED NOT NULL,
  `fon_pen_nit` varchar(20) NOT NULL,
  `fon_pen_razon_social` varchar(70) NOT NULL,
  `fon_pen_correo_fp` varchar(70) NOT NULL,
  `fon_pen_telefono_fp` varchar(40) DEFAULT NULL,
  `fon_pen_celular_fp` int(15) UNSIGNED DEFAULT NULL,
  `fon_pen_ciudad` varchar(70) NOT NULL,
  `fon_pen_direccion` varchar(70) NOT NULL,
  `fon_pen_nombre_encargado` varchar(70) DEFAULT NULL,
  `fon_pen_correo_encargado` varchar(70) DEFAULT NULL,
  `fon_pen_telefono_encargado` varchar(40) DEFAULT NULL,
  `fon_pen_celular_encargado` int(15) UNSIGNED DEFAULT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `fon_pen_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblfondo_pension`
--

INSERT INTO `tblfondo_pension` (`fon_pen_id`, `fon_pen_nit`, `fon_pen_razon_social`, `fon_pen_correo_fp`, `fon_pen_telefono_fp`, `fon_pen_celular_fp`, `fon_pen_ciudad`, `fon_pen_direccion`, `fon_pen_nombre_encargado`, `fon_pen_correo_encargado`, `fon_pen_telefono_encargado`, `fon_pen_celular_encargado`, `tblestado_general_est_gen_id`, `fon_pen_fecha_registro`) VALUES
(1, '0', 'No tiene', 'NULL', 'NULL', 0, '0', 'NULL', 'NULL', 'NULL', '0', 0, 3, '2021-10-04'),
(2, '900336004-7', 'Colpensiones', 'contacto@colpensiones.gov.co', '018000 41 09 09', 0, 'Cali', 'Av 2 Norte # 7 N - 45', 'No tiene', 'No tiene', '0', 0, 1, '2021-10-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblhistoria_laboral`
--

CREATE TABLE `tblhistoria_laboral` (
  `his_lab_id` int(30) UNSIGNED NOT NULL,
  `tblempleado_emp_id` int(30) UNSIGNED NOT NULL,
  `his_lab_fecha_ingreso_empresa` date NOT NULL,
  `his_lab_fecha_inicio_contrato` date NOT NULL,
  `his_lab_fecha_final_contrato` date NOT NULL,
  `his_lab_tipo_contrato` varchar(70) NOT NULL,
  `his_lab_salario` int(30) UNSIGNED NOT NULL,
  `tblcargo_car_id` int(30) UNSIGNED NOT NULL,
  `his_lab_prorroga` varchar(100) DEFAULT NULL,
  `his_lab_estado` varchar(70) NOT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `his_lab_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblhistoria_laboral`
--

INSERT INTO `tblhistoria_laboral` (`his_lab_id`, `tblempleado_emp_id`, `his_lab_fecha_ingreso_empresa`, `his_lab_fecha_inicio_contrato`, `his_lab_fecha_final_contrato`, `his_lab_tipo_contrato`, `his_lab_salario`, `tblcargo_car_id`, `his_lab_prorroga`, `his_lab_estado`, `tblestado_general_est_gen_id`, `his_lab_fecha_registro`) VALUES
(1, 1, '2021-11-16', '2021-11-16', '2022-02-28', 'Termino Fijo Inferior a 12 Meses', 1000000, 9, 'Desde el 28/02/2022 hasta el 30/06/2022, desde 30/06/2022 hasta 15/12/2022', 'Contrato Vigente', 1, '2021-11-16');

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
(2, '3Bumen', 1, '2021-10-04'),
(3, 'Acer', 1, '2021-10-04'),
(4, 'AeroCool', 1, '2021-10-04'),
(5, 'Alienware', 1, '2021-10-04'),
(6, 'AP Digital', 1, '2021-10-04'),
(7, 'Apple', 1, '2021-10-04'),
(8, 'Asus', 1, '2021-10-04'),
(9, 'CIDEI', 1, '2021-10-04'),
(10, 'Cisco', 1, '2021-10-04'),
(11, 'Compaq', 1, '2021-10-04'),
(12, 'Computador Clon', 1, '2021-10-04'),
(13, 'D-LINK', 1, '2021-10-04'),
(14, 'Dell', 1, '2021-10-04'),
(15, 'EPSON', 1, '2021-10-04'),
(16, 'Gateway', 1, '2021-10-04'),
(17, 'HIKVISION', 1, '2021-10-04'),
(18, 'HP', 1, '2021-10-04'),
(19, 'Huawei', 1, '2021-10-04'),
(20, 'IEN', 1, '2021-10-04'),
(21, 'ITEL', 1, '2021-10-04'),
(22, 'J&R Tecnology', 1, '2021-10-04'),
(23, 'Lanix', 1, '2021-10-04'),
(24, 'Lenovo', 1, '2021-10-04'),
(25, 'LG', 1, '2021-10-04'),
(26, 'Logitech', 1, '2021-10-04'),
(27, 'Lynksys', 1, '2021-10-04'),
(28, 'Maxtor', 1, '2021-10-04'),
(29, 'Mercusys', 1, '2021-10-04'),
(30, 'Microsoft', 1, '2021-10-04'),
(31, 'MSI', 1, '2021-10-04'),
(32, 'N/A', 1, '2021-10-04'),
(33, 'NEXXT', 1, '2021-10-04'),
(34, 'OKI', 1, '2021-10-04'),
(35, 'Samsung', 1, '2021-10-04'),
(36, 'Sony', 1, '2021-10-04'),
(37, 'Toshiba', 1, '2021-10-04'),
(38, 'Tp-link', 1, '2021-10-04'),
(39, 'Tripp-Lite', 1, '2021-10-04'),
(40, 'UBIQUITI', 1, '2021-10-04'),
(41, 'UNITEC', 1, '2021-10-04'),
(42, 'ViewSonic', 1, '2021-10-04'),
(43, 'CANON', 1, '2022-11-03');

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
(3, 'Bloque A', 1, '2021-10-04'),
(4, 'Bloque B', 1, '2021-10-04'),
(5, 'Bloque C', 1, '2021-10-04'),
(6, 'Bloque D', 1, '2021-10-04'),
(7, 'Cafeteria', 1, '2021-10-04'),
(8, 'Calidad', 1, '2021-10-04'),
(9, 'Capellania', 1, '2021-10-04'),
(10, 'Capilla Welmaker', 1, '2021-10-04'),
(11, 'Comunicaciones', 1, '2021-10-04'),
(12, 'Cubiculo de Estudio', 1, '2021-10-04'),
(13, 'Datacenter', 1, '2021-10-04'),
(14, 'Direccion Administrativa', 1, '2021-10-04'),
(15, 'Direccion Bienestar Universitario', 1, '2021-10-04'),
(16, 'Direccion de Investigaciones', 1, '2021-10-04'),
(17, 'Direccion Financiera y Contable', 1, '2021-10-04'),
(18, 'Educacion Continuada y Ext. Universitaria', 1, '2021-10-04'),
(19, 'En casa del colaborador', 1, '2021-10-04'),
(20, 'Enfermeria', 1, '2021-10-04'),
(21, 'Frente las Canchas de Futbol', 1, '2021-10-04'),
(22, 'Mercadeo y Promocion', 1, '2021-10-04'),
(23, 'Misiones', 1, '2021-10-04'),
(24, 'Oficina de Docentes - Capilla Welmaker', 1, '2021-10-04'),
(25, 'Oficina de Profesores A - Primer Piso', 1, '2021-10-04'),
(26, 'Oficina de Profesores B - Primer Piso', 1, '2021-10-04'),
(27, 'Oficina Director de Coros', 1, '2021-10-04'),
(28, 'Poste de Energia - Entre Bloque C y B', 1, '2021-10-04'),
(29, 'Primer Piso - Bano Caballeros', 1, '2021-10-04'),
(30, 'Programa de Teologia Virtual', 1, '2021-10-04'),
(31, 'Proyectos', 1, '2021-10-04'),
(32, 'Recepcion', 1, '2021-10-04'),
(33, 'Rectoria', 1, '2021-10-04'),
(34, 'Sala de Estudios', 1, '2021-10-04'),
(35, 'Sala de Juntas', 1, '2021-10-04'),
(36, 'Sala de Sistemas', 1, '2021-10-04'),
(37, 'Salon 101 - Primer Piso', 1, '2021-10-04'),
(38, 'Salon 102 - Primer Piso', 1, '2021-10-04'),
(39, 'Salon 201 - Segundo Piso', 1, '2021-10-04'),
(40, 'Salon 202 - Segundo Piso', 1, '2021-10-04'),
(41, 'Salon 203 - Segundo Piso', 1, '2021-10-04'),
(42, 'Salon 204 - Segundo Piso', 1, '2021-10-04'),
(43, 'Salon Audiovisual Wyatt', 1, '2021-10-04'),
(44, 'Salon de Coros', 1, '2021-10-04'),
(45, 'Segundo Piso - Bano Caballeros', 1, '2021-10-04'),
(46, 'Tesoreria', 1, '2021-10-04'),
(47, 'Vicerrectoria Academica', 1, '2021-10-04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblproveedor`
--

CREATE TABLE `tblproveedor` (
  `pro_id` int(30) UNSIGNED NOT NULL,
  `pro_nit` varchar(20) NOT NULL,
  `pro_razon_social` varchar(70) NOT NULL,
  `pro_producto_servicio` varchar(70) NOT NULL,
  `pro_correo_proveedor` varchar(70) NOT NULL,
  `pro_telefono_proveedor` varchar(40) DEFAULT NULL,
  `pro_celular_proveedor` int(15) UNSIGNED DEFAULT NULL,
  `pro_ciudad` varchar(70) NOT NULL,
  `pro_direccion` varchar(70) NOT NULL,
  `pro_nombre_encargado` varchar(70) DEFAULT NULL,
  `pro_correo_encargado` varchar(70) DEFAULT NULL,
  `pro_telefono_encargado` varchar(40) DEFAULT NULL,
  `pro_celular_encargado` int(15) UNSIGNED DEFAULT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `pro_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblproveedor`
--

INSERT INTO `tblproveedor` (`pro_id`, `pro_nit`, `pro_razon_social`, `pro_producto_servicio`, `pro_correo_proveedor`, `pro_telefono_proveedor`, `pro_celular_proveedor`, `pro_ciudad`, `pro_direccion`, `pro_nombre_encargado`, `pro_correo_encargado`, `pro_telefono_encargado`, `pro_celular_encargado`, `tblestado_general_est_gen_id`, `pro_fecha_registro`) VALUES
(1, '860045752-4', 'AUROS COPIAS S.A.S', 'Asesoria y Tecnologia', 'exitosanfernando@auros.com.co', '(601) 348 0727', 3102127960, 'Cali', 'Calle 5 # 38D-35 Exito San Fernando Local 124A', 'Fabian Espinosa Suarez', 'fabian.espinosa@aurosnet.com', '0', 3138282325, 1, '2021-10-04');

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
(2, 'Asistente de Rectoria', 1, '2021-10-04'),
(3, 'Coordinador de Sistemas', 1, '2021-10-04');

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
(12, 'Mac OS', 1, '2021-10-04'),
(13, 'Android', 1, '2021-10-04');

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
  `usu_contrasena` varchar(11) NOT NULL,
  `tblrol_rol_id` int(30) UNSIGNED NOT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL,
  `usu_fecha_registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblusuario`
--

INSERT INTO `tblusuario` (`usu_id`, `usu_numero_documento`, `tbltipo_documento_tip_doc_id`, `usu_primer_nombre`, `usu_segundo_nombre`, `usu_primer_apellido`, `usu_segundo_apellido`, `usu_celular`, `usu_telefono`, `usu_direccion`, `usu_correo`, `usu_contrasena`, `tblrol_rol_id`, `tblestado_general_est_gen_id`, `usu_fecha_registro`) VALUES
(1, 1006051548, 2, 'Jonathan', '', 'Rodriguez', 'Lopez', 3005575730, 4004678, 'CL 72 F # BN 71', 'jrodriguezl8451@gmail.com', '%FcjWWzDnD', 1, 1, '2021-10-04'),
(2, 94531256, 2, 'Cesar', 'Augusto', 'Ortegon', 'Rengifo', 3187357478, 5132323, 'Carrera 56 N 1B-112', 'sistemas@unibautista.edu.co', '94531256', 3, 1, '2021-10-04'),
(3, 31565127, 2, 'Monica', 'Fernanda', 'Arce', 'Paredes', 3195812955, 5132323, 'Calle 5 66 09', 'asistentederectoria@unibautista.edu.co', '31565127', 2, 1, '2021-10-04');

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
-- Indices de la tabla `tblhistoria_laboral`
--
ALTER TABLE `tblhistoria_laboral`
  ADD PRIMARY KEY (`his_lab_id`),
  ADD KEY `tblempleado_emp_id` (`tblempleado_emp_id`),
  ADD KEY `tblcargo_car_id` (`tblcargo_car_id`),
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
  MODIFY `arl_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tblcaja_compensacion`
--
ALTER TABLE `tblcaja_compensacion`
  MODIFY `caj_com_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tblcargo`
--
ALTER TABLE `tblcargo`
  MODIFY `car_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de la tabla `tblcomputador`
--
ALTER TABLE `tblcomputador`
  MODIFY `com_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT de la tabla `tbldispositivo`
--
ALTER TABLE `tbldispositivo`
  MODIFY `dis_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT de la tabla `tblempleado`
--
ALTER TABLE `tblempleado`
  MODIFY `emp_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tbleps`
--
ALTER TABLE `tbleps`
  MODIFY `eps_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tblestado_general`
--
ALTER TABLE `tblestado_general`
  MODIFY `est_gen_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
-- AUTO_INCREMENT de la tabla `tblhistoria_laboral`
--
ALTER TABLE `tblhistoria_laboral`
  MODIFY `his_lab_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tblmarca`
--
ALTER TABLE `tblmarca`
  MODIFY `mar_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `tbloficina`
--
ALTER TABLE `tbloficina`
  MODIFY `ofi_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT de la tabla `tblproveedor`
--
ALTER TABLE `tblproveedor`
  MODIFY `pro_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tblrol`
--
ALTER TABLE `tblrol`
  MODIFY `rol_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tblsistema_operativo`
--
ALTER TABLE `tblsistema_operativo`
  MODIFY `sis_ope_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `tbltipo_documento`
--
ALTER TABLE `tbltipo_documento`
  MODIFY `tip_doc_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `tblusuario`
--
ALTER TABLE `tblusuario`
  MODIFY `usu_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  ADD CONSTRAINT `tblempleado_ibfk_7` FOREIGN KEY (`tblestado_general_est_gen_id`) REFERENCES `tblestado_general` (`est_gen_id`);

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
-- Filtros para la tabla `tblhistoria_laboral`
--
ALTER TABLE `tblhistoria_laboral`
  ADD CONSTRAINT `tblhistoria_laboral_ibfk_1` FOREIGN KEY (`tblempleado_emp_id`) REFERENCES `tblempleado` (`emp_id`),
  ADD CONSTRAINT `tblhistoria_laboral_ibfk_2` FOREIGN KEY (`tblcargo_car_id`) REFERENCES `tblcargo` (`car_id`),
  ADD CONSTRAINT `tblhistoria_laboral_ibfk_3` FOREIGN KEY (`tblestado_general_est_gen_id`) REFERENCES `tblestado_general` (`est_gen_id`);

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
