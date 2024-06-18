/** @format */

import { ControllerTimer } from './controllers/Timer.js';
import { ControllerTodo } from './controllers/Todo.js';

const todoForm = document.getElementById('todo-form');
const todoNameInput = document.getElementById('todo-name');
const todoDescriptionInput = document.getElementById('todo-description');
const todoList = document.getElementById('todo-list');
const completedList = document.getElementById('completed-list');
const logoutButton = document.getElementById('logout-btn');

const controllerTodo = new ControllerTodo();
const controllerTimer = new ControllerTimer();

todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const nomeAttivita = todoNameInput.value;
  const description = todoDescriptionInput.value;

  const todo = controllerTodo.addTodo(nomeAttivita, description);
  addTodoToDOM(todo);

  todoNameInput.value = '';
  todoDescriptionInput.value = '';
});

function addTodoToDOM(todo) {
  const li = document.createElement('li');
  li.setAttribute('data-id', todo.todoId);

  const nameSpan = document.createElement('span');
  nameSpan.className = 'todo-name';
  nameSpan.textContent = todo.nomeAttivita;

  const descriptionSpan = document.createElement('span');
  descriptionSpan.className = 'todo-description';
  descriptionSpan.textContent = `: ${todo.description}`;

  const timerSpan = document.createElement('span');
  timerSpan.className = 'timer';
  timerSpan.textContent = '(--:--)';

  const timerControls = document.createElement('div');
  timerControls.className = 'timer-controls';

  const resumeButton = document.createElement('button');
  const pauseButton = document.createElement('button');
  const editButton = document.createElement('button');
  const deleteButton = document.createElement('button');
  const completeButton = document.createElement('button');
  const createTimerButton = document.createElement('button');

  resumeButton.style.display = 'none';
  const resumeImg = document.createElement('img');
  resumeImg.src = './img/clock-02.svg';
  resumeImg.width = 20;
  resumeImg.height = 20;
  resumeImg.alt = 'Resume';
  resumeButton.appendChild(resumeImg);
  resumeButton.addEventListener('click', function () {
    resumeButton.style.display = 'none';
    pauseButton.style.display = 'block';
    if (todo.timer) {
      controllerTimer.resume(todo.timer);
    }
  });

  pauseButton.style.display = 'none';
  const pauseImg = document.createElement('img');
  pauseImg.src = './img/pause-02.svg';
  pauseImg.width = 20;
  pauseImg.height = 20;
  pauseImg.alt = 'Pause';
  pauseButton.appendChild(pauseImg);
  pauseButton.addEventListener('click', function () {
    resumeButton.style.display = 'block';
    pauseButton.style.display = 'none';
    if (todo.timer) {
      controllerTimer.pause(todo.timer);
    }
  });

  editButton.style.display = 'none';
  const editImg = document.createElement('img');
  editImg.src = './img/editButton-02.svg';
  editImg.width = 20;
  editImg.height = 20;
  editImg.alt = 'Edit';
  editButton.appendChild(editImg);
  editButton.addEventListener('click', function () {
    controllerTimer.pause(todo.timer);
    const newName = prompt('Enter new name:', todo.nomeAttivita);
    const newDescription = prompt('Enter new description:', todo.description);

    if (newName !== null) {
      controllerTodo.updateTodoName(todo.todoId, newName);
      nameSpan.textContent = newName;
    }

    if (newDescription !== null) {
      controllerTodo.updateTodoDescription(todo.todoId, newDescription);
      descriptionSpan.textContent = `: ${newDescription}`;
    }
    controllerTimer.resume(todo.timer);
  });

  deleteButton.style.display = 'none';
  const deleteImg = document.createElement('img');
  deleteImg.src = './img/eraseButton-03.svg';
  deleteImg.width = 20;
  deleteImg.height = 20;
  deleteImg.alt = 'Delete';
  deleteButton.appendChild(deleteImg);
  deleteButton.addEventListener('click', function () {
    controllerTodo.deleteTodo(todo.todoId);
    li.remove();
  });

  completeButton.style.display = 'none';
  const completeImg = document.createElement('img');
  completeImg.src = './img/checkCompleted-02.svg';
  completeImg.width = 20;
  completeImg.height = 20;
  completeImg.alt = 'Complete';
  completeButton.appendChild(completeImg);
  completeButton.addEventListener('click', function () {
    moveTodoToCompleted(todo);
    li.remove();
  });

  const playImg = document.createElement('img');
  playImg.src = './img/play-02.svg';
  playImg.width = 20;
  playImg.height = 20;
  playImg.alt = 'Create Timer';
  createTimerButton.appendChild(playImg);
  createTimerButton.addEventListener('click', function () {
    pauseButton.style.display = 'block';
    deleteButton.style.display = 'block';
    editButton.style.display = 'block';
    completeButton.style.display = 'block';

    createTimerButton.style.display = 'none';
    if (!todo.timer) {
      const timer = controllerTimer.create(25, true);
      todo.timer = timer;
    }
  });

  timerControls.appendChild(createTimerButton);
  timerControls.appendChild(pauseButton);
  timerControls.appendChild(resumeButton);
  timerControls.appendChild(deleteButton);
  timerControls.appendChild(editButton);
  timerControls.appendChild(completeButton);

  li.appendChild(nameSpan);
  li.appendChild(descriptionSpan);
  li.appendChild(timerSpan);
  li.appendChild(timerControls);
  todoList.appendChild(li);

  // Update del timer ogni secondo
  const intervalId = setInterval(() => {
    if (todo.timer && !todo.timer.isPaused) {
      const remainingTime = controllerTimer.read(todo.timer);
      if (remainingTime.minutes > 0 || remainingTime.seconds > 0) {
        if(remainingTime.seconds < 10){
          timerSpan.textContent = ` (${remainingTime.minutes} : 0${remainingTime.seconds})`;
        }
        else{
          timerSpan.textContent = ` (${remainingTime.minutes} : ${remainingTime.seconds})`;
        }
      } else {
        if (todo.timer.isPomodoro) {
          todo.timer = controllerTimer.nextPomodoroSession(todo.timer);
          const newTimeRemaining = controllerTimer.read(todo.timer);
          timerSpan.textContent = ` (${newTimeRemaining.minutes} : ${newTimeRemaining.seconds})`;
        } else {
          timerSpan.textContent = " (Time's up!)";
          moveTodoToCompleted(todo);
          clearInterval(intervalId);
        }
      }
    }
  }, 1000);
}

function moveTodoToCompleted(todo) {
  const completedItem = document.createElement('li');
  completedItem.textContent = `${todo.nomeAttivita}: ${todo.description}`;
  completedList.appendChild(completedItem);
  controllerTodo.deleteTodo(todo);
  localStorage.setItem('todosCompleted', JSON.stringify(todo));
}

//PEDRO!
const videoElement = document.getElementById('video-tag');
const unmuteButton = document.getElementById('unmute-button');

document.addEventListener('DOMContentLoaded', function () {
  let typedWord = '';
  document.addEventListener('keydown', function (event) {
    typedWord += event.key.toLowerCase();
    if (typedWord.includes('pedro')) {
      const videoSource = document.getElementById('video-source');
      videoSource.src = './video/pedro.mp4';
      unmuteButton.style.visibility = 'visible';
      videoElement.load();
      videoElement.play();
      typedWord = '';
    }
  });
});

unmuteButton.addEventListener('click', function () {
  if (videoElement.muted) {
    videoElement.muted = false;
    unmuteButton.textContent = '🔊';
  } else {
    videoElement.muted = true;
    unmuteButton.textContent = '🔈';
  }
});
