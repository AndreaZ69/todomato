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
      const time = this.timer.seconds / 60
      return time;
    }
    return this.timer.seconds;
  }
  
  update(minutes) {

  }
  delete() {
    this.timer = null;
  }
};

const date = new ControllerTimer();
date.create(15);
console.log(date);

console.log(date.read());
