import React from "react";
import LoginForm from "./LoginForm";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import BookDetails from "./BookDetails";

const MainContent = ({ currentPage, user, setUser }) => {
  return (
    <>
      {currentPage === "#" ? (
        <main className="main">
          <h1 className="app__headline">React Bookshop</h1>
        </main>
      ) : currentPage === "#login" ? (
        <LoginForm user={user} setUser={setUser} />
      ) : (
        <h1>Content is being prepared</h1>
      )}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </>
  );
};

export default MainContent;
