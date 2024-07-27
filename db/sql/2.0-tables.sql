CREATE TABLE Workout (
    WorkoutID INT PRIMARY KEY,
    Date DATE NOT NULL,
    Description TEXT
);

CREATE TABLE Exercise (
    ExerciseID INT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL
);

CREATE TYPE reps AS ENUM ('5', '10', '15', '20', '25');
CREATE TYPE sets AS ENUM ('1', '2', '3', '4', '5');

CREATE TABLE WorkoutItem (
    WorkoutItemID SERIAL PRIMARY KEY,
    WorkoutID INT,
    ExerciseID INT,
    Reps reps NOT NULL,
    Sets sets NOT NULL,
    FOREIGN KEY (WorkoutID) REFERENCES Workout(WorkoutID),
    FOREIGN KEY (ExerciseID) REFERENCES Exercise(ExerciseID)
);
