/** @format */

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

class User {
  constructor(username, name, email, password, descrizione) {
    this.username = this.username;
    this.name = name;
    this.email = email;
    this.password = password;
    this.descrizione = descrizione;
    this.dataIscrizione = new Date();
  }
}

class Activity {
  constructor(nomeAttivita, description) {
    this.nomeAttivita = nomeAttivita;
    this.description = description;
    this.date = new Date();
    this.timer = new Timer(nomeAttivita, date, timer, durata);

    //da agg poi giorno x avrai una determinata attività da svolgere
  }
}

class Timer {
  constructor(nomeTimer, durata) {
    this.nomeTimer = nomeTimer;
    this.durata = durata;
    this.breaks = [
      {
        /* durata e nome */
      },
    ]; //sarebbe figo avere in automatico dei break generati automaticamente
  }
}

class Badges {
  constructor(nomeBadge, descrizioneBadge, imgBadge) {
    this.nomeBadge = nomeBadge;
    this.descrizioneBadge = descrizioneBadge;
    this.imgBadge = imgBadge;
  }
}
const game = new TodoMato();
const user1 = new User('user1', 'Mario Rossi', 'XXXXXXXXXXXXXXXXXXXXX', '123', 'Mario Rossi');
console.log(user1);
game.addUser(user1);
console.log(game.getUsers());
