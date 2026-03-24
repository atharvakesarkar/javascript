// for each - it is used to pass the funciton tht will run on each element of the array
// _____________________________________________________

let myarr = [10, 20, 30, 40, 50];

function print(el) {
  console.log(el * el);
}

myarr.forEach(print);
console.log(myarr);

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

// __________________________________________________________________

// map function -

let arr = [1, 2, 3, 4, 5];

arr.map((el) => {
  console.log(el);
});
