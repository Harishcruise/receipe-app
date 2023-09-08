import { View, Text } from 'react-native'
import React from 'react'

const WrapBackground = ({style,children}) => {
  return (
    <View className="flex-1 items-center pt-10 bg-light-200">
    {children}
    </View>
  )
}

export default WrapBackground