import React, { useState,useEffect } from 'react'
import axios from 'axios';
import res_data from './1.json';

const Weather = (props) => {
  const [weather,setWeather]   = useState("");
  // const uri = `https://api.openweathermap.org/data/2.5/forecast?q=${props.location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  
  function createCard(resdata)  {
    let weather =[];
    for (let i in resdata.list){
      let dateObj = new Date(resdata.list[i].dt_txt);
      const currentTime = new Date();
      if (dateObj > currentTime) {
        if (dateObj.getHours() == 12){
          let temp = Number(resdata.list[i].main.feels_like);
          console.log(temp);
          let icn = "https://openweathermap.org/img/wn/"+ resdata.list[i].weather[0].icon + "@2x.png";
          console.log(icn);
        }
      }
    }
  }


  React.useEffect(() => {
  //   axios.get(uri)
  //   .then(function(res){
  //       console.log(res.data);
  //       setWeather(res.data);
  //   });
    console.log(`This is the data`);
  // console.log(res_data);
  // console.log(res_data.city.name)
  // console.log(res_data.list[0].dt);
  createCard((res_data));
  

  },[]);

  

  return (
    <React.Fragment>
        {/* {weather} */}
    </React.Fragment>

  )
}
export default Weather;
