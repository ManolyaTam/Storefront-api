CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users (firstName, lastName, password) VALUES
('Ahmad', 'Muhsen', '$2b$10$abcdefghijklmnopqrstuv'), 
('Lorem', 'Ipsum', '$2b$10$1234567890abcdefghijklmn'),
('Dude', 'Who', '$2b$10$zyxwvutsrqponmlkjihgfedc');
