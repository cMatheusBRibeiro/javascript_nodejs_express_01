import http from "http";

const PORT = 3000;

const rotas = {
  "/": "Curso de Node.js",
  "/express": "Curso de Express",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end(rotas[req.url]);
});

server.listen(PORT, () => {
  console.log("Servidor escutando! http://localhost:3000");
});
