import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import OutlinedCard from "./components/Card/Card";
import "./App.css";

function App() {
  const [covidData, setCovidData] = useState([]);

  // here we will call the useEffect to set the data....
  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCovidData(data);
      });
  }, []);
  return (
    <div>
      <NavBar />
      <div className="cardsCollection">{console.log(covidData)}</div>
    </div>
  );
}

export default App;
