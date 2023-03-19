import React from 'react'
import { useState,useEffect } from 'react';
import moment from 'moment/moment';
import axios from 'axios';

const Covid = (props) => {
    
    const countrySearch = props.location;
    const [covidData, setCovidData] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios("https://api.covid19api.com/summary");
  
        for(let i = 0; i < result.data.Countries.length; i++){
          try {
            if(result.data.Countries[i].Country === countrySearch){
              setCovidData({
                date: moment(result.data.Countries[i].Date).format("Do MMMM YYYY"),
                newCases: result.data.Countries[i].NewConfirmed,
              });
            }  
          } catch (error) {
            console.log(error)
          } 
        }
      };
      fetchData();
    }, [countrySearch]);

  return (
    
    <div className="stat place-items-center">
    <div className="stat-title">New Confirmed Covid Cases in {countrySearch}</div>
    <div className="stat-value text-secondary">{covidData.newCases}</div>
    <div className="stat-desc text-secondary">As of {covidData.date}</div>
  </div>
  )
}

export default Covid