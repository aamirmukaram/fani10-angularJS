# ************************************************************
# Sequel Pro SQL dump
# Version 4135
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: localhost (MySQL 5.5.42)
# Database: fari10
# Generation Time: 2016-01-11 18:27:53 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table bridgeTable
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bridgeTable`;

CREATE TABLE `bridgeTable` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `jig` varchar(2) DEFAULT NULL,
  `project_lot` varchar(11) DEFAULT NULL,
  `panel_1` varchar(5) DEFAULT NULL,
  `area_1` varchar(11) DEFAULT NULL,
  `panel_2` varchar(5) DEFAULT NULL,
  `area_2` varchar(11) DEFAULT NULL,
  `panel_3` varchar(5) DEFAULT NULL,
  `area_3` varchar(11) DEFAULT NULL,
  `birdgeOperator` varchar(11) DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `date` date DEFAULT NULL,
  `pageNum` varchar(11) DEFAULT NULL,
  `shift` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `bridgeTable` WRITE;
/*!40000 ALTER TABLE `bridgeTable` DISABLE KEYS */;

INSERT INTO `bridgeTable` (`id`, `jig`, `project_lot`, `panel_1`, `area_1`, `panel_2`, `area_2`, `panel_3`, `area_3`, `birdgeOperator`, `start_time`, `end_time`, `date`, `pageNum`, `shift`)
VALUES
	(18,'1','1','F103','121','F107','345','F104','321','Aamir','17:51:00','17:51:00','2015-07-14','1','Morning'),
	(19,'1','23','F107','234','F101','2342','F101','546','Ali','17:58:00','17:58:00','2015-07-13','2','Evening'),
	(20,'1','23','F107','234','F101','2342','F101','546','Ali','17:58:00','17:58:00','2015-07-13','2','Evening');

/*!40000 ALTER TABLE `bridgeTable` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
