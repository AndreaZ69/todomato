class ModelTodo {
  constructor(nomeAttivita, description) {
    this.todoId = Math.random();
    this.nomeAttivita = nomeAttivita;
    this.description = description;
    this.date = new Date();
    this.timer = new Timer(nomeAttivita, date, timer, durata);

    //da agg poi giorno x avrai una determinata attività da svolgere
  }
}

module.exports = ModelTodo;
