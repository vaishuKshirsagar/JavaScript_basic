var testArray=[2, 4, 6, 3, 1, 5, 9, 8];
console.log(testArray.fill("h", 2, 5));

const myNum = [23, 67, 21, 65, 89, 13];
const res= myNum.filter((num)=> num!=21);
console.log(res);

var users =["Ted", "Marshall", "Barney", "Robin", "Lily"];
console.log(users.slice(1, 3));
//Start pos is inclusive and last is exclusive

users.splice(1, 2, "Joey");
console.log(users);