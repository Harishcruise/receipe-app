import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { WrapBackground } from '../../components/Background'
import { HeaderSecondVariant } from '../../components/Header'
import { setting } from '../../../assets/images'
import { LabelBlack, LabelGray } from '../../Typography'
import { FollowChefCard } from '../../components/Cards'

const Profile = ({navigation}) => {
  return (
    <WrapBackground>
      <HeaderSecondVariant rightOnPress={()=>navigation.navigate('setting')} backIconColor='#FFE5EC' style={{height:255,elevation:5,backgroundColor:"#FFE5EC",borderBottomLeftRadius:40,borderBottomRightRadius:40}} rightIcon={<Image source={setting} className='w-6 h-6 mt-[1px]' />}>
      
      <View style={{shadowColor: '#000',shadowOffset: { height: 2 },shadowOpacity:  0.2,shadowRadius: 3,elevation:5}} className=' w-[100%] flex items-center px-11 pt-16'>

      <View style={{gap:12}} className='w-[100%] h-[180px] flex bg-[#FFFFFF] rounded-[10px] items-center py-5'>
          <Image className='bg-light-800 w-20 h-20 rounded'/>
          <LabelBlack style={{fontSize:20}}>Harish</LabelBlack>
          <LabelGray style={{fontSize:16,color:"#0E8345"}}>12 Liked Recipes</LabelGray>
      </View>

      </View>
      </HeaderSecondVariant>

      <View style={{gap:12}} className='flex px-4 w-[100%] mt-20'>
      <LabelBlack style={{fontSize:20}}>Followed Chefs</LabelBlack>
      
      <ScrollView contentContainerStyle={{gap:12,paddingHorizontal:4}}>
      <FollowChefCard/>
      <FollowChefCard/>
      <FollowChefCard/>
      <FollowChefCard/>
      </ScrollView>
      
      </View>
    </WrapBackground>
  )
}

export default Profile