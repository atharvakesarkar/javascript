// q1. write a javascript function that returns elements larger thana number

// myarr = [10, 20, 30, 40, 50, 60];

// // console.log(typeof myarr);
// // console.log(myarr.length);

// let app = function (num) {
//   let result = [];
//   for (let i = 0; i < myarr.length; i++) {
//     //   console.log(myarr[i]);

//     if (myarr[i] > num) {
//       result.push(myarr[i]);
//     }
//   }
//   return result;
// };

// let num = Number(prompt("enter a number: "));
// console.log(app(num));

//---------------------------------------------------------------------------------------------------------------

//q2. write a javascript function  to extract unique characters from string
// example: str = "abcdabcdefgggh"
//          ans = "abcdefgh"

// // console.log(str[1]);

// function getunique(str) {
//   let unique = " ";

//   for (let i = 0; i < str.length; i++) {
//     if (!unique.includes(str[i])) {
//       unique += str[i];
//     }
//   }
//   return unique;
// }

// console.log(getunique("abcdabcdefgggh"));

//--------------------------------------------------------------------------------------------------------------

// q3. write a javascript function that accept a list of country names as input and return the longest country name as the ouput

// eg = input = ["austrila" , "india", "united states of america"]
//      output - "united states of america"

// let obj = ["America", "india", "united states of america"];

// function highest(obj) {
//   let longest = " ";

//   for (let i = 0; i < obj.length; i++) {
//     // console.log(obj[i]);
//     if (obj[i].length > longest.length) {
//       longest = obj[i];
//     }
//   }
//   return longest;
// }

// console.log(highest(obj));

//q4. write a javascript function to count  the number of vowels in string argument

let name = "Atharva kesarkar";

let count = "";

for (let i = 0; i < name.length; i++) {
  // console.log(name[i]);
}

let vowels = "aeiou";

for (let n = 0; n < vowels.length; n++) {
  console.log(vowels[n]);
}
