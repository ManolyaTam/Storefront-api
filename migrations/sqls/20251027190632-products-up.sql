CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10,2) NOT NULL
);

INSERT INTO products (name, price) VALUES
('Laptop', 1200.00),
('Headphones', 150.50),
('Keyboard', 75.00),
('Mouse', 45.25);
