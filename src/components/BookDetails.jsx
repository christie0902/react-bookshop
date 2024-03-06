import React from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  return <div>BookDetails {id}</div>;
};

export default BookDetails;
