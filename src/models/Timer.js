/** @format */

class ModelTimer {
  constructor(
    dataInizio,
    dataFine,
    seconds,
    isPomodoro = false,
    sessionType = 'work',
    sessionsCompleted = 0,
    isPaused = false,
    pausedTime = 0,
  ) {
    this.dataInizio = dataInizio;
    this.dataFine = dataFine;
    this.seconds = seconds;
    this.isPomodoro = isPomodoro;
    this.sessionType = sessionType;
    this.sessionsCompleted = sessionsCompleted;
    this.isPaused = isPaused;
    this.pausedTime = pausedTime;
  }
}

export { ModelTimer };
