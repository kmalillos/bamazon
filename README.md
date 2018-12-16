# Bamazon Node App

Bamazon is a command line input (CLI) store. Let's start shopping!

### **Full Demo:** [Link](https://youtu.be/K9wOeZBzJto)

## How It Works

Bamazon displays to the User products for sale. The User can then input the product and quantity of that product they want to purchase. 

![Image](https://github.com/kmalillos/bamazon/blob/master/assets/images/demo/1-demo-inquirer_cli.JPG)

If the User orders more items than stock quantity, the sale will not go through.

![Image](https://github.com/kmalillos/bamazon/blob/master/assets/images/demo/2-demo-insufficient_quantity.JPG)

If the User orders a product is in stock, Bamazon will display the User's order and total amount.

![Image](https://github.com/kmalillos/bamazon/blob/master/assets/images/demo/3-demo-order_total.JPG)

Note: When the User orders a product, the Bamazon products for sale updates. (Throw Pillows go from 5 units to 0 units.)

If the User orders a product out of stock, Bamazon lets the User know.

![Image](https://github.com/kmalillos/bamazon/blob/master/assets/images/demo/4-demo-out_stock.JPG)

The User can keep purchasing products as long as they are in stock.

![Image](https://github.com/kmalillos/bamazon/blob/master/assets/images/demo/5-demo-order_total_2.JPG)

Bamazon continues updating stock quantity after each sale.

![Image](https://github.com/kmalillos/bamazon/blob/master/assets/images/demo/6-demo-order_total_3.JPG)


**Full Demo:** [Link](https://youtu.be/K9wOeZBzJto)


## Developer Notes

### Tools Used:
* Node.js
* NPMs
    - mysql
    - inquirer
    - cli-table

### Node.js

### NPM's:

* 'package.json' was created using command 'npm init' to save all NPMs and dependencies.

* Then, all NPMs were installed using command 'npm install <npm package here>'.

* NPMs were accessed in JavaScript file with a "require" function.

* **mysql NPM**  ([Link](https://www.npmjs.com/package/mysql)) used to create a database and to store and update values. 

    ![Image](https://github.com/kmalillos/bamazon/blob/master/assets/images/code/1-code-mysql_1.JPG)

    ![Image](https://github.com/kmalillos/bamazon/blob/master/assets/images/code/2-code-mysql_2.JPG)
    
    ![Image](https://github.com/kmalillos/bamazon/blob/master/assets/images/code/3-code-mysql_3.JPG)

* **inquirer NPM**  ([Link](https://www.npmjs.com/package/inquirer)) 

    ![Image](https://github.com/kmalillos/bamazon/blob/master/assets/images/code/4-code-inquirer_1.JPG)

    ![Image](https://github.com/kmalillos/bamazon/blob/master/assets/images/code/5-code-inquirer_2.JPG)

* **cli-table NPM**  ([Link](https://www.npmjs.com/package/cli-table)) 

    ![Image](https://github.com/kmalillos/bamazon/blob/master/assets/images/code/6-code-cli_table.JPG)

## Contributor

### Kaylah Malillos

**About the Developer:** [Link](https://kmalillos.github.io/)


