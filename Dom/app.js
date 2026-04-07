// -------------------------------select the paragraph element using its unique id------------------------------- 
let org_el = document.getElementById("mainImg");

// ----------------------------------------------------------------------------------------------------------------

let para_obj = document.getElementById("description");
console.dir(para_obj); //inspect the element object in the console

// update the text content of selected element (replaces the exisiting text)
para_obj.textContent = "Atharva kesarkar";
