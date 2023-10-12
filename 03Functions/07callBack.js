//Arrow function
var isEven = (element) => {
    return element % 2 === 0;
};

// console.log(isEven(2));

//CallBack reference
var result =[2, 4, 6, 8].every(isEven); //pass On reference for function
console.log(result);

//Another method of callback
var result2 = [2, 4, 6, 8].every((e)=>(e%2==0));
console.log(result2);