CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    status VARCHAR(50) NOT NULL
);

INSERT INTO orders (user_id, status) VALUES
(1, 'active'),
(2, 'complete'),
(3, 'active');
