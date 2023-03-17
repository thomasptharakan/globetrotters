import React from "react";
import LocationCard from "../components/LocationCard";
// import LineChart from "../components/LineChart";
import Stats from "../components/Stats";
// import MapCard from "../components/MapCard";
import Image from '../components/Image'

function Results() {

  const city = "Madrid"
  const country = "Spain"


  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-6xl mb-6">{city} <span className="text-2xl">{country}</span></h1>
      <div className="grid mb-6">
        <Stats population="3,000,000" covid="145" flights="1,200" />
        
        {/* <Carousel /> */}
        <div className="mt-2 grid ">
        <LocationCard
          city={city}
          population="3 million"
          description="Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby. Sydney Tower’s outdoor platform, the Skywalk, offers 360-degree views of the city and suburbs."
          image={Image(`${country} ${city}`)}
        />
        {/* <MapCard /> */}
        </div>
      </div>

    {/* <LineChart /> */}

    </div>
  );
}

export default Results;
