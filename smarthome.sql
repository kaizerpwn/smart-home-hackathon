-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 19, 2023 at 11:31 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smarthome`
--

-- --------------------------------------------------------

--
-- Table structure for table `korisnici`
--

CREATE TABLE `korisnici` (
  `id` int(11) NOT NULL,
  `ime` varchar(32) DEFAULT NULL,
  `prezime` varchar(32) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `lozinka` varchar(128) DEFAULT NULL,
  `grad` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `korisnici`
--

INSERT INTO `korisnici` (`id`, `ime`, `prezime`, `email`, `lozinka`, `grad`) VALUES
(1, 'Ibrahim', 'Okic', 'okicibrahim@gmail.com', '$2a$10$4a41H19iyzCX8R3l/1D.bOEVkBoC20wv47vhoFFriVDK.UXDIkUwa', 'Srebrenik'),
(2, 'Emina', 'Mumic', 'mumicemina@gmail.com', '$2a$10$JTB2b2ChQuvLYRbpcDuBOe.XQUXYTHmaZ4ZuBfP4BDE.Cu5Fwa3P.', 'Tuzla'),
(3, 'Almir', 'Hodzic', 'almirhodzic@gmail.com', '$2a$10$H7wckRNPV7bXwGCrrmY2YeGyyq/FYWuXs34E5pp1wg5M8FtAXqwYm', 'Srebrenik'),
(4, 'Edo', 'Majka', 'edomajka@gmail.com', '$2a$10$ShbWc4Yxu9IDWsfsKCUcV.96JOvJLXq8sN7.9ZO10j.uZLOmkwipG', 'Brcko'),
(5, 'Alma', 'Mumic', 'almamumic@gmail.com', '$2a$10$dzRw4v4mNcUzlIn0HjLRrevGP5ODsTkVmICp5.FVBuvr.H8vdLzQq', 'Tuzla');

-- --------------------------------------------------------

--
-- Table structure for table `prostorije`
--

CREATE TABLE `prostorije` (
  `id` int(11) NOT NULL,
  `ime` varchar(32) DEFAULT NULL,
  `statusSijalice` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `prostorije`
--

INSERT INTO `prostorije` (`id`, `ime`, `statusSijalice`) VALUES
(1, 'Dnevna soba', 0),
(2, 'Kuhinja', 1),
(3, 'Kupatilo', 0),
(4, 'Spavaća soba', 0),
(5, 'Dječija soba', 1);

-- --------------------------------------------------------

--
-- Table structure for table `uredjaji`
--

CREATE TABLE `uredjaji` (
  `id` int(11) NOT NULL,
  `ime` varchar(32) DEFAULT NULL,
  `kategorija` varchar(32) DEFAULT NULL,
  `prostorija` varchar(32) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `uredjaji`
--

INSERT INTO `uredjaji` (`id`, `ime`, `kategorija`, `prostorija`, `status`) VALUES
(1, 'Smart TV - Samsung', 'TV Uređaji', 'Dnevni boravak', 1),
(2, 'Frižider - Telefunken', 'Frižideri', 'Kuhinja', 1),
(3, 'Električna peć', 'Kuhinja', 'Kuhinja', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `korisnici`
--
ALTER TABLE `korisnici`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prostorije`
--
ALTER TABLE `prostorije`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `uredjaji`
--
ALTER TABLE `uredjaji`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `korisnici`
--
ALTER TABLE `korisnici`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `prostorije`
--
ALTER TABLE `prostorije`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `uredjaji`
--
ALTER TABLE `uredjaji`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
