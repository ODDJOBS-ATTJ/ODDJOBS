-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 23, 2023 at 08:01 PM
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
(57, '22100327@usc.edu.ph', '123123123', 'Ditto', 'Tiu', '911-939-4120', '2005-07-31', 'Visayas', 'Lapu-Lapu', 'Gun-Ob', '6015', 1, 1, 1, 'https://www.facebook.com/profile.php?id=100002871202047', 'https://www.instagram.com/tiuditto/?hl=en', 'undefined', 0, NULL);

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
(1, 'Interior Design Consultation', 2400, 'Personalized interior design consultations for homes and businesses. Our experienced designers offer creative ideas, color schemes, and space optimization solutions.', 'Color schemes, space optimization', 'Transform your living spaces with our Interior Design Consultation services. Personalized for homes and businesses, our experienced designers offer creative ideas, color schemes, and space optimization solutions. Bring your vision to life with our expert interior design consultations, complete with customized design plans.', 0, 1, 0, 'home', 'duration', NULL, NULL, 'interior-design-consultation-policy.pdf'),
(2, 'Corporate Event Planning', 6600, 'Full-service event planning for corporate events. Our dedicated team handles logistics, coordination, and execution to ensure a successful and memorable corporate gathering.', 'Logistics, coordination, execution', 'Experience stress-free corporate gatherings with our Corporate Event Planning services. Our dedicated team handles logistics, coordination, and execution, ensuring a successful and memorable event. Tailored packages cater to the specific needs of your organization, promising a seamless and impactful corporate gathering.', 0, 1, 0, 'event', 'quantity', NULL, NULL, 'corporate-event-planning-policy.pdf'),
(3, 'Massage Therapy', 900, 'Indulge in blissful relaxation with our professional in-home massage service, tailored to your needs and delivered right to your doorstep.', 'Live virtual sessions, certified instructors', 'Indulge in blissful relaxation with our Massage Therapy services. Our professional in-home massage service is tailored to your needs and delivered right to your doorstep. Live virtual sessions with certified instructors keep you active and balanced, ensuring flexibility with class schedules.', 1, 1, 0, 'health', 'duration', NULL, NULL, 'massage-therapy-policy.pdf'),
(4, 'Auto Body Repair Services', 4500, 'Specialized auto body repair services for damaged vehicles. Our skilled technicians restore the appearance and structural integrity of your vehicle with precision and expertise.', 'Collision repair, dent removal', 'Restore your vehicle to its original glory with our Auto Body Repair Services. Specialized in repairing damaged vehicles, our skilled technicians bring precision and expertise to collision repair and dent removal. Trust us to revive the appearance and structural integrity of your vehicle.', 0, 1, 0, 'mechanical', 'unspecified', NULL, NULL, 'auto-body-repair-services-policy.pdf'),
(5, 'Computer Virus Removal', 1500, 'Efficient computer virus removal services for a secure computing environment. Our technicians thoroughly scan and eliminate viruses, malware, and other security threats.', 'Virus scanning, malware removal', 'Ensure the health of your computer with our Computer Virus Removal services. Our efficient technicians thoroughly scan and eliminate viruses, malware, and other security threats. Receive security tips for ongoing protection, protecting your data and maintaining the security of your computer.', 0, 1, 0, 'misc', 'quantity', NULL, NULL, 'computer-virus-removal-policy.pdf'),
(6, 'Family Event Photography', 6600, 'Capture the joy of family events with our professional photography services. From reunions to celebrations, our photographers ensure every special moment is beautifully preserved.', 'Family event coverage', 'Capture the joy of family events with our Family Event Photography services. From reunions to celebrations, our photographers ensure every special moment is beautifully preserved. Relive the happiness of your family events with our expert photography services, offering customized photo packages to suit your preferences.', 0, 1, 0, 'featured', 'duration', NULL, NULL, 'family-event-photography-policy.pdf'),
(7, 'House Cleaning', 1500, 'Professional cleaning service for your home. Our experienced team uses eco-friendly products to ensure a safe and clean environment. Services include thorough dusting, vacuuming, and detailed bathroom cleaning. Trust us to leave your home spotless and fresh.', 'Includes dusting, vacuuming, and bathroom cleaning', 'Discover the epitome of cleanliness with our House Cleaning service. Our dedicated team of cleaning professionals is committed to creating a pristine environment for your home. Using eco-friendly products, we ensure a safe and eco-conscious cleaning experience. From meticulous dusting to thorough vacuuming and detailed bathroom cleaning, every nook and cranny of your home is cared for. Trust us to leave your living space not just clean but rejuvenated and welcoming. Experience the difference of our expert touch, bringing freshness and vitality to your home.', 1, 1, 0, 'home', 'unspecified', NULL, NULL, 'house-cleaning-policy.pdf'),
(8, 'Catering for Events', 6000, 'Catering service for special events and occasions. Our culinary experts provide a diverse menu with customizable options for weddings, parties, and corporate events. Ensure your guests enjoy delicious food and impeccable service with our catering team.', 'Customizable menu options for weddings, parties, and corporate events', 'Elevate your special events with our Catering for Events service. Our culinary experts specialize in curating an exceptional dining experience tailored to your preferences. Whether it is a wedding, party, or corporate event, our diverse menu offers customizable options to satisfy every palate. Treat your guests to not just delicious food but an unforgettable culinary journey. Impeccable service is our promise, ensuring that your event is a seamless celebration of flavors and joy.', 0, 1, 0, 'event', 'duration', NULL, NULL, 'catering-for-events-policy.pdf'),
(9, 'Fitness Training', 900, 'Personalized fitness training sessions tailored to your needs. Our certified trainers focus on strength and endurance, helping you achieve your fitness goals. Join us for effective and enjoyable workout sessions.', 'Tailored workouts focusing on strength and endurance', 'Embark on a transformative fitness journey with our Fitness Training sessions. Our certified trainers are dedicated to crafting personalized workout sessions that cater to your unique needs and goals. Focusing on strength and endurance, our sessions are designed to empower you to achieve your fitness aspirations. Join us for workouts that are not only effective but also enjoyable, making the path to a healthier you a fulfilling and engaging experience.', 1, 1, 0, 'health', 'quantity', NULL, NULL, 'fitness-training-policy.pdf'),
(10, 'Car Maintenance', 2400, 'Routine maintenance for your vehicle. Our professional mechanics provide comprehensive services, including oil change, tire rotation, and basic inspection. Keep your car running smoothly with our reliable car maintenance solutions.', 'Oil change, tire rotation, and basic inspection included', 'Experience peak performance for your vehicle with our Car Maintenance services. Our professional mechanics provide comprehensive routine maintenance, including vital services like oil change, tire rotation, and basic inspection. Entrust your vehicle to our care and ensure it runs smoothly with our reliable and meticulous car maintenance solutions. From engine health to tire condition, we have got your car covered for a worry-free ride.', 0, 1, 0, 'mechanical', 'unspecified', NULL, NULL, 'car-maintenance-policy.pdf'),
(11, 'Computer Repair', 1800, 'Expert repair services for computers and laptops. Our technicians diagnose and troubleshoot hardware and software issues to ensure fast and reliable computer repair solutions. No fix, no fee policy.', 'Diagnosis and troubleshooting for hardware and software issues', 'Navigate the world of technology with confidence, thanks to our expert Computer Repair services. Our skilled technicians specialize in diagnosing and troubleshooting both hardware and software issues, ensuring fast and reliable computer repair solutions. With a \"No fix, no fee\" policy, you can trust us to resolve your computer and laptop issues efficiently. Your digital well-being is our priority, and we are committed to keeping you seamlessly connected.', 1, 1, 0, 'misc', 'duration', NULL, NULL, 'computer-repair-policy.pdf'),
(12, 'Photography Session', 3600, 'Professional photography sessions for any occasion. Our skilled photographers specialize in portrait, event, and product photography. Capture and preserve your special moments with high-quality digital files included.', 'Includes portrait, event, or product photography', 'Capture the essence of your special moments with our Photography Sessions. Our skilled photographers excel in creating stunning images, be it portraits, event coverage, or product photography. From the smallest details to the grandest scenes, we meticulously craft high-quality digital files that preserve the magic of your unique occasions. Entrust your memories to us, and let our expertise turn every moment into a timeless piece of art.', 0, 1, 0, 'featured', 'quantity', NULL, NULL, 'photography-session-policy.pdf'),
(13, 'Gardening Services', 1200, 'Expert gardening services for your outdoor spaces. Our team takes care of planting, pruning, and lawn maintenance. Transform your garden into a beautiful and vibrant space.', 'Planting, pruning, lawn maintenance', 'Transform your outdoor spaces into havens of beauty with our Gardening Services. Our expert team specializes in planting, pruning, and lawn maintenance, bringing vibrancy to your gardens. From seasonal blooms to lush lawns, we enhance the natural charm of your outdoor areas. Let us take care of the greenery while you relish the beauty and serenity of your well-maintained garden.', 0, 1, 0, 'home', 'quantity', NULL, NULL, 'gardening-services-policy.pdf'),
(14, 'Corporate Training Workshops', 7500, 'Tailored training workshops for corporate teams. Our experienced facilitators cover topics such as leadership, teamwork, and communication. Boost productivity and employee engagement with our corporate training programs.', 'Leadership, teamwork, communication', 'Empower your corporate team with our Customized Training Workshops. Our experienced facilitators cover a spectrum of topics including leadership, teamwork, and communication, tailoring content to meet your organizations specific needs. Boost productivity and employee engagement with our corporate training programs. Investing in your teams development has never been this impactful.', 0, 1, 0, 'event', 'duration', NULL, NULL, 'corporate-training-workshops-policy.pdf'),
(15, 'Yoga and Meditation Classes', 1050, 'Holistic yoga and meditation classes for all levels. Join our certified instructors for a journey of relaxation and self-discovery. Improve your physical and mental well-being with our yoga sessions.', 'Yoga postures, meditation techniques', 'Embark on a journey of holistic well-being with our Yoga and Meditation Classes. Led by certified instructors, our classes cater to all levels, promoting physical and mental harmony. Experience inner peace and balance as you engage in yoga postures and meditation techniques. Mats and props are provided, ensuring a serene space for self-discovery and relaxation.', 0, 1, 0, 'health', 'duration', NULL, NULL, 'yoga-and-meditation-classes-policy.pdf'),
(16, 'Auto Detailing Services', 3000, 'Comprehensive auto detailing for your vehicle. Our detailing packages include interior cleaning, exterior waxing, and attention to every detail. Restore the shine and freshness of your car with our auto detailing services.', 'Interior cleaning, exterior waxing', 'Reveal the showroom-worthy allure of your vehicle with our Auto Detailing Services. Our comprehensive packages include interior cleaning, exterior waxing, and meticulous attention to every detail. From the interiors to the exteriors, we restore the shine and freshness of your car, ensuring it stands out with a polished and pristine appearance.', 0, 1, 0, 'mechanical', 'unspecified', NULL, NULL, 'auto-detailing-services-policy.pdf'),
(17, 'Data Recovery Services', 2250, 'Specialized data recovery services for computers and storage devices. Our skilled technicians can recover lost or corrupted data from hard drives, SSDs, and external devices. Trust us to restore your valuable information.', 'Data recovery from hard drives, SSDs', 'Secure the heart of your digital world with our Data Recovery Services. Specialized in recovering lost or corrupted data from hard drives, SSDs, and external devices, our skilled technicians provide secure and reliable solutions. Trust us to restore your valuable information, ensuring the confidentiality and security of your digital assets.', 0, 1, 0, 'misc', 'quantity', NULL, NULL, 'data-recovery-services-policy.pdf'),
(18, 'Family Portraits Session', 4500, 'Capture timeless family moments with our professional portrait sessions. Our photographers specialize in creating beautiful family portraits that you can cherish for a lifetime. Book a session for a memorable family experience.', 'Family portraits', 'Preserve the joy and love of your family with our Family Portraits Sessions. Our photographers specialize in creating beautiful family portraits that capture the essence of your unique bond. Book a session for a memorable family experience, and relive the happiness of your cherished moments.', 0, 1, 0, 'featured', 'quantity', NULL, NULL, 'family-portraits-session-policy.pdf'),
(19, 'Apartment Cleaning', 1800, 'Professional cleaning service for apartments and small spaces. Our dedicated team ensures a thorough cleaning, including dusting, vacuuming, and kitchen cleaning.', 'Dusting, vacuuming, kitchen cleaning', 'Experience the pinnacle of cleanliness with our Apartment Cleaning service. Our dedicated team ensures a thorough cleaning, including dusting, vacuuming, and kitchen cleaning. Tailored for apartments and small spaces, our expert cleaning services keep your living space spotless and welcoming.', 0, 1, 0, 'home', 'unspecified', NULL, NULL, 'apartment-cleaning-policy.pdf'),
(20, 'Birthday Party Catering', 5400, 'Specialized catering services for birthday parties. Choose from a variety of menus and treat your guests to delicious food and delightful catering services tailored for birthday celebrations.', 'Customizable menu options for birthdays', 'Celebrate birthdays in style with our Birthday Party Catering services. Choose from a variety of menus and treat your guests to delicious food and delightful catering services tailored for birthday celebrations. Make your birthday celebration memorable with our catering expertise, complete with special birthday discounts.', 0, 1, 0, 'event', 'duration', NULL, NULL, 'birthday-party-catering-policy.pdf'),
(21, 'Outdoor Bootcamp Sessions', 750, 'Revitalize your fitness routine with outdoor bootcamp sessions. Our experienced trainers lead dynamic workouts that focus on strength, cardio, and overall fitness improvement.', 'Strength training, cardio exercises', 'Revitalize your fitness routine with our Outdoor Bootcamp Sessions. Led by experienced trainers, our dynamic workouts focus on strength, cardio, and overall fitness improvement. Experience the energy and motivation of outdoor bootcamp sessions, welcoming participants of all fitness levels.', 0, 1, 0, 'health', 'quantity', NULL, NULL, 'outdoor-bootcamp-sessions-policy.pdf'),
(22, 'Car Tune-Up Services', 2700, 'Comprehensive car tune-up services to enhance performance. Our skilled mechanics provide a thorough inspection, engine tuning, and fluid checks for optimal vehicle functionality.', 'Engine tuning, fluid checks', 'Enhance the performance of your vehicle with our Car Tune-Up Services. Our skilled mechanics provide a comprehensive inspection, engine tuning, and fluid checks for optimal vehicle functionality. Ensure your car performs at its best with our professional car tune-up services, guaranteeing a boost in performance.', 0, 1, 0, 'mechanical', 'unspecified', NULL, NULL, 'car-tune-up-services-policy.pdf'),
(23, 'IT Consultation Services', 2100, 'Expert IT consultation services for individuals and businesses. Our consultants provide guidance on technology solutions, software optimization, and cybersecurity measures.', 'Technology solutions, cybersecurity', 'Navigate the digital landscape with confidence with our IT Consultation Services. Tailored for individuals and businesses, our expert consultants provide guidance on technology solutions, software optimization, and cybersecurity measures. Make informed decisions for a secure and efficient digital environment with our customized consultations.', 0, 1, 0, 'misc', 'duration', NULL, NULL, 'it-consultation-services-policy.pdf'),
(24, 'Engagement Photography Package', 3900, 'Capture the joy of your engagement with our professional photography package. Our skilled photographers specialize in creating stunning images that reflect the love and excitement of this special moment.', 'Engagement photo session', 'Capture the magic of your engagement with our Engagement Photography Package. Our skilled photographers specialize in creating stunning images that reflect the love and excitement of this special moment. Receive high-resolution images for announcements and keepsakes, preserving the joy of your engagement.', 0, 1, 0, 'featured', 'quantity', NULL, NULL, 'engagement-photography-package-policy.pdf');

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
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

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
