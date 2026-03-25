// for each - it is used to pass the funciton tht will run on each element of the array
// _____________________________________________________

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
//we can also do it for object

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

// // console.log(student);

// student.forEach((student_details) => {
//   console.log(student_details.name);
// });

//-----------------------------------------------------------------------------------------------------------------
// map function - it is a transformer it takes the exisiting array  , runs a function every iteam and collect result into a new array of the exact same length

// let arr = [1, 2, 3, 4, 5];

// let double = arr.map((el) => {});

// console.log(double);

// _____________________________________________________
// data from line no 22 , student array is used
// let gpa = student.map((mark) => {
//   return mark.marks / 10;
// });

// console.log(gpa);

// -------------------------------------------------------------------------------------------------------------------
// filter - create a new array filled by the elemetnt that pass a test provided by a function it acts as a gatekepper for your data

// let myarr = [2, 4, 10, 34, 67, 23];

// let even = myarr.filter((el) => {
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

// let myarr = [15, 20, 30, 40, 50, 35];

// let even = myarr.some((el) => {
//   return el % 2 == 0;
// });

// console.log(even);
