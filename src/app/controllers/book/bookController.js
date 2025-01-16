import Book from "../../models/book/book.js";

class BookController {
  static async getAllBooks(req, res) {
    const booksList = await Book.find({});

    res.status(200).json(booksList);
  }

  static async getBookById(req, res) {
    const book = await Book.findById(req.params.id);

    res.status(200).json(book);
  }

  static async addBook(req, res) {
    const newBook = new Book(req.body);

    await newBook.save();

    res.status(201).json(newBook);
  }

  static async updateBook(req, res) {
    await Book.findOneAndUpdate({ _id: req.params.id }, req.body);

    const updatedBook = await Book.findById(req.params.id);
    res.status(200).json(updatedBook);
  }

  static async deleteBook(req, res) {
    await Book.deleteOne({ _id: req.params.id });

    res.status(204).send();
  }
}

export default BookController;
