import mongoose from "mongoose";
import { authorSchema } from "../author/author.js";

const bookSchema = mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    publisher: { type: String },
    price: { type: Number },
    pages: { type: Number },
    author: authorSchema,
  },
  { versionKey: false }
);

const Book = mongoose.model("book", bookSchema);

export default Book;
