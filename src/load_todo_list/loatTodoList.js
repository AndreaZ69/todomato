/** @format */

function loadTodos(controllerTodo, controllerTimer, addTodoToDOM) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const addedTodoIds = new Set();

  todos.forEach(todo => {
    if (!addedTodoIds.has(todo.todoId)) {
      addTodoToDOM(todo, controllerTodo, controllerTimer);
      addedTodoIds.add(todo.todoId);
    }
  });
}

function loadCompleted(controllerTodo) {
  const todos = JSON.parse(localStorage.getItem('todosCompleted')) || [];
  const addedTodoIds = new Set();

  todos.forEach(todo => {
    if (!addedTodoIds.has(todo.todoId)) {
      controllerTodo.moveTodoToCompleted(todo);
      addedTodoIds.add(todo.todoId);
    }
  });
}

export { loadTodos, loadCompleted };
