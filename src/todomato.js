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

  const createTimerButton = document.createElement('button');
  createTimerButton.textContent = 'Create Timer';
  createTimerButton.addEventListener('click', function () {
    if (!todo.timer) {
      const timer = controllerTimer.create(25, true);
      todo.timer = timer;
      updateTimerInDOM(todo, timerSpan);
    }
  });

  const pauseButton = document.createElement('button');
  pauseButton.textContent = 'Pause';
  pauseButton.addEventListener('click', function () {
    if (todo.timer) {
      controllerTimer.pause(todo.timer);
    }
  });

  const resumeButton = document.createElement('button');
  resumeButton.textContent = 'Resume';
  resumeButton.addEventListener('click', function () {
    if (todo.timer) {
      controllerTimer.resume(todo.timer);
    }
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function () {
    controllerTodo.deleteTodo(todo.todoId);
    li.remove();
  });

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', function () {
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
  });

  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.addEventListener('click', function () {
    moveTodoToCompleted(todo);
    li.remove();
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
        timerSpan.textContent = ` (${remainingTime.minutes} : ${remainingTime.seconds})`;
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
}
