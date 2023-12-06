-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 05, 2023 at 05:17 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oddjobs`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `userID` int(11) NOT NULL,
  `Email` varchar(320) DEFAULT NULL,
  `Password` varchar(60) DEFAULT NULL,
  `firstName` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `phoneNumber` varchar(15) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `region` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `barangay` varchar(50) DEFAULT NULL,
  `zipCode` varchar(10) DEFAULT NULL,
  `isWorker` tinyint(1) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `fbLink` varchar(255) DEFAULT NULL,
  `instaLink` varchar(255) DEFAULT NULL,
  `pfp` blob DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `action`
--

CREATE TABLE `action` (
  `actionID` int(11) NOT NULL,
  `actionType` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `adminlog`
--

CREATE TABLE `adminlog` (
  `adminLogID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `actionID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `applicationID` int(11) NOT NULL,
  `workerID` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `statusID` int(11) DEFAULT NULL,
  `isAccepted` enum('yes','no') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `appliedjobs`
--

CREATE TABLE `appliedjobs` (
  `appliedJobsID` int(11) NOT NULL,
  `workerID` int(11) DEFAULT NULL,
  `serviceID` int(11) DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT NULL,
  `isDefault` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `billing`
--

CREATE TABLE `billing` (
  `billingID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `paypalAccount` varchar(255) DEFAULT NULL,
  `transactionID` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `bookingID` int(11) NOT NULL,
  `serviceID` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `statusID` int(11) DEFAULT NULL,
  `paymentMethod` varchar(255) DEFAULT NULL,
  `orderID` int(11) DEFAULT NULL,
  `orderQuantity` int(11) DEFAULT NULL,
  `serviceTypeNum` int(11) DEFAULT NULL,
  `serviceFee` decimal(10,2) DEFAULT NULL,
  `totalPrice` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderID` int(11) NOT NULL,
  `workerID` int(11) DEFAULT NULL,
  `userID` int(11) DEFAULT NULL,
  `billingID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ratings`
--

CREATE TABLE `ratings` (
  `ratingID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `workerID` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `reportID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `workerID` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `serviceID` int(11) NOT NULL,
  `serviceName` varchar(255) DEFAULT NULL,
  `basePrice` decimal(10,2) DEFAULT NULL,
  `serviceTypeID` int(11) DEFAULT NULL,
  `policies` blob DEFAULT NULL,
  `cover` blob DEFAULT NULL,
  `banner` blob DEFAULT NULL,
  `shortDesc` text DEFAULT NULL,
  `specifics` text DEFAULT NULL,
  `overview` text DEFAULT NULL,
  `isFeatured` tinyint(1) DEFAULT NULL,
  `isVisible` tinyint(1) DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `servicetypes`
--

CREATE TABLE `servicetypes` (
  `serviceTypeID` int(11) NOT NULL,
  `serviceTypeName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `statusID` int(11) NOT NULL,
  `statusType` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `workers`
--

CREATE TABLE `workers` (
  `workerID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `document1` blob DEFAULT NULL,
  `document2` blob DEFAULT NULL,
  `document3` blob DEFAULT NULL,
  `avgRating` float DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`userID`);

--
-- Indexes for table `action`
--
ALTER TABLE `action`
  ADD PRIMARY KEY (`actionID`);

--
-- Indexes for table `adminlog`
--
ALTER TABLE `adminlog`
  ADD PRIMARY KEY (`adminLogID`),
  ADD KEY `userID` (`userID`),
  ADD KEY `actionID` (`actionID`);

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`applicationID`),
  ADD KEY `workerID` (`workerID`),
  ADD KEY `statusID` (`statusID`);

--
-- Indexes for table `appliedjobs`
--
ALTER TABLE `appliedjobs`
  ADD PRIMARY KEY (`appliedJobsID`),
  ADD KEY `workerID` (`workerID`),
  ADD KEY `serviceID` (`serviceID`);

--
-- Indexes for table `billing`
--
ALTER TABLE `billing`
  ADD PRIMARY KEY (`billingID`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`bookingID`),
  ADD KEY `serviceID` (`serviceID`),
  ADD KEY `statusID` (`statusID`),
  ADD KEY `orderID` (`orderID`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderID`),
  ADD KEY `workerID` (`workerID`),
  ADD KEY `userID` (`userID`),
  ADD KEY `FK_orders_billing` (`billingID`);

