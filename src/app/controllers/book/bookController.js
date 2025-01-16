import Book from "../../models/book/book.js";

class BookController {
  static async getAllBooks(_, res) {
    try {
      const booksList = await Book.find({});

      res.status(200).json(booksList);
    } catch (error) {
      res
        .status(500)
        .json({ detail: `Error when get all books: ${error.message}` });
    }
  }

  static async getBookById(req, res) {
    try {
      const book = await Book.findById(req.params.id);

      res.status(200).json(book);
    } catch (error) {
      res
        .status(500)
        .json({ detail: `Error when get all books: ${error.message}` });
    }
  }

  static async addBook(req, res) {
    try {
      const newBook = await Book.create(req.body);

      res
        .status(201)
        .json({ detail: "Book created successfully!", book: newBook });
    } catch (error) {
      res
        .status(500)
        .json({ detail: `Error when created a new book: ${error.message}` });
    }
  }

  static async updateBook(req, res) {
    try {
      await Book.findOneAndUpdate({ _id: req.params.id }, req.body);

      const updatedBook = await Book.findById(req.params.id);
      res.status(200).json(updatedBook);
    } catch (error) {
      res
        .status(500)
        .json({ detail: `Error when get all books: ${error.message}` });
    }
  }

  static async deleteBook(req, res) {
    try {
      await Book.deleteOne({ _id: req.params.id });

      res.status(204).send();
    } catch (error) {
      res
        .status(500)
        .json({ detail: `Error when get all books: ${error.message}` });
    }
  }
}

export default BookController;
