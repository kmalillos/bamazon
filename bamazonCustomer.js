var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

var table = new Table({
  head: ["Item ID", "Product Name", "Department", "Price", "Stock Quantity"]
  , colWidths: [10, 25, 25, 18, 18]
});

// var orderID=0;
// var orderQuantity=0;

// =================================================================================================================================
// FUNCTIONS
// =================================================================================================================================

function displayProducts() {

  console.log(`\n*************************************************************************************************\n`);
  console.log(`   Welcome to BAMAZON CLI STORE! Please browse products below...`);
  console.log(`\n*************************************************************************************************\n`);

  connection.query("SELECT * FROM products", function (err, res) {

    for (var i = 0; i < res.length; i++) {
      table.push(
        [res[i].item_id, res[i].product_name, res[i].dept_name, "$" + res[i].price, res[i].stock_quantity + " units"]
      );
    }

    console.log(table.toString());

    console.log(`\n*************************************************************************************************\n`);

    orderProducts();

  });

};

function orderProducts() {

  inquirer
    .prompt([{
      name: "itemID",
      type: "input",
      message: "What is the Item ID of product you wish to purchase?",
    }
      , {
      name: "quantity",
      type: "input",
      message: "How many units of this product would you like to order?"
    }
    ])
    .then(function (answer) {

      var query = "SELECT * FROM products WHERE ?";
      connection.query(query, { item_id: answer.itemID }, function (err, res) {
        
        // update global variables to used in updateProducts function
        // orderID = answer.itemID;
        // orderQuantity = answer.quantity;

        // console.log(res);
        var product = res[0].product_name;
        var productPrice = res[0].price;
        var stockQuantity = res[0].stock_quantity;
        var total = (productPrice * answer.quantity).toFixed(2);
        var updatedQuantity = stockQuantity - answer.quantity;

        if (answer.quantity <= stockQuantity) {
          
          console.log(`\n*************************************************************************************************\n`);
          console.log(`   YOUR ORDER:
        Product: ${product}
        Quantity: ${answer.quantity} 
        Price per unit: $${productPrice}`);

          console.log(`   -------------------------------------------`);
          console.log(`   YOUR TOTAL: $${total}`);
          console.log(`\n*************************************************************************************************\n`); 
        
          connection.query(`UPDATE products SET stock_quantity = ${updatedQuantity} WHERE item_id = ${answer.itemID}`, function(err, res){
          //   console.log(`\n*************************************************************************************************\n`);
          //   console.log(`   YOUR ORDER:
          // Product: ${product}
          // Quantity: ${answer.quantity} 
          // Price per unit: $${productPrice}`);
  
          //   console.log(`   -------------------------------------------`);
          //   console.log(`   YOUR TOTAL: $${total}`);
          //   console.log(`\n*************************************************************************************************\n`); 
          
          console.log(`Thank you for shopping!`)
          });

        } else {

          console.log(`\n*************************************************************************************************\n`);
            if (stockQuantity > 1) {
              console.log(`   Insufficient quantity! There are currently ${stockQuantity} units of ${product} in stock.`)
            } else {
              console.log(`   Insufficient quantity! There is currently ${stockQuantity} unit of ${product} in stock.`)
            }
          console.log(`\n*************************************************************************************************\n`);

        }

        connection.end();
      });
    });

};


// =================================================================================================================================
// MAIN PROCESS
// =================================================================================================================================

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  displayProducts();
});