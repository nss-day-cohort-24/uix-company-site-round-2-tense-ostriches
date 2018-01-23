
function BookOrder() {

/* BOOK ORDERS */
    
/* FIRST PRODUCT */

        
    product1 = document.books.oneQuantity.value;
    itemN1 = product1 * 25.19;
    document.books.firstTotal.value = itemN1.toFixed(2);
    
/* FIRST PRODUCT */
    product2 = document.books.twoQuantity.value;
    itemN2 = product2 * 32.25;
    document.books.secondTotal.value = itemN2.toFixed(2);

/* FIRST PRODUCT */
    productName3 = document.books.threeQuantity.value;
    itemN3 = productName3 * 6.70;
    document.books.thirdTotal.value = itemN3.toFixed(2);
            
/* CALCULATIONS */
    
/* SUB-TOTAL */

    // document.books.subTotal.value = qtyTotal.toFixed(2);
    

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
subTotal = firstTotal + secondTotal + thirdTotal;
        document.books.subTotal.value = TotalPrice.toFixed(2);
        }