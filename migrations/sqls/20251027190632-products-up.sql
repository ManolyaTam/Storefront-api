CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10,2) NOT NULL
);

INSERT INTO products (id, name, price) VALUES
(1, 'Laptop', 1200.00),
(2, 'Headphones', 150.50),
(3, 'Keyboard', 75.00),
(4, 'Mouse', 45.25),
(5, 'Mechanical Keyboard', 120.00),
(6, 'Ergonomic Mouse', 60.00),
(7, '27-inch Monitor', 300.00),
(8, 'Laptop Stand', 40.00),
(9, 'USB-C Hub', 35.00),
(10, 'Noise-Cancelling Headphones', 150.00),
(11, 'Webcam', 80.00),
(12, 'Laptop Backpack', 70.00),
(13, 'Programming Book: JavaScript', 30.00),
(14, 'Programming Book: Python', 32.00);
