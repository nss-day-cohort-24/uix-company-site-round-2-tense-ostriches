
function ProductOrder() {
    
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
    
/* GRAND-TOTAL */
    subTotal = itemN1 + itemN2 + itemN3;
    document.books.TotalPrice.value = subTotal.toFixed(2);

}