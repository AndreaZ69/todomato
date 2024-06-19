/** @format */

class ModelTodo {
  constructor(nomeAttivita, description, userId) {
    this.todoId = Math.random();
    this.userId = userId;
    this.nomeAttivita = nomeAttivita;
    this.description = description;
    this.status = false;
    this.date = new Date();
    this.timer = null;
  }
}

export { ModelTodo };
