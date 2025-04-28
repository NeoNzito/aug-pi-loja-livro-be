import CreateBookDTO from "../dto/createBookDto";
import BookDTO from "../dto/bookDto";
import { v4 as uuid } from "uuid";

let books: BookDTO[] = []

const createBook = (book: CreateBookDTO): BookDTO => {
    const id = uuid();
    const bookWithId: BookDTO = { id, ...book };
    books.push(bookWithId);
    return bookWithId;
}

const fetchOneBookById = (id: string): BookDTO | undefined => {
    const book = books.find(b => b.id === id);
    return book;
}

const fetchBooks = (): BookDTO[] => {
    return books;
};

const updateBook = (id: string, bookData: CreateBookDTO): BookDTO | undefined => {
    const book = fetchOneBookById(id);
    if (!book) {
        return undefined;
    }
    books.map(b => b.id === id ? { ...b, ...bookData }: BookDTO);
    return book;
}

const deleteOneBook = (id: string): BookDTO | undefined => {
    const book = fetchOneBookById(id);
    if (!book) {
        return undefined;
    }

    books.filter(b => b.id !== id);
    return book;
}

export default { 
    createBook,
    fetchOneBookById, 
    fetchBooks,
    updateBook,
    deleteOneBook,
};