import React from "react";

//destructuring props and entering and returning html using tailwind css/ daisy ui classes
function LocationCard({ countryDescription, cityDescription }) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-lg mb-6 ">
      <div className="card-body">
        <p>{countryDescription}</p>
        <p>{cityDescription}</p>
      </div>
    </div>
  );
}

export default LocationCard;
