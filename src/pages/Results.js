import React from 'react'
import LocationCard from '../components/LocationCard'
import Carousel from '../components/Carousel'
import CovidCard from '../components/CovidCard'

function Results() {
  return (
    <div className='container mx-auto mt-8'>
        <div className='grid xs:grid-cols-1 md:grid-cols-2 gap-4'>
        <Carousel />
        <LocationCard city="Sydney" population="3 million" description="A cool place to visit and enjoy good weather where people are nice" image="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>
        </div>
    </div>
  )
}

export default Results