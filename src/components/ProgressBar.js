import { View, Text } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';

const ProgressBar = ({first,middle,last}) => {
  return (
    <View className='flex flex-row gap-2 justify-center'>
      <Progress.Bar color='#060813' style={{borderEndEndRadius:0,borderTopEndRadius:0,backgroundColor:"#E0E0E0",borderWidth:0,height:6}} progress={first} width={100} />
      <Progress.Bar color='#060813' style={{borderRadius:0,backgroundColor:"#E0E0E0",borderWidth:0,height:6}} progress={middle} width={100} />
      <Progress.Bar color='#060813' style={{borderTopLeftRadius:0,borderBottomLeftRadius:0,backgroundColor:"#E0E0E0",borderWidth:0,height:6}} progress={last} width={100} />
    </View>
  )  
}

export default ProgressBar