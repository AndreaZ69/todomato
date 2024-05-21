const ModelTimer = require("../models/Timer.js");

class ControllerTimer {
  timer = null;
  create(dataFine) {
    const dataInizio = new Date();
    timer = new ModelTimer(dataInizio.getTime(), dataFine.getTime());
  }
  read() {
    let time = Math.round(dataFine.getMinutes() - dataInizio.getMinutes());
    return time;
  }
  update(NewDataFine) {
    const dataInizio = new Date();
    timer.dataFine = NewDataFine;
  }
  delete() {
    timer = null;
  }
}
