INSERT INTO users (first_name, last_name, email, password) VALUES
('john', 'doe', 'john.doe@example.com', 'hashed_password_1'),
('jane', 'smith', 'jane.smith@example.com', 'hashed_password_2');

INSERT INTO workout (name, description) VALUES
('A', 'WORKOUT A'),
('B', 'WORKOUT B'),
('C', 'WORKOUT C');

INSERT INTO exercise (name, description) VALUES
('Bench Press', ''),
('Leg Extension', ''),
('Leg Curl', ''),
('Military Press', '');

INSERT INTO workout_item (workout_id, exercise_id, reps, sets) VALUES
(1, 1, '20', '3'), 
(1, 3, '15', '2'),
(2, 2, '10', '3');