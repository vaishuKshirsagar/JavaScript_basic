var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is : ${this.courseCount}`);
    };
};

User.prototype.getFirstname = function(){
    console.log(`Your first name is : ${this.firstName}`);
};

var vaishnavi =new User("Vaishnavi", 2);
vaishnavi.getCourseCount();
if(vaishnavi.hasOwnProperty("firstName")){
    vaishnavi.getFirstname();
}
//vaishnavi.getFirstname();
//console.log(vaishnavi);

var sam = new User("Sam", 3);
sam.getCourseCount();
sam.getFirstname();

