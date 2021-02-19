CREATE DATABASE IF NOT EXISTS job_hunt_diary;

USE job_hunt_diary;

-- create notes table
CREATE TABLE IF NOT EXISTS `note` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `body` TEXT NOT NULL,
  `dateCreated` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- Create Status table
CREATE TABLE IF NOT EXISTS `status` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL UNIQUE,
  `displayName` VARCHAR(255) NOT NULL UNIQUE,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- populate status table
INSERT INTO `status` (`name`, `displayName`)
VALUES
  ("contacted", "Contacted"),
  ("haventApplied", "Haven't Applied"),
  ("applied", "Applied"),
  ("interviewing", "Interviewing"),
  ("interviewed", "Interviewed"),
  ("offered", "Job Offer"),
  ("rejected", "Job Rejected"),
  ("other", "Other");

-- Create user table
CREATE TABLE IF NOT EXISTS `user` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(255) NOT NULL,
  `lastName` VARCHAR(255) NOT NULL,
  `username` VARCHAR(255) NOT NULL UNIQUE,
  `email` VARCHAR(255) UNIQUE,
  `phone` VARCHAR(255) UNIQUE,
  `dateCreated` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `hashedPass` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- Create contact table
CREATE TABLE IF NOT EXISTS `contact` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(255) NOT NULL,
  `lastName` VARCHAR(255),
  `email` VARCHAR(255) UNIQUE,
  `phone` VARCHAR(255) UNIQUE,
  `dateCreated` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `dateUpdated` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- Create contact_note table
CREATE TABLE IF NOT EXISTS `contact_note` (
  `contactId` INT UNSIGNED NOT NULL,
  `noteId` INT UNSIGNED NOT NULL UNIQUE,
  `dateCreated` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `dateUpdated` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`contactId`) REFERENCES contact(`id`),
  FOREIGN KEY (`noteId`)
    REFERENCES note(`id`)
    ON DELETE CASCADE,
  PRIMARY KEY(`contactId`, `noteId`)
) ENGINE = InnoDB;

-- Create job_posting_info table
CREATE TABLE IF NOT EXISTS `job_posting_info` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `source` VARCHAR(255) NOT NULL,
  PRIMARY KEY(`id`)
) ENGINE = InnoDB;

-- Create job_application table
CREATE TABLE IF NOT EXISTS `job_application` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255),
  `dateCreated` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `dateUpdated` DATETIME DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,
  `dateApplied` DATETIME,
  `jobPostingInfo` TEXT,
  `ownerId` Int UNSIGNED NOT NULL,
  `statusId` Int UNSIGNED NOT NULL,
  `job_posting_info_id` INT UNSIGNED,
  FOREIGN KEY(`statusId`)
    REFERENCES `status`(`id`),
  FOREIGN KEY(`job_posting_info_id`)
    REFERENCES `job_posting_info`(`id`)
    ON DELETE CASCADE,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- Create job_application_contact table
CREATE TABLE IF NOT EXISTS `job_application_contact` (
  `jobApplicationId` INT UNSIGNED NOT NULL,
  `contactId` INT UNSIGNED NOT NULL,
  FOREIGN KEY (`jobApplicationId`)
    REFERENCES `job_application`(`id`),
  FOREIGN KEY (`contactId`)
    REFERENCES `contact`(`id`)
    ON DELETE CASCADE
) ENGINE = InnoDB;

--  Create company table
CREATE TABLE IF NOT EXISTS `company` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `location` VARCHAR(225),
  `phone` VARCHAR(225),
  `email` VARCHAR(225),
  `jobApplicationId` INT UNSIGNED NOT NULL,
  FOREIGN KEY (`jobApplicationId`) REFERENCES `job_application`(`id`),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- Create company_note_table
CREATE TABLE IF NOT EXISTS `company_note` (
  `companyId` INT UNSIGNED NOT NULL,
  `noteId` INT UNSIGNED NOT NULL UNIQUE,
  `dateCreated` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `dateUpdated` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`companyId`) REFERENCES `company`(`id`),
  FOREIGN KEY (`noteId`)
    REFERENCES `note`(`id`)
    ON DELETE CASCADE,
  PRIMARY KEY(`companyId`, `noteId`)
) ENGINE = InnoDB;

-- Create job_application_note table
CREATE TABLE IF NOT EXISTS `job_application_notes` (
  `jobApplicationId` INT UNSIGNED NOT NULL,
  `noteId` INT UNSIGNED NOT NULL UNIQUE,
  `dateCreated` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `dateUpdated` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`jobApplicationId`)
    REFERENCES `job_application`(`id`),
  FOREIGN KEY (`noteId`)
    REFERENCES `note`(`id`)
    ON DELETE CASCADE,
  PRIMARY KEY(`jobApplicationId`, `noteId`)
) ENGINE = InnoDB;

-- Create position table
CREATE TABLE IF NOT EXISTS `position` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255),
  `companyID` INT UNSIGNED NOT NULL,
  `statusId` INT UNSIGNED NOT NULL,
  `compensation` VARCHAR(255),
  `rating` Float(2, 1),
  `benefits` VARCHAR(255),
  `jobApplicationId` INT UNSIGNED NOT NULL,
  FOREIGN KEY (`statusId`)
    REFERENCES `status`(`id`),
  FOREIGN KEY (`jobApplicationId`)
    REFERENCES `job_application`(`id`),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- Create position-requirements table
CREATE TABLE IF NOT EXISTS `position_requirement` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `positionId` INT UNSIGNED NOT NULL,
  `requirement` VARCHAR(255),
  FOREIGN KEY (`positionId`) REFERENCES `position`(`id`),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- TODO: Create triggers that delete all notes associated with entity being deleted
