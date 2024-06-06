/** @format */

import { ModelTimer } from '../models/Timer.js';

class ControllerTimer {
  create(minutes, isPomodoro = false, sessionType = 'work', sessionsCompleted = 0) {
    const dataInizio = new Date();
    const dataFine = new Date(dataInizio.getTime() + minutes * 60000);
    const seconds = (dataFine - dataInizio) / 1000;
    return new ModelTimer(dataInizio, dataFine, seconds, isPomodoro, sessionType, sessionsCompleted);
  }

  read(timer) {
    const currentTime = new Date();
    const remainingSeconds = Math.max(0, (timer.dataFine - currentTime) / 1000);

    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = Math.floor(remainingSeconds % 60);

    return { minutes, seconds };
  }

  update(timer, minutes) {
    const newEndTime = new Date(timer.dataInizio.getTime() + minutes * 60000);
    timer.dataFine = newEndTime;
    timer.seconds = (newEndTime - timer.dataInizio) / 1000;
  }

  nextPomodoroSession(timer) {
    let nextSessionType = 'work';
    let nextSessionMinutes = 25;
    let sessionsCompleted = timer.sessionsCompleted;

    if (timer.sessionType === 'work') {
      sessionsCompleted++;
      if (sessionsCompleted % 4 === 0) {
        nextSessionType = 'longBreak';
        nextSessionMinutes = 15;
      } else {
        nextSessionType = 'shortBreak';
        nextSessionMinutes = 5;
      }
    }

    const newTimer = this.create(nextSessionMinutes, true, nextSessionType, sessionsCompleted);
    return newTimer;
  }

  pause(timer) {
    if (!timer.isPaused) {
      timer.isPaused = true;
      timer.pausedTime = new Date();
    }
  }

  resume(timer) {
    if (timer.isPaused) {
      const pauseDuration = new Date() - timer.pausedTime;
      timer.dataFine = new Date(timer.dataFine.getTime() + pauseDuration);
      timer.isPaused = false;
      timer.pausedTime = 0;
    }
  }

  delete(timer) {
    timer = null;
  }
}

export { ControllerTimer };
