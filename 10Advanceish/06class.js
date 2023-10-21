class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    #courseList = []; //When we access this it will give undefined because we made it private by assigning #

    getInfo(){
        return{name: this.name, email:this.email};
    }
    enrollCourse(name){
        this.#courseList.push(name)
    }
    getCourse(){
        return this.#courseList;
    }
    //static :Static keywork will make it private
    login(){ 
        return "You are logged in";
    }
} 

class SubAdmin extends User{
    constructor(name, email){
        super(name, email);
    }
    login(){
        return "Log in for subadmin"
    }
    getAdminInfo(){
        return "I am Subadmin";
    }
}


module.exports = User;

const rock = new User("rock", "rock@rock.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular");
console.log(rock.getCourse());
console.log(rock.courseList);

const tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());

console.log(tom.getInfo());
