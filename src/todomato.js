/** @format */
import { ControllerTimer } from './controllers/Timer.js';
import { ControllerTodo } from './controllers/Todo.js';

const todoForm = document.getElementById('todo-form');
const todoNameInput = document.getElementById('todo-name');
const todoDescriptionInput = document.getElementById('todo-description');
const todoList = document.getElementById('todo-list');

const controllerTodo = new ControllerTodo();
const controllerTimer = new ControllerTimer();

todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const nomeAttivita = todoNameInput.value;
  const description = todoDescriptionInput.value;

  const todo = controllerTodo.addTodo(nomeAttivita, description);
  const timer = controllerTimer.create(25, true);
  todo.timer = timer;

  addTodoToDOM(todo);

  todoNameInput.value = '';
  todoDescriptionInput.value = '';
});

function addTodoToDOM(todo) {
  const li = document.createElement('li');
  li.textContent = `${todo.nomeAttivita}: ${todo.description}`;
  li.setAttribute('data-id', todo.todoId);

  const timerSpan = document.createElement('span');
  timerSpan.className = 'timer';
  const timeRemaining = controllerTimer.read(todo.timer);
  timerSpan.textContent = ` (${timeRemaining.minutes}m ${timeRemaining.seconds}s)`;

  const timerControls = document.createElement('div');
  timerControls.className = 'timer-controls';

  const pauseButton = document.createElement('button');
  pauseButton.textContent = 'Pause';
  pauseButton.addEventListener('click', function () {
    controllerTimer.pause(todo.timer);
  });

  const resumeButton = document.createElement('button');
  resumeButton.textContent = 'Resume';
  resumeButton.addEventListener('click', function () {
    controllerTimer.resume(todo.timer);
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function () {
    controllerTodo.deleteTodo(todo.todoId);
    li.remove();
  });

  timerControls.appendChild(pauseButton);
  timerControls.appendChild(resumeButton);
  timerControls.appendChild(deleteButton);

  li.appendChild(timerSpan);
  li.appendChild(timerControls);
  todoList.appendChild(li);

  // Update the timer display every second
  const intervalId = setInterval(() => {
    if (todo.timer && !todo.timer.isPaused) {
      const remainingTime = controllerTimer.read(todo.timer);
      if (remainingTime.minutes > 0 || remainingTime.seconds > 0) {
        timerSpan.textContent = ` (${remainingTime.minutes}m ${remainingTime.seconds}s)`;
      } else {
        if (todo.timer.isPomodoro) {
          todo.timer = controllerTimer.nextPomodoroSession(todo.timer);
          const newTimeRemaining = controllerTimer.read(todo.timer);
          timerSpan.textContent = ` (${newTimeRemaining.minutes}m ${newTimeRemaining.seconds}s)`;
        } else {
          timerSpan.textContent = " (Time's up!)";
          clearInterval(intervalId);
        }
      }
    }
  }, 1000);
}
//prova
