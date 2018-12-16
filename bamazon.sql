DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INTEGER(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    dept_name VARCHAR(50),
    price DECIMAL(12,2) NOT NULL,
    stock_quantity INTEGER(10)
);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES 
("Coffee Mug", "Home", 9.99, 19),
("Throw Pillow", "Home", 12.99, 5),
("Smart Watch", "Electronics", 199.99, 6),
("Wireless Earphones", "Electronics", 49.99, 13),
("Sweatshirt", "Clothing", 29.99, 15),
("Yoga Pants", "Clothing", 24.99, 12),
("Highlighter", "Office", 3.99, 14),
("Sticky Notes", "Office", 4.99, 8),
("Lip Balm", "Health", 1.99, 4),
("B-12 Vitamins", "Health", 5.99, 18);

SELECT * FROM products;)