import express from "express";
import { databaseConnect } from "../config/db/index.js";
import { Book } from "../models/index.js";

await databaseConnect();

const app = express();

// middleware
app.use(express.json());

app.get("/", (_, res) => {
  res.status(200).send("Hello World");
});

app.get("/books", async (_, res) => {
  const booksList = await Book.find({});

  res.status(200).json(booksList);
});

app.get("/books/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);

  res.status(200).json(book);
});

app.post("/books", async (req, res) => {
  const newBook = new Book(req.body);

  await newBook.save();

  res.status(201).json(newBook);
});

app.put("/books/:id", async (req, res) => {
  await Book.findOneAndUpdate({ _id: req.params.id }, req.body);

  const updatedBook = await Book.findById(req.params.id);
  res.status(200).json(updatedBook);
});

app.delete("/books/:id", async (req, res) => {
  await Book.deleteOne({ _id: req.params.id });

  res.status(204).send();
});

export default app;
