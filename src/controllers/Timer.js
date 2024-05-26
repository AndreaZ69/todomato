/** @format */

const ModelTimer = require('../models/Timer.js');

class ControllerTimer {

  create(minutes) {
    const dataInizio = new Date().getSeconds();
    let dataFine = new Date().getSeconds();
    dataFine = dataFine + (minutes*60);
    const seconds = dataFine - dataInizio;
    const timer = new ModelTimer(dataInizio, dataFine, seconds);
    return this.timer = timer;
  }
  
  read() {
    if (this.timer.seconds >= 59){
      const time = Math.round(this.timer.seconds / 60)
      return time;
    }
    return this.timer.seconds;
  }
  
  update(minutes) {
    // Update per aggiornare i minuti, quello per metterlo in pausa sarà un'altra funzione
    let dataFine = new Date().getSeconds();
    dataFine = Math.round(dataFine + (minutes*60));
    const seconds = dataFine - this.timer.dataInizio;
    const timer = new ModelTimer(this.timer.dataInizio, dataFine, seconds);
    return this.timer = timer;
    //
  }
  delete() {
    this.timer = null;
  }
};

