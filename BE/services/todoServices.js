const Todo = require("../model/todoModel");
const todos = require("../data/todos");

exports.createTodo = (task) => {
  const todo = new Todo(
    Date.now(),
    task,
    false
  );

  todos.push(todo);

  return todo;
};

exports.getTodos = () => {
  return todos;
};