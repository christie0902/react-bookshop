import React, { useContext, useEffect, useState } from "react";
import Book from "./Book";
import CurrencyContext from "./CurrencyContext";
import Context from "./Context";

const BookList = ({ booksInCart, setBooksInCart }) => {
  const [bookList, setBookList] = useState([]);
  const [page, setPage] = useState(1);

  const {
    state: { currency },
    dispatch,
  } = useContext(Context);

  const loadData = async () => {
    const response = await fetch(
      `https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php?page=${page}`
    );
    const data = await response.json();
    setBookList(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ul style={{ textAlign: "left" }}>
      <h4>You can buy these book in {currency}</h4>
      <div className="book-list">
        {bookList.map((book) => (
          <li className="book-item" key={book.id}>
            <Book
              title={book.title}
              authors={book.authors.map((author) => author.name)}
              img={book.image}
              price={book.price}
              booksInCart={booksInCart}
              setBooksInCart={setBooksInCart}
            />
          </li>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => {
            page > 1 && setPage(page - 1);
            loadData();
          }}
        >
          Previous
        </button>
        {page}
        <button
          onClick={() => {
            setPage(page + 1);
            loadData();
          }}
        >
          Next
        </button>
      </div>
    </ul>
  );
};

export default BookList;
