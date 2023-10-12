var countries = ["India", "USA", "Japan", "Russia"];

var states = ["Maharashtra", "UttarPradesh", "Kerala", "Kashmir"];
console.log(states[1]);

console.log(states.length);
states[1]= "Punjab";
console.log(states);

var user = ["Vaishnavi", "vaishnavi02.dev", 3, 34, true];
console.log(user);

user.pop();
console.log(user);

user.unshift("New val");
console.log(user);

user.shift();
console.log(user);

console.log(user.indexOf("vaishnavi02.dev"));
console.log(Array.from("New val"));