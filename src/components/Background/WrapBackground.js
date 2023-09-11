import { View, Text, TouchableWithoutFeedback, Keyboard} from 'react-native'
import React from 'react'

const WrapBackground = ({style,children}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View className="flex-1 items-center pt-10 bg-light-200"> 
    {children}
    </View>
    </TouchableWithoutFeedback>
    
  )
}

export default WrapBackground