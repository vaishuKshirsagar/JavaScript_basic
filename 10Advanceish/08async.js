//Event Loop
const uno = () => {
    console.log("I am One");
};
const dos = () => {
    setTimeout(()=> {
        console.log("Wohoo");
    }, 3000);
    console.log("I am Two");
};
const tres = () => {
    console.log("I am Three");
};
const cuatro = () => {
    console.log("I am Four");
};

uno();
dos();
tres();
cuatro();