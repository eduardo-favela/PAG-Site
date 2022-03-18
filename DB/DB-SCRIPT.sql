-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema PAG_system
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `PAG_system` ;

-- -----------------------------------------------------
-- Schema PAG_system
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `PAG_system` DEFAULT CHARACTER SET utf8 ;
USE `PAG_system` ;

-- -----------------------------------------------------
-- Table `PAG_system`.`estados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PAG_system`.`estados` (
  `idestados` INT NOT NULL AUTO_INCREMENT,
  `estado` VARCHAR(45) NULL,
  PRIMARY KEY (`idestados`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PAG_system`.`ciudades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PAG_system`.`ciudades` (
  `id_ciudad` INT NOT NULL,
  `ciudad` VARCHAR(80) NULL,
  `estados_idestados` INT NOT NULL,
  PRIMARY KEY (`id_ciudad`),
  INDEX `fk_ciudades_estados1_idx` (`estados_idestados` ASC) ,
  CONSTRAINT `fk_ciudades_estados1`
    FOREIGN KEY (`estados_idestados`)
    REFERENCES `PAG_system`.`estados` (`idestados`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PAG_system`.`uens`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PAG_system`.`uens` (
  `id_uen` INT NOT NULL AUTO_INCREMENT,
  `nombre_uen` VARCHAR(30) NULL,
  `direccion` VARCHAR(150) NULL,
  `telefono` VARCHAR(15) NULL,
  `email` VARCHAR(50) NULL,
  `estados_idestados` INT NOT NULL,
  `ciudades_id_ciudad` INT NOT NULL,
  PRIMARY KEY (`id_uen`),
  INDEX `fk_uens_estados_idx` (`estados_idestados` ASC) ,
  INDEX `fk_uens_ciudades1_idx` (`ciudades_id_ciudad` ASC) ,
  CONSTRAINT `fk_uens_estados`
    FOREIGN KEY (`estados_idestados`)
    REFERENCES `PAG_system`.`estados` (`idestados`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_uens_ciudades1`
    FOREIGN KEY (`ciudades_id_ciudad`)
    REFERENCES `PAG_system`.`ciudades` (`id_ciudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PAG_system`.`info_solicitada`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PAG_system`.`info_solicitada` (
  `id_info_solicitada` INT NOT NULL AUTO_INCREMENT,
  `tipo_info` VARCHAR(30) NULL,
  PRIMARY KEY (`id_info_solicitada`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PAG_system`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PAG_system`.`productos` (
  `id_producto` INT NOT NULL AUTO_INCREMENT,
  `producto` VARCHAR(45) NULL,
  PRIMARY KEY (`id_producto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PAG_system`.`interacciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PAG_system`.`interacciones` (
  `id_interaccion` INT NOT NULL AUTO_INCREMENT,
  `fecha_interaccion` DATETIME NULL,
  `productos_id_producto` INT NOT NULL,
  PRIMARY KEY (`id_interaccion`),
  INDEX `fk_interacciones_productos1_idx` (`productos_id_producto` ASC) ,
  CONSTRAINT `fk_interacciones_productos1`
    FOREIGN KEY (`productos_id_producto`)
    REFERENCES `PAG_system`.`productos` (`id_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PAG_system`.`contactos_web`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PAG_system`.`contactos_web` (
  `id_contacto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NULL,
  `apellidos` VARCHAR(50) NULL,
  `telefono` VARCHAR(15) NULL,
  `email` VARCHAR(100) NULL,
  `direccion` VARCHAR(150) NULL,
  `comentarios` VARCHAR(200) NULL,
  `estados_idestados` INT NOT NULL,
  `ciudades_id_ciudad` INT NOT NULL,
  `productos_id_producto` INT NOT NULL,
  `info_solicitada_id_info_solicitada` INT NOT NULL,
  `uens_id_uen` INT NOT NULL,
  PRIMARY KEY (`id_contacto`),
  INDEX `fk_contactos_web_estados1_idx` (`estados_idestados` ASC) ,
  INDEX `fk_contactos_web_ciudades1_idx` (`ciudades_id_ciudad` ASC) ,
  INDEX `fk_contactos_web_productos1_idx` (`productos_id_producto` ASC) ,
  INDEX `fk_contactos_web_info_solicitada1_idx` (`info_solicitada_id_info_solicitada` ASC) ,
  INDEX `fk_contactos_web_uens1_idx` (`uens_id_uen` ASC) ,
  CONSTRAINT `fk_contactos_web_estados1`
    FOREIGN KEY (`estados_idestados`)
    REFERENCES `PAG_system`.`estados` (`idestados`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contactos_web_ciudades1`
    FOREIGN KEY (`ciudades_id_ciudad`)
    REFERENCES `PAG_system`.`ciudades` (`id_ciudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contactos_web_productos1`
    FOREIGN KEY (`productos_id_producto`)
    REFERENCES `PAG_system`.`productos` (`id_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contactos_web_info_solicitada1`
    FOREIGN KEY (`info_solicitada_id_info_solicitada`)
    REFERENCES `PAG_system`.`info_solicitada` (`id_info_solicitada`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contactos_web_uens1`
    FOREIGN KEY (`uens_id_uen`)
    REFERENCES `PAG_system`.`uens` (`id_uen`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
