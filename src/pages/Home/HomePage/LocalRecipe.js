import { View, ScrollView } from 'react-native'
import React from 'react'
import { LabelBlack } from '../../../Typography'
import { CustomCard, LocalRecipeCard } from '../../../components/Cards'

const LocalRecipe = () => {
  return (
    <View style={{gap:12}} className='flex w-[100%]'>
      <LabelBlack style={{fontSize:20}}>Local recipes</LabelBlack>

      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{gap:12}} horizontal>
      <LocalRecipeCard authorSource={{uri:"https://plus.unsplash.com/premium_photo-1661543038302-e6da2933e921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"}} source={{uri:"https://images.unsplash.com/photo-1624000961428-eeece184988b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"}} authorName='Alison Roman'>Simple Honey, food wow</LocalRecipeCard>
      <LocalRecipeCard authorSource={{uri:"https://images.unsplash.com/photo-1598346762291-aee88549193f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}} source={{uri:"https://images.unsplash.com/photo-1585297099723-06aa3d049fbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"}} authorName='Marie' >Simple Honey, food wow</LocalRecipeCard>
      </ScrollView>
      </View>
  )
}

export default LocalRecipe