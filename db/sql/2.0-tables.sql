CREATE TABLE workout (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE exercise (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TYPE reps AS ENUM ('5', '10', '15', '20', '25');
CREATE TYPE sets AS ENUM ('1', '2', '3', '4', '5');

CREATE TABLE workout_item (
    id SERIAL PRIMARY KEY,
    workout_id SERIAL,
    exercise_id SERIAL,
    reps reps NOT NULL,
    sets sets NOT NULL,
    FOREIGN KEY (workout_id) REFERENCES workout(id),
    FOREIGN KEY (exercise_id) REFERENCES exercise(id)
);
