function init(){ //Shortcut for intialization
    var firstName = "Vaishnavi" //The scope of firstName will stay within the function
    function sayName(){
        console.log(firstName);
    }
    sayName();
}

init(); //init will come up on the global context then sayName will come up on executional context
//console.log(firstName); //Will throw an error