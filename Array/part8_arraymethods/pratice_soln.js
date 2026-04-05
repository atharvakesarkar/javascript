// q1. check if a number in our array are multiple of 10 or not...

let arr = [10,20,30,40,34,56,78];

let divisible = arr.every((el) => { el % 2 ==0});

// console.log(divisible); //ouput - 4


// ----------------------------------------------------------------------------------------------------------------
// --------------------------- Create a function that finds the minmun number in array; ---------------------------

let myarr = [2,10,23,45,67,87];

let min_el = myarr.reduce((min , el) => {
    if(min < el){
        return min
    } else {
        return el;

    }
})

// console.log(min_el);

// ----------------------------------------------------------------------------------------------------------------
// square and sum the array elements using the arrow funciton and then find the average of array


let num = [2,4,6,8,10,12];

let square = num.map((el) => {
    return el * el;
});

let add = square.reduce((arg , el) => {
    return arg + el;
}, 0);

let avg = add / square.length;

console.log(square);
console.log(add);
console.log(avg);
