import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  const loadBook = async () => {
    const response = await fetch(
      "https://classes.codingbootcamp.cz/assets/classes/books-api/book.php?id=" +
        id
    );
    const data = await response.json();
    console.log(data);
    setBook(data);
  };

  useEffect(() => {
    loadBook();
  }, [id]);

  return (
    <div>
      <h1>BookDetails {id}</h1>

      {book ? (
        <div>
          <h2>{book.title}</h2>
          <p>{book.description}</p>
        </div>
      ) : (
        "No book"
      )}
    </div>
  );
};

export default BookDetails;
