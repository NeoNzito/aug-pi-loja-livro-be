import { Request, Response } from "express";
import bookService from "../services/bookService";
import CreateBookDTO from "../dto/createBookDto";


const createBook = (req: Request, res: Response) => {
    const book: CreateBookDTO = req.body;
    console.log(book);
    const createdBook = bookService.createBook(book);
    console.log(createdBook);
    res.json(createdBook);
}

const getBooks = (req: Request, res: Response) => {
    const books = bookService.fetchBooks();
    console.log(books);
    res.json(books);
}

const getOneBookById = (req: Request, res: Response) => {
    const { id } = req.params;
    const book = bookService.fetchOneBookById(id);
    res.json(book);
}

const updateBook = (req: Request, res: Response) => {
    const { id } = req.params;
    const book: CreateBookDTO = req.body;
    const updatedBook = bookService.updateBook(id, book);
    res.json(updatedBook);
}

const deleteOneBook = (req: Request, res: Response) => {
    const { id } = req.params;
    const book = bookService.deleteOneBook(id);
    res.json(book);
}


export default { 
    createBook,
    getBooks,
    getOneBookById,
    updateBook,
    deleteOneBook,
};