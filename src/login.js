/** @format */

import { ControllerUsers } from './controllers/Users.js';

const userController = new ControllerUsers();

document.getElementById('loginForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  let user = null;
  if (username) {
    user = userController.getUsername(username, password);
  } else if (email) {
    user = userController.getEmail(email, password);
  }

  if (user) {
    document.getElementById('loginMessage').innerText = 'Login successful!';
    localStorage.setItem('userLogged', JSON.stringify(user));
    setTimeout(() => {
      window.location.href = 'todomato.html';
    }, 2000);
  } else {
    document.getElementById('loginMessage').innerText = 'Invalid credentials';
  }
});
