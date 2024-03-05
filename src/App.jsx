import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import TopMenu from "./components/TopMenu";
import books from "./data/book";
import Book from "./components/Book";
import BookList from "./components/BookList";
import CurrencyContext from "./components/CurrencyContext";
import Context from "./components/Context";
import reducer from "./components/reducer";

function App() {
  const [count, setCount] = useState(0);
  const [currency, setCurrency] = useState("EUR");
  const [currentPage, setCurrentPage] = useState("#");
  const [user, setUser] = useState("");
  const [state, dispatch] = useReducer(reducer, {
    page: "",
    user: null,
    theme: "light",
    language: "en",
    currency: "USD",
    authHash: null,
    shoppingCart: [],
    totalPrice: 0,
    exchangeRate: 1,
  });
  console.log(state.shoppingCart);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {/* <CurrencyContext.Provider value={{ currency, setCurrency }}> */}
      <div className="app">
        <Header
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          user={user}
          setUser={setUser}
        />
        <MainContent currentPage={currentPage} user={user} setUser={setUser} />

        <h2 style={{ color: "red" }}>
          Books in cart: {state.shoppingCart.length}
        </h2>
        <h2 style={{ color: "blue" }}>Total price: {state.totalPrice}</h2>

        <h1>List of Books</h1>
        <BookList />
        <Footer />
      </div>
      {/* </CurrencyContext.Provider> */}
    </Context.Provider>
  );
}

export default App;
