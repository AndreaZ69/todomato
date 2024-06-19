/** @format */

import { ControllerUsers } from '../../controllers/Users.js';

const userRegister = new ControllerUsers();

document.getElementById('registerForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!username || !name || !email || !password) {
    alert('Tutti i campi sono obbligatori.');
    return;
  }

  if (userRegister.userExists(email)) {
    alert(`L'utente esiste già`);
    return;
  }

  userRegister.createUser(username, name, email, password);
  document.getElementById('registerMessage').innerText = 'Utente registrato!';
  document.getElementById('registerForm').reset();

  setTimeout(() => {
    window.location.href = '../home/index.html';
  }, 2000);
});
