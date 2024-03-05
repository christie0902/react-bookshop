import React from "react";
import TopMenu from "./TopMenu";
import SearchBox from "./SearchBox";
import CurrencySelection from "./CurrencySelection";
import CurrencyContext from "./CurrencyContext";
import { useContext } from "react";
import Context from "./Context";

const Header = ({ currentPage, setCurrentPage, user, setUser }) => {
  const {
    state: { currency },
    dispatch,
  } = useContext(Context);

  return (
    <header className="header">
      <div className="header__sitename">Flourish and Blotts</div>
      <TopMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {user && <h1>Hi {user.name}</h1>}
      <SearchBox />
      <CurrencySelection />
      We take payments in {currency}
    </header>
  );
};

export default Header;
