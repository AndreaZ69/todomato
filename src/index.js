/** @format 3889*/

const buttonLogIn = document.getElementById('btnLogIn');
const buttonLogOn = document.getElementById('btnLogOn');
const buttonToDoMato = document.getElementById('btnToDoMato');
const nav = document.getElementById('indexNav');
let currentUser = localStorage.getItem('userLogged');

document.addEventListener('DOMContentLoaded', () => {
  if (!!currentUser) {
    buttonLogIn.style.display = 'none';
    buttonLogOn.style.display = 'none';
    buttonToDoMato.style.display = 'block';

    const logOutButton = document.createElement('button');
    logOutButton.textContent = 'LogOut';
    nav.appendChild(logOutButton);

    logOutButton.addEventListener('click', () => {
      localStorage.removeItem('userLogged');
      logOutButton.style.display = 'none';
      buttonLogIn.style.display = 'block';
      buttonLogOn.style.display = 'block';
      buttonToDoMato.style.display = 'none';
    });
  } else {
    logOutButton.style.display = 'none';
    buttonLogIn.style.display = 'block';
    //rimuovere il logout e login nel caso in cui non si è loggati o loggati
  }
});
