import express from "express";
import { databaseConnect } from "../config/db/index.js";

const databaseConnection = await databaseConnect();

const books = [
  {
    id: 1,
    title: "O Senhor dos Anéis",
  },
  {
    id: 2,
    title: "O Hobbit",
  },
];

const findBookIndex = (id) => {
  return books.findIndex((book) => book.id === id);
};

const app = express();

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
  const index = findBookIndex(parseInt(req.params.id));

  res.status(200).json(books[index]);
});

app.post("/books", (req, res) => {
  books.push(req.body);

  res.status(201).send("Livro cadastrado com sucesso!");
});

app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = findBookIndex(id);

  books[index] = {
    id,
    ...req.body,
  };

  res.status(200).json(books);
});

app.delete("/books/:id", (req, res) => {
  const index = findBookIndex(parseInt(req.params.id));

  books.splice(index, 1);

  res.status(204).send();
});

export default app;
