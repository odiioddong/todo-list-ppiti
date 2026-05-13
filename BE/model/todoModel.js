class Todo {
  constructor(id, task, status = false) {
    this.id = id;
    this.task = task;
    this.status = status;
  }
}

module.exports = Todo;