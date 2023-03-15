import React from 'react'

function CovidCard() {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nrscotland.gov.uk%2Fstatistics-and-data%2Fstatistics%2Fstatistics-by-theme%2Fvital-events%2Fgeneral-publications%2Fweekly-and-monthly-data-on-births-and-deaths%2Fdeaths-involving-coronavirus-covid-19-in-scotland&psig=AOvVaw0-nqYdmWahgcPbBJEm30Ls&ust=1678993833524000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNj23cjR3v0CFQAAAAAdAAAAABAE" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
  )
}

export default CovidCard