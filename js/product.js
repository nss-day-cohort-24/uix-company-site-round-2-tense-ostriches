
function product(n, d, p, u, img){

	this.name = n;
	this.description = d;
	this.price = p;
	this.url = u;
	this.img = img;
}


var shopping_stack = document.createElement("button");


//Push all products into the array
// Container of products
let productArr = [

	new product("Blue Apron","This product is great!",35,"www.google.com/image/igotthissomewhere", "images/box_food_service.jpg"),
	new product("Elder","This product is great!",44,"www.google.com/image/igotthissomewhere", "images/elderly_lady_visited_by_girl_service.jpg"),
	new product("Fitbit Charge 2","This product is great!",18,"www.google.com/image/igotthissomewhere", "images/fitbit_charge_2.jpg"),
	new product("Private Trainer","This product is great!",33,"www.google.com/image/igotthissomewhere", "images/older_man_free_weight.jpg"),
	new product("Relax Alot","This product is great!",9,"www.google.com/image/igotthissomewhere", "images/massage_shoes.jpg"),
	new product("Life Alert","This product is great!",99,"www.google.com/image/igotthissomewhere", "images/lifealert.png"),
	new product("Customizable Calendar","This product is great!",5,"www.google.com/image/igotthissomewhere", "images/calendar.jpg"),
	new product("Jumprope","This product is great!",22,"www.google.com/image/igotthissomewhere", "images/jumprope.jpg")
];


// Form that holds the products to be populated on the page
var form_product;

// var product_quick_view_container;
// var product_slider_wrapper;
//Put code here to target the div entry point... document.getElementsByClassName


//var product_container = document.createElement("ul");//Start of the container
//var element = document.getElementById("product_id");

var product_container = "<div>";

// Loop that will iterate through the products array, using each product property to fill in the form.
for(let i = 0; i < productArr.length;i++){

	form_product += `<section class="product-item">
	<a href=>
	<img src="${productArr[i].img}">
		</a> 
	<h3>${productArr[i].name}</h3>
	<h4>${productArr[i].description}  </br>  ${productArr[i].price}</h4>
	<div class="shoppingcartbutton">
	<a href="####FOR SHOPPING CART PAGE####.com" class="shoppingcartbutton" role="button"></a>
		</div>
	</section>`;
 
	
}

//product_container.appendChild(form_product);
product_container += form_product + "</div>";

//element.appendChild(product_container);
document.getElementById("product_id").innerHTML += product_container;



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
