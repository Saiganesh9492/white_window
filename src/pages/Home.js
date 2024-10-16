import React from 'react'
import Moto from '../components/Moto'
import BrandExperiences from '../components/BrandExperiences'
import Repersentation from '../components/Representation'
import Heading from '../components/Heading'
import MainRepresentation from '../components/MainRepresentation'
import History from '../components/History'
import HistoryHeading from '../components/HistoryHeading'
import Nish from '../components/Nish'

const Home = () => {

  return (
    <div className='text-center'>
      <Heading />
      <MainRepresentation />
      <Repersentation />
      <Nish/>
      <HistoryHeading/>
      <History />
      <BrandExperiences />
      <Moto />
    </div>

  )
}

export default Home