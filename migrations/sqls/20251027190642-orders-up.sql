CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    status VARCHAR(50) NOT NULL
);

INSERT INTO orders (id, user_id, status) VALUES
(1, 1, 'completed'),
(2, 2, 'completed'),
(3, 3, 'completed'),
(4, 4, 'completed'),
(5, 5, 'completed'),
(6, 1, 'completed'),
(7, 2, 'completed'),
(8, 3, 'completed'),
(9, 4, 'completed'),
(10, 5, 'completed'),
(11, 1, 'completed'),
(12, 2, 'completed'),
(13, 3, 'completed'),
(14, 4, 'completed'),
(15, 5, 'completed'),
(16, 1, 'active'),
(17, 2, 'active'),
(18, 3, 'active'),
(19, 4, 'active'),
(20, 5, 'active');

SELECT setval('orders_id_seq', (SELECT MAX(id) FROM orders), true);
