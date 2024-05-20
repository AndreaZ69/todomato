class ModelUser {
  constructor(username, name, email, password, descrizione) {
    this.id = Math.random();
    this.username = username;
    this.name = name;
    this.email = email;
    this.password = password;
    this.descrizione = descrizione;
    this.dataIscrizione = new Date();
    //type = Modules;
  }
}

module.exports = ModelUser;
// const utente = new ModelUsers(
//   "hurricane",
//   "Pippo",
//   "caccadicane@gmail.com",
//   "ABC",
//   "abadaca"
// );
