import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LabelGray, LabelBlack } from '../../Typography'

const TabSwitch = ({overview,ingredients,calories}) => {

    const [state, setState] = useState('overview')

  return (
    <View className='w-[100%]'>
      <View style={{gap:8}} className='flex items-center justify-center flex-row w-[100%] bg-light-700 h-14 rounded-[50px]'>

        <TouchableOpacity onPress={()=>setState('overview')} style={state==='overview' ?{backgroundColor:"#F3F3F3",borderRadius:24,borderWidth:1,borderColor:"#DDDDDD"}:{}} className='flex items-center justify-center w-[98px] h-[41px]'>
            {state === 'overview' ? <LabelBlack style={{fontSize:14}}>Overview</LabelBlack> :  <LabelGray style={{fontSize:14}}>Overview</LabelGray>}   
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setState('ingredients')} style={state==='ingredients' ?{backgroundColor:"#F3F3F3",borderRadius:24,borderWidth:1,borderColor:"#DDDDDD"}:{}} className='flex items-center justify-center w-[98px] h-[41px]' >
            {state === 'ingredients' ? <LabelBlack style={{fontSize:14}}>Ingredients</LabelBlack> :  <LabelGray style={{fontSize:14}}>Ingredients</LabelGray>} 
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setState('calories')} style={state==='calories' ?{backgroundColor:"#F3F3F3",borderRadius:24,borderWidth:1,borderColor:"#DDDDDD"}:{}} className='flex items-center justify-center w-[98px] h-[41px]' >
            {state === 'calories' ? <LabelBlack style={{fontSize:14}}>Calories</LabelBlack> :  <LabelGray style={{fontSize:14}}>Calories</LabelGray>}  
        </TouchableOpacity>
      </View>

      <View className='w-[100%]'>
          {state === 'overview'? overview : state === 'ingredients' ? ingredients : calories}
      </View>
    </View>
  )
}

export default TabSwitch