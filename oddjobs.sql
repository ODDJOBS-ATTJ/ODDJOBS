-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 22, 2023 at 07:01 PM
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
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `region` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `barangay` varchar(255) DEFAULT NULL,
  `zipCode` varchar(255) DEFAULT NULL,
  `isVerified` tinyint(1) DEFAULT NULL,
  `isWorker` tinyint(1) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `fbLink` varchar(255) DEFAULT NULL,
  `instaLink` varchar(255) DEFAULT NULL,
  `pfp` varchar(255) DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT NULL,
  `verificationID` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`userID`, `email`, `password`, `firstName`, `lastName`, `phoneNumber`, `birthday`, `region`, `city`, `barangay`, `zipCode`, `isVerified`, `isWorker`, `isAdmin`, `fbLink`, `instaLink`, `pfp`, `isDeleted`, `verificationID`) VALUES
(57, '22100327@usc.edu.ph', '123123123', 'Ditto', 'Tiu', '911-939-4120', '2005-07-31', 'Visayas', 'Lapu-Lapu', 'Gun-Ob', '6015', 1, 0, 1, 'https://www.facebook.com/profile.php?id=100002871202047', 'https://www.instagram.com/tiuditto/?hl=en', 'undefined', 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `action`
--

CREATE TABLE `action` (
  `actionID` int(11) NOT NULL,
  `actionType` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `adminlog`
--

CREATE TABLE `adminlog` (
  `adminLogID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `actionID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `applicationID` int(11) NOT NULL,
  `workerID` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `isAccepted` enum('Yes','No') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `billing`
--

CREATE TABLE `billing` (
  `userID` int(11) NOT NULL,
  `cards` varchar(255) DEFAULT NULL,
  `transactionID` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `bookingID` int(11) NOT NULL,
  `serviceID` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `paymentMethod` varchar(255) DEFAULT NULL,
  `orderID` int(11) DEFAULT NULL,
  `orderQuantity` int(11) DEFAULT NULL,
  `serviceFee` decimal(10,0) DEFAULT NULL,
  `totalPrice` decimal(10,0) DEFAULT NULL,
  `status` enum('pending','approved','ongoing','completed','cancelled') DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderID` int(11) NOT NULL,
  `bookingID` int(11) DEFAULT NULL,
  `workerID` int(11) DEFAULT NULL,
  `userID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `reportID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `workerID` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `serviceID` int(11) NOT NULL,
  `serviceName` varchar(255) DEFAULT NULL,
  `basePrice` decimal(10,0) DEFAULT NULL,
  `shortDesc` text DEFAULT NULL,
  `specifics` text DEFAULT NULL,
  `overview` text DEFAULT NULL,
  `isFeatured` tinyint(1) DEFAULT NULL,
  `isVisible` tinyint(1) DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT NULL,
  `serviceCat` enum('featured','home','event','health','mechanical','misc') NOT NULL,
  `serviceType` enum('unspecified','duration','quantity') NOT NULL,
  `cover` varchar(255) DEFAULT NULL,
  `banner` varchar(255) DEFAULT NULL,
  `policies` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service`
--

INSERT INTO `service` (`serviceID`, `serviceName`, `basePrice`, `shortDesc`, `specifics`, `overview`, `isFeatured`, `isVisible`, `isDeleted`, `serviceCat`, `serviceType`, `cover`, `banner`, `policies`) VALUES
(7, 'House Cleaning', 50, 'Professional cleaning service for your home. Our experienced team uses eco-friendly products to ensure a safe and clean environment. Services include thorough dusting, vacuuming, and detailed bathroom cleaning. Trust us to leave your home spotless and fresh.', 'Includes dusting, vacuuming, and bathroom cleaning', 'Our expert cleaners will leave your home spotless and fresh.', 1, 1, 0, 'home', 'unspecified', NULL, NULL, 'General cleaning policies apply.'),
(8, 'Catering for Events', 200, 'Catering service for special events and occasions. Our culinary experts provide a diverse menu with customizable options for weddings, parties, and corporate events. Ensure your guests enjoy delicious food and impeccable service with our catering team.', 'Customizable menu options for weddings, parties, and corporate events', 'Our catering team ensures delicious food and impeccable service for your guests.', 0, 1, 0, 'event', 'duration', NULL, NULL, 'Event cancellation policy applies.'),
(9, 'Fitness Training', 30, 'Personalized fitness training sessions tailored to your needs. Our certified trainers focus on strength and endurance, helping you achieve your fitness goals. Join us for effective and enjoyable workout sessions.', 'Tailored workouts focusing on strength and endurance', 'Achieve your fitness goals with our certified trainers.', 1, 1, 0, 'health', 'quantity', NULL, NULL, '24-hour cancellation notice required.'),
(10, 'Car Maintenance', 80, 'Routine maintenance for your vehicle. Our professional mechanics provide comprehensive services, including oil change, tire rotation, and basic inspection. Keep your car running smoothly with our reliable car maintenance solutions.', 'Oil change, tire rotation, and basic inspection included', 'Keep your car running smoothly with our professional mechanics.', 0, 1, 0, 'mechanical', 'unspecified', NULL, NULL, 'Warranty for parts and services provided.'),
(11, 'Computer Repair', 60, 'Expert repair services for computers and laptops. Our technicians diagnose and troubleshoot hardware and software issues to ensure fast and reliable computer repair solutions. No fix, no fee policy.', 'Diagnosis and troubleshooting for hardware and software issues', 'Our technicians ensure fast and reliable computer repair solutions.', 1, 1, 0, 'misc', 'duration', NULL, NULL, 'No fix, no fee policy.'),
(12, 'Photography Session', 120, 'Professional photography sessions for any occasion. Our skilled photographers specialize in portrait, event, and product photography. Capture and preserve your special moments with high-quality digital files included.', 'Includes portrait, event, or product photography', 'Capture your special moments with our skilled photographers.', 0, 1, 0, 'featured', 'quantity', NULL, NULL, 'High-resolution digital files included.'),
(13, 'Gardening Services', 40, 'Expert gardening services for your outdoor spaces. Our team takes care of planting, pruning, and lawn maintenance. Transform your garden into a beautiful and vibrant space.', 'Planting, pruning, lawn maintenance', 'Enhance the beauty of your outdoor spaces with our professional gardening services.', 0, 1, 0, 'home', 'quantity', NULL, NULL, 'Seasonal maintenance recommendations provided.'),
(14, 'Corporate Training Workshops', 250, 'Tailored training workshops for corporate teams. Our experienced facilitators cover topics such as leadership, teamwork, and communication. Boost productivity and employee engagement with our corporate training programs.', 'Leadership, teamwork, communication', 'Empower your team with our customized corporate training workshops.', 0, 1, 0, 'event', 'duration', NULL, NULL, 'Customizable content to meet your organization\'s needs.'),
(15, 'Yoga and Meditation Classes', 35, 'Holistic yoga and meditation classes for all levels. Join our certified instructors for a journey of relaxation and self-discovery. Improve your physical and mental well-being with our yoga sessions.', 'Yoga postures, meditation techniques', 'Experience inner peace and balance with our yoga and meditation classes.', 0, 1, 0, 'health', 'duration', NULL, NULL, 'Mats and props provided for class participants.'),
(16, 'Auto Detailing Services', 100, 'Comprehensive auto detailing for your vehicle. Our detailing packages include interior cleaning, exterior waxing, and attention to every detail. Restore the shine and freshness of your car with our auto detailing services.', 'Interior cleaning, exterior waxing', 'Give your car a showroom-worthy appearance with our premium auto detailing services.', 0, 1, 0, 'mechanical', 'unspecified', NULL, NULL, 'Customized detailing options available.'),
(17, 'Data Recovery Services', 75, 'Specialized data recovery services for computers and storage devices. Our skilled technicians can recover lost or corrupted data from hard drives, SSDs, and external devices. Trust us to restore your valuable information.', 'Data recovery from hard drives, SSDs', 'Secure and reliable data recovery solutions for individuals and businesses.', 0, 1, 0, 'misc', 'quantity', NULL, NULL, 'Confidentiality and data security guaranteed.'),
(18, 'Family Portraits Session', 150, 'Capture timeless family moments with our professional portrait sessions. Our photographers specialize in creating beautiful family portraits that you can cherish for a lifetime. Book a session for a memorable family experience.', 'Family portraits', 'Preserve the joy and love of your family with our expert family portraits session.', 0, 1, 0, 'featured', 'quantity', NULL, NULL, 'High-quality prints and digital files included.'),
(19, 'Apartment Cleaning', 60, 'Professional cleaning service for apartments and small spaces. Our dedicated team ensures a thorough cleaning, including dusting, vacuuming, and kitchen cleaning.', 'Dusting, vacuuming, kitchen cleaning', 'Keep your apartment spotless and welcoming with our expert cleaning services.', 0, 1, 0, 'home', 'unspecified', NULL, NULL, 'Flexible scheduling available.'),
(20, 'Birthday Party Catering', 180, 'Specialized catering services for birthday parties. Choose from a variety of menus and treat your guests to delicious food and delightful catering services tailored for birthday celebrations.', 'Customizable menu options for birthdays', 'Make your birthday celebration memorable with our catering expertise.', 0, 1, 0, 'event', 'duration', NULL, NULL, 'Special birthday discounts available.'),
(21, 'Outdoor Bootcamp Sessions', 25, 'Revitalize your fitness routine with outdoor bootcamp sessions. Our experienced trainers lead dynamic workouts that focus on strength, cardio, and overall fitness improvement.', 'Strength training, cardio exercises', 'Experience the energy and motivation of outdoor bootcamp sessions for a healthier lifestyle.', 0, 1, 0, 'health', 'quantity', NULL, NULL, 'All fitness levels welcome.'),
(22, 'Car Tune-Up Services', 90, 'Comprehensive car tune-up services to enhance performance. Our skilled mechanics provide a thorough inspection, engine tuning, and fluid checks for optimal vehicle functionality.', 'Engine tuning, fluid checks', 'Ensure your car performs at its best with our professional car tune-up services.', 0, 1, 0, 'mechanical', 'unspecified', NULL, NULL, 'Performance improvement guaranteed.'),
(23, 'IT Consultation Services', 70, 'Expert IT consultation services for individuals and businesses. Our consultants provide guidance on technology solutions, software optimization, and cybersecurity measures.', 'Technology solutions, cybersecurity', 'Make informed decisions with our IT consultation services for a secure and efficient digital environment.', 0, 1, 0, 'misc', 'duration', NULL, NULL, 'Customized consultations based on your needs.'),
(24, 'Engagement Photography Package', 130, 'Capture the joy of your engagement with our professional photography package. Our skilled photographers specialize in creating stunning images that reflect the love and excitement of this special moment.', 'Engagement photo session', 'Preserve the magic of your engagement with our expert photography package.', 0, 1, 0, 'featured', 'quantity', NULL, NULL, 'High-resolution images for announcements and keepsakes.'),
(25, 'Interior Design Consultation', 80, 'Personalized interior design consultations for homes and businesses. Our experienced designers offer creative ideas, color schemes, and space optimization solutions.', 'Color schemes, space optimization', 'Transform your space with our expert interior design consultations.', 0, 1, 0, 'home', 'duration', NULL, NULL, 'Customized design plans provided.'),
(26, 'Corporate Event Planning', 220, 'Full-service event planning for corporate events. Our dedicated team handles logistics, coordination, and execution to ensure a successful and memorable corporate gathering.', 'Logistics, coordination, execution', 'Experience stress-free corporate event planning with our professional services.', 0, 1, 0, 'event', 'quantity', NULL, NULL, 'Tailored packages for corporate needs.'),
(27, 'Virtual Yoga Classes', 30, 'Enjoy the benefits of yoga from the comfort of your home with our virtual yoga classes. Join live sessions with certified instructors for a rejuvenating and interactive experience.', 'Live virtual sessions, certified instructors', 'Stay active and balanced with our virtual yoga classes tailored for remote participation.', 0, 1, 0, 'health', 'duration', NULL, NULL, 'Flexible class schedules available.'),
(28, 'Auto Body Repair Services', 150, 'Specialized auto body repair services for damaged vehicles. Our skilled technicians restore the appearance and structural integrity of your vehicle with precision and expertise.', 'Collision repair, dent removal', 'Trust us to bring your vehicle back to its original condition with our auto body repair services.', 0, 1, 0, 'mechanical', 'unspecified', NULL, NULL, 'Free estimates and consultation.'),
(29, 'Computer Virus Removal', 50, 'Efficient computer virus removal services for a secure computing environment. Our technicians thoroughly scan and eliminate viruses, malware, and other security threats.', 'Virus scanning, malware removal', 'Protect your data and ensure the health of your computer with our virus removal services.', 0, 1, 0, 'misc', 'quantity', NULL, NULL, 'Security tips for ongoing protection.'),
(30, 'Family Event Photography', 110, 'Capture the joy of family events with our professional photography services. From reunions to celebrations, our photographers ensure every special moment is beautifully preserved.', 'Family event coverage', 'Relive the happiness of your family events with our expert photography services.', 0, 1, 0, 'featured', 'duration', NULL, NULL, 'Customized photo packages available.');

-- --------------------------------------------------------

--
-- Table structure for table `workers`
--

CREATE TABLE `workers` (
  `workerID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `document1` varchar(255) DEFAULT NULL,
  `document2` varchar(255) DEFAULT NULL,
  `document3` varchar(255) DEFAULT NULL,
  `avgRating` float DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  ADD KEY `workerID` (`workerID`);

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
  ADD PRIMARY KEY (`userID`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`bookingID`),
  ADD KEY `serviceID` (`serviceID`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderID`),
  ADD KEY `bookingID` (`bookingID`),
  ADD KEY `workerID` (`workerID`),
  ADD KEY `userID` (`userID`);

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
  ADD PRIMARY KEY (`serviceID`);

--
-- Indexes for table `workers`
--
ALTER TABLE `workers`
  ADD PRIMARY KEY (`workerID`),
  ADD KEY `userID` (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `action`
--
ALTER TABLE `action`
  MODIFY `actionID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `adminlog`
--
ALTER TABLE `adminlog`
  MODIFY `adminLogID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `applicationID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `appliedjobs`
--
ALTER TABLE `appliedjobs`
  MODIFY `appliedJobsID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `bookingID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ratings`
--
ALTER TABLE `ratings`
  MODIFY `ratingID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `reportID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `serviceID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `workers`
--
ALTER TABLE `workers`
  MODIFY `workerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  ADD CONSTRAINT `applications_ibfk_1` FOREIGN KEY (`workerID`) REFERENCES `workers` (`workerID`);

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
  ADD CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`serviceID`) REFERENCES `service` (`serviceID`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`bookingID`) REFERENCES `bookings` (`bookingID`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`workerID`) REFERENCES `workers` (`workerID`),
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`userID`) REFERENCES `accounts` (`userID`);

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
-- Constraints for table `workers`
--
ALTER TABLE `workers`
  ADD CONSTRAINT `workers_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `accounts` (`userID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
