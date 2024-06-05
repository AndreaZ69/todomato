/** @format */

import { ModelTodo } from '../models/Todo.js';

class ControllerTodo {
  #todo = [];

  addTodo(nomeAttivita, description) {
    const todo = new ModelTodo(nomeAttivita, description);
    this.#todo.push(todo);
    return todo;
  }

  readTodo(todoId) {
    return this.#todo.find(element => element.todoId === todoId);
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
    this.#todo = this.#todo.filter(element => element.todoId !== todoId);
  }
}

export { ControllerTodo };
