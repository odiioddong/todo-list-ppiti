const http = require("http");

const todoRoutes = require("./routes/todoRoutes");

const server = http.createServer(
  (req, res) => {
    todoRoutes(req, res);
  }
);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(
    `Server berjalan di port ${PORT}`
  );
});