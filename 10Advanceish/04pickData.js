//Destructuring data: Destructuring makes it easy to extract only what is needed.

const user = ["vaishnavi", 3, "admin"];
// var role = user[2]
// var name = user[0]

var [uname, courseCount, role] = user;

console.log(role);

const myUser = {
    uName : "Vaishnavi",
    uCourseCount : 5,
    uRole : "Admin",
};

console.log(myUser.uCourseCount);

const {uName, uCourseCount, uRole}= myUser;
console.log(uRole);