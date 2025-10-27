CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users (id, firstName, lastName, password) VALUES
(1, 'Ahmad', 'Muhsen', '$2b$10$abcdefghijklmnopqrstuv'), 
(2, 'Lorem', 'Ipsum', '$2b$10$1234567890abcdefghijklmn'),
(3, 'Dude', 'Who', '$2b$10$zyxwvutsrqponmlkjihgfedc'),
(4, 'Sameer', 'Who', '$2b$10$zyxwvutsrqponmlkjihgfedc'),
(5, 'Who', 'Him', '$2b$10$zyxwvutsrqponmlkjihgfedc');
