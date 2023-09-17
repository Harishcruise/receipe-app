import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { WrapBackground } from '../../../components/Background'
import Flyer from './Flyer'
import Cuisine from './Cuisine'

const ExplorePage = () => {
  return (
    <WrapBackground feedBack={true}>
    
    <View className='px-3 pt-3'>
    <Flyer/>
    </View>
    
    <ScrollView contentContainerStyle={{gap:24,padding:12}}>

    <Cuisine/>

    </ScrollView>

    </WrapBackground>
  )
}

export default ExplorePage