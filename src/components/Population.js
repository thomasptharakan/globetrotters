import React from 'react'
import moment from 'moment';

const Population = (props) => {
const location = props.location;
const currDate = moment(Date()).format("MMMM YYYY");
  return (
    
      <div className="stat place-items-center">
        <div className="stat-title text-cyan-600">Population</div>
        <div className="stat-value text-secondary">{location}</div>
        <div className="stat-desc text-cyan-800">As of {currDate}</div>
      </div>
  )
}

export default Population