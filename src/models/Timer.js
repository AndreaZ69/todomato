/** @format */

class ModelTimer {
  constructor(dataInizio, dataFine, seconds) {
    this.idTimer = Math.random();
    this.dataInizio = dataInizio;
    this.dataFine = dataFine;
    this.seconds = seconds;
  }
}

module.exports = ModelTimer;
