import React, { useEffect, useState } from "react";
// import axios from "axios"
import Weather from "./Weather";

// https://api.covid19api.com/summary




function Stats({ flights, covid, population }) {

  const [covidData, setCovidtData] = useState("");

  useEffect(() => {
    // const fetchData = async () => {
    //   const result = await axios(
    //     'https://api.covid19api.com/summary',
    //   );
    //   console.log(result.data.Countries)
    // };
    // fetchData();
  }, []);




  return (
    <div className="stats shadow-xl w-full">
      <div className="stat place-items-center">
        <div className="stat-title">Population</div>
        <div className="stat-value">{population}</div>
        <div className="stat-desc">As of January 2023</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Covid</div>
        <div className="stat-value text-secondary">{covid}</div>
        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
      </div>

      <Weather location="London"/>

      <div className="stat place-items-center">
        <div className="stat-title">Average Flights</div>
        <div className="stat-value">£{flights}</div>
        <div className="stat-desc">Return per person</div>
      </div>
    </div >
  );
}

export default Stats;
