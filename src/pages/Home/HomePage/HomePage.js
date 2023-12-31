import { ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { WrapBackground } from '../../../components/Background'
import Trending from './Trending'
import CookNow from './CookNow'
import FoodStories from './FoodStories'
import FamousChefs from './FamousChefs'
import Flyer from './Flyer'
import LocalRecipe from './LocalRecipe'

const HomePage = () => {
  return (
    <WrapBackground feedBack={true}>
    <ScrollView contentContainerStyle={{gap:24,padding:12}}>
      
      <Flyer/>

      <Trending/>

      <CookNow/>

      <FoodStories/>

      <FamousChefs/>

      <LocalRecipe/>

    </ScrollView>
    </WrapBackground>
  )
}

export default HomePage