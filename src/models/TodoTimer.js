/** @format */

const ModelTimer = require('./Timer.js');
const ModelTodo = require('./Todo.js');

class ModelTodoTimer {
  constructor(todoId, idTimer) {
    this.todoId = todoId;
    this.idTimer = idTimer;
  }
}

module.exports = ModelTodoTimer;
