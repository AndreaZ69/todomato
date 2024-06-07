/* @format */

class ModelUser {
  constructor(username, name, email, password) {
    this.id = Math.random();
    this.username = username;
    this.name = name;
    this.email = email;
    this.password = password;
    this.dataIscrizione = new Date();
  }
}

export { ModelUser };
