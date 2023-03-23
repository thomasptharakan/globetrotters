import React from 'react'
import moment from 'moment';
import axios from "axios";
import { useState, useEffect } from 'react';
import popData from '../assets/data/population-data.json'


const Population = (props) => {

  const location = props.location;

  const currDate = moment(Date()).format("MMMM YYYY");

  return (

    <div className="stat place-items-center">
      <div className="stat-title text-white">Population of {location}</div>
      <div className="stat-value text-secondary">{((popData[location]) * 1).toLocaleString()}</div>
      <div className="stat-desc text-white">As of {currDate}</div>
    </div>
  )
}

export default Population