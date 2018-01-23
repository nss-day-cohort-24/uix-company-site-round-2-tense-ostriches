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
products.push = new product("Blue Apron","This product is great!",35,"www.google.com/image/igotthissomewhere", "images/box_food_service.jpg");
products.push = new product("Elder","This product is great!",44,"www.google.com/image/igotthissomewhere", "images/elderly_lady_visited_by_girl_service.jpg");
products.push = new product("Fitbit Charge 2","This product is great!",18,"www.google.com/image/igotthissomewhere", "images/fitbit_charge_2.jpg");
products.push = new product("Private Trainer","This product is great!",33,"www.google.com/image/igotthissomewhere", "images/older_man_free_weight.jpg");
products.push = new product("Relax Alot","This product is great!",9,"www.google.com/image/igotthissomewhere", "images/massage_shoes.jpg");
products.push = new product("Life Alert","This product is great!",99,"www.google.com/image/igotthissomewhere", "images/lifealert.png");
products.push = new product("Customizable Calendar","This product is great!",5,"www.google.com/image/igotthissomewhere", "images/calendar.jpg");
products.push = new product("Jumprope","This product is great!",22,"www.google.com/image/igotthissomewhere", "images/jumprope.jpg");


// Form that holds the products to be populated on the page
var form_product;

// var product_quick_view_container;
// var product_slider_wrapper;
//Put code here to target the div entry point... document.getElementsByClassName


var product_container = document.createElement("ul");//Start of the container
var element = document.getElementById("product_id").innerHTML;

// Loop that will iterate through the products array, using each product property to fill in the form.
for(var i = 0; i< products.length;i++){

	form_product += `<li class="product-item"><a href="LINK HERE"> <img src="${products[i].src}"></a> </br><h3>${products[i].name}</h3></br> <h4>${products[i].description}</h4></br><h4>${products[i].price}</h4></br>
    <div class="shoppingcartbutton"><a href="####FOR SHOPPING CART PAGE####.com" class="shoppingcartbutton" role="button"></a></div></li>`;
 
	product_container.appendChild(form_product);
	element.appendChild(product_container);
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
