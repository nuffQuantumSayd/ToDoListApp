//@ts-ignore: Ignoring issue with js-datepicker lack of intellisense
const picker = datepicker('#due-date');
picker.setMin(new Date()); //set to todays date

class ToDoItem{
    title:string;
    dueDate:Date;
    completed:boolean;

    /*
    constructor(desiredTitle:string){
        this.title = desiredTitle;
    }
    */
}

/*
let item = new ToDoItem();
item.title = "Testing";
item.dueDate = new Date(2020, 6, 1);
item.completed = false;
*/

window.onload = function(){
    let addItem = $("add");
    addItem.onclick = main;
}

function main(){
    if(isValid()){
        let item = getToDoItem();
        displayToDoItem(item);
    }
}

/**
 * Check form data is valid
 */
function isValid():boolean{
    return true;
}

/**
 * Get all input off form and wrap in 
 * a ToDoItem object
 */
function getToDoItem():ToDoItem{
    let myItem = new ToDoItem();
    //gets the values

    //title
    let titleInputValue = $("title").value;
    myItem.title = titleInputValue;

    //date
    let dateInputValue = $("due-date").value;
    myItem.dueDate = new Date(dateInputValue);

    //get completed
    let completedInputValue = $("is-complete");
    myItem.completed = completedInputValue.checked;

    return myItem;
}

/**
 * Display given ToDoItem on the web page
 */
function displayToDoItem(item:ToDoItem):void{
    let itemText = document.createElement("h3");
    itemText.innerText = item.title;

    let itemDate = document.createElement("p");
    itemDate.innerText = item.dueDate.toString();

    let itemDiv = document.createElement("div");
    itemDiv.onclick = markAsComplete;

    itemDiv.classList.add("todo");

    if(item.completed){
        itemDiv.classList.add("completed");
    }

    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemDate);

    if(item.completed){
        let completedToDos = document.getElementById("complete-items");
        completedToDos.appendChild(itemDiv);
    }
    else{
        let incompleteToDos = document.getElementById("incomplete-items");
        incompleteToDos.appendChild(itemDiv);
    }
}

/**
 * Shortcut for document.getElementById
 * @param id 
 * @returns target element
 */
function $(id:string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

function markAsComplete(){
    let itemDiv = <HTMLElement>this;
    itemDiv.classList.add("completed");

    let completedItems = document.getElementById("complete-items");
    completedItems.appendChild(itemDiv);
}

//Task: Allow user to mark a ToDoItem as completed
//Task: Store ToDoItems in web storage