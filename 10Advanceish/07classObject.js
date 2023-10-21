// import User from "./06classe" //Not used

const User = require("./06class.js");

const vaishnavi = new User("Vaishnavi", "vaish@dev.com");
console.log(vaishnavi.getInfo());

vaishnavi.enrollCourse("React");
vaishnavi.enrollCourse("Angular");

console.log(vaishnavi.getCourse());

let courses = vaishnavi.getCourse();
courses.forEach((c) => console.log(c));
