class TodoMato {
  users = []; //tutti gli utenti
  userLogged = []; //l'utente loggato
  activities = []; //tutte le attivites dell'utente loggato
  userLogged = {
    /*true o false*/
  };
  getUsers() {
    return this.users;
  }
  addUser(user) {
    this.users = [...this.users, user];
  }
}
