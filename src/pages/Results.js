import React from "react";
import LocationCard from "../components/LocationCard";
import Stats from "../components/Stats";
import Image from '../components/Image'
import { useLocation } from "react-router-dom";

function Results(props) {

  const city = "Capital"
  const location = useLocation();
  const country = location.state.location;
console.log(`The country from the search is ${country}`);
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-6xl mb-6">{country} <span className="text-2xl">{city}</span></h1>
      <div className="grid mb-6">
        <Stats location={country} city={city} />
        
        {/* <Carousel /> */}
        <div className="mt-2 grid ">
        <LocationCard
          country={country}
          population="3 million"
          description="Text About Country Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby. Sydney Tower’s outdoor platform, the Skywalk, offers 360-degree views of the city and suburbs."
          image={Image(`${country}`)}
        />
        {/* <MapCard /> */}
        </div>
      </div>

    {/* <LineChart /> */}

    </div>
  );
}

export default Results;
