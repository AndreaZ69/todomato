/** @format 3889*/

const buttonLogIn = document.getElementById('btnLogIn');
const buttonLogOn = document.getElementById('btnLogOn');
const buttonToDoMato = document.getElementById('btnToDoMato');
const nav = document.getElementById('indexNav');

document.addEventListener('DOMContentLoaded', () => {
  let currentUser = localStorage.getItem('userLogged');

  if (!!currentUser) {
    buttonLogIn.style.display = 'none';
    buttonLogOn.style.display = 'none';
    buttonToDoMato.style.display = 'block';
    let objectUser = JSON.parse(currentUser);
    let loggedUserName = objectUser.username;
    const loggedUserNamep = document.createElement('p');
    loggedUserNamep.classList.add('loggedUserText');

    loggedUserNamep.innerHTML = 'Bentornato utente <b>' + loggedUserName + '</b>!';
    nav.appendChild(loggedUserNamep);

    const logOutButton = document.createElement('button');
    logOutButton.classList.add('btnLogIn');
    logOutButton.textContent = 'LogOut';
    nav.appendChild(logOutButton);

    logOutButton.addEventListener('click', () => {
      localStorage.removeItem('userLogged');
      logOutButton.style.display = 'none';
      buttonLogIn.style.display = 'block';
      buttonLogOn.style.display = 'block';
      buttonToDoMato.style.display = 'none';
      loggedUserNamep.style.display = 'none';
    });
  } else {
    buttonLogIn.style.display = 'block';
    buttonLogOn.style.display = 'block';
    buttonToDoMato.style.display = 'none';
  }
});
