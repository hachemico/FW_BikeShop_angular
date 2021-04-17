-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-03-2021 a las 16:07:07
-- Versión del servidor: 10.4.10-MariaDB
-- Versión de PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rideon`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bike`
--

CREATE TABLE `bike` (
  `idbike` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `model` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `year` varchar(50) NOT NULL,
  `wheel_size` varchar(50) NOT NULL,
  `date_in` varchar(25) NOT NULL,
  `comment` varchar(300) NOT NULL,
  `img` varchar(150) NOT NULL,
  `size` varchar(5) NOT NULL,
  `more_visited` varchar(25) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `bike`
--

INSERT INTO `bike` (`idbike`, `brand`, `model`, `category`, `year`, `wheel_size`, `date_in`, `comment`, `img`, `size`, `more_visited`, `price`) VALUES
('001', 'orbea', 'oiz', 'xc', '2020', '29', '25/12/2020', 'ORBEA OIZ M LTD\r\n\r\nCUADRO ORBEA OIZ CARBON OMX BOOST \r\n\r\nAMORTIGUADOR FOX I-LINE DPS FACTORY 100MM REMOTE KASHIMA 190X40MM\r\n\r\nHORQUILLA FOX 32 FLOAT SC FACTORY 100 FIT4 REMOTE KASHIMA QR15X110MM\r\n\r\nGRUPO SRAM XX1 EAGLE AXS 12 VEL\r\n\r\nFRENOS SRAM ULTIMETE CARBON\r\n\r\nBATERIA SRAM \r\n\r\nRUEDAS DT SWIX XRC', 'view\\img\\shop\\index2_product2.png', 'M', '11', 850),
('002', 'Mondraker', 'fpodium', 'emtb', '2020', '26', '22/12/2020', 'Es rígida pero súper ligera gracias a su cuadro de Stealth Air Carbon. También es ágil gracias a una geometría probada en la Copa del Mundo. Equipada con las ligeras ruedas DT Swiss XRC Carbon 1200, con llanta de 30 mm de ancho interno, la transmisión SRAM XX1 Eagle AXS de 12 velocidades y los freno', 'view\\img\\shop\\index2_product2.png', 'L', '1', 2800),
('003', 'gt', 'arrowhead', 'xc', '2000', '27.5', '14/12/2020', 'Bicicleta con nuevo diseño del cuadro, ahora con cables interiores y con el triángulo triple inicialmente desarrollado para extender la vida útil del cuadro, reforzar el triángulo trasero e incrementar la rapidez y la capacidad de respuesta, el cuadro GT Triple Triangle™ es un símbolo icónico de GT ', 'view\\img\\shop\\index2_product3.png', 'L', '6', 1300),
('004', 'orbea', 'alma', 'xc', '2021', '29', '27/01/2021', 'La Orbea Alma M25 2021 VERDE monta el cuadro de carbono OMR que este año ha actualizado su geometría, para que en el caso de que el usuario alterne su Alma con la Oiz, no note diferencias salvo las lógicas que existen entre un cuadro semirrígido y uno doble. Monta una horquilla Fox SC de 100 mm con ', 'view\\img\\shop\\index2_product2.png', 'M', '11', 4500),
('005', 'Trek', 'SuperCaliber', 'xc', '2021', '700', '08/06/2020', 'Eagle \r\nFox 32\r\nON OFF', 'view\\img\\shop\\index2_product4.png', 'xs', '1', 0),
('006', 'Pinarello', 'Emo', 'xc', '2020', '29', '16/11/2021', 'La DOGMA F12 posee una integración completa del cableado. Ofrece un 5% menos de resistencia gracias al nuevo manillar Talon Ultra y un 7,3% con el nuevo diseño de la horquilla y el cuadro. Ahorrando así 8 vatios a una velocidad de 40 km/h comparando con', 'view\\img\\shop\\index2_product5.png', 'M', '4', 3700),
('007', 'ibis', 'moho', 'enduro', '2021', '700', '14/05/2020', 'Los mejores riders del mundo, con las mejores mountain bikes, montando los mejores componentes y las mejores suspensiones. Si algo falla, es un drama. Si todo funciona, significa el triunfo. Por eso la nueva bicicleta con cuadro de carbono Ibis Mojo HD5 27,5 Kit XX1 AXS 2021 Charcoal está homologada', 'view\\img\\shop\\index2_product1.png', 'M', '3', 2450),
('008', 'Giant', 'pinto', 'trail', '2020', '29', '19/01/2021', 'Los mejores riders del mundo, con las mejores mountain bikes, montando los mejores componentes y las mejores suspensiones. Si algo falla, es un drama. Si todo funciona, significa el triunfo. Por eso la nueva bicicleta con cuadro de carbono Ibis Mojo HD5 27,5 Kit XX1 AXS 2021 Charcoal está homologada', 'view\\img\\shop\\index2_product2.png', 'xl', '1', 2300),
('009', 'Trek', 'FuelEx', 'trail', '2012', '26', '27/01/2021', 'Los mejores riders del mundo, con las mejores mountain bikes, montando los mejores componentes y las mejores suspensiones. Si algo falla, es un drama. Si todo funciona, significa el triunfo. Por eso la nueva bicicleta con cuadro de carbono Ibis Mojo HD5 27,5 Kit XX1 AXS 2021 Charcoal está homologada', 'view\\img\\shop\\index2_product3.png', 'Xs', '15', 930),
('010', 'Mondraker', 'Foxy', 'enduro', '2020', '27.5', '19/11/2020', 'Fox Floar DRCV 150mm\r\nFull XTR\r\nTija ON/OFF\r\nRuedas mavic crossmax', 'view\\img\\shop\\index2_product4.png', 's', '16', 1800),
('011', 'Mondraker', 'chronos', 'xc', '2021', '29', '01/02/2021', 'SLX 1x12\r\nBielas carbon Potenciometer\r\nFull carbon frame', 'view\\img\\shop\\index2_product5.png', 'l', '10', 2695),
('012', 'bianchi', 'oltrex', 'enduro', '2020', '26', '19/01/2021', 'Campagnolo Super record\r\nSin pedales\r\nFull carbon Frame\r\nSelle Italia\r\nRoad CorseTT x2', 'view\\img\\shop\\index2_product1.png', 'm', '2', 0),
('013', 'Bianchi', 'Epower', 'emtb', '2021', '', '19/02/2021', 'En cuanto a la horquilla tienes 100mm de recorrido, es ligera y tienes dos modos (bloqueado y desbloqueada) para que puedas bajar a todo trapo por todas partes.\r\n\r\nEl grupo es un Shimano de triple plato (24/34/2T) y 7 velocidades, con el que no te faltará desarrollo sean subidas, bajadas o llanos se', 'view\\img\\shop\\index2_product2.png', 'XL', '10', 4560),
('014', 'Pinarello', 'Stadia', 'road', '2020', '700c', '09/06/2020', 'Aluminio Hidroformado, Cambios 105. 12vel.', 'view\\img\\shop\\index2_product2.png', 'm', '5', 3995),
('015', 'merida', 'speeder', 'road', '2021', '', '13/01/2021', 'SPEEDER LITE II; MAT aluminium; 700C WHS; 100x9/135x9 AST; BSA BBR\r\n	MERIDA SPEEDER CF2; Tapered; MAT carbon\r\n	Shimano TY301; 48-38-28\r\n	MERIDA COMP TK; MAT aluminium; 600 WHB; Flat\r\n	MERIDA COMP CC; MAT aluminium\r\n	Shimano ST-EF505\r\n	Shimano BR-MT200\r\n	Shimano Acera-X\r\n	Shimano TY710\r\n	Sunrace CN-M', 'view\\img\\shop\\index2_product3.png', 'm', '2', 0),
('016', 'Giant', 'Trance', 'trail', '2020', '27.5', '16/06/2020', 'Full XT, tubelles', 'view\\img\\shop\\index2_product1.png', 'm', '11', 4500),
('017', 'gt', 'Bravo', 'xc', '2021', '27.5', '16/11/2021', 'Los mejores riders del mundo, con las mejores mountain bikes, montando los mejores componentes y las mejores suspensiones. Si algo falla, es un drama. Si todo funciona, significa el triunfo. Por eso la nueva bicicleta con cuadro de carbono Ibis Mojo HD5 27,5 Kit XX1 AXS 2021 Charcoal está homologada', 'view\\img\\shop\\index2_product5.png', 'S', '3', 1500),
('018', 'merida', 'lombardo', 'road', '2021', '', '03/02/2021', 'La bicicleta Conor 6700 2021 es sencilla, muy útil, fácil de montar en ella y una buena compañera de fines de semana. Si te estás iniciando en esto del ciclismo, apuesta por ella y no te arrepentirás.\r\n\r\nA pesar de ser de aluminio no es una bicicleta muy pesada, su geometría con la pipa de dirección', 'view\\img\\shop\\index2_product3.png', 'L', '1', 250),
('019', 'ibis', 'sensium', 'road', '2020', '700c', '08/04/2020', 'asdasda asdada asdasd asdadad', 'view\\img\\shop\\index2_product4.png', 'l', '1', 0),
('020', 'gt', 'Xcountry', 'enduro', '2020', '', '11/01/2021', 'asdasdad lklklsdfsmf asdaskmka asdkjasklmd', 'view\\img\\shop\\index2_product5.png', 's', '2', 0),
('021', 'orbea', 'Satelite', 'emtb', '2020', '29', '22/02/2021', 'Hasta el infinito y más allá! ', 'view\\img\\shop\\index2_product1.png', 'l', '11', 1200),
('022', 'Trek', 'SuperCaliber', 'xc', '2021', '700', '08/06/2020', 'La Supercaliber 9.8 es una bici de carrera cross country desarrollada para la velocidad que llega a los podios en la Copa Mundial. Su configuración capaz de definir categorías incluye nuestro exclusivo amortiguador IsoStrut integrado y una tijera liviana Fox Performance 32 Step-Cast para una rodada ', 'view\\img\\shop\\index2_product4.png', 'Xs', '1', 3500);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `categoria` varchar(150) NOT NULL,
  `ruta` varchar(150) NOT NULL,
  `more_visited` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`categoria`, `ruta`, `more_visited`) VALUES
