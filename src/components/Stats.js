import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import Weather from "./Weather"



function Stats({ flights, countrySearch, population }) {
  const [covidData, setCovidtData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.covid19api.com/summary");

      for(let i = 0; i < result.data.Countries.length; i++){
        try {
          if(result.data.Countries[i].Country === countrySearch){
            setCovidtData({
              date: result.data.Countries[i].Date,
              new: result.data.Countries[i].NewConfirmed,
            });
          }  
        } catch (error) {
          console.log(error)
        } 
      }
    };
    fetchData();
  }, []);

  const newDate = moment(covidData.date).format("Do MMMM YYYY");

  return (
    <div className="stats shadow-xl w-full">
      <div className="stat place-items-center">
        <div className="stat-title">Population</div>
        <div className="stat-value">{population}</div>
        <div className="stat-desc">As of January 2023</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">New Confirmed Covid Cases in {countrySearch}</div>
        <div className="stat-value text-secondary">{covidData.new}</div>
        <div className="stat-desc text-secondary">As of {newDate}</div>
      </div>

      <Weather />

    </div>
  );
}

export default Stats;
