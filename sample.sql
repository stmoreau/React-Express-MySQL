CREATE DATABASE books;

USE books;

CREATE TABLE authors (
	id   INTEGER PRIMARY KEY AUTO_INCREMENT,
	first_name	VARCHAR(255) NOT NULL,
	middle_name	VARCHAR(255),
	last_name	VARCHAR(255) NOT NULL
) CHARACTER SET utf8;

SHOW TABLES;

INSERT INTO authors (first_name, last_name) VALUES("William","Shakespeare");
INSERT INTO authors (first_name, middle_name, last_name) VALUES("Edgar", "Allan", "Poe");
INSERT INTO authors (first_name, last_name) VALUES("Fyodor","Dostoyevsky");
INSERT INTO authors (first_name, last_name) VALUES("Gabriel","Garcia Marquez");

SELECT * FROM authors;
