/** @format */

class TodoMato {
  #users = new ControllerUsers(); //tutti gli utenti
  #todos = new ControllTodos();
  #timers = new ControllTimers();
  //userLogged = []; //l'utente loggato
  //userLogged = {
  /*true o false*/
  //};
  signup(username, password, email) {
    this.users.create(username, password, email);
  }

  login(username, password) {
    this.#users = this.users.get(username, password);
  }

  logout() {
    this.#users = null;
  }

  getUser() {
    return this.#users;
  }
}
