import { IncomingMessage, ServerResponse } from "http";
import bookService from "../services/bookService";


const createBook = () => {

}

const getBooks = (req: IncomingMessage, res: ServerResponse) => {
    const books = bookService.fetchBooks();
    res.writeHead(200, { 'Content-Type': "application/json" });
    res.end(JSON.stringify(books));
}

const getOneBook = () => {

}

const deleteOneBook = () => {

}


export default { 
    createBook,
    getBooks,
    getOneBook,
    deleteOneBook,
};