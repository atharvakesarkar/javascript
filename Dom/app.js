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
