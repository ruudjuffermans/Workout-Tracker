-- Create the `exercises` table to store information about exercises
CREATE TABLE exercise (
    id SERIAL PRIMARY KEY,                -- Unique identifier for each exercise
    name VARCHAR(100) NOT NULL,           -- Name of the exercise
    description TEXT,                     -- Optional description of the exercise
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP -- Exercise creation timestamp
);

-- Create the `workouts` table to store workout sessions
CREATE TABLE workout (
    id SERIAL PRIMARY KEY,                -- Unique identifier for each workout
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, -- User who performed the workout
    workout_date DATE NOT NULL,           -- Date of the workout
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP -- Workout creation timestamp
);

-- Create the `sets` table to store sets of exercises performed in each workout
CREATE TABLE set (
    id SERIAL PRIMARY KEY,                -- Unique identifier for each set
    workout_id INTEGER REFERENCES workout(id) ON DELETE CASCADE, -- The workout this set belongs to
    exercise_id INTEGER REFERENCES exercise(id) ON DELETE CASCADE, -- The exercise performed
    reps INTEGER NOT NULL,                -- Number of repetitions
    weight DECIMAL(10, 2),                -- Weight used in the exercise (optional)
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP -- Set creation timestamp
);

-- Create indexes for faster query performance
CREATE INDEX idx_user_id ON workout(user_id);
CREATE INDEX idx_workout_id ON set(workout_id);
CREATE INDEX idx_exercise_id ON set(exercise_id);
