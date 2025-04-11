import BookDTO from "../dto/bookDto";

let books: BookDTO[] = []

const fetchBooks = () => {
    return books;
};

export default { fetchBooks };