const Timer = require("./Timer.js");
const Todo = require("./Todo.js");

class ModelTodoTimer {
  constructor(idTodo, idTimer) {
    this.idTodo = idTodo;
    this.idTimer = idTimer;
  }
}

module.exports = ModelTodoTimer;
