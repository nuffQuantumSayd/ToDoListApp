//@ts-ignore: Ignoring issue with js-datepicker lack of intellisense
const picker = datepicker('#due-date');
picker.setMin(new Date()); //set to todays date

class ToDoItem{
    title:string,
    dueDate:Date,
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

/**
 * Check form data is valid
 */
function isValid():boolean{

}

/**
 * Get all input off form and wrap in 
 * a ToDoItem object
 */
function getToDoItem():ToDoItem{
    let titleInputValue = (<HTMLInputElement>$("title")).value;
    let dateInputValue = (<HTMLInputElement>$("due-date")).value;
    
}

/**
 * Display given ToDoItem on the web page
 */
function displayToDoItem(item:ToDoItem):void{

}

/**
 * Shortcut for document.getElementById
 * @param id 
 * @returns target element
 */
function $(id:string):HTMLElement{
    return <HTMLElement>document.getElementById(id);
}

//Task: Allow user to mark a ToDoItem as completed
//Task: Store ToDoItems in web storage