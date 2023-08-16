DROP DATABASE IF EXISTS pets_db;
CREATE DATABASE pets_db;

USE pets_db;

CREATE TABLE pets (
  id INT,
  name VARCHAR(150),
  age INT,
  type VARCHAR(100)
  -- owner_id INT
);

CREATE TABLE owners (
  id INT,
  name VARCHAR(150)
  -- pet_id INT
);

-- INSERT INTO pets (name, age, type)
-- VALUES ("Jables", 11, "cat");

-- INSERT INTO pets (name, age, type)
-- VALUES ("Smokey", 12, "cat");

-- INSERT INTO pets (name, age, type)
-- VALUES ("Bandit", 12, "cat");

INSERT INTO pets (name, age, type) VALUES
  ("Jables", 11, "cat"),
  ("Smokey", 12, "cat"),
  ("Bandit", 12, "cat");

INSERT INTO owners (name) VALUES
  ("Jon"),
  ("Kate"),
  ("Kate2");

-- SELECT name, age FROM pets;

SELECT * FROM pets;
SELECT * FROM owners;