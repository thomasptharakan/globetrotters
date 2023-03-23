import React from 'react'
import { useState, useEffect } from 'react';
import moment from 'moment/moment';
import axios from 'axios';
import covidDataBackup from "../assets/data/covid-data-backup.json"

const Covid = (props) => {

  //saving country using props
  const countrySearch = props.location;

  //using useState to save covid data as required when using useEffect
  const [covidData, setCovidData] = useState("");

  //using useEffect to ensure api call only occurs once per component load
  useEffect(() => {
    const fetchData = async () => {

      //using await to ensure app waits for the response from the api 
      const result = await axios("https://api.covid19api.com/summary");

      //below if statement checks to see if api is caching, and if so check backup data instead of doign an api call
      if (result.data.Message == "Caching in progress") {
        for (let i = 0; i < covidDataBackup.Countries.length; i++) {
          console.log()
          if (covidDataBackup.Countries[i].Country === countrySearch) {
            setCovidData({
              date: moment(covidDataBackup.Countries[i].Date).format("Do MMMM YYYY"),
              newCases: covidDataBackup.Countries[i].NewConfirmed,
            });
          }
        }
      }
      else {

        //looping through data returned from api call and saving the data with the correct country
        for (let i = 0; i < result.data.Countries.length; i++) {
          try {
            if (result.data.Countries[i].Country === countrySearch) {
              setCovidData({
                date: moment(result.data.Countries[i].Date).format("Do MMMM YYYY"),
                newCases: result.data.Countries[i].NewConfirmed,
              });
            }
          } catch (error) {
            console.log(error)
          }
        }
      }
    };
    fetchData();
  }, [countrySearch]);

  //returns covid data using tailwind UI
  return (
    // returns covid data
    <div className="stat place-items-center">
      <div className="stat-title text-white">New Confirmed Covid Cases</div>
      <div className="stat-value text-secondary">{((covidData.newCases)*1).toLocaleString()}</div>
      <div className="stat-desc text-white">As of {covidData.date}</div>
    </div>
  )
}

export default Covid