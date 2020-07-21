import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import OutlinedCard from "./components/Card/Card";
import "./App.css";

function App() {
  const [covidData, setCovidData] = useState({
    Global: {},
    Countries: [],
  });

  const [filteredList, setFilteredList] = useState([]);

  const setInputChange = (event) => {
    setFilteredList(
      covidData.Countries.filter((item) => {
        return item.Country.toLowerCase().includes(
          event.target.value.toLowerCase()
        );
      })
    );
  };

  // here we will call the useEffect to set the data....
  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCovidData({ Global: data.Global, Countries: data.Countries });
        setFilteredList(data.Countries)
      });
  }, []);
  return (
    <div>
      <NavBar setInputChange={setInputChange} />
      <div className="cardsCollection">
        {filteredList.map((item) => (
          <OutlinedCard
            key={item.CountryCode}
            Country={item.Country}
            CountryCode={item.CountryCode}
            Slug={item.Slug}
            NewConfirmed={item.NewConfirmed}
            TotalConfirmed={item.TotalConfirmed}
            NewDeaths={item.NewDeaths}
            TotalDeaths={item.TotalDeaths}
            NewRecovered={item.NewRecovered}
            TotalRecovered={item.TotalRecovered}
            Date={item.Date}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
