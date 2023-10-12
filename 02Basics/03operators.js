console.log("<------1st Example------>");
var num1 = 7;
var num2 = 6;

console.log(num1 * num2);

var answer = num1 > num2;

console.log(answer);

//Ex of discount
console.log("<------2nd Example------>");
var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice-sellingPrice)/listingPrice)*100;
console.log("Discount is : " +discountPercent);

displayDiscount = Math.round(discountPercent);
console.log(displayDiscount + "% off");

var result = listingPrice > sellingPrice;
console.log(typeof result);