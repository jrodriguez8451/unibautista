-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-07-2021 a las 17:49:40
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 7.3.27

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
  `arl_descripcion` varchar(50) NOT NULL,
  `arl_fecha_registro` date NOT NULL,
  `tblestado_est_id` int(30) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblcaja_compensacion`
--

CREATE TABLE `tblcaja_compensacion` (
  `caj_com_id` int(30) UNSIGNED NOT NULL,
  `caj_com_descripcion` varchar(70) NOT NULL,
  `caj_com_fecha_registro` date NOT NULL,
  `tblestado_est_id` int(30) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblcomputador`
--

CREATE TABLE `tblcomputador` (
  `com_id` int(30) UNSIGNED NOT NULL,
  `com_activo_fijo` varchar(100) DEFAULT NULL,
  `com_referencia` varchar(70) DEFAULT NULL,
  `com_serial` varchar(70) DEFAULT NULL,
  `com_modelo` varchar(70) DEFAULT NULL,
  `tblmarca_computador_mar_com_id` int(30) UNSIGNED NOT NULL,
  `tbltipo_computador_tip_com_id` int(30) UNSIGNED NOT NULL,
  `com_nombre_equipo` varchar(70) NOT NULL,
  `com_procesador` varchar(70) NOT NULL,
  `com_ghz_procesador` varchar(20) NOT NULL,
  `com_memoria_ram` varchar(20) NOT NULL,
  `com_arquitectura` varchar(20) NOT NULL,
  `tblsistema_operativo_sis_ope_id` int(30) UNSIGNED NOT NULL,
  `com_edicion_sistema_operativo` varchar(70) NOT NULL,
  `com_nombre_disco_duro` varchar(70) DEFAULT NULL,
  `com_capacidad_disco_duro` varchar(70) NOT NULL,
  `com_office_instalado` varchar(20) NOT NULL,
  `com_office_activado` varchar(20) NOT NULL,
  `com_licencia_office` varchar(40) NOT NULL,
  `com_windows_activado` varchar(20) NOT NULL,
  `com_licencia_windows` varchar(40) NOT NULL,
  `tbloficina_ofi_id` int(30) UNSIGNED NOT NULL,
  `com_observacion` varchar(100) DEFAULT NULL,
  `com_fecha_realizacion` date NOT NULL,
  `tblestado_est_id` int(30) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblcomputador`
--

INSERT INTO `tblcomputador` (`com_id`, `com_activo_fijo`, `com_referencia`, `com_serial`, `com_modelo`, `tblmarca_computador_mar_com_id`, `tbltipo_computador_tip_com_id`, `com_nombre_equipo`, `com_procesador`, `com_ghz_procesador`, `com_memoria_ram`, `com_arquitectura`, `tblsistema_operativo_sis_ope_id`, `com_edicion_sistema_operativo`, `com_nombre_disco_duro`, `com_capacidad_disco_duro`, `com_office_instalado`, `com_office_activado`, `com_licencia_office`, `com_windows_activado`, `com_licencia_windows`, `tbloficina_ofi_id`, `com_observacion`, `com_fecha_realizacion`, `tblestado_est_id`) VALUES
(1, '000459', '39144282769', 'HZDHTW1', 'D06S', 7, 1, 'Aprendiz_SENA', 'Intel(R) Core(TM) i3-3220 CPU', '3.30 GHz', '4,00 GB', 'x64', 6, 'Pro', 'ST1000DM003-1CH162', '930 GB', 'Si', 'No', 'No tiene', 'No', 'No tiene', 16, 'Es el computador mas rapido de la sala de sistemas', '2021-06-29', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbldispositivo`
--

CREATE TABLE `tbldispositivo` (
  `dis_id` int(30) UNSIGNED NOT NULL,
  `dis_activo_fijo` varchar(100) DEFAULT NULL,
  `dis_descripcion` varchar(50) NOT NULL,
  `tblmarca_dispositivo_mar_dis_id` int(30) UNSIGNED NOT NULL,
  `dis_referencia` varchar(70) DEFAULT NULL,
  `dis_serial` varchar(70) DEFAULT NULL,
  `dis_modelo` varchar(70) DEFAULT NULL,
  `dis_capacidad` varchar(70) DEFAULT NULL,
  `dis_observacion` varchar(100) DEFAULT NULL,
  `dis_fecha_registro` date NOT NULL,
  `tbloficina_ofi_id` int(30) UNSIGNED NOT NULL,
  `tblestado_est_id` int(30) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbleps`
--

CREATE TABLE `tbleps` (
  `eps_id` int(30) UNSIGNED NOT NULL,
  `eps_descripcion` varchar(50) NOT NULL,
  `eps_fecha_registro` date NOT NULL,
  `tblestado_est_id` int(30) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblestado`
--

CREATE TABLE `tblestado` (
  `est_id` int(30) UNSIGNED NOT NULL,
  `est_descripcion` varchar(70) NOT NULL,
  `est_fecha_registro` date NOT NULL,
  `tblestado_general_est_gen_id` int(30) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblestado`
--

INSERT INTO `tblestado` (`est_id`, `est_descripcion`, `est_fecha_registro`, `tblestado_general_est_gen_id`) VALUES
(1, 'Activo', '2021-06-29', 1),
(2, 'Inactivo', '2021-06-29', 1);

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
(1, 'Activo', '2021-06-29'),
(2, 'Inactivo', '2021-06-29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblfondo_pension`
--

CREATE TABLE `tblfondo_pension` (
  `fon_pen_id` int(30) UNSIGNED NOT NULL,
  `fon_pen_descripcion` varchar(50) NOT NULL,
  `fon_pen_fecha_registro` date NOT NULL,
  `tblestado_est_id` int(30) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblmarca_computador`
--

CREATE TABLE `tblmarca_computador` (
  `mar_com_id` int(30) UNSIGNED NOT NULL,
  `mar_com_descripcion` varchar(70) NOT NULL,
  `mar_com_fecha_registro` date NOT NULL,
  `tblestado_est_id` int(30) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblmarca_computador`
--

INSERT INTO `tblmarca_computador` (`mar_com_id`, `mar_com_descripcion`, `mar_com_fecha_registro`, `tblestado_est_id`) VALUES
(1, 'Apple', '2021-06-29', 1),
(2, 'Asus', '2021-06-29', 1),
(3, 'Acer', '2021-06-29', 1),
(4, 'Alienware', '2021-06-29', 1),
(5, 'Clon', '2021-06-29', 1),
(6, 'Compaq', '2021-06-29', 1),
(7, 'Dell', '2021-06-29', 1),
(8, 'Gateway', '2021-06-29', 1),
(9, 'HP', '2021-06-29', 1),
(10, 'Huawei', '2021-06-29', 1),
(11, 'Lenovo', '2021-06-29', 1),
(12, 'LG', '2021-06-29', 1),
(13, 'Lanix', '2021-06-29', 1),
(14, 'MSI', '2021-06-29', 1),
(15, 'Microsoft', '2021-06-29', 1),
(16, 'Samsung', '2021-06-29', 1),
(17, 'Sony', '2021-06-29', 1),
(18, 'Sin marca', '2021-06-29', 1),
(19, 'Toshiba', '2021-06-29', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblmarca_dispositivo`
--

CREATE TABLE `tblmarca_dispositivo` (
  `mar_dis_id` int(30) UNSIGNED NOT NULL,
  `mar_dis_descripcion` varchar(70) NOT NULL,
  `mar_dis_fecha_registro` date NOT NULL,
  `tblestado_est_id` int(30) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbloficina`
--

CREATE TABLE `tbloficina` (
  `ofi_id` int(30) UNSIGNED NOT NULL,
  `ofi_descripcion` varchar(70) NOT NULL,
  `ofi_fecha_registro` date NOT NULL,
  `tblestado_est_id` int(30) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbloficina`
--

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

--
-- Estructura de tabla para la tabla `tblrol`
--

CREATE TABLE `tblrol` (
  `rol_id` int(30) UNSIGNED NOT NULL,
  `rol_descripcion` varchar(70) NOT NULL,
  `rol_fecha_registro` date NOT NULL,
  `tblestado_est_id` int(30) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblrol`
--

INSERT INTO `tblrol` (`rol_id`, `rol_descripcion`, `rol_fecha_registro`, `tblestado_est_id`) VALUES
(1, 'Administrador', '2021-06-29', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblsistema_operativo`
--

CREATE TABLE `tblsistema_operativo` (
  `sis_ope_id` int(30) UNSIGNED NOT NULL,
  `sis_ope_descripcion` varchar(70) NOT NULL,
  `sis_ope_fecha_registro` date NOT NULL,
  `tblestado_est_id` int(30) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblsistema_operativo`
--

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

--
-- Estructura de tabla para la tabla `tbltipo_computador`
--

CREATE TABLE `tbltipo_computador` (
  `tip_com_id` int(30) UNSIGNED NOT NULL,
  `tip_com_descripcion` varchar(70) NOT NULL,
  `tip_com_fecha_registro` date NOT NULL,
  `tblestado_est_id` int(30) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbltipo_computador`
--

INSERT INTO `tbltipo_computador` (`tip_com_id`, `tip_com_descripcion`, `tip_com_fecha_registro`, `tblestado_est_id`) VALUES
(1, 'Escritorio', '2021-06-29', 1),
(2, 'Portatil', '2021-06-29', 1),
(3, 'Servidor', '2021-06-29', 1),
(4, 'Todo en uno', '2021-06-29', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbltipo_documento`
--

CREATE TABLE `tbltipo_documento` (
  `tip_doc_id` int(30) UNSIGNED NOT NULL,
  `tip_doc_descripcion` varchar(70) NOT NULL,
  `tipo_doc_fecha_registro` date NOT NULL,
  `tblestado_est_id` int(30) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbltipo_documento`
--

INSERT INTO `tbltipo_documento` (`tip_doc_id`, `tip_doc_descripcion`, `tipo_doc_fecha_registro`, `tblestado_est_id`) VALUES
(1, 'Cedula de Ciudadania', '2021-06-29', 1),
(2, 'Cedula de Extranjeria Colombiana', '2021-06-29', 1),
(3, 'Cedula Extranjera', '2021-06-29', 1),
(4, 'Documento Extranjero', '2021-06-29', 1),
(5, 'Pasaporte', '2021-06-29', 1),
(6, 'Registro Civil', '2021-06-29', 1),
(7, 'Tarjeta de Identidad', '2021-06-29', 1);

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
  `usu_celular` int(30) UNSIGNED DEFAULT NULL,
  `usu_telefono` int(30) UNSIGNED DEFAULT NULL,
  `usu_direccion` varchar(70) DEFAULT NULL,
  `usu_correo` varchar(50) NOT NULL,
  `usu_contrasena` varchar(20) NOT NULL,
  `usu_fecha_registro` date NOT NULL,
  `tblrol_rol_id` int(30) UNSIGNED NOT NULL,
  `tblestado_est_id` int(30) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblusuario`
--

INSERT INTO `tblusuario` (`usu_id`, `usu_numero_documento`, `tbltipo_documento_tip_doc_id`, `usu_primer_nombre`, `usu_segundo_nombre`, `usu_primer_apellido`, `usu_segundo_apellido`, `usu_celular`, `usu_telefono`, `usu_direccion`, `usu_correo`, `usu_contrasena`, `usu_fecha_registro`, `tblrol_rol_id`, `tblestado_est_id`) VALUES
(1, 1006051548, 1, 'Jonathan', '', 'Rodriguez', 'Lopez', 3005575730, 3659874, ' Calle 14 B N 41A – 25', 'aprendizsena@unibautista.edu.co', '1234', '2021-06-29', 1, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tblarl`
--
ALTER TABLE `tblarl`
  ADD PRIMARY KEY (`arl_id`),
  ADD KEY `tblestado_est_id` (`tblestado_est_id`);

--
-- Indices de la tabla `tblcaja_compensacion`
--
ALTER TABLE `tblcaja_compensacion`
  ADD PRIMARY KEY (`caj_com_id`),
  ADD KEY `tblestado_est_id` (`tblestado_est_id`);

--
-- Indices de la tabla `tblcomputador`
--
ALTER TABLE `tblcomputador`
  ADD PRIMARY KEY (`com_id`),
  ADD KEY `tblmarca_computador_mar_com_id` (`tblmarca_computador_mar_com_id`),
  ADD KEY `tbltipo_computador_tip_com_id` (`tbltipo_computador_tip_com_id`),
  ADD KEY `tblsistema_operativo_sis_ope_id` (`tblsistema_operativo_sis_ope_id`),
  ADD KEY `tbloficina_ofi_id` (`tbloficina_ofi_id`),
  ADD KEY `tblestado_est_id` (`tblestado_est_id`);

--
-- Indices de la tabla `tbldispositivo`
--
ALTER TABLE `tbldispositivo`
  ADD PRIMARY KEY (`dis_id`),
  ADD KEY `tblmarca_dispositivo_mar_dis_id` (`tblmarca_dispositivo_mar_dis_id`),
  ADD KEY `tblestado_est_id` (`tblestado_est_id`),
  ADD KEY `tbloficina_ofi_id` (`tbloficina_ofi_id`);

--
-- Indices de la tabla `tbleps`
--
ALTER TABLE `tbleps`
  ADD PRIMARY KEY (`eps_id`),
  ADD KEY `tblestado_est_id` (`tblestado_est_id`);

--
-- Indices de la tabla `tblestado`
--
ALTER TABLE `tblestado`
  ADD PRIMARY KEY (`est_id`),
  ADD KEY `tblestado_general_est_gen_id` (`tblestado_general_est_gen_id`);

--
-- Indices de la tabla `tblestado_general`
--
ALTER TABLE `tblestado_general`
  ADD PRIMARY KEY (`est_gen_id`);

--
-- Indices de la tabla `tblfondo_pension`
--
ALTER TABLE `tblfondo_pension`
  ADD PRIMARY KEY (`fon_pen_id`),
  ADD KEY `tblestado_est_id` (`tblestado_est_id`);

--
-- Indices de la tabla `tblmarca_computador`
--
ALTER TABLE `tblmarca_computador`
  ADD PRIMARY KEY (`mar_com_id`),
  ADD KEY `tblestado_est_id` (`tblestado_est_id`);

--
-- Indices de la tabla `tblmarca_dispositivo`
--
ALTER TABLE `tblmarca_dispositivo`
  ADD PRIMARY KEY (`mar_dis_id`),
  ADD KEY `tblestado_est_id` (`tblestado_est_id`);

--
-- Indices de la tabla `tbloficina`
--
ALTER TABLE `tbloficina`
  ADD PRIMARY KEY (`ofi_id`),
  ADD KEY `tblestado_est_id` (`tblestado_est_id`);

--
-- Indices de la tabla `tblrol`
--
ALTER TABLE `tblrol`
  ADD PRIMARY KEY (`rol_id`),
  ADD KEY `tblestado_est_id` (`tblestado_est_id`);

--
-- Indices de la tabla `tblsistema_operativo`
--
ALTER TABLE `tblsistema_operativo`
  ADD PRIMARY KEY (`sis_ope_id`),
  ADD KEY `tblestado_est_id` (`tblestado_est_id`);

--
-- Indices de la tabla `tbltipo_computador`
--
ALTER TABLE `tbltipo_computador`
  ADD PRIMARY KEY (`tip_com_id`),
  ADD KEY `tblestado_est_id` (`tblestado_est_id`);

--
-- Indices de la tabla `tbltipo_documento`
--
ALTER TABLE `tbltipo_documento`
  ADD PRIMARY KEY (`tip_doc_id`),
  ADD KEY `tblestado_est_id` (`tblestado_est_id`);

--
-- Indices de la tabla `tblusuario`
--
ALTER TABLE `tblusuario`
  ADD PRIMARY KEY (`usu_id`),
  ADD KEY `tbltipo_documento_tip_doc_id` (`tbltipo_documento_tip_doc_id`),
  ADD KEY `tblrol_rol_id` (`tblrol_rol_id`),
  ADD KEY `tblestado_est_id` (`tblestado_est_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tblarl`
--
ALTER TABLE `tblarl`
  MODIFY `arl_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tblcaja_compensacion`
--
ALTER TABLE `tblcaja_compensacion`
  MODIFY `caj_com_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tblcomputador`
--
ALTER TABLE `tblcomputador`
  MODIFY `com_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tbldispositivo`
--
ALTER TABLE `tbldispositivo`
  MODIFY `dis_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbleps`
--
ALTER TABLE `tbleps`
  MODIFY `eps_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tblestado`
--
ALTER TABLE `tblestado`
  MODIFY `est_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tblestado_general`
--
ALTER TABLE `tblestado_general`
  MODIFY `est_gen_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tblfondo_pension`
--
ALTER TABLE `tblfondo_pension`
  MODIFY `fon_pen_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tblmarca_computador`
--
ALTER TABLE `tblmarca_computador`
  MODIFY `mar_com_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `tblmarca_dispositivo`
--
ALTER TABLE `tblmarca_dispositivo`
  MODIFY `mar_dis_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbloficina`
--
ALTER TABLE `tbloficina`
  MODIFY `ofi_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `tblrol`
--
ALTER TABLE `tblrol`
  MODIFY `rol_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tblsistema_operativo`
--
ALTER TABLE `tblsistema_operativo`
  MODIFY `sis_ope_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `tbltipo_computador`
--
ALTER TABLE `tbltipo_computador`
  MODIFY `tip_com_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tbltipo_documento`
--
ALTER TABLE `tbltipo_documento`
  MODIFY `tip_doc_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `tblusuario`
--
ALTER TABLE `tblusuario`
  MODIFY `usu_id` int(30) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tblarl`
--
ALTER TABLE `tblarl`
  ADD CONSTRAINT `tblarl_ibfk_1` FOREIGN KEY (`tblestado_est_id`) REFERENCES `tblestado` (`est_id`);

--
-- Filtros para la tabla `tblcaja_compensacion`
--
ALTER TABLE `tblcaja_compensacion`
  ADD CONSTRAINT `tblcaja_compensacion_ibfk_1` FOREIGN KEY (`tblestado_est_id`) REFERENCES `tblestado` (`est_id`);

--
-- Filtros para la tabla `tblcomputador`
--
ALTER TABLE `tblcomputador`
  ADD CONSTRAINT `tblcomputador_ibfk_1` FOREIGN KEY (`tblmarca_computador_mar_com_id`) REFERENCES `tblmarca_computador` (`mar_com_id`),
  ADD CONSTRAINT `tblcomputador_ibfk_2` FOREIGN KEY (`tbltipo_computador_tip_com_id`) REFERENCES `tbltipo_computador` (`tip_com_id`),
  ADD CONSTRAINT `tblcomputador_ibfk_3` FOREIGN KEY (`tblsistema_operativo_sis_ope_id`) REFERENCES `tblsistema_operativo` (`sis_ope_id`),
  ADD CONSTRAINT `tblcomputador_ibfk_4` FOREIGN KEY (`tbloficina_ofi_id`) REFERENCES `tbloficina` (`ofi_id`),
  ADD CONSTRAINT `tblcomputador_ibfk_5` FOREIGN KEY (`tblestado_est_id`) REFERENCES `tblestado` (`est_id`);

--
-- Filtros para la tabla `tbldispositivo`
--
ALTER TABLE `tbldispositivo`
  ADD CONSTRAINT `tbldispositivo_ibfk_1` FOREIGN KEY (`tblmarca_dispositivo_mar_dis_id`) REFERENCES `tblmarca_dispositivo` (`mar_dis_id`),
  ADD CONSTRAINT `tbldispositivo_ibfk_2` FOREIGN KEY (`tblestado_est_id`) REFERENCES `tblestado` (`est_id`),
  ADD CONSTRAINT `tbldispositivo_ibfk_3` FOREIGN KEY (`tbloficina_ofi_id`) REFERENCES `tbloficina` (`ofi_id`);

--
-- Filtros para la tabla `tbleps`
--
ALTER TABLE `tbleps`
  ADD CONSTRAINT `tbleps_ibfk_1` FOREIGN KEY (`tblestado_est_id`) REFERENCES `tblestado` (`est_id`);

--
-- Filtros para la tabla `tblestado`
--
ALTER TABLE `tblestado`
  ADD CONSTRAINT `tblestado_ibfk_1` FOREIGN KEY (`tblestado_general_est_gen_id`) REFERENCES `tblestado_general` (`est_gen_id`);

--
-- Filtros para la tabla `tblfondo_pension`
--
ALTER TABLE `tblfondo_pension`
  ADD CONSTRAINT `tblfondo_pension_ibfk_1` FOREIGN KEY (`tblestado_est_id`) REFERENCES `tblestado` (`est_id`);

--
-- Filtros para la tabla `tblmarca_computador`
--
ALTER TABLE `tblmarca_computador`
  ADD CONSTRAINT `tblmarca_computador_ibfk_1` FOREIGN KEY (`tblestado_est_id`) REFERENCES `tblestado` (`est_id`);

--
-- Filtros para la tabla `tblmarca_dispositivo`
--
ALTER TABLE `tblmarca_dispositivo`
  ADD CONSTRAINT `tblmarca_dispositivo_ibfk_1` FOREIGN KEY (`tblestado_est_id`) REFERENCES `tblestado` (`est_id`);

--
-- Filtros para la tabla `tbloficina`
--
ALTER TABLE `tbloficina`
  ADD CONSTRAINT `tbloficina_ibfk_1` FOREIGN KEY (`tblestado_est_id`) REFERENCES `tblestado` (`est_id`);

--
-- Filtros para la tabla `tblrol`
--
ALTER TABLE `tblrol`
  ADD CONSTRAINT `tblrol_ibfk_1` FOREIGN KEY (`tblestado_est_id`) REFERENCES `tblestado` (`est_id`);

--
-- Filtros para la tabla `tblsistema_operativo`
--
ALTER TABLE `tblsistema_operativo`
  ADD CONSTRAINT `tblsistema_operativo_ibfk_1` FOREIGN KEY (`tblestado_est_id`) REFERENCES `tblestado` (`est_id`);

--
-- Filtros para la tabla `tbltipo_computador`
--
ALTER TABLE `tbltipo_computador`
  ADD CONSTRAINT `tbltipo_computador_ibfk_1` FOREIGN KEY (`tblestado_est_id`) REFERENCES `tblestado` (`est_id`);

--
-- Filtros para la tabla `tbltipo_documento`
--
ALTER TABLE `tbltipo_documento`
  ADD CONSTRAINT `tbltipo_documento_ibfk_1` FOREIGN KEY (`tblestado_est_id`) REFERENCES `tblestado` (`est_id`);

--
-- Filtros para la tabla `tblusuario`
--
ALTER TABLE `tblusuario`
  ADD CONSTRAINT `tblusuario_ibfk_1` FOREIGN KEY (`tbltipo_documento_tip_doc_id`) REFERENCES `tbltipo_documento` (`tip_doc_id`),
  ADD CONSTRAINT `tblusuario_ibfk_2` FOREIGN KEY (`tblrol_rol_id`) REFERENCES `tblrol` (`rol_id`),
  ADD CONSTRAINT `tblusuario_ibfk_3` FOREIGN KEY (`tblestado_est_id`) REFERENCES `tblestado` (`est_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
