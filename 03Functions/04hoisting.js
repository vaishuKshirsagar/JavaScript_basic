//Execution context - Variable object, Scope Chain, this keyword
//Function declaration are scanned and made available
//Variable declartion are scanned and made undefined
console.log("<--------Example1-------->");
function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 5);
}

tipper("80");

//bigTipper("200") if function is called before defining as variable will undefined
var bigTipper  = function(a){
    var bill = parseInt(a);
    console.log(bill + 15);
};
bigTipper("200");

console.log("<--------Example2-------->");
console.log(name1);
var name1 = "hitesh";

function sayName(){
    var name1="Mr.h";
    console.log(name1);
}

sayName();

console.log(name1);