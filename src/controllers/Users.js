/** @format */

import { ModelUser } from '../models/User.js';

class ControllerUsers {
  constructor() {
    this.users = JSON.parse(localStorage.getItem('users')) || [];
  }

  saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  createUser(username, name, email, password) {
    const user = new ModelUser(username, name, email, password);
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

export { ControllerUsers };
