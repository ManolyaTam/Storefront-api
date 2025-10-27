CREATE TABLE order_products (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id),
    product_id INT REFERENCES products(id),
    quantity INT NOT NULL
);

INSERT INTO order_products (order_id, product_id, quantity) VALUES
-- Order 1
(1, 1, 2),
(1, 5, 1),
(1, 7, 3),
-- Order 2
(2, 2, 1),
(2, 6, 2),
-- Order 3
(3, 3, 1),
(3, 4, 2),
-- Order 4
(4, 1, 1),
(4, 8, 1),
(4, 12, 2),
-- Order 5
(5, 2, 2),
(5, 9, 1),
-- Order 6
(6, 10, 1),
(6, 11, 2),
-- Order 7
(7, 3, 1),
(7, 5, 1),
-- Order 8
(8, 6, 1),
(8, 7, 2),
-- Order 9
(9, 4, 3),
(9, 8, 1),
-- Order 10
(10, 1, 2),
(10, 12, 1),
-- Order 11
(11, 13, 1),
(11, 14, 1),
-- Order 12
(12, 2, 2),
(12, 3, 1),
-- Order 13
(13, 5, 2),
(13, 6, 1),
-- Order 14
(14, 7, 2),
(14, 8, 1),
-- Order 15
(15, 9, 1),
(15, 10, 3),
-- Order 16 (active)
(16, 1, 1),
(16, 2, 2),
-- Order 17 (active)
(17, 3, 1),
(17, 4, 2),
-- Order 18 (active)
(18, 5, 1),
(18, 6, 1),
-- Order 19 (active)
(19, 7, 2),
(19, 8, 1),
-- Order 20 (active)
(20, 9, 1),
(20, 10, 2);

SELECT setval('order_products_id_seq', (SELECT MAX(id) FROM order_products));
