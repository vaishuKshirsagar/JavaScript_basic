var User = {
    names: "",
    getUserName: function() {
        console.log(`user name is: ${this.name}`);
    },
};

var vaishnavi = Object.create(User)
console.log(vaishnavi);

vaishnavi.name="Vaishnavi Kshirsagar";
vaishnavi.getUserName();

var sam = Object.create(User, {
    name: {value:"Sammy"},
    courseCount:{value: 3},
});