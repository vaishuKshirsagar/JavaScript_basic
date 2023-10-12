function init(){ 
    var firstName = "Vaishnavi" 
    function sayName(){
        console.log(firstName);
    }
    return sayName; //Passing reference of the method
}

var value = init();

value();

function doAddiition(x){
    return function(y){
        return x+y;
    }
}

var adding = doAddiition(4);
console.log(adding(5));

console.log(doAddiition(8)(6)); //This is possible because of the closure property of js
//doAddition()()()  //curring : It is just like closure