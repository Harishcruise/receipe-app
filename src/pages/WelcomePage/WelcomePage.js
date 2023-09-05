import { View, TouchableOpacity } from 'react-native'
import {ProgressBar} from '../../components'
import {LabelLink} from '../../Typography'
import {CustomButton1} from '../../components/Buttons' 
import React, { useState } from 'react'
import WelcomeSection1 from '../WelcomePage/WelcomeSection1'
import WelcomeSection2 from '../WelcomePage/WelcomeSection2'
import WelcomeSection3 from '../WelcomePage/WelcomeSection3'

const WelcomePage = () => {
  
  const [step, setStep] = useState(1);

  const val = {
    1:WelcomeSection1,
    2:WelcomeSection2,
    3:WelcomeSection3,
  }

  const progressVal = {
    1:{
      first:1,
      middle:0,
      last:0,
    },
    2:{
      first:1,
      middle:1,
      last:0,
    },
    3:{
      first:1,
      middle:1,
      last:1,
    }
  }

  const CurrentView = val[step];
  const CurrentVal = progressVal[step];

  return (
    <View style={{gap:32}} className='flex py-[70px] px-3 items-center'>
      <ProgressBar first={CurrentVal.first} middle={CurrentVal.middle} last={CurrentVal.last}  />
      
      <View style={{gap:30}} className='flex'>
       
       {<CurrentView/>}
       
       <View style={{gap:10}} className='flex items-center'>
       <CustomButton1 style={{width:"85%"}} onPress={()=>setStep(step+1)}>Get started</CustomButton1>
       <TouchableOpacity>
       <LabelLink style={{fontSize:14,color:"#666666"}}> Skip </LabelLink>
       </TouchableOpacity>   
       </View>
      </View>

    </View>
  )
}

export default WelcomePage