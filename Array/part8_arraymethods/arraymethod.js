
// ---------------------------------for each - it is used to pass the funciton tht will run on each element of the array---------------------------------

// let myarr = [10, 20, 30, 40, 50];

// function print(el) {
//   console.log(el * el);
// }

// myarr.forEach(print);
// console.log(myarr);

//-___________________________________________________________

// myarr.forEach(function (el) {
//   console.log(el);
// });

// ___________________________________________________________
//---------------------------------------we can also do it for object-----------------------------------------

// let student = [
//   {
//     name: "Atharva",
//     marks: 89,
//   },
//   {
//     name: "Krutika",
//     marks: 98,
//   },
//   {
//     name: "Ishwari",
//     marks: 99,
//   },
// ];

// console.log(student);

// student.forEach((student_details) => {
//   console.log(student_details.name);
// });


//-----------------------------------------------------------------------------------------------------------------
// map function - it is a transformer it takes the exisiting array  , runs a function every iteam and collect result into a new array of the exact same length

// let arr = [1, 2, 3, 4, 5];

// let double = arr.map((el) => {});

// console.log(double);

// _____________________________________________________
// -----------------------------------------------------data from line no 22 , student array is used-----------------------------------------------------
// let gpa = student.map((mark) => {
//   return mark.marks / 10;
// });

// console.log(gpa);

// -------------------------------------------------------------------------------------------------------------------
// filter - create a new array filled by the elemetnt that pass a test provided by a function it acts as a gatekepper for your data

// let myarr2 = [2, 4, 10, 34, 67, 23];

// let even = myarr2.filter((el) => {
//   return el % 2 == 0;
// });

// console.log(even);

//-------------------------------------------------------------------------------------------------------------------
// Every - the method checks if every single element in array passes the test , if all the element are true it will give all the true values and even if one value is false all the false element are stored

// let arr = [10, 20, 30, 40, 50, 60];

// let newarr = arr.every((el) => {
//   return el % 2 == 0;
// });

// console.log(newarr);

//---------------------------------------------------------------------------------------------------------
// some - if even one element passes your test , the where thing evaluated to true if every single one fails it evaluates false

// let myarr3 = [15, 20, 30, 40, 50, 35];

// let even = myarr3.some((el) => {
//   return el % 2 == 0;
// });

// console.log(even);

//-------------------------------------------------------------------------------------------------------------

// reduce - it makes the array in single value

// let arr = [1, 2, 3, 4, 5];

// let myarr = arr.reduce((res, el) => res + el);

// console.log(myarr);

//--------------------------------------------------------------------------------------------------
// Write a program for the getting maximum number from array using reduce method

// let myarr4 = [1,2,3,1]

// let max = myarr4.reduce( (max , el) => {
//     if (max > el){
//         return max;
//     } else {
//         return el;
//     }

// })


// console.log(max);

// --------------------------------------------------------------------------------------------------------
// ------------------------------------ default parameters in function ------------------------------------ 

function sum (a , b = 10) {
    return a + b;
}

// console.log(sum(10)); //for b default parameter is use

    function sum2( a = 2, b) {
        return a + b;
    }

    // console.log(sum2(2)); //output - NAN :Always place default parameter at the end , becasue missing arguments are assigned from left to right..Which can cause undefined values if defaults come first 


// --------------------------------------------------------------------------------------------------------------
// -------------------------------------------------spread method-------------------------------------------------

let array = [1,2,3,5,6,7,35,2,53];

// console.log(Math.min(...array));


// -------------------------------------------spread method on literals-------------------------------------------

let name = "Atharvakesarkar";
let chars = [...name]; 
// console.log(chars);

let odd = [1,3,5,7,9];
let even = [2,4,6,8,0];

let nums = [...odd , ...even];
// console.log(nums);

// ---------------------------------------spread method for object literals---------------------------------------

let data = {
    name : "Atharva",
    contactno : 9820919318,
    email : "kesarkaratharva@gmail.com",
    password : "Athu2410"
}


let datacopy = {...data, id : 123};
// console.log(datacopy);

// ---------------------------we can also use the same to convert array into the object--------------------------- 

let arrnew = [10,20,30,40,50,60,70];

let newobj = {...arrnew}; //it will consider array indexing as the property key     
// console.log(newobj);

// --------------------------------------------------------------------------------------------------------------
// ---------------------------------------------IMPORTANT - Arguments---------------------------------------------

// definaiton - it is a build-in object avaliable inside every non_arrow funciton that contains the values passed to the funciton

// it is array like (has index and length method) but nor really array.....
function test() {
    console.log(arguments); //it stores all the values passed to the function 
}

test(1,2,4,55);

// ----------------------------------------------------------------------------------------------------------------
// --------------------------------------------------rest method--------------------------------------------------

// defination -  
function sum (...args)  {
    return args.reduce((arg , el) => {
        return arg + el;
    });
};

let result = sum(1,2,3,4,4,4,5,6,7,8,9,);
console.log(result);

