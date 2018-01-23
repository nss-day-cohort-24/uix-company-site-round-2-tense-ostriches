/*
function product(n, d, p, u){

	this.name = n;
	this.description = d;
	this.price = p;
	this.url = u;

}
*/

// A button for adding to the shopping cart

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

// Form that holds the products to be populated on the page
var form_product;
var product_slider_wrapper;
var product_container;
var product_quick_view_container;

//Put code here to target the div entry point... document.getElementsByClassName


product_container = document.createElement("ul");//Start of the container

// Loop that will iterate through the products array, using each product property to fill in the form.
for(var i = 0; i< products.length;i++){

form_product += `<li class="product-item"><a href="LINK HERE"> <img src= ${products[i].src}>,/a></br><h3>${products[i].name}</h3></br><h4>${products[i].description}</h4></br><h4>${products[i].price}</h4></br>
    <div class="shoppingcartbutton"><a href="#####.com" class="shoppingcartbutton" role="button"></a></div></li>`;
 
product_container.appendChild(form_product);
}

//var html += ''
/*
//---------product-quick-view-------//
product_quick_view_container = document.createElement("div"); // quick view wrapper
product_slider_wrapper = document.createElement("ul");


//Append to the div container an html string
product_quick_view_container += `<div class = "product-quick-view-container">`;
product_slider_wrapper  += `<ul class="product_slider_wrapper>`;

product_quick_view_container += product_slider_wrapper;


// Loop that will iterate through the products array, using each product property to fill in the form.
foreach(product in products){

    product_quick_view_container += `<li class="product-slider"> <img src= ${products[i].src}></br><h3>${products[i].name}</h3></br><h4>${products[i].description}</h4></br><h4>${products[i].price}</h4></br>
        </li>`;
     
    
    
}
product_quick_view_container += `</ul></div>`;


*/
