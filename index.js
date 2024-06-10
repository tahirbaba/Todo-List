"use strict";
// Select Element
const btnSubmit = document.querySelector('todo-btn');
const inputTodo = document.querySelector('todo-input');
const formTodo = document.querySelector('todo-form');
const todoList = document.querySelector('todo-list');
const btnDeleteAll = document.querySelector('todo-delete-all');
// Handle Submit
const handleSubmit = (e) => {
    e.preventDefault();
    // Create new Todo Object
    const newTodo = {
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
;
// New todos array
const todos = JSON.parse(localStorage.getItem('todos') || '[]');
console.log(todos);
// Append new todos to the DOM on start
window.addEventListener('DOMContentLoaded', () => {
    todos.forEach(todo => appendTodo(todo));
});
// Append Todo Function
const appendTodo = (newTodo) => {
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
};
btnDeleteAll.onclick = () => clearTodos();
