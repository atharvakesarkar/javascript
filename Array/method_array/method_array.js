// PUSH - add elements to the end

// let arr = [10,30,40,50,60];
// arr.push(10);
// console.log(arr);  //OUTPUT - (6) [10, 30, 40, 50, 60, 10]


// UNSHIFT - add elements at the start

// let arr = [10,20,30,40,50];
// arr.unshift(200);
// console.log(arr);  //OUTPUT - (6) [200, 10, 20, 30, 40, 50]


// SHIFT - Delete at the start and return it

// let arr = [10,20,30,40];
// arr.shift();
// console.log(arr);  //OUTPUT - (3) [20, 30, 40]


// POP - Delete from the end and return it 
        
// let arr = [10,20,30,40,50];
// arr.pop();
// console.log(arr); //OUTPUT - (4) [10, 20, 30, 40]


//  INDEEX OF - element found - return index number , not found - reutun -1
// let arr = ['apple','pineapple','carrot','lemon'];
// console.log(arr.indexOf('apple')); //OUTPUT - apple

// console.log(arr.indexOf('grapes')); //OUTPUT - grapes



// INCLUDES - found - 
// let arr = [10,20,30,40,50];
// console.log(arr.includes(10)); // OUTPUT - true
// console.log(arr.includes(60)); // OUTPUT - false


// CONCAT - Use to merge the array       [IT RETURNS IN THE NEW ARRAY]

// let arr1 = [1,2,3,4,5,6];
// let arr2 = [10,20,30,40,50,60];
// let all_arr = arr1.concat(arr2);

// console.log(all_arr); //OUTPUT - (12) [1, 2, 3, 4, 5, 6, 10, 20, 30, 40, 50, 60]

// console.log(arr1.concat(arr2)); //OUTPUT - (12) [1, 2, 3, 4, 5, 6, 10, 20, 30, 40, 50, 60]


// REVERSE - reverse the elements
// let arr1 = [10,20,30,40,50];
// console.log(arr1.reverse());


// SLICE - copies a portion of the array

// let arr1 = [10,20,30,40,50,60,70];
// console.log(arr1.slice());  //OUTPUT - (7) [10, 20, 30, 40, 50, 60, 70]
// console.log(arr1.slice(2));  //OUTPUT - (5) [30, 40, 50, 60, 70]
// console.log(arr1.slice(2,3));  //OUTPUT - [30]
// console.log(arr1.slice(-2));  //OUTPUT - (2) [60, 70]


// let arr = [10,30,40,50,60];
// console.log(arr.slice(0,3)); //OUTPUT - (3) [10, 30, 40]



// SPlICE - remove/replace/add element in place [MAKE THE CHANGES IN THE ORGINAL ARRAY]
// splice(start, delete , item0...itemn );


// arr = ["Atharva" , "Archie"];
// arr.splice(1,1,"krutika","kanak","Ayush");
// console.log(arr);    // OUTPUT - (4) ['Atharva', 'krutika', 'kanak', 'Ayush']


// arr = ["BMW" , "AUDI" , "MERCEDES", "MARUTI", "HONDA"]
// arr.splice(0,1,"Atharva");
// console.log(arr)

// arr.splice(2,1,"krutika");
// console.log(arr);



// SORT - it goes with asending and descending

// arr = ["Atharva" , "Krutika" , "Aaradhya" , "Rajesh" ,"Riya", "Prakash"];
// console.log(arr.sort()); //OUTPUT - 
// (6) ['Aaradhya', 'Atharva', 'Krutika', 'Prakash', 'Rajesh', 'Riya']


// arr = [100, 99 , 98, 54, 56] //FOR NUMBERS, SORT METHOD CONVERT IT INTO THE STRING AND THEN SORT
// console.log(arr.sort())  //OUTPUT - (5) [100, 54, 56, 98, 99]
