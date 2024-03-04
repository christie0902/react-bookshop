import React from "react";
import { useState } from "react";

const Book = ({ id, title, author, booksInCart, setBooksInCart }) => {
  const [isInCart, setIsInCart] = useState(false);
  return (
    <div>
      Title: {title} <br />
      Author: {author}
      {!isInCart ? (
        <button
          onClick={() => {
            setIsInCart(true);
            setBooksInCart(booksInCart + 1);
          }}
        >
          Add to Cart
        </button>
      ) : (
        <button
          onClick={() => {
            setIsInCart(false);
            setBooksInCart(booksInCart - 1);
          }}
        >
          Remove from Cart
        </button>
      )}
    </div>
  );
};

export default Book;
