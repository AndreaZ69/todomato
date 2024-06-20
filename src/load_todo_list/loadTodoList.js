/** @format */

function loadTodos(controllerTodo, controllerTimer, addTodoToDOM) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const currentUser = JSON.parse(localStorage.getItem('userLogged'));
  const userId = currentUser.id;

  todos.forEach(todo => {
    if (todo.userId === userId) {
      addTodoToDOM(todo, controllerTodo, controllerTimer);
    }
  });
}

function loadCompleted(controllerTodo) {
  const todosCompleted = JSON.parse(localStorage.getItem('todosCompleted')) || [];
  const currentUser = JSON.parse(localStorage.getItem('userLogged'));
  const userId = currentUser.id;

  todosCompleted.forEach(todo => {
    if (todo.userId === userId) {
      controllerTodo.moveTodoToCompleted(todo);
    }
  });
}

export { loadTodos, loadCompleted };
//
