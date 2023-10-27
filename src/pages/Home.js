import React from 'react'
import Featureproduct from '../components/FeatureProduct/Featureproduct'
import NewArrivel from '../components/NewArrivel/NewArrivel'
import News from '../components/News/News'
import Servicess from '../components/Servicess/Servicess'
import Slider from '../components/Slider/Slider'
import SpecialOffer from '../components/SpecialOffer/SpecialOffer'

export default function Home() {
  return (
    <div>
      <Slider/>
      <Servicess/>
      <Featureproduct/>
      <NewArrivel/>
      <SpecialOffer/>
      <News/>
    </div>
  )
}
