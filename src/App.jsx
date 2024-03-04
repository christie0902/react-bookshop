import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import TopMenu from "./components/TopMenu";
import books from "./data/book";
import Book from "./components/Book";

function App() {
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState("");
  const [user, setUser] = useState("");
  const [booksInCart, setBooksInCart] = useState("0");

  return (
    <div className="app">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        user={user}
        setUser={setUser}
      />
      <MainContent currentPage={currentPage} user={user} setUser={setUser} />
      Books in cart: {booksInCart}
      <h1>List of Books</h1>
      <ul style={{ textAlign: "left" }}>
        {books.map((book) => (
          <li key={book.id}>
            <Book
              title={book.title}
              author={book.author}
              booksInCart={booksInCart}
              setBooksInCart={setBooksInCart}
            />
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default App;
