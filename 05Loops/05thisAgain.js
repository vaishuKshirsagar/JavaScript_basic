//For all regular function call, this points to window object
console.log(this);

var user={
    fName: "Vaish",
    courseCount: 4,
    getCourseCount: function(){
        console.log("Line no 7", this);
        function sayHello(){
            console.log("Line 10", this);
        }
        sayHello();
    },
};

user.getCourseCount();
