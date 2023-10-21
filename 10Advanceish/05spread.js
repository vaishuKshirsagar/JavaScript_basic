// var returnValue = Math.max(2, 5, 7, 1, 3, 8);
// console.log(returnValue);

// var myObj = {};

// Object.assign(myObj, {a:1, b:2, c:3 }, {z:9, y:8, x:7 });
// console.log(myObj);

function sumOne(a, b){
    return a+b;
}

var myArr = [2, 3];
console.log(sumOne(...myArr)); // Spread operator: It takes the group of values and spread it into multiple values

function sumTwo(a, b, ...args){ //rest operator
    console.log(args);
    let multi = a*b;
    let sum = 0;
    for(const arg of args){
        sum += arg;
    }
    return [sum, multi];
}

console.log(sumTwo(3, 4, 1, 1, 1));