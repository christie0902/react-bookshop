import React, { useContext } from "react";
import { useState } from "react";
import Context from "./Context";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import BookDetails from "./BookDetails";

const Book = ({ id, title, authors, img, price }) => {
  const [isInCart, setIsInCart] = useState(false);
  const {
    state: { totalPrice, shoppingCart, currency, exchangeRate },
    dispatch,
  } = useContext(Context);
  const addToCart = (title, price) => {
    dispatch({
      type: "book/add-to-cart",
      payload: {
        title,
        price,
      }, //or the whole book object
    });
  };
  const removeFromCart = (title, price) => {
    dispatch({
      type: "book/remove-from-cart",
      payload: {
        price,
        title,
      },
    });
  };
  return (
    <div>
      Title: {title} <br />
      <img src={img} alt="book image" />
      <br />
      Author:
      {authors.join(", ")} <br />
      Price: {price * exchangeRate + currency} <br />
      <Link to={"/book/" + id}>Details</Link>
      {!isInCart ? (
        <button
          onClick={() => {
            setIsInCart(true);
            addToCart(title, price);
          }}
        >
          Add to Cart
        </button>
      ) : (
        <button
          onClick={() => {
            setIsInCart(false);
            removeFromCart(title, price);
          }}
        >
          Remove from Cart
        </button>
      )}
    </div>
  );
};

export default Book;
