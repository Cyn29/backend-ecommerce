CREATE DATABASE products_app;
USE products_app;
CREATE TABLE products(
product_id int AUTO_INCREMENT PRIMARY KEY,
title varchar(50) NOT NULL,
product_description text(300) NOT NULL,
price int NOT NULL,
category_id int NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (category_id) REFERENCES categories(category_id)
);
INSERT INTO products(title, product_description, price, category_id)
VALUES ("Trainers", "Trainers for running", 70, 1),
("Shoes", "Shoes for party", 100, 2),
("Footing", "Trainers for practise footing", 80, 3);

INSERT INTO products(title, product_description, price)
VALUES ("Trainers", "Trainers for running", 70);

SELECT * FROM products;

SELECT p.title, p.price, c.category_id, c.brand
FROM products as p INNER JOIN categories as c
ON p.category_id = c.category_id;