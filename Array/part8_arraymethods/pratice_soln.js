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
// ---------square and sum the array elements using the arrow funciton and then find the average of array---------


let num = [2,4,6,8,10,12];

let square = num.map((el) => {
    return el * el;
});

let add = square.reduce((arg , el) => {
    return arg + el;
}, 0);

let avg = add / square.length;

// console.log(square);
// console.log(add);
// console.log(avg);

// ----------------------------------------------------------------------------------------------------------------
// ---------create a new array using the map funciotn whose elements is equal to the orginal input plus 5---------

let arr_ay = [2,4,6,8];

let new_Arr = arr_ay.map((el)=>{
    return el + 5;
});

// console.log(new_Arr);

// ----------------------------------------------------------------------------------------------------------------
// ---------create a new array whose elements are in the uppercase of words present in the orginal array--------- 

let str_arr = ["Atharva" , "niyati" , "shyam"];

let new_strarr = str_arr.map((el)=>{
    return el.toUpperCase();
});


// console.log(new_strarr);

//-----------------------------------------------------------------------------------------------------------------
// Write a funciton called doubleAndreturnArgs which accept an array and variable number of arguments the function should return a new array with the orginal array values and all additional arguments doubled

function doubleAndReturnArg(arr , ...args){
    let doubled = args.map(el => el * 2);
    
    return [...arr , ...doubled];
}

let num_arr = [2,4,6,8]

// console.log(doubleAndReturnArg(num_arr , 5, 10));

// ----------------------------------------------------------------------------------------------------------------
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of first object and second object


let stu_dent = {
	firstname : "Atharva",
	lastname : "Kesarkar",
	contactno : 9820919318
	}

let marks = {
	English : 25,
	maths : 24,
	history : 34
	}

function mergeObjects(stu_dent , marks)  {
	
let student_details = {...stu_dent , ...marks}
return student_details;
}

// console.log(mergeObjects(stu_dent , marks));
	
