
function BookOrder() {

/* BOOK ORDERS */
    
/* FIRST PRODUCT */
    productName1 = document.books.oneQuantity.value;
    itemN1 = productName1 * 25.19;
    document.books.itemN1.value = itemN1.toFixed(2);
    
/* FIRST PRODUCT */
    productName2 = document.books.twoQuantity.value;
    itemN2 = productName2 * 32.25;
    document.books.itemN2.value = itemN2.toFixed(2);

/* FIRST PRODUCT */
    productName3 = document.books.threeQuantity.value;
    itemN3 = productName3 * 6.70;
    document.books.itemN3.value = itemN3.toFixed(2);

/* FIRST PRODUCT */	
    productName4 = document.books.fourQuantity.value;
    itemN4= productName4 * 14.99;
    document.books.itemN4.value = itemN4.toFixed(2);

/* FIRST PRODUCT */
    productName5 = document.books.fiveQuantity.value;
    itemN5=  productName5 * 30.00;
    document.books.itemN5.value = itemN5.toFixed(2);

/* FIRST PRODUCT */
    productName6 = document.books.sixQuantity.value;
    itemN6 =  productName6 * 11.94;
    document.books.itemN6.value = itemN6.toFixed(2);

            
/* CALCULATIONS */
    
/* SUB-TOTAL */
qtyTotal = itemN1 + itemN2 + itemN3 + itemN4 + itemN5 + itemN6;
    document.books.qtyTotal.value = qtyTotal.toFixed(2);
    

// /* S & H */
//     if ( SubTotal <= 10 ) 
//     {sH = 5;		}
//     else  {
//     sH = ( SubTotal * 0.035) + 5;	}
//     document.books.shipping.value = sH.toFixed(2);
                
                
// /* TAXES */
//     SalesTax = document.books.countyTax.value; 
//     CountyTax = SalesTax * SubTotal;
//     document.books.tax.value = CountyTax.toFixed(2);
    
/* GRAND-TOTAL */
        TotalPrice = qtyTotal;
        document.books.totalPrice.value = TotalPrice.toFixed(2);
        }