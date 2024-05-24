/** @format */

const ModelTodo = require('../models/Todo.js');

class ControllerTodo {
  #todo = [];

  addTodo(nomeAttivita, description) {
    const todo = new ModelTodo(nomeAttivita, description);
    this.#todo.push(todo);
  }

  readTodo(todoId) {
    const todoFound = this.#todo.find(function (element) {
      if (element.todoId === todoId) {
        return true;
      } else return false;
    });
    return todoFound;
  }

  updateTodoName(todoId, newName) {
    this.#todo = this.#todo.map(function (element) {
      if (element.todoId === todoId) {
        element.nomeAttivita = newName;
      }
    });
  }

  updateTodoDescription(todoId, newDescription) {
    this.#todo = this.#todo.map(function (element) {
      if (element.todoId === todoId) {
        element.description = newDescription;
      }
    });
  }
  deleteTodo(todoId) {
    this.#todo = this.#todo.filter(function (element) {
      if (element.todoId === todoId) {
        return false;
      } else return true;
    });
  }
}

module.exports = ControllerTodo;
