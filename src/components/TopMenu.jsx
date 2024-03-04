import React, { useState } from "react";
import MenuItem from "./MenuItem";
const TopMenu = ({ currentPage, setCurrentPage }) => {
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);

  return (
    <>
      {open ? (
        <div className="menu">
          <MenuItem
            href="#"
            currentPage={currentPage}
            label="home"
            setCurrentPage={setCurrentPage}
          />
          <MenuItem
            href="#about"
            currentPage={currentPage}
            label="about"
            setCurrentPage={setCurrentPage}
          />
          <MenuItem
            href="#contact"
            currentPage={currentPage}
            label="contact"
            setCurrentPage={setCurrentPage}
          />
          <MenuItem
            href="#login"
            currentPage={currentPage}
            label="login"
            setCurrentPage={setCurrentPage}
          />
        </div>
      ) : (
        <div className="burger-menu" onClick={openMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </>
  );
};

export default TopMenu;
