/** @format */

import { ControllerUsers } from './controllers/Users.js';

const userRegister = new ControllerUsers();

document.getElementById('registerForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  userRegister.createUser(username, name, email, password);
  document.getElementById('registerMessage').innerText = 'User registered successfully!';
  document.getElementById('registerForm').reset();

  setTimeout(() => {
    window.location.href = 'login.html';
  }, 2000);
});
