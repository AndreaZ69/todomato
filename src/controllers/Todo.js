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
        return {
          ...element,
          nomeAttivita: newName,
        };
      } else return element;
    });
  }

  updateTodoDescription(todoId, newDescription) {
    this.#todo = this.#todo.map(function (element) {
      if (element.todoId === todoId) {
        return {
          ...element,
          description: newDescription,
        };
      } else return element;
    });
  }

  toggleTodoStatus(todoId) {
    this.#todo = this.#todo.map(function (element) {
      if (element.todoId === todoId) {
        return { ...element, status: !element.status };
      } else return element;
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
