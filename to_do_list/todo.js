


// list 


let list = [];

while (true) {
    let output = parseInt(prompt("enter your choice number . 1.see the list, 2.add, 3.delete, 4.quit  "))
    if (output == 1) {
        if (list.length == 0) {
            console.log("list is empty, please add the elements");
        } else {
            console.log(list);
        }
    } else if (output == 2) {
        let add_elment = prompt("add new list item");
        list.push(add_elment);
        console.log(`${add_elment} is added to the list, by pressing one you can see the list`);
    } else if (output == 3) {
        let remove_element = prompt("enter the element to be delete ");
        if (list = list.filter(item => item !== remove_element) == true){
            console.log('${remove_element} and')
        }

    } else if (output == 4) {
        break;
    }
}

