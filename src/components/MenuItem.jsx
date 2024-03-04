import React from "react";

const MenuItem = ({ currentPage, setCurrentPage, href, label }) => {
  return (
    <a
      className={`link ${currentPage === href ? "link--highlighted" : ""}`}
      href={href}
      onClick={() => {
        setCurrentPage(href);
      }}
    >
      {label}
    </a>
  );
};

export default MenuItem;
