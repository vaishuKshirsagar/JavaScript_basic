//Promise : async keyword will give promise (Promises will have two states either it will be fullfilled or not)
//Wait : await keyword will be used to make other function wait until current function gets executed 
const uno = () => {
    return "I am One";
};
// const dos = () => { //async if used here it will give promise
//     setTimeout(()=> {
//         return "I am Two"
//     }, 3000);
// };

const dos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am Two");
        }, 3000);
    });
};

const tres = () => {
    return "I am Three";
};

const callMe = async () => { //async makes entire method asynchronous 
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
}

callMe();