/** @format */

import { addTodoToDOM } from './add_todo_to_dom/addTodoToDOM.js';
import { ControllerTimer } from './controllers/Timer.js';
import { ControllerTodo } from './controllers/Todo.js';
import { loadTodos, loadCompleted } from './load_todo_list/loadTodoList.js';

const todoForm = document.getElementById('todo-form');
const todoNameInput = document.getElementById('todo-name');
const todoDescriptionInput = document.getElementById('todo-description');

const logoutButton = document.getElementById('btnLogOut');

logoutButton.addEventListener('click', () => {
  localStorage.removeItem('userLogged');
  setTimeout(() => {
    window.location.href = './pages/home/index.html';
  }, 2000);
});

document.addEventListener('DOMContentLoaded', () => {
  let currentUser = localStorage.getItem('userLogged');
  const container = document.getElementById('containerId');

  if (!!currentUser) {
    let objectUser = JSON.parse(currentUser);
    let loggedUserName = objectUser.username;
    const loggedUserNamep = document.createElement('p');
    loggedUserNamep.classList.add('loggedUserText');

    loggedUserNamep.innerHTML = 'Cosa facciamo oggi <b>' + loggedUserName + '</b>?';
    container.appendChild(loggedUserNamep);
  }
});

const controllerTodo = new ControllerTodo();
const controllerTimer = new ControllerTimer();

// document.addEventListener('DOMContentLoaded', () => {
//   const completedList = document.getElementById('completed-list');
//   completedList.innerHTML = '';

//   let currentTodos = localStorage.getItem('todosCompleted');
//   let currentUser = localStorage.getItem('userLogged');

//   if (currentUser && currentTodos) {
//     let objectUser = JSON.parse(currentUser);
//     let todosCompleted = JSON.parse(currentTodos);

//     let userId = objectUser.id;

//     console.log('User ID:', userId);

//     let userTodosCompleted = todosCompleted.filter(todo => todo.userId === userId);

//     console.log("Todos completati per l'utente:", userTodosCompleted);

//     loadCompleted(userTodosCompleted);

//     console.log('Caricamento todos completati riuscito!');
//   }
// });

todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const nomeAttivita = todoNameInput.value;
  const description = todoDescriptionInput.value;
  let currentUser = JSON.parse(localStorage.getItem('userLogged'));
  let userId = currentUser.id;

  const todo = controllerTodo.addTodo(nomeAttivita, description, userId);
  addTodoToDOM(todo, controllerTodo, controllerTimer);

  console.log(todo);
  console.log('Todo utente Salvato');

  todoNameInput.value = '';
  todoDescriptionInput.value = '';
});

window.onload = function () {
  loadTodos(controllerTodo, controllerTimer, addTodoToDOM);
  loadCompleted(controllerTodo);
};

const videoElement = document.getElementById('video-tag');
const unmuteButton = document.getElementById('unmute-button');

document.addEventListener('DOMContentLoaded', function () {
  let typedWord = '';
  document.addEventListener('keydown', function (event) {
    typedWord += event.key.toLowerCase();
    if (typedWord.includes('pedro')) {
      const videoSource = document.getElementById('video-source');
      videoSource.src = './assets/video/pedro.mp4';
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
