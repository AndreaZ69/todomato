/** @format */

const ModelUser = require('../models/User.js');

class ControllerUsers {
  #users = [];

  createUser(username, name, email, password, descrizione) {
    const user = new ModelUser(username, name, email, password, descrizione);
    this.#users.push(user);
  }
  readUser(id) {
    const idUtente = this.#users.find(function (element) {
      if (element.id === id) {
        return true;
      } else return false;
    });
    return idUtente;
  }

  updateUsername(id, newUsername) {
    this.#users = this.#users.map(function (element) {
      if (element.id === id) {
        return {
          ...element,
          username: newUsername,
        };
      } else return element;
    });
  }

  updateName(id, newName) {
    this.#users = this.#users.map(function (element) {
      if (element.id === id) {
        return {
          ...element,
          name: newName,
        };
      } else return element;
    });
  }

  updateEmeail(id, newEmail) {
    this.#users = this.#users.map(function (element) {
      if (element.id === id) {
        return {
          ...element,
          email: newEmail,
        };
      } else return element;
    });
  }

  updatePassword(id, newPassword) {
    this.#users = this.#users.map(function (element) {
      if (element.id === id) {
        return {
          ...element,
          password: newPassword,
        };
      } else return element;
    });
  }

  updateDescrizione(id, newDescrizione) {
    this.#users = this.#users.map(function (element) {
      if (element.id === id) {
        return {
          ...element,
          descrizione: newDescrizione,
        };
      } else return element;
    });
  }

  delete(id) {
    this.#users = this.#users.filter(function (element) {
      if (element.id === id) return false;
      return true;
    });
  }

  getUsername(username, password) {
    const userFound = this.#users.find(function (user) {
      if (user.username === username && user.password === password) return true;
      return false;
    });
    return userFound;
  }

  getEmail(email, password) {
    const userFound = this.#users.find(function (user) {
      if (user.email === email && user.password === password) return true;
      return false;
    });
    return userFound;
  }
}
const daba = new ControllerUsers();
daba.create('dab', 'dab', 'dab');
