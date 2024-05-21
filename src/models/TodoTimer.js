const ModelTimer = require("./Timer.js");
const ModelTodo = require("./Todo.js");

class ModelTodoTimer {
  constructor(idTodo, idTimer) {
    this.idTodo = idTodo;
    this.idTimer = idTimer;
  }
}

module.exports = ModelTodoTimer;
