/** @format */

import { ModelTodo } from '../models/Todo.js';

class ControllerTodo {
  constructor() {
    this.todo = JSON.parse(localStorage.getItem('todos')) ?? [];
    this.todoCompleted = JSON.parse(localStorage.getItem('todosCompleted')) ?? [];
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todo));
  }
  saveTodosCompleted() {
    localStorage.setItem('todosCompleted', JSON.stringify(this.todoCompleted));
  }

  addTodo(nomeAttivita, description, userId) {
    const todo = new ModelTodo(nomeAttivita, description, userId);
    this.todo.push(todo);
    this.saveTodos();
    return todo;
  }

  moveTodoToCompleted(todoId) {
    const completedList = document.getElementById('completed-list');
    const completedItem = document.createElement('li');
    completedItem.textContent = `${todoId.nomeAttivita}: ${todoId.description}`;
    completedList.appendChild(completedItem);
    this.todoCompleted.push(todoId);
    this.saveTodosCompleted();
    this.deleteTodo(todoId);
  }

  loadTodoCompleted(userTodosCompleted) {
    const completedList = document.getElementById('completed-list');
    completedList.innerHTML = '';
    userTodosCompleted.forEach(todo => {
      const completedTodo = document.createElement('li');
      completedTodo.textContent = `${todo.nomeAttivita}: ${todo.description}`;
      completedList.appendChild(completedTodo);
    });
  }

  readTodo(todoId) {
    return this.todo.find(element => element.todoId === todoId);
  }

  updateTodoName(todoId, newName) {
    const todo = this.readTodo(todoId);
    if (todo) {
      todo.nomeAttivita = newName;
    }
  }

  updateTodoDescription(todoId, newDescription) {
    const todo = this.readTodo(todoId);
    if (todo) {
      todo.description = newDescription;
    }
  }

  deleteTodo(todoId) {
    const index = this.todo.indexOf(todoId);
    this.todo.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todo));
  }

  deleteTodoCompleted(todoId) {
    const index = this.todo.indexOf(todoId);
    this.todo.splice(index, 1);
    localStorage.setItem('todosCompleted', JSON.stringify(this.todo));
  }
}

export { ControllerTodo };