--
-- Indexes for table `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`ratingID`),
  ADD KEY `userID` (`userID`),
  ADD KEY `workerID` (`workerID`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`reportID`),
  ADD KEY `userID` (`userID`),
  ADD KEY `workerID` (`workerID`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`serviceID`),
  ADD KEY `serviceTypeID` (`serviceTypeID`);

--
-- Indexes for table `servicetypes`
--
ALTER TABLE `servicetypes`
  ADD PRIMARY KEY (`serviceTypeID`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`statusID`);

--
-- Indexes for table `workers`
--
ALTER TABLE `workers`
  ADD PRIMARY KEY (`workerID`),
  ADD KEY `userID` (`userID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `adminlog`
--
ALTER TABLE `adminlog`
  ADD CONSTRAINT `adminlog_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `accounts` (`userID`),
  ADD CONSTRAINT `adminlog_ibfk_2` FOREIGN KEY (`actionID`) REFERENCES `action` (`actionID`);

--
-- Constraints for table `applications`
--
ALTER TABLE `applications`
  ADD CONSTRAINT `applications_ibfk_1` FOREIGN KEY (`workerID`) REFERENCES `workers` (`workerID`),
  ADD CONSTRAINT `applications_ibfk_2` FOREIGN KEY (`statusID`) REFERENCES `status` (`statusID`);

--
-- Constraints for table `appliedjobs`
--
ALTER TABLE `appliedjobs`
  ADD CONSTRAINT `appliedjobs_ibfk_1` FOREIGN KEY (`workerID`) REFERENCES `workers` (`workerID`),
  ADD CONSTRAINT `appliedjobs_ibfk_2` FOREIGN KEY (`serviceID`) REFERENCES `service` (`serviceID`);

--
-- Constraints for table `billing`
--
ALTER TABLE `billing`
  ADD CONSTRAINT `billing_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `accounts` (`userID`);

--
-- Constraints for table `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`serviceID`) REFERENCES `service` (`serviceID`),
  ADD CONSTRAINT `bookings_ibfk_2` FOREIGN KEY (`statusID`) REFERENCES `status` (`statusID`),
  ADD CONSTRAINT `bookings_ibfk_3` FOREIGN KEY (`orderID`) REFERENCES `orders` (`orderID`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `FK_orders_billing` FOREIGN KEY (`billingID`) REFERENCES `billing` (`billingID`),
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`workerID`) REFERENCES `workers` (`workerID`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `accounts` (`userID`);

--
-- Constraints for table `ratings`
--
ALTER TABLE `ratings`
  ADD CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `accounts` (`userID`),
  ADD CONSTRAINT `ratings_ibfk_2` FOREIGN KEY (`workerID`) REFERENCES `workers` (`workerID`);

--
-- Constraints for table `reports`
--
ALTER TABLE `reports`
  ADD CONSTRAINT `reports_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `accounts` (`userID`),
  ADD CONSTRAINT `reports_ibfk_2` FOREIGN KEY (`workerID`) REFERENCES `workers` (`workerID`);

--
-- Constraints for table `service`
--
ALTER TABLE `service`
  ADD CONSTRAINT `service_ibfk_1` FOREIGN KEY (`serviceTypeID`) REFERENCES `servicetypes` (`serviceTypeID`);

--
-- Constraints for table `workers`
--
ALTER TABLE `workers`
  ADD CONSTRAINT `workers_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `accounts` (`userID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
