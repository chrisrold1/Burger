-- Drop if Exist
DROP DATABASE IF EXIST burger_db;

--Create DAatabase

CREATE DATABASE jtbgu3odqymd6asa_db;

--Use Databse 
USE DATABASE jtbgu3odqymd6asa_db;

--Create Table
CREATE TABLE burgers
(
     id int NOT NULL AUTO_INCREMENT,
     burger_name VARCHAR(255) NOT NULL,
     devoured boolean NOT NULL,
     PRIMARY KEY (id)
);

--Use Databse 
USE DATABASE burger_db;

--Create Table
CREATE TABLE burgers
(
     id int NOT NULL AUTO_INCREMENT,
     burger_name VARCHAR(255) NOT NULL,
     devoured boolean NOT NULL,
     PRIMARY KEY (id)
)