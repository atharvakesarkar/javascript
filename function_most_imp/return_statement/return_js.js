// function sum(a , b){
//     return a+b
// };


// let part = sum(3,4);
// console.log(part); //in js , a function's return statement sends value back to where the funciton was called, but it doesn't display it or returned the value, you typically  store it in a variable and then use console.log() or any other output method to display it


// calulating 3 number sum

function sum(a , b){

    return a+b
};

let soln = sum(sum(10,10),3);
console.log(soln);