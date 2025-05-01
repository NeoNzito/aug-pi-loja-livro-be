import { Request, Response } from "express";
import bookService from "../services/bookService";
import CreateBookDTO from "../dto/createBookDto";


const createBook = (req: Request, res: Response) => {
    const book: CreateBookDTO = req.body;
    const createdBook = bookService.createBook(book);
    res.json(createdBook);
}

const getBooks = (req: Request, res: Response) => {
    const books = bookService.fetchBooks();
    res.json(books);
}

const getOneBookById = (req: Request, res: Response) => {
    const { bookId } = req.params;
    const book = bookService.fetchOneBookById(bookId);
    res.json(book);
}

const updateBook = (req: Request, res: Response) => {
    const { bookId } = req.params;
    const book = req.body;
    console.log("Book: ", book);
    const updatedBook = bookService.updateBook(bookId, book);
    console.log("Updated Book: ", updatedBook);
    res.json(updatedBook);
}

const deleteOneBook = (req: Request, res: Response) => {
    const { bookId } = req.params;
    const book = bookService.deleteOneBook(bookId);
    res.json(book);
}


export default { 
    createBook,
    getBooks,
    getOneBookById,
    updateBook,
    deleteOneBook,
};