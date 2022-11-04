import React from "react";
import DarkSvg from "./DarkSvg";
import LightSvg from "./LightSvg";

const Theme = ({ theme, changeTheme }) => {
  return (
    <div className={!theme ? "theme" : "theme-dark"}>
      <button className="themebutton" onClick={changeTheme}>
        {!theme ? "LIGHT" : "DARK"}
      </button>
      {theme == true ? <DarkSvg /> : <LightSvg />}
    </div>
  );
};

export default Theme;
