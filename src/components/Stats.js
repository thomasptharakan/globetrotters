import React from "react";
import Weather from "./Weather"
import Covid from "./Covid";
import Population from "./Population";


//destructuring props into country and city values for when components are called
function Stats({ location , city }) {
  // console.log(location);
  return (
    <div className="stats shadow-xl w-full bg-neutral text-neutral-content">
      <Population location={location}/>
      <Covid location={location} />
      <Weather location={city}/>
    </div>
  );
}

export default Stats;