import { View, StatusBar, Text, TouchableWithoutFeedback, Keyboard} from 'react-native'
import React from 'react'

const WrapBackground = ({style,children,feedBack=false}) => {
  return (

    <TouchableWithoutFeedback disabled={feedBack} onPress={Keyboard.dismiss} accessible={false}>
    <View className="pt-10 bg-light-200 flex-1"> 
    {children}
    </View>
    </TouchableWithoutFeedback>
    
  )
}

export default WrapBackground