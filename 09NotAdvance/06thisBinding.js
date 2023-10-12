const vaish= {
    firstName: "Vaishnavi",
    lastName: "Kshirsagar",
    role: "Admin",
    courseCount: 3,
    getInfo: function () {
        console.log(`
        First Name is ${this.firstName}
        LastName is ${this.lastName}
        His role is ${this.role}
        and studying ${this.courseCount} courses
        `);
    },
};

const dj= {
    firstName: "Dwayne",
    lastName: "Johnson",
    role: "Sub-Admin",
    courseCount: 3,
};

// Vaish.getInfo();

//vaish.getInfo.bind(dj)(); Or 
var rock = vaish.getInfo.bind(dj); 
rock();
//bind() gives the reference back 


// vaish.getInfo.call(dj); 
//call() will directly call the object function 