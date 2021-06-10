-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-06-2021 a las 15:31:42
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
  `more_visited` int(25) NOT NULL,
  `price` float NOT NULL,
  `stock` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `bike`
--

INSERT INTO `bike` (`idbike`, `brand`, `model`, `category`, `year`, `wheel_size`, `date_in`, `comment`, `img`, `size`, `more_visited`, `price`, `stock`) VALUES
('001', 'orbea', 'oiz', 'xc', '2020', '29', '25/12/2020', 'ORBEA OIZ M LTD\r\n\r\nCUADRO ORBEA OIZ CARBON OMX BOOST \r\n\r\nAMORTIGUADOR FOX I-LINE DPS FACTORY 100MM REMOTE KASHIMA 190X40MM\r\n\r\nHORQUILLA FOX 32 FLOAT SC FACTORY 100 FIT4 REMOTE KASHIMA QR15X110MM\r\n\r\nGRUPO SRAM XX1 EAGLE AXS 12 VEL\r\n\r\nFRENOS SRAM ULTIMETE CARBON\r\n\r\nBATERIA SRAM \r\n\r\nRUEDAS DT SWIX XRC', 'view\\img\\shop\\index2_product2.png', 'M', 11, 850, 4),
('002', 'Mondraker', 'fpodium', 'emtb', '2020', '26', '22/12/2020', 'Es rígida pero súper ligera gracias a su cuadro de Stealth Air Carbon. También es ágil gracias a una geometría probada en la Copa del Mundo. Equipada con las ligeras ruedas DT Swiss XRC Carbon 1200, con llanta de 30 mm de ancho interno, la transmisión SRAM XX1 Eagle AXS de 12 velocidades y los freno', 'view\\img\\shop\\index2_product2.png', 'L', 1, 2800, 22),
('003', 'gt', 'arrowhead', 'xc', '2000', '27.5', '14/12/2020', 'Bicicleta con nuevo diseño del cuadro, ahora con cables interiores y con el triángulo triple inicialmente desarrollado para extender la vida útil del cuadro, reforzar el triángulo trasero e incrementar la rapidez y la capacidad de respuesta, el cuadro GT Triple Triangle™ es un símbolo icónico de GT ', 'view\\img\\shop\\index2_product3.png', 'L', 10, 1300, 3),
('004', 'orbea', 'alma', 'xc', '2021', '29', '27/01/2021', 'La Orbea Alma M25 2021 VERDE monta el cuadro de carbono OMR que este año ha actualizado su geometría, para que en el caso de que el usuario alterne su Alma con la Oiz, no note diferencias salvo las lógicas que existen entre un cuadro semirrígido y uno doble. Monta una horquilla Fox SC de 100 mm con ', 'view\\img\\shop\\index2_product2.png', 'M', 11, 4500, 5),
('005', 'Trek', 'SuperCaliber', 'xc', '2021', '700', '08/06/2020', 'Eagle \r\nFox 32\r\nON OFF', 'view\\img\\shop\\index2_product4.png', 'xs', 2, 0, 2),
('006', 'Pinarello', 'Emo', 'xc', '2020', '29', '16/11/2021', 'La DOGMA F12 posee una integración completa del cableado. Ofrece un 5% menos de resistencia gracias al nuevo manillar Talon Ultra y un 7,3% con el nuevo diseño de la horquilla y el cuadro. Ahorrando así 8 vatios a una velocidad de 40 km/h comparando con', 'view\\img\\shop\\index2_product5.png', 'M', 4, 3700, 4),
('007', 'ibis', 'moho', 'enduro', '2021', '700', '14/05/2020', 'Los mejores riders del mundo, con las mejores mountain bikes, montando los mejores componentes y las mejores suspensiones. Si algo falla, es un drama. Si todo funciona, significa el triunfo. Por eso la nueva bicicleta con cuadro de carbono Ibis Mojo HD5 27,5 Kit XX1 AXS 2021 Charcoal está homologada', 'view\\img\\shop\\index2_product1.png', 'M', 5, 2450, 0),
('008', 'Giant', 'pinto', 'trail', '2020', '29', '19/01/2021', 'Los mejores riders del mundo, con las mejores mountain bikes, montando los mejores componentes y las mejores suspensiones. Si algo falla, es un drama. Si todo funciona, significa el triunfo. Por eso la nueva bicicleta con cuadro de carbono Ibis Mojo HD5 27,5 Kit XX1 AXS 2021 Charcoal está homologada', 'view\\img\\shop\\index2_product2.png', 'xl', 1, 2300, 0),
('009', 'Trek', 'FuelEx', 'trail', '2012', '26', '27/01/2021', 'Los mejores riders del mundo, con las mejores mountain bikes, montando los mejores componentes y las mejores suspensiones. Si algo falla, es un drama. Si todo funciona, significa el triunfo. Por eso la nueva bicicleta con cuadro de carbono Ibis Mojo HD5 27,5 Kit XX1 AXS 2021 Charcoal está homologada', 'view\\img\\shop\\index2_product3.png', 'Xs', 15, 930, 0),
('010', 'Mondraker', 'Foxy', 'enduro', '2020', '27.5', '19/11/2020', 'Fox Floar DRCV 150mm\r\nFull XTR\r\nTija ON/OFF\r\nRuedas mavic crossmax', 'view\\img\\shop\\index2_product4.png', 's', 17, 1800, 0),
('011', 'Mondraker', 'chronos', 'xc', '2021', '29', '01/02/2021', 'SLX 1x12\r\nBielas carbon Potenciometer\r\nFull carbon frame', 'view\\img\\shop\\index2_product5.png', 'l', 10, 2695, 3),
('012', 'bianchi', 'oltrex', 'enduro', '2020', '26', '19/01/2021', 'Campagnolo Super record\r\nSin pedales\r\nFull carbon Frame\r\nSelle Italia\r\nRoad CorseTT x2', 'view\\img\\shop\\index2_product1.png', 'm', 3, 0, 0),
('013', 'Bianchi', 'Epower', 'emtb', '2021', '', '19/02/2021', 'En cuanto a la horquilla tienes 100mm de recorrido, es ligera y tienes dos modos (bloqueado y desbloqueada) para que puedas bajar a todo trapo por todas partes.\r\n\r\nEl grupo es un Shimano de triple plato (24/34/2T) y 7 velocidades, con el que no te faltará desarrollo sean subidas, bajadas o llanos se', 'view\\img\\shop\\index2_product2.png', 'XL', 10, 4560, 0),
('014', 'Pinarello', 'Stadia', 'road', '2020', '700c', '09/06/2020', 'Aluminio Hidroformado, Cambios 105. 12vel.', 'view\\img\\shop\\index2_product2.png', 'm', 10, 3995, 0),
('015', 'merida', 'speeder', 'road', '2021', '', '13/01/2021', 'SPEEDER LITE II; MAT aluminium; 700C WHS; 100x9/135x9 AST; BSA BBR\r\n	MERIDA SPEEDER CF2; Tapered; MAT carbon\r\n	Shimano TY301; 48-38-28\r\n	MERIDA COMP TK; MAT aluminium; 600 WHB; Flat\r\n	MERIDA COMP CC; MAT aluminium\r\n	Shimano ST-EF505\r\n	Shimano BR-MT200\r\n	Shimano Acera-X\r\n	Shimano TY710\r\n	Sunrace CN-M', 'view\\img\\shop\\index2_product3.png', 'm', 3, 0, 0),
('016', 'Giant', 'Trance', 'trail', '2020', '27.5', '16/06/2020', 'Full XT, tubelles', 'view\\img\\shop\\index2_product1.png', 'm', 11, 4500, 0),
('017', 'gt', 'Bravo', 'xc', '2021', '27.5', '16/11/2021', 'Los mejores riders del mundo, con las mejores mountain bikes, montando los mejores componentes y las mejores suspensiones. Si algo falla, es un drama. Si todo funciona, significa el triunfo. Por eso la nueva bicicleta con cuadro de carbono Ibis Mojo HD5 27,5 Kit XX1 AXS 2021 Charcoal está homologada', 'view\\img\\shop\\index2_product5.png', 'S', 3, 1500, 0),
('018', 'merida', 'lombardo', 'road', '2021', '', '03/02/2021', 'La bicicleta Conor 6700 2021 es sencilla, muy útil, fácil de montar en ella y una buena compañera de fines de semana. Si te estás iniciando en esto del ciclismo, apuesta por ella y no te arrepentirás.\r\n\r\nA pesar de ser de aluminio no es una bicicleta muy pesada, su geometría con la pipa de dirección', 'view\\img\\shop\\index2_product3.png', 'L', 1, 250, 0),
('019', 'ibis', 'sensium', 'road', '2020', '700c', '08/04/2020', 'asdasda asdada asdasd asdadad', 'view\\img\\shop\\index2_product4.png', 'l', 1, 0, 0),
('020', 'gt', 'Xcountry', 'enduro', '2020', '', '11/01/2021', 'asdasdad lklklsdfsmf asdaskmka asdkjasklmd', 'view\\img\\shop\\index2_product5.png', 's', 2, 0, 0),
('021', 'orbea', 'Satelite', 'emtb', '2020', '29', '22/02/2021', 'Hasta el infinito y más allá! ', 'view\\img\\shop\\index2_product1.png', 'l', 12, 1200, 1),
('022', 'Trek', 'SuperCaliber', 'xc', '2021', '700', '08/06/2020', 'La Supercaliber 9.8 es una bici de carrera cross country desarrollada para la velocidad que llega a los podios en la Copa Mundial. Su configuración capaz de definir categorías incluye nuestro exclusivo amortiguador IsoStrut integrado y una tijera liviana Fox Performance 32 Step-Cast para una rodada ', 'view\\img\\shop\\index2_product4.png', 'Xs', 1, 3500, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cart`
--

CREATE TABLE `cart` (
  `idCart` int(11) NOT NULL,
  `uid` varchar(50) NOT NULL,
  `idbike` varchar(50) NOT NULL,
  `qty` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cart`
--

INSERT INTO `cart` (`idCart`, `uid`, `idbike`, `qty`) VALUES
(37, 'GITHUB=62303274', '021', 1),
(53, 'LOCAL=hachemico@gmail.com', '001', 1),
(54, 'LOCAL=hachemico@gmail.com', '004', 3),
(83, 'GOOGLE=109702823056169488990', '021', 1),
(84, 'GOOGLE=109702823056169488990', '004', 1),
(85, 'LOCAL=hachemico@gmail.com', '003', 1),
(88, 'GITHUB=62303274', '004', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `categoria` varchar(150) NOT NULL,
  `ruta` varchar(150) NOT NULL,
  `more_visited` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`categoria`, `ruta`, `more_visited`) VALUES
('city', 'view\\img\\shop\\index2_product3.png', 2),
('downhill', 'view\\img\\shop\\index2_product4.png', 2),
('emtb', 'view\\img\\shop\\index2_product5.png', 11),
('enduro', 'view\\img\\shop\\index2_product1.png', 11),
('growth', 'view\\img\\shop\\index2_product1.png', 1),
('kids', 'view\\img\\shop\\index2_product2.png', 1),
('road', 'view\\img\\shop\\index2_product4.png', 11),
('trail', 'view\\img\\shop\\index2_product2.png', 37),
('urban', 'view\\img\\shop\\index2_product3.png', 0),
('xc', 'view\\img\\shop\\index2_product3.png', 18);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `checkout`
--

CREATE TABLE `checkout` (
  `idCheckout` int(10) NOT NULL,
  `uid` varchar(50) NOT NULL,
  `idbike` varchar(50) NOT NULL,
  `qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `checkout`
--

INSERT INTO `checkout` (`idCheckout`, `uid`, `idbike`, `qty`) VALUES
(23, 'GOOGLE=109702823056169488990', '021', 1),
(24, 'GOOGLE=109702823056169488990', '001', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favourites`
--

CREATE TABLE `favourites` (
  `uid` varchar(50) NOT NULL,
  `favs` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `favourites`
--

INSERT INTO `favourites` (`uid`, `favs`) VALUES
('visitor', '{\"favs\":\"006\"}'),
('LOCAL=hachemico@gmail.com', '010'),
('LOCAL=hachemico@gmail.com', '009'),
('GITHUB=62303274', '006'),
('GITHUB=62303274', '011'),
('GITHUB=62303274', '008'),
('GITHUB=62303274', '015'),
('GITHUB=62303274', '017'),
('GITHUB=62303274', '010'),
('GOOGLE=109702823056169488990', '007'),
('GOOGLE=109702823056169488990', '008'),
('GOOGLE=109702823056169488990', '009'),
('GOOGLE=109702823056169488990', '012'),
('GOOGLE=109702823056169488990', '011'),
('LOCAL=hachemico@gmail.com', '003'),
('LOCAL=hugo_mico@hotmail.com', '005');

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` varchar(200) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `passwd` varchar(200) NOT NULL,
  `type` varchar(20) NOT NULL,
  `avatar` varchar(200) NOT NULL,
  `activate` varchar(10) NOT NULL,
  `token_email` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `passwd`, `type`, `avatar`, `activate`, `token_email`) VALUES
('', 'yomogan', 'yomogan@gmail.com', '$2y$10$BhJzmaBHOhwGpKVdOUvnvuaxRlK5Bsglf8rK8OxrEmtSoWWTgIzJO', 'client', 'https://www.gravatar.com/avatar/9154526c03ad3e327b28e3f1f7582e3a?s=40&d=identicon', '', ''),
('dasdadadad', 'noelia', 'noesaa@gmail.com', '$2y$10$pZWVibCV0/W7.RS867ieNunfpBaoUl4o5zVYcROQ3LdM1VpQkA9x6', 'client', 'https://www.gravatar.com/avatar/e760479534a9c65524d523810fdd5e99?s=40&d=identicon', 'false', 'd34fd44ed1f1fbb7d371'),
('GITHUB=62303274', 'Hugo Micó', 'hachemico@gmail.com', '', 'client', 'https://avatars.githubusercontent.com/u/62303274?v=4', 'true', ''),
('GOOGLE=109702823056169488990', 'Hugo Micó', 'hachemico@gmail.com', '', 'client', 'https://lh3.googleusercontent.com/a-/AOh14Ggyrp0iYYyxw3IOrt85xZByqhF6uVbSQA9KErXG=s96-c', 'true', ''),
('LOCAL=hachemico@gmail.com', 'hachemico', 'hachemico@gmail.com', '$2y$10$.xz3YeWbHaTA/k2euRf2s.xiMXE7LEEK2y2jlCs1atcBc8C14Ak.K', 'admin', 'https://www.gravatar.com/avatar/7aa1671a60ddb2514afe84d2902e8834?s=40&d=identicon', 'true', 'fa2554eefd69472c8cef'),
('LOCAL=hugo_mico@hotmail.com', 'hugomico', 'hugo_mico@hotmail.com', '$2y$10$rjf0PHvUQPtKVjIsAHvmduQcN.6rjUHrj.iYEpy5H4DwJNZEbBOcy', 'client', 'https://www.gravatar.com/avatar/838defb56e81fc1a6cd78534df6fe1a7?s=40&d=identicon', 'true', 'b1600d528560f12c3b83'),
('LOCAL=perijuano@hotmail.com', 'perijuano', 'perijuano@hotmail.com', '$2y$10$P.xZx9EvUJUr/OOCn0.9I.AHvzEMzfDa6435TluWO25wxDADQOX.O', 'client', 'https://www.gravatar.com/avatar/da5302f934b335e3561c7844044cca6c?s=40&d=identicon', 'false', '00229c612b84f8ad3f70'),
('visitor', 'visitor', '000000', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_product`
--

CREATE TABLE `user_product` (
  `email_user` varchar(100) NOT NULL,
  `id_bike` varchar(50) NOT NULL,
  `aux` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user_product`
--

INSERT INTO `user_product` (`email_user`, `id_bike`, `aux`) VALUES
('001', '003', ''),
('$user_fav', '$id_bike_fav', ''),
('[{\"name\":\"hugomico\",\"type\":\"client\",\"email\":\"hugo_mico@hotmail.com\",\"avatar\":\"https://www.gravatar.c', '003', ''),
('[{\"name\":\"hugomico\",\"type\":\"client\",\"email\":\"hugo_mico@hotmail.com\",\"avatar\":\"https://www.gravatar.c', '003', ''),
('[{\"name\":\"hugomico\",\"type\":\"client\",\"email\":\"hugo_mico@hotmail.com\",\"avatar\":\"https://www.gravatar.c', '003', '');

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
-- Indices de la tabla `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`idCart`),
  ADD KEY `fkuid` (`uid`),
  ADD KEY `fkidBike` (`idbike`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`categoria`),
  ADD KEY `categoria` (`categoria`,`ruta`);

--
-- Indices de la tabla `checkout`
--
ALTER TABLE `checkout`
  ADD PRIMARY KEY (`idCheckout`);

--
-- Indices de la tabla `favourites`
--
ALTER TABLE `favourites`
  ADD KEY `fk_uid` (`uid`);

--
-- Indices de la tabla `img_slider`
--
ALTER TABLE `img_slider`
  ADD PRIMARY KEY (`nombre`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cart`
--
ALTER TABLE `cart`
  MODIFY `idCart` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT de la tabla `checkout`
--
ALTER TABLE `checkout`
  MODIFY `idCheckout` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `fkidBike` FOREIGN KEY (`idbike`) REFERENCES `bike` (`idbike`),
  ADD CONSTRAINT `fkuid` FOREIGN KEY (`uid`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `favourites`
--
ALTER TABLE `favourites`
  ADD CONSTRAINT `fk_uid` FOREIGN KEY (`uid`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;