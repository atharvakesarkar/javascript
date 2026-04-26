// write a program to check wheter the number is positive , negative or zero
// let num = Number(prompt("enter a number : "));

// if (isNaN(num)){
//     console.log("invalid input")
// } else if (num < 0){
//     console.log("negative number");
// } else if (num > 0){
//     console.log("positive number");
// } else {
//     console.log("zero is the number");
// }


// ---------------------------------------------------------------------------------------------------------------
// write a program to find the largest of three number using nested if - else

// num1 = 10;
// num2 = 20;
// num3 = 40;

// let largest;

// if (num1 >= num2){
//     if (num2 >= num3){
//         largest = num1;
//     } else {
//         largest = num3;
//     }
// } else {
//     if (num2 >= num3){
//         largest = num2;
//     } else {
//         largest = num3;
//     }
// }

// console.log(largest);

// ----------------------------------------------------------------------------------------------------------------
// write a program to check whether a given number is leap year using proper conditions

// let year = Number(prompt("enter a year: "));


// if (isNaN(year)){
//     console.log("invalid input")
// } else if(year % 4 === 0 && year % 100 !== 0 || year % 400 == 0) {
//     console.log(year + " is a leap year");
    
// } else {
//     console.log(year + " is not a leap year");
// }


// ----------------------------------------------------------------------------------------------------------------
// write a program to takes the number (1 - 7) and prints the corresponding weekday using the switch-case. handle the invalid input

// let day = Number(prompt("enter a number (1 to 7) :"));

// if (isNaN(day)){
//     console.log("invalid input")
// } else {
//     switch(day){
//         case 1:
//             console.log("monday");
//             break;

//         case 2:
//             console.log("Tuesday");
//             break;

//         case 3:
//             console.log("wednesday");
//             break;

//         case 4:
//             console.log("thursday");
//             break;

//         case 5:
//             console.log("Friday");
//             break;
        
//         case 6:
//             console.log("saturday");
//             break;

//         case 7:
//             console.log("sunday");
//             break;

//         default:
//             console.log("invalid number (must be 1 to 7)");
//     }
// }

// ----------------------------------------------------------------------------------------------------------------
// write a program to check wheter a character is a vowel , consonant  or not an alphabet

// let char = prompt("enter a char: ");

// if (char.length > 1){
//     console.log("invalid input")
// } else {
//     char = char.toLowerCase();

//     if(char <= 'a' && char >= 'z'){
//         console.log("not an alphabet")
//     } else if(
//         char === 'a'||
//         char === 'e'||
//         char === 'i'||
//         char === 'o'||
//         char === 'u'
//      ) {
//         console.log("vowel");
//      } else {
//         console.log("consonant");
//     }
// }

// ---------------------------------------------------------------------------------------------------------------
// -----------------------------------------------repitation control-----------------------------------------------

// write a program to find the sum of all even numbers between 1 to 50 using for loop

// let sum = 0;
// for (let i = 2; i <= 50; i += 2){
//     sum += i

// }
// console.log(sum);   

// ----------------------------------------------------------------------------------------------------------------
// write a program to calculate the sum of digit of a given number using while loop

// let num = Number(prompt("enter a number: "));
// let result = 0;

// while(num > 0){
//     let lastDigit = num % 10;
//     result = result + lastDigit;
//     num = Math.floor(num / 10);
// }

// console.log(result);


// ----------------------------------------------------------------------------------------------------------------
// write a program to print the mutiplication table of given number up to 10.

// let tableNum = Number(prompt("enter a number: "));

// for (let i = 1; i <= 10; i++){
//     console.log(tableNum + " x " + i + " = " + tableNum * i);
// }
// ----------------------------------------------------------------------------------------------------------------
// write a program to find a factorial of a number using a loop

// let num = Number(prompt("enter a number: "));

// if(isNaN(num) || num < 0){
//     console.log("invalid input");
// } else {
//     let fact = 1;
//     for (let i = 1; i <= num; i++){
//         fact *= i;
//     }
//     console.log(fact);
// }

// ----------------------------------------------------------------------------------------------------------------
// write a program to check wheter the number is palindrome using a loop

// let num = Number(prompt("enter a number:"));

// if(isNaN(num) || num < 0){
//     console.log("imvalid input");
// } else {
//     let orginal = num;
//     let reverse = 0;

//     while(num > 0){
//         let lastdigit = num % 10;
//         reverse = reverse * 10 + lastdigit;
//         num = Math.floor(num / 10);
//     }



//     if (reverse === orginal){
//         console.log("The number is palindrome");
//     } else {
//         console.log("the number is not palindrome");
//     }

// }

// ----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------Array-----------------------------------------------------

// write a program to find the sum and average of all the elements  in array

// let myarr = [10,20,30,40,50];
// let sum = 0;


// for (let i = 0; i < myarr.length; i++){
//     // console.log(myarr[i]);
//     sum = sum + myarr[i];
// }
// let avg = sum / myarr.length;

// console.log(sum);
// console.log(avg);