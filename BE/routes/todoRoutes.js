const todoController = require("../controller/todoController");

const todoRoutes = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (
    url === "/todos" &&
    method === "GET"
  ) {
    return todoController.getTodos(
      req,
      res
    );
  }

  if (
    url === "/todos" &&
    method === "POST"
  ) {
    return todoController.createTodo(
      req,
      res
    );
  }

  res.writeHead(404, {
    "Content-Type": "text/plain",
  });

  res.end("Route tidak ditemukan");
};

module.exports = todoRoutes;