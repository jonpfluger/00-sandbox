USE pokemon_db;

INSERT INTO Trainers (name, age, numBadges, createdAt, updatedAt) VALUES
  ('Josh', 34, 10, NOW(), NOW()),
  ('Lindsay', 37, 10, NOW(), NOW()),
  ('Max', 33, 100, NOW(), NOW());

INSERT INTO Pokemon (name, type, isEvolved, trainerId, createdAt, updatedAt) VALUES
  ('Pikachu', 'electric', false, 1, NOW(), NOW()),
  ('Raichu', 'electric', true, 1, NOW(), NOW()),
  ('JigglyPuff', 'fairy', false, 1, NOW(), NOW()),
  ('Onyx', 'rock', false, 2, NOW(), NOW()),
  ('Mewtwo', 'psychic', false, 3, NOW(), NOW()),
  ('Dewgong', 'dragon', false, 2, NOW(), NOW());

INSERT INTO TrainerLicenses (number, trainerId, createdAt, updatedAt) VALUES
  ("89asdf212", 1, NOW(), NOW()),
  ("89adsf123", 2, NOW(), NOW()),
  ("89fe2e234", 3, NOW(), NOW());