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

