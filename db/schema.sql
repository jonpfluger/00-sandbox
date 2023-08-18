DROP DATABASE IF EXISTS pokemon_sandbox_db;
CREATE DATABASE pokemon_sandbox_db;

USE pokemon_sandbox_db;

CREATE TABLE moves (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  hp INT NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE trainers (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  age INT,
  num_badges INT DEFAULT 0,
  date_added TIMESTAMP NOT NULL DEFAULT NOW(),
  PRIMARY KEY(id)
);

CREATE TABLE pokemon (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  type VARCHAR(30) NOT NULL,
  moves INT,
  is_evolved BOOLEAN DEFAULT 0,
  trainer_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY(moves) REFERENCES moves(id),
  FOREIGN KEY(trainer_id) REFERENCES trainers(id)
);