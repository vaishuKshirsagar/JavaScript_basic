function getuserRole(name, role){
    switch(role){
        case "admin":
            return `${name} is admin with all access`
            break;
        case "testprep":
            return `${name} is testprep with access to create and delete test`
            break;
        case "user":
            return `${name} is user with access to content`
            break;
        default:
            return `${name} is trial user `
            break;
    }
}

console.log(getuserRole("Vaishnavi","admin"));