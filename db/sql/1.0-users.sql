-- Create the `users` table to store user information
CREATE TABLE users (
    id SERIAL PRIMARY KEY,                -- Unique identifier for each user
    username VARCHAR(50) NOT NULL UNIQUE, -- Unique username for login
    email VARCHAR(100) NOT NULL UNIQUE,   -- Unique email address
    password_hash VARCHAR(255) NOT NULL,  -- Hashed password for security
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP -- Account creation timestamp
);