// The idea for this is to have the click of whatever button to send a value to refer to whatever product, that could be displayed.

//A button for adding to the shopping cart

var shopping_stack = document.createElement("button");

// Outline of object of each product.
var product = { name: "", description: "", price: 0, url: "", src: ""};

// Container of products
var products = [];

//Push all products into the array
products.push = new product("product_1","This product is great!",0,"www.google.com/image/igotthissomewhere", "product1.html");
products.push = new product("product_2","This product is great!",0,"www.google.com/image/igotthissomewhere", "product2.html");
products.push = new product("product_3","This product is great!",0,"www.google.com/image/igotthissomewhere", "product3.html");
products.push = new product("product_4","This product is great!",0,"www.google.com/image/igotthissomewhere", "product4.html");
products.push = new product("product_5","This product is great!",0,"www.google.com/image/igotthissomewhere", "product4.html");
products.push = new product("product_6","This product is great!",0,"www.google.com/image/igotthissomewhere", "product5.html");
products.push = new product("product_7","This product is great!",0,"www.google.com/image/igotthissomewhere", "product6.html");
products.push = new product("product_8","This product is great!",0,"www.google.com/image/igotthissomewhere", "product7.html");
products.push = new product("product_9","This product is great!",0,"www.google.com/image/igotthissomewhere", "product8.html");


products.findIndex
// Form that holds the products to be populated on the page
var form_product;