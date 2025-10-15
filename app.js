    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    const addTodo = (text) => {
        if (!text.trim()) {
            return;
        }

        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        const span = document.createElement("span");
        const checkbox = document.createElement("input");
        const container = document.createElement("div");


        checkbox.type = "checkbox";
        checkbox.className = "custom-checkbox";
        
        span.textContent = text;
        span.classList = "todo-text";

        deleteButton.textContent = "x";
        deleteButton.classList = "delete-button";

        container.appendChild(checkbox);
        container.appendChild(span);

        li.appendChild(container);
        li.appendChild(deleteButton);

        checkbox.addEventListener("change", (e) => {
            if (checkbox.checked) {
                span.style.textDecoration = "line-through";
            } else {
                span.style.textDecoration = "none";
            }
        })

        deleteButton.addEventListener("click", (e) => {
            li.remove()
        })



        todoList.appendChild(li);

        todoInput.value = '';
    }

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        addTodo(todoInput.value);
    })