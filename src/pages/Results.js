import React, {useState, useEffect} from "react";
import LocationCard from "../components/LocationCard";
import Stats from "../components/Stats";
import Image from "../components/Image"

function Results() {
  const [location, setLocation] = useState("")

  const city = "Dubai"
  const country = "United Arab Emirates"

  console.log(Image)

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-6xl mb-6">{city} <span className="text-2xl">{country}</span></h1>
      <div className="grid mb-6">
        <Stats population="3,000,000" countrySearch={country} flights="1,200" />
        <div className="mt-2 grid ">
        <LocationCard
          city={city}
          country={country}
          population="3 million"
          description="Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby. Sydney Tower’s outdoor platform, the Skywalk, offers 360-degree views of the city and suburbs."
          image="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        />
        </div>
      </div>

    {/* <img src=`${Image}` /> */}

    <Image />


    </div>
  );
}

export default Results;
