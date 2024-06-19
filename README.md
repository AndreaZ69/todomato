<!-- @format -->

# Todomato

- [**ToDoMato**](./src/todomato.html)

Una WebApp che combina una ToDoList con la tecnica del pomodoro per gestire le proprie attività impostando dei timer.

## Descrizione

Questa applicazione web offre un gestore di timer, un gestore di attività (todo) e un gestore di utenti.  
Gli utenti possono:

- Registrarsi ed accedere.
- Creare, leggere, aggiornare, mettere in pausa, riprendere e cancellare i timer
- Gestire le attività con funzionalità di aggiunta, lettura, aggiornamento e cancellazione dei todo.

## Funzionalità principali

Introdotto nella v1.0.0

### Timer

1. **Creazione del Timer**: Possibilità di creare un timer con durata specifica, configurabile come Pomodoro.
2. **Lettura del Timer**: Restituisce il tempo rimanente in minuti e secondi.
3. **Aggiornamento del Timer**: Consente di aggiornare il tempo di fine del timer.
4. **Sessioni Pomodoro**: Gestisce automaticamente le sessioni Pomodoro, alternando tra lavoro, pause brevi e lunghe.
5. **Pausa e Ripresa**: Funzioni per mettere in pausa e riprendere il timer.
6. **Cancellazione del Timer**: Permette di cancellare un timer esistente.

### Todo

1. **Aggiunta di Attività**: Consente di aggiungere nuove attività con nome e descrizione.
2. **Lettura di Attività**: Permette di leggere i dettagli di una specifica attività tramite il suo ID.
3. **Aggiornamento di Attività**: Consente di aggiornare il nome e la descrizione di una specifica attività.
4. **Cancellazione di Attività**: Permette di cancellare una specifica attività tramite il suo ID.

Introdotto nella v2.0.0

### Utenti

1. **Creazione Utente**: Consente di creare un nuovo utente con username, nome, email e password.
2. **Autenticazione Username**: Consente di autenticare un utente tramite username e password.
3. **Autenticazione Email**: Consente di autenticare un utente tramite email e password.

### Login

1. **Form di Login**: Consente agli utenti di autenticarsi tramite username o email e password.

### Registrazione

1. **Form di Registrazione**: Consente agli utenti di registrarsi creando un nuovo account.

### TodoMato

1. **Gestione Attività e Timer**: Consente agli utenti di gestire le attività e i timer direttamente dall'interfaccia utente.

Introdotto nella v2.1.0

### TodoMato

1. **Pulsante logout**: Consente agli utenti di poter effettuare il logout.

### Login

1. **Login**: Salvataggio della sessione utente.

## Struttura del Progetto

- `src/controllers/Timer.js`: Contiene la logica del controller per la gestione dei timer.
- `src/models/Timer.js`: Modello di dati per rappresentare i timer.
- `src/controllers/Todo.js`: Contiene la logica del controller per la gestione delle attività.
- `src/models/Todo.js`: Modello di dati per rappresentare le attività.
- `src/controllers/Users.js`: Contiene la logica del controller per la gestione degli utenti.
- `src/models/Users.js`: Modello di dati per rappresentare gli utenti.
- `src/login.js`: Gestisce la logica di autenticazione degli utenti.
- `src/register.js`: Gestisce la logica di registrazione degli utenti.
- `src/todomato.js`: Gestisce la logica per la gestione delle attività e dei timer.

## Credits

Questo progetto è sviluppato da:

- **Alessio Di Noto** - [GitHub](https://github.com/AlessioDiNoto)
- **Andrea Militano** - [GitHub](https://github.com/AndreaZ69)
- **Emanuele Fava** - [GitHub](https://github.com/EmanueleFava)
- **Francesco Urso** - [GitHub](https://github.com/francesco-urso)
