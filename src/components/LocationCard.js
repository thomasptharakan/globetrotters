import React from "react";

function LocationCard({ country ,description, image }) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-2xl">
      <figure>
        <img
          src={image}
          alt="destination"
          className="rounded-lg m-4 min-h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl transition hover:text-cyan-600">{country}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default LocationCard;
