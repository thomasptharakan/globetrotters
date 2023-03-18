import React from "react";

function LocationCard({ city, country ,description, image }) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-2xl">
      <figure>
        <img
          src={image}
          alt="destination"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl">{city}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default LocationCard;
