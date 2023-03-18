import React, { useState,useEffect } from 'react'
import axios from 'axios';
import res_data from './1.json';

const Weather = (props) => {
  const [weather,setWeather]   = useState({});
  // const uri = `https://api.openweathermap.org/data/2.5/forecast?q=${props.location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  
  function createCard(resdata)  {
    let highTemp = resdata.list[0].main.feels_like;
    let lowTemp = resdata.list[0].main.feels_like;
    let highTempIcon,lowTempIcon = "https://openweathermap.org/img/wn/"+ resdata.list[0].weather[0].icon + "@2x.png";
    for (let i in resdata.list){
      if (resdata.list[i].main.feels_like > highTemp){
        highTemp = (resdata.list[i].main.feels_like);
        highTempIcon = "https://openweathermap.org/img/wn/"+ resdata.list[i].weather[0].icon + "@2x.png";
      }  
      if (resdata.list[i].main.feels_like < lowTemp){
        lowTemp = resdata.list[i].main.feels_like;
        lowTempIcon = "https://openweathermap.org/img/wn/"+ resdata.list[i].weather[0].icon + "@2x.png";
      } 
    }
    //Convert to Degree Celsius
    highTemp = (highTemp -273.15).toFixed(2);
    lowTemp = (lowTemp - 273.15).toFixed(2);
    setWeather({"HighWeather":highTemp,"HighWeatherIcon":highTempIcon,"LowWeather":lowTemp,"LowWeatherIcon":lowTempIcon})
    
  }

  //Run the request on Page Load
  useEffect(() => {
  //   axios.get(uri)
  //   .then(function(res){
  //       console.log(res.data);
  //       setWeather(res.data);
  //   });
  // console.log(res_data);
  // console.log(res_data.city.name)
  // console.log(res_data.list[0].dt);
    // Set the Card for display
    createCard((res_data));
  },[]);

  

  return (
    <React.Fragment>
        <div className="stat place-items-center">
          <div className="stat-title">Highest Temperature</div>
          <div className="stat-value"><img alt="High Weather Icon" src={weather.HighWeatherIcon}/></div>
          <div className="stat-desc">{weather.HighWeather}°C</div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Lowest Temperature</div>
          <div className="stat-value"><img alt="Low Weather Icon" src={weather.LowWeatherIcon}/></div>
          <div className="stat-desc">{weather.LowWeather}°C</div>
        </div>
    </React.Fragment>

  )
}
export default Weather;