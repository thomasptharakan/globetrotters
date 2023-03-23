import React from "react";

function LocationCard({ country, countryDescription, cityDescription, image }) {
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
