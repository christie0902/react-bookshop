import React, { useContext } from "react";
import { useState } from "react";
import Context from "./Context";

const Book = ({ id, title, authors, img, price }) => {
  const [isInCart, setIsInCart] = useState(false);
  const {
    state: { totalPrice, shoppingCart },
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
      Price: {price} <br />
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
