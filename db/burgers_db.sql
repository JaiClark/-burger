### Schema

CREATE DATABASE burgers_db;

USE burgers_db;


CREATE TABLE recipes
(
	burger_name VARCHAR (255) NOT NULL,
	devoured BOOLEAN NOT NULL
);

SELECT * FROM recipes;