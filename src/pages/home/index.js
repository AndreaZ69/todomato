/** @format */

const nav = document.getElementById('indexNav');
const loginDiv = document.getElementById('loginDiv');
const welcomeDiv = document.getElementById('welcomeDiv');

const loginLink = document.createElement('a');
loginLink.href = '../login/';
loginLink.id = 'loginLink';

const logonLink = document.createElement('a');
logonLink.href = '../register/';
logonLink.id = 'logonLink';

const todomatoLink = document.createElement('a');
todomatoLink.href = '../../todomato.html';
todomatoLink.id = 'todomatoLink';

const buttonLogIn = document.createElement('button');
buttonLogIn.classList.add('btnLogIn');
buttonLogIn.id = 'btnLogIn';
buttonLogIn.textContent = 'Login';

const buttonLogOn = document.createElement('button');
buttonLogOn.classList.add('btn-primary');
buttonLogOn.id = 'btnLogOn';
buttonLogOn.textContent = 'Registrati';

const buttonToDoMato = document.createElement('button');
buttonToDoMato.classList.add('btn-primary');
buttonToDoMato.id = 'btnToDoMato';
buttonToDoMato.textContent = 'ToDoMato';

const logOutButton = document.createElement('button');
logOutButton.classList.add('btnLogIn');
logOutButton.textContent = 'LogOut';

document.addEventListener('DOMContentLoaded', () => {
  let currentUser = localStorage.getItem('userLogged');

  if (!!currentUser) {
    loginLink.remove();
    welcomeDiv.appendChild(todomatoLink);
    logonLink.remove();
    todomatoLink.appendChild(buttonToDoMato);

    let objectUser = JSON.parse(currentUser);
    let loggedUserName = objectUser.username;
    const loggedUserNamep = document.createElement('p');
    loggedUserNamep.classList.add('loggedUserText');

    loggedUserNamep.innerHTML = 'Bentornato utente <b>' + loggedUserName + '</b>!';
    nav.appendChild(loggedUserNamep);
    nav.appendChild(logOutButton);

    
    logOutButton.addEventListener('click', () => {
      localStorage.removeItem('userLogged');

      loginDiv.appendChild(loginLink);
      welcomeDiv.appendChild(logonLink);
      todomatoLink.remove();
      loginLink.appendChild(buttonLogIn);
      logonLink.appendChild(buttonLogOn);

      logOutButton.style.display = 'none';
      loggedUserNamep.style.display = 'none';
    });
  } else {
    
    loginDiv.appendChild(loginLink);
    welcomeDiv.appendChild(logonLink);
    todomatoLink.remove();
    loginLink.appendChild(buttonLogIn);
    logonLink.appendChild(buttonLogOn);
    
  }
});
