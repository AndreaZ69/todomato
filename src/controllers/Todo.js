/** @format */

import { ModelTodo } from '../models/Todo.js';

class ControllerTodo {
  constructor() {
    this.todo = JSON.parse(localStorage.getItem('todos')) ?? [];
    this.todoCompleted = JSON.parse(localStorage.getItem('todosCompleted')) ?? [];
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todo));
  }
  saveTodosCompleted() {
    localStorage.setItem('todosCompleted', JSON.stringify(this.todoCompleted));
  }

  addTodo(nomeAttivita, description, userId) {
    const todo = new ModelTodo(nomeAttivita, description, userId);
    this.todo.push(todo);
    this.saveTodos();
    return todo;
  }

  moveTodoToCompleted(todo) {
    const completedList = document.getElementById('completed-list');
    const completedItem = document.createElement('li');
    const completeButton = document.createElement('button');
    const completeImg = document.createElement('img');

    completedItem.textContent = `${todo.nomeAttivita}: ${todo.description}`;

    this.todoCompleted.push(todo);
    this.saveTodosCompleted();
    this.deleteTodo(todo.todoId);

    completeImg.src = './assets/img/eraseButton-03.svg';
    completeImg.width = 20;
    completeImg.height = 20;
    completeImg.alt = 'Elimina';

    completedList.appendChild(completedItem);
    completeButton.appendChild(completeImg);
    completedItem.appendChild(completeButton);

    completeButton.addEventListener('click', () => {
      this.deleteTodoCompleted(todo.todoId);
      completedItem.remove();
    });
  }
  readTodo(todoId) {
    return this.todo.find(element => element.todoId === todoId);
  }

  updateTodoName(todoId, newName) {
    const todo = this.readTodo(todoId);
    if (todo) {
      todo.nomeAttivita = newName;
    }
  }

  updateTodoDescription(todoId, newDescription) {
    const todo = this.readTodo(todoId);
    if (todo) {
      todo.description = newDescription;
    }
  }

  deleteTodo(todoId) {
    this.todo = this.todo.filter(todo => todo.todoId !== todoId);
    this.saveTodos();
  }

  deleteTodoCompleted(todoId) {
    this.todoCompleted = this.todoCompleted.filter(todo => todo.todoId !== todoId);
    this.saveTodosCompleted();
  }

  // delete(todoId) {
  //   function onFilter(element) {
  //     return element.todoId !== todoId;
  //   }

  //   this.todoCompleted = this.todoCompleted.filter(onFilter)

  // }
}

export { ControllerTodo };
