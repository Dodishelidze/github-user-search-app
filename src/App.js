import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import UserProfile from "./components/UserProfile";

function App() {
  const [theme, setTheme] = useState(true);
  const [data, setData] = useState({});
  const [sInput, setSinput] = useState();
  const [date, setDate] = useState("");

  const getData = async (username) => {
    await fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response);
        modifyDate(response.created_at);
        setSinput("");
      });
  };

  const modifyDate = (date) => {
    let joined = new Date(date);
    let formateddate =
      joined.getDate() +
      ", " +
      joined.toLocaleString("en-us", { month: "short" }) +
      " " +
      joined.getFullYear();
    setDate(formateddate);
    console.log(formateddate);
  };

  const changeTheme = () => {
    setTheme(!theme);
  };

  const callSeatSearch = () => {
    getData(sInput);
  };

  const setSearchValue = (value) => {
    setSinput(value);
  };

  return (
    <>
      <div className={!theme ? "App-dark" : "App"}>
        <Header theme={theme} changeTheme={changeTheme} />
        <Search
          theme={theme}
          callSeatSearch={callSeatSearch}
          setSearchValue={setSearchValue}
          sInput={sInput}
        />
        <UserProfile data={data} date={date} theme={theme} />
      </div>
    </>
  );
}

export default App;
