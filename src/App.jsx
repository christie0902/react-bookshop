import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import TopMenu from "./components/TopMenu";

function App() {
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState("");
  const [user, setUser] = useState("");

  return (
    <div className="app">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        user={user}
        setUser={setUser}
      />
      <MainContent currentPage={currentPage} user={user} setUser={setUser} />
      <Footer />
    </div>
  );
}

export default App;
