// Select Element
const btnSubmit = document.querySelector('todo-btn') as HTMLButtonElement;
const inputTodo = document.querySelector('todo-input') as HTMLInputElement;
const formTodo = document.querySelector('todo-form') as HTMLFormElement;
const todoList = document.querySelector('todo-list') as HTMLLIElement;
const btnDeleteAll = document.querySelector('todo-delete-all') as HTMLButtonElement;

// Handle Submit
const handleSubmit = (e: Event) =>{
    e.preventDefault();
    // Create new Todo Object
    const newTodo: Todo = {
        id: Date.now(),
        todo: inputTodo.value,
        completed: false
    };
    // TODO save todo to local storage
    todos.push(newTodo);
    // Save to the Local Storage
    saveTodos();

    // Append new todo fn
    appendTodo(newTodo);


    // Reset Input
    inputTodo.value = "";
};

    // Save todos
    const saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };
    // New Todo Interface
    interface Todo {
        id:number,
        todo: string,
        completed: boolean
    };
    // New todos array
    const todos:Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');
    console.log(todos);
    document.addEventListener('DOMContentLoaded', function() {
        const element = document.getElementById('yourElementId');
        if (element) {
            element.addEventListener('click', function() {
                // Your code here
                todos.forEach(todo => appendTodo (todo));
            });
        }
    });
    
    // // Append new todos to the DOM on start
    // window.addEventListener('DOMContentLoaded', () =>{
    //     todos.forEach(todo => appendTodo (todo));
    // });

    // Append Todo Function
    const appendTodo = (newTodo: Todo) => {
        const newLi = document.createElement('li');
        const checkB = document.createElement('input');
        checkB.type = 'checkbox';
        checkB.checked = newTodo.completed;
        // Add checkbox event listener
        checkB.addEventListener('change', () => {
            console.log('checked');
            newTodo.completed = checkB.checked;
            saveTodos();
        });
        newLi.append(newTodo.todo, checkB);
        todoList.prepend(newLi);
    };
// Add form event Listener
formTodo.addEventListener("submit", e => handleSubmit(e));

// Delete All Todos
const clearTodos = () => {
    todos.length = 0;
    saveTodos();
    todoList.innerHTML = '';
}
btnDeleteAll.onclick = () => clearTodos();