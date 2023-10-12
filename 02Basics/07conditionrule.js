var user = "testprep";

switch(user){
    case "admin":
        console.log("You get full permission");
        break;
    case "user":
        console.log("You get to consume");
        break;  
    case "testprep":
        console.log("You get to create delete prep");
        break;    
    default:
        console.log("Trail user");
        break;
}