var picker = datepicker('#due-date');
picker.setMin(new Date());
var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
function isValid() {
}
function getToDoItem() {
    var titleInputValue = $("title").value;
    var dateInputValue = $("due-date").value;
}
function displayToDoItem(item) {
}
function $(id) {
    return document.getElementById(id);
}
