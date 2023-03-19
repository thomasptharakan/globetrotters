import React from "react";
import Weather from "./Weather"
import Covid from "./Covid";
import Population from "./Population";



function Stats({ location }) {
  console.log(location);
  return (
    <div className="stats shadow-xl w-full">
      <Population location={location}/>
      <Covid location={location} />
      <Weather location={location}/>
    </div>
  );
}

export default Stats;