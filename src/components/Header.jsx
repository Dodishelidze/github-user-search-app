import React from "react";
import Theme from "./Theme";

const Header = ({ changeTheme, theme }) => {
  return (
    <div className="Header">
      <h1 className={!theme ? "title" : "title-dark"}>devfinder</h1>
      <Theme changeTheme={changeTheme} theme={theme} />
    </div>
  );
};

export default Header;
