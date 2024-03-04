import React from "react";
import TopMenu from "./TopMenu";

const Header = ({ currentPage, setCurrentPage, user, setUser }) => {
  return (
    <header className="header">
      <div className="header__sitename">Flourish and Blotts</div>
      <TopMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {user && <h1>Hi {user.name}</h1>}
    </header>
  );
};

export default Header;
