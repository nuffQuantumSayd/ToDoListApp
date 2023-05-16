var picker = datepicker('#due-date');
picker.setMin(new Date());
var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
window.onload = function () {
    var addItem = $("add");
    addItem.onclick = main;
    loadSavedItem();
};
function loadSavedItem() {
    var item = getToDo();
    displayToDoItem(item);
}
function main() {
    if (isValid()) {
        var item = getToDoItem();
        displayToDoItem(item);
        saveToDo(item);
    }
}
function isValid() {
    return true;
}
function getToDoItem() {
    var myItem = new ToDoItem();
    var titleInputValue = $("title").value;
    myItem.title = titleInputValue;
    var dateInputValue = $("due-date").value;
    myItem.dueDate = new Date(dateInputValue);
    var completedInputValue = $("is-complete");
    myItem.completed = completedInputValue.checked;
    return myItem;
}
function displayToDoItem(item) {
    var itemText = document.createElement("h3");
    itemText.innerText = item.title;
    var itemDate = document.createElement("p");
    var dueDate = new Date(item.dueDate.toString());
    itemDate.innerText = dueDate.toDateString();
    var itemDiv = document.createElement("div");
    itemDiv.onclick = markAsComplete;
    itemDiv.classList.add("todo");
    if (item.completed) {
        itemDiv.classList.add("completed");
    }
    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemDate);
    if (item.completed) {
        var completedToDos = document.getElementById("complete-items");
        completedToDos.appendChild(itemDiv);
    }
    else {
        var incompleteToDos = document.getElementById("incomplete-items");
        incompleteToDos.appendChild(itemDiv);
    }
}
function $(id) {
    return document.getElementById(id);
}
function markAsComplete() {
    var itemDiv = this;
    itemDiv.classList.add("completed");
    var completedItems = document.getElementById("complete-items");
    completedItems.appendChild(itemDiv);
}
function saveToDo(item) {
    var itemString = JSON.stringify(item);
    localStorage.setItem(todoKey, itemString);
}
var todoKey = "todo";
function getToDo() {
    var itemString = localStorage.getItem(todoKey);
    var item = JSON.parse(itemString);
    return item;
}
