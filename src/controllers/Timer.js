/** @format */

const ModelTimer = require('../models/Timer.js');

class ControllerTimer {
  create(minutes) {
    const dataInizio = new Date();
    const dataFine = new Date(dataInizio.getTime() + minutes * 60000);
    const seconds = (dataFine - dataInizio) / 1000;
    const timer = new ModelTimer(dataInizio, dataFine, seconds);
    return (this.timer = timer);
  }

  read() {
    const currentTime = new Date();
    const remainingSeconds = (this.timer.dataFine - currentTime) / 1000;

    if (remainingSeconds >= 60) {
      return remainingSeconds / 60;
    }
    return remainingSeconds;
  }

  update(minutes) {}
  delete() {
    this.timer = null;
  }

  delete() {
    this.timer = null;
  }
}
