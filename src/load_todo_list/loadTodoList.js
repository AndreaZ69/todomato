/** @format */

function loadTodos(controllerTodo, controllerTimer, addTodoToDOM) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const currentUser = JSON.parse(localStorage.getItem('userLogged'));
  const userId = currentUser.id;

  const addedTodoIds = new Set();

  todos.forEach(todo => {
    if (todo.userId === userId && !addedTodoIds.has(todo.todoId)) {
      addTodoToDOM(todo, controllerTodo, controllerTimer);
      addedTodoIds.add(todo.todoId);
    }
  });
}

function loadCompleted(controllerTodo) {
  const todosCompleted = JSON.parse(localStorage.getItem('todosCompleted')) || [];
  const currentUser = JSON.parse(localStorage.getItem('userLogged'));
  const userId = currentUser.id;

  const addedTodoIds = new Set();

  todosCompleted.forEach(todo => {
    if (todo.userId === userId && !addedTodoIds.has(todo.todoId)) {
      controllerTodo.moveTodoToCompleted(todo);
      addedTodoIds.add(todo.todoId);
    }
  });
}

export { loadTodos, loadCompleted };

//
