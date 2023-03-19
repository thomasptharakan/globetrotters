import React from 'react'
import moment from 'moment';

const Population = (props) => {
const location = props.location;
const currDate = moment(Date()).format("MMMM YYYY");
  return (
    
      <div className="stat place-items-center">
        <div className="stat-title">Population</div>
        <div className="stat-value">{location}</div>
        <div className="stat-desc">As of {currDate}</div>
      </div>

  )
}

export default Population