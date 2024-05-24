<!-- @format -->

# Todomato

Una WebApp che combina una ToDoList con la tecnica del pomodoro per gestire le proprie attività impostando dei timer.

## Introduzione

Todomato ti aiuta a gestire le tue attività quotidiane utilizzando la tecnica del pomodoro, migliorando così la tua produttività. Puoi creare, leggere, aggiornare e cancellare le tue attività e impostare timer per gestire il tempo dedicato a ciascuna di esse.

<!-- ## Screenshot -->

<!-- ![Screenshot della WebApp](path/to/screenshot.png) -->

## Features

### _Versione 1.0.0_

- Come utente voglio poter creare un account
- Come utente voglio poter fare login e logout dall'applicazione
- Come utente voglio poter modificare i miei dati
- Come utente voglio poter creare una todo list
- Come utente voglio poter modificare e cancellare gli elementi nella todo
- Come utente voglio poter cancellare la todo list
- Come utente voglio poter creare un timer
- Come utente voglio poter impostare la durata del timer
- Come utente voglio poter mettere il timer in pausa e riavviarlo
- Come utente voglio poter cancellare un timer
<!-- - Visualizzazione dello stato delle attività e dei timer -->

## Documentazione

- User
  - create
  - read
  - update
  - delete
  - get
- Todo
  - addTodo
  - readTodo
  - updateTodo
  - updateTodoDescription
  - deleteTodo
  - getTodo
- Timer
  - create
  - read
  - update
  - delete

## Struttura base dati

La struttura dati identifica tre entità principali: User, Todo, Timer.

## Modelli costruttori

Modelli costruttori presenti:

- Timer
- Todo
- TodoTimer (ponte tra Timer e Todo)
- User

## Credits

Questo progetto è sviluppato da:

- **Alessio Di Noto** - [GitHub](https://github.com/AlessioDiNoto)
- **AndreaZ69** - [GitHub](https://github.com/AndreaZ69)
- **Emanuele Fava** - [GitHub](https://github.com/EmanueleFava)
- **Francesco Urso** - [GitHub](https://github.com/francesco-urso)
