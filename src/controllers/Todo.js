/** @format */

import { ModelTodo } from '../models/Todo.js';

class ControllerTodo {
  constructor() {
    this.todo = JSON.parse(localStorage.getItem('todosCompleted')) ?? [];
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todo));
  }

  addTodo(nomeAttivita, description) {
    const todo = new ModelTodo(nomeAttivita, description);
    this.todo.push(todo);
    this.saveTodos();
    return todo;
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
