import React from 'react'
import Weather from '../components/Weather';

function Search() {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Search your destination!!</h1>
      <p className="py-6">Find information about your chosen destination including weather to covid information</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">From</span>
          </label>
          <input type="text" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">To</span>
          </label>
          <input type="text" className="input input-bordered" />
          <Weather location="London"/>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent">Search</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Search