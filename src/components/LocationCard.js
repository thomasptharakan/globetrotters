import React from 'react'

function LocationCard({city, population, description, image}) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl transition ease-in-out hover:-transition-y-1 hover:scale-105">
  <figure><img src={image} alt="City Image" /></figure>
  <div className="card-body">
    <h2 className="card-title">{city}</h2>
    <h3>Population: {population}</h3>
    <p>{description}</p>
  </div>
</div>
  )
}

export default LocationCard