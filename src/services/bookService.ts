import CreateBookDTO from "../dto/createBookDto";
import BookDTO from "../dto/bookDto";
import { v4 as uuid } from "uuid";

let books: BookDTO[] = [];

const createBook = (book: CreateBookDTO): BookDTO => {
    const id = uuid();
    const bookWithId: BookDTO = { id, ...book };
    books.push(bookWithId);
    console.log(bookWithId);
    return bookWithId;
};

const fetchOneBookById = (id: string): BookDTO | undefined => {
    return books.find(b => b.id === id);
};

const fetchBooks = (): BookDTO[] => {
    return books;
};

const updateBook = (id: string, bookData: Partial<BookDTO>): BookDTO | undefined => {
    const index = books.findIndex(b => b.id === id);
    console.log("ID: ", id, "Book Data:", bookData, "Index?: ", index);
    if (index === -1) return undefined;
    books[index] = { ...books[index], ...bookData };
    return books[index];
};

const deleteOneBook = (id: string): BookDTO | undefined => {
    const index = books.findIndex(b => b.id === id);
    if (index === -1) return undefined;

    const deleted = books[index];
    books.splice(index, 1);
    return deleted;
};

export default {
    createBook,
    fetchOneBookById,
    fetchBooks,
    updateBook,
    deleteOneBook,
};