('city', 'view\\img\\shop\\index2_product3.png', '0'),
('downhill', 'view\\img\\shop\\index2_product4.png', '1'),
('emtb', 'view\\img\\shop\\index2_product5.png', '8'),
('enduro', 'view\\img\\shop\\index2_product1.png', '10'),
('growth', 'view\\img\\shop\\index2_product1.png', '0'),
('kids', 'view\\img\\shop\\index2_product2.png', '1'),
('road', 'view\\img\\shop\\index2_product4.png', '6'),
('trail', 'view\\img\\shop\\index2_product2.png', '18'),
('urban', 'view\\img\\shop\\index2_product3.png', '0'),
('xc', 'view\\img\\shop\\index2_product3.png', '14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `img_slider`
--

CREATE TABLE `img_slider` (
  `nombre` varchar(100) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `ruta` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `img_slider`
--

INSERT INTO `img_slider` (`nombre`, `categoria`, `ruta`) VALUES
('img_1', 'road', 'view\\img\\shop\\index2_product1.png'),
('img_2', 'Trail', 'view\\img\\shop\\index2_product2.png'),
('img_3', 'xc', 'view\\img\\shop\\index2_product3.png'),
('img_4', 'emtb', 'view\\img\\shop\\index2_product4.png'),
('img_5', 'enduro', 'view\\img\\shop\\index2_product5.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bike`
--
ALTER TABLE `bike`
  ADD PRIMARY KEY (`idbike`),
  ADD UNIQUE KEY `id_bike` (`idbike`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`categoria`),
  ADD KEY `categoria` (`categoria`,`ruta`);

--
-- Indices de la tabla `img_slider`
--
ALTER TABLE `img_slider`
  ADD PRIMARY KEY (`nombre`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
