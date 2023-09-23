import { View, ScrollView } from 'react-native'
import React from 'react'
import { LabelBlack } from '../../../Typography'
import { CustomCard } from '../../../components/Cards'

const FoodStories = () => {
  return (
    <View style={{gap:12}} className='flex w-[100%]'>
      <LabelBlack style={{fontSize:20}}>Stories on foods</LabelBlack>

      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{gap:12}} horizontal>
      <CustomCard height={140} width={120} source={{uri:"https://images.unsplash.com/photo-1643892548578-d0a056dd2ee5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"}}>Gordon Ramsay</CustomCard>
      <CustomCard height={140} width={120} source={{uri:"https://images.unsplash.com/photo-1571757392712-7c1052de7ce5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"}}>Jamie Oliver</CustomCard>
      <CustomCard height={140} width={120} source={{uri:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"}}>Karan Sharma</CustomCard>

      </ScrollView>
      </View>
  )
}

export default FoodStories