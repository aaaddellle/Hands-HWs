
function addTodo() {
    const descriptionInput = document.getElementById("descriptionInput");
    const description = descriptionInput.value.trim();

    const timeInput = document.getElementById("timeInput");
    const time = timeInput.value;

    if (description !== "" && time !== "") {
        const todoList = document.getElementById("todoList");

        const li = document.createElement("li");

        const checkboxLabel = document.createElement("label");
        checkboxLabel.classList.add("checkbox-container");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const customCheckbox = document.createElement("span");
        customCheckbox.classList.add("custom-checkbox");

        checkboxLabel.appendChild(checkbox);
        checkboxLabel.appendChild(customCheckbox);

        const todoItem = document.createElement("span");
        todoItem.classList.add("todo-item");
        todoItem.textContent = description;

        const timeItem = document.createElement("span");
        timeItem.classList.add("time-item");
        timeItem.textContent = time;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function () {
            todoList.removeChild(li);
        };

        li.appendChild(checkboxLabel);
        li.appendChild(todoItem);
        li.appendChild(timeItem);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);

        descriptionInput.value = "";
        timeInput.value = "";
    }
}

