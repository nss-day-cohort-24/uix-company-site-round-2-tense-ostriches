
function product(n, d, p, u, img, scroll){

	this.name = n;
	this.description = d;
	this.price = p;
	this.url = u;
	this.img = img;
	this.scroll = scroll;
}


var shopping_stack = document.createElement("button");

// Container of products
let productArr = [

	new product("Chef Hat","Chef Hat is a farm to table ingredient and recipe delivery service that helps chefs of all levels cook incredible meals at home.",35,"www.google.com/image/igotthissomewhere", "images/box_food_service.jpg", "nav-pages/product-detail.html#product-item-01"),
	new product("Elder"," Need  someone to buying groceries, asking basic health check questions, or simply hanging out? Checkout our solution.",44,"www.google.com/image/igotthissomewhere", "images/elderly_lady_visited_by_girl_service.jpg", "nav-pages/product-detail.html#product-item-02"),
	new product("Fitbit Charge 2","Track heart rate continuously on your wrist to maximize workouts, better track calorie burn and get a clearer picture of your health—all without an uncomfortable chest strap.",18,"www.google.com/image/igotthissomewhere", "images/fitbit_charge_2.jpg", "nav-pages/product-detail.html#product-item-03"),
	new product("Private Trainer","Need unbiased help on your physical condition? Try our professional trainers for the input you need.",33,"www.google.com/image/igotthissomewhere", "images/older_man_free_weight.jpg", "nav-pages/product-detail.html#product-item-04"),
	new product("Relax Alot","Need a moment? Go ahead and wear this pair of natural massage shoes several times a day to stimulate your tired feet and relieves aches and pains. ",9,"www.google.com/image/igotthissomewhere", "images/massage_shoes.jpg", "nav-pages/product-detail.html#product-item-05"),
	new product("Life Alert","Life Alert ® is a medical alert system specifically designed to protect seniors and all family members in a home health emergency.",99,"www.google.com/image/igotthissomewhere", "images/lifealert.png", "nav-pages/product-detail.html#product-item-06"),
	new product("Fit-U Calendar","Try our fabulous calendar!",5,"www.google.com/image/igotthissomewhere", "images/calendar.jpg", "nav-pages/product-detail.html#product-item-07"),
	new product("Jumprope","This jumprope can help you get a fabulous burn.",22,"www.google.com/image/igotthissomewhere", "images/jumprope.jpg", "nav-pages/product-detail.html#product-item-08")
];

// Form that holds the products to be populated on the page
var form_product = "";

// Loop that will iterate through the products array, using each product property to fill in the form.
for(let i = 0; i < productArr.length;i++){

	form_product += `<div class="product-item-0${i+1}">
	<a href="${productArr[i].scroll}">
		<img src="${productArr[i].img}">
	</a> 
	<h3>${productArr[i].name}</h3>
	<h4>$${productArr[i].price}.99</h4>
	<div class="shoppingcartbutton">
		<a href="nav-pages/contact.html" class="shoppingcartbutton" role="button"></a>
	</div>
	</div>`;
}

var elements = document.getElementsByClassName("product_blocks")[0];
// console.log(elements);
// var pointsofentry = elements[0];

// console.log(pointsofentry);
elements.innerHTML += form_product;

