import { View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { LabelBlack, LabelGray } from '../../../Typography'
import { CustomCard } from '../../../components/Cards'

const FamousChefs = () => {
  return (
    <View style={{gap:12}} className='flex w-[100%]'>

      <View className='flex flex-row items-center justify-between'>
        <LabelBlack style={{fontSize:20}}>Famous Chefs</LabelBlack>
        <TouchableOpacity><LabelGray style={{fontSize:12}}>See more</LabelGray></TouchableOpacity>
      </View>

      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{gap:12}} horizontal>

      <CustomCard borderRadius={6} style={{alignItems:'center'}} height={86} width={86} source={{uri:"https://plus.unsplash.com/premium_photo-1661543038302-e6da2933e921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"}}>Alison Roman</CustomCard>
      <CustomCard borderRadius={6} style={{alignItems:'center'}} height={86} width={86} source={{uri:"https://images.unsplash.com/photo-1470784790053-6c2f15489967?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80"}}>Eat This!</CustomCard>
      <CustomCard borderRadius={6} style={{alignItems:'center'}} height={86} width={86} source={{uri:"https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"}}>Heavenly Healthy</CustomCard>
      <CustomCard borderRadius={6} style={{alignItems:'center'}} height={86} width={86} source={{uri:"https://images.unsplash.com/photo-1607631568010-a87245c0daf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"}}>Olia Hercules</CustomCard>
      
      </ScrollView>

      </View>
  )
}

export default FamousChefs