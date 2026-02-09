//create a funcition that returs the concetanation of the string in an array

let arr = ["my", "name", "is", "Atharva", "kesarkar"];

// console.log(arr);

function str(arr) {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

str(arr); //output - 'mynameisAtharvakesarkar'
