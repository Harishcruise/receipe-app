import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { LabelBlack, LabelGray } from '../../../Typography'
import { CustomCard } from '../../../components/Cards'

const Trending = () => {
  return (
    <View className='flex w-[100%]'>

      <View className='flex flex-row items-center justify-between'>
        <LabelBlack style={{fontSize:20}}>Trending foods</LabelBlack>
        <TouchableOpacity><LabelGray style={{fontSize:12}}>See more</LabelGray></TouchableOpacity>
      </View>

      <View className='flex w-[100%] flex-wrap flex-row py-3 justify-around'>

      <CustomCard height={93} width={175} source={{uri:"https://images.unsplash.com/photo-1588413336310-4cd4f2ca3c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}}>Dalgona Coffee</CustomCard>
      <CustomCard height={93} width={175} source={{uri:"https://plus.unsplash.com/premium_photo-1661419883163-bb4df1c10109?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"}}>Butter Chicken</CustomCard>
      <CustomCard height={93} width={175} source={{uri:"https://images.unsplash.com/photo-1630409351217-bc4fa6422075?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1876&q=80"}}>Mugali Pulav</CustomCard>
      <CustomCard height={93} width={175} source={{uri:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"}}>Dum Biriyani</CustomCard>
      
      </View>

      </View>
  )
}

export default Trending