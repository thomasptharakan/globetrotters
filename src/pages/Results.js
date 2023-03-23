import React from "react";
import LocationCard from "../components/LocationCard";
import Stats from "../components/Stats";
import Image from '../components/Image'
import { useLocation } from "react-router-dom";
import countryData from '../assets/data/country-data.json';
import CarouselDiv from "../components/CarouselDiv";

function Results(props) {


  const location = useLocation();
  const country = location.state.location;
  const city = countryData[country].capital
  const imageArray = Image(`${country}`);

console.log(imageArray);
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-6xl mb-6 text-secondary">{country} <span className="text-2xl text-cyan-600">{city}</span></h1>
      <div className="grid mb-6">
        <div className="mt-2 grid ">
          <LocationCard
            country={country}
            population="3 million"
            countryDescription={countryData[country]['description-country']}
            cityDescription={countryData[country]['description-city']}
            image={imageArray}
          />
          <Stats location={country} city={city} />
        </div>
           <CarouselDiv imageArray={imageArray}   />
      </div>
    </div>
  );
}

export default Results;
