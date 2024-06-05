class ModelTodo {
  constructor(nomeAttivita, description) {
    this.todoId = Math.random();
    this.nomeAttivita = nomeAttivita;
    this.description = description;
    this.status = false;
    this.date = new Date();
  }
}

module.exports = ModelTodo;
