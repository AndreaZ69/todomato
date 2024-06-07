/** @format */

class ModelUser {
  constructor(username, name, email, password, descrizione) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.username = username;
    this.name = name;
    this.email = email;
    this.password = password;
    this.descrizione = descrizione;
    this.dataIscrizione = new Date();
  }
}

class ControllerUsers {
  constructor() {
    this.users = JSON.parse(localStorage.getItem('users')) || [];
  }

  saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  createUser(username, name, email, password, descrizione) {
    const user = new ModelUser(username, name, email, password, descrizione);
    this.users.push(user);
    this.saveUsers();
  }

  getUsername(username, password) {
    return this.users.find(user => user.username === username && user.password === password);
  }

  getEmail(email, password) {
    return this.users.find(user => user.email === email && user.password === password);
  }
}

const userController = new ControllerUsers();

document.getElementById('registerForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const descrizione = document.getElementById('descrizione').value;

  userController.createUser(username, name, email, password, descrizione);
  document.getElementById('registerMessage').innerText = 'User registered successfully!';
  document.getElementById('registerForm').reset();

  setTimeout(() => {
    window.location.href = 'login.html';
  }, 2000);
});

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
    setTimeout(() => {
      window.location.href = 'todomato.html';
    }, 2000);
  } else {
    document.getElementById('loginMessage').innerText = 'Invalid credentials';
  }
});
