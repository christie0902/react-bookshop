import React from "react";
import LoginForm from "./LoginForm";

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
    </>
  );
};

export default MainContent;
