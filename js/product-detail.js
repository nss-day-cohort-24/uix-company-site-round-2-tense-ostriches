function product(n, d, p, u, img){

	this.name = n;
	this.description = d;
	this.price = p;
	this.url = u;
	this.img = img;
}


var shopping_stack = document.createElement("button"); // ---- Need to fix this!!


//Push all products into the array
// Container of products
let productArr = [

	new product("Blue Apron","Blue Apron is a fresh ingredient and recipe delivery service that helps chefs of all levels cook incredible meals at home.",35,"www.google.com/image/igotthissomewhere", "images/box_food_service.jpg"),
	new product("Elder"," Need  someone to buying groceries, asking basic health check questions, or simply hanging out? Checkout our solution.",44,"www.google.com/image/igotthissomewhere", "images/elderly_lady_visited_by_girl_service.jpg"),
	new product("Fitbit Charge 2","Track heart rate continuously on your wrist to maximize workouts, better track calorie burn and get a clearer picture of your health—all without an uncomfortable chest strap.",18,"www.google.com/image/igotthissomewhere", "images/fitbit_charge_2.jpg"),
	new product("Private Trainer","Need unbiased help on your physical condition? Try our professional trainers for the input you need.",33,"www.google.com/image/igotthissomewhere", "images/older_man_free_weight.jpg"),
	new product("Relax Alot","Need a moment? Go ahead and wear this pair of natural massage shoes several times a day to stimulate your tired feet and relieves aches and pains. ",9,"www.google.com/image/igotthissomewhere", "images/massage_shoes.jpg"),
	new product("Life Alert","This product is great!",99,"www.google.com/image/igotthissomewhere", "images/lifealert.png"),
	new product("Customizable Calendar","This product is great!",5,"www.google.com/image/igotthissomewhere", "images/calendar.jpg"),
	new product("Jumprope","This product is great!",22,"www.google.com/image/igotthissomewhere", "images/jumprope.jpg")
];

// Form that holds the products to be populated on the page
var form_product;

var product_container = "<div>";

// Loop that will iterate through the products array, using each product property to fill in the form.
for(let i = 0; i < productArr.length;i++){

	form_product += `<div class="product-div-${i}"> <section class="product-detail-item">
	<a href=>
	<img src="${productArr[i].img}">
		</a> 
	<h3>${productArr[i].name}</h3>
	<h4>${productArr[i].description}  </br>  ${productArr[i].price}</h4>
	<div class="shoppingcartbutton">
	<a href="####FOR SHOPPING CART PAGE####.com" class="shoppingcartbutton" role="button"></a>
		</div>
	</article>`;
 
	
}

//product_container.appendChild(form_product);
product_container += form_product + "</div>";

//element.appendChild(product_container);
document.getElementsByClassName("product-detail").innerHTML += product_container;

