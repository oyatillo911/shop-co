import React from 'react'
import Homehero from './homeSections/homeHero/Homehero'
import HomeOneSection from './homeSections/homeoneSection/HomeOneSection'
import HomeTwoSection from './homeSections/homeTwoSection/HomeTwoSection'
import HomeThreeSection from './homeSections/homThreeSection/HomeThreeSection'
import HomeFourSection from './homeSections/homeFourSection/HomeFourSection'

function Home({productData}) {
  return (
    <>
    <Homehero/>
    <HomeOneSection/>
    <HomeTwoSection productData={productData} />
    <HomeThreeSection/>
    <HomeFourSection/>
    </>
  )
}

export default Home