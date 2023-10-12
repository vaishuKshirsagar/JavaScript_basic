var name2 = "Hitesh";

console.log("Line 3", name2);
function sayName(){
    // var name2="Mr. H";
    console.log("Line 6", name2);
    sayName2();

    function sayName2(){
        // var name2="Ms VK";
        console.log("Line no 11", name2)
    }
}

sayName();

