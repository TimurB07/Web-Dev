function addItem() {
    var input = document.getElementById("ToDo");
    var todoText = input.value.trim();
    if (todoText !== "") {
        var newItem = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                newItem.style.textDecoration = "line-through";
            } else {
                newItem.style.textDecoration = "none";
            }
        });
        var textNode = document.createTextNode(todoText);
        var deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", function() {
            newItem.remove();
        });
        newItem.appendChild(checkbox);
        newItem.appendChild(textNode);
        newItem.appendChild(deleteBtn);
        document.getElementById("ToDoList").appendChild(newItem);
        input.value = "";
    } else {
        alert("Please enter a todo item.");
    }
}
