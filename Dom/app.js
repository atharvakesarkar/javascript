// -------------------------------select the paragraph element using its unique id------------------------------- 
// let org_el = document.getElementById("mainImg");

// ----------------------------------------------------------------------------------------------------------------

// let para_obj = document.getElementById("description");
// console.dir(para_obj); //inspect the element object in the console

// update the text content of selected element (replaces the exisiting text)
// para_obj.textContent = "Atharva kesarkar";

// ----------------------------------------------------------------------------------------------------------------
// -------------------------------------------getElementsByClassName();-------------------------------------------
// getElementsByClassName() - it is a build_in DOM method used to select elements from the HTML document based on their class name. it returns a collection(HTML collection) of all matching elements

// code to change the class name 
// console.dir(document.getElementsByClassName("box").classname = "Atharva"); //the class name is change from box to Atharva
// console.dir(document.getElementsByClassName("box"));

// printing all small images
let smallimages = document.getElementsByClassName("oldImg");
// console.dir(smallimages);

// change the images with main img 
for (let i = 0;  i < smallimages.length; i++){
    // console.dir(smallimages[i].src = "assets/spiderman_img.png");
};

// ----------------------------------------------------------------------------------------------------------------
// --------------------------------------------getElementsByTagName();--------------------------------------------
// returns the elements as an HTML collection or empty collection(if not found)

// to change the content of p tag 
let all_para = document.getElementsByTagName("p");
// console.dir(all_para[0]);
// console.dir(all_para[0].textContent = "Atharva kesarkar");

// ----------------------------------------------------------------------------------------------------------------
// ------------------------------------------------querySelector()-------------------------------------------------
// it select and return the first element in the document that matches a specified css selector and returns it in an object 

// using tagname
let h1_obj = document.querySelector("h1");
// console.dir(h1_obj);
// console.log(h1_obj);

// using the id 
let p_obj = document.querySelector("#description");
// console.log(p_obj);
// console.dir(p_obj);

// using class name
let images_obj = document.querySelector(".images");
// console.dir(images_obj);
// console.log(images_obj);

// selects the first <li> inside a <ul> within a <div> using the css descendant selector
// descendant selector - a CSS selector that targets elements nested inside other elements , seperated by spaces 
let use_descedant_op = document.querySelector("div ul li");
// console.dir(use_descedant_op);  

// ________________________________________________________________________________________________________________
// -----------------------------------------------querySelectorAll()-----------------------------------------------
// selects all elements that match a specified css selector and returns them in a static NodeList
// NodeList - it is an object that represents a collection of DOM nodes  

let all_a_tag = document.querySelectorAll("a");
// console.dir(all_a_tag);




// ----------------------------------------------------------------------------------------------------------------
// setting content in objects

// using properties and method 

let para = document.querySelector("p");
console.dir(para);

// 1.innerText - return or set the visible text of an element as it is appearns on the screen, ignoring the hidden content and respecting css styling 
console.dir(para.innerText);

// ________________________________________________________________________________________________________________
// 2.innerHTML - returns or set the HTML content inside an element, including tags , attributes and text 

console.dir(para.innerHTML);

// ________________________________________________________________________________________________________________
// 3.textContent - returns or sets all the text inside an element exactly as it is exists in the DOM , including hidden text but excluding HTML tags 

console.dir(para.textContent);

// ----------------------------------------------------------------------------------------------------------------
// changing the innerText
let change_innerText = para.innerText = "Atharva kesarkar";
console.dir(change_innerText);

// changing the innerHTML
let change_innerHTML = para.innerHTML = "<b>Atharva kesarkar</b> will be the good developer very soon"; //browser understand tags like <b> to format the text 
console.dir(change_innerHTML);

// changing the textContent
// let change_textContent = para.textContent = "you need to showup everyday , to be a good developer";
console.dir(change_innerHTML);

// using 4the backtick
let heading = document.querySelector("h1");
// console.dir(heading);

heading.innerHTML = `<b>${heading.innerText}</b>` //uses the backtick (template literals) to embeded a variable inside HTML using ${}
