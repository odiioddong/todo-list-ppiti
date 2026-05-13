const todoServices = require("../services/todoServices");

exports.getTodos = (req, res) => {
  const todos = todoServices.getTodos();

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(todos));
};

exports.createTodo = (req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const data = JSON.parse(body);

    if (
      !data.task ||
      data.task.trim() === ""
    ) {
      res.writeHead(400, {
        "Content-Type": "text/plain",
      });

      return res.end(
        "Task tidak boleh kosong"
      );
    }

    const todo =
      todoServices.createTodo(
        data.task
      );

    res.writeHead(201, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(todo));
  });
};